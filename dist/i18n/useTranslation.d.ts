/**
 * React Hook 用于翻译
 * 会自动从 zustand store 读取当前语言，语言改变时会自动重新渲染
 */
export declare function useTranslation(): {
    t: (key: string, params?: Record<string, string | number>) => string;
    language: import("./index").Language;
};
//# sourceMappingURL=useTranslation.d.ts.map