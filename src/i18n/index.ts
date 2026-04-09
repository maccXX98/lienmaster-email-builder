import i18n from 'i18next';
import { initReactI18next, useTranslation as useI18nextTranslation } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

export type Language = 'en' | 'es';

// react-i18next configuration
export const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

// Detect browser language
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
};

// Get stored language or detect from browser
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('app-language') as Language | null;
  if (stored === 'en' || stored === 'es') return stored;
  return detectBrowserLanguage();
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

// ============================================================
// BACKWARD COMPATIBILITY LAYER
// Kept for components that still use the old custom i18n API
// New code should use useTranslation() hook from react-i18next
// ============================================================

const translations: Record<Language, Record<string, unknown>> = {
  en,
  es,
};

/**
 * Legacy translation function - use useTranslation() hook instead
 * @deprecated Use useTranslation from 'react-i18next' instead
 */
export function t(key: string, params?: Record<string, string | number>, language?: Language): string {
  const lang = language ?? i18n.language as Language;
  const keys = key.split('.');
  let value: unknown = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  if (typeof value !== 'string') {
    return key;
  }

  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() ?? match;
    });
  }

  return value;
}

/**
 * Legacy getLanguage - use useTranslation() hook instead
 * @deprecated Use i18n.language or useTranslation hook instead
 */
export function getLanguage(): Language {
  return i18n.language as Language;
}

/**
 * Legacy setLanguage - use changeLanguage instead
 * @deprecated Use changeLanguage from this module instead
 */
export function setLanguage(lang: Language) {
  changeLanguage(lang);
}

/**
 * Change language and persist to localStorage
 */
export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('app-language', lang);
};

// Re-export useTranslation hook for convenience
export { useI18nextTranslation as useTranslation };
