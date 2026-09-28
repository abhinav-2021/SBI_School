import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export function SEO({ title, description }) {
  useDocumentTitle(title, description);
  return null;
}

export default SEO;
