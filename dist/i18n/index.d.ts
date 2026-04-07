export type Language = 'en' | 'es';
/**
 * 翻译函数
 * @param key 翻译键，支持嵌套路径，如 'common.emailBuilder'
 * @param params 替换参数，如 { id: '123' } 会替换 {{id}}
 * @param language 可选的语言参数，如果不提供则从 store 读取
 * @returns 翻译后的文本
 */
export declare function t(key: string, params?: Record<string, string | number>, language?: Language): string;
/**
 * 获取当前语言
 */
export declare function getLanguage(): Language;
/**
 * 设置语言（仅更新 localStorage）
 */
export declare function setLanguage(lang: Language): void;
//# sourceMappingURL=index.d.ts.map