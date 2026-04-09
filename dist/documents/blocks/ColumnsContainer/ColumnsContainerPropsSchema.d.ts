import { z } from 'zod';
declare const ColumnsContainerPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        padding: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            right: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        columnsCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        columns: z.ZodArray<z.ZodObject<{
            childrenIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }>, "many">;
        fixedWidths: z.ZodNullable<z.ZodOptional<z.ZodTuple<[z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>], null>>>;
        columnsGap: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom", "stretch"]>>>;
    }, "strip", z.ZodTypeAny, {
        columns: {
            childrenIds: string[];
        }[];
        columnsCount?: number | null | undefined;
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
    }, {
        columns: {
            childrenIds: string[];
        }[];
        columnsCount?: number | null | undefined;
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        columns: {
            childrenIds: string[];
        }[];
        columnsCount?: number | null | undefined;
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        columns: {
            childrenIds: string[];
        }[];
        columnsCount?: number | null | undefined;
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
    } | null | undefined;
}>;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema>;
export default ColumnsContainerPropsSchema;
//# sourceMappingURL=ColumnsContainerPropsSchema.d.ts.map