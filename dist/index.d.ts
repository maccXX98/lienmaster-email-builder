/**
 * EmailBuilder - 邮件模板编辑器组件库
 *
 * 这是一个功能完整的邮件模板编辑器，可以在其他 React 项目中使用
 *
 * 向后兼容：所有现有导入方式保持不变
 * - import { EmailBuilder } from 'monto-email-builder' ✅
 * - import EmailBuilder from 'monto-email-builder' ✅
 *
 * 按需加载 HtmlEditor（推荐懒加载 CodeMirror）：
 * - import { HtmlEditor } from 'monto-email-builder/html-editor' ✅
 */
export { default as EmailBuilder } from './EmailBuilder';
export type { EmailBuilderProps, EmailBuilderRef } from './EmailBuilder';
export { default } from './EmailBuilder';
export type { TEditorConfiguration, TEditorBlock } from './documents/editor/core';
export type { Language } from './i18n';
export { useDocument, useLanguage } from './documents/editor/EditorContext';
//# sourceMappingURL=index.d.ts.map