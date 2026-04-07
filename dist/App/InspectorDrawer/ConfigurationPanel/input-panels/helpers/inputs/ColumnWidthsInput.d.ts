type FixedWidths = [
    number | null | undefined,
    number | null | undefined,
    number | null | undefined,
    number | null | undefined
];
type ColumnsLayoutInputProps = {
    columnsCount: number;
    defaultValue: FixedWidths | null | undefined;
    onChange: (v: FixedWidths | null | undefined) => void;
};
export default function ColumnWidthsInput({ columnsCount, defaultValue, onChange }: ColumnsLayoutInputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ColumnWidthsInput.d.ts.map