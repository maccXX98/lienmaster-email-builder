import i18n from 'i18next';
import { useTranslation as useI18nextTranslation } from 'react-i18next';
export type Language = 'en' | 'es';
export declare const resources: {
    readonly en: {
        readonly translation: {
            common: {
                newDocument: string;
                useBuiltInTemplates: string;
                emailBuilder: string;
                save: string;
                saving: string;
                saveAndExit: string;
                namePlaceholder: string;
                unnamedTemplate: string;
                desktopView: string;
                mobileView: string;
                downloadJson: string;
                importJson: string;
                importJsonHelperText: string;
                import: string;
                cancel: string;
                addContentBlocks: string;
                undo: string;
                undoTooltip: string;
                redo: string;
                redoTooltip: string;
                language: string;
                screenSize: string;
                share: string;
                shareSuccess: string;
            };
            samples: {
                quickStart: string;
                welcomeEmail: string;
                welcomeAlt: string;
                newsletterWithUnsubscribe: string;
                unsubscribedResubscribe: string;
                oneTimePasscode: string;
                resetPassword: string;
                orderEcommerce: string;
                subscriptionReceipt: string;
                reservationReminder: string;
                postMetrics: string;
                respondToMessage: string;
                inviteToEvent: string;
                newProductLaunch: string;
                education: string;
                mothersDay: string;
                shoppingCart: string;
            };
            inspector: {
                styles: string;
                inspect: string;
                clickBlockToInspect: string;
                blockNotFound: string;
            };
            tabs: {
                edit: string;
                preview: string;
                htmlOutput: string;
                jsonOutput: string;
            };
            image: {
                title: string;
                name: string;
                sourceUrl: string;
                altText: string;
                clickThroughUrl: string;
                width: string;
                height: string;
                alignment: string;
                backgroundColor: string;
                upload: string;
                url: string;
                selectImage: string;
                uploading: string;
                uploadHandlerNotConfigured: string;
                placeholder: string;
            };
            video: {
                title: string;
                name: string;
                sourceUrl: string;
                altText: string;
                clickThroughUrl: string;
                width: string;
                height: string;
                alignment: string;
                backgroundColor: string;
                upload: string;
                url: string;
                selectVideo: string;
                uploading: string;
                uploadHandlerNotConfigured: string;
                placeholder: string;
                notSupported: string;
                autoplay: string;
                loop: string;
                muted: string;
                controls: string;
            };
            columns: {
                title: string;
                name: string;
                layout: string;
                numberOfColumns: string;
                ratio: string;
                custom: string;
                column: string;
                gap: string;
                alignment: string;
                alignmentTop: string;
                alignmentMiddle: string;
                alignmentBottom: string;
                alignmentStretch: string;
                confirmChangeTitle: string;
                confirmChangeMessage: string;
                cancel: string;
                confirm: string;
            };
            emailLayout: {
                global: string;
                backdropColor: string;
                canvasColor: string;
                canvasBorderColor: string;
                canvasBorderRadius: string;
                pageWidth: string;
                fontFamily: string;
                textColor: string;
            };
            text: {
                title: string;
                name: string;
                content: string;
                markdown: string;
                selectionRange: string;
                selectedSnippet: string;
                clearSelection: string;
                link: string;
                linkType: string;
                linkTypeWeb: string;
                linkTypeEmail: string;
                linkUrl: string;
                linkPlaceholderUrl: string;
                linkInvalid: string;
                linkTargetBlank: string;
                editLink: string;
            };
            button: {
                title: string;
                name: string;
                text: string;
                url: string;
                width: string;
                widthFull: string;
                widthAuto: string;
                size: string;
                sizeXSmall: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                style: string;
                styleRectangle: string;
                styleRounded: string;
                stylePill: string;
                textColor: string;
                buttonColor: string;
            };
            heading: {
                title: string;
                name: string;
                content: string;
                level: string;
            };
            avatar: {
                title: string;
                size: string;
                shape: string;
                shapeCircle: string;
                shapeSquare: string;
                shapeRounded: string;
                imageUrl: string;
                altText: string;
            };
            divider: {
                title: string;
                name: string;
                color: string;
                height: string;
            };
            container: {
                title: string;
                name: string;
            };
            spacer: {
                title: string;
                name: string;
                height: string;
            };
            html: {
                title: string;
                name: string;
                content: string;
            };
            socials: {
                title: string;
                name: string;
                selectPlatforms: string;
                iconStyle: string;
                iconPreview: string;
                configureIcon: string;
                iconSize: string;
                iconWidth: string;
                iconHeight: string;
                iconUrl: string;
                placeholder: string;
                addAnother: string;
            };
            style: {
                backgroundColor: string;
                borderColor: string;
                borderRadius: string;
                textColor: string;
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                fontStyle: string;
                textDecoration: string;
                lineHeight: string;
                letterSpacing: string;
                alignment: string;
                padding: string;
                regular: string;
                bold: string;
                normal: string;
                italic: string;
                none: string;
                underline: string;
                strikethrough: string;
                both: string;
                default: string;
                formatGroup: string;
            };
            htmlEditor: {
                mode: {
                    split: string;
                    code: string;
                    preview: string;
                };
                device: {
                    desktop: string;
                    mobile: string;
                };
                theme: string;
                lightThemes: string;
                darkThemes: string;
                tooltips: {
                    splitView: string;
                    codeOnly: string;
                    previewOnly: string;
                    desktopView: string;
                    mobileView: string;
                };
            };
        };
    };
    readonly es: {
        readonly translation: {
            common: {
                newDocument: string;
                useBuiltInTemplates: string;
                emailBuilder: string;
                save: string;
                saving: string;
                saveAndExit: string;
                namePlaceholder: string;
                unnamedTemplate: string;
                desktopView: string;
                mobileView: string;
                downloadJson: string;
                importJson: string;
                importJsonHelperText: string;
                import: string;
                cancel: string;
                addContentBlocks: string;
                undo: string;
                undoTooltip: string;
                redo: string;
                redoTooltip: string;
                language: string;
                screenSize: string;
                share: string;
                shareSuccess: string;
            };
            samples: {
                quickStart: string;
                welcomeEmail: string;
                welcomeAlt: string;
                newsletterWithUnsubscribe: string;
                unsubscribedResubscribe: string;
                oneTimePasscode: string;
                resetPassword: string;
                orderEcommerce: string;
                subscriptionReceipt: string;
                reservationReminder: string;
                postMetrics: string;
                respondToMessage: string;
                inviteToEvent: string;
                newProductLaunch: string;
                education: string;
                mothersDay: string;
                shoppingCart: string;
            };
            inspector: {
                styles: string;
                inspect: string;
                clickBlockToInspect: string;
                blockNotFound: string;
            };
            tabs: {
                edit: string;
                preview: string;
                htmlOutput: string;
                jsonOutput: string;
            };
            image: {
                title: string;
                name: string;
                sourceUrl: string;
                altText: string;
                clickThroughUrl: string;
                width: string;
                height: string;
                alignment: string;
                backgroundColor: string;
                upload: string;
                url: string;
                selectImage: string;
                uploading: string;
                uploadHandlerNotConfigured: string;
                placeholder: string;
            };
            video: {
                title: string;
                name: string;
                sourceUrl: string;
                altText: string;
                clickThroughUrl: string;
                width: string;
                height: string;
                alignment: string;
                backgroundColor: string;
                upload: string;
                url: string;
                selectVideo: string;
                uploading: string;
                uploadHandlerNotConfigured: string;
                placeholder: string;
                notSupported: string;
                autoplay: string;
                loop: string;
                muted: string;
                controls: string;
            };
            columns: {
                title: string;
                name: string;
                layout: string;
                numberOfColumns: string;
                ratio: string;
                custom: string;
                column: string;
                gap: string;
                alignment: string;
                alignmentTop: string;
                alignmentMiddle: string;
                alignmentBottom: string;
                alignmentStretch: string;
                confirmChangeTitle: string;
                confirmChangeMessage: string;
                cancel: string;
                confirm: string;
            };
            emailLayout: {
                global: string;
                backdropColor: string;
                canvasColor: string;
                canvasBorderColor: string;
                canvasBorderRadius: string;
                pageWidth: string;
                fontFamily: string;
                textColor: string;
            };
            text: {
                title: string;
                name: string;
                content: string;
                markdown: string;
                selectionRange: string;
                selectedSnippet: string;
                clearSelection: string;
                link: string;
                linkType: string;
                linkTypeWeb: string;
                linkTypeEmail: string;
                linkUrl: string;
                linkPlaceholderUrl: string;
                linkInvalid: string;
                linkTargetBlank: string;
                editLink: string;
            };
            button: {
                title: string;
                name: string;
                text: string;
                url: string;
                width: string;
                widthFull: string;
                widthAuto: string;
                size: string;
                sizeXSmall: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                style: string;
                styleRectangle: string;
                styleRounded: string;
                stylePill: string;
                textColor: string;
                buttonColor: string;
            };
            heading: {
                title: string;
                name: string;
                content: string;
                level: string;
            };
            avatar: {
                title: string;
                size: string;
                shape: string;
                shapeCircle: string;
                shapeSquare: string;
                shapeRounded: string;
                imageUrl: string;
                altText: string;
            };
            divider: {
                title: string;
                name: string;
                color: string;
                height: string;
            };
            container: {
                title: string;
                name: string;
            };
            spacer: {
                title: string;
                name: string;
                height: string;
            };
            html: {
                title: string;
                name: string;
                content: string;
            };
            socials: {
                title: string;
                name: string;
                selectPlatforms: string;
                iconStyle: string;
                iconPreview: string;
                configureIcon: string;
                iconSize: string;
                iconWidth: string;
                iconHeight: string;
                iconUrl: string;
                placeholder: string;
                addAnother: string;
            };
            style: {
                backgroundColor: string;
                borderColor: string;
                borderRadius: string;
                textColor: string;
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                fontStyle: string;
                textDecoration: string;
                lineHeight: string;
                letterSpacing: string;
                alignment: string;
                padding: string;
                regular: string;
                bold: string;
                normal: string;
                italic: string;
                none: string;
                underline: string;
                strikethrough: string;
                both: string;
                default: string;
                formatGroup: string;
            };
            htmlEditor: {
                mode: {
                    split: string;
                    code: string;
                    preview: string;
                };
                device: {
                    desktop: string;
                    mobile: string;
                };
                theme: string;
                lightThemes: string;
                darkThemes: string;
                tooltips: {
                    splitView: string;
                    codeOnly: string;
                    previewOnly: string;
                    desktopView: string;
                    mobileView: string;
                };
            };
        };
    };
};
export default i18n;
/**
 * Legacy translation function - use useTranslation() hook instead
 * @deprecated Use useTranslation from 'react-i18next' instead
 */
export declare function t(key: string, params?: Record<string, string | number>, language?: Language): string;
/**
 * Legacy getLanguage - use useTranslation() hook instead
 * @deprecated Use i18n.language or useTranslation hook instead
 */
export declare function getLanguage(): Language;
/**
 * Legacy setLanguage - use changeLanguage instead
 * @deprecated Use changeLanguage from this module instead
 */
export declare function setLanguage(lang: Language): void;
/**
 * Change language and persist to localStorage
 */
export declare const changeLanguage: (lang: Language) => void;
export { useI18nextTranslation as useTranslation };
//# sourceMappingURL=index.d.ts.map