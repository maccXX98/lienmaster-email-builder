import { TEditorBlock } from '../../../editor/core';
export type EditorChildrenChange = {
    blockId: string;
    block: TEditorBlock;
    childrenIds: string[];
};
export type EditorChildrenIdsProps = {
    childrenIds: string[] | null | undefined;
    onChange: (val: EditorChildrenChange) => void;
    containerId?: string;
    allowReplace?: boolean;
    fillHeight?: boolean;
};
export default function EditorChildrenIds({ childrenIds, onChange, containerId, allowReplace, fillHeight }: EditorChildrenIdsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map