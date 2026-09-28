import { useEffect } from 'react';

export function useDocumentTitle(title, description) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | S.B.I. School, Mundri`
      : 'S.B.I. School, Mundri (Kaithal) | Permanent Recognised';
      
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);
}
