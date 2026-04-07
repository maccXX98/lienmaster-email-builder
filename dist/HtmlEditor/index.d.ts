import { SxProps, Theme } from '@mui/material';
import { Language } from '../i18n';
export type HtmlEditorMode = 'split' | 'code' | 'preview';
export type HtmlEditorDevice = 'desktop' | 'mobile';
export interface HtmlEditorProps {
    /**
     * HTML 代码内容
     */
    value: string;
    /**
     * 代码变化回调
     */
    onChange?: (value: string) => void;
    /**
     * 语言设置，可选值：'zh' | 'en'
     * @default 'en'
     */
    language?: Language;
    /**
     * 初始显示模式：split（左右栏）、code（仅代码）、preview（仅预览）
     * @default 'split'
     */
    initialMode?: HtmlEditorMode;
    /**
     * 初始设备模式：desktop（桌面）、mobile（移动）
     * @default 'desktop'
     */
    initialDevice?: HtmlEditorDevice;
    /**
     * 代码编辑器高度
     * @default '100%'
     */
    codeEditorHeight?: string;
    /**
     * 预览区域高度
     * @default '100%'
     */
    previewHeight?: string;
    /**
     * 自定义样式
     */
    sx?: SxProps<Theme>;
    /**
     * 是否显示工具栏
     * @default true
     */
    showToolbar?: boolean;
    /**
     * 初始代码编辑器主题（themeMap 中的 key）
     * 若本地已有 localStorage 则优先用 localStorage；未传时默认 'dracula'
     */
    initialTheme?: string;
}
export default function HtmlEditor({ value, onChange, language, initialMode, initialDevice, codeEditorHeight, previewHeight, sx, showToolbar, initialTheme, }: HtmlEditorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map