import { z } from 'zod';
export declare const EditorBlock: ({ type, data }: import("monto-email-document-core").BlockConfiguration<{
    Button: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            buttonBackgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            buttonStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["rectangle", "pill", "rounded"]>>>;
            buttonTextColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fullWidth: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            size: z.ZodNullable<z.ZodOptional<z.ZodEnum<["x-small", "small", "large", "medium"]>>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }>;
    Container: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
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
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            childrenIds?: string[] | null | undefined;
        }, {
            childrenIds?: string[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    ColumnsContainer: z.ZodObject<{
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
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Heading: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            level: z.ZodNullable<z.ZodOptional<z.ZodEnum<["h1", "h2", "h3"]>>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }>>>;
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Html: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "right", "center"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contents: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            isHtmlEditor: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        }, {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        } | null | undefined;
    }>;
    Image: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
            backgroundColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["center", "left", "right"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            linkHref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
        }, "strip", z.ZodTypeAny, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }>;
    Video: z.ZodObject<{
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
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        }, {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
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
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }>;
    Text: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            textDecoration: z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            markdown: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            inlineRuns: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                style: z.ZodObject<{
                    color: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    backgroundColor: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    fontFamily: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>>;
                    fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
                    fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
                    textDecoration: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>>;
                    lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
                }, "strip", z.ZodTypeAny, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }>, "many">>>;
            inlineLinks: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                href: z.ZodString;
                targetBlank: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }>;
    EmailLayout: z.ZodObject<{
        backdropColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        canvasColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        textColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
        width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }>;
    Spacer: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            height: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        }, "strip", z.ZodTypeAny, {
            height?: number | null | undefined;
        }, {
            height?: number | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }>;
    Divider: z.ZodObject<{
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
            lineColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        }, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        } | null | undefined;
    }>;
    Socials: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            platforms: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>, "many">>>;
            iconStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white", ...("standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white")[]]>>>;
            iconSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            socials: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                platform: z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>;
                url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        }, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
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
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }>;
}>) => React.JSX.Element;
export declare const EditorBlockSchema: z.ZodEffects<z.ZodDiscriminatedUnion<"type", any>, import("monto-email-document-core").BlockConfiguration<{
    Button: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            buttonBackgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            buttonStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["rectangle", "pill", "rounded"]>>>;
            buttonTextColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fullWidth: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            size: z.ZodNullable<z.ZodOptional<z.ZodEnum<["x-small", "small", "large", "medium"]>>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }>;
    Container: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
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
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            childrenIds?: string[] | null | undefined;
        }, {
            childrenIds?: string[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    ColumnsContainer: z.ZodObject<{
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
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Heading: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            level: z.ZodNullable<z.ZodOptional<z.ZodEnum<["h1", "h2", "h3"]>>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }>>>;
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Html: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "right", "center"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contents: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            isHtmlEditor: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        }, {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        } | null | undefined;
    }>;
    Image: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
            backgroundColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["center", "left", "right"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            linkHref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
        }, "strip", z.ZodTypeAny, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }>;
    Video: z.ZodObject<{
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
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        }, {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
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
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }>;
    Text: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            textDecoration: z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            markdown: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            inlineRuns: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                style: z.ZodObject<{
                    color: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    backgroundColor: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    fontFamily: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>>;
                    fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
                    fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
                    textDecoration: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>>;
                    lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
                }, "strip", z.ZodTypeAny, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }>, "many">>>;
            inlineLinks: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                href: z.ZodString;
                targetBlank: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }>;
    EmailLayout: z.ZodObject<{
        backdropColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        canvasColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        textColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
        width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }>;
    Spacer: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            height: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        }, "strip", z.ZodTypeAny, {
            height?: number | null | undefined;
        }, {
            height?: number | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }>;
    Divider: z.ZodObject<{
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
            lineColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        }, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        } | null | undefined;
    }>;
    Socials: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            platforms: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>, "many">>>;
            iconStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white", ...("standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white")[]]>>>;
            iconSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            socials: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                platform: z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>;
                url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        }, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
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
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }>;
}>, any>;
export declare const EditorConfigurationSchema: z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodDiscriminatedUnion<"type", any>, import("monto-email-document-core").BlockConfiguration<{
    Button: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            buttonBackgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            buttonStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["rectangle", "pill", "rounded"]>>>;
            buttonTextColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fullWidth: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            size: z.ZodNullable<z.ZodOptional<z.ZodEnum<["x-small", "small", "large", "medium"]>>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }, {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            buttonBackgroundColor?: string | null | undefined;
            buttonStyle?: "rectangle" | "pill" | "rounded" | null | undefined;
            buttonTextColor?: string | null | undefined;
            fullWidth?: boolean | null | undefined;
            size?: "x-small" | "small" | "large" | "medium" | null | undefined;
            text?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
    }>;
    Container: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
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
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            childrenIds?: string[] | null | undefined;
        }, {
            childrenIds?: string[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            childrenIds?: string[] | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            borderColor?: string | null | undefined;
            borderRadius?: number | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    ColumnsContainer: z.ZodObject<{
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
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            columns: {
                childrenIds: string[];
            }[];
            columnsCount?: number | null | undefined;
            fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
            columnsGap?: number | null | undefined;
            contentAlignment?: "bottom" | "top" | "stretch" | "middle" | null | undefined;
        } | null | undefined;
        style?: {
            backgroundColor?: string | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Heading: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            level: z.ZodNullable<z.ZodOptional<z.ZodEnum<["h1", "h2", "h3"]>>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }, {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        }>>>;
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            text?: string | null | undefined;
            level?: "h1" | "h2" | "h3" | null | undefined;
        } | null | undefined;
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
    }>;
    Html: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "right", "center"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contents: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            isHtmlEditor: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        }, {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            isHtmlEditor: boolean;
            contents?: string | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontSize?: number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            contents?: string | null | undefined;
            isHtmlEditor?: boolean | undefined;
        } | null | undefined;
    }>;
    Image: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
            backgroundColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["center", "left", "right"]>>>;
        }, "strip", z.ZodTypeAny, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }, {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            linkHref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
        }, "strip", z.ZodTypeAny, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }, {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
        } | null | undefined;
        props?: {
            width?: number | null | undefined;
            height?: number | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            linkHref?: string | null | undefined;
            contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
        } | null | undefined;
    }>;
    Video: z.ZodObject<{
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
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        }, {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
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
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            height?: string | null | undefined;
            width?: string | null | undefined;
            url?: string | null | undefined;
            alt?: string | null | undefined;
            autoplay?: boolean | null | undefined;
            controls?: boolean | null | undefined;
            loop?: boolean | null | undefined;
            muted?: boolean | null | undefined;
            contentAlignment?: "bottom" | "top" | "middle" | null | undefined;
            linkHref?: string | null | undefined;
        } | null | undefined;
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
    }>;
    Text: z.ZodObject<{
        style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
            fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
            fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            textDecoration: z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
            textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }, {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        }>>>;
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            markdown: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            inlineRuns: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                style: z.ZodObject<{
                    color: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    backgroundColor: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    fontFamily: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>>;
                    fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
                    fontStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
                    textDecoration: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodEnum<["none", "underline", "line-through", "underline line-through"]>>>>;
                    lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    letterSpacing: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
                }, "strip", z.ZodTypeAny, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }, {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }, {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }>, "many">>>;
            inlineLinks: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                start: z.ZodNumber;
                end: z.ZodNumber;
                href: z.ZodString;
                targetBlank: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }, {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }, {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }, {
        style?: {
            color?: string | null | undefined;
            backgroundColor?: string | null | undefined;
            fontSize?: number | null | undefined;
            fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
            fontWeight?: "bold" | "normal" | null | undefined;
            fontStyle?: "normal" | "italic" | null | undefined;
            textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
            lineHeight?: number | null | undefined;
            letterSpacing?: string | number | null | undefined;
            textAlign?: "right" | "left" | "center" | null | undefined;
            padding?: {
                top: number;
                bottom: number;
                right: number;
                left: number;
            } | null | undefined;
        } | null | undefined;
        props?: {
            markdown?: boolean | null | undefined;
            text?: string | null | undefined;
            inlineRuns?: {
                style: {
                    color?: string | null | undefined;
                    backgroundColor?: string | null | undefined;
                    fontSize?: number | null | undefined;
                    fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
                    fontWeight?: "bold" | "normal" | null | undefined;
                    fontStyle?: "normal" | "italic" | null | undefined;
                    textDecoration?: "none" | "underline" | "line-through" | "underline line-through" | null | undefined;
                    lineHeight?: number | null | undefined;
                    letterSpacing?: string | number | null | undefined;
                };
                start: number;
                end: number;
            }[] | null | undefined;
            inlineLinks?: {
                href: string;
                start: number;
                end: number;
                targetBlank?: boolean | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
    }>;
    EmailLayout: z.ZodObject<{
        backdropColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        canvasColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        textColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
        width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }, {
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        width?: number | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        childrenIds?: string[] | null | undefined;
        backdropColor?: string | null | undefined;
        canvasColor?: string | null | undefined;
        textColor?: string | null | undefined;
    }>;
    Spacer: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            height: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
        }, "strip", z.ZodTypeAny, {
            height?: number | null | undefined;
        }, {
            height?: number | null | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }, {
        props?: {
            height?: number | null | undefined;
        } | null | undefined;
    }>;
    Divider: z.ZodObject<{
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
            lineColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lineHeight: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        }, {
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
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
            lineColor?: string | null | undefined;
            lineHeight?: number | null | undefined;
        } | null | undefined;
    }>;
    Socials: z.ZodObject<{
        props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            platforms: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>, "many">>>;
            iconStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white", ...("standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white")[]]>>>;
            iconSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            socials: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                platform: z.ZodEnum<["x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads", ...("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[]]>;
                url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }, {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        }, {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
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
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }, {
        props?: {
            platforms?: ("x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads")[] | null | undefined;
            iconStyle?: "standard" | "no-border-black" | "no-border-white" | "origin-colorful" | "with-border-black" | "with-border-white" | "with-border-line-colorful" | "with-border-line-black" | "with-border-line-white" | null | undefined;
            iconSize?: number | null | undefined;
            socials?: {
                platform: "x" | "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "snapchat" | "whatsapp" | "telegram" | "discord" | "reddit" | "twitch" | "threads";
                url?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
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
    }>;
}>, any>>;
export type TEditorBlock = z.infer<typeof EditorBlockSchema>;
export type TEditorConfiguration = Record<string, TEditorBlock>;
//# sourceMappingURL=core.d.ts.map