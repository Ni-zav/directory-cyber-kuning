import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono my-4 border">
        <code className="text-foreground">{code}</code>
      </pre>
      <button 
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-background hover:bg-muted rounded-md transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
