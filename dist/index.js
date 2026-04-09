import { v as EMPTY_EMAIL_MESSAGE } from "./samples-9FUiZOr9.js";
import React, { Fragment, createContext, forwardRef, memo, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Alert, Box, Button, ButtonBase, Checkbox, CircularProgress, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, Fade, FormControlLabel, IconButton, InputLabel, Menu, MenuItem, Paper, Popover, Select, Slider, Stack, Switch, Tab, Tabs, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, Tooltip, Typography, useTheme } from "@mui/material";
import { Reader, renderToStaticMarkup } from "monto-email-core";
import { create } from "zustand";
import i18n from "i18next";
import { initReactI18next, useTranslation, useTranslation as useI18nextTranslation } from "react-i18next";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { alpha, createTheme, darken, lighten } from "@mui/material/styles";
import { Button as Button$1, ButtonPropsDefaults, ButtonPropsSchema } from "monto-email-block-button";
import { Add, AddOutlined, AlignHorizontalLeftOutlined, AlignHorizontalRightOutlined, AlignVerticalBottomOutlined, AlignVerticalTopOutlined, AppRegistrationOutlined, ArrowDownwardOutlined, ArrowUpwardOutlined, AspectRatioOutlined, Check, CloseOutlined, CloudUploadOutlined, CodeOutlined, ContentCopyOutlined, Crop32Outlined, DataObjectOutlined, DeleteOutline, DeleteOutlined, DragIndicator, EditOutlined, FileDownloadOutlined, FileUploadOutlined, FirstPageOutlined, FormatAlignCenterOutlined, FormatAlignLeftOutlined, FormatAlignRightOutlined, HMobiledataOutlined, HeightOutlined, HorizontalRuleOutlined, HtmlOutlined, ImageOutlined, LanguageOutlined, LastPageOutlined, LibraryAddOutlined, LinkOutlined, MenuOutlined, MonitorOutlined, NotesOutlined, PhoneIphoneOutlined, PreviewOutlined, RedoOutlined, RoundedCornerOutlined, ShareOutlined, SmartButtonOutlined, SpaceBarOutlined, TextFieldsOutlined, TitleOutlined, UndoOutlined, UnfoldMoreOutlined, VerticalAlignBottomOutlined, VerticalAlignCenterOutlined, VerticalAlignTopOutlined, VideocamOutlined, ViewColumnOutlined } from "@mui/icons-material";
import { HexColorInput, HexColorPicker } from "react-colorful";
import FormatBoldOutlined from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlined from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlined from "@mui/icons-material/FormatUnderlinedOutlined";
import StrikethroughSOutlined from "@mui/icons-material/StrikethroughSOutlined";
import { z } from "zod";
import { ColumnsContainer, ColumnsContainerPropsSchema } from "monto-email-block-columns-container";
import { Container, ContainerPropsSchema } from "monto-email-block-container";
import { Divider as Divider$1, DividerPropsDefaults, DividerPropsSchema } from "monto-email-block-divider";
import { Heading, HeadingPropsDefaults, HeadingPropsSchema } from "monto-email-block-heading";
import { Html, HtmlPropsSchema } from "monto-email-block-html";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { dracula } from "@uiw/codemirror-themes-all";
import { Image, ImagePropsSchema } from "monto-email-block-image";
import { Spacer, SpacerPropsDefaults, SpacerPropsSchema } from "monto-email-block-spacer";
import LinkOutlined$1 from "@mui/icons-material/LinkOutlined";
import { Text, TextPropsSchema } from "monto-email-block-text";
import ToggleButton$1 from "@mui/material/ToggleButton";
import { buildBlockComponent, buildBlockConfigurationDictionary, buildBlockConfigurationSchema } from "monto-email-document-core";
import { Video } from "monto-email-block-video";
import { Socials } from "monto-email-block-socials";
//#region src/documents/editor/HistoryManager.ts
/**
* 历史记录管理器
* 负责管理文档的撤销/重做历史记录
*/
var HistoryManager = class {
	constructor(initialDocument) {
		this.past = [];
		this.future = [];
		this.maxHistorySize = 5;
		this.present = this.deepClone(initialDocument);
	}
	/**
	* 记录新的历史状态
	*/
	record(newDocument) {
		if (this.isEqual(this.present, newDocument)) return this.present;
		this.past.push(this.present);
		if (this.past.length > this.maxHistorySize) this.past.shift();
		this.present = this.deepClone(newDocument);
		this.future = [];
		return this.present;
	}
	/**
	* 撤销操作
	*/
	undo() {
		if (this.past.length === 0) return null;
		this.future.unshift(this.present);
		const previous = this.past.pop();
		this.present = this.deepClone(previous);
		return this.present;
	}
	/**
	* 重做操作
	*/
	redo() {
		if (this.future.length === 0) return null;
		this.past.push(this.present);
		if (this.past.length > this.maxHistorySize) this.past.shift();
		const next = this.future.shift();
		this.present = this.deepClone(next);
		return this.present;
	}
	/**
	* 检查是否可以撤销
	*/
	canUndo() {
		return this.past.length > 0;
	}
	/**
	* 检查是否可以重做
	*/
	canRedo() {
		return this.future.length > 0;
	}
	/**
	* 获取当前状态
	*/
	getPresent() {
		return this.present;
	}
	/**
	* 重置历史记录（用于外部重置文档时）
	*/
	reset(newDocument) {
		this.past = [];
		this.present = this.deepClone(newDocument);
		this.future = [];
	}
	/**
	* 深拷贝文档（使用 JSON 方法，简单高效）
	*/
	deepClone(document) {
		return JSON.parse(JSON.stringify(document));
	}
	/**
	* 比较两个文档是否相等（简单比较，用于避免重复记录）
	*/
	isEqual(doc1, doc2) {
		return JSON.stringify(doc1) === JSON.stringify(doc2);
	}
};
//#endregion
//#region src/i18n/index.ts
var resources = {
	en: { translation: {
		common: {
			"newDocument": "New Blank Document",
			"useBuiltInTemplates": "Use Built-in Templates",
			"emailBuilder": "Email Builder",
			"save": "Save",
			"saving": "Saving...",
			"saveAndExit": "Save and Exit",
			"namePlaceholder": "Enter template name",
			"unnamedTemplate": "",
			"desktopView": "Desktop view",
			"mobileView": "Mobile view",
			"downloadJson": "Download JSON file",
			"importJson": "Import JSON",
			"importJsonHelperText": "This will override your current template.",
			"import": "Import",
			"cancel": "Cancel",
			"addContentBlocks": "Add Content Blocks",
			"undo": "Undo",
			"undoTooltip": "Undo (Ctrl/Cmd + Z)",
			"redo": "Redo",
			"redoTooltip": "Redo (Ctrl/Cmd + Shift + Z)",
			"language": "Language",
			"screenSize": "Screen size",
			"share": "Share current template",
			"shareSuccess": "The URL was updated. Copy it to share your current template."
		},
		samples: {
			"quickStart": "Quick Start",
			"welcomeEmail": "Welcome Email",
			"welcomeAlt": "Welcome (Alt)",
			"newsletterWithUnsubscribe": "Newsletter (Unsubscribe)",
			"unsubscribedResubscribe": "Unsubscribed (Resubscribe)",
			"oneTimePasscode": "One-time passcode (OTP)",
			"resetPassword": "Reset password",
			"orderEcommerce": "E-commerce receipt",
			"subscriptionReceipt": "Subscription receipt",
			"reservationReminder": "Verification Code Template",
			"postMetrics": "Post metrics",
			"respondToMessage": "Respond to inquiry",
			"inviteToEvent": "Invite to Event",
			"newProductLaunch": "New Product Launch",
			"education": "Education",
			"mothersDay": "Mother's Day",
			"shoppingCart": "Shopping Cart"
		},
		inspector: {
			"styles": "Styles",
			"inspect": "Inspect",
			"clickBlockToInspect": "Click on a block to inspect.",
			"blockNotFound": "Block with id {{id}} was not found. Click on a block to reset."
		},
		tabs: {
			"edit": "Edit",
			"preview": "Preview",
			"htmlOutput": "HTML output",
			"jsonOutput": "JSON output"
		},
		image: {
			"title": "Image block",
			"name": "Image",
			"sourceUrl": "Source URL",
			"altText": "Alt text",
			"clickThroughUrl": "Click through URL",
			"width": "Width",
			"height": "Height",
			"alignment": "Alignment",
			"backgroundColor": "Background color",
			"upload": "Upload",
			"url": "URL",
			"selectImage": "Select Image",
			"uploading": "Uploading...",
			"uploadHandlerNotConfigured": "Please configure imageUploadHandler to enable local upload",
			"placeholder": "Add an image"
		},
		video: {
			"title": "Video block",
			"name": "Video",
			"sourceUrl": "Video URL",
			"altText": "Alt text",
			"clickThroughUrl": "Click through URL",
			"width": "Width",
			"height": "Height",
			"alignment": "Alignment",
			"backgroundColor": "Background color",
			"upload": "Upload",
			"url": "URL",
			"selectVideo": "Select Video",
			"uploading": "Uploading...",
			"uploadHandlerNotConfigured": "Please configure videoUploadHandler to enable local upload",
			"placeholder": "Add a video",
			"notSupported": "Your browser does not support the video tag",
			"autoplay": "Autoplay",
			"loop": "Loop",
			"muted": "Muted",
			"controls": "Show controls"
		},
		columns: {
			"title": "Columns block",
			"name": "Columns",
			"layout": "Layout",
			"numberOfColumns": "Number of columns",
			"ratio": "Column width ratio",
			"custom": "Custom",
			"column": "Column {{number}}",
			"gap": "Columns gap",
			"alignment": "Alignment",
			"alignmentTop": "Align top",
			"alignmentMiddle": "Align middle",
			"alignmentBottom": "Align bottom",
			"alignmentStretch": "Stretch",
			"confirmChangeTitle": "Confirm Layout Change",
			"confirmChangeMessage": "Changing the column layout will delete data in some columns. This action cannot be undone. Are you sure you want to continue?",
			"cancel": "Cancel",
			"confirm": "Confirm"
		},
		emailLayout: {
			"global": "Global",
			"backdropColor": "Backdrop color",
			"canvasColor": "Canvas color",
			"canvasBorderColor": "Canvas border color",
			"canvasBorderRadius": "Canvas border radius",
			"pageWidth": "Page width",
			"fontFamily": "Font family",
			"textColor": "Text color"
		},
		text: {
			"title": "Text block",
			"name": "Text",
			"content": "Content",
			"markdown": "Markdown",
			"selectionRange": "Text selected",
			"selectedSnippet": "Selected: {{snippet}}",
			"clearSelection": "Clear selection",
			"link": "Link",
			"linkType": "Type",
			"linkTypeWeb": "Web",
			"linkTypeEmail": "E-mail",
			"linkUrl": "URL",
			"linkPlaceholderUrl": "Enter URL here",
			"linkInvalid": "Please enter a valid link",
			"linkTargetBlank": "Open in new tab",
			"editLink": "Edit Link"
		},
		button: {
			"title": "Button block",
			"name": "Button",
			"text": "Text",
			"url": "URL",
			"width": "Width",
			"widthFull": "Full",
			"widthAuto": "Auto",
			"size": "Size",
			"sizeXSmall": "X-Small",
			"sizeSmall": "Small",
			"sizeMedium": "Medium",
			"sizeLarge": "Large",
			"style": "Style",
			"styleRectangle": "Rectangle",
			"styleRounded": "Rounded",
			"stylePill": "Pill",
			"textColor": "Text color",
			"buttonColor": "Button color"
		},
		heading: {
			"title": "Heading block",
			"name": "Heading",
			"content": "Content",
			"level": "Level"
		},
		avatar: {
			"title": "Avatar block",
			"size": "Size",
			"shape": "Shape",
			"shapeCircle": "Circle",
			"shapeSquare": "Square",
			"shapeRounded": "Rounded",
			"imageUrl": "Image URL",
			"altText": "Alt text"
		},
		divider: {
			"title": "Divider block",
			"name": "Divider",
			"color": "Color",
			"height": "Height"
		},
		container: {
			"title": "Container block",
			"name": "Container"
		},
		spacer: {
			"title": "Spacer block",
			"name": "Spacer",
			"height": "Height"
		},
		html: {
			"title": "HTML block",
			"name": "HTML",
			"content": "Content"
		},
		socials: {
			"title": "Social Media block",
			"name": "Socials",
			"selectPlatforms": "Social Media Selection",
			"iconStyle": "Icon Style",
			"iconPreview": "Icon Preview",
			"configureIcon": "Configure {{platform}} Icon",
			"iconSize": "Icon Size",
			"iconWidth": "Icon Width",
			"iconHeight": "Icon Height",
			"iconUrl": "Link URL",
			"placeholder": "Click the right panel to add social media icons",
			"addAnother": "Add another social link"
		},
		style: {
			"backgroundColor": "Background color",
			"borderColor": "Border color",
			"borderRadius": "Border radius",
			"textColor": "Text color",
			"fontFamily": "Font family",
			"fontSize": "Font size",
			"fontWeight": "Font weight",
			"fontStyle": "Font style",
			"textDecoration": "Text decoration",
			"lineHeight": "Line height",
			"letterSpacing": "Letter spacing",
			"alignment": "Alignment",
			"padding": "Padding",
			"regular": "Regular",
			"bold": "Bold",
			"normal": "Normal",
			"italic": "Italic",
			"none": "None",
			"underline": "Underline",
			"strikethrough": "Strikethrough",
			"both": "Both",
			"default": "Default",
			"formatGroup": "Style"
		},
		htmlEditor: {
			"mode": {
				"split": "Split view",
				"code": "Code only",
				"preview": "Preview only"
			},
			"device": {
				"desktop": "Desktop view",
				"mobile": "Mobile view"
			},
			"theme": "Theme",
			"lightThemes": "Light Themes",
			"darkThemes": "Dark Themes",
			"tooltips": {
				"splitView": "Split view",
				"codeOnly": "Code only",
				"previewOnly": "Preview only",
				"desktopView": "Desktop view",
				"mobileView": "Mobile view"
			}
		}
	} },
	es: { translation: {
		common: {
			"newDocument": "Nuevo Documento en Blanco",
			"useBuiltInTemplates": "Usar Plantillas Predefinidas",
			"emailBuilder": "Editor de Email",
			"save": "Guardar",
			"saving": "Guardando...",
			"saveAndExit": "Guardar y Salir",
			"namePlaceholder": "Ingrese nombre de plantilla",
			"unnamedTemplate": "",
			"desktopView": "Vista de Escritorio",
			"mobileView": "Vista Móvil",
			"downloadJson": "Descargar archivo JSON",
			"importJson": "Importar JSON",
			"importJsonHelperText": "Esto sobrescribirá tu plantilla actual.",
			"import": "Importar",
			"cancel": "Cancelar",
			"addContentBlocks": "Agregar Bloques de Contenido",
			"undo": "Deshacer",
			"undoTooltip": "Deshacer (Ctrl/Cmd + Z)",
			"redo": "Rehacer",
			"redoTooltip": "Rehacer (Ctrl/Cmd + Shift + Z)",
			"language": "Idioma",
			"screenSize": "Tamaño de pantalla",
			"share": "Compartir plantilla actual",
			"shareSuccess": "La URL fue actualizada. Cópiala para compartir tu plantilla actual."
		},
		samples: {
			"quickStart": "Inicio Rápido",
			"welcomeEmail": "Email de Bienvenida",
			"welcomeAlt": "Bienvenida (Alternativo)",
			"newsletterWithUnsubscribe": "Newsletter (Cancelar Suscripción)",
			"unsubscribedResubscribe": "Cancelado (Re-suscribirse)",
			"oneTimePasscode": "Código de un solo uso (OTP)",
			"resetPassword": "Restablecer Contraseña",
			"orderEcommerce": "Recibo de Comercio",
			"subscriptionReceipt": "Recibo de Suscripción",
			"reservationReminder": "Código de Verificación",
			"postMetrics": "Métricas Post",
			"respondToMessage": "Responder Consulta",
			"inviteToEvent": "Invitación a Evento",
			"newProductLaunch": "Nuevo Producto",
			"education": "Educación",
			"mothersDay": "Día de la Madre",
			"shoppingCart": "Carrito de Compras"
		},
		inspector: {
			"styles": "Estilos",
			"inspect": "Inspeccionar",
			"clickBlockToInspect": "Haz clic en un bloque para inspeccionar.",
			"blockNotFound": "Bloque con id {{id}} no encontrado. Haz clic en un bloque para reiniciar."
		},
		tabs: {
			"edit": "Editar",
			"preview": "Vista Previa",
			"htmlOutput": "Salida HTML",
			"jsonOutput": "Salida JSON"
		},
		image: {
			"title": "Bloque de Imagen",
			"name": "Imagen",
			"sourceUrl": "URL de Origen",
			"altText": "Texto Alternativo",
			"clickThroughUrl": "URL de Destino",
			"width": "Ancho",
			"height": "Alto",
			"alignment": "Alineación",
			"backgroundColor": "Color de Fondo",
			"upload": "Subir",
			"url": "URL",
			"selectImage": "Seleccionar Imagen",
			"uploading": "Subiendo...",
			"uploadHandlerNotConfigured": "Por favor configura imageUploadHandler para habilitar subida local",
			"placeholder": "Agregar una imagen"
		},
		video: {
			"title": "Bloque de Video",
			"name": "Video",
			"sourceUrl": "URL del Video",
			"altText": "Texto Alternativo",
			"clickThroughUrl": "URL de Destino",
			"width": "Ancho",
			"height": "Alto",
			"alignment": "Alineación",
			"backgroundColor": "Color de Fondo",
			"upload": "Subir",
			"url": "URL",
			"selectVideo": "Seleccionar Video",
			"uploading": "Subiendo...",
			"uploadHandlerNotConfigured": "Por favor configura videoUploadHandler para habilitar subida local",
			"placeholder": "Agregar un video",
			"notSupported": "Tu navegador no soporta la etiqueta de video",
			"autoplay": "Reproducción Automática",
			"loop": "Repetir",
			"muted": "Silenciar",
			"controls": "Mostrar Controles"
		},
		columns: {
			"title": "Bloque de Columnas",
			"name": "Columnas",
			"layout": "Diseño",
			"numberOfColumns": "Número de Columnas",
			"ratio": "Proporción de Ancho",
			"custom": "Personalizado",
			"column": "Columna {{number}}",
			"gap": "Espacio entre Columnas",
			"alignment": "Alineación",
			"alignmentTop": "Alinear Arriba",
			"alignmentMiddle": "Alinear al Medio",
			"alignmentBottom": "Alinear Abajo",
			"alignmentStretch": "Estirar",
			"confirmChangeTitle": "Confirmar Cambio de Diseño",
			"confirmChangeMessage": "Cambiar el diseño de columnas eliminará datos en algunas columnas. Esta acción no se puede deshacer. ¿Estás seguro de continuar?",
			"cancel": "Cancelar",
			"confirm": "Confirmar"
		},
		emailLayout: {
			"global": "Global",
			"backdropColor": "Color de Fondo",
			"canvasColor": "Color del Lienzo",
			"canvasBorderColor": "Color del Borde",
			"canvasBorderRadius": "Radio del Borde",
			"pageWidth": "Ancho de Página",
			"fontFamily": "Fuente",
			"textColor": "Color de Texto"
		},
		text: {
			"title": "Bloque de Texto",
			"name": "Texto",
			"content": "Contenido",
			"markdown": "Markdown",
			"selectionRange": "Texto Seleccionado",
			"selectedSnippet": "Seleccionado: {{snippet}}",
			"clearSelection": "Limpiar Selección",
			"link": "Enlace",
			"linkType": "Tipo",
			"linkTypeWeb": "Web",
			"linkTypeEmail": "E-mail",
			"linkUrl": "URL",
			"linkPlaceholderUrl": "Ingresa URL aquí",
			"linkInvalid": "Por favor ingresa una URL válida",
			"linkTargetBlank": "Abrir en nueva pestaña",
			"editLink": "Editar Enlace"
		},
		button: {
			"title": "Bloque de Botón",
			"name": "Botón",
			"text": "Texto",
			"url": "URL",
			"width": "Ancho",
			"widthFull": "Completo",
			"widthAuto": "Automático",
			"size": "Tamaño",
			"sizeXSmall": "Extra Pequeño",
			"sizeSmall": "Pequeño",
			"sizeMedium": "Mediano",
			"sizeLarge": "Grande",
			"style": "Estilo",
			"styleRectangle": "Rectángulo",
			"styleRounded": "Redondeado",
			"stylePill": "Cápsula",
			"textColor": "Color de Texto",
			"buttonColor": "Color del Botón"
		},
		heading: {
			"title": "Bloque de Encabezado",
			"name": "Encabezado",
			"content": "Contenido",
			"level": "Nivel"
		},
		avatar: {
			"title": "Bloque de Avatar",
			"size": "Tamaño",
			"shape": "Forma",
			"shapeCircle": "Círculo",
			"shapeSquare": "Cuadrado",
			"shapeRounded": "Redondeado",
			"imageUrl": "URL de Imagen",
			"altText": "Texto Alternativo"
		},
		divider: {
			"title": "Bloque de Divisor",
			"name": "Divisor",
			"color": "Color",
			"height": "Alto"
		},
		container: {
			"title": "Bloque de Contenedor",
			"name": "Contenedor"
		},
		spacer: {
			"title": "Bloque de Espacio",
			"name": "Espacio",
			"height": "Alto"
		},
		html: {
			"title": "Bloque HTML",
			"name": "HTML",
			"content": "Contenido"
		},
		socials: {
			"title": "Bloque de Redes Sociales",
			"name": "Redes Sociales",
			"selectPlatforms": "Selección de Plataformas",
			"iconStyle": "Estilo de Icono",
			"iconPreview": "Vista Previa",
			"configureIcon": "Configurar Icono de {{platform}}",
			"iconSize": "Tamaño de Icono",
			"iconWidth": "Ancho de Icono",
			"iconHeight": "Alto de Icono",
			"iconUrl": "URL de Enlace",
			"placeholder": "Haz clic en el panel derecho para agregar iconos de redes sociales",
			"addAnother": "Agregar Otro Enlace"
		},
		style: {
			"backgroundColor": "Color de Fondo",
			"borderColor": "Color de Borde",
			"borderRadius": "Radio de Borde",
			"textColor": "Color de Texto",
			"fontFamily": "Fuente",
			"fontSize": "Tamaño de Fuente",
			"fontWeight": "Peso de Fuente",
			"fontStyle": "Estilo de Fuente",
			"textDecoration": "Decoración de Texto",
			"lineHeight": "Altura de Línea",
			"letterSpacing": "Espaciado de Letras",
			"alignment": "Alineación",
			"padding": "Relleno",
			"regular": "Regular",
			"bold": "Negrita",
			"normal": "Normal",
			"italic": "Cursiva",
			"none": "Ninguno",
			"underline": "Subrayado",
			"strikethrough": "Tachado",
			"both": "Ambos",
			"default": "Por Defecto",
			"formatGroup": "Estilo"
		},
		htmlEditor: {
			"mode": {
				"split": "Vista Dividida",
				"code": "Solo Código",
				"preview": "Solo Vista Previa"
			},
			"device": {
				"desktop": "Vista de Escritorio",
				"mobile": "Vista Móvil"
			},
			"theme": "Tema",
			"lightThemes": "Temas Claros",
			"darkThemes": "Temas Oscuros",
			"tooltips": {
				"splitView": "Vista Dividida",
				"codeOnly": "Solo Código",
				"previewOnly": "Solo Vista Previa",
				"desktopView": "Vista de Escritorio",
				"mobileView": "Vista Móvil"
			}
		}
	} }
};
var detectBrowserLanguage = () => {
	if (typeof window === "undefined") return "en";
	return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};
var getInitialLanguage = () => {
	if (typeof window === "undefined") return "en";
	const stored = localStorage.getItem("app-language");
	if (stored === "en" || stored === "es") return stored;
	return detectBrowserLanguage();
};
i18n.use(initReactI18next).init({
	resources,
	lng: getInitialLanguage(),
	fallbackLng: "en",
	interpolation: { escapeValue: false },
	react: { useSuspense: false }
});
/**
* Legacy getLanguage - use useTranslation() hook instead
* @deprecated Use i18n.language or useTranslation hook instead
*/
function getLanguage() {
	return i18n.language;
}
/**
* Change language and persist to localStorage
*/
var changeLanguage = (lang) => {
	i18n.changeLanguage(lang);
	localStorage.setItem("app-language", lang);
};
//#endregion
//#region src/documents/editor/EditorContext.tsx
var initialDocument = null;
var initialLanguage = null;
var initialShowJsonFeatures = true;
var initialShowSamplesDrawerTitle = true;
var historyManager = null;
function initializeStore(config) {
	if (config?.document) initialDocument = config.document;
	if (config?.language) initialLanguage = config.language;
	if (config?.showJsonFeatures !== void 0) initialShowJsonFeatures = config.showJsonFeatures;
	if (config?.showSamplesDrawerTitle !== void 0) initialShowSamplesDrawerTitle = config.showSamplesDrawerTitle;
	const doc = config?.document ?? initialDocument ?? EMPTY_EMAIL_MESSAGE;
	const lang = config?.language ?? initialLanguage ?? getLanguage();
	const showJson = config?.showJsonFeatures ?? initialShowJsonFeatures;
	const showTitle = config?.showSamplesDrawerTitle ?? initialShowSamplesDrawerTitle;
	if (historyManager) historyManager.reset(doc);
	else historyManager = new HistoryManager(doc);
	editorStateStore.setState({
		document: doc,
		language: lang,
		showJsonFeatures: showJson,
		showSamplesDrawerTitle: showTitle,
		selectedBlockId: null,
		selectedSidebarTab: "styles",
		selectedMainTab: "editor",
		selectedScreenSize: "desktop",
		inspectorDrawerOpen: true,
		samplesDrawerOpen: true
	});
}
if (!historyManager) historyManager = new HistoryManager(initialDocument || EMPTY_EMAIL_MESSAGE);
var editorStateStore = create((set, get) => ({
	document: initialDocument || EMPTY_EMAIL_MESSAGE,
	selectedBlockId: null,
	textSelection: null,
	lastInlineStyleApplyAt: 0,
	lastTextBlockContent: null,
	selectedSidebarTab: "styles",
	selectedMainTab: "editor",
	selectedScreenSize: "desktop",
	inspectorDrawerOpen: true,
	samplesDrawerOpen: true,
	language: initialLanguage || getLanguage(),
	onChange: void 0,
	saveHandler: void 0,
	saveAndExitHandler: void 0,
	name: "",
	onNameChange: void 0,
	showJsonFeatures: initialShowJsonFeatures,
	showSamplesDrawerTitle: initialShowSamplesDrawerTitle,
	onSamplesDrawerToggle: void 0,
	onInspectorDrawerToggle: void 0
}));
function useDocument() {
	return editorStateStore((s) => s.document);
}
function useSelectedBlockId() {
	return editorStateStore((s) => s.selectedBlockId);
}
function useSelectedScreenSize() {
	return editorStateStore((s) => s.selectedScreenSize);
}
function useSelectedMainTab() {
	return editorStateStore((s) => s.selectedMainTab);
}
function setSelectedMainTab(selectedMainTab) {
	return editorStateStore.setState({ selectedMainTab });
}
function useSelectedSidebarTab() {
	return editorStateStore((s) => s.selectedSidebarTab);
}
function useInspectorDrawerOpen() {
	return editorStateStore((s) => s.inspectorDrawerOpen);
}
function useSamplesDrawerOpen() {
	return editorStateStore((s) => s.samplesDrawerOpen);
}
function setSelectedBlockId(selectedBlockId) {
	const selectedSidebarTab = selectedBlockId === null ? "styles" : "block-configuration";
	const options = {};
	if (selectedBlockId !== null) options.inspectorDrawerOpen = true;
	return editorStateStore.setState({
		selectedBlockId,
		textSelection: null,
		lastTextBlockContent: null,
		selectedSidebarTab,
		...options
	});
}
function setTextSelection(range) {
	return editorStateStore.setState({ textSelection: range });
}
function useTextSelection() {
	return editorStateStore((s) => s.textSelection);
}
/** 在右侧面板应用选区样式后调用，避免随后 re-render 导致选区折叠时误清空 textSelection */
function markLastInlineStyleApply() {
	return editorStateStore.setState({ lastInlineStyleApplyAt: Date.now() });
}
var INLINE_STYLE_APPLY_GRACE_MS = 400;
function shouldIgnoreCollapsedSelectionForClear() {
	const t = editorStateStore.getState().lastInlineStyleApplyAt;
	return t > 0 && Date.now() - t < INLINE_STYLE_APPLY_GRACE_MS;
}
function setLastTextBlockContent(payload) {
	return editorStateStore.setState({ lastTextBlockContent: payload });
}
function useLastTextBlockContent() {
	return editorStateStore((s) => s.lastTextBlockContent);
}
function useLastInlineStyleApplyAt() {
	return editorStateStore((s) => s.lastInlineStyleApplyAt);
}
function setSidebarTab(selectedSidebarTab) {
	return editorStateStore.setState({ selectedSidebarTab });
}
function computeHtmlAndNotify(document, onChange) {
	let html;
	try {
		html = renderToStaticMarkup(document, { rootBlockId: "root" });
	} catch {
		html = "<!-- Error rendering HTML -->";
	}
	onChange(document, html);
}
function resetDocument(document) {
	if (historyManager) historyManager.reset(document);
	editorStateStore.setState({
		document,
		selectedSidebarTab: "styles",
		selectedBlockId: null,
		textSelection: null,
		lastTextBlockContent: null
	});
	const onChange = editorStateStore.getState().onChange;
	if (onChange) queueMicrotask(() => {
		computeHtmlAndNotify(document, onChange);
	});
}
function setDocument(document, options) {
	const newDocument = {
		...editorStateStore.getState().document,
		...document
	};
	if (options?.recordHistory !== false && historyManager) {
		const recordedDocument = historyManager.record(newDocument);
		editorStateStore.setState({ document: recordedDocument });
		const onChange = editorStateStore.getState().onChange;
		if (onChange) queueMicrotask(() => {
			computeHtmlAndNotify(recordedDocument, onChange);
		});
	} else {
		editorStateStore.setState({ document: newDocument });
		const onChange = editorStateStore.getState().onChange;
		if (onChange) queueMicrotask(() => {
			computeHtmlAndNotify(newDocument, onChange);
		});
	}
}
function setOnChange(onChange) {
	return editorStateStore.setState({ onChange });
}
function toggleInspectorDrawerOpen() {
	const state = editorStateStore.getState();
	const inspectorDrawerOpen = !state.inspectorDrawerOpen;
	editorStateStore.setState({ inspectorDrawerOpen });
	if (state.onInspectorDrawerToggle) state.onInspectorDrawerToggle(inspectorDrawerOpen);
}
function toggleSamplesDrawerOpen() {
	const state = editorStateStore.getState();
	const samplesDrawerOpen = !state.samplesDrawerOpen;
	editorStateStore.setState({ samplesDrawerOpen });
	if (state.onSamplesDrawerToggle) state.onSamplesDrawerToggle(samplesDrawerOpen);
}
function setSelectedScreenSize(selectedScreenSize) {
	return editorStateStore.setState({ selectedScreenSize });
}
function useImageUploadHandler() {
	return editorStateStore((s) => s.imageUploadHandler);
}
function setImageUploadHandler(handler) {
	return editorStateStore.setState({ imageUploadHandler: handler });
}
function useVideoUploadHandler() {
	return editorStateStore((s) => s.videoUploadHandler);
}
function setVideoUploadHandler(handler) {
	return editorStateStore.setState({ videoUploadHandler: handler });
}
function useLanguage() {
	return editorStateStore((s) => s.language);
}
function setLanguage(lang) {
	return editorStateStore.setState({ language: lang });
}
function useName() {
	return editorStateStore((s) => s.name);
}
function setName(name) {
	editorStateStore.setState({ name });
	const onNameChange = editorStateStore.getState().onNameChange;
	if (onNameChange) onNameChange(name);
}
function setOnNameChange(handler) {
	return editorStateStore.setState({ onNameChange: handler });
}
function setOnSamplesDrawerToggle(handler) {
	return editorStateStore.setState({ onSamplesDrawerToggle: handler });
}
function setOnInspectorDrawerToggle(handler) {
	return editorStateStore.setState({ onInspectorDrawerToggle: handler });
}
function useShowJsonFeatures() {
	return editorStateStore((s) => s.showJsonFeatures);
}
function setShowJsonFeatures(show) {
	return editorStateStore.setState({ showJsonFeatures: show });
}
function useShowSamplesDrawerTitle() {
	return editorStateStore((s) => s.showSamplesDrawerTitle);
}
function setShowSamplesDrawerTitle(show) {
	return editorStateStore.setState({ showSamplesDrawerTitle: show });
}
/**
* 检查是否可以撤销
*/
function canUndo() {
	return historyManager ? historyManager.canUndo() : false;
}
/**
* 检查是否可以重做
*/
function canRedo() {
	return historyManager ? historyManager.canRedo() : false;
}
/**
* 撤销操作
*/
function undo() {
	if (!historyManager) return false;
	const previousDocument = historyManager.undo();
	if (!previousDocument) return false;
	editorStateStore.setState({ document: previousDocument });
	const onChange = editorStateStore.getState().onChange;
	if (onChange) queueMicrotask(() => computeHtmlAndNotify(previousDocument, onChange));
	return true;
}
/**
* 重做操作
*/
function redo() {
	if (!historyManager) return false;
	const nextDocument = historyManager.redo();
	if (!nextDocument) return false;
	editorStateStore.setState({ document: nextDocument });
	const onChange = editorStateStore.getState().onChange;
	if (onChange) queueMicrotask(() => computeHtmlAndNotify(nextDocument, onChange));
	return true;
}
/**
* Hook: 检查是否可以撤销
*/
function useCanUndo() {
	const document = editorStateStore((s) => s.document);
	return React.useMemo(() => canUndo(), [document]);
}
/**
* Hook: 检查是否可以重做
*/
function useCanRedo() {
	const document = editorStateStore((s) => s.document);
	return React.useMemo(() => canRedo(), [document]);
}
//#endregion
//#region src/LeftPanelSlotContext.tsx
var LeftPanelSlotContext = createContext(null);
function LeftPanelSlotProvider({ value, children }) {
	return /* @__PURE__ */ jsx(LeftPanelSlotContext.Provider, {
		value,
		children
	});
}
function useLeftPanelSlot() {
	return useContext(LeftPanelSlotContext);
}
//#endregion
//#region src/theme.ts
var BRAND_NAVY = "#212443";
var BRAND_BLUE = "#1E40AF";
var BRAND_GREEN = "#1F8466";
var BRAND_RED = "#E81212";
var BRAND_YELLOW = "#F6DC9F";
var BRAND_PURPLE = "#6C0E7C";
var BRAND_BROWN = "#CC996C";
var STANDARD_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"";
var MONOSPACE_FONT_FAMILY = "ui-monospace, Menlo, Monaco, \"Cascadia Mono\", \"Segoe UI Mono\", \"Roboto Mono\", \"Oxygen Mono\", \"Ubuntu Monospace\", \"Source Code Pro\", \"Fira Mono\", \"Droid Sans Mono\", \"Courier New\", monospace";
var BASE_THEME = createTheme({
	palette: {
		background: { default: "#f2f5f7" },
		text: {
			primary: "#1F1F21",
			secondary: "#4F4F4F"
		}
	},
	typography: { fontFamily: STANDARD_FONT_FAMILY }
});
var THEME = createTheme(BASE_THEME, {
	palette: {
		brand: {
			navy: BRAND_NAVY,
			blue: BRAND_BLUE,
			red: BRAND_RED,
			green: BRAND_GREEN,
			yellow: BRAND_YELLOW,
			purple: BRAND_PURPLE,
			brown: BRAND_BROWN
		},
		success: {
			main: BRAND_GREEN,
			light: lighten(BRAND_GREEN, .15),
			dark: darken(BRAND_GREEN, .15)
		},
		error: {
			main: BRAND_RED,
			light: lighten(BRAND_RED, .15),
			dark: darken(BRAND_RED, .15)
		},
		cadet: {
			100: "#F9FAFB",
			200: "#F2F5F7",
			300: "#DCE4EA",
			400: "#A8BBCA",
			500: "#6A8BA4"
		},
		highlight: {
			100: lighten(BRAND_YELLOW, .8),
			200: lighten(BRAND_YELLOW, .6),
			300: lighten(BRAND_YELLOW, .4),
			400: lighten(BRAND_YELLOW, .2),
			500: BRAND_YELLOW
		},
		info: { main: BRAND_BLUE },
		primary: { main: BRAND_BLUE }
	},
	components: {
		MuiCssBaseline: { styleOverrides: `
        address {
          font-style: normal;
        }
        fieldset {
          border: none;
          padding: 0;
        }
        pre {
          font-family: ${MONOSPACE_FONT_FAMILY}
          white-space: pre-wrap;
          font-size: 12px;
        }
      ` },
		MuiAlert: { styleOverrides: {
			root: { fontSize: BASE_THEME.typography.pxToRem(14) },
			action: {
				paddingTop: 0,
				marginRight: 0
			},
			filledSuccess: { backgroundColor: BRAND_GREEN }
		} },
		MuiStepLabel: { styleOverrides: { label: { fontWeight: BASE_THEME.typography.fontWeightMedium } } },
		MuiDialog: {
			defaultProps: { fullWidth: true },
			styleOverrides: { paper: { borderRadius: BASE_THEME.spacing(1) } }
		},
		MuiDialogContent: { styleOverrides: { root: {
			paddingTop: BASE_THEME.spacing(1),
			paddingBottom: BASE_THEME.spacing(2)
		} } },
		MuiDialogTitle: {
			defaultProps: { variant: "h4" },
			styleOverrides: { root: {
				paddingTop: BASE_THEME.spacing(3),
				paddingBottom: BASE_THEME.spacing(1)
			} }
		},
		MuiDialogActions: { styleOverrides: { root: {
			borderTop: "1px solid",
			borderTopColor: BASE_THEME.palette.divider,
			marginTop: BASE_THEME.spacing(2.5),
			padding: `${BASE_THEME.spacing(1.5)} ${BASE_THEME.spacing(3)}`
		} } },
		MuiTableCell: { styleOverrides: {
			root: {
				...BASE_THEME.typography.body2,
				borderColor: BASE_THEME.palette.grey[200]
			},
			head: {
				...BASE_THEME.typography.overline,
				fontWeight: BASE_THEME.typography.fontWeightMedium,
				letterSpacing: "0.075em",
				color: BASE_THEME.palette.text.secondary
			}
		} },
		MuiTableRow: { styleOverrides: { root: { "&:last-child td": { borderBottom: 0 } } } },
		MuiAvatar: { styleOverrides: { root: {
			textTransform: "uppercase",
			fontSize: BASE_THEME.typography.pxToRem(14)
		} } },
		MuiChip: { styleOverrides: {
			root: { "&.MuiChip-filledError, &.MuiChip-filledSuccess": { fill: BASE_THEME.palette.primary.contrastText } },
			sizeSmall: {
				borderRadius: BASE_THEME.spacing(.5),
				fontSize: 12
			},
			iconSmall: {
				fontSize: 14,
				marginLeft: BASE_THEME.spacing(1)
			},
			colorSecondary: {
				borderColor: BASE_THEME.palette.grey[400],
				color: BASE_THEME.palette.text.secondary
			},
			label: { fontWeight: BASE_THEME.typography.fontWeightMedium }
		} },
		MuiDrawer: { defaultProps: { PaperProps: { elevation: 2 } } },
		MuiTooltip: { styleOverrides: {
			tooltip: { backgroundColor: alpha(BASE_THEME.palette.text.primary, .9) },
			arrow: { color: alpha(BASE_THEME.palette.text.primary, .9) }
		} },
		MuiSlider: { styleOverrides: {
			root: { height: 1 },
			track: {
				height: 1,
				border: "none"
			},
			rail: {
				height: 1,
				backgroundColor: BASE_THEME.palette.grey[500]
			},
			mark: { backgroundColor: BASE_THEME.palette.grey[500] },
			markActive: { height: 0 },
			thumb: {
				height: 16,
				width: 16,
				cursor: "col-resize",
				"&:hover, &.Mui-active, &.Mui-focusVisible": { boxShadow: `0 0 0 4px ${alpha(BRAND_BLUE, .2)}` },
				"&:before": { display: "none" }
			}
		} },
		MuiPaper: { defaultProps: {
			elevation: 2,
			square: true
		} },
		MuiButtonBase: {
			defaultProps: { focusRipple: true },
			styleOverrides: { root: { "&.MuiButton-containedSecondary.Mui-disabled": { backgroundColor: BASE_THEME.palette.grey[100] } } }
		},
		MuiButtonGroup: { defaultProps: { disableElevation: true } },
		MuiIconButton: { styleOverrides: {
			edgeStart: { marginLeft: BASE_THEME.spacing(-1) },
			colorSecondary: { color: BASE_THEME.palette.grey[500] }
		} },
		MuiButton: {
			defaultProps: { disableElevation: true },
			styleOverrides: {
				root: { borderRadius: 8 },
				textPrimary: { color: BASE_THEME.palette.text.primary },
				textSecondary: { color: BASE_THEME.palette.text.secondary },
				outlinedPrimary: {},
				containedSecondary: {
					backgroundColor: BASE_THEME.palette.common.white,
					border: `1px solid ${BASE_THEME.palette.grey[300]}`,
					color: BASE_THEME.palette.text.primary,
					"&:hover, &:active, &:focus": {
						backgroundColor: BASE_THEME.palette.common.white,
						borderColor: BASE_THEME.palette.grey[500],
						color: BASE_THEME.palette.text.primary
					}
				}
			}
		},
		MuiToggleButton: { styleOverrides: { root: {
			paddingLeft: BASE_THEME.spacing(1.5),
			paddingRight: BASE_THEME.spacing(1.5)
		} } },
		MuiInputBase: { styleOverrides: {
			root: {
				"&:not(.Mui-disabled, .Mui-error):before": { borderBottom: `1px solid ${BASE_THEME.palette.grey[400]}` },
				"&:hover:not(.Mui-disabled, .Mui-error):before": { borderBottom: `1px solid ${BASE_THEME.palette.grey[500]} !important` },
				"&:after": { borderBottom: `1px solid ${BASE_THEME.palette.text.primary} !important` },
				"&.MuiOutlinedInput-root:not(.Mui-error)": { "& fieldset": {
					borderColor: BASE_THEME.palette.grey[300],
					transition: "border-color 0.2s"
				} },
				"&.MuiOutlinedInput-root:not(.Mui-disabled, .Mui-error)": {
					"&:hover fieldset": { borderColor: BASE_THEME.palette.grey[400] },
					"&.Mui-focused fieldset": {
						borderColor: BASE_THEME.palette.text.secondary,
						borderWidth: 1
					}
				}
			},
			input: {
				fontSize: BASE_THEME.typography.pxToRem(14),
				"&.Mui-disabled": {
					WebkitTextFillColor: "inherit",
					color: BASE_THEME.palette.text.secondary
				}
			},
			inputSizeSmall: {}
		} },
		MuiOutlinedInput: { styleOverrides: { notchedOutline: { "& legend": {
			fontSize: "0.85em",
			maxWidth: "100%"
		} } } },
		MuiInputAdornment: { styleOverrides: { root: { "& .MuiTypography-root": {
			fontSize: BASE_THEME.typography.pxToRem(14),
			color: BASE_THEME.palette.text.secondary
		} } } },
		MuiInputLabel: {
			defaultProps: { shrink: true },
			styleOverrides: { shrink: {
				transform: "scale(0.85)",
				fontWeight: BASE_THEME.typography.fontWeightMedium,
				"&.Mui-focused": { color: BASE_THEME.palette.text.primary },
				"&.MuiInputLabel-standard": {
					transform: "translate(0, -4px) scale(0.85)",
					color: "#4F4F4F"
				},
				"&.MuiInputLabel-outlined": { transform: "translate(15px, -8px) scale(0.85)" }
			} }
		},
		MuiTabs: {
			defaultProps: { variant: "scrollable" },
			styleOverrides: { indicator: {
				height: 1,
				backgroundColor: BASE_THEME.palette.text.primary
			} }
		},
		MuiTab: { styleOverrides: { root: {
			textTransform: "none",
			minWidth: BASE_THEME.spacing(2),
			paddingLeft: BASE_THEME.spacing(1.5),
			paddingRight: BASE_THEME.spacing(1.5),
			fontSize: BASE_THEME.typography.pxToRem(14),
			fontFamily: BASE_THEME.typography.fontFamily,
			lineHeight: 1.5,
			fontWeight: BASE_THEME.typography.fontWeightMedium,
			transition: "color 0.2s",
			"&.Mui-selected": { color: BASE_THEME.palette.text.primary },
			"&:hover": { color: BASE_THEME.palette.text.primary }
		} } },
		MuiCard: { styleOverrides: { root: { borderRadius: 8 } } },
		MuiCardHeader: { styleOverrides: { title: {
			fontSize: BASE_THEME.typography.pxToRem(18),
			fontWeight: BASE_THEME.typography.fontWeightMedium
		} } }
	},
	typography: {
		fontFamily: BASE_THEME.typography.fontFamily,
		h1: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(40),
			lineHeight: 1.2,
			letterSpacing: "-0.02em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		h2: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(32),
			lineHeight: 1.2,
			letterSpacing: "-0.02em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		h3: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(24),
			lineHeight: 1.5,
			letterSpacing: "-0.01em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		h4: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(20),
			lineHeight: 1.5,
			letterSpacing: "-0.01em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		h5: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(18),
			lineHeight: 1.5,
			letterSpacing: "-0.01em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		h6: {
			fontFamily: BASE_THEME.typography.fontFamily,
			fontSize: BASE_THEME.typography.pxToRem(16),
			lineHeight: 1.5,
			letterSpacing: "-0.005em",
			fontWeight: BASE_THEME.typography.fontWeightMedium
		},
		body1: { fontSize: BASE_THEME.typography.pxToRem(14) },
		body2: { fontSize: BASE_THEME.typography.pxToRem(12) },
		overline: {
			fontWeight: BASE_THEME.typography.fontWeightMedium,
			letterSpacing: "0.05em"
		},
		button: {
			textTransform: "none",
			fontWeight: BASE_THEME.typography.fontWeightMedium,
			lineHeight: 1.5
		},
		caption: {
			letterSpacing: 0,
			lineHeight: 1.5
		}
	},
	shadows: [
		"none",
		"0px 4px 15px rgba(33, 36, 67, 0.04), 0px 0px 2px rgba(33, 36, 67, 0.04), 0px 0px 1px rgba(33, 36, 67, 0.04)",
		"0px 10px 20px rgba(33, 36, 67, 0.04), 0px 2px 6px rgba(33, 36, 67, 0.04), 0px 0px 1px rgba(33, 36, 67, 0.04)",
		"0px 16px 24px rgba(33, 36, 67, 0.05), 0px 2px 6px rgba(33, 36, 67, 0.05), 0px 0px 1px rgba(33, 36, 67, 0.05)",
		"0px 24px 32px rgba(33, 36, 67, 0.06), 0px 16px 24px rgba(33, 36, 67, 0.06), 0px 4px 8px rgba(33, 36, 67, 0.06)",
		...Array(20).fill("none")
	]
});
//#endregion
//#region src/i18n/useTranslation.ts
function useTranslation$1() {
	const { t, i18n } = useTranslation();
	return {
		t,
		language: i18n.language
	};
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/BaseSidebarPanel.tsx
function BaseSidebarPanel({ title, children }) {
	return /* @__PURE__ */ jsxs(Box, {
		p: 2,
		sx: {
			width: "100%",
			maxWidth: "100%",
			boxSizing: "border-box"
		},
		children: [/* @__PURE__ */ jsx(Typography, {
			variant: "overline",
			color: "text.secondary",
			sx: {
				display: "block",
				mb: 2
			},
			children: title
		}), /* @__PURE__ */ jsx(Stack, {
			spacing: 3,
			mb: 3,
			sx: {
				width: "100%",
				maxWidth: "100%"
			},
			children
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/ColorInput/Swatch.tsx
var TILE_BUTTON = {
	width: 24,
	height: 24
};
function Swatch({ paletteColors, value, onChange }) {
	const renderButton = (colorValue) => {
		return /* @__PURE__ */ jsx(Button, {
			onClick: () => onChange(colorValue),
			sx: {
				...TILE_BUTTON,
				backgroundColor: colorValue,
				border: "1px solid",
				borderColor: value === colorValue ? "black" : "grey.200",
				minWidth: 24,
				display: "inline-flex",
				"&:hover": {
					backgroundColor: colorValue,
					borderColor: "grey.500"
				}
			}
		}, colorValue);
	};
	return /* @__PURE__ */ jsx(Box, {
		width: "100%",
		sx: {
			display: "grid",
			gap: 1,
			gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"
		},
		children: paletteColors.map((c) => renderButton(c))
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/ColorInput/Picker.tsx
var DEFAULT_PRESET_COLORS = [
	"#E11D48",
	"#DB2777",
	"#C026D3",
	"#9333EA",
	"#7C3AED",
	"#4F46E5",
	"#2563EB",
	"#0284C7",
	"#0891B2",
	"#0D9488",
	"#059669",
	"#16A34A",
	"#65A30D",
	"#CA8A04",
	"#D97706",
	"#EA580C",
	"#DC2626",
	"#FFFFFF",
	"#FAFAFA",
	"#F5F5F5",
	"#E5E5E5",
	"#D4D4D4",
	"#A3A3A3",
	"#737373",
	"#525252",
	"#404040",
	"#262626",
	"#171717",
	"#0A0A0A",
	"#000000"
];
var SX = {
	p: 1,
	".react-colorful__pointer ": {
		width: 16,
		height: 16
	},
	".react-colorful__saturation": {
		mb: 1,
		borderRadius: "4px"
	},
	".react-colorful__last-control": { borderRadius: "4px" },
	".react-colorful__hue-pointer": {
		width: "4px",
		borderRadius: "4px",
		height: 24,
		cursor: "col-resize"
	},
	".react-colorful__saturation-pointer": { cursor: "all-scroll" },
	input: {
		padding: 1,
		border: "1px solid",
		borderColor: "grey.300",
		borderRadius: "4px",
		width: "100%"
	}
};
function Picker({ value, onChange }) {
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 1,
		sx: SX,
		children: [
			/* @__PURE__ */ jsx(HexColorPicker, {
				color: value,
				onChange
			}),
			/* @__PURE__ */ jsx(Swatch, {
				paletteColors: DEFAULT_PRESET_COLORS,
				value,
				onChange
			}),
			/* @__PURE__ */ jsx(Box, {
				pt: 1,
				children: /* @__PURE__ */ jsx(HexColorInput, {
					prefixed: true,
					color: value,
					onChange
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/ColorInput/BaseColorInput.tsx
var SWATCH_SIZE = 24;
var SWATCH_SX = {
	border: "1px solid",
	borderColor: "cadet.400",
	width: SWATCH_SIZE,
	height: SWATCH_SIZE,
	borderRadius: "4px",
	bgcolor: "#FFFFFF",
	flexShrink: 0
};
var WRAPPER_SX = {
	border: "1px solid",
	borderColor: "grey.300",
	borderRadius: "4px",
	boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
	display: "inline-flex",
	alignItems: "center",
	gap: 1,
	padding: "4px 8px",
	minHeight: 40,
	cursor: "pointer"
};
function ColorInput$1({ label, defaultValue, onChange, nullable }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);
	const handleClickOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const renderResetButton = () => {
		if (!nullable) return null;
		if (typeof value !== "string" || value.trim().length === 0) return null;
		return /* @__PURE__ */ jsx(ButtonBase, {
			onClick: () => {
				setValue(null);
				onChange(null);
			},
			children: /* @__PURE__ */ jsx(CloseOutlined, {
				fontSize: "small",
				sx: { color: "grey.600" }
			})
		});
	};
	const renderOpenButton = () => {
		if (value) return /* @__PURE__ */ jsxs(ButtonBase, {
			onClick: handleClickOpen,
			sx: WRAPPER_SX,
			focusRipple: true,
			children: [/* @__PURE__ */ jsx(Box, { sx: {
				...SWATCH_SX,
				bgcolor: value
			} }), /* @__PURE__ */ jsx(Typography, {
				component: "span",
				variant: "body2",
				sx: {
					color: "text.primary",
					fontFamily: "monospace",
					fontSize: "13px"
				},
				children: value
			})]
		});
		return /* @__PURE__ */ jsx(ButtonBase, {
			onClick: handleClickOpen,
			sx: WRAPPER_SX,
			focusRipple: true,
			children: /* @__PURE__ */ jsx(Box, {
				sx: {
					...SWATCH_SX,
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ jsx(AddOutlined, { sx: { fontSize: 18 } })
			})
		});
	};
	return /* @__PURE__ */ jsxs(Stack, {
		alignItems: "flex-start",
		children: [
			/* @__PURE__ */ jsx(InputLabel, {
				sx: { mb: .5 },
				children: label
			}),
			/* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				children: [renderOpenButton(), renderResetButton()]
			}),
			/* @__PURE__ */ jsx(Menu, {
				anchorEl,
				open: Boolean(anchorEl),
				onClose: () => setAnchorEl(null),
				MenuListProps: { sx: {
					height: "auto",
					padding: 0
				} },
				children: /* @__PURE__ */ jsx(Picker, {
					value: value || "",
					onChange: (v) => {
						setValue(v);
						onChange(v);
					}
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/ColorInput/index.tsx
function ColorInput(props) {
	return /* @__PURE__ */ jsx(ColorInput$1, {
		...props,
		nullable: false
	});
}
function NullableColorInput(props) {
	return /* @__PURE__ */ jsx(ColorInput$1, {
		...props,
		nullable: true
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/RadioGroupInput.tsx
function RadioGroupInput({ label, children, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);
	return /* @__PURE__ */ jsxs(Stack, {
		alignItems: "flex-start",
		children: [/* @__PURE__ */ jsx(InputLabel, {
			shrink: true,
			children: label
		}), /* @__PURE__ */ jsx(ToggleButtonGroup, {
			exclusive: true,
			fullWidth: true,
			value,
			size: "small",
			onChange: (_, v) => {
				if (typeof v !== "string") return;
				setValue(v);
				onChange(v);
			},
			children
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextInput.tsx
function TextInput({ helperText, label, placeholder, rows, InputProps, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue);
	const isMultiline = typeof rows === "number" && rows > 1;
	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);
	return /* @__PURE__ */ jsx(TextField, {
		fullWidth: true,
		multiline: isMultiline,
		minRows: rows,
		variant: isMultiline ? "outlined" : "standard",
		label,
		placeholder,
		helperText,
		InputProps,
		value,
		onChange: (ev) => {
			const v = ev.target.value;
			setValue(v);
			onChange(v);
		}
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextFormatGroup.tsx
function hasUnderline(dec) {
	return typeof dec === "string" && dec.includes("underline");
}
function hasStrikethrough$1(dec) {
	return typeof dec === "string" && dec.includes("line-through");
}
function TextFormatGroup({ value, onChange }) {
	const fontWeight = value?.fontWeight ?? "normal";
	const fontStyle = value?.fontStyle ?? "normal";
	const textDecoration = value?.textDecoration ?? "none";
	const selected = [];
	if (fontWeight === "bold") selected.push("bold");
	if (fontStyle === "italic") selected.push("italic");
	if (hasUnderline(textDecoration)) selected.push("underline");
	if (hasStrikethrough$1(textDecoration)) selected.push("strikethrough");
	const handleChange = (_, newVal) => {
		if (newVal == null) return;
		const next = { ...value };
		next.fontWeight = newVal.includes("bold") ? "bold" : "normal";
		next.fontStyle = newVal.includes("italic") ? "italic" : "normal";
		let dec = "none";
		if (newVal.includes("underline") && newVal.includes("strikethrough")) dec = "underline line-through";
		else if (newVal.includes("underline")) dec = "underline";
		else if (newVal.includes("strikethrough")) dec = "line-through";
		next.textDecoration = dec;
		onChange(next);
	};
	return /* @__PURE__ */ jsx(Stack, {
		alignItems: "flex-start",
		children: /* @__PURE__ */ jsxs(ToggleButtonGroup, {
			size: "small",
			value: selected,
			onChange: handleChange,
			sx: { flexWrap: "nowrap" },
			children: [
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "bold",
					"aria-label": "bold",
					children: /* @__PURE__ */ jsx(FormatBoldOutlined, { fontSize: "small" })
				}),
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "italic",
					"aria-label": "italic",
					children: /* @__PURE__ */ jsx(FormatItalicOutlined, { fontSize: "small" })
				}),
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "underline",
					"aria-label": "underline",
					children: /* @__PURE__ */ jsx(FormatUnderlinedOutlined, { fontSize: "small" })
				}),
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "strikethrough",
					"aria-label": "strikethrough",
					children: /* @__PURE__ */ jsx(StrikethroughSOutlined, { fontSize: "small" })
				})
			]
		})
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/FontFamily.tsx
var OPTIONS = [
	{
		key: "MODERN_SANS",
		label: "Modern sans",
		value: "\"Helvetica Neue\", \"Arial Nova\", \"Nimbus Sans\", Arial, sans-serif"
	},
	{
		key: "BOOK_SANS",
		label: "Book sans",
		value: "Optima, Candara, \"Noto Sans\", source-sans-pro, sans-serif"
	},
	{
		key: "ORGANIC_SANS",
		label: "Organic sans",
		value: "Seravek, \"Gill Sans Nova\", Ubuntu, Calibri, \"DejaVu Sans\", source-sans-pro, sans-serif"
	},
	{
		key: "GEOMETRIC_SANS",
		label: "Geometric sans",
		value: "Avenir, \"Avenir Next LT Pro\", Montserrat, Corbel, \"URW Gothic\", source-sans-pro, sans-serif"
	},
	{
		key: "HEAVY_SANS",
		label: "Heavy sans",
		value: "Bahnschrift, \"DIN Alternate\", \"Franklin Gothic Medium\", \"Nimbus Sans Narrow\", sans-serif-condensed, sans-serif"
	},
	{
		key: "ROUNDED_SANS",
		label: "Rounded sans",
		value: "ui-rounded, \"Hiragino Maru Gothic ProN\", Quicksand, Comfortaa, Manjari, \"Arial Rounded MT Bold\", Calibri, source-sans-pro, sans-serif"
	},
	{
		key: "MODERN_SERIF",
		label: "Modern serif",
		value: "Charter, \"Bitstream Charter\", \"Sitka Text\", Cambria, serif"
	},
	{
		key: "BOOK_SERIF",
		label: "Book serif",
		value: "\"Iowan Old Style\", \"Palatino Linotype\", \"URW Palladio L\", P052, serif"
	},
	{
		key: "MONOSPACE",
		label: "Monospace",
		value: "\"Nimbus Mono PS\", \"Courier New\", \"Cutive Mono\", monospace"
	}
].map((option) => /* @__PURE__ */ jsx(MenuItem, {
	value: option.key,
	sx: { fontFamily: option.value },
	children: option.label
}, option.key));
function NullableFontFamily({ label, onChange, defaultValue }) {
	const [value, setValue] = useState(defaultValue ?? "inherit");
	return /* @__PURE__ */ jsxs(TextField, {
		select: true,
		variant: "standard",
		label,
		value,
		onChange: (ev) => {
			const v = ev.target.value;
			setValue(v);
			onChange(v === null ? null : v);
		},
		children: [/* @__PURE__ */ jsx(MenuItem, {
			value: "inherit",
			children: "Match email settings"
		}), OPTIONS]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/raw/RawSliderInput.tsx
function RawSliderInput({ iconLabel, value, setValue, units, ariaLabel, ...props }) {
	return /* @__PURE__ */ jsxs(Stack, {
		direction: "row",
		alignItems: "center",
		spacing: 2,
		justifyContent: "space-between",
		width: "100%",
		children: [
			/* @__PURE__ */ jsx(Box, {
				sx: {
					minWidth: 24,
					lineHeight: 1,
					flexShrink: 0
				},
				children: iconLabel
			}),
			/* @__PURE__ */ jsx(Slider, {
				...props,
				value,
				"aria-label": ariaLabel,
				onChange: (_, value) => {
					if (typeof value !== "number") throw new Error("RawSliderInput values can only receive numeric values");
					setValue(value);
				}
			}),
			/* @__PURE__ */ jsx(Box, {
				sx: {
					minWidth: 32,
					textAlign: "right",
					flexShrink: 0
				},
				children: /* @__PURE__ */ jsxs(Typography, {
					variant: "body2",
					color: "text.secondary",
					sx: { lineHeight: 1 },
					children: [value, units]
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/FontSizeInput.tsx
function FontSizeInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue ?? 14);
	useEffect(() => {
		setValue(defaultValue ?? 14);
	}, [defaultValue]);
	const handleChange = (value) => {
		setValue(value);
		onChange(value);
	};
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 1,
		alignItems: "flex-start",
		children: [/* @__PURE__ */ jsx(InputLabel, {
			shrink: true,
			children: label
		}), /* @__PURE__ */ jsx(RawSliderInput, {
			iconLabel: /* @__PURE__ */ jsx(TextFieldsOutlined, { sx: { fontSize: 16 } }),
			value,
			setValue: handleChange,
			units: "px",
			step: 1,
			min: 10,
			max: 48
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/FontStyleInput.tsx
function FontStyleInput({ label, defaultValue, onChange }) {
	const { t } = useTranslation$1();
	const normalized = defaultValue || "normal";
	const [value, setValue] = useState(normalized);
	useEffect(() => {
		setValue(normalized);
	}, [normalized]);
	return /* @__PURE__ */ jsxs(RadioGroupInput, {
		label,
		defaultValue: value,
		onChange: (fontStyle) => {
			setValue(fontStyle);
			onChange(fontStyle);
		},
		children: [/* @__PURE__ */ jsx(ToggleButton, {
			value: "normal",
			"aria-label": t("style.normal"),
			children: t("style.normal")
		}), /* @__PURE__ */ jsx(ToggleButton, {
			value: "italic",
			"aria-label": t("style.italic"),
			children: t("style.italic")
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/FontWeightInput.tsx
function FontWeightInput({ label, defaultValue, onChange }) {
	const { t } = useTranslation$1();
	const normalized = defaultValue ?? "normal";
	const [value, setValue] = useState(normalized);
	useEffect(() => {
		setValue(normalized);
	}, [normalized]);
	return /* @__PURE__ */ jsxs(RadioGroupInput, {
		label,
		defaultValue: value,
		onChange: (fontWeight) => {
			setValue(fontWeight);
			onChange(fontWeight);
		},
		children: [/* @__PURE__ */ jsx(ToggleButton, {
			value: "normal",
			"aria-label": t("style.regular"),
			children: t("style.regular")
		}), /* @__PURE__ */ jsx(ToggleButton, {
			value: "bold",
			"aria-label": t("style.bold"),
			children: t("style.bold")
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/LetterSpacingInput.tsx
var MIN = -5;
var MAX = 50;
var DEFAULT = 0;
function parseValue(v) {
	if (v == null) return DEFAULT;
	const n = typeof v === "number" ? v : parseFloat(String(v));
	return Number.isFinite(n) ? Math.max(MIN, Math.min(MAX, n)) : DEFAULT;
}
function LetterSpacingInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(parseValue(defaultValue));
	useEffect(() => {
		setValue(parseValue(defaultValue));
	}, [defaultValue]);
	const handleChange = (v) => {
		setValue(v);
		onChange(v);
	};
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 1,
		alignItems: "flex-start",
		children: [/* @__PURE__ */ jsx(InputLabel, {
			shrink: true,
			children: label
		}), /* @__PURE__ */ jsx(RawSliderInput, {
			iconLabel: /* @__PURE__ */ jsx(TitleOutlined, { sx: { fontSize: 16 } }),
			value,
			setValue: handleChange,
			units: "px",
			step: 1,
			min: MIN,
			max: MAX
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/LineHeightInput.tsx
var PRESETS = [
	1,
	1.5,
	2,
	2.5,
	3
];
var DEFAULT_LINE_HEIGHT = 1.5;
function LineHeightInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue ?? DEFAULT_LINE_HEIGHT);
	useEffect(() => {
		setValue(defaultValue ?? DEFAULT_LINE_HEIGHT);
	}, [defaultValue]);
	return /* @__PURE__ */ jsx(TextField, {
		select: true,
		variant: "standard",
		fullWidth: true,
		label,
		value,
		onChange: (e) => {
			const n = Number(e.target.value);
			setValue(n);
			onChange(n);
		},
		children: PRESETS.map((n) => /* @__PURE__ */ jsx(MenuItem, {
			value: n,
			children: n
		}, n))
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/PaddingInput.tsx
function PaddingInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(() => {
		if (defaultValue) return defaultValue;
		return {
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		};
	});
	function handleChange(internalName, nValue) {
		const v = {
			...value,
			[internalName]: nValue
		};
		setValue(v);
		onChange(v);
	}
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 2,
		alignItems: "flex-start",
		pb: 1,
		children: [
			/* @__PURE__ */ jsx(InputLabel, {
				shrink: true,
				children: label
			}),
			/* @__PURE__ */ jsx(RawSliderInput, {
				iconLabel: /* @__PURE__ */ jsx(AlignVerticalTopOutlined, { sx: { fontSize: 16 } }),
				value: value.top,
				setValue: (num) => handleChange("top", num),
				units: "px",
				step: 4,
				min: 0,
				max: 80,
				marks: true
			}),
			/* @__PURE__ */ jsx(RawSliderInput, {
				iconLabel: /* @__PURE__ */ jsx(AlignVerticalBottomOutlined, { sx: { fontSize: 16 } }),
				value: value.bottom,
				setValue: (num) => handleChange("bottom", num),
				units: "px",
				step: 4,
				min: 0,
				max: 80,
				marks: true
			}),
			/* @__PURE__ */ jsx(RawSliderInput, {
				iconLabel: /* @__PURE__ */ jsx(AlignHorizontalLeftOutlined, { sx: { fontSize: 16 } }),
				value: value.left,
				setValue: (num) => handleChange("left", num),
				units: "px",
				step: 4,
				min: 0,
				max: 80,
				marks: true
			}),
			/* @__PURE__ */ jsx(RawSliderInput, {
				iconLabel: /* @__PURE__ */ jsx(AlignHorizontalRightOutlined, { sx: { fontSize: 16 } }),
				value: value.right,
				setValue: (num) => handleChange("right", num),
				units: "px",
				step: 4,
				min: 0,
				max: 80,
				marks: true
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/SliderInput.tsx
function SliderInput({ label, defaultValue, onChange, ariaLabel, ...props }) {
	const [value, setValue] = useState(defaultValue);
	return /* @__PURE__ */ jsxs(Stack, {
		spacing: 1,
		alignItems: "flex-start",
		children: [/* @__PURE__ */ jsx(InputLabel, {
			shrink: true,
			children: label
		}), /* @__PURE__ */ jsx(RawSliderInput, {
			value,
			ariaLabel: ariaLabel ?? label,
			setValue: (value) => {
				setValue(value);
				onChange(value);
			},
			...props
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextAlignInput.tsx
function TextAlignInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue ?? "left");
	return /* @__PURE__ */ jsxs(RadioGroupInput, {
		label,
		defaultValue: value,
		onChange: (value) => {
			setValue(value);
			onChange(value);
		},
		children: [
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "left",
				"aria-label": "Align left",
				children: /* @__PURE__ */ jsx(FormatAlignLeftOutlined, { fontSize: "small" })
			}),
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "center",
				"aria-label": "Align center",
				children: /* @__PURE__ */ jsx(FormatAlignCenterOutlined, { fontSize: "small" })
			}),
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "right",
				"aria-label": "Align right",
				children: /* @__PURE__ */ jsx(FormatAlignRightOutlined, { fontSize: "small" })
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextDecorationInput.tsx
function TextDecorationInput({ label, defaultValue, onChange }) {
	const { t } = useTranslation$1();
	const normalized = defaultValue || "none";
	const [value, setValue] = useState(normalized);
	useEffect(() => {
		setValue(normalized);
	}, [normalized]);
	return /* @__PURE__ */ jsxs(RadioGroupInput, {
		label,
		defaultValue: value,
		onChange: (v) => {
			setValue(v);
			onChange(v);
		},
		children: [
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "none",
				children: t("style.none")
			}),
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "underline",
				children: t("style.underline")
			}),
			/* @__PURE__ */ jsx(ToggleButton, {
				value: "line-through",
				children: t("style.strikethrough")
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/style-inputs/SingleStylePropertyPanel.tsx
function SingleStylePropertyPanel({ name, value, onChange }) {
	const { t } = useTranslation$1();
	const defaultValue = value[name] ?? null;
	const handleChange = (v) => {
		onChange({
			...value,
			[name]: v
		});
	};
	switch (name) {
		case "backgroundColor": return /* @__PURE__ */ jsx(NullableColorInput, {
			label: t("style.backgroundColor"),
			defaultValue,
			onChange: handleChange
		});
		case "borderColor": return /* @__PURE__ */ jsx(NullableColorInput, {
			label: t("style.borderColor"),
			defaultValue,
			onChange: handleChange
		});
		case "borderRadius": return /* @__PURE__ */ jsx(SliderInput, {
			iconLabel: /* @__PURE__ */ jsx(RoundedCornerOutlined, {}),
			units: "px",
			step: 4,
			marks: true,
			min: 0,
			max: 48,
			label: t("style.borderRadius"),
			defaultValue,
			onChange: handleChange
		});
		case "color": return /* @__PURE__ */ jsx(NullableColorInput, {
			label: t("style.textColor"),
			defaultValue,
			onChange: handleChange
		});
		case "fontFamily": return /* @__PURE__ */ jsx(NullableFontFamily, {
			label: t("style.fontFamily"),
			defaultValue,
			onChange: handleChange
		});
		case "fontSize": return /* @__PURE__ */ jsx(FontSizeInput, {
			label: t("style.fontSize"),
			defaultValue,
			onChange: handleChange
		});
		case "fontWeight": return /* @__PURE__ */ jsx(FontWeightInput, {
			label: t("style.fontWeight"),
			defaultValue,
			onChange: handleChange
		});
		case "fontStyle": return /* @__PURE__ */ jsx(FontStyleInput, {
			label: t("style.fontStyle"),
			defaultValue,
			onChange: handleChange
		});
		case "textDecoration": return /* @__PURE__ */ jsx(TextDecorationInput, {
			label: t("style.textDecoration"),
			defaultValue,
			onChange: handleChange
		});
		case "lineHeight": return /* @__PURE__ */ jsx(LineHeightInput, {
			label: t("style.lineHeight"),
			defaultValue,
			onChange: handleChange
		});
		case "letterSpacing": return /* @__PURE__ */ jsx(LetterSpacingInput, {
			label: t("style.letterSpacing"),
			defaultValue,
			onChange: handleChange
		});
		case "textAlign": return /* @__PURE__ */ jsx(TextAlignInput, {
			label: t("style.alignment"),
			defaultValue,
			onChange: handleChange
		});
		case "padding": return /* @__PURE__ */ jsx(PaddingInput, {
			label: t("style.padding"),
			defaultValue,
			onChange: handleChange
		});
	}
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/style-inputs/MultiStylePropertyPanel.tsx
var FORMAT_GROUP_KEYS = [
	"fontWeight",
	"fontStyle",
	"textDecoration"
];
function hasFormatGroup(names) {
	return FORMAT_GROUP_KEYS.every((k) => names.includes(k));
}
function MultiStylePropertyPanel({ names, value, onChange }) {
	const { t } = useTranslation$1();
	const showFormatGroup = hasFormatGroup(names);
	return /* @__PURE__ */ jsx(Fragment$1, { children: names.map((name) => {
		if (FORMAT_GROUP_KEYS.includes(name)) return null;
		if (name === "letterSpacing" && showFormatGroup) return /* @__PURE__ */ jsxs(React.Fragment, { children: [/* @__PURE__ */ jsx(SingleStylePropertyPanel, {
			name: "letterSpacing",
			value: value || {},
			onChange
		}), /* @__PURE__ */ jsxs(Stack, {
			alignItems: "flex-start",
			sx: { mt: 1 },
			children: [/* @__PURE__ */ jsx(InputLabel, {
				shrink: true,
				children: t("style.formatGroup")
			}), /* @__PURE__ */ jsx(TextFormatGroup, {
				value: value || {},
				onChange
			})]
		})] }, "letterSpacing-and-format");
		return /* @__PURE__ */ jsx(SingleStylePropertyPanel, {
			name,
			value: value || {},
			onChange
		}, name);
	}) });
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/ButtonSidebarPanel.tsx
function ButtonSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = ButtonPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const url = data.props?.url ?? ButtonPropsDefaults.url;
	const fullWidth = data.props?.fullWidth ?? ButtonPropsDefaults.fullWidth;
	const size = data.props?.size ?? ButtonPropsDefaults.size;
	const buttonStyle = data.props?.buttonStyle ?? ButtonPropsDefaults.buttonStyle;
	const buttonTextColor = data.props?.buttonTextColor ?? ButtonPropsDefaults.buttonTextColor;
	const buttonBackgroundColor = data.props?.buttonBackgroundColor ?? ButtonPropsDefaults.buttonBackgroundColor;
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("button.title"),
		children: [
			/* @__PURE__ */ jsx(TextInput, {
				label: t("button.url"),
				defaultValue: url,
				onChange: (url) => updateData({
					...data,
					props: {
						...data.props,
						url
					}
				})
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("button.width"),
				defaultValue: fullWidth ? "FULL_WIDTH" : "AUTO",
				onChange: (v) => updateData({
					...data,
					props: {
						...data.props,
						fullWidth: v === "FULL_WIDTH"
					}
				}),
				children: [/* @__PURE__ */ jsx(ToggleButton, {
					value: "FULL_WIDTH",
					children: t("button.widthFull")
				}), /* @__PURE__ */ jsx(ToggleButton, {
					value: "AUTO",
					children: t("button.widthAuto")
				})]
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("button.size"),
				defaultValue: size,
				onChange: (size) => updateData({
					...data,
					props: {
						...data.props,
						size
					}
				}),
				children: [
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "x-small",
						children: t("button.sizeXSmall")
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "small",
						children: t("button.sizeSmall")
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "medium",
						children: t("button.sizeMedium")
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "large",
						children: t("button.sizeLarge")
					})
				]
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("button.style"),
				defaultValue: buttonStyle,
				onChange: (buttonStyle) => updateData({
					...data,
					props: {
						...data.props,
						buttonStyle
					}
				}),
				children: [
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "rectangle",
						children: t("button.styleRectangle")
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "rounded",
						children: t("button.styleRounded")
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "pill",
						children: t("button.stylePill")
					})
				]
			}),
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("button.textColor"),
				defaultValue: buttonTextColor,
				onChange: (buttonTextColor) => updateData({
					...data,
					props: {
						...data.props,
						buttonTextColor
					}
				})
			}),
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("button.buttonColor"),
				defaultValue: buttonBackgroundColor,
				onChange: (buttonBackgroundColor) => updateData({
					...data,
					props: {
						...data.props,
						buttonBackgroundColor
					}
				})
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: [
					"backgroundColor",
					"fontFamily",
					"fontSize",
					"fontWeight",
					"textAlign",
					"padding"
				],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			})
		]
	});
}
//#endregion
//#region src/documents/blocks/ColumnsContainer/ColumnsContainerPropsSchema.ts
var BasePropsShape = ColumnsContainerPropsSchema.shape.props.unwrap().unwrap().shape;
var ColumnsContainerPropsSchema$1 = z.object({
	style: ColumnsContainerPropsSchema.shape.style,
	props: z.object({
		...BasePropsShape,
		columnsCount: z.number().min(1).max(4).optional().nullable(),
		columns: z.array(z.object({ childrenIds: z.array(z.string()) })).min(1).max(4),
		fixedWidths: z.tuple([
			z.number().nullable().optional(),
			z.number().nullable().optional(),
			z.number().nullable().optional(),
			z.number().nullable().optional()
		]).optional().nullable()
	}).optional().nullable()
});
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/ColumnsContainerSidebarPanel.tsx
function ColumnsContainerPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const document = useDocument();
	const selectedBlockId = useSelectedBlockId();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = ColumnsContainerPropsSchema$1.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const latestBlock = selectedBlockId ? document[selectedBlockId] : null;
	const latestData = latestBlock && latestBlock.type === "ColumnsContainer" ? latestBlock.data : data;
	const currentColumnsCount = latestData.props?.columnsCount ?? 3;
	const currentFixedWidths = latestData.props?.fixedWidths;
	const currentColumns = latestData.props?.columns || (currentColumnsCount === 1 ? [{ childrenIds: [] }] : currentColumnsCount === 2 ? [{ childrenIds: [] }, { childrenIds: [] }] : currentColumnsCount === 4 ? [
		{ childrenIds: [] },
		{ childrenIds: [] },
		{ childrenIds: [] },
		{ childrenIds: [] }
	] : [
		{ childrenIds: [] },
		{ childrenIds: [] },
		{ childrenIds: [] }
	]);
	const getCurrentLayout = React.useCallback(() => {
		if (currentColumnsCount === 1) return "1";
		if (currentColumnsCount === 4) return "4";
		if (currentColumnsCount === 2) {
			if (currentFixedWidths && currentFixedWidths[0] !== null && currentFixedWidths[0] !== void 0 && currentFixedWidths[1] !== null && currentFixedWidths[1] !== void 0) {
				const val1 = currentFixedWidths[0];
				const val2 = currentFixedWidths[1];
				if (Math.abs(val1 - 66.67) < 1 && Math.abs(val2 - 33.33) < 1) return "2:1";
				if (Math.abs(val1 - 33.33) < 1 && Math.abs(val2 - 66.67) < 1) return "1:2";
				if (Math.abs(val1 - 25) < 1 && Math.abs(val2 - 75) < 1) return "1:3";
				if (Math.abs(val1 - 75) < 1 && Math.abs(val2 - 25) < 1) return "3:1";
			}
			return "2";
		}
		if (currentColumnsCount === 3) return "3";
		return "3";
	}, [currentColumnsCount, currentFixedWidths]);
	const handleLayoutChange = (layout) => {
		let newColumnsCount;
		switch (layout) {
			case "1":
				newColumnsCount = 1;
				break;
			case "2":
			case "2:1":
			case "1:2":
			case "1:3":
			case "3:1":
				newColumnsCount = 2;
				break;
			case "3":
				newColumnsCount = 3;
				break;
			case "4":
				newColumnsCount = 4;
				break;
			default: newColumnsCount = 3;
		}
		if (checkDataLoss(newColumnsCount)) {
			setPendingLayout(layout);
			setConfirmDialogOpen(true);
		} else {
			setLayoutValue(layout);
			executeLayoutChange(layout);
		}
	};
	const handleConfirmDialogClose = (confirmed) => {
		setConfirmDialogOpen(false);
		if (confirmed && pendingLayout) {
			setLayoutValue(pendingLayout);
			executeLayoutChange(pendingLayout);
		}
		setPendingLayout(null);
	};
	const [layoutValue, setLayoutValue] = useState(() => getCurrentLayout());
	const [pendingLayout, setPendingLayout] = useState(null);
	const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
	useEffect(() => {
		setLayoutValue(getCurrentLayout());
	}, [getCurrentLayout]);
	const checkDataLoss = React.useCallback((newColumnsCount) => {
		if (newColumnsCount >= currentColumnsCount) return false;
		const actualColumnsLength = currentColumns.length;
		for (let i = newColumnsCount; i < actualColumnsLength; i++) {
			const column = currentColumns[i];
			if (column && column.childrenIds && column.childrenIds.length > 0) return true;
		}
		return false;
	}, [currentColumnsCount, currentColumns]);
	const executeLayoutChange = (layout) => {
		let newColumnsCount;
		let newFixedWidths = [
			null,
			null,
			null,
			null
		];
		let newColumns;
		switch (layout) {
			case "1":
				newColumnsCount = 1;
				newColumns = [{ childrenIds: [] }];
				break;
			case "2":
				newColumnsCount = 2;
				newColumns = [{ childrenIds: [] }, { childrenIds: [] }];
				break;
			case "2:1":
				newColumnsCount = 2;
				newFixedWidths = [
					66.67,
					33.33,
					null,
					null
				];
				newColumns = [{ childrenIds: [] }, { childrenIds: [] }];
				break;
			case "1:2":
				newColumnsCount = 2;
				newFixedWidths = [
					33.33,
					66.67,
					null,
					null
				];
				newColumns = [{ childrenIds: [] }, { childrenIds: [] }];
				break;
			case "3":
				newColumnsCount = 3;
				newColumns = [
					{ childrenIds: [] },
					{ childrenIds: [] },
					{ childrenIds: [] }
				];
				break;
			case "1:3":
				newColumnsCount = 2;
				newFixedWidths = [
					25,
					75,
					null,
					null
				];
				newColumns = [{ childrenIds: [] }, { childrenIds: [] }];
				break;
			case "3:1":
				newColumnsCount = 2;
				newFixedWidths = [
					75,
					25,
					null,
					null
				];
				newColumns = [{ childrenIds: [] }, { childrenIds: [] }];
				break;
			case "4":
				newColumnsCount = 4;
				newColumns = [
					{ childrenIds: [] },
					{ childrenIds: [] },
					{ childrenIds: [] },
					{ childrenIds: [] }
				];
				break;
			default:
				newColumnsCount = 3;
				newColumns = [
					{ childrenIds: [] },
					{ childrenIds: [] },
					{ childrenIds: [] }
				];
		}
		if (newColumnsCount !== currentColumnsCount) if (newColumnsCount > currentColumnsCount) {
			newColumns = [...currentColumns];
			while (newColumns.length < newColumnsCount) newColumns.push({ childrenIds: [] });
		} else newColumns = currentColumns.slice(0, newColumnsCount);
		else if (currentColumns.length === newColumnsCount) newColumns = currentColumns;
		else newColumns = Array.from({ length: newColumnsCount }, (_, i) => currentColumns[i] || { childrenIds: [] });
		updateData({
			...data,
			props: {
				...data.props,
				columnsCount: newColumnsCount,
				columns: newColumns,
				fixedWidths: newFixedWidths
			}
		});
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("columns.title"),
		children: [
			/* @__PURE__ */ jsxs(Box, {
				sx: { mb: 2 },
				children: [/* @__PURE__ */ jsx(Box, {
					sx: {
						mb: 1,
						fontSize: "12px",
						fontWeight: 500,
						color: "text.secondary"
					},
					children: t("columns.layout")
				}), /* @__PURE__ */ jsxs(Box, {
					sx: {
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
						gap: .5
					},
					children: [
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "1",
							selected: layoutValue === "1",
							onChange: () => handleLayoutChange("1"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "1"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "2",
							selected: layoutValue === "2",
							onChange: () => handleLayoutChange("2"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "2"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "2:1",
							selected: layoutValue === "2:1",
							onChange: () => handleLayoutChange("2:1"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "2:1"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "1:2",
							selected: layoutValue === "1:2",
							onChange: () => handleLayoutChange("1:2"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "1:2"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "3",
							selected: layoutValue === "3",
							onChange: () => handleLayoutChange("3"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "3"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "1:3",
							selected: layoutValue === "1:3",
							onChange: () => handleLayoutChange("1:3"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "1:3"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "3:1",
							selected: layoutValue === "3:1",
							onChange: () => handleLayoutChange("3:1"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "3:1"
						}),
						/* @__PURE__ */ jsx(ToggleButton, {
							value: "4",
							selected: layoutValue === "4",
							onChange: () => handleLayoutChange("4"),
							size: "small",
							sx: { minWidth: "unset" },
							children: "4"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(SliderInput, {
				label: t("columns.gap"),
				iconLabel: /* @__PURE__ */ jsx(SpaceBarOutlined, { sx: { color: "text.secondary" } }),
				units: "px",
				step: 4,
				marks: true,
				min: 0,
				max: 80,
				defaultValue: data.props?.columnsGap ?? 0,
				onChange: (columnsGap) => updateData({
					...data,
					props: {
						...data.props,
						columnsGap
					}
				})
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("columns.alignment"),
				defaultValue: data.props?.contentAlignment ?? "middle",
				onChange: (contentAlignment) => {
					updateData({
						...data,
						props: {
							...data.props,
							contentAlignment
						}
					});
				},
				children: [
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "top",
						title: t("columns.alignmentTop"),
						children: /* @__PURE__ */ jsx(VerticalAlignTopOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "middle",
						title: t("columns.alignmentMiddle"),
						children: /* @__PURE__ */ jsx(VerticalAlignCenterOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "bottom",
						title: t("columns.alignmentBottom"),
						children: /* @__PURE__ */ jsx(VerticalAlignBottomOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "stretch",
						title: t("columns.alignmentStretch"),
						children: /* @__PURE__ */ jsx(UnfoldMoreOutlined, { fontSize: "small" })
					})
				]
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: ["backgroundColor", "padding"],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			}),
			/* @__PURE__ */ jsxs(Dialog, {
				open: confirmDialogOpen,
				onClose: () => handleConfirmDialogClose(false),
				children: [
					/* @__PURE__ */ jsx(DialogTitle, { children: t("columns.confirmChangeTitle") }),
					/* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Typography, { children: t("columns.confirmChangeMessage") }) }),
					/* @__PURE__ */ jsxs(DialogActions, { children: [/* @__PURE__ */ jsx(Button, {
						variant: "outlined",
						color: "primary",
						onClick: () => handleConfirmDialogClose(false),
						children: t("columns.cancel")
					}), /* @__PURE__ */ jsx(Button, {
						variant: "contained",
						color: "error",
						onClick: () => handleConfirmDialogClose(true),
						children: t("columns.confirm")
					})] })
				]
			})
		]
	});
}
//#endregion
//#region src/documents/blocks/Container/ContainerPropsSchema.tsx
var ContainerPropsSchema$1 = z.object({
	style: ContainerPropsSchema.shape.style,
	props: z.object({ childrenIds: z.array(z.string()).optional().nullable() }).optional().nullable()
});
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/ContainerSidebarPanel.tsx
function ContainerSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = ContainerPropsSchema$1.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	return /* @__PURE__ */ jsx(BaseSidebarPanel, {
		title: t("container.title"),
		children: /* @__PURE__ */ jsx(MultiStylePropertyPanel, {
			names: [
				"backgroundColor",
				"borderColor",
				"borderRadius",
				"padding"
			],
			value: data.style,
			onChange: (style) => updateData({
				...data,
				style
			})
		})
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/DividerSidebarPanel.tsx
function DividerSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = DividerPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const lineColor = data.props?.lineColor ?? DividerPropsDefaults.lineColor;
	const lineHeight = data.props?.lineHeight ?? DividerPropsDefaults.lineHeight;
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("divider.title"),
		children: [
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("divider.color"),
				defaultValue: lineColor,
				onChange: (lineColor) => updateData({
					...data,
					props: {
						...data.props,
						lineColor
					}
				})
			}),
			/* @__PURE__ */ jsx(SliderInput, {
				label: t("divider.height"),
				iconLabel: /* @__PURE__ */ jsx(HeightOutlined, { sx: { color: "text.secondary" } }),
				units: "px",
				step: 1,
				min: 1,
				max: 24,
				defaultValue: lineHeight,
				onChange: (lineHeight) => updateData({
					...data,
					props: {
						...data.props,
						lineHeight
					}
				})
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: ["backgroundColor", "padding"],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			})
		]
	});
}
//#endregion
//#region src/documents/blocks/EmailLayout/EmailLayoutPropsSchema.tsx
var COLOR_SCHEMA = z.string().regex(/^#[0-9a-fA-F]{6}$/).nullable().optional();
var FONT_FAMILY_SCHEMA = z.enum([
	"MODERN_SANS",
	"BOOK_SANS",
	"ORGANIC_SANS",
	"GEOMETRIC_SANS",
	"HEAVY_SANS",
	"ROUNDED_SANS",
	"MODERN_SERIF",
	"BOOK_SERIF",
	"MONOSPACE"
]).nullable().optional();
var EmailLayoutPropsSchema = z.object({
	backdropColor: COLOR_SCHEMA,
	borderColor: COLOR_SCHEMA,
	borderRadius: z.number().optional().nullable(),
	canvasColor: COLOR_SCHEMA,
	textColor: COLOR_SCHEMA,
	fontFamily: FONT_FAMILY_SCHEMA,
	width: z.number().optional().nullable(),
	childrenIds: z.array(z.string()).optional().nullable()
});
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/EmailLayoutSidebarPanel.tsx
function EmailLayoutSidebarFields({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = EmailLayoutPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("emailLayout.global"),
		children: [
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("emailLayout.backdropColor"),
				defaultValue: data.backdropColor ?? "#F5F5F5",
				onChange: (backdropColor) => updateData({
					...data,
					backdropColor
				})
			}),
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("emailLayout.canvasColor"),
				defaultValue: data.canvasColor ?? "#FFFFFF",
				onChange: (canvasColor) => updateData({
					...data,
					canvasColor
				})
			}),
			/* @__PURE__ */ jsx(NullableColorInput, {
				label: t("emailLayout.canvasBorderColor"),
				defaultValue: data.borderColor ?? null,
				onChange: (borderColor) => updateData({
					...data,
					borderColor
				})
			}),
			/* @__PURE__ */ jsx(SliderInput, {
				iconLabel: /* @__PURE__ */ jsx(AspectRatioOutlined, {}),
				units: "px",
				step: 20,
				marks: true,
				min: 600,
				max: 660,
				label: t("emailLayout.pageWidth"),
				defaultValue: data.width ?? 600,
				onChange: (width) => updateData({
					...data,
					width
				})
			}),
			/* @__PURE__ */ jsx(NullableFontFamily, {
				label: t("emailLayout.fontFamily"),
				defaultValue: "MODERN_SANS",
				onChange: (fontFamily) => updateData({
					...data,
					fontFamily
				})
			}),
			/* @__PURE__ */ jsx(ColorInput, {
				label: t("emailLayout.textColor"),
				defaultValue: data.textColor ?? "#262626",
				onChange: (textColor) => updateData({
					...data,
					textColor
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/HeadingSidebarPanel.tsx
function HeadingSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = HeadingPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("heading.title"),
		children: [/* @__PURE__ */ jsxs(RadioGroupInput, {
			label: t("heading.level"),
			defaultValue: data.props?.level ?? HeadingPropsDefaults.level,
			onChange: (level) => {
				updateData({
					...data,
					props: {
						...data.props,
						level
					}
				});
			},
			children: [
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "h1",
					children: "H1"
				}),
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "h2",
					children: "H2"
				}),
				/* @__PURE__ */ jsx(ToggleButton, {
					value: "h3",
					children: "H3"
				})
			]
		}), /* @__PURE__ */ jsx(MultiStylePropertyPanel, {
			names: [
				"color",
				"backgroundColor",
				"fontFamily",
				"fontWeight",
				"textAlign",
				"padding"
			],
			value: data.style,
			onChange: (style) => updateData({
				...data,
				style
			})
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/CodeMirrorInput.tsx
function CodeMirrorInput({ label, value, onChange, height = "200px" }) {
	const [internalValue, setInternalValue] = React.useState(value);
	const debounceTimeoutRef = useRef(null);
	useEffect(() => {
		if (value !== internalValue) setInternalValue(value);
	}, [value]);
	const handleChangeDebounced = (newValue) => {
		setInternalValue(newValue);
		if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
		debounceTimeoutRef.current = setTimeout(() => {
			onChange(newValue);
		}, 300);
	};
	useEffect(() => {
		return () => {
			if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Box, {
		sx: { mb: 2 },
		children: [/* @__PURE__ */ jsx(Typography, {
			variant: "body2",
			sx: {
				mb: 1,
				fontSize: "12px",
				fontWeight: 500
			},
			children: label
		}), /* @__PURE__ */ jsx(Box, {
			sx: {
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 1,
				overflow: "hidden",
				"& .cm-editor": { fontSize: "13px" },
				"& .cm-scroller": { fontFamily: "monospace" }
			},
			children: /* @__PURE__ */ jsx(CodeMirror, {
				value: internalValue,
				height,
				extensions: [html()],
				theme: dracula,
				onChange: handleChangeDebounced,
				basicSetup: {
					lineNumbers: true,
					foldGutter: true,
					dropCursor: false,
					allowMultipleSelections: false
				}
			})
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/HtmlSidebarPanel.tsx
function HtmlSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = HtmlPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("html.title"),
		children: [/* @__PURE__ */ jsx(CodeMirrorInput, {
			label: t("html.content"),
			value: data.props?.contents ?? "",
			onChange: (contents) => updateData({
				...data,
				props: {
					...data.props,
					contents
				}
			}),
			height: "400px"
		}), /* @__PURE__ */ jsx(MultiStylePropertyPanel, {
			names: ["padding"],
			value: data.style,
			onChange: (style) => updateData({
				...data,
				style
			})
		})]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/TextDimensionInput.tsx
function TextDimensionInput({ label, defaultValue, onChange }) {
	const handleChange = (ev) => {
		const value = parseInt(ev.target.value);
		onChange(isNaN(value) ? null : value);
	};
	return /* @__PURE__ */ jsx(TextField, {
		fullWidth: true,
		onChange: handleChange,
		defaultValue,
		label,
		variant: "standard",
		placeholder: "auto",
		size: "small",
		InputProps: { endAdornment: /* @__PURE__ */ jsx(Typography, {
			variant: "body2",
			color: "text.secondary",
			children: "px"
		}) }
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/ImageSidebarPanel.tsx
function ImageSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const [uploadMode, setUploadMode] = useState("url");
	const [uploading, setUploading] = useState(false);
	const fileInputRef = useRef(null);
	const imageUploadHandler = useImageUploadHandler();
	const updateData = (d) => {
		const res = ImagePropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const handleFileSelect = async (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!imageUploadHandler) return;
		setUploading(true);
		try {
			const url = await imageUploadHandler(file);
			updateData({
				...data,
				props: {
					...data.props,
					url
				}
			});
			setUploadMode("url");
		} catch {} finally {
			setUploading(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("image.title"),
		children: [
			/* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				children: [/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsxs(ToggleButton, {
						value: "url",
						selected: uploadMode === "url",
						onChange: () => setUploadMode("url"),
						size: "small",
						fullWidth: true,
						children: [/* @__PURE__ */ jsx(LinkOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("image.url")]
					}), /* @__PURE__ */ jsxs(ToggleButton, {
						value: "upload",
						selected: uploadMode === "upload",
						onChange: () => setUploadMode("upload"),
						size: "small",
						fullWidth: true,
						disabled: !imageUploadHandler,
						children: [/* @__PURE__ */ jsx(CloudUploadOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("image.upload")]
					})]
				}), uploadMode === "url" ? /* @__PURE__ */ jsx(TextInput, {
					label: t("image.sourceUrl"),
					defaultValue: data.props?.url ?? "",
					onChange: (v) => {
						const url = v.trim().length === 0 ? null : v.trim();
						updateData({
							...data,
							props: {
								...data.props,
								url
							}
						});
					}
				}) : /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: "image/*",
							style: { display: "none" },
							onChange: handleFileSelect
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							startIcon: uploading ? /* @__PURE__ */ jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsx(CloudUploadOutlined, {}),
							onClick: handleUploadClick,
							disabled: uploading || !imageUploadHandler,
							fullWidth: true,
							children: uploading ? t("image.uploading") : t("image.selectImage")
						}),
						!imageUploadHandler && /* @__PURE__ */ jsx(Typography, {
							variant: "caption",
							color: "text.secondary",
							children: t("image.uploadHandlerNotConfigured")
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(TextInput, {
				label: t("image.altText"),
				defaultValue: data.props?.alt ?? "",
				onChange: (alt) => updateData({
					...data,
					props: {
						...data.props,
						alt
					}
				})
			}),
			/* @__PURE__ */ jsx(TextInput, {
				label: t("image.clickThroughUrl"),
				defaultValue: data.props?.linkHref ?? "",
				onChange: (v) => {
					const linkHref = v.trim().length === 0 ? null : v.trim();
					updateData({
						...data,
						props: {
							...data.props,
							linkHref
						}
					});
				}
			}),
			/* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				spacing: 2,
				children: [/* @__PURE__ */ jsx(TextDimensionInput, {
					label: t("image.width"),
					defaultValue: data.props?.width,
					onChange: (width) => updateData({
						...data,
						props: {
							...data.props,
							width
						}
					})
				}), /* @__PURE__ */ jsx(TextDimensionInput, {
					label: t("image.height"),
					defaultValue: data.props?.height,
					onChange: (height) => updateData({
						...data,
						props: {
							...data.props,
							height
						}
					})
				})]
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("image.alignment"),
				defaultValue: data.props?.contentAlignment ?? "middle",
				onChange: (contentAlignment) => updateData({
					...data,
					props: {
						...data.props,
						contentAlignment
					}
				}),
				children: [
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "top",
						children: /* @__PURE__ */ jsx(VerticalAlignTopOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "middle",
						children: /* @__PURE__ */ jsx(VerticalAlignCenterOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "bottom",
						children: /* @__PURE__ */ jsx(VerticalAlignBottomOutlined, { fontSize: "small" })
					})
				]
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: [
					"backgroundColor",
					"textAlign",
					"padding"
				],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			})
		]
	});
}
//#endregion
//#region src/documents/blocks/helpers/zod.ts
function zPadding() {
	return z.object({
		top: z.number(),
		bottom: z.number(),
		right: z.number(),
		left: z.number()
	});
}
//#endregion
//#region src/documents/blocks/Video/VideoPropsSchema.tsx
var VideoPropsSchema = z.object({
	props: z.object({
		url: z.string().nullable().optional(),
		alt: z.string().optional().nullable(),
		width: z.string().optional().nullable(),
		height: z.string().optional().nullable(),
		contentAlignment: z.enum([
			"top",
			"middle",
			"bottom"
		]).optional().nullable(),
		linkHref: z.string().nullable().optional(),
		autoplay: z.boolean().optional().nullable(),
		loop: z.boolean().optional().nullable(),
		muted: z.boolean().optional().nullable(),
		controls: z.boolean().optional().nullable()
	}).optional().nullable(),
	style: z.object({
		padding: zPadding().optional().nullable(),
		backgroundColor: z.string().optional().nullable(),
		textAlign: z.enum([
			"left",
			"center",
			"right"
		]).optional().nullable()
	}).optional().nullable()
});
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/helpers/inputs/BooleanInput.tsx
function BooleanInput({ label, defaultValue, onChange }) {
	const [value, setValue] = useState(defaultValue);
	return /* @__PURE__ */ jsx(FormControlLabel, {
		label,
		control: /* @__PURE__ */ jsx(Switch, {
			checked: value,
			onChange: (_, checked) => {
				setValue(checked);
				onChange(checked);
			}
		})
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/VideoSidebarPanel.tsx
function VideoSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const [uploadMode, setUploadMode] = useState("url");
	const [uploading, setUploading] = useState(false);
	const fileInputRef = useRef(null);
	const videoUploadHandler = useVideoUploadHandler();
	const updateData = (d) => {
		const res = VideoPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const handleFileSelect = async (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!videoUploadHandler) return;
		setUploading(true);
		try {
			const url = await videoUploadHandler(file);
			updateData({
				...data,
				props: {
					...data.props,
					url
				}
			});
			setUploadMode("url");
		} catch {} finally {
			setUploading(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	const handleUploadClick = () => {
		fileInputRef.current?.click();
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("video.title"),
		children: [
			/* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				children: [/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsxs(ToggleButton, {
						value: "url",
						selected: uploadMode === "url",
						onChange: () => setUploadMode("url"),
						size: "small",
						fullWidth: true,
						children: [/* @__PURE__ */ jsx(LinkOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("video.url")]
					}), /* @__PURE__ */ jsxs(ToggleButton, {
						value: "upload",
						selected: uploadMode === "upload",
						onChange: () => setUploadMode("upload"),
						size: "small",
						fullWidth: true,
						disabled: !videoUploadHandler,
						children: [/* @__PURE__ */ jsx(CloudUploadOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("video.upload")]
					})]
				}), uploadMode === "url" ? /* @__PURE__ */ jsx(TextInput, {
					label: t("video.sourceUrl"),
					defaultValue: data.props?.url ?? "",
					onChange: (v) => {
						const url = v.trim().length === 0 ? null : v.trim();
						updateData({
							...data,
							props: {
								...data.props,
								url
							}
						});
					}
				}) : /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: "video/*",
							style: { display: "none" },
							onChange: handleFileSelect
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							startIcon: uploading ? /* @__PURE__ */ jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsx(CloudUploadOutlined, {}),
							onClick: handleUploadClick,
							disabled: uploading || !videoUploadHandler,
							fullWidth: true,
							children: uploading ? t("video.uploading") : t("video.selectVideo")
						}),
						!videoUploadHandler && /* @__PURE__ */ jsx(Typography, {
							variant: "caption",
							color: "text.secondary",
							children: t("video.uploadHandlerNotConfigured")
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(TextInput, {
				label: t("video.altText"),
				defaultValue: data.props?.alt ?? "",
				onChange: (alt) => updateData({
					...data,
					props: {
						...data.props,
						alt
					}
				})
			}),
			/* @__PURE__ */ jsx(TextInput, {
				label: t("video.clickThroughUrl"),
				defaultValue: data.props?.linkHref ?? "",
				onChange: (v) => {
					const linkHref = v.trim().length === 0 ? null : v.trim();
					updateData({
						...data,
						props: {
							...data.props,
							linkHref
						}
					});
				}
			}),
			/* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				spacing: 2,
				children: [/* @__PURE__ */ jsx(TextDimensionInput, {
					label: t("video.width"),
					defaultValue: data.props?.width ? (() => {
						const num = parseInt(data.props.width);
						return isNaN(num) ? void 0 : num;
					})() : void 0,
					onChange: (width) => {
						const widthStr = width !== null ? `${width}px` : null;
						updateData({
							...data,
							props: {
								...data.props,
								width: widthStr
							}
						});
					}
				}), /* @__PURE__ */ jsx(TextDimensionInput, {
					label: t("video.height"),
					defaultValue: data.props?.height ? (() => {
						const num = parseInt(data.props.height);
						return isNaN(num) ? void 0 : num;
					})() : void 0,
					onChange: (height) => {
						const heightStr = height !== null ? `${height}px` : null;
						updateData({
							...data,
							props: {
								...data.props,
								height: heightStr
							}
						});
					}
				})]
			}),
			/* @__PURE__ */ jsxs(RadioGroupInput, {
				label: t("video.alignment"),
				defaultValue: data.props?.contentAlignment ?? "middle",
				onChange: (contentAlignment) => updateData({
					...data,
					props: {
						...data.props,
						contentAlignment
					}
				}),
				children: [
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "top",
						children: /* @__PURE__ */ jsx(VerticalAlignTopOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "middle",
						children: /* @__PURE__ */ jsx(VerticalAlignCenterOutlined, { fontSize: "small" })
					}),
					/* @__PURE__ */ jsx(ToggleButton, {
						value: "bottom",
						children: /* @__PURE__ */ jsx(VerticalAlignBottomOutlined, { fontSize: "small" })
					})
				]
			}),
			/* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				children: [
					/* @__PURE__ */ jsx(BooleanInput, {
						label: t("video.autoplay"),
						defaultValue: data.props?.autoplay ?? false,
						onChange: (autoplay) => updateData({
							...data,
							props: {
								...data.props,
								autoplay
							}
						})
					}),
					/* @__PURE__ */ jsx(BooleanInput, {
						label: t("video.loop"),
						defaultValue: data.props?.loop ?? false,
						onChange: (loop) => updateData({
							...data,
							props: {
								...data.props,
								loop
							}
						})
					}),
					/* @__PURE__ */ jsx(BooleanInput, {
						label: t("video.muted"),
						defaultValue: data.props?.muted ?? false,
						onChange: (muted) => updateData({
							...data,
							props: {
								...data.props,
								muted
							}
						})
					}),
					/* @__PURE__ */ jsx(BooleanInput, {
						label: t("video.controls"),
						defaultValue: data.props?.controls ?? true,
						onChange: (controls) => updateData({
							...data,
							props: {
								...data.props,
								controls
							}
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: [
					"backgroundColor",
					"textAlign",
					"padding"
				],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/SpacerSidebarPanel.tsx
function SpacerSidebarPanel({ data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const updateData = (d) => {
		const res = SpacerPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	return /* @__PURE__ */ jsx(BaseSidebarPanel, {
		title: t("spacer.title"),
		children: /* @__PURE__ */ jsx(SliderInput, {
			label: t("spacer.height"),
			iconLabel: /* @__PURE__ */ jsx(HeightOutlined, { sx: { color: "text.secondary" } }),
			units: "px",
			step: 4,
			min: 4,
			max: 128,
			defaultValue: data.props?.height ?? SpacerPropsDefaults.height,
			onChange: (height) => updateData({
				...data,
				props: {
					...data.props,
					height
				}
			})
		})
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/TextSidebarPanel.tsx
/** 跟随选区的 7 项：显示/应用以选区首字或整段选区为准；其余为全局 */
var SELECTION_AWARE_KEYS = [
	"color",
	"backgroundColor",
	"fontFamily",
	"fontSize",
	"letterSpacing",
	"fontWeight",
	"fontStyle",
	"textDecoration"
];
var SELECTION_AWARE_NAMES = [
	"color",
	"backgroundColor",
	"fontFamily",
	"fontSize",
	"letterSpacing",
	"fontWeight",
	"fontStyle",
	"textDecoration"
];
var GLOBAL_NAMES = [
	"lineHeight",
	"textAlign",
	"padding"
];
function hasStrikethrough(dec) {
	return typeof dec === "string" && dec.includes("line-through");
}
function getEffectiveStyleAtOffset(global, runs, offset) {
	const s = global ? { ...global } : {};
	if (!runs) return s;
	for (const run of runs) if (offset >= run.start && offset < run.end && run.style) Object.assign(s, run.style);
	return s;
}
function TextSidebarPanel({ blockId, data, setData }) {
	const { t } = useTranslation$1();
	const [, setErrors] = useState(null);
	const textSelection = useTextSelection();
	const lastTextBlockContent = useLastTextBlockContent();
	const hasSelection = textSelection?.blockId === blockId && textSelection.start < textSelection.end;
	const displayStyle = useMemo(() => {
		const global = data.style ?? {};
		if (!hasSelection || !textSelection) return global;
		const firstCharStyle = getEffectiveStyleAtOffset(global, data.props?.inlineRuns ?? null, textSelection.start);
		return {
			...global,
			color: firstCharStyle.color,
			backgroundColor: firstCharStyle.backgroundColor,
			fontFamily: firstCharStyle.fontFamily,
			fontSize: firstCharStyle.fontSize,
			letterSpacing: firstCharStyle.letterSpacing,
			fontWeight: firstCharStyle.fontWeight,
			fontStyle: firstCharStyle.fontStyle,
			textDecoration: firstCharStyle.textDecoration
		};
	}, [
		data,
		hasSelection,
		textSelection
	]);
	const updateData = (d) => {
		const res = TextPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const handleStyleChange = (newStyle) => {
		const currentText = lastTextBlockContent?.blockId === blockId ? lastTextBlockContent.text : data.props?.text ?? "";
		const prev = displayStyle;
		const next = newStyle;
		const ALL_KEYS = [
			...SELECTION_AWARE_KEYS,
			"lineHeight",
			"textAlign",
			"padding"
		];
		const changed = {};
		for (const k of ALL_KEYS) if (next[k] !== prev[k]) changed[k] = next[k];
		if (Object.keys(changed).length === 0) return;
		const changedSelectionAware = {};
		const changedGlobalOnly = {};
		for (const [k, v] of Object.entries(changed)) {
			const key = k;
			if (SELECTION_AWARE_KEYS.includes(key)) changedSelectionAware[key] = v;
			else changedGlobalOnly[key] = v;
		}
		const applyGlobalPatch = (patch) => {
			if (!patch || Object.keys(patch).length === 0) return;
			if ("lineHeight" in patch || "textAlign" in patch || "padding" in patch) {
				const nextRuns = ((data.props ?? {}).inlineRuns ?? []).map((run) => {
					const nextStyle = { ...run.style ?? {} };
					delete nextStyle.lineHeight;
					return Object.keys(nextStyle).length ? {
						...run,
						style: nextStyle
					} : null;
				}).filter((v) => v != null);
				updateData({
					...data,
					style: {
						...data.style,
						...patch
					},
					props: {
						...data.props,
						inlineRuns: nextRuns.length ? nextRuns : void 0
					}
				});
				return;
			}
			updateData({
				...data,
				style: {
					...data.style,
					...patch
				}
			});
		};
		if (!hasSelection || !textSelection) {
			applyGlobalPatch({
				...changedSelectionAware,
				...changedGlobalOnly
			});
			return;
		}
		if (Object.keys(changedGlobalOnly).length) applyGlobalPatch(changedGlobalOnly);
		if (Object.keys(changedSelectionAware).length) {
			const textLen = currentText.length;
			const s = Math.max(0, Math.min(textLen, textSelection.start));
			const e = Math.max(0, Math.min(textLen, textSelection.end));
			if (s >= e) return;
			const nextRuns = [...data.props?.inlineRuns ?? []];
			nextRuns.push({
				start: s,
				end: e,
				style: changedSelectionAware
			});
			markLastInlineStyleApply();
			updateData({
				...data,
				props: {
					...data.props,
					text: currentText,
					inlineRuns: nextRuns
				}
			});
		}
	};
	const textForSnippet = lastTextBlockContent?.blockId === blockId ? lastTextBlockContent.text : data.props?.text ?? "";
	const selectedSnippet = hasSelection && textSelection ? textForSnippet.slice(textSelection.start, textSelection.end) : "";
	const linkEnabled = hasSelection && !data.props?.markdown;
	const [linkAnchorEl, setLinkAnchorEl] = useState(null);
	const [linkKind, setLinkKind] = useState("web");
	const [linkUrl, setLinkUrl] = useState("");
	const [linkTargetBlank, setLinkTargetBlank] = useState(true);
	const getSafeHref = (kind, raw) => {
		const v = raw.trim();
		if (!v) return null;
		if (kind === "email") {
			const email = v.replace(/^mailto:/i, "").trim();
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
			return `mailto:${email}`;
		}
		const normalized = /^https?:\/\//i.test(v) ? v : `https://${v}`;
		try {
			const parsed = new URL(normalized);
			if (!/^https?:$/i.test(parsed.protocol)) return null;
			if (!parsed.hostname) return null;
			const host = parsed.hostname.trim();
			const isIpv4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(host);
			const isIpv6 = host.includes(":");
			if (!host.includes(".") && !isIpv4 && !isIpv6) return null;
			return parsed.toString();
		} catch {
			return null;
		}
	};
	const getExistingLinkAt = (offset) => {
		const links = data.props?.inlineLinks ?? [];
		for (const l of links) if (offset >= l.start && offset < l.end) return l;
		return null;
	};
	const applyInlineLinksOverlay = (prev, start, end, next, text) => {
		if (start >= end) return prev ?? void 0;
		const isWhitespaceOnly = (s, e) => {
			if (!text) return false;
			return text.slice(s, e).trim() === "";
		};
		const out = [];
		for (const l of prev ?? []) {
			if (l.end <= start || l.start >= end) {
				out.push(l);
				continue;
			}
			if (l.start < start) {
				if (!isWhitespaceOnly(l.start, start)) out.push({
					...l,
					end: start
				});
			}
			if (l.end > end) {
				if (!isWhitespaceOnly(end, l.end)) out.push({
					...l,
					start: end
				});
			}
		}
		out.push(next);
		out.sort((a, b) => a.start - b.start || a.end - b.end);
		const merged = [];
		for (const l of out) {
			const last = merged[merged.length - 1];
			if (last && last.end === l.start && last.href === l.href && Boolean(last.targetBlank) === Boolean(l.targetBlank)) {
				last.end = l.end;
				continue;
			}
			merged.push({ ...l });
		}
		return merged.length ? merged : void 0;
	};
	const handleOpenLink = (e) => {
		if (!linkEnabled || !textSelection) return;
		const existing = getExistingLinkAt(textSelection.start);
		if (existing) {
			if (/^mailto:/i.test(existing.href)) {
				setLinkKind("email");
				setLinkUrl(existing.href.replace(/^mailto:/i, ""));
			} else {
				setLinkKind("web");
				setLinkUrl(existing.href);
			}
			setLinkTargetBlank(Boolean(existing.targetBlank));
		} else {
			setLinkKind("web");
			setLinkUrl("");
			setLinkTargetBlank(true);
		}
		setLinkAnchorEl(e.currentTarget);
	};
	const handleCloseLink = () => {
		setLinkAnchorEl(null);
	};
	const handleSaveLink = () => {
		if (!textSelection) return;
		const safeHref = getSafeHref(linkKind, linkUrl);
		if (!safeHref) return;
		const currentText = lastTextBlockContent?.blockId === blockId ? lastTextBlockContent.text : data.props?.text ?? "";
		const textLen = currentText.length;
		const s = Math.max(0, Math.min(textLen, textSelection.start));
		const e = Math.max(0, Math.min(textLen, textSelection.end));
		if (s >= e) return;
		const nextLinks = applyInlineLinksOverlay(data.props?.inlineLinks ?? [], s, e, {
			start: s,
			end: e,
			href: safeHref,
			targetBlank: linkTargetBlank
		}, currentText);
		const currentRuns = data.props?.inlineRuns ?? [] ?? [];
		const underlineRuns = [];
		for (let i = s; i < e; i++) {
			const dec = hasStrikethrough(getEffectiveStyleAtOffset(data.style ?? {}, currentRuns, i).textDecoration) ? "underline line-through" : "underline";
			const last = underlineRuns[underlineRuns.length - 1];
			if (last && last.end === i && last.style.textDecoration === dec) last.end = i + 1;
			else underlineRuns.push({
				start: i,
				end: i + 1,
				style: { textDecoration: dec }
			});
		}
		markLastInlineStyleApply();
		updateData({
			...data,
			props: {
				...data.props,
				text: currentText,
				inlineLinks: nextLinks,
				inlineRuns: [...currentRuns, ...underlineRuns]
			}
		});
		setLinkAnchorEl(null);
	};
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("text.title"),
		children: [
			hasSelection && /* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				alignItems: "center",
				justifyContent: "space-between",
				sx: {
					py: .75,
					px: 1,
					borderRadius: 1,
					bgcolor: "action.selected",
					border: "1px solid",
					borderColor: "divider"
				},
				children: [/* @__PURE__ */ jsx(Typography, {
					variant: "body2",
					color: "text.secondary",
					noWrap: true,
					sx: {
						flex: 1,
						minWidth: 0,
						mr: .5
					},
					children: selectedSnippet ? t("text.selectedSnippet", { snippet: selectedSnippet.length > 20 ? selectedSnippet.slice(0, 20) + "…" : selectedSnippet }) : t("text.selectionRange")
				}), /* @__PURE__ */ jsx(IconButton, {
					size: "small",
					onClick: () => setTextSelection(null),
					"aria-label": t("text.clearSelection"),
					sx: { flexShrink: 0 },
					children: /* @__PURE__ */ jsx(CloseOutlined, { fontSize: "small" })
				})]
			}),
			/* @__PURE__ */ jsxs(Stack, {
				direction: "row",
				alignItems: "start",
				flexDirection: "column",
				justifyContent: "space-between",
				children: [/* @__PURE__ */ jsx(InputLabel, {
					shrink: true,
					children: t("text.link")
				}), /* @__PURE__ */ jsx(Button, {
					size: "small",
					variant: "outlined",
					onClick: handleOpenLink,
					disabled: !linkEnabled,
					"aria-label": t("text.link"),
					startIcon: /* @__PURE__ */ jsx(LinkOutlined$1, { fontSize: "small" }),
					sx: {
						alignSelf: "flex-start",
						mt: .5,
						color: "text.secondary",
						borderColor: "divider",
						"& .MuiButton-startIcon": { color: "text.secondary" },
						"&:hover": {
							borderColor: "text.disabled",
							backgroundColor: "action.hover"
						}
					},
					children: t("text.editLink")
				})]
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: SELECTION_AWARE_NAMES,
				value: displayStyle,
				onChange: handleStyleChange
			}),
			/* @__PURE__ */ jsx(Divider, { sx: { my: 2 } }),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: GLOBAL_NAMES,
				value: displayStyle,
				onChange: handleStyleChange
			}),
			/* @__PURE__ */ jsx(Popover, {
				open: Boolean(linkAnchorEl),
				anchorEl: linkAnchorEl,
				onClose: handleCloseLink,
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "left"
				},
				transformOrigin: {
					vertical: "top",
					horizontal: "left"
				},
				PaperProps: { sx: {
					width: 360,
					p: 2.5
				} },
				children: /* @__PURE__ */ jsxs(Stack, {
					spacing: 2,
					children: [
						/* @__PURE__ */ jsx(Typography, {
							variant: "subtitle1",
							sx: { fontWeight: 700 },
							children: t("text.link")
						}),
						/* @__PURE__ */ jsxs(Select, {
							fullWidth: true,
							size: "small",
							value: linkKind,
							onChange: (ev) => setLinkKind(ev.target.value),
							children: [/* @__PURE__ */ jsx(MenuItem, {
								value: "web",
								children: t("text.linkTypeWeb")
							}), /* @__PURE__ */ jsx(MenuItem, {
								value: "email",
								children: t("text.linkTypeEmail")
							})]
						}),
						/* @__PURE__ */ jsx(TextField, {
							fullWidth: true,
							size: "small",
							label: t("text.linkUrl"),
							placeholder: t("text.linkPlaceholderUrl"),
							value: linkUrl,
							onChange: (ev) => setLinkUrl(ev.target.value),
							error: !getSafeHref(linkKind, linkUrl),
							helperText: !getSafeHref(linkKind, linkUrl) ? t("text.linkInvalid") : " "
						}),
						/* @__PURE__ */ jsx(FormControlLabel, {
							control: /* @__PURE__ */ jsx(Checkbox, {
								checked: linkTargetBlank,
								onChange: (ev) => setLinkTargetBlank(ev.target.checked)
							}),
							label: t("text.linkTargetBlank")
						}),
						/* @__PURE__ */ jsxs(Box, {
							sx: {
								display: "flex",
								gap: 1,
								justifyContent: "flex-end",
								pt: 1
							},
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outlined",
								onClick: handleCloseLink,
								children: t("common.cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "contained",
								onClick: handleSaveLink,
								disabled: !getSafeHref(linkKind, linkUrl),
								children: t("common.save")
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/documents/blocks/Socials/SocialsPropsSchema.tsx
var SOCIAL_PLATFORMS = [
	"facebook",
	"instagram",
	"x",
	"linkedin",
	"youtube",
	"tiktok",
	"snapchat",
	"whatsapp",
	"telegram",
	"discord",
	"reddit",
	"twitch",
	"threads"
];
var ICON_STYLES = [
	"no-border-black",
	"no-border-white",
	"origin-colorful",
	"with-border-black",
	"with-border-white",
	"with-border-line-colorful",
	"with-border-line-black",
	"with-border-line-white",
	"standard"
];
var SocialsPropsSchema = z.object({
	props: z.object({
		platforms: z.array(z.enum(SOCIAL_PLATFORMS)).optional().nullable(),
		iconStyle: z.enum(ICON_STYLES).optional().nullable(),
		iconSize: z.number().optional().nullable(),
		socials: z.array(z.object({
			platform: z.enum(SOCIAL_PLATFORMS),
			url: z.string().optional().nullable()
		})).optional().nullable()
	}).optional().nullable(),
	style: z.object({
		padding: zPadding().optional().nullable(),
		backgroundColor: z.string().optional().nullable(),
		textAlign: z.enum([
			"left",
			"center",
			"right"
		]).optional().nullable()
	}).optional().nullable()
});
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/input-panels/SocialsSidebarPanel.tsx
var PLATFORM_NAMES = {
	facebook: {
		zh: "Facebook",
		en: "Facebook"
	},
	instagram: {
		zh: "Instagram",
		en: "Instagram"
	},
	x: {
		zh: "X (Twitter)",
		en: "X (Twitter)"
	},
	linkedin: {
		zh: "LinkedIn",
		en: "LinkedIn"
	},
	youtube: {
		zh: "YouTube",
		en: "YouTube"
	},
	tiktok: {
		zh: "TikTok",
		en: "TikTok"
	},
	snapchat: {
		zh: "Snapchat",
		en: "Snapchat"
	},
	whatsapp: {
		zh: "WhatsApp",
		en: "WhatsApp"
	},
	telegram: {
		zh: "Telegram",
		en: "Telegram"
	},
	discord: {
		zh: "Discord",
		en: "Discord"
	},
	reddit: {
		zh: "Reddit",
		en: "Reddit"
	},
	twitch: {
		zh: "Twitch",
		en: "Twitch"
	},
	threads: {
		zh: "Threads",
		en: "Threads"
	}
};
var ICON_STYLE_NAMES = {
	"no-border-black": {
		zh: "深色",
		en: "Glyph Dark"
	},
	"no-border-white": {
		zh: "浅色",
		en: "Glyph Light"
	},
	"origin-colorful": {
		zh: "面性·彩色",
		en: "Circular Dynamic Color"
	},
	"with-border-black": {
		zh: "面性·深色",
		en: "Circular Dark"
	},
	"with-border-white": {
		zh: "面性·浅色",
		en: "Circular Light"
	},
	"with-border-line-colorful": {
		zh: "线性·彩色",
		en: "Circular Outline Color"
	},
	"with-border-line-black": {
		zh: "线性·黑白",
		en: "Circular Outline Dark"
	},
	"with-border-line-white": {
		zh: "线性·浅色",
		en: "Circular Outline Light"
	},
	"standard": {
		zh: "标准",
		en: "Standard"
	}
};
function SocialsSidebarPanel({ data, setData }) {
	const { t, language } = useTranslation$1();
	const [, setErrors] = useState(null);
	const [draggedIndex, setDraggedIndex] = useState(null);
	const [dragOverIndex, setDragOverIndex] = useState(null);
	const [insertPosition, setInsertPosition] = useState(null);
	const isHandlerClickedRef = useRef(false);
	const updateData = (d) => {
		const res = SocialsPropsSchema.safeParse(d);
		if (res.success) {
			setData(res.data);
			setErrors(null);
		} else setErrors(res.error);
	};
	const iconStyle = data.props?.iconStyle || "origin-colorful";
	const iconSize = data.props?.iconSize ?? 36;
	const currentSocials = data.props?.socials || [];
	currentSocials.map((s) => s.platform);
	const handleIconStyleChange = (style) => {
		updateData({
			...data,
			props: {
				...data.props,
				iconStyle: style
			}
		});
	};
	const updateSocialUrl = (index, url) => {
		const newSocials = [...currentSocials];
		newSocials[index] = {
			...newSocials[index],
			url
		};
		updateData({
			...data,
			props: {
				...data.props,
				platforms: newSocials.map((s) => s.platform),
				socials: newSocials
			}
		});
	};
	const updateSocialPlatform = (index, platform) => {
		const newSocials = [...currentSocials];
		newSocials[index] = {
			...newSocials[index],
			platform
		};
		updateData({
			...data,
			props: {
				...data.props,
				platforms: newSocials.map((s) => s.platform),
				socials: newSocials
			}
		});
	};
	const deleteSocial = (index) => {
		const newSocials = currentSocials.filter((_, i) => i !== index);
		updateData({
			...data,
			props: {
				...data.props,
				platforms: newSocials.map((s) => s.platform),
				socials: newSocials
			}
		});
	};
	const addSocial = () => {
		const usedPlatforms = new Set(currentSocials.map((s) => s.platform));
		const platformToAdd = SOCIAL_PLATFORMS.find((p) => !usedPlatforms.has(p)) || SOCIAL_PLATFORMS[0];
		const newSocials = [...currentSocials, {
			platform: platformToAdd,
			url: null
		}];
		updateData({
			...data,
			props: {
				...data.props,
				platforms: newSocials.map((s) => s.platform),
				socials: newSocials
			}
		});
	};
	const handleDragStart = (index, e) => {
		if (!isHandlerClickedRef.current) {
			e.preventDefault();
			return;
		}
		setDraggedIndex(index);
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", `social-${index}`);
	};
	const handleHandlerMouseDown = () => {
		isHandlerClickedRef.current = true;
	};
	useEffect(() => {
		const handleMouseUp = () => {
			isHandlerClickedRef.current = false;
		};
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);
	const handleDragOver = (e, index) => {
		e.preventDefault();
		e.stopPropagation();
		if (draggedIndex === null) return;
		if (draggedIndex === index) {
			setDragOverIndex(null);
			setInsertPosition(null);
			return;
		}
		const rect = e.currentTarget.getBoundingClientRect();
		const position = e.clientY < rect.top + rect.height / 2 ? "top" : "bottom";
		setDragOverIndex(index);
		setInsertPosition(position);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDrop = (e, dropIndex) => {
		e.preventDefault();
		e.stopPropagation();
		if (draggedIndex === null) {
			setDraggedIndex(null);
			setDragOverIndex(null);
			setInsertPosition(null);
			return;
		}
		if (draggedIndex === dropIndex) {
			setDraggedIndex(null);
			setDragOverIndex(null);
			setInsertPosition(null);
			return;
		}
		const newSocials = [...currentSocials];
		const [removed] = newSocials.splice(draggedIndex, 1);
		let targetIndex;
		if (insertPosition === "top") {
			targetIndex = dropIndex;
			if (draggedIndex < dropIndex) targetIndex = dropIndex - 1;
		} else {
			targetIndex = dropIndex + 1;
			if (draggedIndex < dropIndex) targetIndex = dropIndex;
		}
		targetIndex = Math.max(0, Math.min(targetIndex, newSocials.length));
		newSocials.splice(targetIndex, 0, removed);
		updateData({
			...data,
			props: {
				...data.props,
				platforms: newSocials.map((s) => s.platform),
				socials: newSocials
			}
		});
		setDraggedIndex(null);
		setDragOverIndex(null);
		setInsertPosition(null);
	};
	const handleDragEnd = () => {
		setDraggedIndex(null);
		setDragOverIndex(null);
		setInsertPosition(null);
		isHandlerClickedRef.current = false;
	};
	const isZh = language === "es";
	return /* @__PURE__ */ jsxs(BaseSidebarPanel, {
		title: t("socials.title"),
		children: [
			/* @__PURE__ */ jsxs(Box, {
				sx: { mb: 2 },
				children: [
					/* @__PURE__ */ jsx(Typography, {
						variant: "body2",
						sx: {
							color: "text.secondary",
							mb: 1,
							fontSize: "12px",
							fontWeight: 500
						},
						children: t("socials.selectPlatforms")
					}),
					/* @__PURE__ */ jsx(Stack, {
						spacing: 1,
						onDragOver: (e) => {
							if (draggedIndex !== null) {
								e.preventDefault();
								e.stopPropagation();
								e.dataTransfer.dropEffect = "move";
								const mouseY = e.clientY;
								const papers = Array.from(e.currentTarget.querySelectorAll(".MuiPaper-root"));
								for (let i = 0; i < papers.length; i++) {
									const paperRect = papers[i].getBoundingClientRect();
									const expandedTop = paperRect.top - 24;
									const expandedBottom = paperRect.bottom + 24;
									if (mouseY >= expandedTop && mouseY <= expandedBottom) {
										const position = mouseY < paperRect.top + paperRect.height / 2 ? "top" : "bottom";
										if (i !== draggedIndex) {
											setDragOverIndex(i);
											setInsertPosition(position);
										}
										break;
									}
								}
							}
						},
						onDrop: (e) => {
							if (draggedIndex !== null && dragOverIndex !== null) {
								e.preventDefault();
								e.stopPropagation();
								handleDrop(e, dragOverIndex);
							}
						},
						children: currentSocials.map((social, index) => {
							const platformName = isZh ? PLATFORM_NAMES[social.platform].zh : PLATFORM_NAMES[social.platform].en;
							const isDragging = draggedIndex === index;
							const isDragOver = dragOverIndex === index;
							const showTopInsertLine = isDragOver && insertPosition === "top";
							const showBottomInsertLine = isDragOver && insertPosition === "bottom";
							const itemKey = `social-${index}`;
							return /* @__PURE__ */ jsxs(React.Fragment, { children: [
								showTopInsertLine && /* @__PURE__ */ jsx(Box, {
									onDragOver: (e) => {
										e.preventDefault();
										e.stopPropagation();
										e.dataTransfer.dropEffect = "move";
										if (draggedIndex !== null && draggedIndex !== index) {
											setDragOverIndex(index);
											setInsertPosition("top");
										}
									},
									onDrop: (e) => {
										e.preventDefault();
										e.stopPropagation();
										handleDrop(e, index);
									},
									sx: {
										height: "24px",
										py: "11px",
										display: "flex",
										alignItems: "center",
										position: "relative",
										zIndex: 1,
										"&::before": {
											content: "\"\"",
											position: "absolute",
											top: "50%",
											left: "0",
											right: "0",
											transform: "translateY(-50%)",
											height: "2px",
											backgroundColor: "primary.main",
											borderRadius: "1px",
											mx: 1
										}
									}
								}),
								/* @__PURE__ */ jsxs(Paper, {
									draggable: true,
									onDragStart: (e) => handleDragStart(index, e),
									onDragOver: (e) => {
										e.preventDefault();
										e.dataTransfer.dropEffect = "move";
										handleDragOver(e, index);
									},
									onDragLeave: handleDragLeave,
									onDrop: (e) => {
										e.preventDefault();
										handleDrop(e, index);
									},
									onDragEnd: handleDragEnd,
									sx: {
										p: 1.5,
										border: "1px solid",
										borderColor: "divider",
										backgroundColor: isDragging ? "action.hover" : "background.paper",
										opacity: isDragging ? .5 : 1,
										"&:hover": { borderColor: "primary.main" }
									},
									children: [/* @__PURE__ */ jsxs(Box, {
										sx: {
											display: "flex",
											alignItems: "center",
											gap: 1,
											mb: 1
										},
										children: [
											/* @__PURE__ */ jsx(IconButton, {
												size: "small",
												sx: {
													cursor: "grab",
													color: "text.secondary",
													"&:active": { cursor: "grabbing" }
												},
												onMouseDown: (e) => {
													e.stopPropagation();
													handleHandlerMouseDown();
												},
												"aria-label": "Drag social block",
												children: /* @__PURE__ */ jsx(DragIndicator, { fontSize: "small" })
											}),
											/* @__PURE__ */ jsx(Select, {
												value: social.platform,
												onChange: (e) => updateSocialPlatform(index, e.target.value),
												size: "small",
												sx: {
													flex: 1,
													fontSize: "12px"
												},
												onMouseDown: (e) => e.stopPropagation(),
												children: SOCIAL_PLATFORMS.map((platform) => {
													return /* @__PURE__ */ jsx(MenuItem, {
														value: platform,
														children: isZh ? PLATFORM_NAMES[platform].zh : PLATFORM_NAMES[platform].en
													}, platform);
												})
											}),
											/* @__PURE__ */ jsx(IconButton, {
												size: "small",
												onClick: () => deleteSocial(index),
												sx: { color: "error.main" },
												onMouseDown: (e) => e.stopPropagation(),
												"aria-label": "Delete social",
												children: /* @__PURE__ */ jsx(DeleteOutline, { fontSize: "small" })
											})
										]
									}), /* @__PURE__ */ jsx(Box, {
										onClick: (e) => e.stopPropagation(),
										onMouseDown: (e) => e.stopPropagation(),
										children: /* @__PURE__ */ jsx(TextInput, {
											label: "",
											placeholder: `${t("socials.iconUrl")} - ${platformName}`,
											defaultValue: social.url || "",
											onChange: (url) => updateSocialUrl(index, url || null)
										})
									})]
								}),
								showBottomInsertLine && /* @__PURE__ */ jsx(Box, {
									onDragOver: (e) => {
										e.preventDefault();
										e.stopPropagation();
										e.dataTransfer.dropEffect = "move";
										if (draggedIndex !== null && draggedIndex !== index) {
											setDragOverIndex(index);
											setInsertPosition("bottom");
										}
									},
									onDrop: (e) => {
										e.preventDefault();
										e.stopPropagation();
										handleDrop(e, index);
									},
									sx: {
										height: "24px",
										py: "11px",
										display: "flex",
										alignItems: "center",
										cursor: "move",
										position: "relative",
										zIndex: 1,
										"&::before": {
											content: "\"\"",
											position: "absolute",
											top: "50%",
											left: "0",
											right: "0",
											transform: "translateY(-50%)",
											height: "2px",
											backgroundColor: "primary.main",
											borderRadius: "1px",
											mx: 1
										}
									}
								})
							] }, itemKey);
						})
					}),
					/* @__PURE__ */ jsx(Button, {
						startIcon: /* @__PURE__ */ jsx(Add, {}),
						onClick: addSocial,
						variant: "outlined",
						size: "small",
						fullWidth: true,
						sx: { mt: 1 },
						children: t("socials.addAnother")
					})
				]
			}),
			/* @__PURE__ */ jsx(Divider, { sx: { my: 1 } }),
			/* @__PURE__ */ jsxs(Box, {
				sx: { mb: 2 },
				children: [/* @__PURE__ */ jsx(Typography, {
					variant: "body2",
					sx: {
						color: "text.secondary",
						mb: 1,
						fontSize: "12px",
						fontWeight: 500
					},
					children: t("socials.iconStyle")
				}), /* @__PURE__ */ jsx(Stack, {
					spacing: 1,
					sx: { mt: 1 },
					children: ICON_STYLES.map((style) => {
						const styleName = isZh ? ICON_STYLE_NAMES[style].zh : ICON_STYLE_NAMES[style].en;
						return /* @__PURE__ */ jsx(ToggleButton$1, {
							value: style,
							selected: iconStyle === style,
							onChange: () => handleIconStyleChange(style),
							fullWidth: true,
							size: "small",
							sx: {
								fontSize: "12px",
								justifyContent: "flex-start",
								textTransform: "none"
							},
							children: styleName
						}, style);
					})
				})]
			}),
			/* @__PURE__ */ jsx(Divider, { sx: { my: 1 } }),
			/* @__PURE__ */ jsx(Box, {
				sx: { mb: 2 },
				children: /* @__PURE__ */ jsx(SliderInput, {
					label: t("socials.iconSize"),
					iconLabel: /* @__PURE__ */ jsx(AspectRatioOutlined, { sx: { fontSize: 16 } }),
					defaultValue: iconSize,
					onChange: (size) => {
						updateData({
							...data,
							props: {
								...data.props,
								iconSize: size
							}
						});
					},
					min: 12,
					max: 48,
					step: 2,
					units: "px",
					marks: true
				})
			}),
			/* @__PURE__ */ jsx(MultiStylePropertyPanel, {
				names: ["backgroundColor", "padding"],
				value: data.style,
				onChange: (style) => updateData({
					...data,
					style
				})
			})
		]
	});
}
//#endregion
//#region src/App/InspectorDrawer/ConfigurationPanel/index.tsx
function renderMessage(val) {
	return /* @__PURE__ */ jsx(Box, {
		sx: {
			m: 3,
			p: 1,
			border: "1px dashed",
			borderColor: "divider"
		},
		children: /* @__PURE__ */ jsx(Typography, {
			color: "text.secondary",
			children: val
		})
	});
}
function ConfigurationPanel() {
	const { t } = useTranslation$1();
	const document = useDocument();
	const selectedBlockId = useSelectedBlockId();
	if (!selectedBlockId) return renderMessage(t("inspector.clickBlockToInspect"));
	const block = document[selectedBlockId];
	if (!block) return renderMessage(t("inspector.blockNotFound", { id: selectedBlockId }));
	const setBlock = (conf) => setDocument({ [selectedBlockId]: conf });
	const { data, type } = block;
	switch (type) {
		case "Button": return /* @__PURE__ */ jsx(ButtonSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "ColumnsContainer": return /* @__PURE__ */ jsx(ColumnsContainerPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Container": return /* @__PURE__ */ jsx(ContainerSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Divider": return /* @__PURE__ */ jsx(DividerSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Heading": return /* @__PURE__ */ jsx(HeadingSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Html": return /* @__PURE__ */ jsx(HtmlSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Image": return /* @__PURE__ */ jsx(ImageSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Video": return /* @__PURE__ */ jsx(VideoSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "EmailLayout": return /* @__PURE__ */ jsx(EmailLayoutSidebarFields, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Spacer": return /* @__PURE__ */ jsx(SpacerSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Text": return /* @__PURE__ */ jsx(TextSidebarPanel, {
			blockId: selectedBlockId,
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		case "Socials": return /* @__PURE__ */ jsx(SocialsSidebarPanel, {
			data,
			setData: (data) => setBlock({
				type,
				data
			})
		}, selectedBlockId);
		default: return /* @__PURE__ */ jsx("pre", { children: JSON.stringify(block, null, "  ") });
	}
}
//#endregion
//#region src/App/InspectorDrawer/StylesPanel.tsx
function StylesPanel() {
	const block = useDocument().root;
	if (!block) return /* @__PURE__ */ jsx("p", { children: "Block not found" });
	const { data, type } = block;
	if (type !== "EmailLayout") throw new Error("Expected \"root\" element to be of type EmailLayout");
	return /* @__PURE__ */ jsx(EmailLayoutSidebarFields, {
		data,
		setData: (data) => setDocument({ root: {
			type,
			data
		} })
	}, "root");
}
function InspectorDrawer() {
	const { t } = useTranslation$1();
	const selectedSidebarTab = useSelectedSidebarTab();
	const inspectorDrawerOpen = useInspectorDrawerOpen();
	const renderCurrentSidebarPanel = () => {
		switch (selectedSidebarTab) {
			case "block-configuration": return /* @__PURE__ */ jsx(ConfigurationPanel, {});
			case "styles": return /* @__PURE__ */ jsx(StylesPanel, {});
		}
	};
	return /* @__PURE__ */ jsxs(Drawer, {
		variant: "persistent",
		anchor: "right",
		open: inspectorDrawerOpen,
		PaperProps: { sx: {
			position: "relative",
			height: "100%",
			zIndex: 0
		} },
		sx: {
			position: "relative",
			width: inspectorDrawerOpen ? 320 : 0,
			flexShrink: 0,
			flexGrow: 0,
			overflow: "hidden",
			zIndex: 0,
			"& .MuiDrawer-paper": {
				position: "relative",
				height: "100%",
				width: "100%",
				zIndex: 0,
				overflowX: "hidden"
			}
		},
		children: [/* @__PURE__ */ jsx(Box, {
			sx: {
				width: 320,
				height: 49,
				borderBottom: 1,
				borderColor: "divider"
			},
			children: /* @__PURE__ */ jsx(Box, {
				px: 2,
				children: /* @__PURE__ */ jsxs(Tabs, {
					value: selectedSidebarTab,
					onChange: (_, v) => setSidebarTab(v),
					children: [/* @__PURE__ */ jsx(Tab, {
						value: "styles",
						label: t("inspector.styles")
					}), /* @__PURE__ */ jsx(Tab, {
						value: "block-configuration",
						label: t("inspector.inspect")
					})]
				})
			})
		}), /* @__PURE__ */ jsx(Box, {
			sx: {
				width: 320,
				height: "calc(100% - 49px)",
				overflowY: "visible",
				overflowX: "hidden"
			},
			children: renderCurrentSidebarPanel()
		})]
	});
}
//#endregion
//#region src/getConfiguration/index.tsx
var sampleTemplates = {
	welcome: () => import("./samples-9FUiZOr9.js").then((n) => n.t).then((m) => m.default),
	"one-time-password": () => import("./samples-9FUiZOr9.js").then((n) => n.d).then((m) => m.default),
	"order-ecomerce": () => import("./samples-9FUiZOr9.js").then((n) => n.u).then((m) => m.default),
	"post-metrics-report": () => import("./samples-9FUiZOr9.js").then((n) => n.l).then((m) => m.default),
	"reservation-reminder": () => import("./samples-9FUiZOr9.js").then((n) => n.c).then((m) => m.default),
	"reset-password": () => import("./samples-9FUiZOr9.js").then((n) => n.s).then((m) => m.default),
	"respond-to-message": () => import("./samples-9FUiZOr9.js").then((n) => n.o).then((m) => m.default),
	"subscription-receipt": () => import("./samples-9FUiZOr9.js").then((n) => n.i).then((m) => m.default),
	"basic-template": () => import("./samples-9FUiZOr9.js").then((n) => n._).then((m) => m.default),
	"newsletter-with-unsubscribe": () => import("./samples-9FUiZOr9.js").then((n) => n.f).then((m) => m.default),
	"unsubscribed-resubscribe": () => import("./samples-9FUiZOr9.js").then((n) => n.r).then((m) => m.default),
	"invite-to-event": () => import("./samples-9FUiZOr9.js").then((n) => n.h).then((m) => m.default),
	"new-product-launch": () => import("./samples-9FUiZOr9.js").then((n) => n.p).then((m) => m.default),
	"education": () => import("./samples-9FUiZOr9.js").then((n) => n.g).then((m) => m.default),
	"welcome-alt": () => import("./samples-9FUiZOr9.js").then((n) => n.n).then((m) => m.default),
	"mothers-day": () => import("./samples-9FUiZOr9.js").then((n) => n.m).then((m) => m.default),
	"shopping-cart": () => import("./samples-9FUiZOr9.js").then((n) => n.a).then((m) => m.default)
};
var templateCache = {};
async function loadSampleTemplate(sampleName) {
	const loader = sampleTemplates[sampleName];
	if (!loader) return EMPTY_EMAIL_MESSAGE;
	if (templateCache[sampleName]) return templateCache[sampleName];
	const template = await loader();
	templateCache[sampleName] = template;
	return template;
}
//#endregion
//#region src/App/SamplesDrawer/SidebarButton.tsx
function SidebarButton({ sampleName, children }) {
	const [loading, setLoading] = useState(false);
	const handleClick = async () => {
		setLoading(true);
		try {
			resetDocument(await loadSampleTemplate(sampleName));
		} catch {} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx(Button, {
		size: "small",
		onClick: handleClick,
		disabled: loading,
		children: loading ? "Loading..." : children
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/BlockButton.tsx
var BUTTON_SX = {
	p: 1.5,
	display: "flex",
	flexDirection: "column"
};
var ICON_SX = {
	mb: .75,
	width: "100%",
	bgcolor: "cadet.200",
	display: "flex",
	justifyContent: "center",
	p: 1,
	border: "1px solid",
	borderColor: "cadet.300"
};
function BlockTypeButton({ label, icon, onClick, disabled = false, block, onDragStart }) {
	const [isDragging, setIsDragging] = React.useState(false);
	const buttonRef = React.useRef(null);
	const handleDragStart = (e) => {
		if (!block || disabled) {
			e.preventDefault();
			return;
		}
		e.stopPropagation();
		e.dataTransfer.effectAllowed = "move";
		const sidebarBlockId = `sidebar-block-${block.type}-${Date.now()}`;
		e.dataTransfer.setData("text/plain", sidebarBlockId);
		window.__currentDraggedBlockId = sidebarBlockId;
		window.__currentDraggedBlock = block;
		window.__isSidebarBlock = true;
		if (buttonRef.current) {
			const dragImage = buttonRef.current.cloneNode(true);
			dragImage.style.position = "absolute";
			dragImage.style.top = "-9999px";
			dragImage.style.left = "-9999px";
			dragImage.style.width = `${buttonRef.current.offsetWidth}px`;
			dragImage.style.height = `${buttonRef.current.offsetHeight}px`;
			dragImage.style.pointerEvents = "none";
			dragImage.style.outline = "2px dashed rgba(0,121,204, 0.8)";
			dragImage.style.outlineOffset = "-2px";
			dragImage.style.backgroundColor = "#ffffff";
			document.body.appendChild(dragImage);
			const rect = buttonRef.current.getBoundingClientRect();
			const offsetX = e.clientX - rect.left;
			const offsetY = e.clientY - rect.top;
			e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
			requestAnimationFrame(() => {
				if (document.body.contains(dragImage)) document.body.removeChild(dragImage);
			});
		}
		setIsDragging(true);
		if (onDragStart) onDragStart(block);
	};
	const handleDragEnd = () => {
		window.__currentDraggedBlockId = null;
		window.__currentDraggedBlock = null;
		window.__isSidebarBlock = false;
		setIsDragging(false);
	};
	return /* @__PURE__ */ jsxs(Button, {
		ref: buttonRef,
		sx: {
			...BUTTON_SX,
			outline: isDragging ? "2px dashed rgba(0,121,204, 0.8)" : "none",
			outlineOffset: isDragging ? "-2px" : "0",
			"&:hover": { cursor: disabled ? "not-allowed" : block ? "grab" : "pointer" }
		},
		disabled,
		draggable: !disabled && !!block,
		onDragStart: handleDragStart,
		onDragEnd: handleDragEnd,
		onClick: (ev) => {
			ev.stopPropagation();
			if (!disabled) onClick();
		},
		children: [/* @__PURE__ */ jsx(Box, {
			sx: ICON_SX,
			children: icon
		}), /* @__PURE__ */ jsx(Typography, {
			variant: "body2",
			children: label
		})]
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/buttons.tsx
var BUTTONS = [
	{
		label: "Heading",
		icon: /* @__PURE__ */ jsx(HMobiledataOutlined, {}),
		block: () => ({
			type: "Heading",
			data: {
				props: { text: "My new heading block" },
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "Text",
		icon: /* @__PURE__ */ jsx(NotesOutlined, {}),
		block: () => ({
			type: "Text",
			data: {
				props: {
					text: "My new text block",
					markdown: false
				},
				style: {
					padding: {
						top: 16,
						bottom: 16,
						left: 24,
						right: 24
					},
					fontWeight: "normal"
				}
			}
		})
	},
	{
		label: "Button",
		icon: /* @__PURE__ */ jsx(SmartButtonOutlined, {}),
		block: () => ({
			type: "Button",
			data: {
				props: {
					text: "Button",
					url: ""
				},
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "Image",
		icon: /* @__PURE__ */ jsx(ImageOutlined, {}),
		block: () => ({
			type: "Image",
			data: {
				props: {
					url: "",
					alt: "Sample product",
					contentAlignment: "middle",
					linkHref: null
				},
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "Video",
		icon: /* @__PURE__ */ jsx(VideocamOutlined, {}),
		block: () => ({
			type: "Video",
			data: {
				props: {
					url: "",
					alt: "Sample video",
					contentAlignment: "middle",
					linkHref: null,
					autoplay: false,
					loop: false,
					muted: false,
					controls: true
				},
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "Divider",
		icon: /* @__PURE__ */ jsx(HorizontalRuleOutlined, {}),
		block: () => ({
			type: "Divider",
			data: {
				style: { padding: {
					top: 16,
					right: 0,
					bottom: 16,
					left: 0
				} },
				props: { lineColor: "#CCCCCC" }
			}
		})
	},
	{
		label: "Spacer",
		icon: /* @__PURE__ */ jsx(Crop32Outlined, {}),
		block: () => ({
			type: "Spacer",
			data: {}
		})
	},
	{
		label: "Socials",
		icon: /* @__PURE__ */ jsx(ShareOutlined, {}),
		block: () => ({
			type: "Socials",
			data: {
				props: {
					platforms: [
						"facebook",
						"instagram",
						"x"
					],
					iconStyle: "origin-colorful",
					iconSize: 36,
					socials: [
						{
							platform: "facebook",
							url: null
						},
						{
							platform: "instagram",
							url: null
						},
						{
							platform: "x",
							url: null
						}
					]
				},
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "HTML",
		icon: /* @__PURE__ */ jsx(HtmlOutlined, {}),
		block: () => ({
			type: "Html",
			data: {
				props: { contents: "<p>My new HTML block</p>" },
				style: {
					fontSize: 16,
					textAlign: null,
					padding: {
						top: 16,
						bottom: 16,
						left: 24,
						right: 24
					}
				}
			}
		})
	},
	{
		label: "Columns",
		icon: /* @__PURE__ */ jsx(ViewColumnOutlined, {}),
		block: () => ({
			type: "ColumnsContainer",
			data: {
				props: {
					columnsGap: 16,
					columnsCount: 3,
					columns: [
						{ childrenIds: [] },
						{ childrenIds: [] },
						{ childrenIds: [] }
					],
					fixedWidths: [
						null,
						null,
						null,
						null
					]
				},
				style: { padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				} }
			}
		})
	},
	{
		label: "Container",
		icon: /* @__PURE__ */ jsx(LibraryAddOutlined, {}),
		block: () => ({
			type: "Container",
			data: { style: { padding: {
				top: 16,
				bottom: 16,
				left: 24,
				right: 24
			} } }
		})
	}
];
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/BlocksGrid.tsx
var getBlockI18nKey$1 = (blockType) => {
	return {
		"Heading": "heading.name",
		"Text": "text.name",
		"Button": "button.name",
		"Image": "image.name",
		"Video": "video.name",
		"Divider": "divider.name",
		"Spacer": "spacer.name",
		"Socials": "socials.name",
		"Html": "html.name",
		"ColumnsContainer": "columns.name",
		"Container": "container.name"
	}[blockType] || blockType;
};
function BlocksGrid({ onSelect, disableContainerBlocks = false, containerType = null }) {
	const { t } = useTranslation$1();
	return /* @__PURE__ */ jsx(Box, {
		sx: {
			p: 1,
			display: "grid",
			gridTemplateColumns: "repeat(3, 1fr)",
			gap: .5
		},
		children: BUTTONS.filter((k) => {
			const block = k.block();
			const isContainerBlock = block.type === "Container" || block.type === "ColumnsContainer";
			if (disableContainerBlocks && isContainerBlock) {
				if (containerType === "Container" && block.type === "ColumnsContainer") return false;
				if (containerType === "ColumnsContainer" && block.type === "ColumnsContainer") return false;
				if (!containerType || containerType !== "Container" && containerType !== "ColumnsContainer") return false;
			}
			return true;
		}).map((k, i) => {
			const block = k.block();
			return /* @__PURE__ */ jsx(BlockTypeButton, {
				label: t(getBlockI18nKey$1(block.type)),
				icon: k.icon,
				onClick: () => onSelect(block),
				disabled: false,
				block
			}, i);
		})
	});
}
function generateId$3() {
	return `block-${Date.now()}`;
}
function SamplesDrawer() {
	const { t } = useTranslation$1();
	const samplesDrawerOpen = useSamplesDrawerOpen();
	const document = useDocument();
	const showSamplesDrawerTitle = useShowSamplesDrawerTitle();
	const leftPanelSlot = useLeftPanelSlot();
	const handleNewDocumentClick = () => {
		resetDocument(EMPTY_EMAIL_MESSAGE);
	};
	const findRootEmailLayoutId = () => {
		for (const [blockId, block] of Object.entries(document)) if (block.type === "EmailLayout") return blockId;
		return null;
	};
	const handleBlockSelect = (block) => {
		const rootId = findRootEmailLayoutId();
		if (!rootId) return;
		const blockId = generateId$3();
		const rootBlock = document[rootId];
		if (!rootBlock || rootBlock.type !== "EmailLayout") return;
		const newChildrenIds = [...rootBlock.data.childrenIds || [], blockId];
		setDocument({
			[rootId]: {
				type: "EmailLayout",
				data: {
					...rootBlock.data,
					childrenIds: newChildrenIds
				}
			},
			[blockId]: block
		});
		setSelectedBlockId(blockId);
	};
	return /* @__PURE__ */ jsx(Drawer, {
		variant: "persistent",
		anchor: "left",
		open: samplesDrawerOpen,
		PaperProps: { sx: {
			position: "relative",
			height: "100%",
			zIndex: 0
		} },
		sx: {
			position: "relative",
			width: samplesDrawerOpen ? 240 : 0,
			flexShrink: 0,
			flexGrow: 0,
			overflow: "hidden",
			zIndex: 0,
			"& .MuiDrawer-paper": {
				position: "relative",
				height: "100%",
				width: "100%",
				zIndex: 0,
				overflowX: "hidden"
			}
		},
		children: /* @__PURE__ */ jsx(Stack, {
			spacing: 3,
			py: 1,
			px: 2,
			width: 240,
			sx: {
				overflowY: "auto",
				overflowX: "hidden",
				height: "100%"
			},
			children: /* @__PURE__ */ jsxs(Stack, {
				spacing: 2,
				sx: { "& .MuiButtonBase-root": {
					width: "100%",
					justifyContent: "flex-start"
				} },
				children: [
					showSamplesDrawerTitle && /* @__PURE__ */ jsxs(Fragment$1, { children: [
						/* @__PURE__ */ jsx(Typography, {
							variant: "h6",
							component: "h1",
							sx: { p: .75 },
							children: t("common.emailBuilder")
						}),
						/* @__PURE__ */ jsx(Stack, {
							spacing: 1,
							alignItems: "flex-start",
							style: { marginTop: showSamplesDrawerTitle ? 0 : 8 },
							children: /* @__PURE__ */ jsx(Button, {
								variant: "contained",
								color: "primary",
								onClick: handleNewDocumentClick,
								sx: {
									fontWeight: 500,
									width: "100%",
									justifyContent: "flex-start"
								},
								children: t("common.newDocument")
							})
						}),
						/* @__PURE__ */ jsx(Divider, {}),
						/* @__PURE__ */ jsxs(Stack, {
							spacing: 1,
							children: [/* @__PURE__ */ jsx(Typography, {
								variant: "caption",
								color: "text.secondary",
								sx: {
									px: .75,
									fontWeight: 500
								},
								children: t("common.useBuiltInTemplates")
							}), /* @__PURE__ */ jsxs(Stack, {
								alignItems: "flex-start",
								children: [
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "basic-template",
										children: t("samples.quickStart")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "welcome",
										children: t("samples.welcomeEmail")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "welcome-alt",
										children: t("samples.welcomeAlt")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "newsletter-with-unsubscribe",
										children: t("samples.newsletterWithUnsubscribe")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "unsubscribed-resubscribe",
										children: t("samples.unsubscribedResubscribe")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "reset-password",
										children: t("samples.resetPassword")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "order-ecomerce",
										children: t("samples.orderEcommerce")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "subscription-receipt",
										children: t("samples.subscriptionReceipt")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "reservation-reminder",
										children: t("samples.reservationReminder")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "post-metrics-report",
										children: t("samples.postMetrics")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "respond-to-message",
										children: t("samples.respondToMessage")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "invite-to-event",
										children: t("samples.inviteToEvent")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "new-product-launch",
										children: t("samples.newProductLaunch")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "education",
										children: t("samples.education")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "mothers-day",
										children: t("samples.mothersDay")
									}),
									/* @__PURE__ */ jsx(SidebarButton, {
										sampleName: "shopping-cart",
										children: t("samples.shoppingCart")
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx(Divider, {})
					] }),
					leftPanelSlot ? leftPanelSlot : null,
					/* @__PURE__ */ jsxs(Stack, {
						spacing: 1,
						sx: { mt: showSamplesDrawerTitle ? 0 : "16px !important" },
						children: [/* @__PURE__ */ jsx(Typography, {
							variant: "caption",
							color: "text.secondary",
							sx: {
								px: .75,
								fontWeight: 500
							},
							children: t("common.addContentBlocks")
						}), /* @__PURE__ */ jsx(BlocksGrid, {
							onSelect: handleBlockSelect,
							disableContainerBlocks: false
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/documents/blocks/helpers/ColumnStretchContext.tsx
var ColumnStretchContext = createContext(false);
function ColumnStretchProvider({ value, children }) {
	return /* @__PURE__ */ jsx(ColumnStretchContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/BlocksMenu.tsx
var getBlockI18nKey = (blockType) => {
	return {
		"Heading": "heading.name",
		"Text": "text.name",
		"Button": "button.name",
		"Image": "image.name",
		"Video": "video.name",
		"Divider": "divider.name",
		"Spacer": "spacer.name",
		"Socials": "socials.name",
		"Html": "html.name",
		"ColumnsContainer": "columns.name",
		"Container": "container.name"
	}[blockType] || blockType;
};
function BlocksMenu({ anchorEl, setAnchorEl, onSelect, disableContainerBlocks = false, containerType = null }) {
	const { t } = useTranslation$1();
	const onClose = () => {
		setAnchorEl(null);
	};
	const onClick = (block) => {
		onSelect(block);
		setAnchorEl(null);
	};
	if (anchorEl === null) return null;
	return /* @__PURE__ */ jsx(Menu, {
		open: true,
		anchorEl,
		onClose,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "center"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "center"
		},
		children: /* @__PURE__ */ jsx(Box, {
			sx: {
				p: 1,
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr 1fr"
			},
			children: BUTTONS.filter((k) => {
				const block = k.block();
				const isContainerBlock = block.type === "Container" || block.type === "ColumnsContainer";
				if (disableContainerBlocks && isContainerBlock) {
					if (containerType === "Container" && block.type === "ColumnsContainer") return false;
					if (containerType === "ColumnsContainer" && block.type === "ColumnsContainer") return false;
					if (!containerType || containerType !== "Container" && containerType !== "ColumnsContainer") return false;
				}
				return true;
			}).map((k, i) => {
				const block = k.block();
				return /* @__PURE__ */ jsx(BlockTypeButton, {
					label: t(getBlockI18nKey(block.type)),
					icon: k.icon,
					onClick: () => onClick(block),
					disabled: false
				}, i);
			})
		})
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/DividerButton.tsx
function DividerButton({ buttonElement, onClick }) {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		function listener({ clientX, clientY }) {
			if (!buttonElement) return;
			const rect = buttonElement.getBoundingClientRect();
			const rectY = rect.y;
			const bottomX = rect.x;
			const topX = bottomX + rect.width;
			if (Math.abs(clientY - rectY) < 20) {
				if (bottomX < clientX && clientX < topX) {
					setVisible(true);
					return;
				}
			}
			setVisible(false);
		}
		window.addEventListener("mousemove", listener);
		return () => {
			window.removeEventListener("mousemove", listener);
		};
	}, [buttonElement, setVisible]);
	return /* @__PURE__ */ jsx(Fade, {
		in: visible,
		children: /* @__PURE__ */ jsx(IconButton, {
			size: "small",
			sx: {
				p: .12,
				position: "absolute",
				top: "-12px",
				left: "50%",
				transform: "translateX(-10px)",
				bgcolor: "brand.blue",
				color: "primary.contrastText",
				zIndex: "fab",
				"&:hover, &:active, &:focus": {
					bgcolor: "brand.blue",
					color: "primary.contrastText"
				}
			},
			onClick: (ev) => {
				ev.stopPropagation();
				onClick();
			},
			"aria-label": "Add block",
			children: /* @__PURE__ */ jsx(AddOutlined, { fontSize: "small" })
		})
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/PlaceholderButton.tsx
function PlaceholderButton({ onClick }) {
	return /* @__PURE__ */ jsx(ButtonBase, {
		"aria-label": "Add block",
		onClick: (ev) => {
			ev.stopPropagation();
			onClick();
		},
		sx: {
			display: "flex",
			alignContent: "center",
			justifyContent: "center",
			height: 48,
			width: "100%",
			bgcolor: "rgba(0,0,0, 0.05)"
		},
		children: /* @__PURE__ */ jsx(AddOutlined, {
			sx: {
				p: .12,
				bgcolor: "brand.blue",
				borderRadius: 24,
				color: "primary.contrastText"
			},
			fontSize: "small"
		})
	});
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/AddBlockMenu/index.tsx
function AddBlockButton({ onSelect, placeholder, disableContainerBlocks = false, containerType = null }) {
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const [buttonElement, setButtonElement] = useState(null);
	const handleButtonClick = () => {
		setMenuAnchorEl(buttonElement);
	};
	const renderButton = () => {
		if (placeholder) return /* @__PURE__ */ jsx(PlaceholderButton, { onClick: handleButtonClick });
		else return /* @__PURE__ */ jsx(DividerButton, {
			buttonElement,
			onClick: handleButtonClick
		});
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
		ref: setButtonElement,
		style: { position: "relative" },
		children: renderButton()
	}), /* @__PURE__ */ jsx(BlocksMenu, {
		anchorEl: menuAnchorEl,
		setAnchorEl: setMenuAnchorEl,
		onSelect,
		disableContainerBlocks,
		containerType
	})] });
}
//#endregion
//#region src/documents/blocks/helpers/EditorChildrenIds/index.tsx
var idCounter$1 = 0;
function generateId$2() {
	return `block-${Date.now()}-${++idCounter$1}`;
}
var getCurrentDraggedBlockId$1 = () => {
	return window.__currentDraggedBlockId || null;
};
var getCurrentDraggedBlock$1 = () => {
	return window.__currentDraggedBlock || null;
};
function findParentContainerId$1(document, blockId) {
	for (const [containerId, container] of Object.entries(document)) {
		if (container.type === "EmailLayout" && container.data.childrenIds?.includes(blockId)) return {
			containerId,
			columnIndex: null
		};
		if (container.type === "Container" && container.data.props?.childrenIds?.includes(blockId)) return {
			containerId,
			columnIndex: null
		};
		if (container.type === "ColumnsContainer") {
			const columns = container.data.props?.columns;
			if (columns) {
				for (let i = 0; i < columns.length; i++) if (columns[i].childrenIds?.includes(blockId)) return {
					containerId,
					columnIndex: i
				};
			}
		}
	}
	return {
		containerId: null,
		columnIndex: null
	};
}
function canDropBlockIntoContainer(draggedBlock, targetContainerId, document) {
	if (!draggedBlock || !targetContainerId) return true;
	const draggedBlockType = draggedBlock.type;
	const targetContainerType = document[targetContainerId]?.type;
	if (targetContainerType === "Container") {
		if (draggedBlockType === "ColumnsContainer") return false;
	}
	if (targetContainerType === "ColumnsContainer") {
		if (draggedBlockType === "ColumnsContainer") return false;
	}
	return true;
}
function removeBlockFromParentContainer(document, blockId, parentInfo) {
	if (!parentInfo.containerId) return document;
	const container = document[parentInfo.containerId];
	if (!container) return document;
	const newDocument = { ...document };
	const newContainer = {
		...container,
		data: { ...container.data }
	};
	if (container.type === "EmailLayout") {
		const childrenIds = container.data.childrenIds || [];
		newContainer.data = {
			...container.data,
			childrenIds: childrenIds.filter((id) => id !== blockId)
		};
	} else if (container.type === "Container") {
		const childrenIds = container.data.props?.childrenIds || [];
		newContainer.data = {
			...container.data,
			props: {
				...container.data.props,
				childrenIds: childrenIds.filter((id) => id !== blockId)
			}
		};
	} else if (container.type === "ColumnsContainer" && parentInfo.columnIndex !== null) {
		const newColumns = (container.data.props?.columns || []).map((col, index) => {
			if (index === parentInfo.columnIndex) return { childrenIds: (col.childrenIds || []).filter((id) => id !== blockId) };
			return col;
		});
		newContainer.data = {
			...container.data,
			props: {
				...container.data.props,
				columns: newColumns
			}
		};
	}
	newDocument[parentInfo.containerId] = newContainer;
	return newDocument;
}
var fillHeightSx = {
	flex: 1,
	minHeight: 0,
	width: "100%",
	minWidth: 0,
	display: "flex",
	flexDirection: "column",
	height: "100%"
};
function EditorChildrenIds({ childrenIds, onChange, containerId, allowReplace = false, fillHeight = false }) {
	const [draggedBlockId, setDraggedBlockId] = useState(null);
	const [dragOverIndex, setDragOverIndex] = useState(null);
	const [isDragNotAllowed, setIsDragNotAllowed] = useState(false);
	const [horizontalDragSide, setHorizontalDragSide] = useState(null);
	const [horizontalDragTargetIndex, setHorizontalDragTargetIndex] = useState(null);
	useEffect(() => {
		if (isDragNotAllowed && typeof document !== "undefined" && document.body) {
			document.body.style.cursor = "no-drop";
			return () => {
				if (typeof document !== "undefined" && document.body) document.body.style.cursor = "";
			};
		}
	}, [isDragNotAllowed]);
	const currentDocument = editorStateStore.getState().document;
	const containerType = containerId ? currentDocument[containerId]?.type : null;
	const isContainerOrColumnsContainer = containerType === "Container" || containerType === "ColumnsContainer";
	const isInsideColumn = containerType === "ColumnsContainer";
	const appendBlock = (block) => {
		const blockId = generateId$2();
		return onChange({
			blockId,
			block,
			childrenIds: [...childrenIds || [], blockId]
		});
	};
	const insertBlock = (block, index) => {
		const blockId = generateId$2();
		const newChildrenIds = [...childrenIds || []];
		newChildrenIds.splice(index, 0, blockId);
		return onChange({
			blockId,
			block,
			childrenIds: newChildrenIds
		});
	};
	const handleDragOver = (e, index) => {
		e.preventDefault();
		e.stopPropagation();
		const draggedId = getCurrentDraggedBlockId$1();
		if (draggedId) {
			const draggedBlock = getCurrentDraggedBlock$1();
			const document = editorStateStore.getState().document;
			const canDrop = canDropBlockIntoContainer(draggedBlock, containerId, document);
			setIsDragNotAllowed(!canDrop);
			if (!canDrop) {
				e.dataTransfer.effectAllowed = "none";
				e.dataTransfer.dropEffect = "none";
			} else {
				e.dataTransfer.effectAllowed = "move";
				e.dataTransfer.dropEffect = "move";
			}
			setDraggedBlockId(draggedId);
			const rect = e.currentTarget.getBoundingClientRect();
			if (e.clientY < rect.top + rect.height / 2) setDragOverIndex(index);
			else {
				const maxIndex = childrenIds?.length || 0;
				setDragOverIndex(Math.min(index + 1, maxIndex));
			}
		}
	};
	const handleDragLeave = () => {
		setDragOverIndex(null);
		setIsDragNotAllowed(false);
		setHorizontalDragSide(null);
		setHorizontalDragTargetIndex(null);
	};
	const handleDrop = (e, dropIndex) => {
		e.preventDefault();
		e.stopPropagation();
		const draggedId = e.dataTransfer.getData("text/plain") || getCurrentDraggedBlockId$1();
		if (!draggedId || !childrenIds) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			return;
		}
		if (draggedId === containerId) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			return;
		}
		const sourceIndex = childrenIds.indexOf(draggedId);
		if (sourceIndex !== -1) {
			if (sourceIndex === dropIndex) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				return;
			}
			if (sourceIndex < dropIndex && dropIndex - sourceIndex === 1) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				return;
			}
			const newChildrenIds = [...childrenIds];
			const [removed] = newChildrenIds.splice(sourceIndex, 1);
			const insertIndex = sourceIndex < dropIndex ? dropIndex - 1 : dropIndex;
			newChildrenIds.splice(insertIndex, 0, removed);
			onChange({
				blockId: draggedId,
				block: {},
				childrenIds: newChildrenIds
			});
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			return;
		}
		const draggedBlock = getCurrentDraggedBlock$1();
		if (!draggedBlock) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			return;
		}
		const isSidebarBlock = window.__isSidebarBlock === true;
		const blockId = isSidebarBlock ? generateId$2() : draggedId;
		if (containerId && blockId === containerId) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			return;
		}
		const document = editorStateStore.getState().document;
		if (!canDropBlockIntoContainer(draggedBlock, containerId, document)) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			setDraggedBlockId(null);
			setDragOverIndex(null);
			setIsDragNotAllowed(false);
			return;
		}
		const newChildrenIds = [...childrenIds];
		if (allowReplace && dropIndex >= 0 && dropIndex < childrenIds.length) newChildrenIds.splice(dropIndex, 1, blockId);
		else newChildrenIds.splice(dropIndex, 0, blockId);
		const parentInfo = isSidebarBlock ? {
			containerId: null,
			columnIndex: null
		} : findParentContainerId$1(document, draggedId);
		const isCrossColumnDrag = !isSidebarBlock && parentInfo.containerId === containerId && parentInfo.columnIndex !== null;
		let newDocument = document;
		if (!isSidebarBlock && !isCrossColumnDrag) {
			newDocument = removeBlockFromParentContainer(document, draggedId, parentInfo);
			setDocument(newDocument);
		}
		setTimeout(() => {
			onChange({
				blockId,
				block: draggedBlock,
				childrenIds: newChildrenIds
			});
		}, 0);
		window.__currentDraggedBlockId = null;
		window.__currentDraggedBlock = null;
		window.__isSidebarBlock = false;
		setDraggedBlockId(null);
		setDragOverIndex(null);
	};
	const handleDragEnd = () => {
		window.__currentDraggedBlockId = null;
		window.__currentDraggedBlock = null;
		window.__isSidebarBlock = false;
		setDraggedBlockId(null);
		setDragOverIndex(null);
		setIsDragNotAllowed(false);
		setHorizontalDragSide(null);
		setHorizontalDragTargetIndex(null);
	};
	if (!childrenIds || childrenIds.length === 0) return /* @__PURE__ */ jsx(Box, {
		"data-column-content": "true",
		onDragOver: (e) => {
			e.preventDefault();
			e.stopPropagation();
			const draggedId = getCurrentDraggedBlockId$1();
			if (draggedId) {
				const draggedBlock = getCurrentDraggedBlock$1();
				const document = editorStateStore.getState().document;
				const canDrop = canDropBlockIntoContainer(draggedBlock, containerId, document);
				setIsDragNotAllowed(!canDrop);
				if (!canDrop) {
					e.dataTransfer.effectAllowed = "none";
					e.dataTransfer.dropEffect = "none";
				} else {
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.dropEffect = "move";
				}
				setDraggedBlockId(draggedId);
				setDragOverIndex(0);
			}
		},
		onDragLeave: handleDragLeave,
		onDrop: (e) => {
			e.preventDefault();
			e.stopPropagation();
			const draggedId = e.dataTransfer.getData("text/plain") || getCurrentDraggedBlockId$1();
			if (!draggedId) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				return;
			}
			const draggedBlock = getCurrentDraggedBlock$1();
			if (!draggedBlock) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				window.__isSidebarBlock = false;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				return;
			}
			const isSidebarBlock = window.__isSidebarBlock === true;
			const blockId = isSidebarBlock ? generateId$2() : draggedId;
			if (containerId && blockId === containerId) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				return;
			}
			const document = editorStateStore.getState().document;
			if (!canDropBlockIntoContainer(draggedBlock, containerId, document)) {
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
				setIsDragNotAllowed(false);
				return;
			}
			const newChildrenIds = [blockId];
			const parentInfo = isSidebarBlock ? {
				containerId: null,
				columnIndex: null
			} : findParentContainerId$1(document, draggedId);
			const isCrossColumnDrag = !isSidebarBlock && parentInfo.containerId === containerId && parentInfo.columnIndex !== null;
			let newDocument = document;
			if (!isSidebarBlock && !isCrossColumnDrag) {
				newDocument = removeBlockFromParentContainer(document, draggedId, parentInfo);
				setDocument(newDocument);
			}
			setTimeout(() => {
				onChange({
					blockId,
					block: draggedBlock,
					childrenIds: newChildrenIds
				});
			}, 0);
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			setDraggedBlockId(null);
			setDragOverIndex(null);
		},
		onDragEnd: handleDragEnd,
		sx: {
			position: "relative",
			cursor: isDragNotAllowed ? "no-drop" : "default",
			...fillHeight && {
				...fillHeightSx,
				alignItems: "flex-start",
				width: "100%"
			},
			...dragOverIndex === 0 && draggedBlockId !== null && !childrenIds?.includes(draggedBlockId) ? {
				outline: "2px solid",
				outlineColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
				outlineOffset: "-2px"
			} : { "&::before": dragOverIndex === 0 && draggedBlockId !== null ? {
				content: "\"\"",
				position: "absolute",
				top: -2,
				left: 0,
				right: 0,
				height: 4,
				backgroundColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
				zIndex: 1e3,
				pointerEvents: "none"
			} : {} }
		},
		children: /* @__PURE__ */ jsx(Box, {
			sx: {
				width: "100%",
				minWidth: 0
			},
			children: /* @__PURE__ */ jsx(AddBlockButton, {
				placeholder: true,
				onSelect: appendBlock,
				disableContainerBlocks: isContainerOrColumnsContainer,
				containerType
			})
		})
	});
	childrenIds && childrenIds.length;
	const content = /* @__PURE__ */ jsxs(Fragment$1, { children: [childrenIds.map((childId, i) => {
		const isLastBlock = i === childrenIds.length - 1;
		const isExternalDrag = draggedBlockId !== null && draggedBlockId !== childId && !childrenIds.includes(draggedBlockId);
		const showTopIndicator = dragOverIndex === i && draggedBlockId !== null && draggedBlockId !== childId && !isExternalDrag;
		const showBottomIndicator = (isLastBlock && dragOverIndex === childrenIds.length || !isLastBlock && dragOverIndex === i + 1) && draggedBlockId !== null && draggedBlockId !== childId && (!isExternalDrag || !allowReplace);
		const draggedParentInfoForRender = draggedBlockId ? findParentContainerId$1(currentDocument, draggedBlockId) : null;
		const targetParentInfoForRender = findParentContainerId$1(currentDocument, childId);
		const isCrossColumnSwapForRender = draggedBlockId && draggedBlockId !== childId && draggedParentInfoForRender && draggedParentInfoForRender.columnIndex !== null && targetParentInfoForRender.columnIndex !== null && draggedParentInfoForRender.containerId === targetParentInfoForRender.containerId && draggedParentInfoForRender.containerId !== null && draggedParentInfoForRender.columnIndex !== targetParentInfoForRender.columnIndex;
		const isCrossColumnDragForRender = draggedParentInfoForRender && draggedParentInfoForRender.columnIndex !== null && targetParentInfoForRender.columnIndex !== null && draggedParentInfoForRender.containerId === targetParentInfoForRender.containerId && draggedParentInfoForRender.columnIndex !== targetParentInfoForRender.columnIndex;
		const draggedBlockForRender = draggedBlockId ? currentDocument[draggedBlockId] : null;
		const isDraggedContainerOrColumn = draggedBlockForRender?.type === "Container" || draggedBlockForRender?.type === "ColumnsContainer";
		const isExternalDragIntoColumn = isExternalDrag && draggedParentInfoForRender && draggedParentInfoForRender.columnIndex === null && targetParentInfoForRender.columnIndex !== null && !allowReplace && !isCrossColumnDragForRender && isDraggedContainerOrColumn;
		const showFullBorder = allowReplace && dragOverIndex === i && isExternalDrag || isCrossColumnSwapForRender && dragOverIndex === i;
		const showTopIndicatorForExternal = !allowReplace && dragOverIndex === i && isExternalDrag && !isCrossColumnSwapForRender && !isExternalDragIntoColumn && !isCrossColumnDragForRender;
		const showBottomIndicatorForExternal = !allowReplace && isLastBlock && dragOverIndex === childrenIds.length && isExternalDrag && !isExternalDragIntoColumn && !isCrossColumnDragForRender;
		const showLeftIndicator = horizontalDragSide === "left" && horizontalDragTargetIndex === i;
		const showRightIndicator = horizontalDragSide === "right" && horizontalDragTargetIndex === i;
		return /* @__PURE__ */ jsxs(Fragment, { children: [!isInsideColumn && /* @__PURE__ */ jsx(Box, {
			component: "span",
			sx: {
				flex: "none",
				alignSelf: "flex-start"
			},
			children: /* @__PURE__ */ jsx(AddBlockButton, {
				onSelect: (block) => insertBlock(block, i),
				disableContainerBlocks: isContainerOrColumnsContainer,
				containerType
			})
		}), /* @__PURE__ */ jsx(Box, {
			onDragOver: (e) => {
				e.preventDefault();
				e.stopPropagation();
				const draggedId = getCurrentDraggedBlockId$1();
				if (!draggedId) return;
				const draggedBlock = getCurrentDraggedBlock$1();
				const document = editorStateStore.getState().document;
				const canDrop = canDropBlockIntoContainer(draggedBlock, containerId, document);
				setIsDragNotAllowed(!canDrop);
				if (!canDrop) {
					e.dataTransfer.effectAllowed = "none";
					e.dataTransfer.dropEffect = "none";
				} else {
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.dropEffect = "move";
				}
				const isExternal = !childrenIds.includes(draggedId);
				const draggedParentInfo = window.__isSidebarBlock === true ? {
					containerId: null,
					columnIndex: null
				} : findParentContainerId$1(document, draggedId);
				const targetParentInfo = findParentContainerId$1(document, childId);
				const isDraggedInColumn = draggedParentInfo.columnIndex !== null;
				const isTargetInColumn = targetParentInfo.columnIndex !== null;
				const isCrossColumnDragForExpand = isDraggedInColumn && isTargetInColumn && targetParentInfo.containerId !== null && (draggedParentInfo.containerId === targetParentInfo.containerId ? draggedParentInfo.columnIndex !== targetParentInfo.columnIndex : true);
				const isCrossColumnSwap = isDraggedInColumn && isTargetInColumn && draggedParentInfo.containerId === targetParentInfo.containerId && draggedParentInfo.containerId !== null && draggedParentInfo.columnIndex !== targetParentInfo.columnIndex;
				const isSameColumn = isDraggedInColumn && isTargetInColumn && draggedParentInfo.containerId === targetParentInfo.containerId && draggedParentInfo.columnIndex === targetParentInfo.columnIndex;
				const targetBlock = document[childId];
				const actualDraggedBlock = draggedBlock || (draggedId ? document[draggedId] : null);
				const isDraggedContainer = actualDraggedBlock?.type === "Container" || actualDraggedBlock?.type === "ColumnsContainer";
				const isTargetContainer = targetBlock?.type === "Container" || targetBlock?.type === "ColumnsContainer";
				if (isCrossColumnSwap && draggedId !== childId) {
					if (!isDraggedContainer && !isTargetContainer) {
						setDraggedBlockId(draggedId);
						setDragOverIndex(i);
						setHorizontalDragSide(null);
						setHorizontalDragTargetIndex(null);
						return;
					}
				}
				if (isCrossColumnDragForExpand && !allowReplace && !isDraggedContainer && !isTargetContainer && draggedId !== childId && !isCrossColumnSwap) {
					const columnsContainerId = targetParentInfo.containerId;
					if (columnsContainerId) {
						const columnsContainer = document[columnsContainerId];
						if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
							if ((columnsContainer.data.props?.columnsCount || columnsContainer.data.props?.columns?.length || 0) >= 4) {
								setIsDragNotAllowed(true);
								e.dataTransfer.effectAllowed = "none";
								e.dataTransfer.dropEffect = "none";
								setHorizontalDragSide(null);
								setHorizontalDragTargetIndex(null);
								setDragOverIndex(null);
								return;
							}
							const rect = e.currentTarget.getBoundingClientRect();
							const mouseX = e.clientX;
							const blockCenter = rect.left + rect.width / 2;
							setDraggedBlockId(draggedId);
							setDragOverIndex(null);
							if (mouseX < blockCenter) setHorizontalDragSide("left");
							else setHorizontalDragSide("right");
							setHorizontalDragTargetIndex(i);
							return;
						}
					}
				}
				if (isSameColumn) {
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
				}
				if (!isDraggedContainer && !isTargetContainer && !isDraggedInColumn && !isTargetInColumn && draggedId !== childId) {
					const rect = e.currentTarget.getBoundingClientRect();
					const mouseX = e.clientX;
					rect.left + rect.width / 2;
					const edgeThreshold = rect.width * .1;
					if (mouseX < rect.left + edgeThreshold) {
						setHorizontalDragSide("left");
						setHorizontalDragTargetIndex(i);
						setDraggedBlockId(draggedId);
						setDragOverIndex(null);
						return;
					} else if (mouseX > rect.right - edgeThreshold) {
						setHorizontalDragSide("right");
						setHorizontalDragTargetIndex(i);
						setDraggedBlockId(draggedId);
						setDragOverIndex(null);
						return;
					} else {
						setHorizontalDragSide(null);
						setHorizontalDragTargetIndex(null);
					}
				} else {
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
				}
				if (isLastBlock && (!isExternal || !allowReplace)) {
					const targetParentInfo = findParentContainerId$1(document, childId);
					const isTargetInColumn = allowReplace || targetParentInfo.columnIndex !== null;
					const draggedParentInfo = findParentContainerId$1(document, draggedId);
					const isDraggedInColumn = draggedParentInfo.columnIndex !== null;
					const isCrossColumnDragForBottom = isDraggedInColumn && isTargetInColumn && draggedParentInfo.containerId === targetParentInfo.containerId && draggedParentInfo.columnIndex !== targetParentInfo.columnIndex;
					const isDraggedContainerOrColumnForBottom = actualDraggedBlock?.type === "Container" || actualDraggedBlock?.type === "ColumnsContainer";
					if (isExternal && isTargetInColumn && (!isDraggedInColumn || isCrossColumnDragForBottom) && !allowReplace) {
						const columnsContainerId = targetParentInfo.containerId;
						if (columnsContainerId) {
							const columnsContainer = document[columnsContainerId];
							if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
								if ((columnsContainer.data.props?.columnsCount || columnsContainer.data.props?.columns?.length || 0) >= 4) {
									setIsDragNotAllowed(true);
									e.dataTransfer.effectAllowed = "none";
									e.dataTransfer.dropEffect = "none";
									setHorizontalDragSide(null);
									setHorizontalDragTargetIndex(null);
									return;
								}
								if (isDraggedContainerOrColumnForBottom) {
									const rect = e.currentTarget.getBoundingClientRect();
									const mouseX = e.clientX;
									const blockCenter = rect.left + rect.width / 2;
									setDraggedBlockId(draggedId);
									setDragOverIndex(null);
									if (mouseX < blockCenter) setHorizontalDragSide("left");
									else setHorizontalDragSide("right");
									setHorizontalDragTargetIndex(i);
									return;
								}
								const rect = e.currentTarget.getBoundingClientRect();
								const mouseX = e.clientX;
								const mouseY = e.clientY;
								const blockBottom = rect.bottom;
								const edgeThreshold = rect.width * .15;
								if (mouseX < rect.left + edgeThreshold) {
									setDraggedBlockId(draggedId);
									setHorizontalDragSide("left");
									setHorizontalDragTargetIndex(i);
									setDragOverIndex(null);
									return;
								} else if (mouseX > rect.right - edgeThreshold) {
									setDraggedBlockId(draggedId);
									setHorizontalDragSide("right");
									setHorizontalDragTargetIndex(i);
									setDragOverIndex(null);
									return;
								} else if (mouseY > blockBottom - rect.height / 2) {
									setDraggedBlockId(draggedId);
									setDragOverIndex(childrenIds.length);
									setHorizontalDragSide(null);
									setHorizontalDragTargetIndex(null);
									return;
								}
							}
						}
					}
					const rect = e.currentTarget.getBoundingClientRect();
					if (e.clientY > rect.bottom - rect.height / 2) {
						setDraggedBlockId(draggedId);
						setDragOverIndex(childrenIds.length);
						setHorizontalDragSide(null);
						setHorizontalDragTargetIndex(null);
						return;
					}
				}
				if (isExternal) {
					const targetParentInfoForExternal = findParentContainerId$1(document, childId);
					const isTargetInColumnForExternal = allowReplace || targetParentInfoForExternal.columnIndex !== null;
					const draggedParentInfoForExternal = findParentContainerId$1(document, draggedId);
					const isDraggedInColumnForExternal = draggedParentInfoForExternal.columnIndex !== null;
					const isCrossColumnDragForExternal = isDraggedInColumnForExternal && isTargetInColumnForExternal && draggedParentInfoForExternal.containerId === targetParentInfoForExternal.containerId && draggedParentInfoForExternal.columnIndex !== targetParentInfoForExternal.columnIndex;
					const isDraggedContainerOrColumnForExternal = actualDraggedBlock?.type === "Container" || actualDraggedBlock?.type === "ColumnsContainer";
					if (isTargetInColumnForExternal && !allowReplace && (!isDraggedInColumnForExternal || isCrossColumnDragForExternal)) {
						const columnsContainerId = targetParentInfoForExternal.containerId;
						if (columnsContainerId) {
							const columnsContainer = document[columnsContainerId];
							if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
								if ((columnsContainer.data.props?.columnsCount || columnsContainer.data.props?.columns?.length || 0) >= 4) {
									setIsDragNotAllowed(true);
									e.dataTransfer.effectAllowed = "none";
									e.dataTransfer.dropEffect = "none";
									setHorizontalDragSide(null);
									setHorizontalDragTargetIndex(null);
									return;
								}
								if (isDraggedContainerOrColumnForExternal) {
									const rect = e.currentTarget.getBoundingClientRect();
									const mouseX = e.clientX;
									const blockCenter = rect.left + rect.width / 2;
									setDraggedBlockId(draggedId);
									setDragOverIndex(null);
									if (mouseX < blockCenter) setHorizontalDragSide("left");
									else setHorizontalDragSide("right");
									setHorizontalDragTargetIndex(i);
									return;
								}
								const rect = e.currentTarget.getBoundingClientRect();
								const mouseX = e.clientX;
								const mouseY = e.clientY;
								rect.left + rect.width / 2;
								const blockCenterY = rect.top + rect.height / 2;
								const edgeThreshold = rect.width * .15;
								if (mouseX < rect.left + edgeThreshold) {
									setDraggedBlockId(draggedId);
									setHorizontalDragSide("left");
									setHorizontalDragTargetIndex(i);
									setDragOverIndex(null);
									return;
								} else if (mouseX > rect.right - edgeThreshold) {
									setDraggedBlockId(draggedId);
									setHorizontalDragSide("right");
									setHorizontalDragTargetIndex(i);
									setDragOverIndex(null);
									return;
								} else {
									setDraggedBlockId(draggedId);
									setHorizontalDragSide(null);
									setHorizontalDragTargetIndex(null);
									if (mouseY < blockCenterY) setDragOverIndex(i);
									else {
										const maxIndex = childrenIds?.length || 0;
										setDragOverIndex(Math.min(i + 1, maxIndex));
									}
									return;
								}
							}
						}
					}
					setDraggedBlockId(draggedId);
					if (allowReplace) setDragOverIndex(i);
					else setDragOverIndex(i);
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
					return;
				}
				handleDragOver(e, i);
				setHorizontalDragSide(null);
				setHorizontalDragTargetIndex(null);
			},
			onDragLeave: handleDragLeave,
			onDrop: (e) => {
				e.preventDefault();
				e.stopPropagation();
				const draggedId = e.dataTransfer.getData("text/plain") || getCurrentDraggedBlockId$1();
				if (!draggedId || !childrenIds) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
					return;
				}
				const draggedBlock = getCurrentDraggedBlock$1();
				if (!draggedBlock) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
					return;
				}
				const isSidebarBlock = window.__isSidebarBlock === true;
				const targetBlockId = childId;
				const document = editorStateStore.getState().document;
				const targetBlock = document[targetBlockId];
				const isDraggedContainer = draggedBlock?.type === "Container" || draggedBlock?.type === "ColumnsContainer";
				const isTargetContainer = targetBlock?.type === "Container" || targetBlock?.type === "ColumnsContainer";
				const draggedParentInfoForDrop = isSidebarBlock ? {
					containerId: null,
					columnIndex: null
				} : findParentContainerId$1(document, draggedId);
				const targetParentInfoForDrop = findParentContainerId$1(document, targetBlockId);
				const isDraggedInColumnForDrop = draggedParentInfoForDrop.columnIndex !== null;
				const isTargetInColumnForDrop = targetParentInfoForDrop.columnIndex !== null;
				const isCrossColumnSwap = isDraggedInColumnForDrop && isTargetInColumnForDrop && draggedParentInfoForDrop.containerId === targetParentInfoForDrop.containerId && draggedParentInfoForDrop.containerId !== null && draggedParentInfoForDrop.columnIndex !== targetParentInfoForDrop.columnIndex;
				const isSameColumn = isDraggedInColumnForDrop && isTargetInColumnForDrop && draggedParentInfoForDrop.containerId === targetParentInfoForDrop.containerId && draggedParentInfoForDrop.columnIndex === targetParentInfoForDrop.columnIndex;
				if (isCrossColumnSwap && !isDraggedContainer && !isTargetContainer && draggedId !== targetBlockId) {
					const draggedColumnIndex = draggedParentInfoForDrop.columnIndex;
					const targetColumnIndex = targetParentInfoForDrop.columnIndex;
					const columnsContainerId = draggedParentInfoForDrop.containerId;
					const columnsContainer = document[columnsContainerId];
					if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
						const currentColumns = columnsContainer.data.props?.columns || [];
						const newColumns = currentColumns.map((col, index) => {
							if (index === draggedColumnIndex) {
								const targetChildrenIds = currentColumns[targetColumnIndex]?.childrenIds || [];
								if (targetChildrenIds.length > 0) return { childrenIds: [...targetChildrenIds] };
								else return { childrenIds: [] };
							} else if (index === targetColumnIndex) return { childrenIds: [...currentColumns[draggedColumnIndex]?.childrenIds || []] };
							else return { childrenIds: col?.childrenIds || [] };
						});
						const updatedColumnsContainer = {
							...columnsContainer,
							data: {
								...columnsContainer.data,
								props: {
									...columnsContainer.data.props,
									columns: newColumns
								}
							}
						};
						setDocument({ [columnsContainerId]: updatedColumnsContainer });
						window.__currentDraggedBlockId = null;
						window.__currentDraggedBlock = null;
						window.__isSidebarBlock = false;
						setDraggedBlockId(null);
						setDragOverIndex(null);
						setHorizontalDragSide(null);
						setHorizontalDragTargetIndex(null);
						return;
					}
				}
				if (isSameColumn) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
					return;
				}
				const rect = e.currentTarget.getBoundingClientRect();
				const mouseX = e.clientX;
				const edgeThreshold = rect.width * .1;
				const isHorizontalDrag = !isDraggedContainer && !isTargetContainer && !isDraggedInColumnForDrop && !isTargetInColumnForDrop && draggedId !== targetBlockId && (mouseX < rect.left + edgeThreshold || mouseX > rect.right - edgeThreshold);
				const detectedHorizontalSide = mouseX < rect.left + edgeThreshold ? "left" : mouseX > rect.right - edgeThreshold ? "right" : null;
				if (isHorizontalDrag && detectedHorizontalSide) {
					const columnsContainerId = generateId$2();
					const isSidebarBlockForHorizontal = window.__isSidebarBlock === true;
					const newBlockId = isSidebarBlockForHorizontal ? generateId$2() : draggedId;
					const leftColumnBlockId = detectedHorizontalSide === "left" ? newBlockId : targetBlockId;
					const rightColumnBlockId = detectedHorizontalSide === "left" ? targetBlockId : newBlockId;
					const columnsContainer = {
						type: "ColumnsContainer",
						data: ColumnsContainerPropsSchema$1.parse({
							style: { padding: {
								top: 16,
								bottom: 16,
								left: 24,
								right: 24
							} },
							props: {
								columnsCount: 2,
								columnsGap: 16,
								columns: [{ childrenIds: [leftColumnBlockId] }, { childrenIds: [rightColumnBlockId] }]
							}
						})
					};
					const draggedParentInfo = isSidebarBlockForHorizontal ? {
						containerId: null,
						columnIndex: null
					} : findParentContainerId$1(document, draggedId);
					const targetParentInfo = findParentContainerId$1(document, targetBlockId);
					const isSameContainer = draggedParentInfo.containerId === targetParentInfo.containerId && draggedParentInfo.containerId === containerId && draggedParentInfo.columnIndex === targetParentInfo.columnIndex;
					let newDocument = document;
					if (!isSidebarBlockForHorizontal && !isSameContainer && draggedParentInfo.containerId) newDocument = removeBlockFromParentContainer(newDocument, draggedId, draggedParentInfo);
					const newChildrenIds = [...childrenIds];
					const targetIndex = childrenIds.indexOf(targetBlockId);
					const draggedIndex = childrenIds.indexOf(draggedId);
					if (targetIndex !== -1) if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
						newChildrenIds.splice(draggedIndex, 1);
						const adjustedTargetIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex;
						newChildrenIds.splice(adjustedTargetIndex, 1, columnsContainerId);
					} else newChildrenIds.splice(targetIndex, 1, columnsContainerId);
					else {
						newChildrenIds.splice(i, 0, columnsContainerId);
						if (draggedIndex !== -1) newChildrenIds.splice(draggedIndex, 1);
					}
					newDocument = {
						...newDocument,
						[newBlockId]: draggedBlock,
						[targetBlockId]: targetBlock,
						[columnsContainerId]: columnsContainer
					};
					setDocument(newDocument);
					setTimeout(() => {
						onChange({
							blockId: columnsContainerId,
							block: columnsContainer,
							childrenIds: newChildrenIds
						});
						setSelectedBlockId(columnsContainerId);
					}, 0);
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setHorizontalDragSide(null);
					setHorizontalDragTargetIndex(null);
					return;
				}
				if (isLastBlock && dragOverIndex === childrenIds.length) {
					const isSidebarBlockForAppend = window.__isSidebarBlock === true;
					const sourceIndex = isSidebarBlockForAppend ? -1 : childrenIds.indexOf(draggedId);
					if (sourceIndex !== -1) {
						if (sourceIndex === childrenIds.length - 1) {
							window.__currentDraggedBlockId = null;
							window.__currentDraggedBlock = null;
							window.__isSidebarBlock = false;
							setDraggedBlockId(null);
							setDragOverIndex(null);
							return;
						}
						const newChildrenIds = [...childrenIds];
						const [removed] = newChildrenIds.splice(sourceIndex, 1);
						newChildrenIds.push(removed);
						onChange({
							blockId: draggedId,
							block: {},
							childrenIds: newChildrenIds
						});
						window.__currentDraggedBlockId = null;
						window.__currentDraggedBlock = null;
						window.__isSidebarBlock = false;
						setDraggedBlockId(null);
						setDragOverIndex(null);
						return;
					}
					const targetParentInfoForAppend = findParentContainerId$1(document, containerId || "");
					const isTargetInColumnForAppend = allowReplace || targetParentInfoForAppend.columnIndex !== null;
					const draggedParentInfoForAppend = isSidebarBlockForAppend ? {
						containerId: null,
						columnIndex: null
					} : findParentContainerId$1(document, draggedId);
					const isDraggedInColumnForAppend = draggedParentInfoForAppend.columnIndex !== null;
					const isDraggedContainerOrColumnForAppend = draggedBlock?.type === "Container" || draggedBlock?.type === "ColumnsContainer";
					const isCrossColumnDragForAppend = isDraggedInColumnForAppend && isTargetInColumnForAppend && draggedParentInfoForAppend.containerId === targetParentInfoForAppend.containerId && draggedParentInfoForAppend.columnIndex !== targetParentInfoForAppend.columnIndex;
					if (isTargetInColumnForAppend && !allowReplace && (!isDraggedInColumnForAppend || isCrossColumnDragForAppend) && isDraggedContainerOrColumnForAppend) {
						const columnsContainerId = targetParentInfoForAppend.containerId;
						if (columnsContainerId) {
							const columnsContainer = document[columnsContainerId];
							if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
								const currentColumnsCount = columnsContainer.data.props?.columnsCount || columnsContainer.data.props?.columns?.length || 0;
								if (currentColumnsCount >= 4) {
									window.__currentDraggedBlockId = null;
									window.__currentDraggedBlock = null;
									window.__isSidebarBlock = false;
									setDraggedBlockId(null);
									setDragOverIndex(null);
									setIsDragNotAllowed(false);
									return;
								}
								const newBlockIdForAppend = isSidebarBlockForAppend ? generateId$2() : draggedId;
								const currentColumns = columnsContainer.data.props?.columns || [];
								const targetColumnIndex = targetParentInfoForAppend.columnIndex;
								let newColumnsCount;
								let newFixedWidths = void 0;
								if (currentColumnsCount === 2 || currentColumnsCount === 4) {
									newColumnsCount = 3;
									newFixedWidths = [
										null,
										null,
										null,
										null
									];
								} else newColumnsCount = currentColumnsCount + 1;
								const newColumns = [];
								for (let colIndex = 0; colIndex < currentColumnsCount; colIndex++) if (colIndex === targetColumnIndex) {
									newColumns.push({ childrenIds: currentColumns[colIndex]?.childrenIds || [] });
									newColumns.push({ childrenIds: [newBlockIdForAppend] });
								} else newColumns.push({ childrenIds: currentColumns[colIndex]?.childrenIds || [] });
								if (currentColumnsCount === 2 || currentColumnsCount === 4) {
									if (currentColumnsCount === 4) newColumns.splice(3);
								}
								const parentInfo = isSidebarBlockForAppend ? {
									containerId: null,
									columnIndex: null
								} : findParentContainerId$1(document, draggedId);
								let newDocument = document;
								if (!isSidebarBlockForAppend && parentInfo.containerId) newDocument = removeBlockFromParentContainer(document, draggedId, parentInfo);
								const updatedColumnsContainer = {
									...columnsContainer,
									data: {
										...columnsContainer.data,
										props: {
											...columnsContainer.data.props,
											columnsCount: newColumnsCount,
											columns: newColumns,
											...newFixedWidths !== void 0 && { fixedWidths: newFixedWidths }
										}
									}
								};
								setDocument({
									...newDocument,
									[columnsContainerId]: updatedColumnsContainer,
									[newBlockIdForAppend]: draggedBlock
								});
								window.__currentDraggedBlockId = null;
								window.__currentDraggedBlock = null;
								window.__isSidebarBlock = false;
								setDraggedBlockId(null);
								setDragOverIndex(null);
								setHorizontalDragSide(null);
								setHorizontalDragTargetIndex(null);
								return;
							}
						}
					}
					if (!draggedBlock) {
						window.__currentDraggedBlockId = null;
						window.__currentDraggedBlock = null;
						window.__isSidebarBlock = false;
						setDraggedBlockId(null);
						setDragOverIndex(null);
						return;
					}
					const isSidebarBlockForMove = window.__isSidebarBlock === true;
					const blockId = isSidebarBlockForMove ? generateId$2() : draggedId;
					if (containerId && blockId === containerId) {
						window.__currentDraggedBlockId = null;
						window.__currentDraggedBlock = null;
						window.__isSidebarBlock = false;
						setDraggedBlockId(null);
						setDragOverIndex(null);
						return;
					}
					if (!canDropBlockIntoContainer(draggedBlock, containerId, document)) {
						window.__currentDraggedBlockId = null;
						window.__currentDraggedBlock = null;
						window.__isSidebarBlock = false;
						setDraggedBlockId(null);
						setDragOverIndex(null);
						setIsDragNotAllowed(false);
						return;
					}
					if (containerId) {
						const targetParentInfoForBottom = findParentContainerId$1(document, containerId);
						const isTargetInColumnForBottom = allowReplace || targetParentInfoForBottom.columnIndex !== null;
						const draggedParentInfoForBottom = isSidebarBlockForMove ? {
							containerId: null,
							columnIndex: null
						} : findParentContainerId$1(document, draggedId);
						const isDraggedInColumnForBottom = draggedParentInfoForBottom.columnIndex !== null;
						const isDraggedContainerOrColumnForBottom = draggedBlock?.type === "Container" || draggedBlock?.type === "ColumnsContainer";
						const isCrossColumnDragForBottomCheck = isDraggedInColumnForBottom && isTargetInColumnForBottom && draggedParentInfoForBottom.containerId === targetParentInfoForBottom.containerId && draggedParentInfoForBottom.columnIndex !== targetParentInfoForBottom.columnIndex;
						if (isTargetInColumnForBottom && !allowReplace && (!isDraggedInColumnForBottom || isCrossColumnDragForBottomCheck) && isDraggedContainerOrColumnForBottom) {
							window.__currentDraggedBlockId = null;
							window.__currentDraggedBlock = null;
							window.__isSidebarBlock = false;
							setDraggedBlockId(null);
							setDragOverIndex(null);
							setIsDragNotAllowed(false);
							return;
						}
					}
					const newChildrenIds = [...childrenIds, blockId];
					const parentInfo = isSidebarBlockForMove ? {
						containerId: null,
						columnIndex: null
					} : findParentContainerId$1(document, draggedId);
					const isCrossColumnDrag = !isSidebarBlockForMove && parentInfo.containerId === containerId && parentInfo.columnIndex !== null;
					let newDocumentForBottom = document;
					if (!isSidebarBlockForMove && !isCrossColumnDrag) {
						newDocumentForBottom = removeBlockFromParentContainer(document, draggedId, parentInfo);
						setDocument(newDocumentForBottom);
					}
					setTimeout(() => {
						onChange({
							blockId,
							block: draggedBlock,
							childrenIds: newChildrenIds
						});
					}, 0);
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					return;
				}
				if ((window.__isSidebarBlock === true ? -1 : childrenIds.indexOf(draggedId)) !== -1) {
					handleDrop(e, dragOverIndex !== null ? dragOverIndex : i);
					return;
				}
				if (!draggedBlock) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					return;
				}
				const isSidebarBlockForMove = window.__isSidebarBlock === true;
				const blockId = isSidebarBlockForMove ? generateId$2() : draggedId;
				if (containerId && blockId === containerId) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					return;
				}
				if (!canDropBlockIntoContainer(draggedBlock, containerId, document)) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setIsDragNotAllowed(false);
					return;
				}
				const targetParentInfoForInsert = findParentContainerId$1(document, childId);
				const isTargetInColumnForInsert = allowReplace || targetParentInfoForInsert.columnIndex !== null;
				const draggedParentInfoForInsert = isSidebarBlockForMove ? {
					containerId: null,
					columnIndex: null
				} : findParentContainerId$1(document, draggedId);
				const isDraggedInColumnForInsert = draggedParentInfoForInsert.columnIndex !== null;
				const isDraggedContainerOrColumnForInsert = draggedBlock?.type === "Container" || draggedBlock?.type === "ColumnsContainer";
				const isCrossColumnDragForInsert = isDraggedInColumnForInsert && isTargetInColumnForInsert && targetParentInfoForInsert.containerId !== null && (draggedParentInfoForInsert.containerId === targetParentInfoForInsert.containerId ? draggedParentInfoForInsert.columnIndex !== targetParentInfoForInsert.columnIndex : true);
				if (isTargetInColumnForInsert && (!isDraggedInColumnForInsert || isCrossColumnDragForInsert) && !allowReplace && isDraggedContainerOrColumnForInsert || (horizontalDragSide === "left" || horizontalDragSide === "right") && horizontalDragTargetIndex === i && isTargetInColumnForInsert && (!isDraggedInColumnForInsert || isCrossColumnDragForInsert) && !allowReplace) {
					const columnsContainerId = targetParentInfoForInsert.containerId;
					if (columnsContainerId) {
						const columnsContainer = document[columnsContainerId];
						if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
							const currentColumnsCount = columnsContainer.data.props?.columnsCount || columnsContainer.data.props?.columns?.length || 0;
							if (currentColumnsCount >= 4) {
								window.__currentDraggedBlockId = null;
								window.__currentDraggedBlock = null;
								setDraggedBlockId(null);
								setDragOverIndex(null);
								setIsDragNotAllowed(false);
								return;
							}
							const currentColumns = columnsContainer.data.props?.columns || [];
							const targetColumnIndex = targetParentInfoForInsert.columnIndex;
							let newColumnsCount;
							let newFixedWidths = void 0;
							if (currentColumnsCount === 2 || currentColumnsCount === 4) {
								newColumnsCount = 3;
								newFixedWidths = [
									null,
									null,
									null,
									null
								];
							} else newColumnsCount = currentColumnsCount + 1;
							const isLeftInsert = horizontalDragSide === "left" && horizontalDragTargetIndex === i;
							const newColumns = [];
							for (let colIndex = 0; colIndex < currentColumnsCount; colIndex++) if (isLeftInsert && colIndex === targetColumnIndex) {
								newColumns.push({ childrenIds: [blockId] });
								newColumns.push({ childrenIds: currentColumns[colIndex]?.childrenIds || [] });
							} else if (!isLeftInsert && colIndex === targetColumnIndex) {
								newColumns.push({ childrenIds: currentColumns[colIndex]?.childrenIds || [] });
								newColumns.push({ childrenIds: [blockId] });
							} else newColumns.push({ childrenIds: currentColumns[colIndex]?.childrenIds || [] });
							if (currentColumnsCount === 2 || currentColumnsCount === 4) {
								if (currentColumnsCount === 4) newColumns.splice(3);
							}
							const parentInfo = isSidebarBlockForMove ? {
								containerId: null,
								columnIndex: null
							} : findParentContainerId$1(document, draggedId);
							let newDocument = document;
							if (!isSidebarBlockForMove && parentInfo.containerId) newDocument = removeBlockFromParentContainer(document, draggedId, parentInfo);
							const updatedColumnsContainer = {
								...columnsContainer,
								data: {
									...columnsContainer.data,
									props: {
										...columnsContainer.data.props,
										columnsCount: newColumnsCount,
										columns: newColumns,
										...newFixedWidths !== void 0 && { fixedWidths: newFixedWidths }
									}
								}
							};
							setDocument({
								...newDocument,
								[columnsContainerId]: updatedColumnsContainer,
								[blockId]: draggedBlock
							});
							window.__currentDraggedBlockId = null;
							window.__currentDraggedBlock = null;
							window.__isSidebarBlock = false;
							setDraggedBlockId(null);
							setDragOverIndex(null);
							setHorizontalDragSide(null);
							setHorizontalDragTargetIndex(null);
							return;
						}
					}
				}
				const targetParentInfoForCheck = findParentContainerId$1(document, childId);
				const isTargetInColumnForCheck = allowReplace || targetParentInfoForCheck.columnIndex !== null;
				const draggedParentInfoForCheck = isSidebarBlockForMove ? {
					containerId: null,
					columnIndex: null
				} : findParentContainerId$1(document, draggedId);
				const isDraggedInColumnForCheck = draggedParentInfoForCheck.columnIndex !== null;
				const isDraggedContainerOrColumnForCheck = draggedBlock?.type === "Container" || draggedBlock?.type === "ColumnsContainer";
				const isCrossColumnDragForCheck = isDraggedInColumnForCheck && isTargetInColumnForCheck && draggedParentInfoForCheck.containerId === targetParentInfoForCheck.containerId && draggedParentInfoForCheck.columnIndex !== targetParentInfoForCheck.columnIndex;
				if (isTargetInColumnForCheck && !allowReplace && (!isDraggedInColumnForCheck || isCrossColumnDragForCheck) && isDraggedContainerOrColumnForCheck) {
					window.__currentDraggedBlockId = null;
					window.__currentDraggedBlock = null;
					window.__isSidebarBlock = false;
					setDraggedBlockId(null);
					setDragOverIndex(null);
					setIsDragNotAllowed(false);
					return;
				}
				const newChildrenIds = [...childrenIds];
				if (allowReplace) newChildrenIds.splice(i, 1, blockId);
				else {
					const insertIndex = dragOverIndex !== null ? dragOverIndex : i;
					newChildrenIds.splice(insertIndex, 0, blockId);
				}
				const parentInfo = isSidebarBlockForMove ? {
					containerId: null,
					columnIndex: null
				} : findParentContainerId$1(document, draggedId);
				const isCrossColumnDrag = !isSidebarBlockForMove && parentInfo.containerId === containerId && parentInfo.columnIndex !== null;
				let newDocument = document;
				if (!isSidebarBlockForMove && !isCrossColumnDrag) {
					newDocument = removeBlockFromParentContainer(document, draggedId, parentInfo);
					setDocument(newDocument);
				}
				setTimeout(() => {
					onChange({
						blockId,
						block: draggedBlock,
						childrenIds: newChildrenIds
					});
				}, 0);
				window.__currentDraggedBlockId = null;
				window.__currentDraggedBlock = null;
				setDraggedBlockId(null);
				setDragOverIndex(null);
			},
			onDragEnd: handleDragEnd,
			sx: {
				position: "relative",
				cursor: isDragNotAllowed ? "no-drop" : "default",
				...fillHeight && {
					width: "100%",
					minWidth: 0
				},
				...showFullBorder ? {
					outline: "2px solid",
					outlineColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
					outlineOffset: "-2px"
				} : {
					"&::before": showLeftIndicator ? {
						content: "\"\"",
						position: "absolute",
						top: 0,
						left: -2,
						bottom: 0,
						width: 4,
						backgroundColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
						zIndex: 1e3,
						pointerEvents: "none"
					} : showTopIndicator || showTopIndicatorForExternal ? {
						content: "\"\"",
						position: "absolute",
						top: -2,
						left: 0,
						right: 0,
						height: 4,
						backgroundColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
						zIndex: 1e3,
						pointerEvents: "none"
					} : {},
					"&::after": showRightIndicator ? {
						content: "\"\"",
						position: "absolute",
						top: 0,
						right: -2,
						bottom: 0,
						width: 4,
						backgroundColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
						zIndex: 1e3,
						pointerEvents: "none"
					} : showBottomIndicator || showBottomIndicatorForExternal ? {
						content: "\"\"",
						position: "absolute",
						bottom: -2,
						left: 0,
						right: 0,
						height: 4,
						backgroundColor: isDragNotAllowed ? "#d3d9dd" : "primary.main",
						zIndex: 1e3,
						pointerEvents: "none"
					} : {}
				}
			},
			children: /* @__PURE__ */ jsx(EditorBlock, { id: childId })
		})] }, childId);
	}), !isInsideColumn && /* @__PURE__ */ jsx(Box, {
		component: "span",
		sx: {
			display: "block",
			width: "100%"
		},
		children: /* @__PURE__ */ jsx(AddBlockButton, {
			onSelect: appendBlock,
			disableContainerBlocks: isContainerOrColumnsContainer,
			containerType
		})
	})] });
	return fillHeight ? /* @__PURE__ */ jsx(Box, {
		sx: fillHeightSx,
		children: content
	}) : content;
}
//#endregion
//#region src/documents/blocks/ColumnsContainer/ColumnsContainerEditor.tsx
var EMPTY_COLUMNS_1 = [{ childrenIds: [] }];
var EMPTY_COLUMNS_2 = [{ childrenIds: [] }, { childrenIds: [] }];
var EMPTY_COLUMNS_3 = [
	{ childrenIds: [] },
	{ childrenIds: [] },
	{ childrenIds: [] }
];
var EMPTY_COLUMNS_4 = [
	{ childrenIds: [] },
	{ childrenIds: [] },
	{ childrenIds: [] },
	{ childrenIds: [] }
];
function ColumnsContainerEditor({ style, props }) {
	const currentBlockId = useCurrentBlockId();
	useDocument();
	const { columns, columnsCount, ...rest } = props ?? {};
	const restProps = rest;
	const count = columnsCount ?? 3;
	const columnsValue = useMemo(() => {
		if (columns && columns.length === count) return columns;
		if (columns && columns.length > 0) {
			const newColumns = columns.slice(0, count).map((col) => col || { childrenIds: [] });
			while (newColumns.length < count) newColumns.push({ childrenIds: [] });
			return newColumns;
		}
		if (count === 1) return EMPTY_COLUMNS_1;
		else if (count === 2) return EMPTY_COLUMNS_2;
		else if (count === 4) return EMPTY_COLUMNS_4;
		else return EMPTY_COLUMNS_3;
	}, [columns, count]);
	const updateColumn = (columnIndex, { block, blockId, childrenIds }) => {
		const currentDocument = editorStateStore.getState().document;
		const blockExists = currentDocument[blockId] && currentDocument[blockId].type;
		const latestContainer = currentDocument[currentBlockId];
		let latestColumns = columnsValue;
		if (latestContainer && latestContainer.type === "ColumnsContainer") {
			const containerColumns = latestContainer.data.props?.columns;
			if (containerColumns && containerColumns.length > 0) latestColumns = containerColumns;
		}
		let sourceColumnIndex = null;
		for (let i = 0; i < latestColumns.length; i++) if (i !== columnIndex && latestColumns[i]?.childrenIds?.includes(blockId)) {
			sourceColumnIndex = i;
			break;
		}
		let finalBlockId = blockId;
		let finalBlock = block;
		if (sourceColumnIndex !== null && block.type) {
			finalBlockId = `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
			finalBlock = JSON.parse(JSON.stringify(block));
		}
		const nColumns = [];
		for (let i = 0; i < count; i++) if (i === columnIndex) {
			const updatedChildrenIds = sourceColumnIndex !== null ? childrenIds.map((id) => id === blockId ? finalBlockId : id) : childrenIds;
			nColumns.push({ childrenIds: updatedChildrenIds });
		} else if (i === sourceColumnIndex) {
			const filteredChildrenIds = (latestColumns[i]?.childrenIds || []).filter((id) => id !== blockId);
			nColumns.push({ childrenIds: filteredChildrenIds });
		} else {
			const existingColumn = latestColumns[i];
			nColumns.push(existingColumn ? { childrenIds: existingColumn.childrenIds || [] } : { childrenIds: [] });
		}
		const updates = { [currentBlockId]: {
			type: "ColumnsContainer",
			data: ColumnsContainerPropsSchema$1.parse({
				style,
				props: {
					...restProps,
					columnsCount: count,
					columns: nColumns
				}
			})
		} };
		if (updates[currentBlockId].data.props) {
			updates[currentBlockId].data.props.columns = nColumns;
			updates[currentBlockId].data.props.columnsCount = count;
		}
		if (!block.type) setDocument(updates);
		else {
			if (sourceColumnIndex !== null) updates[finalBlockId] = finalBlock;
			else if (!blockExists) updates[blockId] = block;
			setDocument(updates);
			if (block.type) setSelectedBlockId(finalBlockId);
		}
	};
	const currentContainer = useDocument()[currentBlockId];
	const currentColumns = currentContainer && currentContainer.type === "ColumnsContainer" && currentContainer.data.props?.columns || columnsValue;
	const isStretch = (restProps?.contentAlignment ?? "middle") === "stretch";
	const columnHeights = restProps?.columnHeights;
	const columnAreaSx = {
		width: "100%",
		height: "100%",
		minWidth: 0,
		overflowWrap: "break-word",
		wordBreak: "break-word",
		...isStretch && {
			flex: 1,
			minHeight: 0,
			display: "flex",
			flexDirection: "column"
		}
	};
	const columnComponents = currentColumns.map((col, index) => {
		const allowReplace = !col?.childrenIds || col.childrenIds.length === 0;
		const columnHeightPx = columnHeights?.[index];
		const hasColumnHeight = columnHeightPx != null && columnHeightPx > 0;
		const sx = {
			...columnAreaSx,
			...hasColumnHeight ? {
				height: `${columnHeightPx}px`,
				display: "flex",
				flexDirection: "column",
				minHeight: 0
			} : {}
		};
		const columnContent = /* @__PURE__ */ jsx(Box, {
			"data-column-area": "true",
			sx,
			children: /* @__PURE__ */ jsx(EditorChildrenIds, {
				childrenIds: col?.childrenIds,
				onChange: (change) => updateColumn(index, change),
				containerId: currentBlockId,
				allowReplace,
				fillHeight: isStretch || hasColumnHeight
			})
		}, index);
		return isStretch || hasColumnHeight ? /* @__PURE__ */ jsx(ColumnStretchProvider, {
			value: true,
			children: columnContent
		}, index) : columnContent;
	});
	return /* @__PURE__ */ jsx(Box, {
		sx: {
			color: "inherit",
			width: "100%",
			minWidth: 0,
			maxWidth: "100%",
			boxSizing: "border-box"
		},
		children: /* @__PURE__ */ jsx(ColumnsContainer, {
			props: {
				...restProps && typeof restProps === "object" ? restProps : {},
				columnsCount: count
			},
			style,
			columns: columnComponents
		})
	});
}
//#endregion
//#region src/documents/blocks/Container/ContainerEditor.tsx
function ContainerEditor({ style, props }) {
	const childrenIds = props?.childrenIds ?? [];
	const document = useDocument();
	const currentBlockId = useCurrentBlockId();
	return /* @__PURE__ */ jsx(Container, {
		style,
		children: /* @__PURE__ */ jsx(EditorChildrenIds, {
			childrenIds,
			containerId: currentBlockId,
			onChange: ({ block, blockId, childrenIds }) => {
				if (blockId === currentBlockId) return;
				if (!block.type) setDocument({ [currentBlockId]: {
					type: "Container",
					data: {
						...document[currentBlockId].data,
						props: { childrenIds }
					}
				} });
				else {
					const latestDocument = editorStateStore.getState().document;
					const blockExists = latestDocument[blockId] && latestDocument[blockId].type;
					const updates = { [currentBlockId]: {
						type: "Container",
						data: {
							...latestDocument[currentBlockId].data,
							props: { childrenIds }
						}
					} };
					if (!blockExists) updates[blockId] = block;
					setDocument(updates);
					setSelectedBlockId(blockId);
				}
			}
		})
	});
}
//#endregion
//#region src/documents/blocks/EmailLayout/EmailLayoutEditor.tsx
var idCounter = 0;
function generateId$1() {
	return `block-${Date.now()}-${++idCounter}`;
}
var getCurrentDraggedBlockId = () => {
	return window.__currentDraggedBlockId || null;
};
var getCurrentDraggedBlock = () => {
	return window.__currentDraggedBlock || null;
};
function getFontFamily(fontFamily) {
	switch (fontFamily ?? "MODERN_SANS") {
		case "MODERN_SANS": return "\"Helvetica Neue\", \"Arial Nova\", \"Nimbus Sans\", Arial, sans-serif";
		case "BOOK_SANS": return "Optima, Candara, \"Noto Sans\", source-sans-pro, sans-serif";
		case "ORGANIC_SANS": return "Seravek, \"Gill Sans Nova\", Ubuntu, Calibri, \"DejaVu Sans\", source-sans-pro, sans-serif";
		case "GEOMETRIC_SANS": return "Avenir, \"Avenir Next LT Pro\", Montserrat, Corbel, \"URW Gothic\", source-sans-pro, sans-serif";
		case "HEAVY_SANS": return "Bahnschrift, \"DIN Alternate\", \"Franklin Gothic Medium\", \"Nimbus Sans Narrow\", sans-serif-condensed, sans-serif";
		case "ROUNDED_SANS": return "ui-rounded, \"Hiragino Maru Gothic ProN\", Quicksand, Comfortaa, Manjari, \"Arial Rounded MT Bold\", Calibri, source-sans-pro, sans-serif";
		case "MODERN_SERIF": return "Charter, \"Bitstream Charter\", \"Sitka Text\", Cambria, serif";
		case "BOOK_SERIF": return "\"Iowan Old Style\", \"Palatino Linotype\", \"URW Palladio L\", P052, serif";
		case "MONOSPACE": return "\"Nimbus Mono PS\", \"Courier New\", \"Cutive Mono\", monospace";
	}
}
function EmailLayoutEditor(props) {
	const childrenIds = props.childrenIds ?? [];
	const document = useDocument();
	const currentBlockId = useCurrentBlockId();
	const handleDropOnEmptyArea = (e) => {
		if (e.target.closest("[data-column-content=\"true\"]") !== null) return;
		e.preventDefault();
		e.stopPropagation();
		const draggedId = e.dataTransfer.getData("text/plain") || getCurrentDraggedBlockId();
		if (!draggedId) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			return;
		}
		const isSidebarBlock = window.__isSidebarBlock === true;
		const draggedBlock = getCurrentDraggedBlock();
		if (!draggedBlock) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			return;
		}
		if (!isSidebarBlock && childrenIds.includes(draggedId)) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			return;
		}
		const blockId = isSidebarBlock ? generateId$1() : draggedId;
		if (blockId === currentBlockId) {
			window.__currentDraggedBlockId = null;
			window.__currentDraggedBlock = null;
			window.__isSidebarBlock = false;
			return;
		}
		const latestDocument = editorStateStore.getState().document;
		if (!isSidebarBlock) {
			let parentInfo = {
				containerId: null,
				columnIndex: null
			};
			for (const [containerId, container] of Object.entries(latestDocument)) {
				if (container.type === "EmailLayout" && container.data.childrenIds?.includes(draggedId)) {
					parentInfo = {
						containerId,
						columnIndex: null
					};
					break;
				}
				if (container.type === "Container" && container.data.props?.childrenIds?.includes(draggedId)) {
					parentInfo = {
						containerId,
						columnIndex: null
					};
					break;
				}
				if (container.type === "ColumnsContainer") {
					const columns = container.data.props?.columns;
					if (columns) {
						for (let i = 0; i < columns.length; i++) if (columns[i].childrenIds?.includes(draggedId)) {
							parentInfo = {
								containerId,
								columnIndex: i
							};
							break;
						}
					}
				}
			}
			if (parentInfo.containerId) {
				const parentContainer = latestDocument[parentInfo.containerId];
				const newDocument = { ...latestDocument };
				if (parentInfo.columnIndex !== null) {
					const parentData = parentContainer.data;
					const columns = [...parentData.props?.columns || []];
					columns[parentInfo.columnIndex] = {
						...columns[parentInfo.columnIndex],
						childrenIds: columns[parentInfo.columnIndex].childrenIds?.filter((id) => id !== draggedId) || []
					};
					newDocument[parentInfo.containerId] = {
						...parentContainer,
						data: {
							...parentData,
							props: {
								...parentData.props,
								columns
							}
						}
					};
				} else {
					const parentData = parentContainer.data;
					const newChildrenIds = (parentContainer.type === "Container" ? parentData.props?.childrenIds || [] : parentData.childrenIds || []).filter((id) => id !== draggedId);
					if (parentContainer.type === "Container") {
						const parentData = parentContainer.data;
						newDocument[parentInfo.containerId] = {
							...parentContainer,
							data: {
								...parentData,
								props: {
									...parentData.props,
									childrenIds: newChildrenIds
								}
							}
						};
					} else {
						const parentData = parentContainer.data;
						newDocument[parentInfo.containerId] = {
							...parentContainer,
							data: {
								...parentData,
								childrenIds: newChildrenIds
							}
						};
					}
				}
				setDocument(newDocument);
			}
		}
		const newChildrenIds = [...childrenIds, blockId];
		const latestDocumentAfterRemove = editorStateStore.getState().document;
		const blockExists = latestDocumentAfterRemove[blockId] && latestDocumentAfterRemove[blockId].type;
		const updates = { [currentBlockId]: {
			type: "EmailLayout",
			data: {
				...latestDocumentAfterRemove[currentBlockId].data,
				childrenIds: newChildrenIds
			}
		} };
		if (!blockExists) updates[blockId] = draggedBlock;
		setDocument(updates);
		setSelectedBlockId(blockId);
		window.__currentDraggedBlockId = null;
		window.__currentDraggedBlock = null;
		window.__isSidebarBlock = false;
	};
	const handleDragOverOnEmptyArea = (e) => {
		if (e.target.closest("[data-column-content=\"true\"]") !== null) return;
		if (getCurrentDraggedBlockId()) {
			e.preventDefault();
			e.stopPropagation();
			e.dataTransfer.effectAllowed = "move";
			e.dataTransfer.dropEffect = "move";
		}
	};
	return /* @__PURE__ */ jsx("div", {
		onClick: () => {
			setSelectedBlockId(null);
		},
		onDragOver: handleDragOverOnEmptyArea,
		onDrop: handleDropOnEmptyArea,
		style: {
			backgroundColor: props.backdropColor ?? "#F5F5F5",
			color: props.textColor ?? "#262626",
			fontFamily: getFontFamily(props.fontFamily),
			fontSize: "16px",
			fontWeight: "400",
			letterSpacing: "0.15008px",
			lineHeight: "1.5",
			margin: "0",
			padding: "32px 0",
			width: "100%",
			minHeight: "100%"
		},
		children: /* @__PURE__ */ jsx("table", {
			align: "center",
			width: "100%",
			style: {
				margin: "0 auto",
				maxWidth: props.width ? `${props.width}px` : "600px",
				backgroundColor: props.canvasColor ?? "#FFFFFF",
				borderRadius: props.borderRadius ?? void 0,
				border: (() => {
					const v = props.borderColor;
					if (!v) return;
					return `1px solid ${v}`;
				})()
			},
			role: "presentation",
			cellSpacing: "0",
			cellPadding: "0",
			border: 0,
			children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", {
				style: { width: "100%" },
				children: /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(EditorChildrenIds, {
					childrenIds,
					containerId: currentBlockId,
					onChange: ({ block, blockId, childrenIds }) => {
						if (blockId === currentBlockId) return;
						if (!block.type) setDocument({ [currentBlockId]: {
							type: "EmailLayout",
							data: {
								...document[currentBlockId].data,
								childrenIds
							}
						} });
						else {
							const latestDocument = editorStateStore.getState().document;
							const blockExists = latestDocument[blockId] && latestDocument[blockId].type;
							const updates = { [currentBlockId]: {
								type: "EmailLayout",
								data: {
									...latestDocument[currentBlockId].data,
									childrenIds
								}
							} };
							if (!blockExists) updates[blockId] = block;
							setDocument(updates);
							setSelectedBlockId(blockId);
						}
					}
				}) })
			}) })
		})
	});
}
//#endregion
//#region src/documents/blocks/Image/ImageEditor.tsx
function ImageEditor(props) {
	const { t } = useTranslation$1();
	const blockId = useCurrentBlockId();
	const imageUploadHandler = useImageUploadHandler();
	const [uploadMode, setUploadMode] = useState("url");
	const [uploading, setUploading] = useState(false);
	const [urlInput, setUrlInput] = useState("");
	const fileInputRef = useRef(null);
	if (!props.props?.url) {
		const handleFileSelect = async (event) => {
			const file = event.target.files?.[0];
			if (!file || !imageUploadHandler) return;
			setUploading(true);
			try {
				const url = await imageUploadHandler(file);
				const currentBlock = editorStateStore.getState().document[blockId];
				if (currentBlock && currentBlock.type === "Image") setDocument({ [blockId]: {
					...currentBlock,
					data: {
						...currentBlock.data,
						props: {
							...currentBlock.data.props,
							url
						}
					}
				} });
				setUploadMode("url");
			} catch {} finally {
				setUploading(false);
				if (fileInputRef.current) fileInputRef.current.value = "";
			}
		};
		const handleUploadClick = (e) => {
			e.stopPropagation();
			e.preventDefault();
			fileInputRef.current?.click();
		};
		const handleUrlSubmit = () => {
			const url = urlInput.trim().length === 0 ? null : urlInput.trim();
			const currentBlock = editorStateStore.getState().document[blockId];
			if (currentBlock && currentBlock.type === "Image") setDocument({ [blockId]: {
				...currentBlock,
				data: {
					...currentBlock.data,
					props: {
						...currentBlock.data.props,
						url
					}
				}
			} });
			setUrlInput("");
		};
		const handleBoxClick = (e) => {
			if (!e.target.closest("button, input, [role=\"button\"], [role=\"textbox\"]")) {} else e.stopPropagation();
		};
		const handleBoxMouseDown = (e) => {
			if (e.target.closest("button, input, [role=\"button\"], [role=\"textbox\"]")) e.stopPropagation();
		};
		return /* @__PURE__ */ jsxs(Box, {
			onClick: handleBoxClick,
			onMouseDown: handleBoxMouseDown,
			sx: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: 150,
				border: "2px dashed #cccccc73",
				borderRadius: 1,
				p: 2,
				gap: 2
			},
			children: [/* @__PURE__ */ jsx(Typography, {
				variant: "body2",
				sx: {
					textAlign: "center",
					px: 2
				},
				children: t("image.placeholder")
			}), /* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				sx: {
					width: "100%",
					maxWidth: 400
				},
				children: [/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsxs(ToggleButton, {
						value: "url",
						selected: uploadMode === "url",
						onChange: () => setUploadMode("url"),
						onMouseDown: (e) => e.stopPropagation(),
						size: "small",
						fullWidth: true,
						children: [/* @__PURE__ */ jsx(LinkOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("image.url")]
					}), /* @__PURE__ */ jsxs(ToggleButton, {
						value: "upload",
						selected: uploadMode === "upload",
						onChange: () => setUploadMode("upload"),
						onMouseDown: (e) => e.stopPropagation(),
						size: "small",
						fullWidth: true,
						disabled: !imageUploadHandler,
						children: [/* @__PURE__ */ jsx(CloudUploadOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("image.upload")]
					})]
				}), uploadMode === "url" ? /* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsx(TextField, {
						size: "small",
						placeholder: t("image.sourceUrl"),
						value: urlInput,
						onChange: (e) => setUrlInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") handleUrlSubmit();
						},
						onClick: (e) => e.stopPropagation(),
						onMouseDown: (e) => e.stopPropagation(),
						sx: { flex: 1 }
					}), /* @__PURE__ */ jsx(Button, {
						variant: "contained",
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							e.preventDefault();
							handleUrlSubmit();
						},
						onMouseDown: (e) => e.stopPropagation(),
						sx: {
							minWidth: "auto",
							px: 2
						},
						children: /* @__PURE__ */ jsx(Check, { fontSize: "small" })
					})]
				}) : /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: "image/*",
							style: { display: "none" },
							onChange: handleFileSelect
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							startIcon: uploading ? /* @__PURE__ */ jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsx(CloudUploadOutlined, {}),
							onClick: handleUploadClick,
							onMouseDown: (e) => e.stopPropagation(),
							disabled: uploading || !imageUploadHandler,
							fullWidth: true,
							children: uploading ? t("image.uploading") : t("image.selectImage")
						}),
						!imageUploadHandler && /* @__PURE__ */ jsx(Typography, {
							variant: "caption",
							color: "text.secondary",
							sx: { textAlign: "center" },
							children: t("image.uploadHandlerNotConfigured")
						})
					]
				})]
			})]
		});
	}
	return /* @__PURE__ */ jsx(Box, {
		onClick: (e) => {},
		sx: {
			display: "inline-block",
			width: "100%"
		},
		children: /* @__PURE__ */ jsx(Image, { ...props })
	});
}
//#endregion
//#region src/documents/blocks/Video/VideoEditor.tsx
function VideoEditor(props) {
	const { t } = useTranslation$1();
	const blockId = useCurrentBlockId();
	const videoUploadHandler = useVideoUploadHandler();
	const [uploadMode, setUploadMode] = useState("url");
	const [uploading, setUploading] = useState(false);
	const [urlInput, setUrlInput] = useState("");
	const fileInputRef = useRef(null);
	if (!props.props?.url) {
		const handleFileSelect = async (event) => {
			const file = event.target.files?.[0];
			if (!file || !videoUploadHandler) return;
			setUploading(true);
			try {
				const url = await videoUploadHandler(file);
				const currentBlock = editorStateStore.getState().document[blockId];
				if (currentBlock && currentBlock.type === "Video") setDocument({ [blockId]: {
					...currentBlock,
					data: {
						...currentBlock.data,
						props: {
							...currentBlock.data.props,
							url
						}
					}
				} });
				setUploadMode("url");
			} catch {} finally {
				setUploading(false);
				if (fileInputRef.current) fileInputRef.current.value = "";
			}
		};
		const handleUploadClick = (e) => {
			e.stopPropagation();
			e.preventDefault();
			fileInputRef.current?.click();
		};
		const handleUrlSubmit = () => {
			const url = urlInput.trim().length === 0 ? null : urlInput.trim();
			const currentBlock = editorStateStore.getState().document[blockId];
			if (currentBlock && currentBlock.type === "Video") setDocument({ [blockId]: {
				...currentBlock,
				data: {
					...currentBlock.data,
					props: {
						...currentBlock.data.props,
						url
					}
				}
			} });
			setUrlInput("");
		};
		const handleBoxClick = (e) => {
			if (!e.target.closest("button, input, [role=\"button\"], [role=\"textbox\"]")) {} else e.stopPropagation();
		};
		const handleBoxMouseDown = (e) => {
			if (e.target.closest("button, input, [role=\"button\"], [role=\"textbox\"]")) e.stopPropagation();
		};
		return /* @__PURE__ */ jsxs(Box, {
			onClick: handleBoxClick,
			onMouseDown: handleBoxMouseDown,
			sx: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				border: "2px dashed #cccccc73",
				borderRadius: 1,
				p: 2,
				gap: 2
			},
			children: [/* @__PURE__ */ jsx(Typography, {
				variant: "body2",
				sx: {
					textAlign: "center",
					px: 2
				},
				children: t("video.placeholder")
			}), /* @__PURE__ */ jsxs(Stack, {
				spacing: 1,
				sx: {
					width: "100%",
					maxWidth: 400
				},
				children: [/* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsxs(ToggleButton, {
						value: "url",
						selected: uploadMode === "url",
						onChange: () => setUploadMode("url"),
						onMouseDown: (e) => e.stopPropagation(),
						size: "small",
						fullWidth: true,
						children: [/* @__PURE__ */ jsx(LinkOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("video.url")]
					}), /* @__PURE__ */ jsxs(ToggleButton, {
						value: "upload",
						selected: uploadMode === "upload",
						onChange: () => setUploadMode("upload"),
						onMouseDown: (e) => e.stopPropagation(),
						size: "small",
						fullWidth: true,
						disabled: !videoUploadHandler,
						children: [/* @__PURE__ */ jsx(CloudUploadOutlined, {
							fontSize: "small",
							sx: { mr: .5 }
						}), t("video.upload")]
					})]
				}), uploadMode === "url" ? /* @__PURE__ */ jsxs(Stack, {
					direction: "row",
					spacing: 1,
					children: [/* @__PURE__ */ jsx(TextField, {
						size: "small",
						placeholder: t("video.sourceUrl"),
						value: urlInput,
						onChange: (e) => setUrlInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") handleUrlSubmit();
						},
						onClick: (e) => e.stopPropagation(),
						onMouseDown: (e) => e.stopPropagation(),
						sx: { flex: 1 }
					}), /* @__PURE__ */ jsx(Button, {
						variant: "contained",
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							e.preventDefault();
							handleUrlSubmit();
						},
						onMouseDown: (e) => e.stopPropagation(),
						sx: {
							minWidth: "auto",
							px: 2
						},
						children: /* @__PURE__ */ jsx(Check, { fontSize: "small" })
					})]
				}) : /* @__PURE__ */ jsxs(Stack, {
					spacing: 1,
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: fileInputRef,
							type: "file",
							accept: "video/*",
							style: { display: "none" },
							onChange: handleFileSelect
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outlined",
							startIcon: uploading ? /* @__PURE__ */ jsx(CircularProgress, { size: 16 }) : /* @__PURE__ */ jsx(CloudUploadOutlined, {}),
							onClick: handleUploadClick,
							onMouseDown: (e) => e.stopPropagation(),
							disabled: uploading || !videoUploadHandler,
							fullWidth: true,
							children: uploading ? t("video.uploading") : t("video.selectVideo")
						}),
						!videoUploadHandler && /* @__PURE__ */ jsx(Typography, {
							variant: "caption",
							color: "text.secondary",
							sx: { textAlign: "center" },
							children: t("video.uploadHandlerNotConfigured")
						})
					]
				})]
			})]
		});
	}
	return /* @__PURE__ */ jsx(Box, {
		onClick: (e) => {},
		sx: {
			display: "flex",
			justifyContent: "center",
			alignItems: props.props.contentAlignment === "top" ? "flex-start" : props.props.contentAlignment === "bottom" ? "flex-end" : "center",
			width: "100%",
			backgroundColor: props.style?.backgroundColor || void 0,
			textAlign: props.style?.textAlign || void 0
		},
		children: /* @__PURE__ */ jsx(Video, { ...props })
	});
}
//#endregion
//#region src/documents/blocks/Socials/SocialsEditor.tsx
function SocialsEditor(props) {
	const { t } = useTranslation$1();
	const socials = props.props?.socials || [];
	const platforms = props.props?.platforms || [];
	if ((socials.length > 0 ? socials.map((s) => s.platform) : platforms).length === 0) return /* @__PURE__ */ jsx(Box, {
		sx: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			minHeight: 100,
			border: "2px dashed #cccccc73",
			borderRadius: 1
		},
		children: /* @__PURE__ */ jsx(Typography, {
			variant: "body2",
			sx: {
				textAlign: "center",
				px: 2
			},
			children: t("socials.placeholder")
		})
	});
	return /* @__PURE__ */ jsx(Socials, { ...props });
}
//#endregion
//#region src/documents/blocks/Text/TextEditor.tsx
function getCharacterOffset(container, targetNode, targetOffset) {
	const doc = window.document;
	try {
		const range = doc.createRange();
		range.setStart(container, 0);
		range.setEnd(targetNode, targetOffset);
		return range.toString().length;
	} catch {
		let offset = 0;
		const walk = (node) => {
			if (node === targetNode) {
				offset += targetOffset;
				return true;
			}
			if (node.nodeType === Node.TEXT_NODE) {
				offset += (node.textContent ?? "").length;
				return false;
			}
			for (let i = 0; i < node.childNodes.length; i++) if (walk(node.childNodes[i])) return true;
			return false;
		};
		walk(container);
		return offset;
	}
}
/** 根据 oldText -> newText 的单一连续变更，调整所有 run/link 的 start/end 偏移，避免插入/删除后样式与链接错位 */
function adjustOffsetsForTextEdit(oldText, newText, items) {
	const oldLen = oldText.length;
	const newLen = newText.length;
	if (oldLen === 0 && newLen === 0) return items;
	let i = 0;
	while (i < oldLen && i < newLen && oldText[i] === newText[i]) i++;
	let oldEnd = oldLen;
	let newEnd = newLen;
	while (oldEnd > i && newEnd > i && oldText[oldEnd - 1] === newText[newEnd - 1]) {
		oldEnd--;
		newEnd--;
	}
	const delta = newEnd - oldEnd;
	const result = [];
	for (const item of items) {
		let start = item.start;
		let end = item.end;
		if (end <= i) {} else if (start >= oldEnd) {
			start += delta;
			end += delta;
		} else {
			start = Math.min(start, i);
			end = end + delta;
		}
		start = Math.max(0, Math.min(start, newLen));
		end = Math.max(0, Math.min(end, newLen));
		if (end <= start) continue;
		result.push({
			...item,
			start,
			end
		});
	}
	return result;
}
function TextEditor(props) {
	const blockId = useCurrentBlockId();
	const selectedBlockId = useSelectedBlockId();
	const textSelection = useTextSelection();
	const lastInlineStyleApplyAt = useLastInlineStyleApplyAt();
	const textRef = useRef(null);
	const textContainerRef = useRef(null);
	const isEditingRef = useRef(false);
	const isSelected = selectedBlockId === blockId;
	const updateDocument = useCallback((newText) => {
		const currentBlock = editorStateStore.getState().document[blockId];
		if (currentBlock && currentBlock.type !== "Text") return;
		const oldText = (currentBlock?.data?.props)?.text ?? "";
		const props = currentBlock.data.props;
		const inlineRuns = props.inlineRuns ?? [];
		const inlineLinks = props.inlineLinks ?? [];
		const nextRuns = adjustOffsetsForTextEdit(oldText, newText, inlineRuns);
		const nextLinks = adjustOffsetsForTextEdit(oldText, newText, inlineLinks);
		setDocument({ [blockId]: {
			...currentBlock,
			data: {
				...currentBlock.data,
				props: {
					...props,
					text: newText,
					inlineRuns: nextRuns.length ? nextRuns : void 0,
					inlineLinks: nextLinks.length ? nextLinks : void 0,
					markdown: false
				}
			}
		} });
	}, [blockId]);
	useEffect(() => {
		if (isSelected && textRef.current) {
			const findTextContainer = (element) => {
				const divContainer = element.querySelector("div");
				if (divContainer) {
					const directDiv = Array.from(element.children).find((child) => child.tagName === "DIV");
					if (directDiv) return directDiv;
					return divContainer;
				}
				const children = Array.from(element.children);
				for (const child of children) if (child.textContent && child.textContent.trim()) return child;
				return element;
			};
			if (textContainerRef.current && !isEditingRef.current) {
				textContainerRef.current.contentEditable = "false";
				textContainerRef.current.style.cursor = "";
				textContainerRef.current = null;
			}
			const textContainer = findTextContainer(textRef.current);
			if (textContainer && textContainer !== textContainerRef.current) {
				if (textContainerRef.current) {
					textContainerRef.current.contentEditable = "false";
					textContainerRef.current.style.cursor = "";
				}
				textContainerRef.current = textContainer;
				textContainer.contentEditable = "true";
				textContainer.style.cursor = "text";
				setTimeout(() => {
					if (textContainer) {
						textContainer.focus();
						const range = window.document.createRange();
						const selection = window.getSelection();
						if (selection) try {
							range.setStart(textContainer, textContainer.childNodes.length);
							range.collapse(true);
							selection.removeAllRanges();
							selection.addRange(range);
						} catch {
							range.selectNodeContents(textContainer);
							range.collapse(false);
							selection.removeAllRanges();
							selection.addRange(range);
						}
					}
				}, 0);
				const handleBlur = () => {
					isEditingRef.current = false;
					let newText = "";
					if (textContainer) newText = (textContainer.innerText ?? textContainer.textContent ?? "").replace(/\r\n?/g, "\n").replace(/\n{3,}/g, "\n\n");
					updateDocument(newText);
				};
				const handleInput = () => {
					isEditingRef.current = true;
				};
				const handleKeyDown = (e) => {
					if (e.key === "Escape") {
						textContainer.blur();
						e.preventDefault();
						e.stopPropagation();
						return;
					}
					if (e.key === "Enter") {
						const sel = window.getSelection();
						if (sel && sel.rangeCount > 0) try {
							const range = sel.getRangeAt(0).cloneRange();
							range.setStart(textContainer, 0);
							range.setEnd(sel.focusNode, sel.focusOffset);
							const fragment = range.cloneContents();
							const wrap = document.createElement("div");
							wrap.appendChild(fragment);
							const lines = (wrap.innerText ?? wrap.textContent ?? "").replace(/\r\n?/g, "\n").split("\n");
							const currentLine = lines[lines.length - 1] ?? "";
							const previousLine = lines.length >= 2 ? lines[lines.length - 2] : "";
							const textBasedBlock = currentLine.trim() === "" && previousLine.trim() === "";
							let domBasedBlock = false;
							let node = sel.focusNode;
							while (node && node.parentNode !== textContainer) node = node.parentNode;
							if (node && node.nodeType === Node.ELEMENT_NODE) {
								const curBlock = node;
								const prevBlock = curBlock.previousElementSibling;
								if (prevBlock && (curBlock.innerText ?? curBlock.textContent ?? "").trim() === "" && (prevBlock.innerText ?? prevBlock.textContent ?? "").trim() === "") domBasedBlock = true;
							}
							if (textBasedBlock || domBasedBlock) {
								e.preventDefault();
								e.stopPropagation();
								return;
							}
						} catch {}
					}
					e.stopPropagation();
				};
				const handleClick = (e) => {
					e.stopPropagation();
				};
				const handleSelectionChange = () => {
					const sel = window.getSelection();
					if (!sel || sel.rangeCount === 0) return;
					if (!textContainer.contains(sel.anchorNode) || !textContainer.contains(sel.focusNode)) return;
					if (shouldIgnoreCollapsedSelectionForClear()) return;
					if (sel.getRangeAt(0).collapsed) {
						if (shouldIgnoreCollapsedSelectionForClear()) return;
						const active = document.activeElement;
						if (!(!!active && textContainer.contains(active))) return;
						setTextSelection(null);
						return;
					}
					const start = getCharacterOffset(textContainer, sel.anchorNode, sel.anchorOffset);
					const end = getCharacterOffset(textContainer, sel.focusNode, sel.focusOffset);
					const textLen = (textContainer.textContent ?? "").length;
					const s = Math.max(0, Math.min(start, end));
					const e = Math.min(textLen, Math.max(start, end));
					if (s >= e) {
						setTextSelection(null);
						return;
					}
					setLastTextBlockContent({
						blockId,
						text: (textContainer.textContent ?? "").replace(/\r\n?/g, "\n")
					});
					setTextSelection({
						blockId,
						start: s,
						end: e
					});
				};
				textContainer.addEventListener("blur", handleBlur);
				textContainer.addEventListener("input", handleInput);
				textContainer.addEventListener("keydown", handleKeyDown);
				textContainer.addEventListener("click", handleClick);
				document.addEventListener("selectionchange", handleSelectionChange);
				return () => {
					document.removeEventListener("selectionchange", handleSelectionChange);
					if (textContainer) {
						textContainer.contentEditable = "false";
						textContainer.style.cursor = "";
						textContainer.removeEventListener("blur", handleBlur);
						textContainer.removeEventListener("input", handleInput);
						textContainer.removeEventListener("keydown", handleKeyDown);
						textContainer.removeEventListener("click", handleClick);
					}
					textContainerRef.current = null;
					isEditingRef.current = false;
					setTextSelection(null);
				};
			}
		} else if (!isSelected && textContainerRef.current) {
			textContainerRef.current.contentEditable = "false";
			textContainerRef.current.style.cursor = "";
			textContainerRef.current = null;
			isEditingRef.current = false;
		}
	}, [
		isSelected,
		blockId,
		updateDocument
	]);
	useLayoutEffect(() => {
		if (!isSelected) return;
		if (!shouldIgnoreCollapsedSelectionForClear()) return;
		if (!textSelection || textSelection.blockId !== blockId) return;
		if (textSelection.start >= textSelection.end) return;
		if (!textContainerRef.current) return;
		const container = textContainerRef.current;
		const getTextNodeAtCharOffset = (root, targetOffset) => {
			let current = 0;
			const walker = window.document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
			let textNode = walker.nextNode();
			while (textNode) {
				const len = (textNode.textContent ?? "").length;
				if (targetOffset <= current + len) return {
					node: textNode,
					nodeOffset: targetOffset - current
				};
				current += len;
				textNode = walker.nextNode();
			}
			return null;
		};
		const setSelectionByOffsets = (startOffset, endOffset) => {
			const selection = window.getSelection();
			if (!selection) return;
			const start = getTextNodeAtCharOffset(container, startOffset);
			const end = getTextNodeAtCharOffset(container, endOffset);
			if (!start || !end) return;
			const range = window.document.createRange();
			range.setStart(start.node, start.nodeOffset);
			range.setEnd(end.node, end.nodeOffset);
			selection.removeAllRanges();
			selection.addRange(range);
		};
		setSelectionByOffsets(textSelection.start, textSelection.end);
	}, [
		isSelected,
		lastInlineStyleApplyAt,
		textSelection,
		blockId
	]);
	return /* @__PURE__ */ jsx(Box, {
		ref: textRef,
		children: /* @__PURE__ */ jsx(Text, { ...props })
	});
}
//#endregion
//#region src/documents/blocks/Heading/HeadingEditor.tsx
function HeadingEditor(props) {
	const blockId = useCurrentBlockId();
	const selectedBlockId = useSelectedBlockId();
	const headingRef = useRef(null);
	const headingElementRef = useRef(null);
	const isEditingRef = useRef(false);
	const isSelected = selectedBlockId === blockId;
	const updateDocument = useCallback((newText) => {
		const currentBlock = editorStateStore.getState().document[blockId];
		if (currentBlock && currentBlock.type === "Heading") setDocument({ [blockId]: {
			...currentBlock,
			data: {
				...currentBlock.data,
				props: {
					...currentBlock.data.props,
					text: newText
				}
			}
		} });
	}, [blockId]);
	useEffect(() => {
		if (isSelected && headingRef.current && !isEditingRef.current) {
			const headingElement = headingRef.current.querySelector("h1, h2, h3");
			if (headingElement && headingElement !== headingElementRef.current) {
				headingElementRef.current = headingElement;
				headingElement.contentEditable = "true";
				headingElement.style.cursor = "text";
				setTimeout(() => {
					if (headingElement) {
						headingElement.focus();
						const range = window.document.createRange();
						const selection = window.getSelection();
						if (selection && headingElement.childNodes.length > 0) {
							const lastNode = headingElement.childNodes[headingElement.childNodes.length - 1];
							range.setStart(lastNode, lastNode.textContent?.length || 0);
							range.collapse(true);
							selection.removeAllRanges();
							selection.addRange(range);
						} else {
							range.selectNodeContents(headingElement);
							range.collapse(false);
							selection?.removeAllRanges();
							selection?.addRange(range);
						}
					}
				}, 0);
				const handleBlur = () => {
					isEditingRef.current = false;
					updateDocument(headingElement.textContent || "");
				};
				const handleInput = () => {
					isEditingRef.current = true;
				};
				const handleKeyDown = (e) => {
					if (e.key === "Enter" && !e.shiftKey) {
						e.preventDefault();
						headingElement.blur();
					}
					if (e.key === "Escape") headingElement.blur();
					e.stopPropagation();
				};
				const handleClick = (e) => {
					e.stopPropagation();
				};
				headingElement.addEventListener("blur", handleBlur);
				headingElement.addEventListener("input", handleInput);
				headingElement.addEventListener("keydown", handleKeyDown);
				headingElement.addEventListener("click", handleClick);
				return () => {
					if (headingElement) {
						headingElement.contentEditable = "false";
						headingElement.style.cursor = "";
						headingElement.removeEventListener("blur", handleBlur);
						headingElement.removeEventListener("input", handleInput);
						headingElement.removeEventListener("keydown", handleKeyDown);
						headingElement.removeEventListener("click", handleClick);
					}
					headingElementRef.current = null;
					isEditingRef.current = false;
				};
			}
		} else if (!isSelected && headingElementRef.current) {
			headingElementRef.current.contentEditable = "false";
			headingElementRef.current.style.cursor = "";
			headingElementRef.current = null;
			isEditingRef.current = false;
		}
	}, [
		isSelected,
		blockId,
		updateDocument
	]);
	return /* @__PURE__ */ jsx(Box, {
		ref: headingRef,
		children: /* @__PURE__ */ jsx(Heading, { ...props })
	});
}
//#endregion
//#region src/documents/blocks/Button/ButtonEditor.tsx
function ButtonEditor(props) {
	const blockId = useCurrentBlockId();
	const selectedBlockId = useSelectedBlockId();
	const buttonRef = useRef(null);
	const buttonTextRef = useRef(null);
	const isEditingRef = useRef(false);
	const isSelected = selectedBlockId === blockId;
	const updateDocument = useCallback((newText) => {
		const currentBlock = editorStateStore.getState().document[blockId];
		if (currentBlock && currentBlock.type === "Button") setDocument({ [blockId]: {
			...currentBlock,
			data: {
				...currentBlock.data,
				props: {
					...currentBlock.data.props,
					text: newText
				}
			}
		} });
	}, [blockId]);
	useEffect(() => {
		if (isSelected && buttonRef.current && !isEditingRef.current) {
			const findButtonElement = (element) => {
				const buttonTag = element.querySelector("button");
				if (buttonTag) return buttonTag;
				const aTag = element.querySelector("a");
				if (aTag) return aTag;
				return null;
			};
			const buttonElement = findButtonElement(buttonRef.current);
			if (buttonElement) {
				const textContainer = buttonElement;
				if (textContainer && textContainer !== buttonTextRef.current) {
					if (buttonTextRef.current) {
						buttonTextRef.current.contentEditable = "false";
						buttonTextRef.current.style.cursor = "";
					}
					buttonTextRef.current = textContainer;
					textContainer.contentEditable = "true";
					textContainer.style.cursor = "text";
					if (buttonRef.current) {
						buttonRef.current.contentEditable = "false";
						buttonRef.current.style.cursor = "";
					}
					if (buttonElement.tagName === "A") {
						const originalHref = buttonElement.getAttribute("href");
						buttonElement.setAttribute("data-original-href", originalHref || "");
						buttonElement.setAttribute("href", "javascript:void(0)");
					}
					const handleButtonClick = (e) => {
						e.preventDefault();
						e.stopPropagation();
						if (textContainer) textContainer.focus();
					};
					buttonElement.addEventListener("click", handleButtonClick, true);
					setTimeout(() => {
						if (textContainer) {
							textContainer.focus();
							const range = window.document.createRange();
							const selection = window.getSelection();
							if (selection && textContainer.childNodes.length > 0) {
								const lastNode = textContainer.childNodes[textContainer.childNodes.length - 1];
								range.setStart(lastNode, lastNode.textContent?.length || 0);
								range.collapse(true);
								selection.removeAllRanges();
								selection.addRange(range);
							} else {
								range.selectNodeContents(textContainer);
								range.collapse(false);
								selection?.removeAllRanges();
								selection?.addRange(range);
							}
						}
					}, 0);
					const handleBlur = () => {
						isEditingRef.current = false;
						updateDocument((textContainer?.textContent || "").trim() || props.props?.text || "Button");
					};
					const handleInput = () => {
						isEditingRef.current = true;
					};
					const handleKeyDown = (e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							textContainer?.blur();
						}
						if (e.key === "Escape") textContainer?.blur();
						e.stopPropagation();
					};
					const handleClick = (e) => {
						e.stopPropagation();
						if (textContainer) textContainer.focus();
					};
					textContainer.addEventListener("blur", handleBlur);
					textContainer.addEventListener("input", handleInput);
					textContainer.addEventListener("keydown", handleKeyDown);
					textContainer.addEventListener("click", handleClick);
					return () => {
						if (textContainer) {
							textContainer.contentEditable = "false";
							textContainer.style.cursor = "";
							textContainer.removeEventListener("blur", handleBlur);
							textContainer.removeEventListener("input", handleInput);
							textContainer.removeEventListener("keydown", handleKeyDown);
							textContainer.removeEventListener("click", handleClick);
						}
						buttonElement.removeEventListener("click", handleButtonClick, true);
						if (buttonElement.tagName === "A") {
							const originalHref = buttonElement.getAttribute("data-original-href");
							if (originalHref) buttonElement.setAttribute("href", originalHref);
							else buttonElement.removeAttribute("href");
							buttonElement.removeAttribute("data-original-href");
						}
						if (buttonRef.current) {
							buttonRef.current.contentEditable = "false";
							buttonRef.current.style.cursor = "";
						}
						buttonTextRef.current = null;
						isEditingRef.current = false;
					};
				}
			}
		} else if (!isSelected && buttonTextRef.current) {
			buttonTextRef.current.contentEditable = "false";
			buttonTextRef.current.style.cursor = "";
			buttonTextRef.current = null;
			isEditingRef.current = false;
			if (buttonRef.current) {
				buttonRef.current.contentEditable = "false";
				buttonRef.current.style.cursor = "";
			}
		}
	}, [
		isSelected,
		blockId,
		updateDocument
	]);
	return /* @__PURE__ */ jsx(Box, {
		ref: buttonRef,
		children: /* @__PURE__ */ jsx(Button$1, { ...props })
	});
}
//#endregion
//#region src/documents/blocks/helpers/block-wrappers/TuneMenu.tsx
function generateId() {
	return `block-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
function duplicateBlockInDocument(doc, blockId) {
	const block = doc[blockId];
	if (!block) return {
		newDocument: doc,
		newBlockId: blockId
	};
	const newId = generateId();
	const clone = JSON.parse(JSON.stringify(block));
	let newDoc = { ...doc };
	if (clone.type === "Container" && clone.data?.props?.childrenIds) {
		const newChildIds = [];
		for (const childId of clone.data.props.childrenIds) {
			const { newDocument: nextDoc, newBlockId: newChildId } = duplicateBlockInDocument(newDoc, childId);
			newDoc = nextDoc;
			newChildIds.push(newChildId);
		}
		clone.data.props.childrenIds = newChildIds;
	} else if (clone.type === "ColumnsContainer" && clone.data?.props?.columns) {
		const newColumns = clone.data.props.columns.map((col) => {
			const ids = col.childrenIds ?? [];
			const newChildIds = [];
			for (const childId of ids) {
				const { newDocument: nextDoc, newBlockId: newChildId } = duplicateBlockInDocument(newDoc, childId);
				newDoc = nextDoc;
				newChildIds.push(newChildId);
			}
			return {
				...col,
				childrenIds: newChildIds
			};
		});
		clone.data.props.columns = newColumns;
	}
	newDoc = {
		...newDoc,
		[newId]: clone
	};
	return {
		newDocument: newDoc,
		newBlockId: newId
	};
}
function findParentContainerId(document, blockId) {
	for (const [containerId, container] of Object.entries(document)) {
		if (container.type === "EmailLayout" && container.data.childrenIds?.includes(blockId)) return {
			containerId,
			columnIndex: null
		};
		if (container.type === "Container" && container.data.props?.childrenIds?.includes(blockId)) return {
			containerId,
			columnIndex: null
		};
		if (container.type === "ColumnsContainer") {
			const columns = container.data.props?.columns;
			if (columns) {
				for (let i = 0; i < columns.length; i++) if (columns[i].childrenIds?.includes(blockId)) return {
					containerId,
					columnIndex: i
				};
			}
		}
	}
	return {
		containerId: null,
		columnIndex: null
	};
}
var sx = {
	position: "absolute",
	bottom: -12,
	left: -50,
	borderRadius: 64,
	paddingX: .5,
	paddingY: .5,
	zIndex: "fab"
};
function TuneMenu({ blockId }) {
	const document = useDocument();
	const parentInfo = findParentContainerId(document, blockId);
	const canMove = React.useMemo(() => {
		if (!parentInfo.containerId) return {
			canMoveUp: false,
			canMoveDown: false
		};
		const container = document[parentInfo.containerId];
		if (!container) return {
			canMoveUp: false,
			canMoveDown: false
		};
		let childrenIds = null;
		if (container.type === "EmailLayout") childrenIds = container.data.childrenIds;
		else if (container.type === "Container") childrenIds = container.data.props?.childrenIds;
		else if (container.type === "ColumnsContainer" && parentInfo.columnIndex !== null) {
			const columns = container.data.props?.columns;
			if (columns && columns[parentInfo.columnIndex]) childrenIds = columns[parentInfo.columnIndex].childrenIds;
		}
		if (!childrenIds || childrenIds.length <= 1) return {
			canMoveUp: false,
			canMoveDown: false
		};
		const index = childrenIds.indexOf(blockId);
		if (index < 0) return {
			canMoveUp: false,
			canMoveDown: false
		};
		return {
			canMoveUp: index > 0,
			canMoveDown: index < childrenIds.length - 1
		};
	}, [
		document,
		blockId,
		parentInfo
	]);
	const handleDeleteClick = () => {
		const filterChildrenIds = (childrenIds) => {
			if (!childrenIds) return childrenIds;
			return childrenIds.filter((f) => f !== blockId);
		};
		const nDocument = { ...document };
		let columnsContainerIdToCheck = null;
		let columnIndexToCheck = null;
		for (const [id, b] of Object.entries(nDocument)) {
			const block = b;
			if (id === blockId) continue;
			switch (block.type) {
				case "EmailLayout":
					nDocument[id] = {
						...block,
						data: {
							...block.data,
							childrenIds: filterChildrenIds(block.data.childrenIds)
						}
					};
					break;
				case "Container":
					nDocument[id] = {
						...block,
						data: {
							...block.data,
							props: {
								...block.data.props,
								childrenIds: filterChildrenIds(block.data.props?.childrenIds)
							}
						}
					};
					break;
				case "ColumnsContainer":
					const columns = block.data.props?.columns || [];
					let foundInColumn = false;
					let foundColumnIndex = -1;
					for (let i = 0; i < columns.length; i++) if (columns[i].childrenIds?.includes(blockId)) {
						foundInColumn = true;
						foundColumnIndex = i;
						break;
					}
					if (foundInColumn) {
						columnsContainerIdToCheck = id;
						columnIndexToCheck = foundColumnIndex;
					}
					nDocument[id] = {
						type: "ColumnsContainer",
						data: {
							style: block.data.style,
							props: {
								...block.data.props,
								columns: columns.map((c) => ({ childrenIds: filterChildrenIds(c.childrenIds) }))
							}
						}
					};
					break;
				default: nDocument[id] = block;
			}
		}
		delete nDocument[blockId];
		if (columnsContainerIdToCheck && columnIndexToCheck !== null) {
			const columnsContainer = nDocument[columnsContainerIdToCheck];
			if (columnsContainer && columnsContainer.type === "ColumnsContainer") {
				const updatedColumns = columnsContainer.data.props?.columns || [];
				const deletedColumn = updatedColumns[columnIndexToCheck];
				if (deletedColumn && (!deletedColumn.childrenIds || deletedColumn.childrenIds.length === 0)) if (updatedColumns.length <= 1) {
					const columnsContainerParentInfo = findParentContainerId(nDocument, columnsContainerIdToCheck);
					if (columnsContainerParentInfo.containerId) {
						const parentContainer = nDocument[columnsContainerParentInfo.containerId];
						if (parentContainer) {
							if (parentContainer.type === "EmailLayout") nDocument[columnsContainerParentInfo.containerId] = {
								...parentContainer,
								data: {
									...parentContainer.data,
									childrenIds: (parentContainer.data.childrenIds || []).filter((id) => id !== columnsContainerIdToCheck)
								}
							};
							else if (parentContainer.type === "Container") nDocument[columnsContainerParentInfo.containerId] = {
								...parentContainer,
								data: {
									...parentContainer.data,
									props: {
										...parentContainer.data.props,
										childrenIds: (parentContainer.data.props?.childrenIds || []).filter((id) => id !== columnsContainerIdToCheck)
									}
								}
							};
						}
					}
					delete nDocument[columnsContainerIdToCheck];
					setSelectedBlockId(null);
				} else {
					const newColumns = updatedColumns.filter((_, index) => index !== columnIndexToCheck);
					const newColumnsCount = newColumns.length;
					nDocument[columnsContainerIdToCheck] = {
						type: "ColumnsContainer",
						data: {
							style: columnsContainer.data.style,
							props: {
								...columnsContainer.data.props,
								columns: newColumns,
								columnsCount: newColumnsCount
							}
						}
					};
				}
			}
		}
		resetDocument(nDocument);
	};
	const handleDuplicateClick = () => {
		if (blockId === "root" || !parentInfo.containerId) return;
		const container = document[parentInfo.containerId];
		if (!container) return;
		let childrenIds = null;
		if (container.type === "EmailLayout") childrenIds = container.data.childrenIds ?? null;
		else if (container.type === "Container") childrenIds = container.data.props?.childrenIds ?? null;
		else if (container.type === "ColumnsContainer" && parentInfo.columnIndex !== null) childrenIds = (container.data.props?.columns?.[parentInfo.columnIndex])?.childrenIds ?? null;
		if (!childrenIds) return;
		const index = childrenIds.indexOf(blockId);
		if (index < 0) return;
		const { newDocument: nDoc, newBlockId } = duplicateBlockInDocument(document, blockId);
		const newChildrenIds = [...childrenIds];
		newChildrenIds.splice(index + 1, 0, newBlockId);
		const nDocument = { ...nDoc };
		const parentId = parentInfo.containerId;
		const parentBlock = nDocument[parentId];
		if (!parentBlock) return;
		if (parentBlock.type === "EmailLayout") nDocument[parentId] = {
			...parentBlock,
			data: {
				...parentBlock.data,
				childrenIds: newChildrenIds
			}
		};
		else if (parentBlock.type === "Container") nDocument[parentId] = {
			...parentBlock,
			data: {
				...parentBlock.data,
				props: {
					...parentBlock.data.props,
					childrenIds: newChildrenIds
				}
			}
		};
		else if (parentBlock.type === "ColumnsContainer" && parentInfo.columnIndex !== null) {
			const columns = (parentBlock.data.props?.columns ?? []).map((c, i) => i === parentInfo.columnIndex ? {
				...c,
				childrenIds: newChildrenIds
			} : c);
			nDocument[parentId] = {
				...parentBlock,
				data: {
					...parentBlock.data,
					props: {
						...parentBlock.data.props,
						columns
					}
				}
			};
		}
		resetDocument(nDocument);
		setSelectedBlockId(newBlockId);
	};
	const handleMoveClick = (direction) => {
		const moveChildrenIds = (ids) => {
			if (!ids) return ids;
			const index = ids.indexOf(blockId);
			if (index < 0) return ids;
			const childrenIds = [...ids];
			if (direction === "up" && index > 0) [childrenIds[index], childrenIds[index - 1]] = [childrenIds[index - 1], childrenIds[index]];
			else if (direction === "down" && index < childrenIds.length - 1) [childrenIds[index], childrenIds[index + 1]] = [childrenIds[index + 1], childrenIds[index]];
			return childrenIds;
		};
		const nDocument = { ...document };
		for (const [id, b] of Object.entries(nDocument)) {
			const block = b;
			if (id === blockId) continue;
			switch (block.type) {
				case "EmailLayout":
					nDocument[id] = {
						...block,
						data: {
							...block.data,
							childrenIds: moveChildrenIds(block.data.childrenIds)
						}
					};
					break;
				case "Container":
					nDocument[id] = {
						...block,
						data: {
							...block.data,
							props: {
								...block.data.props,
								childrenIds: moveChildrenIds(block.data.props?.childrenIds)
							}
						}
					};
					break;
				case "ColumnsContainer":
					nDocument[id] = {
						type: "ColumnsContainer",
						data: {
							style: block.data.style,
							props: {
								...block.data.props,
								columns: block.data.props?.columns?.map((c) => ({ childrenIds: moveChildrenIds(c.childrenIds) }))
							}
						}
					};
					break;
				default: nDocument[id] = block;
			}
		}
		resetDocument(nDocument);
		setSelectedBlockId(blockId);
	};
	return /* @__PURE__ */ jsx(Paper, {
		sx,
		onClick: (ev) => ev.stopPropagation(),
		children: /* @__PURE__ */ jsxs(Stack, { children: [
			canMove.canMoveUp && /* @__PURE__ */ jsx(Tooltip, {
				title: "Move up",
				placement: "left",
				arrow: true,
				children: /* @__PURE__ */ jsx(IconButton, {
					onClick: () => handleMoveClick("up"),
					sx: { color: "text.primary" },
					"aria-label": "Move up",
					children: /* @__PURE__ */ jsx(ArrowUpwardOutlined, { fontSize: "small" })
				})
			}),
			canMove.canMoveDown && /* @__PURE__ */ jsx(Tooltip, {
				title: "Move down",
				placement: "left",
				arrow: true,
				children: /* @__PURE__ */ jsx(IconButton, {
					onClick: () => handleMoveClick("down"),
					sx: { color: "text.primary" },
					"aria-label": "Move down",
					children: /* @__PURE__ */ jsx(ArrowDownwardOutlined, { fontSize: "small" })
				})
			}),
			(canMove.canMoveUp || canMove.canMoveDown) && /* @__PURE__ */ jsx(Divider, { sx: {
				my: 1,
				mx: 1
			} }),
			blockId !== "root" && /* @__PURE__ */ jsx(Tooltip, {
				title: "Duplicate",
				placement: "left",
				arrow: true,
				children: /* @__PURE__ */ jsx(IconButton, {
					onClick: handleDuplicateClick,
					sx: { color: "text.primary" },
					"aria-label": "Duplicate",
					children: /* @__PURE__ */ jsx(ContentCopyOutlined, { sx: { fontSize: "16px" } })
				})
			}),
			/* @__PURE__ */ jsx(Tooltip, {
				title: "Delete",
				placement: "left",
				arrow: true,
				children: /* @__PURE__ */ jsx(IconButton, {
					onClick: handleDeleteClick,
					sx: { color: "text.primary" },
					"aria-label": "Delete",
					children: /* @__PURE__ */ jsx(DeleteOutlined, {
						color: "error",
						fontSize: "small"
					})
				})
			})
		] })
	});
}
//#endregion
//#region src/documents/blocks/helpers/block-wrappers/EditorBlockWrapper.tsx
function EditorBlockWrapper({ children }) {
	const selectedBlockId = useSelectedBlockId();
	const [mouseInside, setMouseInside] = useState(false);
	const [mouseOnChild, setMouseOnChild] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const blockId = useCurrentBlockId();
	const isHandlerClickedRef = useRef(false);
	const blockData = editorStateStore.getState().document[blockId];
	const isDraggable = true;
	const isContainer = blockData?.type === "Container" || blockData?.type === "ColumnsContainer";
	let outline;
	if (isDragging) outline = "2px dashed rgba(0,121,204, 0.8)";
	else if (selectedBlockId === blockId) outline = "2px solid rgba(0,121,204, 1)";
	else if (mouseInside) outline = "2px solid rgba(0,121,204, 0.3)";
	const renderMenu = () => {
		if (selectedBlockId !== blockId || isDragging) return null;
		return /* @__PURE__ */ jsx(TuneMenu, { blockId });
	};
	const handleDragStart = (e) => {
		if (!isHandlerClickedRef.current) {
			e.preventDefault();
			return;
		}
		e.target;
		if (blockData?.type === "ColumnsContainer") {
			if (e.target.closest("[data-column-area]") !== null) {
				e.preventDefault();
				return;
			}
		}
		e.stopPropagation();
		setIsDragging(true);
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/plain", blockId);
		window.__currentDraggedBlockId = blockId;
		if (blockData) window.__currentDraggedBlock = blockData;
	};
	const handleHandlerMouseDown = () => {
		isHandlerClickedRef.current = true;
		if (selectedBlockId === blockId) setSelectedBlockId(null);
	};
	useEffect(() => {
		const handleMouseUp = () => {
			isHandlerClickedRef.current = false;
		};
		if (typeof window !== "undefined" && window.document) {
			window.document.addEventListener("mouseup", handleMouseUp);
			return () => {
				window.document.removeEventListener("mouseup", handleMouseUp);
			};
		}
	}, []);
	const handleDragEnd = () => {
		setIsDragging(false);
		window.__currentDraggedBlockId = null;
		window.__currentDraggedBlock = null;
		isHandlerClickedRef.current = false;
	};
	return /* @__PURE__ */ jsxs(Box, {
		draggable: isDraggable,
		"data-editor-block-wrapper": "true",
		sx: {
			position: "relative",
			maxWidth: "100%",
			width: "100%",
			minWidth: 0,
			outlineOffset: "-1px",
			outline,
			opacity: isDragging ? .5 : 1,
			cursor: "default",
			overflowWrap: "break-word",
			wordBreak: "break-word"
		},
		onDragStart: handleDragStart,
		onDragEnd: handleDragEnd,
		onMouseEnter: (ev) => {
			setMouseInside(true);
			ev.stopPropagation();
		},
		onMouseLeave: (ev) => {
			setMouseInside(false);
			setMouseOnChild(false);
		},
		onMouseMove: (ev) => {
			if (isContainer) {
				const childWrapper = ev.target.closest("[data-editor-block-wrapper]");
				if (childWrapper && childWrapper !== ev.currentTarget) setMouseOnChild(true);
				else setMouseOnChild(false);
			}
		},
		onClick: (ev) => {
			setSelectedBlockId(blockId);
			ev.stopPropagation();
			ev.preventDefault();
		},
		children: [
			mouseInside && (!isContainer || !mouseOnChild) && /* @__PURE__ */ jsx(IconButton, {
				size: "small",
				onMouseDown: (e) => {
					e.stopPropagation();
					handleHandlerMouseDown();
				},
				onClick: (e) => {
					e.stopPropagation();
					e.preventDefault();
				},
				"aria-label": "Drag block",
				sx: {
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					right: "-16px",
					zIndex: 10,
					cursor: "grab",
					color: "text.secondary",
					backgroundColor: "background.paper",
					border: "1px solid",
					borderColor: "divider",
					"&:active": { cursor: "grabbing" },
					"&:hover": {
						backgroundColor: "background.paper",
						borderColor: "primary.main"
					}
				},
				children: /* @__PURE__ */ jsx(DragIndicator, { fontSize: "small" })
			}),
			renderMenu(),
			children
		]
	});
}
//#endregion
//#region src/documents/editor/core.tsx
var EDITOR_DICTIONARY = buildBlockConfigurationDictionary({
	Button: {
		schema: ButtonPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(ButtonEditor, { ...props }) })
	},
	Container: {
		schema: ContainerPropsSchema$1,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(ContainerEditor, { ...props }) })
	},
	ColumnsContainer: {
		schema: ColumnsContainerPropsSchema$1,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(ColumnsContainerEditor, { ...props }) })
	},
	Heading: {
		schema: HeadingPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(HeadingEditor, { ...props }) })
	},
	Html: {
		schema: HtmlPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(Html, { ...props }) })
	},
	Image: {
		schema: ImagePropsSchema,
		Component: (data) => {
			return /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(ImageEditor, { ...data }) });
		}
	},
	Video: {
		schema: VideoPropsSchema,
		Component: (data) => {
			return /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(VideoEditor, { ...data }) });
		}
	},
	Text: {
		schema: TextPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(TextEditor, { ...props }) })
	},
	EmailLayout: {
		schema: EmailLayoutPropsSchema,
		Component: (p) => /* @__PURE__ */ jsx(EmailLayoutEditor, { ...p })
	},
	Spacer: {
		schema: SpacerPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(Spacer, { ...props }) })
	},
	Divider: {
		schema: DividerPropsSchema,
		Component: (props) => /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(Divider$1, { ...props }) })
	},
	Socials: {
		schema: SocialsPropsSchema,
		Component: (data) => {
			return /* @__PURE__ */ jsx(EditorBlockWrapper, { children: /* @__PURE__ */ jsx(SocialsEditor, { ...data }) });
		}
	}
});
var EditorBlock$1 = buildBlockComponent(EDITOR_DICTIONARY);
var EditorBlockSchema = buildBlockConfigurationSchema(EDITOR_DICTIONARY);
var EditorConfigurationSchema = z.record(z.string(), EditorBlockSchema);
//#endregion
//#region src/documents/editor/EditorBlock.tsx
var EditorBlockContext = createContext(null);
var useCurrentBlockId = () => useContext(EditorBlockContext);
/**
*
* @param id - Block id
* @returns EditorBlock component that loads data from the EditorDocumentContext
*/
function EditorBlock({ id }) {
	const block = useDocument()[id];
	if (!block) throw new Error("Could not find block");
	return /* @__PURE__ */ jsx(EditorBlockContext.Provider, {
		value: id,
		children: /* @__PURE__ */ jsx(EditorBlock$1, { ...block })
	});
}
//#endregion
//#region src/App/InspectorDrawer/ToggleInspectorPanelButton.tsx
function ToggleInspectorPanelButton() {
	const inspectorDrawerOpen = useInspectorDrawerOpen();
	const handleClick = () => {
		toggleInspectorDrawerOpen();
	};
	if (inspectorDrawerOpen) return /* @__PURE__ */ jsx(IconButton, {
		onClick: handleClick,
		"aria-label": "Close inspector panel",
		children: /* @__PURE__ */ jsx(LastPageOutlined, { fontSize: "small" })
	});
	return /* @__PURE__ */ jsx(IconButton, {
		onClick: handleClick,
		"aria-label": "Open inspector panel",
		children: /* @__PURE__ */ jsx(AppRegistrationOutlined, { fontSize: "small" })
	});
}
//#endregion
//#region src/App/SamplesDrawer/ToggleSamplesPanelButton.tsx
function useIcon() {
	if (useSamplesDrawerOpen()) return /* @__PURE__ */ jsx(FirstPageOutlined, { fontSize: "small" });
	return /* @__PURE__ */ jsx(MenuOutlined, { fontSize: "small" });
}
function ToggleSamplesPanelButton() {
	const icon = useIcon();
	return /* @__PURE__ */ jsx(IconButton, {
		onClick: toggleSamplesDrawerOpen,
		"aria-label": "Toggle samples panel",
		children: icon
	});
}
//#endregion
//#region src/App/TemplatePanel/DownloadJson/index.tsx
function DownloadJson() {
	const { t } = useTranslation$1();
	const doc = useDocument();
	const href = useMemo(() => {
		return `data:text/plain,${encodeURIComponent(JSON.stringify(doc, null, "  "))}`;
	}, [doc]);
	return /* @__PURE__ */ jsx(Tooltip, {
		title: t("common.downloadJson"),
		arrow: true,
		children: /* @__PURE__ */ jsx(IconButton, {
			href,
			download: "emailTemplate.json",
			"aria-label": t("common.downloadJson"),
			children: /* @__PURE__ */ jsx(FileDownloadOutlined, { fontSize: "small" })
		})
	});
}
//#endregion
//#region src/App/TemplatePanel/helper/highlighters.tsx
var SyntaxHighlighter = null;
var jsonLang = null;
var xmlLang = null;
var githubStyle = null;
var isLoading = false;
async function loadSyntaxHighlighter() {
	if (SyntaxHighlighter || isLoading) return;
	if (typeof window === "undefined") return;
	isLoading = true;
	try {
		SyntaxHighlighter = (await import("react-syntax-highlighter")).Light;
		const jsonLangModule = await import("react-syntax-highlighter/dist/esm/languages/hljs/json");
		jsonLang = jsonLangModule.default || jsonLangModule;
		const xmlLangModule = await import("react-syntax-highlighter/dist/esm/languages/hljs/xml");
		xmlLang = xmlLangModule.default || xmlLangModule;
		const styleModule = await import("react-syntax-highlighter/dist/esm/styles/hljs/github");
		githubStyle = styleModule.default || styleModule;
		if (SyntaxHighlighter?.registerLanguage) {
			if (jsonLang) SyntaxHighlighter.registerLanguage("json", jsonLang);
			if (xmlLang) SyntaxHighlighter.registerLanguage("html", xmlLang);
		}
	} catch {} finally {
		isLoading = false;
	}
}
if (typeof window !== "undefined") loadSyntaxHighlighter();
var removeLeadingIndent = (text) => {
	const lines = text.split("\n");
	if (lines.length === 0) return text;
	const firstNonEmptyLine = lines.find((line) => line.trim().length > 0);
	if (!firstNonEmptyLine) return text;
	const trimmedFirstLine = firstNonEmptyLine.trim();
	if (trimmedFirstLine.startsWith("<!DOCTYPE") || trimmedFirstLine.startsWith("<html")) {
		const leadingSpaces = firstNonEmptyLine.length - firstNonEmptyLine.trimStart().length;
		if (leadingSpaces > 0) return lines.map((line) => {
			if (line.trim().length === 0) return line;
			if (line.length - line.trimStart().length >= leadingSpaces) return line.substring(leadingSpaces);
			return line;
		}).join("\n");
	}
	return text;
};
var fixTagAlignment = (text) => {
	const lines = text.split("\n");
	const stack = [];
	const result = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trim();
		if (!trimmed) {
			result.push(line);
			continue;
		}
		const currentIndent = line.length - line.trimStart().length;
		const isClosingTag = trimmed.startsWith("</");
		const isSelfClosing = trimmed.endsWith("/>");
		const isOpeningTag = trimmed.startsWith("<") && !isClosingTag && !isSelfClosing;
		if (isClosingTag) {
			const tagName = trimmed.match(/<\/(\w+)/)?.[1];
			if (tagName && stack.length > 0) {
				const opening = stack[stack.length - 1];
				if (opening.tag === tagName) {
					const correctIndent = opening.indent;
					result.push(" ".repeat(correctIndent) + trimmed);
					stack.pop();
					continue;
				}
			}
			result.push(line);
		} else if (isOpeningTag) {
			const tagName = trimmed.match(/<(\w+)/)?.[1];
			if (tagName) stack.push({
				tag: tagName,
				indent: currentIndent
			});
			result.push(line);
		} else result.push(line);
	}
	return result.join("\n");
};
function formatHtml(value) {
	try {
		if (value.includes("\n") && value.trim().length > 0) {
			let formatted = removeLeadingIndent(value);
			formatted = fixTagAlignment(formatted);
			return formatted;
		}
		let formatted = value.replace(/></g, ">\n<").replace(/\n\s*\n/g, "\n").split("\n");
		let indent = 0;
		const indentSize = 2;
		const result = [];
		for (let i = 0; i < formatted.length; i++) {
			const trimmed = formatted[i].trim();
			if (!trimmed) {
				result.push("");
				continue;
			}
			const isClosingTag = trimmed.startsWith("</");
			const isSelfClosing = trimmed.endsWith("/>");
			const isOpeningTag = trimmed.startsWith("<") && !isClosingTag && !isSelfClosing;
			if (isClosingTag) {
				indent = Math.max(0, indent - indentSize);
				result.push(" ".repeat(indent) + trimmed);
			} else if (isOpeningTag) {
				result.push(" ".repeat(indent) + trimmed);
				indent += indentSize;
			} else if (isSelfClosing) result.push(" ".repeat(indent) + trimmed);
			else result.push(" ".repeat(indent) + trimmed);
		}
		return removeLeadingIndent(result.filter((line) => line.length > 0).join("\n"));
	} catch {
		return value;
	}
}
function formatJson(value) {
	try {
		const parsed = JSON.parse(value);
		return JSON.stringify(parsed, null, 2);
	} catch {
		return value;
	}
}
async function html$1(value) {
	await loadSyntaxHighlighter();
	const formattedValue = formatHtml(value);
	if (!SyntaxHighlighter || !githubStyle) return /* @__PURE__ */ jsx("pre", {
		style: {
			margin: 0,
			padding: 16,
			whiteSpace: "pre-wrap"
		},
		children: formattedValue
	});
	return /* @__PURE__ */ jsx(SyntaxHighlighter, {
		language: "html",
		style: githubStyle,
		customStyle: {
			margin: 0,
			padding: 16
		},
		children: formattedValue
	});
}
async function json(value) {
	await loadSyntaxHighlighter();
	const formattedValue = formatJson(value);
	if (!SyntaxHighlighter || !githubStyle) return /* @__PURE__ */ jsx("pre", {
		style: {
			margin: 0,
			padding: 16,
			whiteSpace: "pre-wrap"
		},
		children: formattedValue
	});
	return /* @__PURE__ */ jsx(SyntaxHighlighter, {
		language: "json",
		style: githubStyle,
		customStyle: {
			margin: 0,
			padding: 16
		},
		children: formattedValue
	});
}
//#endregion
//#region src/App/TemplatePanel/helper/HighlightedCodePanel.tsx
function HighlightedCodePanel({ type, value }) {
	const [code, setCode] = useState(null);
	useEffect(() => {
		switch (type) {
			case "html":
				html$1(value).then(setCode);
				return;
			case "json":
				json(value).then(setCode);
				return;
		}
	}, [value, type]);
	if (code === null) return null;
	return /* @__PURE__ */ jsx("div", {
		onClick: (ev) => {
			const s = window.getSelection();
			if (s === null) return;
			s.selectAllChildren(ev.currentTarget);
		},
		children: code
	});
}
//#endregion
//#region src/App/TemplatePanel/HtmlPanel.tsx
function HtmlPanel() {
	const document = useDocument();
	const [code, setCode] = useState("");
	useEffect(() => {
		try {
			setCode(renderToStaticMarkup(document, { rootBlockId: "root" }));
		} catch (error) {
			setCode("<!-- Error rendering HTML -->");
		}
	}, [document]);
	return /* @__PURE__ */ jsx(HighlightedCodePanel, {
		type: "html",
		value: code
	});
}
//#endregion
//#region src/App/TemplatePanel/ImportJson/validateJsonStringValue.ts
function validateTextAreaValue(value) {
	let jsonObject = void 0;
	try {
		jsonObject = JSON.parse(value);
	} catch {
		return { error: "Invalid json" };
	}
	const parseResult = EditorConfigurationSchema.safeParse(jsonObject);
	if (!parseResult.success) return { error: "Invalid JSON schema" };
	if (!parseResult.data.root) return { error: "Missing \"root\" node" };
	return { data: parseResult.data };
}
//#endregion
//#region src/App/TemplatePanel/ImportJson/ImportJsonDialog.tsx
function ImportJsonDialog({ onClose }) {
	const { t } = useTranslation$1();
	const [value, setValue] = useState("");
	const [error, setError] = useState(null);
	const handleChange = (ev) => {
		const v = ev.currentTarget.value;
		setValue(v);
		const { error } = validateTextAreaValue(v);
		setError(error ?? null);
	};
	let errorAlert = null;
	if (error) errorAlert = /* @__PURE__ */ jsx(Alert, {
		color: "error",
		children: error
	});
	return /* @__PURE__ */ jsxs(Dialog, {
		open: true,
		onClose,
		children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("common.importJson") }), /* @__PURE__ */ jsxs("form", {
			onSubmit: (ev) => {
				ev.preventDefault();
				const { error, data } = validateTextAreaValue(value);
				setError(error ?? null);
				if (!data) return;
				resetDocument(data);
				onClose();
			},
			children: [/* @__PURE__ */ jsxs(DialogContent, { children: [errorAlert, /* @__PURE__ */ jsx(TextField, {
				error: error !== null,
				value,
				onChange: handleChange,
				type: "text",
				helperText: t("common.importJsonHelperText"),
				variant: "outlined",
				fullWidth: true,
				rows: 10,
				multiline: true
			})] }), /* @__PURE__ */ jsxs(DialogActions, { children: [/* @__PURE__ */ jsx(Button, {
				variant: "outlined",
				color: "primary",
				type: "button",
				onClick: onClose,
				children: t("common.cancel")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "contained",
				type: "submit",
				disabled: error !== null,
				children: t("common.import")
			})] })]
		})]
	});
}
//#endregion
//#region src/App/TemplatePanel/ImportJson/index.tsx
function ImportJson() {
	const { t } = useTranslation$1();
	const [open, setOpen] = useState(false);
	let dialog = null;
	if (open) dialog = /* @__PURE__ */ jsx(ImportJsonDialog, { onClose: () => setOpen(false) });
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Tooltip, {
		title: t("common.importJson"),
		arrow: true,
		children: /* @__PURE__ */ jsx(IconButton, {
			onClick: () => setOpen(true),
			"aria-label": t("common.importJson"),
			children: /* @__PURE__ */ jsx(FileUploadOutlined, { fontSize: "small" })
		})
	}), dialog] });
}
//#endregion
//#region src/App/TemplatePanel/JsonPanel.tsx
function JsonPanel() {
	const document = useDocument();
	return /* @__PURE__ */ jsx(HighlightedCodePanel, {
		type: "json",
		value: useMemo(() => JSON.stringify(document, null, "  "), [document])
	});
}
//#endregion
//#region src/App/LanguageSwitcher/index.tsx
function LanguageSwitcher() {
	const { t, i18n } = useI18nextTranslation();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const currentLang = getLanguage();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLanguageChange = (lang) => {
		changeLanguage(lang);
		setLanguage(lang);
		handleClose();
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(IconButton, {
		onClick: handleClick,
		size: "small",
		sx: { color: "text.secondary" },
		"aria-label": t("common.language"),
		"aria-controls": open ? "language-menu" : void 0,
		"aria-haspopup": "true",
		"aria-expanded": open ? "true" : void 0,
		children: /* @__PURE__ */ jsx(LanguageOutlined, { fontSize: "small" })
	}), /* @__PURE__ */ jsxs(Menu, {
		id: "language-menu",
		anchorEl,
		open,
		onClose: handleClose,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right"
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "right"
		},
		children: [/* @__PURE__ */ jsx(MenuItem, {
			onClick: () => handleLanguageChange("es"),
			selected: currentLang === "es",
			lang: "es",
			children: "Español"
		}), /* @__PURE__ */ jsx(MenuItem, {
			onClick: () => handleLanguageChange("en"),
			selected: currentLang === "en",
			lang: "en",
			children: "English"
		})]
	})] });
}
//#endregion
//#region src/App/TemplatePanel/MainTabsGroup.tsx
function MainTabsGroup() {
	const { t } = useTranslation$1();
	const selectedMainTab = useSelectedMainTab();
	const showJsonFeatures = useShowJsonFeatures();
	const handleChange = (_, v) => {
		switch (v) {
			case "json":
			case "preview":
			case "editor":
			case "html":
				setSelectedMainTab(v);
				return;
			default: setSelectedMainTab("editor");
		}
	};
	return /* @__PURE__ */ jsxs(Tabs, {
		value: selectedMainTab,
		onChange: handleChange,
		children: [
			/* @__PURE__ */ jsx(Tab, {
				value: "editor",
				"aria-label": t("tabs.edit"),
				label: /* @__PURE__ */ jsx(Tooltip, {
					title: t("tabs.edit"),
					arrow: true,
					children: /* @__PURE__ */ jsx(EditOutlined, { fontSize: "small" })
				})
			}),
			/* @__PURE__ */ jsx(Tab, {
				value: "preview",
				"aria-label": t("tabs.preview"),
				label: /* @__PURE__ */ jsx(Tooltip, {
					title: t("tabs.preview"),
					arrow: true,
					children: /* @__PURE__ */ jsx(PreviewOutlined, { fontSize: "small" })
				})
			}),
			/* @__PURE__ */ jsx(Tab, {
				value: "html",
				"aria-label": t("tabs.htmlOutput"),
				label: /* @__PURE__ */ jsx(Tooltip, {
					title: t("tabs.htmlOutput"),
					arrow: true,
					children: /* @__PURE__ */ jsx(CodeOutlined, { fontSize: "small" })
				})
			}),
			showJsonFeatures && /* @__PURE__ */ jsx(Tab, {
				value: "json",
				"aria-label": t("tabs.jsonOutput"),
				label: /* @__PURE__ */ jsx(Tooltip, {
					title: t("tabs.jsonOutput"),
					arrow: true,
					children: /* @__PURE__ */ jsx(DataObjectOutlined, { fontSize: "small" })
				})
			})
		]
	});
}
//#endregion
//#region src/App/TemplatePanel/NameInput.tsx
function NameInput() {
	const { t } = useTranslation$1();
	return /* @__PURE__ */ jsx(Typography, {
		component: "span",
		variant: "body2",
		sx: {
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
			maxWidth: "300px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			color: "text.primary",
			fontWeight: 500
		},
		children: useName() || t("common.unnamedTemplate")
	});
}
//#endregion
//#region src/App/TemplatePanel/RedoButton/index.tsx
function RedoButton() {
	const { t } = useTranslation$1();
	const canRedo = useCanRedo();
	return /* @__PURE__ */ jsx(Tooltip, {
		title: t("common.redoTooltip"),
		arrow: true,
		children: /* @__PURE__ */ jsx(IconButton, {
			onClick: redo,
			disabled: !canRedo,
			size: "small",
			"aria-label": t("common.redoTooltip"),
			children: /* @__PURE__ */ jsx(RedoOutlined, { fontSize: "small" })
		})
	});
}
//#endregion
//#region src/App/TemplatePanel/UndoButton/index.tsx
function UndoButton() {
	const { t } = useTranslation$1();
	const canUndo = useCanUndo();
	return /* @__PURE__ */ jsx(Tooltip, {
		title: t("common.undoTooltip"),
		arrow: true,
		children: /* @__PURE__ */ jsx(IconButton, {
			onClick: undo,
			disabled: !canUndo,
			size: "small",
			"aria-label": t("common.undoTooltip"),
			children: /* @__PURE__ */ jsx(UndoOutlined, { fontSize: "small" })
		})
	});
}
//#endregion
//#region src/App/TemplatePanel/index.tsx
function TemplatePanel() {
	const { t } = useTranslation$1();
	const document = useDocument();
	const selectedMainTab = useSelectedMainTab();
	const selectedScreenSize = useSelectedScreenSize();
	const showJsonFeatures = useShowJsonFeatures();
	React.useEffect(() => {
		if (!showJsonFeatures && selectedMainTab === "json") setSelectedMainTab("editor");
	}, [showJsonFeatures, selectedMainTab]);
	let mainBoxSx = {
		flex: 1,
		overflow: "visible"
	};
	if (selectedScreenSize === "mobile") mainBoxSx = {
		...mainBoxSx,
		margin: "32px auto",
		width: 370,
		height: 800,
		boxShadow: "rgba(33, 36, 67, 0.04) 0px 10px 20px, rgba(33, 36, 67, 0.04) 0px 2px 6px, rgba(33, 36, 67, 0.04) 0px 0px 1px"
	};
	const handleScreenSizeChange = (_, value) => {
		if (value === "mobile" || value === "desktop") setSelectedScreenSize(value);
		else setSelectedScreenSize("desktop");
	};
	const theme = useTheme();
	const screenSizeValue = selectedScreenSize === "desktop" || selectedScreenSize === "mobile" ? selectedScreenSize : "desktop";
	const selectedSx = {
		backgroundColor: theme.palette?.action?.selected ?? "rgba(25, 118, 210, 0.12)",
		color: theme.palette?.primary?.main ?? "#1976d2",
		"&:hover": { backgroundColor: theme.palette?.action?.selected ?? "rgba(25, 118, 210, 0.12)" }
	};
	const renderMainPanel = () => {
		switch (selectedMainTab) {
			case "editor": return /* @__PURE__ */ jsx(Box, {
				sx: mainBoxSx,
				children: /* @__PURE__ */ jsx(EditorBlock, { id: "root" })
			});
			case "preview": return /* @__PURE__ */ jsx(Box, {
				sx: mainBoxSx,
				children: /* @__PURE__ */ jsx(Reader, {
					document,
					rootBlockId: "root"
				})
			});
			case "html": return /* @__PURE__ */ jsx(HtmlPanel, {});
			case "json": return showJsonFeatures ? /* @__PURE__ */ jsx(JsonPanel, {}) : null;
		}
	};
	return /* @__PURE__ */ jsxs(Box, {
		sx: {
			display: "flex",
			flexDirection: "column",
			height: "100%",
			overflow: "hidden"
		},
		children: [/* @__PURE__ */ jsxs(Stack, {
			sx: {
				height: 49,
				borderBottom: 1,
				borderColor: "divider",
				backgroundColor: "white",
				flexShrink: 0,
				position: "relative",
				zIndex: 1,
				px: 1
			},
			direction: "row",
			justifyContent: "space-between",
			alignItems: "center",
			children: [
				/* @__PURE__ */ jsx(ToggleSamplesPanelButton, {}),
				/* @__PURE__ */ jsx(NameInput, {}),
				/* @__PURE__ */ jsxs(Stack, {
					px: 2,
					direction: "row",
					gap: 2,
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center",
					children: [/* @__PURE__ */ jsx(Stack, {
						direction: "row",
						spacing: 2,
						children: /* @__PURE__ */ jsx(MainTabsGroup, {})
					}), /* @__PURE__ */ jsxs(Stack, {
						direction: "row",
						spacing: 2,
						alignItems: "center",
						children: [
							/* @__PURE__ */ jsx(LanguageSwitcher, {}),
							/* @__PURE__ */ jsx(UndoButton, {}),
							/* @__PURE__ */ jsx(RedoButton, {}),
							showJsonFeatures && /* @__PURE__ */ jsx(DownloadJson, {}),
							showJsonFeatures && /* @__PURE__ */ jsx(ImportJson, {}),
							/* @__PURE__ */ jsxs(ToggleButtonGroup, {
								size: "small",
								value: screenSizeValue,
								exclusive: true,
								onChange: handleScreenSizeChange,
								"aria-label": t("common.screenSize"),
								children: [/* @__PURE__ */ jsx(Tooltip, {
									title: t("common.desktopView"),
									arrow: true,
									children: /* @__PURE__ */ jsx(ToggleButton, {
										value: "desktop",
										sx: screenSizeValue === "desktop" ? selectedSx : void 0,
										children: /* @__PURE__ */ jsx(MonitorOutlined, { fontSize: "small" })
									})
								}), /* @__PURE__ */ jsx(Tooltip, {
									title: t("common.mobileView"),
									arrow: true,
									children: /* @__PURE__ */ jsx(ToggleButton, {
										value: "mobile",
										sx: screenSizeValue === "mobile" ? selectedSx : void 0,
										children: /* @__PURE__ */ jsx(PhoneIphoneOutlined, { fontSize: "small" })
									})
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx(ToggleInspectorPanelButton, {})
			]
		}), /* @__PURE__ */ jsx(Box, {
			sx: {
				flex: 1,
				overflow: "auto",
				minWidth: 0,
				display: "flex",
				flexDirection: "column"
			},
			children: renderMainPanel()
		})]
	});
}
//#endregion
//#region src/App/index.tsx
function useDrawerTransition(cssProperty, open) {
	const { transitions } = useTheme();
	return transitions.create(cssProperty, {
		easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
		duration: !open ? transitions.duration.leavingScreen : transitions.duration.enteringScreen
	});
}
function App() {
	const inspectorDrawerOpen = useInspectorDrawerOpen();
	const marginLeftTransition = useDrawerTransition("margin-left", useSamplesDrawerOpen());
	const marginRightTransition = useDrawerTransition("margin-right", inspectorDrawerOpen);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "z" && !e.shiftKey) {
				const target = e.target;
				if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
				e.preventDefault();
				undo();
			}
			if ((e.metaKey || e.ctrlKey) && (e.key === "y" || e.key === "z" && e.shiftKey)) {
				const target = e.target;
				if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
				e.preventDefault();
				redo();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Box, {
		sx: {
			position: "relative",
			width: "100%",
			height: "100%",
			display: "flex",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ jsx(SamplesDrawer, {}),
			/* @__PURE__ */ jsx(Stack, {
				sx: {
					flex: 1,
					minWidth: 0,
					transition: `${marginLeftTransition}, ${marginRightTransition}`,
					position: "relative",
					overflow: "hidden",
					zIndex: 0
				},
				children: /* @__PURE__ */ jsx(TemplatePanel, {})
			}),
			/* @__PURE__ */ jsx(InspectorDrawer, {})
		]
	});
}
//#endregion
//#region src/EmailBuilder/index.tsx
var AppLayout = memo(function AppLayout() {
	return /* @__PURE__ */ jsx(Box, {
		sx: {
			position: "relative",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			overflow: "hidden"
		},
		children: /* @__PURE__ */ jsx(App, {})
	});
});
/**
* EmailBuilder 组件
* 
* 一个功能完整的邮件模板编辑器组件，可以在其他 React 项目中使用
* 
* @example
* ```tsx
* import { EmailBuilder } from 'monto-email-builder';
* 
* function MyApp() {
*   const emailBuilderRef = useRef<EmailBuilderRef>(null);
* 
*   const handleSave = () => {
*     emailBuilderRef.current?.getData((json, html) => {
*       // 处理 json 和 html 数据
*       console.log('JSON:', json);
*       console.log('HTML:', html);
*     });
*   };
* 
*   return (
*     <>
*       <EmailBuilder
*         ref={emailBuilderRef}
*         language="zh"
*         imageUploadHandler={handleImageUpload}
*         onChange={handleChange}
*       />
*       <button onClick={handleSave}>保存</button>
*     </>
*   );
* }
* ```
*/
var EmailBuilder = forwardRef(({ initialDocument, language = "en", imageUploadHandler, videoUploadHandler, onChange, initialName, onNameChange, theme: customTheme, showJsonFeatures = true, showSamplesDrawerTitle = true, leftPanelSlot, onSamplesDrawerToggle, onInspectorDrawerToggle }, ref) => {
	const initializedRef = useRef(false);
	if (!initializedRef.current) {
		initializeStore({
			document: initialDocument,
			language,
			showJsonFeatures,
			showSamplesDrawerTitle
		});
		initializedRef.current = true;
	}
	useEffect(() => {
		if (initialDocument !== void 0) resetDocument(initialDocument);
	}, [initialDocument]);
	useEffect(() => {
		if (language !== void 0) setLanguage(language);
	}, [language]);
	useEffect(() => {
		setImageUploadHandler(imageUploadHandler);
	}, [imageUploadHandler]);
	useEffect(() => {
		setVideoUploadHandler(videoUploadHandler);
	}, [videoUploadHandler]);
	useEffect(() => {
		setOnChange(onChange);
	}, [onChange]);
	useImperativeHandle(ref, () => ({ getData: (callback) => {
		const document = editorStateStore.getState().document;
		try {
			callback(document, renderToStaticMarkup(document, { rootBlockId: "root" }));
		} catch (error) {
			callback(document, "<!-- Error rendering HTML -->");
		}
	} }));
	useEffect(() => {
		if (initialName !== void 0) setName(initialName);
	}, [initialName]);
	useEffect(() => {
		setOnNameChange(onNameChange);
	}, [onNameChange]);
	useEffect(() => {
		setShowJsonFeatures(showJsonFeatures);
	}, [showJsonFeatures]);
	useEffect(() => {
		setShowSamplesDrawerTitle(showSamplesDrawerTitle);
	}, [showSamplesDrawerTitle]);
	useEffect(() => {
		setOnSamplesDrawerToggle(onSamplesDrawerToggle);
	}, [onSamplesDrawerToggle]);
	useEffect(() => {
		setOnInspectorDrawerToggle(onInspectorDrawerToggle);
	}, [onInspectorDrawerToggle]);
	return /* @__PURE__ */ jsxs(ThemeProvider, {
		theme: customTheme || THEME,
		children: [/* @__PURE__ */ jsx(CssBaseline, {}), /* @__PURE__ */ jsx(LeftPanelSlotProvider, {
			value: leftPanelSlot ?? null,
			children: /* @__PURE__ */ jsx(AppLayout, {})
		})]
	});
});
EmailBuilder.displayName = "EmailBuilder";
//#endregion
export { EmailBuilder, EmailBuilder as default, useDocument, useLanguage };
