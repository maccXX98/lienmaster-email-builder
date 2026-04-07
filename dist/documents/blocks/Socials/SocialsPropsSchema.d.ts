import { z } from 'zod';
export declare const SOCIAL_PLATFORMS: readonly ["facebook", "instagram", "x", "linkedin", "youtube", "tiktok", "snapchat", "whatsapp", "telegram", "discord", "reddit", "twitch", "threads"];
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];
export declare const ICON_STYLES: readonly ["no-border-black", "no-border-white", "origin-colorful", "with-border-black", "with-border-white", "with-border-line-colorful", "with-border-line-black", "with-border-line-white", "standard"];
export type IconStyle = (typeof ICON_STYLES)[number];
declare const SocialsPropsSchema: z.ZodObject<{
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
export default SocialsPropsSchema;
export type SocialsProps = z.infer<typeof SocialsPropsSchema>;
//# sourceMappingURL=SocialsPropsSchema.d.ts.map