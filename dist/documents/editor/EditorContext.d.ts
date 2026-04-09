import { TEditorConfiguration } from './core';
import { Language } from '../../i18n';
export type TextSelectionRange = {
    blockId: string;
    start: number;
    end: number;
};
type TValue = {
    document: TEditorConfiguration;
    selectedBlockId: string | null;
    /** 当前 Text 块内字符选区，用于右侧属性栏「跟随选区」 */
    textSelection: TextSelectionRange | null;
    /** 最近一次在面板中应用选区样式的时间戳；用于避免 re-render 导致选区折叠后误清空 textSelection */
    lastInlineStyleApplyAt: number;
    /** 更新选区时同步的当前块文本快照，用于右侧「选中」预览（未 blur 前 document 未更新） */
    lastTextBlockContent: {
        blockId: string;
        text: string;
    } | null;
    selectedSidebarTab: 'block-configuration' | 'styles';
    selectedMainTab: 'editor' | 'preview' | 'json' | 'html';
    selectedScreenSize: 'desktop' | 'mobile';
    inspectorDrawerOpen: boolean;
    samplesDrawerOpen: boolean;
    imageUploadHandler?: (file: File) => Promise<string>;
    videoUploadHandler?: (file: File) => Promise<string>;
    language: Language;
    onChange?: (document: TEditorConfiguration, html: string) => void;
    saveHandler?: (document: TEditorConfiguration) => void | Promise<void>;
    saveAndExitHandler?: (document: TEditorConfiguration) => void | Promise<void>;
    name: string;
    onNameChange?: (name: string) => void;
    showJsonFeatures: boolean;
    showSamplesDrawerTitle: boolean;
    onSamplesDrawerToggle?: (isOpen: boolean) => void;
    onInspectorDrawerToggle?: (isOpen: boolean) => void;
};
export declare function initializeStore(config?: {
    document?: TEditorConfiguration;
    language?: Language;
    showJsonFeatures?: boolean;
    showSamplesDrawerTitle?: boolean;
}): void;
declare const editorStateStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TValue>>;
export declare function useDocument(): TEditorConfiguration;
export declare function useSelectedBlockId(): string | null;
export declare function useSelectedScreenSize(): "desktop" | "mobile";
export declare function useSelectedMainTab(): "html" | "preview" | "editor" | "json";
export declare function setSelectedMainTab(selectedMainTab: TValue['selectedMainTab']): void;
export declare function useSelectedSidebarTab(): "styles" | "block-configuration";
export declare function useInspectorDrawerOpen(): boolean;
export declare function useSamplesDrawerOpen(): boolean;
export declare function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']): void;
export declare function setTextSelection(range: TValue['textSelection']): void;
export declare function useTextSelection(): TextSelectionRange | null;
/** 在右侧面板应用选区样式后调用，避免随后 re-render 导致选区折叠时误清空 textSelection */
export declare function markLastInlineStyleApply(): void;
export declare function shouldIgnoreCollapsedSelectionForClear(): boolean;
export declare function setLastTextBlockContent(payload: {
    blockId: string;
    text: string;
} | null): void;
export declare function useLastTextBlockContent(): {
    blockId: string;
    text: string;
} | null;
export declare function useLastInlineStyleApplyAt(): number;
export declare function setSidebarTab(selectedSidebarTab: TValue['selectedSidebarTab']): void;
export declare function resetDocument(document: TValue['document']): void;
export declare function setDocument(document: TValue['document'], options?: {
    recordHistory?: boolean;
}): void;
export declare function setOnChange(onChange: TValue['onChange']): void;
export declare function toggleInspectorDrawerOpen(): void;
export declare function toggleSamplesDrawerOpen(): void;
export declare function setSelectedScreenSize(selectedScreenSize: TValue['selectedScreenSize']): void;
export declare function useImageUploadHandler(): ((file: File) => Promise<string>) | undefined;
export declare function setImageUploadHandler(handler: TValue['imageUploadHandler']): void;
export declare function useVideoUploadHandler(): ((file: File) => Promise<string>) | undefined;
export declare function setVideoUploadHandler(handler: TValue['videoUploadHandler']): void;
export declare function useLanguage(): Language;
export declare function setLanguage(lang: Language): void;
export declare function useSaveHandler(): ((document: TEditorConfiguration) => void | Promise<void>) | undefined;
export declare function setSaveHandler(handler: TValue['saveHandler']): void;
export declare function saveDocument(): Promise<void>;
export declare function useSaveAndExitHandler(): ((document: TEditorConfiguration) => void | Promise<void>) | undefined;
export declare function setSaveAndExitHandler(handler: TValue['saveAndExitHandler']): void;
export declare function saveAndExitDocument(onExit: (document: TEditorConfiguration) => void | Promise<void>): void;
export declare function useName(): string;
export declare function setName(name: string): void;
export declare function setOnNameChange(handler: TValue['onNameChange']): void;
export declare function setOnSamplesDrawerToggle(handler: TValue['onSamplesDrawerToggle']): void;
export declare function setOnInspectorDrawerToggle(handler: TValue['onInspectorDrawerToggle']): void;
export declare function useShowJsonFeatures(): boolean;
export declare function setShowJsonFeatures(show: boolean): void;
export declare function useShowSamplesDrawerTitle(): boolean;
export declare function setShowSamplesDrawerTitle(show: boolean): void;
/**
 * 检查是否可以撤销
 */
export declare function canUndo(): boolean;
/**
 * 检查是否可以重做
 */
export declare function canRedo(): boolean;
/**
 * 撤销操作
 */
export declare function undo(): boolean;
/**
 * 重做操作
 */
export declare function redo(): boolean;
/**
 * Hook: 检查是否可以撤销
 */
export declare function useCanUndo(): boolean;
/**
 * Hook: 检查是否可以重做
 */
export declare function useCanRedo(): boolean;
export { editorStateStore };
//# sourceMappingURL=EditorContext.d.ts.map