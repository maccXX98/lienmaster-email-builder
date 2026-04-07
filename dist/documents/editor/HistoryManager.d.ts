import { TEditorConfiguration } from './core';
/**
 * 历史记录管理器
 * 负责管理文档的撤销/重做历史记录
 */
export declare class HistoryManager {
    private past;
    private present;
    private future;
    private readonly maxHistorySize;
    constructor(initialDocument: TEditorConfiguration);
    /**
     * 记录新的历史状态
     */
    record(newDocument: TEditorConfiguration): TEditorConfiguration;
    /**
     * 撤销操作
     */
    undo(): TEditorConfiguration | null;
    /**
     * 重做操作
     */
    redo(): TEditorConfiguration | null;
    /**
     * 检查是否可以撤销
     */
    canUndo(): boolean;
    /**
     * 检查是否可以重做
     */
    canRedo(): boolean;
    /**
     * 获取当前状态
     */
    getPresent(): TEditorConfiguration;
    /**
     * 重置历史记录（用于外部重置文档时）
     */
    reset(newDocument: TEditorConfiguration): void;
    /**
     * 深拷贝文档（使用 JSON 方法，简单高效）
     */
    private deepClone;
    /**
     * 比较两个文档是否相等（简单比较，用于避免重复记录）
     */
    private isEqual;
}
//# sourceMappingURL=HistoryManager.d.ts.map