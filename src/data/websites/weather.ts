
import { Website } from '../types';

export const weatherWebsites: Website[] = [
  {
    id: "bmkg",
    name: "BMKG",
    url: "https://www.bmkg.go.id",
    description: "Badan Meteorologi, Klimatologi, dan Geofisika Indonesia",
    category: ["Cuaca", "Pemerintah", "Informasi"],
    logo: "https://www.bmkg.go.id/logo.png",
    createdAt: "2024-05-01T00:00:00.000Z",
    updatedAt: "2024-05-15T00:00:00.000Z"
  },
  {
    id: "accuweather-id",
    name: "AccuWeather Indonesia",
    url: "https://www.accuweather.com/id/id/jakarta/208971/weather-forecast/208971",
    description: "Prakiraan cuaca akurat untuk wilayah Indonesia",
    category: ["Cuaca", "Prakiraan", "Informasi"],
    logo: "https://www.accuweather.com/logo.png",
    createdAt: "2024-05-01T00:00:00.000Z",
    updatedAt: "2024-05-15T00:00:00.000Z"
  },
  {
    id: "weather-com-id",
    name: "Weather.com Indonesia",
    url: "https://weather.com/id-ID/weather/today/l/IDXX0022:1:ID",
    description: "Informasi cuaca harian dan prakiraan jangka panjang",
    category: ["Cuaca", "Prakiraan", "Informasi"],
    logo: "https://weather.com/logo.png",
    createdAt: "2024-05-01T00:00:00.000Z",
    updatedAt: "2024-05-15T00:00:00.000Z"
  },
  {
    id: "cuacaindo",
    name: "CuacaIndo",
    url: "https://www.cuacaindo.com",
    description: "Prakiraan cuaca Indonesia dengan peta interaktif",
    category: ["Cuaca", "Prakiraan", "Peta"],
    logo: "https://www.cuacaindo.com/logo.png",
    createdAt: "2024-05-01T00:00:00.000Z",
    updatedAt: "2024-05-15T00:00:00.000Z"
  },
  {
    id: "infocuaca",
    name: "InfoCuaca",
    url: "https://infocuaca.com",
    description: "Informasi cuaca dan iklim Indonesia",
    category: ["Cuaca", "Iklim", "Informasi"],
    logo: "https://infocuaca.com/logo.png",
    createdAt: "2024-05-01T00:00:00.000Z",
    updatedAt: "2024-05-15T00:00:00.000Z"
  }
];
