import { type JSX } from 'react';
type RawSliderInputProps = {
    iconLabel: JSX.Element;
    step?: number;
    marks?: boolean;
    units: string;
    min?: number;
    max?: number;
    value: number;
    setValue: (v: number) => void;
    ariaLabel?: string;
};
export default function RawSliderInput({ iconLabel, value, setValue, units, ariaLabel, ...props }: RawSliderInputProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RawSliderInput.d.ts.map