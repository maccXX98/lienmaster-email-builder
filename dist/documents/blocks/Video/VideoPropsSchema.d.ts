import { z } from 'zod';
declare const VideoPropsSchema: z.ZodObject<{
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        width: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        height: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
        linkHref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        loop: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        muted: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        controls: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        height?: string | null | undefined;
        width?: string | null | undefined;
        url?: string | null | undefined;
        autoplay?: boolean | null | undefined;
        controls?: boolean | null | undefined;
        loop?: boolean | null | undefined;
        muted?: boolean | null | undefined;
        alt?: string | null | undefined;
        contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
        linkHref?: string | null | undefined;
    }, {
        height?: string | null | undefined;
        width?: string | null | undefined;
        url?: string | null | undefined;
        autoplay?: boolean | null | undefined;
        controls?: boolean | null | undefined;
        loop?: boolean | null | undefined;
        muted?: boolean | null | undefined;
        alt?: string | null | undefined;
        contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
        linkHref?: string | null | undefined;
    }>>>;
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        padding: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            right: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            bottom: number;
            left: number;
            right: number;
            top: number;
        }, {
            bottom: number;
            left: number;
            right: number;
            top: number;
        }>>>;
        backgroundColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
    }, "strip", z.ZodTypeAny, {
        backgroundColor?: string | null | undefined;
        textAlign?: "left" | "right" | "center" | null | undefined;
        padding?: {
            bottom: number;
            left: number;
            right: number;
            top: number;
        } | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        textAlign?: "left" | "right" | "center" | null | undefined;
        padding?: {
            bottom: number;
            left: number;
            right: number;
            top: number;
        } | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        textAlign?: "left" | "right" | "center" | null | undefined;
        padding?: {
            bottom: number;
            left: number;
            right: number;
            top: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        height?: string | null | undefined;
        width?: string | null | undefined;
        url?: string | null | undefined;
        autoplay?: boolean | null | undefined;
        controls?: boolean | null | undefined;
        loop?: boolean | null | undefined;
        muted?: boolean | null | undefined;
        alt?: string | null | undefined;
        contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
        linkHref?: string | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        textAlign?: "left" | "right" | "center" | null | undefined;
        padding?: {
            bottom: number;
            left: number;
            right: number;
            top: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        height?: string | null | undefined;
        width?: string | null | undefined;
        url?: string | null | undefined;
        autoplay?: boolean | null | undefined;
        controls?: boolean | null | undefined;
        loop?: boolean | null | undefined;
        muted?: boolean | null | undefined;
        alt?: string | null | undefined;
        contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
        linkHref?: string | null | undefined;
    } | null | undefined;
}>;
export default VideoPropsSchema;
export type VideoProps = z.infer<typeof VideoPropsSchema>;
//# sourceMappingURL=VideoPropsSchema.d.ts.map