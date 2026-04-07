import React from 'react';
import { TEditorBlock } from '../../../../editor/core';
type BlockMenuButtonProps = {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    block?: TEditorBlock;
    onDragStart?: (block: TEditorBlock) => void;
};
export default function BlockTypeButton({ label, icon, onClick, disabled, block, onDragStart }: BlockMenuButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockButton.d.ts.map