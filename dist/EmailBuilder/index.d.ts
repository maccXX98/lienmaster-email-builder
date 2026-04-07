import React from 'react';
import { Language } from '../i18n';
import { TEditorConfiguration } from '../documents/editor/core';
import theme from '../theme';
export interface EmailBuilderProps {
    /**
     * 邮件模板配置 JSON
     * 当此值变化时，编辑器会自动更新文档内容
     */
    initialDocument?: TEditorConfiguration;
    /**
     * 语言设置，可选值：'zh' | 'en'
     * 当此值变化时，编辑器会自动切换语言
     * @default 'en'
     */
    language?: Language;
    /**
     * 图片上传回调函数
     * 接收 File 对象，返回 Promise<string>，返回图片的 URL
     */
    imageUploadHandler?: (file: File) => Promise<string>;
    /**
     * 视频上传回调函数
     * 接收 File 对象，返回 Promise<string>，返回视频的 URL
     */
    videoUploadHandler?: (file: File) => Promise<string>;
    /**
     * 文档变化时的回调函数
     * 当用户编辑邮件模板时，会调用此函数并传入最新的配置与对应渲染出的 HTML（一一对应，无需再调 getData）
     */
    onChange?: (document: TEditorConfiguration, html: string) => void;
    /**
     * 模板名称
     * 当此值变化时，编辑器会自动更新名称输入框
     */
    initialName?: string;
    /**
     * 名称变化时的回调函数
     * 当用户修改模板名称时，会调用此函数并传入最新的名称
     */
    onNameChange?: (name: string) => void;
    /**
     * 自定义主题（可选）
     * 如果不提供，将使用默认的 Material-UI 主题
     */
    theme?: typeof theme;
    /**
     * 是否显示 JSON 相关功能（JSON tab、下载 JSON、导入 JSON）
     * @default true
     */
    showJsonFeatures?: boolean;
    /**
     * 是否显示左侧边栏标题
     * @default true
     */
    showSamplesDrawerTitle?: boolean;
    /**
     * 左侧面板自定义插槽（在「添加内容块」下方渲染）
     * 传入 React 节点，例如 <MyCustomPanel /> 或 <Box>...</Box>
     */
    leftPanelSlot?: React.ReactNode;
    /**
     * 左侧边栏切换时的回调函数
     * 当用户点击左侧边栏的折叠/展开按钮时调用
     * @param isOpen 侧边栏是否打开
     */
    onSamplesDrawerToggle?: (isOpen: boolean) => void;
    /**
     * 右侧边栏切换时的回调函数
     * 当用户点击右侧边栏的折叠/展开按钮时调用
     * @param isOpen 侧边栏是否打开
     */
    onInspectorDrawerToggle?: (isOpen: boolean) => void;
}
/**
 * EmailBuilder 组件暴露的方法
 */
export interface EmailBuilderRef {
    /**
     * 获取当前的 JSON 和 HTML 数据
     * @param callback 回调函数，接收 json 和 html 作为参数
     */
    getData: (callback: (json: TEditorConfiguration, html: string) => void) => void;
}
/**
 * EmailBuilder 组件
 *
 * 一个功能完整的邮件模板编辑器组件，可以在其他 React 项目中使用
 *
 * @example
 * ```tsx
 * import { EmailBuilder } from 'monto-email-builder';
 *
 * function MyApp() {
 *   const emailBuilderRef = useRef<EmailBuilderRef>(null);
 *
 *   const handleSave = () => {
 *     emailBuilderRef.current?.getData((json, html) => {
 *       // 处理 json 和 html 数据
 *       console.log('JSON:', json);
 *       console.log('HTML:', html);
 *     });
 *   };
 *
 *   return (
 *     <>
 *       <EmailBuilder
 *         ref={emailBuilderRef}
 *         language="zh"
 *         imageUploadHandler={handleImageUpload}
 *         onChange={handleChange}
 *       />
 *       <button onClick={handleSave}>保存</button>
 *     </>
 *   );
 * }
 * ```
 */
declare const EmailBuilder: React.ForwardRefExoticComponent<EmailBuilderProps & React.RefAttributes<EmailBuilderRef>>;
export default EmailBuilder;
export { EmailBuilder };
//# sourceMappingURL=index.d.ts.map