import { useTranslation as useI18nextTranslation } from 'react-i18next';

// Re-export the useTranslation hook from react-i18next
// This maintains backward compatibility with existing code
export function useTranslation() {
  const { t, i18n } = useI18nextTranslation();
  return { t, language: i18n.language as 'en' | 'es' };
}
