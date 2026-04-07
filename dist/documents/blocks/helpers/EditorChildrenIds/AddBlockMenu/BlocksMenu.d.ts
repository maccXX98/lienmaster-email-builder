import { TEditorBlock } from '../../../../editor/core';
type BlocksMenuProps = {
    anchorEl: HTMLElement | null;
    setAnchorEl: (v: HTMLElement | null) => void;
    onSelect: (block: TEditorBlock) => void;
    disableContainerBlocks?: boolean;
    containerType?: string | null;
};
export default function BlocksMenu({ anchorEl, setAnchorEl, onSelect, disableContainerBlocks, containerType }: BlocksMenuProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=BlocksMenu.d.ts.map