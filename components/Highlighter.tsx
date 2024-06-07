import { useEffect } from 'react';
import hljs from 'highlight.js';

const HighlightCode = () => {
  useEffect(() => {
    const highlightCode = () => {
      const nodes = document.querySelectorAll('code');
      nodes.forEach((code: HTMLElement) => {
        hljs.highlightElement(code);
      });
    };

    highlightCode();

    // Re-run highlightCode whenever the component updates
    // to ensure dynamically loaded content is highlighted
    document.addEventListener('DOMContentLoaded', highlightCode);

    return () => {
      document.removeEventListener('DOMContentLoaded', highlightCode);
    };
  }, []);

  return null; // This component doesn't render anything, so return null
};

export default HighlightCode;
