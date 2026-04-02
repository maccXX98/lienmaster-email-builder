import en from './locales/en.json';
import es from './locales/es.json';

export type Language = 'en' | 'es';

const translations: Record<Language, Record<string, any>> = {
  en,
  es,
};

/**
 * 翻译函数
 * @param key 翻译键，支持嵌套路径，如 'common.emailBuilder'
 * @param params 替换参数，如 { id: '123' } 会替换 {{id}}
 * @param language 可选的语言参数，如果不提供则从 store 读取
 * @returns 翻译后的文本
 */
export function t(key: string, params?: Record<string, string | number>, language?: Language): string {
  // 如果没有传入 language，则使用默认的 getLanguage（用于非 React 组件中）
  const lang = language ?? getLanguage();
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // 如果找不到翻译，返回 key 本身
      return key;
    }
  }

  if (typeof value !== 'string') {
    return key;
  }

  // 替换参数
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() ?? match;
    });
  }

  return value;
}

/**
 * 获取当前语言
 */
export function getLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }
  // 从 localStorage 读取，如果没有则 usar navegador idioma
  const stored = localStorage.getItem('app-language') as Language | null;
  if (stored && (stored === 'en' || stored === 'es')) {
    return stored;
  }
  // Detectar idioma del navegador
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
}

/**
 * 设置语言（仅更新 localStorage）
 */
export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('app-language', lang);
  }
}

