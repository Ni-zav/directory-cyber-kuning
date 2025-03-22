
import { Website } from '../types';
import { governmentWebsites } from './government';
import { ecommerceWebsites } from './ecommerce';
import { newsWebsites } from './news';
import { financeWebsites } from './finance';
import { techWebsites } from './tech';
import { transportationWebsites } from './transportation';
import { otherWebsites } from './others';
import { entertainmentWebsites } from './entertainment';
import { educationWebsites } from './education';
import { healthWebsites } from './health';
import { shoppingWebsites } from './shopping';
import { foodWebsites } from './food';
import { travelWebsites } from './travel';
import { socialWebsites } from './social';
import { sportsWebsites } from './sports';
import { jobsWebsites } from './jobs';
import { automotiveWebsites } from './automotive';
import { realestateWebsites } from './realestate';
import { insuranceWebsites } from './insurance';
import { cryptoWebsites } from './crypto';
import { gamingWebsites } from './gaming';
import { lifestyleWebsites } from './lifestyle';
import { marketplaceWebsites } from './marketplace';
import { musicWebsites } from './music';
import { petWebsites } from './pet';
import { photographyWebsites } from './photography';
import { designWebsites } from './design';
import { techCommunityWebsites } from './tech-community';
import { bloggingWebsites } from './blogging';
import { parentingWebsites } from './parenting';
import { forumWebsites } from './forums';
import { mediaWebsites } from './media';
import { weatherWebsites } from './weather';
import { religiousWebsites } from './religious';
import { deliveryWebsites } from './delivery';
import Fuse from 'fuse.js';

// Combine all website arrays into one
export const websites: Website[] = [
  ...governmentWebsites,
  ...ecommerceWebsites,
  ...newsWebsites,
  ...financeWebsites,
  ...techWebsites,
  ...transportationWebsites,
  ...otherWebsites,
  ...entertainmentWebsites,
  ...educationWebsites,
  ...healthWebsites,
  ...shoppingWebsites,
  ...foodWebsites,
  ...travelWebsites,
  ...socialWebsites,
  ...sportsWebsites,
  ...jobsWebsites,
  ...automotiveWebsites,
  ...realestateWebsites,
  ...insuranceWebsites,
  ...cryptoWebsites,
  ...gamingWebsites,
  ...lifestyleWebsites,
  ...marketplaceWebsites,
  ...musicWebsites,
  ...petWebsites,
  ...photographyWebsites,
  ...designWebsites,
  ...techCommunityWebsites,
  ...bloggingWebsites,
  ...parentingWebsites,
  ...forumWebsites,
  ...mediaWebsites,
  ...weatherWebsites,
  ...religiousWebsites,
  ...deliveryWebsites
];

// Create search function with Fuse.js
const fuse = new Fuse(websites, {
  keys: ['name', 'description', 'category', 'url'],
  threshold: 0.3
});

export function searchWebsites(query: string): Website[] {
  if (!query) return websites;
  return fuse.search(query).map(result => result.item);
}

export function getWebsiteById(id: string): Website | undefined {
  return websites.find(website => website.id === id);
}

export function getWebsitesByTag(tag: string): Website[] {
  return websites.filter(website => website.category.includes(tag));
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  websites.forEach(website => {
    website.category.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getLazyLoadedWebsites(
  offset: number,
  limit: number,
  searchQuery: string = '',
  selectedTags: string[] = []
) {
  // First, filter websites based on search query
  let filteredWebsites = searchQuery ? searchWebsites(searchQuery) : [...websites];
  
  // Then filter by tags if any tags are selected
  if (selectedTags.length > 0) {
    filteredWebsites = filteredWebsites.filter(website => 
      selectedTags.some(tag => website.category.includes(tag))
    );
  }
  
  // Get total count before pagination
  const totalItems = filteredWebsites.length;
  
  // Paginate the results
  const paginatedWebsites = filteredWebsites.slice(offset, offset + limit);
  
  // Determine if there are more results
  const hasMore = offset + limit < totalItems;
  
  return {
    websites: paginatedWebsites,
    totalItems,
    hasMore
  };
}
