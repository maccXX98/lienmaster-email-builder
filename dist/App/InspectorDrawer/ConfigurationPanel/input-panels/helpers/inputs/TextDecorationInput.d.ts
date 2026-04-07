export type TextDecorationValue = 'none' | 'underline' | 'line-through' | 'underline line-through';
type Props = {
    label: string;
    defaultValue: string;
    onChange: (value: TextDecorationValue) => void;
};
export default function TextDecorationInput({ label, defaultValue, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextDecorationInput.d.ts.map