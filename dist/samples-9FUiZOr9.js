//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/getConfiguration/sample/empty-email-message.ts
var EMPTY_EMAIL_MESSAGE = { root: {
	type: "EmailLayout",
	data: {
		backdropColor: "#F5F5F5",
		canvasColor: "#FFFFFF",
		textColor: "#262626",
		fontFamily: "MODERN_SANS",
		childrenIds: []
	}
} };
//#endregion
//#region src/getConfiguration/sample/basic-template.ts
var basic_template_exports = /* @__PURE__ */ __exportAll({ default: () => BASIC_TEMPLATE });
var BASIC_TEMPLATE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F5F5F5",
			canvasColor: "#FFFFFF",
			textColor: "#262626",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"title-block",
				"content-block",
				"footer-block"
			]
		}
	},
	"title-block": {
		type: "Heading",
		data: {
			style: {
				padding: {
					top: 32,
					bottom: 16,
					right: 24,
					left: 24
				},
				textAlign: "center"
			},
			props: {
				text: "Your Title Here",
				level: "h1"
			}
		}
	},
	"content-block": {
		type: "Text",
		data: {
			style: { padding: {
				top: 16,
				bottom: 16,
				right: 24,
				left: 24
			} },
			props: { text: "Your content goes here..." }
		}
	},
	"footer-block": {
		type: "Text",
		data: {
			style: {
				padding: {
					top: 32,
					bottom: 32,
					right: 24,
					left: 24
				},
				textAlign: "center",
				fontSize: 12,
				color: "#666666"
			},
			props: { text: "Copyright (C) *|CURRENT_YEAR|* *|LIST:COMPANY|*. All rights reserved.\n\n*|IFNOT:ARCHIVE_PAGE|**|LIST:DESCRIPTION|**|END:IF|*\n\nOur mailing address is:\n*|IFNOT:ARCHIVE_PAGE|**|HTML:LIST_ADDRESS|**|END:IF|*" }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/education.ts
var education_exports = /* @__PURE__ */ __exportAll({ default: () => EDUCATION });
var EDUCATION = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#b0c1b6",
			"canvasColor": "#FFFFFF",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"childrenIds": [
				"block-1770721162941-336",
				"block-1770721195213-337",
				"block-1770721208598-338",
				"block-1770721220220-339",
				"block-1770721235756-340",
				"block-1770721269925-341",
				"block-1770721286739-342",
				"block-1770721328032-343",
				"block-1770776910815-362",
				"block-1770777133902-369",
				"block-1770777350798-375",
				"block-1770777538457-381",
				"block-1770777712903-387"
			]
		}
	},
	"block-1770721162941-336": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 44,
					"bottom": 40,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 143,
				"height": 22,
				"url": "https://social-media-marketing-test.sg.ufileos.com/61e73c38-d613-4a1a-a4dc-b0f13178eaed?Expires=2086152870&Signature=OToH7Mf2vZKHvwBRXJmZv7BKQ1E%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770721195213-337": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "NEW BEGINNINGS, BRIGHT FUTURES"
			}
		}
	},
	"block-1770721208598-338": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 40,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Get ready to make this "
			}
		}
	},
	"block-1770721220220-339": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#2F6543",
				"fontSize": 40,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "year unfogettable"
			}
		}
	},
	"block-1770721235756-340": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 540,
				"height": 290,
				"url": "https://social-media-marketing-test.sg.ufileos.com/310d1dfb-b1f8-4e85-84dd-2859e2290718?Expires=2086254044&Signature=noS28fdBec4F8eLzuVAy0Ppgzto%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770721269925-341": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#0E311B",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 4,
					"bottom": 24,
					"right": 64,
					"left": 64
				}
			},
			"props": {
				"markdown": false,
				"text": "With fresh goals and big dreams, the journey starts now. Let's make this school year truly unforgettable."
			}
		}
	},
	"block-1770721286739-342": {
		"type": "Button",
		"data": {
			"style": {
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#2F6543",
				"buttonStyle": "pill",
				"size": "large",
				"text": "Get Ready",
				"url": ""
			}
		}
	},
	"block-1770721328032-343": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 36,
				"bottom": 16,
				"right": 36,
				"left": 36
			} },
			"props": { "childrenIds": ["block-1770721333422-344"] }
		}
	},
	"block-1770721333422-344": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#2F6543",
				"borderRadius": 20,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770721352406-345",
				"block-1770721362013-346",
				"block-1770721394376-347",
				"block-1770721480543-352",
				"block-1770776781797-356"
			] }
		}
	},
	"block-1770721352406-345": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#FFDC67",
				"fontSize": 28,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 24,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Checklists to keep"
			}
		}
	},
	"block-1770721362013-346": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 28,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "everything under control"
			}
		}
	},
	"block-1770721394376-347": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#95B7A1",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "EVERYTHING READY FOR YOUR NEXT CLASS"
			}
		}
	},
	"block-1770721425835-348": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 46,
				"height": 46,
				"url": "https://social-media-marketing-test.sg.ufileos.com/f24ef3eb-aaf4-48e5-aae9-0c032e51efc8?Expires=2086254229&Signature=v32GsGWWe7K30sIi28A9hfgU%2F0g%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770721442009-349": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Materials prepared"
			}
		}
	},
	"block-1770721450993-350": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#95B7A1",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Double-check that all materials —books, notebooks, digital devices— are ready and in good condition for the activity."
			}
		}
	},
	"block-1770721474125-351": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 46,
				"height": 46,
				"url": "https://social-media-marketing-test.sg.ufileos.com/3370cdb0-015b-4c17-b597-9ebcf4114095?Expires=2086254278&Signature=TKV%2Ff6REbPWHOxB3lzNQtzlgu4U%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770721480543-352": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 48,
				"columns": [{ "childrenIds": [
					"block-1770721425835-348",
					"block-1770721442009-349",
					"block-1770721450993-350"
				] }, { "childrenIds": [
					"block-1770721474125-351",
					"block-1770721504617-353",
					"block-1770721507042-354"
				] }]
			}
		}
	},
	"block-1770721504617-353": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Schedule confirmed"
			}
		}
	},
	"block-1770721507042-354": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#95B7A1",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Review the times and make sure everyone involved knows when and where to show up. Punctuality is key."
			}
		}
	},
	"block-1770776756703-355": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 46,
				"height": 46,
				"url": "https://social-media-marketing-test.sg.ufileos.com/89566f64-8c3d-428a-a7fd-910e5593800a?Expires=2086309571&Signature=1dSc%2FXhozIpFBDBUhhD82xjyEpI%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770776781797-357": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 46,
				"height": 46,
				"url": "https://social-media-marketing-test.sg.ufileos.com/83a42314-e633-463c-bd23-c43fda772d63?Expires=2086309586&Signature=6GOMA0QS6dWMhNBRnXl2mJnxtUY%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770776781797-356": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 32,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": [
					"block-1770776756703-355",
					"block-1770776810149-358",
					"block-1770776862537-360"
				] }, { "childrenIds": [
					"block-1770776781797-357",
					"block-1770776827687-359",
					"block-1770776864447-361"
				] }]
			}
		}
	},
	"block-1770776810149-358": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Space set up"
			}
		}
	},
	"block-1770776827687-359": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Communication clear"
			}
		}
	},
	"block-1770776862537-360": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#95B7A1",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Make sure the classroom or event space is clean, organized and adapted to the session's needs."
			}
		}
	},
	"block-1770776864447-361": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#95B7A1",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Send reminders or last instructions to students and staff so everyone is aligned and informed."
			}
		}
	},
	"block-1770776910815-362": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 36,
				"left": 36
			} },
			"props": { "childrenIds": ["block-1770776913356-363"] }
		}
	},
	"block-1770776913356-363": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#ECF4EF",
				"borderRadius": 20,
				"padding": {
					"top": 24,
					"bottom": 24,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770777026945-365"] }
		}
	},
	"block-1770776957394-364": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/c4ae78b8-0d2e-4ad6-9883-511024c5e203?Expires=2086309761&Signature=WaFF4%2B2b%2BOjb%2BfJnGWBBhV0du7s%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770777026945-366": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 20,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Prepare your materials and your minset"
			}
		}
	},
	"block-1770777026945-365": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 28,
				"columns": [{ "childrenIds": ["block-1770776957394-364"] }, { "childrenIds": [
					"block-1770777026945-366",
					"block-1770777031900-367",
					"block-1770777062752-368"
				] }]
			}
		}
	},
	"block-1770777031900-367": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#0E311B",
				"fontWeight": "normal",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Gather your notes, organize your schedule, and take a moment to focus. A great start begins with thoughtful preparation."
			}
		}
	},
	"block-1770777062752-368": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 20,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#2F6543",
				"buttonStyle": "pill",
				"text": "Start now",
				"url": ""
			}
		}
	},
	"block-1770777133902-369": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 8,
				"right": 36,
				"left": 36
			} },
			"props": { "childrenIds": ["block-1770777139230-370"] }
		}
	},
	"block-1770777139230-370": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#ECF4EF",
				"borderRadius": 20,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 80,
					"left": 0
				}
			},
			"props": { "childrenIds": ["block-1770777174478-372"] }
		}
	},
	"block-1770777157338-371": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 52,
					"right": 0,
					"left": 52
				},
				"textAlign": "center"
			},
			"props": {
				"width": 28,
				"height": 28,
				"url": "https://social-media-marketing-test.sg.ufileos.com/d54dc404-b291-4c1c-bb0f-484cda210ac9?Expires=2086309961&Signature=2Wra4fCjndnDLMKAXtc5sMxdVv4%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770777174478-373": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 16,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Large appliances"
			}
		}
	},
	"block-1770777174478-372": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"fixedWidths": [
					25,
					75,
					null,
					null
				],
				"columnsCount": 2,
				"columnsGap": 0,
				"columns": [{ "childrenIds": ["block-1770777157338-371"] }, { "childrenIds": ["block-1770777174478-373", "block-1770777179509-374"] }]
			}
		}
	},
	"block-1770777179509-374": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Fridges, microwaves or stoves are usually not allowed."
			}
		}
	},
	"block-1770777350798-375": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 8,
				"right": 36,
				"left": 36
			} },
			"props": { "childrenIds": ["block-1770777352588-376"] }
		}
	},
	"block-1770777352588-376": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#ECF4EF",
				"borderRadius": 20,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 80,
					"left": 0
				}
			},
			"props": { "childrenIds": ["block-1770777395574-378"] }
		}
	},
	"block-1770777375537-377": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 24,
					"right": 0,
					"left": 52
				},
				"textAlign": "center"
			},
			"props": {
				"width": 28,
				"height": 28,
				"url": "https://social-media-marketing-test.sg.ufileos.com/fa21be29-9e9b-4059-9942-0635329bb031?Expires=2086310180&Signature=G%2F5ZRMx1izsEgGCpkRn84c0Ofp4%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770777395574-379": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 16,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Hazardous materials"
			}
		}
	},
	"block-1770777395574-378": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"fixedWidths": [
					25,
					75,
					null,
					null
				],
				"columnsCount": 2,
				"columnsGap": 0,
				"columns": [{ "childrenIds": ["block-1770777375537-377"] }, { "childrenIds": ["block-1770777395574-379", "block-1770777403435-380"] }]
			}
		}
	},
	"block-1770777403435-380": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "No candles, incense, lighters or flammables."
			}
		}
	},
	"block-1770777538457-381": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 36,
				"right": 36,
				"left": 36
			} },
			"props": { "childrenIds": ["block-1770777542635-382"] }
		}
	},
	"block-1770777542635-382": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#ECF4EF",
				"borderRadius": 20,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 72,
					"left": 0
				}
			},
			"props": { "childrenIds": ["block-1770777588714-384"] }
		}
	},
	"block-1770777573729-383": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 0,
					"left": 52
				},
				"textAlign": "center"
			},
			"props": {
				"width": 28,
				"height": 28,
				"url": "https://social-media-marketing-test.sg.ufileos.com/1d6c4f09-4ccd-4fdb-b95b-006f698511c7?Expires=2086310378&Signature=IVwMQkj6bWFsfOrD1s8CF2n3y8c%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770777588714-385": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 16,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Unauthorized pets"
			}
		}
	},
	"block-1770777588714-384": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"fixedWidths": [
					25,
					75,
					null,
					null
				],
				"columnsCount": 2,
				"columnsGap": 0,
				"columns": [{ "childrenIds": ["block-1770777573729-383"] }, { "childrenIds": ["block-1770777588714-385", "block-1770777593461-386"] }]
			}
		}
	},
	"block-1770777593461-386": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Pets are not allowed unless officially approved."
			}
		}
	},
	"block-1770777712903-387": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#000000",
				"padding": {
					"top": 20,
					"bottom": 20,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770777718068-388",
				"block-1770777733743-389",
				"block-1770777737630-390"
			] }
		}
	},
	"block-1770777718068-388": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "My new text block"
			}
		}
	},
	"block-1770777733743-389": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "no-border-white",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770777737630-390": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "© 2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/invite-to-event.ts
var invite_to_event_exports = /* @__PURE__ */ __exportAll({ default: () => INVITE_TO_EVENT });
var INVITE_TO_EVENT = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#272727",
			"canvasColor": "#000000",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"childrenIds": [
				"block-1770709955073-213",
				"block-1770709982022-214",
				"block-1770709986036-215",
				"block-1770709995338-216",
				"block-1770710111761-218",
				"block-1770710152620-220",
				"block-1770710176240-221",
				"block-1770710210375-222",
				"block-1770710244287-223",
				"block-1770710267459-224",
				"block-1770710284595-225",
				"block-1770710331589-228",
				"block-1770710384563-231",
				"block-1770710440813-235",
				"block-1770710464232-236",
				"block-1770710609743-246",
				"block-1770710632866-248",
				"block-1770710695229-250",
				"block-1770710724826-251",
				"block-1770710744154-252",
				"block-1770710756930-253",
				"block-1770710762902-254"
			]
		}
	},
	"block-1770709955073-213": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 44,
					"bottom": 40,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 143,
				"height": 22,
				"url": "https://social-media-marketing-test.sg.ufileos.com/3d01ed4c-be50-4032-92ec-7f9e4c1ffa94?Expires=2086222416&Signature=ADoPyz1hfGxm9o1MHBDUoyEYwxM%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770709982022-214": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#55FF60",
				"fontSize": 48,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "Ignite the Street Skate Call"
			}
		}
	},
	"block-1770709986036-215": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 18,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 8,
					"bottom": 20,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Show Your Skills & Win Cool Skateboards!"
			}
		}
	},
	"block-1770709995338-216": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 483,
				"height": 490,
				"url": "https://social-media-marketing-test.sg.ufileos.com/27ba87a3-08fc-48ae-891f-f4b449a4e13c?Expires=2086242804&Signature=lwk2%2B1CcdnUW%2BxE6QWkqNOjzhXs%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710094102-217": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 20,
				"fontWeight": "bold",
				"textAlign": "left",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Dear Skateboarders,"
			}
		}
	},
	"block-1770710111761-219": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 0,
				"left": 0
			} },
			"props": {
				"lineColor": "#55FF60",
				"lineHeight": 2
			}
		}
	},
	"block-1770710111761-218": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 44,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770710094102-217"] }, { "childrenIds": ["block-1770710111761-219"] }]
			}
		}
	},
	"block-1770710152620-220": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#b2b2b2",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 40,
					"left": 40
				}
			},
			"props": {
				"markdown": false,
				"text": "When the wind brushes your ears and the board glides across the pavement, every jump and every flip reflects the unyielding spirit of a skateboarder! On behalf of XX Skate Club (virtual name), we are sending out this passionate call to invite every skate lover and skillful rider like you to join our exclusive skateboard challenge. Make friends through skating, chase glory with your skills, and there are three sets of cool skateboard awards waiting for you to take home!"
			}
		}
	},
	"block-1770710176240-221": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#b2b2b2",
				"fontWeight": "normal",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 40,
					"left": 40
				}
			},
			"props": {
				"markdown": false,
				"text": "This skateboard challenge is not about winning or losing, but about love and participation — whether it’s the difficult trick competition for advanced riders or the courage display for beginners, everyone can gain applause and recognition on the field. We have built an exclusive venue with smooth surfaces and safe protective facilities, just to let every rider fully release their skateboarding charm, meet like-minded skate partners, and unlock the endless fun of street skating."
			}
		}
	},
	"block-1770710210375-222": {
		"type": "Button",
		"data": {
			"style": {
				"fontSize": 16,
				"textAlign": "center",
				"padding": {
					"top": 24,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#55FF60",
				"buttonStyle": "rectangle",
				"buttonTextColor": "#000000",
				"size": "large",
				"text": "Sign Up Now",
				"url": ""
			}
		}
	},
	"block-1770710244287-223": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 24,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/dbc5a375-9a7e-47bf-87a1-e9ea0f2d2e8e?Expires=2086243050&Signature=aG7nSq0ZEeM8JpcUgm2JnyPsOFA%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710267459-224": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 28,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 44,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "🔥 Highlights of the Competition"
			}
		}
	},
	"block-1770710284595-225": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 8,
				"right": 40,
				"left": 40
			} },
			"props": { "childrenIds": ["block-1770710287070-226"] }
		}
	},
	"block-1770710287070-226": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 24,
					"bottom": 24,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710295675-227"] }
		}
	},
	"block-1770710295675-227": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 14,
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "▫️ No Threshold to Participate: Both beginners and advanced riders can sign up, with group competitions for fair play."
			}
		}
	},
	"block-1770710331589-228": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 8,
				"right": 40,
				"left": 40
			} },
			"props": { "childrenIds": ["block-1770710333204-229"] }
		}
	},
	"block-1770710333204-229": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 24,
					"bottom": 24,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710341874-230"] }
		}
	},
	"block-1770710341874-230": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "▫️ Immersive Atmosphere: Supported by street trendy music, on-site interaction with skateboard experts, and perfect for taking awesome photos."
			}
		}
	},
	"block-1770710384563-231": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": { "childrenIds": ["block-1770710386439-232"] }
		}
	},
	"block-1770710386439-232": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 24,
					"bottom": 24,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710405669-234"] }
		}
	},
	"block-1770710405669-234": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "▫️Cool Prize Surprise: Exclusive custom skateboard awards, with both high appearance and excellent performance, to accompany your next street skate."
			}
		}
	},
	"block-1770710440813-235": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 28,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 48,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "🏆 Competition Prizes"
			}
		}
	},
	"block-1770710464232-236": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": {
				"fixedWidths": [
					null,
					null,
					null,
					null
				],
				"columnsCount": 3,
				"columnsGap": 16,
				"columns": [
					{ "childrenIds": ["block-1770710466283-237"] },
					{ "childrenIds": ["block-1770710467814-238"] },
					{ "childrenIds": ["block-1770710469207-239"] }
				]
			}
		}
	},
	"block-1770710466283-237": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710494729-240", "block-1770710542226-243"] }
		}
	},
	"block-1770710467814-238": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710497564-241", "block-1770710565363-244"] }
		}
	},
	"block-1770710469207-239": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#252525",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770710498831-242", "block-1770710590019-245"] }
		}
	},
	"block-1770710494729-240": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 114,
				"height": 114,
				"url": "https://social-media-marketing-test.sg.ufileos.com/b8a10cec-6d2a-45b4-b1a7-365cc2e3c625?Expires=2086243315&Signature=QzXMnq4TNeVH4pSppLCygKpy5RE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710497564-241": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 114,
				"height": 114,
				"url": "https://social-media-marketing-test.sg.ufileos.com/3f8aac62-e71b-4a52-a244-9f7eab6aa45c?Expires=2086243308&Signature=Ibbs0fhB0%2FttITHcLfwFh1KUVME%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710498831-242": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 114,
				"height": 114,
				"url": "https://social-media-marketing-test.sg.ufileos.com/ce1fae2b-5d99-4ab9-8a35-c20b6ae99be5?Expires=2086243303&Signature=PrcpRiJAJPRRNkr5WL%2BxLNAnmIc%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710542226-243": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 12,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "First Prize"
			}
		}
	},
	"block-1770710565363-244": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 14,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 12,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Second Prize"
			}
		}
	},
	"block-1770710590019-245": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 12,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Third Prize"
			}
		}
	},
	"block-1770710609743-246": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 28,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 40,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "📌 Warm Reminder"
			}
		}
	},
	"block-1770710624198-247": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/b97e63a3-ceef-4204-93cd-2818e2381836?Expires=2086243427&Signature=8pMV39WCFEeRZfrits01KmalmbM%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770710632866-249": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#b2b2b2",
				"fontWeight": "normal",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 0,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "1. Please bring your own skateboard and protective gear (helmet, knee pads, elbow pads, etc.) and pay attention to sliding safety.2. Registration Deadline: 18:00, X/X/2026. Limited places, first come, first served.3. Drinking water and first-aid kits will be provided on site. Please contact the staff if you have any needs."
			}
		}
	},
	"block-1770710632866-248": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 0,
				"columns": [{ "childrenIds": ["block-1770710624198-247"] }, { "childrenIds": ["block-1770710632866-249"] }]
			}
		}
	},
	"block-1770710695229-250": {
		"type": "Button",
		"data": {
			"style": {
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#55FF60",
				"buttonStyle": "rectangle",
				"buttonTextColor": "#000000",
				"size": "large",
				"text": "Sign Up Now",
				"url": ""
			}
		}
	},
	"block-1770710724826-251": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 36,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": { "lineColor": "#555555" }
		}
	},
	"block-1770710744154-252": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 20,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Terms and Conditions I Unsubscribe I FAQ"
			}
		}
	},
	"block-1770710756930-253": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "no-border-white",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770710762902-254": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 40,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "© 2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/mothers-day.ts
var mothers_day_exports = /* @__PURE__ */ __exportAll({ default: () => MOTHERS_DAY });
var MOTHERS_DAY = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#fffafa",
			"canvasColor": "#ffffff",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"childrenIds": [
				"block-1770604136539-1",
				"block-1770604911589-2",
				"block-1770607237659-9",
				"block-1770607261579-10",
				"block-1770607472510-12",
				"block-1770607735348-17",
				"block-1770607799827-19",
				"block-1770607965396-24",
				"block-1770608077274-26",
				"block-1770608188888-31",
				"block-1770608298957-37"
			]
		}
	},
	"block-1770604136539-1": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 20,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/5d647ae8-8ca1-49ba-98fd-cf7a522cd0bc?Expires=2086136943&Signature=7XrnfdJJUjsPT0OpNyXo%2Bzq%2Fxq0%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770604911589-2": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"left": 24,
				"right": 24
			} },
			"props": { "childrenIds": ["block-1770604916826-3"] }
		}
	},
	"block-1770604916826-3": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#FFF6F8",
				"borderRadius": 20,
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": { "childrenIds": ["block-1770605479372-5"] }
		}
	},
	"block-1770604943341-4": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 224,
				"height": 294,
				"url": "https://social-media-marketing-test.sg.ufileos.com/e6f19db0-05be-4e01-949e-4e2dbee859b8?Expires=2086137750&Signature=EmHDqROQNAD4sjItCOl18AIXsq0%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770605479372-6": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontSize": 24,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Because She Deserves the Best"
			}
		}
	},
	"block-1770605479372-5": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770604943341-4"] }, { "childrenIds": [
					"block-1770605479372-6",
					"block-1770606388781-7",
					"block-1770606411380-8"
				] }]
			}
		}
	},
	"block-1770606388781-7": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#725158",
				"fontWeight": "normal",
				"padding": {
					"top": 12,
					"bottom": 32,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "This Mother’s Day, celebrate the love, warmth, and care she’s given with a thoughtful gift that makes her home even cozier."
			}
		}
	},
	"block-1770606411380-8": {
		"type": "Button",
		"data": {
			"style": {
				"fontSize": 14,
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"buttonBackgroundColor": "#EE6484",
				"text": "Find the Perfect Gift",
				"url": ""
			}
		}
	},
	"block-1770607237659-9": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 26,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 40,
					"bottom": 8,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Curated Gifts for Every Mom"
			}
		}
	},
	"block-1770607261579-10": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 80,
					"left": 76
				}
			},
			"props": {
				"markdown": false,
				"text": "Starting at 50% off for all purchases, offering discounts for motherly love"
			}
		}
	},
	"block-1770607455876-11": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 254,
				"height": 230,
				"url": "https://social-media-marketing-test.sg.ufileos.com/9e2db9b3-033f-491c-8c6c-8bb7c56f37fe?Expires=2086140263&Signature=0ajZPC8HXH8AW3qp5ztSX1dDP%2FI%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770607472510-13": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 18,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Linen Throw Pillows"
			}
		}
	},
	"block-1770607472510-12": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770607455876-11"] }, { "childrenIds": [
					"block-1770607472510-13",
					"block-1770607478913-14",
					"block-1770607484455-15",
					"block-1770607678765-16"
				] }]
			}
		}
	},
	"block-1770607478913-14": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "100% handwoven Egyptian linen.Handmade by artisans.Limited-edition."
			}
		}
	},
	"block-1770607484455-15": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#EE6484",
				"fontSize": 20,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "$260"
			}
		}
	},
	"block-1770607678765-16": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 12,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#EE6484",
				"text": "shop Now",
				"url": ""
			}
		}
	},
	"block-1770607735348-17": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 28,
				"bottom": 28,
				"right": 40,
				"left": 40
			} },
			"props": { "lineColor": "#C9C9C9" }
		}
	},
	"block-1770607789969-18": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 254,
				"height": 230,
				"url": "https://social-media-marketing-test.sg.ufileos.com/fc25ad84-ecbc-4afe-9f12-28ccea8acda5?Expires=2086140595&Signature=u1Hzuib6LUm0%2F%2BjjlgtInpUtkH8%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770607799827-20": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 18,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "“Juno” Designer Vase"
			}
		}
	},
	"block-1770607799827-19": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770607789969-18"] }, { "childrenIds": [
					"block-1770607799827-20",
					"block-1770607801677-21",
					"block-1770607803978-22",
					"block-1770607805717-23"
				] }]
			}
		}
	},
	"block-1770607801677-21": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 20,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Handcrafted in France by VirginieIconic collector’s piece.Limited-edition."
			}
		}
	},
	"block-1770607803978-22": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#EE6484",
				"fontSize": 20,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "$260"
			}
		}
	},
	"block-1770607805717-23": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 12,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#EE6484",
				"text": "Shop Now",
				"url": ""
			}
		}
	},
	"block-1770607965396-24": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 28,
				"bottom": 28,
				"right": 40,
				"left": 40
			} },
			"props": { "lineColor": "#C9C9C9" }
		}
	},
	"block-1770608059051-25": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 254,
				"height": 230,
				"url": "https://social-media-marketing-test.sg.ufileos.com/278d9393-f8ea-4f6f-a6f5-8f2d4b4988ed?Expires=2086140864&Signature=HfOeptaekh5CDxVttGfPWzD4BLI%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770608077274-27": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 18,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Porcelain Bowls"
			}
		}
	},
	"block-1770608077274-26": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 40,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770608059051-25"] }, { "childrenIds": [
					"block-1770608077274-27",
					"block-1770608079512-28",
					"block-1770608081639-29",
					"block-1770608084225-30"
				] }]
			}
		}
	},
	"block-1770608079512-28": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Handcrafted in Italy by NicolaEach piece is unique.Limited-edition."
			}
		}
	},
	"block-1770608081639-29": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#EE6484",
				"fontSize": 20,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "$260"
			}
		}
	},
	"block-1770608084225-30": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 12,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#EE6484",
				"text": "Shop Now",
				"url": ""
			}
		}
	},
	"block-1770608188888-31": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"left": 24,
				"right": 24
			} },
			"props": { "childrenIds": ["block-1770608191766-32"] }
		}
	},
	"block-1770608191766-32": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#FFF6F8",
				"borderRadius": 20,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770608207490-33",
				"block-1770608226687-34",
				"block-1770608231327-35",
				"block-1770608262302-36"
			] }
		}
	},
	"block-1770608207490-33": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/db051684-5a5f-4768-bfed-08de3e0ee767?Expires=2086141014&Signature=pQqjB6LPXPkNysYRrq8kC1ZPGus%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770608226687-34": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 24,
				"fontFamily": "BOOK_SERIF",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Enjoy 50% OFF!"
			}
		}
	},
	"block-1770608231327-35": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 36,
					"left": 36
				}
			},
			"props": {
				"markdown": false,
				"text": "For a limited time, express your mom how much you love her with this 50% off on all gifts."
			}
		}
	},
	"block-1770608262302-36": {
		"type": "Button",
		"data": {
			"style": {
				"fontSize": 14,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#EE6484",
				"text": "Shop Now",
				"url": ""
			}
		}
	},
	"block-1770608298957-37": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": null,
				"borderRadius": 0,
				"padding": {
					"top": 16,
					"bottom": 40,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": ["block-1770608308462-38"] }
		}
	},
	"block-1770608308462-38": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#222222",
				"borderRadius": 20,
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": { "childrenIds": [
				"block-1770608450738-44",
				"block-1770608495892-48",
				"block-1770608478001-47"
			] }
		}
	},
	"block-1770608450738-44": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Terms and Conditions I Unsubscribe I FAQ"
			}
		}
	},
	"block-1770608464395-45": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "left",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "©2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	},
	"block-1770608475290-46": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "no-border-white",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770608478001-47": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770608464395-45"] }, { "childrenIds": ["block-1770608475290-46"] }]
			}
		}
	},
	"block-1770608495892-48": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 40,
				"left": 40
			} },
			"props": { "lineColor": "#414141" }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/new-product-launch.ts
var new_product_launch_exports = /* @__PURE__ */ __exportAll({ default: () => NEW_PRODUCT_LAUNCH });
var NEW_PRODUCT_LAUNCH = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#293545",
			"canvasColor": "#162333",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"childrenIds": [
				"block-1770788405715-441",
				"block-1770788429983-442",
				"block-1770788450335-443",
				"block-1770788469996-444",
				"block-1770788491925-445",
				"block-1770788512720-446",
				"block-1770788589682-448",
				"block-1770788705809-454",
				"block-1770788745423-456",
				"block-1770788918527-460",
				"block-1770788752933",
				"block-1770789004504-464",
				"block-1770789017614-465",
				"block-1770789035318-466",
				"block-1770789103023-470",
				"block-1770789140488-471",
				"block-1770789252475-476"
			]
		}
	},
	"block-1770788405715-441": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 44,
					"bottom": 40,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 143,
				"height": 22,
				"url": "https://social-media-marketing-test.sg.ufileos.com/3d01ed4c-be50-4032-92ec-7f9e4c1ffa94?Expires=2086222416&Signature=ADoPyz1hfGxm9o1MHBDUoyEYwxM%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788429983-442": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/89059802-1efe-4815-aa99-d023f6c35ecd?Expires=2086321234&Signature=WcplWOrKJUdPj1daC52%2BKx57FaY%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788450335-443": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#F4C47D",
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 36,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "NEW PRODUCT ALERT"
			}
		}
	},
	"block-1770788469996-444": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 48,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "FranklinTote Bag"
			}
		}
	},
	"block-1770788491925-445": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "A special collaboration with our friends at J. Stark, handcrafted in Charleston, SC."
			}
		}
	},
	"block-1770788512720-446": {
		"type": "Button",
		"data": {
			"style": {
				"fontFamily": "MODERN_SERIF",
				"textAlign": "center",
				"padding": {
					"top": 20,
					"bottom": 80,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#F4C47D",
				"buttonTextColor": "#000000",
				"text": "Explore the Franklin Tote Bag",
				"url": ""
			}
		}
	},
	"block-1770788570700-447": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 58,
				"height": 58,
				"url": "https://social-media-marketing-test.sg.ufileos.com/b7034d1d-259f-4c0f-9553-f93ef8ff0b9c?Expires=2086321380&Signature=l2YnEXZZc55ThGkYQBAhAAEBcbM%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788589682-449": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 58,
				"height": 58,
				"url": "https://social-media-marketing-test.sg.ufileos.com/ce418c7b-8ea5-4799-bed7-afbc2d7c4bd2?Expires=2086321398&Signature=KJnPJQ6VDj%2FdHYSLECJvBm9hugU%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788589682-448": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 36,
				"left": 36
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": [
					"block-1770788570700-447",
					"block-1770788626524-450",
					"block-1770788655206-452"
				] }, { "childrenIds": [
					"block-1770788589682-449",
					"block-1770788638499-451",
					"block-1770788658786-453"
				] }]
			}
		}
	},
	"block-1770788626524-450": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 18,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Help Here"
			}
		}
	},
	"block-1770788638499-451": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 18,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Need to Return?"
			}
		}
	},
	"block-1770788655206-452": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 32,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "No worries, we've got you. If you need assistance or want to return your product, just reach out—we're here to help make it right."
			}
		}
	},
	"block-1770788658786-453": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 32,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Returning a product is a breeze! Simply initiate the process online, print your label, and drop it off—no questions and no stress."
			}
		}
	},
	"block-1770788705809-454": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 64,
				"right": 36,
				"left": 36
			} },
			"props": { "lineColor": "#5A6D84" }
		}
	},
	"block-1770788721292-455": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 300,
				"height": 300,
				"url": "https://social-media-marketing-test.sg.ufileos.com/8c5ee506-6279-4403-ade1-61986c722323?Expires=2086321530&Signature=WbG1bSvMroDCiOxRf4uZb0QVpTA%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788745423-457": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 20,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Built for your everyday"
			}
		}
	},
	"block-1770788745423-456": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 16,
				"right": 36,
				"left": 0
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 36,
				"columns": [{ "childrenIds": ["block-1770788721292-455"] }, { "childrenIds": [
					"block-1770788745423-457",
					"block-1770788753240",
					"block-1770788765032-458"
				] }]
			}
		}
	},
	"block-1770788752933": {
		"type": "Text",
		"data": {
			"props": {
				"text": "My new text block",
				"markdown": false
			},
			"style": {
				"padding": {
					"top": 16,
					"bottom": 16,
					"left": 24,
					"right": 24
				},
				"fontWeight": "normal"
			}
		}
	},
	"block-1770788753240": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "The Franklin is the perfect everyday tote and built to last. It's the type of bag that your grandkids will find someday – worn in, well loved, and ready for another generation of service."
			}
		}
	},
	"block-1770788765032-458": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 36,
				"bottom": 16,
				"right": 80,
				"left": 0
			} },
			"props": { "lineColor": "#F4C47D" }
		}
	},
	"block-1770788906108-459": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 300,
				"height": 300,
				"url": "https://social-media-marketing-test.sg.ufileos.com/c8fb4ab4-fec9-4b47-98d5-e99ded84ddc5?Expires=2086321710&Signature=2N2gPs5Dq27%2BPyru0qYu6pnrz%2BI%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770788918527-461": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 20,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "The Power of Minimalist Design"
			}
		}
	},
	"block-1770788918527-460": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 32,
				"bottom": 16,
				"right": 0,
				"left": 36
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": [
					"block-1770788918527-461",
					"block-1770788942081-462",
					"block-1770788986150-463"
				] }, { "childrenIds": ["block-1770788906108-459"] }]
			}
		}
	},
	"block-1770788942081-462": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"padding": {
					"top": 12,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Its 5 pockets of varying sizes give you a place to store your work or travel essentials. And the leather straps are sized perfectly to carry on your shoulder or in your hand."
			}
		}
	},
	"block-1770788986150-463": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 36,
				"bottom": 16,
				"right": 80,
				"left": 0
			} },
			"props": { "lineColor": "#F4C47D" }
		}
	},
	"block-1770789004504-464": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 28,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "What peers have to say about the Franklin Tote."
			}
		}
	},
	"block-1770789017614-465": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#57677C",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 80,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "Each bag is meticulously crafted from the highest quality materials around and these reviews tell the story."
			}
		}
	},
	"block-1770789035318-466": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#1B314C",
				"padding": {
					"top": 40,
					"bottom": 40,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770789039964-467",
				"block-1770789059899-468",
				"block-1770789071638-469"
			] }
		}
	},
	"block-1770789039964-467": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 144,
				"height": 24,
				"url": "https://social-media-marketing-test.sg.ufileos.com/d0a08681-ac3e-4459-98d1-c21d04b58059?Expires=2086321844&Signature=1quQCU3UsT28j91xX5FljHefmlE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770789059899-468": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "“This Mini Disc Machine is like finding a unicorn in my living room. I didn't even know I needed it, but now I refuse to live without it. Seriously, it's THAT good.”"
			}
		}
	},
	"block-1770789071638-469": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#758DAB",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Tina Fey"
			}
		}
	},
	"block-1770789103023-470": {
		"type": "Divider",
		"data": {
			"style": {
				"backgroundColor": "#1B314C",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 36,
					"left": 36
				}
			},
			"props": { "lineColor": "#365376" }
		}
	},
	"block-1770789140488-471": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#1B314C",
				"padding": {
					"top": 40,
					"bottom": 40,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770789144982-472",
				"block-1770789163987-473",
				"block-1770789181093-474",
				"block-1770789219029-475"
			] }
		}
	},
	"block-1770789144982-472": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 144,
				"height": 24,
				"url": "https://social-media-marketing-test.sg.ufileos.com/d0a08681-ac3e-4459-98d1-c21d04b58059?Expires=2086321844&Signature=1quQCU3UsT28j91xX5FljHefmlE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770789163987-473": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 16,
				"fontFamily": "MODERN_SERIF",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "“Let me tell you, I haven't been this excited since I found my first iPod. This thing is so slick, it makes me feel like I'm in the future. And trust me, the future is fancy.”"
			}
		}
	},
	"block-1770789181093-474": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#758DAB",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Jim Gaffigan"
			}
		}
	},
	"block-1770789219029-475": {
		"type": "Button",
		"data": {
			"style": {
				"fontFamily": "MODERN_SERIF",
				"textAlign": "center",
				"padding": {
					"top": 32,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#F4C47D",
				"buttonTextColor": "#000000",
				"text": "Add text Here",
				"url": ""
			}
		}
	},
	"block-1770789252475-476": {
		"type": "Container",
		"data": {
			"style": { "padding": {
				"top": 36,
				"bottom": 36,
				"right": 24,
				"left": 24
			} },
			"props": { "childrenIds": [
				"block-1770789263463-477",
				"block-1770789277248-478",
				"block-1770789281009-479"
			] }
		}
	},
	"block-1770789263463-477": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Terms and Conditions I Unsubscribe I FAQ"
			}
		}
	},
	"block-1770789277248-478": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "no-border-white",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770789281009-479": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "© 2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/newsletter-with-unsubscribe.ts
var newsletter_with_unsubscribe_exports = /* @__PURE__ */ __exportAll({ default: () => NEWSLETTER_WITH_UNSUBSCRIBE });
var NEWSLETTER_WITH_UNSUBSCRIBE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F5F5F5",
			canvasColor: "#FFFFFF",
			textColor: "#262626",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"header-block",
				"greeting-block",
				"title-block",
				"content-block-1",
				"content-block-2",
				"cta-block",
				"divider-block",
				"footer-block"
			]
		}
	},
	"header-block": {
		type: "Image",
		data: {
			style: { padding: {
				top: 32,
				bottom: 16,
				left: 24,
				right: 24
			} },
			props: {
				url: null,
				alt: "Logo",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	"greeting-block": {
		type: "Text",
		data: {
			style: {
				fontWeight: "normal",
				padding: {
					top: 16,
					bottom: 8,
					right: 24,
					left: 24
				}
			},
			props: { text: "Hi {{patientName}}," }
		}
	},
	"title-block": {
		type: "Heading",
		data: {
			style: {
				padding: {
					top: 24,
					bottom: 16,
					right: 24,
					left: 24
				},
				textAlign: "left"
			},
			props: {
				text: "Your Newsletter Title",
				level: "h2"
			}
		}
	},
	"content-block-1": {
		type: "Text",
		data: {
			style: { padding: {
				top: 8,
				bottom: 16,
				right: 24,
				left: 24
			} },
			props: { text: "We hope this message finds you well. Here are the latest updates, news, and exclusive offers we think you'll love." }
		}
	},
	"content-block-2": {
		type: "Text",
		data: {
			style: { padding: {
				top: 8,
				bottom: 24,
				right: 24,
				left: 24
			} },
			props: { text: "Thank you for being part of our community. We look forward to keeping you informed!" }
		}
	},
	"cta-block": {
		type: "Button",
		data: {
			style: { padding: {
				top: 16,
				bottom: 32,
				right: 24,
				left: 24
			} },
			props: {
				buttonBackgroundColor: "#0068FF",
				buttonStyle: "rectangle",
				buttonTextColor: "#FFFFFF",
				fullWidth: false,
				size: "medium",
				text: "Read More",
				url: ""
			}
		}
	},
	"divider-block": {
		type: "Divider",
		data: {
			style: { padding: {
				top: 16,
				bottom: 16,
				left: 24,
				right: 24
			} },
			props: {
				lineHeight: 1,
				lineColor: "#E0E0E0"
			}
		}
	},
	"footer-block": {
		type: "Text",
		data: {
			style: {
				padding: {
					top: 16,
					bottom: 8,
					right: 24,
					left: 24
				},
				textAlign: "center",
				fontSize: 12,
				color: "#666666"
			},
			props: { text: "You're receiving this email because you subscribed to our newsletter." }
		}
	},
	"unsubscribe-line-block": {
		type: "Text",
		data: {
			style: {
				padding: {
					top: 8,
					bottom: 8,
					right: 24,
					left: 24
				},
				textAlign: "center",
				fontSize: 12,
				color: "#999999"
			},
			props: { text: "If you no longer want to receive these emails," }
		}
	},
	"unsubscribe-link-block": {
		type: "Button",
		data: {
			style: { padding: {
				top: 8,
				bottom: 32,
				right: 24,
				left: 24
			} },
			props: {
				buttonBackgroundColor: "transparent",
				buttonStyle: "rectangle",
				buttonTextColor: "#0068FF",
				fullWidth: false,
				size: "small",
				text: "Unsubscribe",
				url: "*|UNSUB|*"
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/one-time-passcode.ts
var one_time_passcode_exports = /* @__PURE__ */ __exportAll({ default: () => ONE_TIME_PASSCODE });
var ONE_TIME_PASSCODE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#000000",
			canvasColor: "#000000",
			textColor: "#FFFFFF",
			fontFamily: "BOOK_SERIF",
			childrenIds: [
				"block_ChPX66qUhF46uynDE8AY11",
				"block_CkNrtQgkqPt2YWLv1hr5eJ",
				"block_BFLBa3q5y8kax9KngyXP65",
				"block_4T7sDFb4rqbSyWjLGJKmov",
				"block_Rvc8ZfTjfhXjpphHquJKvP"
			]
		}
	},
	block_ChPX66qUhF46uynDE8AY11: {
		type: "Image",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				},
				textAlign: "center"
			},
			props: {
				height: 24,
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_jc7ZfPvdHJ6rtH1W/&.png",
				contentAlignment: "middle"
			}
		}
	},
	block_CkNrtQgkqPt2YWLv1hr5eJ: {
		type: "Text",
		data: {
			style: {
				color: "#ffffff",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Here is your one-time passcode:" }
		}
	},
	block_BFLBa3q5y8kax9KngyXP65: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: "MONOSPACE",
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h1",
				text: "0123456"
			}
		}
	},
	block_4T7sDFb4rqbSyWjLGJKmov: {
		type: "Text",
		data: {
			style: {
				color: "#868686",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "This code will expire in 30 minutes." }
		}
	},
	block_Rvc8ZfTjfhXjpphHquJKvP: {
		type: "Text",
		data: {
			style: {
				color: "#868686",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Problems? Just reply to this email." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/order-ecommerce.ts
var order_ecommerce_exports = /* @__PURE__ */ __exportAll({ default: () => ORDER_ECOMMERCE });
var ORDER_ECOMMERCE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#FFFFFF",
			canvasColor: "#FFFFFF",
			textColor: "#333333",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block_Ei34o65X5XnD5dexNQgXh8",
				"block_SLut2hpFsy7U6SmhtLtWNU",
				"block_RrwLc5YMpHJGE5Xe9fAZVW",
				"block_FHCeHrN3XNaH7bu6HhjVNT",
				"block_3vynUg15EevMA6DiLsWJk2",
				"block_5eQPGdKJ6JQYXCD1MEaHbv",
				"block_WK3b19BzGE8VNKDwiSZ8s8",
				"block_Pe2Dm5Cbqq5CcjL5wEdMg4",
				"block_SizNWJDCcqw9tGH2ComdDX",
				"block_4Qxv32WQo8pDzPu1d3vixz",
				"block_LKiZYDTPeJGkRWHForFSDQ",
				"block_P6XtJj721vPfrhXKzS8uR5",
				"block_AKTwpjBmtevcfj82z52i8p"
			]
		}
	},
	block_PHe2XSbV4RvD76p21F3VdN: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: {
				level: "h2",
				text: "Unbranded Supply"
			}
		}
	},
	block_DeTzPQDerYjBEMkt6TuD41: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_PHe2XSbV4RvD76p21F3VdN"] }
		}
	},
	block_TPxZn2Fjxc7MwgXAEybxkV: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "#103571871" }
		}
	},
	block_5fuNN9F4uZRTGa4Hy5F4Nd: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_TPxZn2Fjxc7MwgXAEybxkV"] }
		}
	},
	block_Ei34o65X5XnD5dexNQgXh8: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_DeTzPQDerYjBEMkt6TuD41"] },
					{ childrenIds: ["block_5fuNN9F4uZRTGa4Hy5F4Nd"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_SLut2hpFsy7U6SmhtLtWNU: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Thank you for your purchase!"
			}
		}
	},
	block_RrwLc5YMpHJGE5Xe9fAZVW: {
		type: "Text",
		data: {
			style: {
				color: "#404040",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Hi Jordan,\n\nWe are preparing your package. Your tracking number will be generated once the package is ready to ship." }
		}
	},
	block_FHCeHrN3XNaH7bu6HhjVNT: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 40,
					left: 24,
					right: 24
				}
			},
			props: {
				buttonBackgroundColor: "#5696E5",
				buttonStyle: "rounded",
				buttonTextColor: "#FFFFFF",
				fullWidth: false,
				size: "large",
				text: "View your order",
				url: "https://example.usewaypoint.com/orders/103571871"
			}
		}
	},
	block_3vynUg15EevMA6DiLsWJk2: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Order summary"
			}
		}
	},
	block_Dvs2GYcF6SzfCYYNwfv1oM: {
		type: "Image",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				textAlign: "left"
			},
			props: {
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_FBfTeYhbdXtqYpCA/kiran-ck-6rXpQzfCYlw-unsplash.jpg",
				alt: "",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	block_KnMb2mQSf7nz8HXx6jyDUV: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_Dvs2GYcF6SzfCYYNwfv1oM"] }
		}
	},
	block_4sAeV4cLVKV8y4QFGV3Gf7: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 4,
					right: 4
				}
			},
			props: { childrenIds: ["block_KnMb2mQSf7nz8HXx6jyDUV"] }
		}
	},
	block_TBZZDHvoKHcW3j2nwQgmhC: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: { text: "Unbranded Pen x 5" }
		}
	},
	block_KqpmZUcZajsnFMbTMhizZs: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Black / Black ink" }
		}
	},
	block_92JgagxxVxzyfnbvj5iUUJ: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_9bNBgfiJJyh65pfsy1fu7e: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "($5.00)" }
		}
	},
	block_7JwR5SHM2Bfjihamh45tRL: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_GQ77o7MDMwj48B5nocEJNq: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_TBZZDHvoKHcW3j2nwQgmhC", "block_KqpmZUcZajsnFMbTMhizZs"] }
		}
	},
	block_6VvTYskm3BULZZEfYCkjwN: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$25.00" }
		}
	},
	block_V34TMZ9yg6t4xKMYfyD2Rk: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_6VvTYskm3BULZZEfYCkjwN"] }
		}
	},
	block_YBtUndjQaRuLFpEkgvjagk: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 0,
					bottom: 0,
					right: 0,
					left: 0
				}
			},
			props: {
				fixedWidths: [
					64,
					null,
					80
				],
				columnsCount: 3,
				columnsGap: 16,
				columns: [
					{ childrenIds: ["block_4sAeV4cLVKV8y4QFGV3Gf7"] },
					{ childrenIds: ["block_GQ77o7MDMwj48B5nocEJNq"] },
					{ childrenIds: ["block_V34TMZ9yg6t4xKMYfyD2Rk"] }
				]
			}
		}
	},
	block_XykBAUxf8awiR2CxBfNLZN: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_YBtUndjQaRuLFpEkgvjagk"] }
		}
	},
	block_9AvGGkcg4Rq93DmxXjXwEP: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_5eQPGdKJ6JQYXCD1MEaHbv: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: ["block_XykBAUxf8awiR2CxBfNLZN", "block_9AvGGkcg4Rq93DmxXjXwEP"] }
		}
	},
	block_Wnt477QxYNynetWGwkLg89: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_FnzMxssTraByh9FbbnJvRw: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Discount (BLKFRI)" }
		}
	},
	block_NyMsczQB7L3BKUa1RpUauu: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_FnzMxssTraByh9FbbnJvRw"] }
		}
	},
	block_AcbYK2jnr4sqG1GAbUHqNL: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$5.00" }
		}
	},
	block_BgHgpkAxq2qJUttN8pimnE: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_AcbYK2jnr4sqG1GAbUHqNL"] }
		}
	},
	block_2QEX1chf5uWU5ZZebf4gmu: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_NyMsczQB7L3BKUa1RpUauu"] },
					{ childrenIds: ["block_BgHgpkAxq2qJUttN8pimnE"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_Q87SYRrWCwfRa56q3qLBDG: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Subtotal" }
		}
	},
	block_QUNbV1p7f9qaSEvyLmnxmD: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_Q87SYRrWCwfRa56q3qLBDG"] }
		}
	},
	block_cF6MdfmbKisXytmfPU4QY: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$25.00" }
		}
	},
	block_4WkcuRqzqvTFvHGSBLGAAG: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_cF6MdfmbKisXytmfPU4QY"] }
		}
	},
	block_Lu666sTP6hqLkHiBThmm4G: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_QUNbV1p7f9qaSEvyLmnxmD"] },
					{ childrenIds: ["block_4WkcuRqzqvTFvHGSBLGAAG"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_GgUZQtnTQbiBFhMdJE5YYB: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Shipping" }
		}
	},
	block_XzjZ3cnqJrKrwubFwD4VSr: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_GgUZQtnTQbiBFhMdJE5YYB"] }
		}
	},
	block_ViKMzYtjFGRksFuzRn5rny: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$5.00" }
		}
	},
	block_AcDrP2ZMVByFU269wvMgtw: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_ViKMzYtjFGRksFuzRn5rny"] }
		}
	},
	block_Gn2h8bajFuW8zDBsiVVitV: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_XzjZ3cnqJrKrwubFwD4VSr"] },
					{ childrenIds: ["block_AcDrP2ZMVByFU269wvMgtw"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_64aQbVaGVuFmvjPfr9hend: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Taxes" }
		}
	},
	block_QTKa4AdGxtSbJmRY7ytjD8: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_64aQbVaGVuFmvjPfr9hend"] }
		}
	},
	block_H1MgkbcNH4sz8pMC2h4dVh: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$0.00" }
		}
	},
	block_Mi7A4sXfSXaEcjFV17WgSg: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_H1MgkbcNH4sz8pMC2h4dVh"] }
		}
	},
	block_2xkeWLDtTXj5jFg57KhfYR: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_QTKa4AdGxtSbJmRY7ytjD8"] },
					{ childrenIds: ["block_Mi7A4sXfSXaEcjFV17WgSg"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_QgSNshqbsUkk4FrRywjoRd: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_B5teSFiXFfpLmiB29c1WYF: {
		type: "Text",
		data: {
			style: {
				color: "#808080",
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Total" }
		}
	},
	block_DPodDUHaaLcYuAG3CQi1F7: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_B5teSFiXFfpLmiB29c1WYF"] }
		}
	},
	block_Wo7gkfj5QDqEiXywi6e2dq: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 21,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$30.00" }
		}
	},
	block_YABuGb9jY34Rywk4H2wmhu: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_Wo7gkfj5QDqEiXywi6e2dq"] }
		}
	},
	block_VvK99ZhLLgmycHQXKVFV7E: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 4,
					bottom: 4,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_DPodDUHaaLcYuAG3CQi1F7"] },
					{ childrenIds: ["block_YABuGb9jY34Rywk4H2wmhu"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_VhteQbJa7bCSmykN4AcHkp: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [
				"block_2QEX1chf5uWU5ZZebf4gmu",
				"block_Lu666sTP6hqLkHiBThmm4G",
				"block_Gn2h8bajFuW8zDBsiVVitV",
				"block_2xkeWLDtTXj5jFg57KhfYR",
				"block_QgSNshqbsUkk4FrRywjoRd",
				"block_VvK99ZhLLgmycHQXKVFV7E"
			] }
		}
	},
	block_WK3b19BzGE8VNKDwiSZ8s8: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				columnsCount: 2,
				columnsGap: 16,
				columns: [
					{ childrenIds: ["block_Wnt477QxYNynetWGwkLg89"] },
					{ childrenIds: ["block_VhteQbJa7bCSmykN4AcHkp"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_Pe2Dm5Cbqq5CcjL5wEdMg4: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 40,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Customer information"
			}
		}
	},
	block_2c68kHKvfEzD1DRVKqh4Pg: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: { text: "Shipping address" }
		}
	},
	block_SY5nL8mzSPgeEyeDgkDUEa: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "123 Main St New York, NY 10002" }
		}
	},
	block_ThQEcRPtSMqKiThzU9EGwV: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_2c68kHKvfEzD1DRVKqh4Pg", "block_SY5nL8mzSPgeEyeDgkDUEa"] }
		}
	},
	block_NkMSrWFvqewuenMYqLNcRa: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: { text: "Billing address" }
		}
	},
	block_7RTvDRNCQpM5xV6oXsCx6s: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "123 Main St New York, NY 10002" }
		}
	},
	block_KaHi1FBV64emMA3kb7x4vE: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_NkMSrWFvqewuenMYqLNcRa", "block_7RTvDRNCQpM5xV6oXsCx6s"] }
		}
	},
	block_SizNWJDCcqw9tGH2ComdDX: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_ThQEcRPtSMqKiThzU9EGwV"] },
					{ childrenIds: ["block_KaHi1FBV64emMA3kb7x4vE"] },
					{ childrenIds: [] }
				]
			}
		}
	},
	block_4Qxv32WQo8pDzPu1d3vixz: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 24,
					bottom: 8,
					left: 24,
					right: 24
				}
			},
			props: { text: "Shipping method" }
		}
	},
	block_LKiZYDTPeJGkRWHForFSDQ: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 48,
					left: 24,
					right: 24
				}
			},
			props: { text: "Ground – Standard" }
		}
	},
	block_P6XtJj721vPfrhXKzS8uR5: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_AKTwpjBmtevcfj82z52i8p: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "If you have any questions, just reply to this email." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/post-metrics-report.ts
var post_metrics_report_exports = /* @__PURE__ */ __exportAll({ default: () => POST_METRICS_REPORT });
var POST_METRICS_REPORT = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#EEEEEE",
			canvasColor: "#FFFFFF",
			textColor: "#242424",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block_6B5Ke1N2KdM4STQjw7eEHT",
				"block_VE1bKDbSqiYD9VtmmaYX7w",
				"block_QQqjnauXAixe2LnJXVmHwQ",
				"block_9yEYNZmmmFauyuSKi9iJA9",
				"block_AC6eRbFVSbXHVCg2zutkLu",
				"block_CYXkzjxrj6e4Sb74Kt8quM",
				"block_AUAxG2BgwA6XC8rF5xAaaP",
				"block_C1YvcFvMvzB1Fhxn3uV8zV",
				"block_FsiiokCgr9bZitHn7sx7TB",
				"block_DomD4MLJ58VcMo49vmeTH8"
			]
		}
	},
	block_6sP1Pi9AimAoti2ZPdNXUf: {
		type: "Image",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				textAlign: "left"
			},
			props: {
				height: 16,
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_n3eLjsf37dcjFaj5/Narrative.png",
				contentAlignment: "middle"
			}
		}
	},
	block_9G37m6eNPw2MpUj6SYGoq1: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_6sP1Pi9AimAoti2ZPdNXUf"] }
		}
	},
	block_A8GU16mV1RdP85jaszN7oj: {
		type: "Image",
		data: {
			style: {
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: {
				url: "https://ui-avatars.com/api/?name=John+Doe",
				alt: "Jordan"
			}
		}
	},
	block_4WmdbYU15yfdpYcYjsVDBA: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_A8GU16mV1RdP85jaszN7oj"] }
		}
	},
	block_JQAdLSAtvmfsRih13srJ8m: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_6B5Ke1N2KdM4STQjw7eEHT: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_9G37m6eNPw2MpUj6SYGoq1"] },
					{ childrenIds: ["block_4WmdbYU15yfdpYcYjsVDBA"] },
					{ childrenIds: ["block_JQAdLSAtvmfsRih13srJ8m"] }
				]
			}
		}
	},
	block_VE1bKDbSqiYD9VtmmaYX7w: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 24,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Last week, your posts received"
			}
		}
	},
	block_QQqjnauXAixe2LnJXVmHwQ: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 48,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: { text: "1,511" }
		}
	},
	block_9yEYNZmmmFauyuSKi9iJA9: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 0,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Post impressions" }
		}
	},
	block_AC6eRbFVSbXHVCg2zutkLu: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: {
				buttonBackgroundColor: "#24AF7F",
				buttonStyle: "rounded",
				buttonTextColor: "#FFFFFF",
				fullWidth: false,
				size: "medium",
				text: "View your analytics →",
				url: "https://example.usewaypoint.com/post/1234/analytics"
			}
		}
	},
	block_CYXkzjxrj6e4Sb74Kt8quM: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 24,
					bottom: 8,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Top performing post last week"
			}
		}
	},
	block_FpDmSnPwiVzBXUvTc4yWFh: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "So excited to now have drag and drop on Waypoint. This builds on top of our new Navigator feature that we shipped earlier this week 🚢." }
		}
	},
	block_LjuDF6uu4qWL3Ju3ng63ky: {
		type: "Container",
		data: {
			style: {
				backgroundColor: "#FAFAFA",
				borderColor: null,
				borderRadius: 8,
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: ["block_FpDmSnPwiVzBXUvTc4yWFh"] }
		}
	},
	block_AUAxG2BgwA6XC8rF5xAaaP: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: ["block_LjuDF6uu4qWL3Ju3ng63ky"] }
		}
	},
	block_C1YvcFvMvzB1Fhxn3uV8zV: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				buttonBackgroundColor: "#EEEEEE",
				buttonStyle: "rounded",
				buttonTextColor: "#474849",
				fullWidth: false,
				size: "medium",
				text: "Show more",
				url: "https://example.usewaypoint.com/jordanisip/posts"
			}
		}
	},
	block_FsiiokCgr9bZitHn7sx7TB: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 40,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_DomD4MLJ58VcMo49vmeTH8: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { text: "Questions? Just reply to this email." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/reservation-reminder.ts
var reservation_reminder_exports = /* @__PURE__ */ __exportAll({ default: () => RESERVATION_REMINDER });
var RESERVATION_REMINDER = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F5F5F5",
			canvasColor: "#FFFFFF",
			textColor: "#262626",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block_verification_code_1",
				"block_verification_code_2",
				"block_verification_code_3",
				"block_verification_code_4",
				"block_verification_code_5"
			]
		}
	},
	block_verification_code_1: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 32,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Your verification code is:" }
		}
	},
	block_verification_code_2: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: "MONOSPACE",
				fontWeight: "bold",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h1",
				text: "123456"
			}
		}
	},
	block_verification_code_3: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "This code will expire in 10 minutes." }
		}
	},
	block_verification_code_4: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "If you did not request this code, please ignore this email." }
		}
	},
	block_verification_code_5: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "center",
				padding: {
					top: 32,
					bottom: 32,
					left: 24,
					right: 24
				}
			},
			props: { text: "Problems? Just reply to this email." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/reset-password.ts
var reset_password_exports = /* @__PURE__ */ __exportAll({ default: () => RESET_PASSWORD });
var RESET_PASSWORD = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F2F5F7",
			canvasColor: "#FFFFFF",
			textColor: "#242424",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block_3gpSGmkgL4nWSBQjWCjK2z",
				"block_BjpQ7DGTtvaEuYRMd7VE7w",
				"block_xyg4GWmgGbJJEDRQc76bC",
				"block_76VptLCZ47t3EkAarUufEJ",
				"block_Gtk3kDYwsJqEmQf2XGWPRc",
				"block_LACDCzUS2bsvEbmnq1KHuW"
			]
		}
	},
	block_3gpSGmkgL4nWSBQjWCjK2z: {
		type: "Image",
		data: {
			style: {
				padding: {
					top: 24,
					bottom: 8,
					right: 24,
					left: 24
				},
				backgroundColor: null,
				textAlign: "left"
			},
			props: {
				height: 24,
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_Xh1R23U9ziyct9nd/codoc.png",
				alt: "",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	block_BjpQ7DGTtvaEuYRMd7VE7w: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 32,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h3",
				text: "Reset your password?"
			}
		}
	},
	block_xyg4GWmgGbJJEDRQc76bC: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 8,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: `If you didn't request a reset, don't worry. You can safely ignore this email.` }
		}
	},
	block_76VptLCZ47t3EkAarUufEJ: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 12,
					bottom: 32,
					right: 24,
					left: 24
				}
			},
			props: {
				buttonBackgroundColor: "#0068FF",
				buttonStyle: "rectangle",
				buttonTextColor: "#FFFFFF",
				fullWidth: false,
				size: "medium",
				text: "Change my password",
				url: "https://example.usewaypoint.com/reset_password?token=02938409809w8r09a83wr098aw0"
			}
		}
	},
	block_Gtk3kDYwsJqEmQf2XGWPRc: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_LACDCzUS2bsvEbmnq1KHuW: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 4,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { text: "Need help? Just reply to this email to contact support." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/respond-to-message.ts
var respond_to_message_exports = /* @__PURE__ */ __exportAll({ default: () => RESPOND_TO_MESSAGE });
var RESPOND_TO_MESSAGE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F0ECE5",
			canvasColor: "#F0ECE5",
			textColor: "#030303",
			fontFamily: "MODERN_SERIF",
			childrenIds: [
				"block_HjX7RN8eDEz7BLBHSQCNgU",
				"block_Jf65r5cUAnEzBfxnHKGa5S",
				"block_WmPDNHDpyHkygqjHuqF7St",
				"block_4VCKUvRMo7EbuMdN1VsdRw",
				"block_4siwziT4BkewmN55PpXvEu",
				"block_S9Rg9F3bGcviRyfMpoU5e4"
			]
		}
	},
	block_HjX7RN8eDEz7BLBHSQCNgU: {
		type: "Image",
		data: {
			style: { padding: {
				top: 8,
				bottom: 24,
				left: 24,
				right: 24
			} },
			props: {
				height: 32,
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_hW6RusynHUNTKoLm/boop.png",
				contentAlignment: "middle"
			}
		}
	},
	block_Jf65r5cUAnEzBfxnHKGa5S: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: null,
				textAlign: null,
				padding: {
					top: 16,
					bottom: 0,
					left: 24,
					right: 24
				}
			},
			props: {
				level: "h2",
				text: `Respond to Anna's Inquiry`
			}
		}
	},
	block_WmPDNHDpyHkygqjHuqF7St: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: null,
				textAlign: null,
				padding: {
					top: 8,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Dog boarding for Aug 1 - Aug 29." }
		}
	},
	block_95nkowWyi4p2VBiA46Eizs: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: "#faf9f9",
				fontSize: 21,
				fontFamily: null,
				fontWeight: null,
				textAlign: null,
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { text: "Any chance you can watch Emma again next month?" }
		}
	},
	block_4VCKUvRMo7EbuMdN1VsdRw: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: ["block_95nkowWyi4p2VBiA46Eizs"] }
		}
	},
	block_4siwziT4BkewmN55PpXvEu: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: null,
				textAlign: "left",
				padding: {
					top: 24,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: {
				buttonBackgroundColor: "#BE4F46",
				buttonTextColor: "#FFFFFF",
				size: "large",
				buttonStyle: "pill",
				text: "Respond",
				url: "http://example.usewaypoint.com/request/2334234",
				fullWidth: false
			}
		}
	},
	block_S9Rg9F3bGcviRyfMpoU5e4: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 16,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "You need 2 more walks to become a Super Walker on Boop!" }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/shopping-cart.ts
var shopping_cart_exports = /* @__PURE__ */ __exportAll({ default: () => SHOPPING_CART });
var SHOPPING_CART = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#e5e5e5",
			"canvasColor": "#FFFFFF",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"width": 600,
			"childrenIds": [
				"block-1770275493756-37",
				"block-1770275535167-38",
				"block-1770275553355-39",
				"block-1770275898535-45",
				"block-1770275684287-41",
				"block-1770275730130-42",
				"block-1770275764879-43",
				"block-1770275783365-1",
				"block-1770275836134-44",
				"block-1770276066682",
				"block-1770276401462-51",
				"block-1770276435739-52",
				"block-1770277312688-53",
				"block-1770277350249",
				"block-1770277429902-56",
				"block-1770277465574-57",
				"block-1770277487210-58",
				"block-1770277529866-59",
				"block-1770277563149-61",
				"block-1770277652502-63"
			]
		}
	},
	"block-1770275493756-37": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 44,
					"bottom": 40,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 160,
				"height": 27,
				"url": "https://social-media-marketing-test.sg.ufileos.com/61e73c38-d613-4a1a-a4dc-b0f13178eaed?Expires=2086152870&Signature=OToH7Mf2vZKHvwBRXJmZv7BKQ1E%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770275535167-38": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "HEY DON'T FORGET THIS"
			}
		}
	},
	"block-1770275553355-39": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontSize": 48,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "You lost this in "
			}
		}
	},
	"block-1770275684287-41": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 20,
					"bottom": 16,
					"right": 40,
					"left": 40
				}
			},
			"props": {
				"markdown": false,
				"text": "Looks like something amazing got left behind.You almost had it in your hands. Don't worry, your soon-to-be favorite piece of gear is still here—just waiting for you to make the final call."
			}
		}
	},
	"block-1770275730130-42": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/5387ea6d-4b5c-458d-9d83-1ea458df2af0?Expires=2085808534&Signature=Q5De4Egg5WkUWe7Z575UR4dhVQ0%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770275764879-43": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "$120 — CHALK WHITE"
			}
		}
	},
	"block-1770275783365-1": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 24,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Mini Disc Machine LL21"
			}
		}
	},
	"block-1770275836134-44": {
		"type": "Button",
		"data": {
			"style": {
				"fontSize": 16,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 24,
					"bottom": 48,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#1D4AF6",
				"buttonStyle": "rectangle",
				"size": "large",
				"text": "Claim your cart",
				"url": ""
			}
		}
	},
	"block-1770275898535-45": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#1D4AF6",
				"backgroundColor": null,
				"fontSize": 48,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "your cart."
			}
		}
	},
	"block-1770276066682": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 56,
				"right": 32,
				"left": 32
			} },
			"props": {
				"fixedWidths": [
					null,
					null,
					null,
					null
				],
				"columnsCount": 2,
				"columnsGap": 0,
				"columns": [{ "childrenIds": ["block-1770276071876-46"] }, { "childrenIds": ["block-1770276084076-47"] }]
			}
		}
	},
	"block-1770276071876-46": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/dfc2e754-684f-4c20-9588-a37d8dc9759d?Expires=2085808877&Signature=e%2FvJ8ZlCqUzDaOs6t6DI1e0IIz4%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770276084076-47": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#F6F6F6",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770276098295-48",
				"block-1770276100120-49",
				"block-1770276102615-50"
			] }
		}
	},
	"block-1770276098295-48": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontSize": 18,
				"fontWeight": "bold",
				"padding": {
					"top": 40,
					"bottom": 8,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Customer support"
			}
		}
	},
	"block-1770276100120-49": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Need help with your order? Our team is standing by, ready to answer any questions. Seriously, we've got you."
			}
		}
	},
	"block-1770276102615-50": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#1D4AF6",
				"fontSize": 16,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"padding": {
					"top": 32,
					"bottom": 28,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Contact support >"
			}
		}
	},
	"block-1770276401462-51": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 30,
				"fontFamily": "ORGANIC_SANS",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 8,
					"right": 48,
					"left": 48
				}
			},
			"props": {
				"markdown": false,
				"text": "What people are saying about the mini disc machine"
			}
		}
	},
	"block-1770276435739-52": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Real people, real obsessions—don't just take our word for it."
			}
		}
	},
	"block-1770277312688-53": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 20,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 114,
				"height": 19,
				"url": "https://social-media-marketing-test.sg.ufileos.com/52a767f2-14da-47eb-8963-85a290d42844?Expires=2085810120&Signature=0xo9oxy%2BBvoP8qRq1lHu07%2BA57I%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770277350249": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#202020",
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 32,
					"left": 32
				}
			},
			"props": {
				"markdown": false,
				"text": "“This Mini Disc Machine is like finding a unicorn in my living room. I didn't even know I needed it, but now I refuse to live without it. Seriously, it's THAT good.”"
			}
		}
	},
	"block-1770277414136-54": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "right"
			},
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/f91c3057-edb9-48e7-ba59-f866b579966d?Expires=2085810222&Signature=OetPwcuJvv1mg6MP7LIciZ%2FzYZE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770277427553-55": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Tina Fey"
			}
		}
	},
	"block-1770277429902-56": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 16,
				"right": 24,
				"left": 0
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770277414136-54"] }, { "childrenIds": ["block-1770277427553-55"] }]
			}
		}
	},
	"block-1770277465574-57": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 32,
				"left": 32
			} },
			"props": { "lineColor": "#D7D7D7" }
		}
	},
	"block-1770277487210-58": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 20,
					"bottom": 0,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 114,
				"height": 19,
				"url": "https://social-media-marketing-test.sg.ufileos.com/52a767f2-14da-47eb-8963-85a290d42844?Expires=2085810120&Signature=0xo9oxy%2BBvoP8qRq1lHu07%2BA57I%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770277529866-59": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 16,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 32,
					"left": 32
				}
			},
			"props": {
				"markdown": false,
				"text": "“Let me tell you, I haven't been this excited since I found my first iPod. This thing is so slick, it makes me feel like I'm in the future. And trust me, the future is fancy.”"
			}
		}
	},
	"block-1770277548286-60": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "right"
			},
			"props": {
				"url": "https://social-media-marketing-test.sg.ufileos.com/c42fc6b0-4a52-4ec9-a50d-9a43c94bfa11?Expires=2085810354&Signature=s0UnGZrhNktPY0gsXmcbM%2B0rdvE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770277563149-62": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontWeight": "normal",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Jim Gaffigan"
			}
		}
	},
	"block-1770277563149-61": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 8,
				"bottom": 48,
				"right": 52,
				"left": 0
			} },
			"props": {
				"fixedWidths": [
					null,
					null,
					null,
					null
				],
				"columnsCount": 2,
				"columnsGap": 12,
				"columns": [{ "childrenIds": ["block-1770277548286-60"] }, { "childrenIds": ["block-1770277563149-62"] }]
			}
		}
	},
	"block-1770277652502-63": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#E8E0D4",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770277730975-66",
				"block-1770277661469-65",
				"block-1770277655991-64"
			] }
		}
	},
	"block-1770277655991-64": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#4F4A42",
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 12,
					"bottom": 8,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "©2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	},
	"block-1770277661469-65": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "origin-colorful",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770277730975-66": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#4F4A42",
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Terms and Conditions I Unsubscribe I FAQ"
			}
		}
	},
	"block-1770277757314-67": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770277730975-66"] }, { "childrenIds": ["block-1770277655991-64"] }]
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/subscription-receipt.ts
var subscription_receipt_exports = /* @__PURE__ */ __exportAll({ default: () => SUBSCRIPTION_RECEIPT });
var SUBSCRIPTION_RECEIPT = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F5F5F5",
			canvasColor: "#F5F5F5",
			textColor: "#242424",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block_URcE7RiYB227zNraU1Nujd",
				"block_TisRUSez8uPYr6bgHLKQeg",
				"block_UQHMPb5NFLrY9PkWUckmHb",
				"block_FLTQdJVBNsmRxurTZTSC2V",
				"block_Qq64GeHw7K24Fgz5oX81kt"
			]
		}
	},
	block_DNGbxXXMnwkRrecLDTP6VR: {
		type: "Image",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				textAlign: "left"
			},
			props: {
				height: 18,
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_9TcdHLq5SpEkRADB/REMIX.png",
				alt: "Remix",
				linkHref: "https://remix.example.com",
				contentAlignment: "middle"
			}
		}
	},
	block_ULKdXApwJ1dsJCa5fntAXV: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_DNGbxXXMnwkRrecLDTP6VR"] }
		}
	},
	block_FBxe99baQhH1dptybLYVrF: {
		type: "Button",
		data: {
			style: {
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: {
				buttonBackgroundColor: "#FFFFFF",
				buttonStyle: "pill",
				buttonTextColor: "#242424",
				fullWidth: false,
				size: "medium",
				text: "Sign in",
				url: "https://remix.example.com/dashboard"
			}
		}
	},
	block_WDjxjPcraFGwiBHj5vjhdV: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_FBxe99baQhH1dptybLYVrF"] }
		}
	},
	block_JUxxjtK5TSUk9MV6Rtra4Q: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_URcE7RiYB227zNraU1Nujd: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: "#f5f5f5",
				padding: {
					top: 16,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_ULKdXApwJ1dsJCa5fntAXV"] },
					{ childrenIds: ["block_WDjxjPcraFGwiBHj5vjhdV"] },
					{ childrenIds: ["block_JUxxjtK5TSUk9MV6Rtra4Q"] }
				]
			}
		}
	},
	block_9mYZ55v7d29WRjNgPf5cuw: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Receipt from Remix Studios, Inc." }
		}
	},
	block_R5vyrdxj7v4FqyFbQ7iDBM: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: {
				level: "h1",
				text: "$99.75"
			}
		}
	},
	block_7vHVGWiRQYr8sigcW9nJvD: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Paid August 1, 2023" }
		}
	},
	block_AL2uK2hkvCnaT6JtDuvE5n: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_ADvJa3qqbBH1TB84VxbFwC: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Download receipt" }
		}
	},
	block_9NpGWp5DnLHA2gbTUzsWHX: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [
				"block_9mYZ55v7d29WRjNgPf5cuw",
				"block_R5vyrdxj7v4FqyFbQ7iDBM",
				"block_7vHVGWiRQYr8sigcW9nJvD",
				"block_AL2uK2hkvCnaT6JtDuvE5n",
				"block_ADvJa3qqbBH1TB84VxbFwC"
			] }
		}
	},
	block_FMRV8DJAAWqpoJta6ivKEe: {
		type: "Image",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				textAlign: "right"
			},
			props: {
				url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_8yUGBZcXaAtTEofB/invoice-skeleton.png",
				alt: "Your invoice has been paid.",
				linkHref: "http://remix.example.com/receipt/1923-2093",
				contentAlignment: "middle"
			}
		}
	},
	block_SGQxVVB8bXVmVg9NyDY3Fu: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_FMRV8DJAAWqpoJta6ivKEe"] }
		}
	},
	block_KY8rgT1mqUBiCm2uranpvx: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_4TVeBRBPut2oZoQpG9FV4J: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_9NpGWp5DnLHA2gbTUzsWHX"] },
					{ childrenIds: ["block_SGQxVVB8bXVmVg9NyDY3Fu"] },
					{ childrenIds: ["block_KY8rgT1mqUBiCm2uranpvx"] }
				]
			}
		}
	},
	block_67EyoqnbtLAHWXiobN39NX: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Receipt number" }
		}
	},
	block_UCrU3np77mWqQgTfYHG1NL: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_67EyoqnbtLAHWXiobN39NX"] }
		}
	},
	block_LQ93SUN8XxG6uaLbGpsAx1: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "1923-2093" }
		}
	},
	block_6KX5ggTcFs5ckbt9wZppac: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_LQ93SUN8XxG6uaLbGpsAx1"] }
		}
	},
	block_AsFj6GNHWFUhG6GgM7Ww9r: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_SfGDZ1NhRmtjFJS6qs4Zpc: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_UCrU3np77mWqQgTfYHG1NL"] },
					{ childrenIds: ["block_6KX5ggTcFs5ckbt9wZppac"] },
					{ childrenIds: ["block_AsFj6GNHWFUhG6GgM7Ww9r"] }
				]
			}
		}
	},
	block_6UhQGq7NwSAhRog8yRYjJo: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Invoice number" }
		}
	},
	block_F3FdxCgPYxnH8SYgFgBsuY: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_6UhQGq7NwSAhRog8yRYjJo"] }
		}
	},
	block_L5on9HCEU6BRvx25RBRgS2: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "2ABC1234-20923" }
		}
	},
	block_WrzeLHiJs9VnXSkLXXD5ED: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_L5on9HCEU6BRvx25RBRgS2"] }
		}
	},
	block_Wb8pxrh2frxYZWM6hmfc5L: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_XiNoAViyVVEWafdMW4x4TL: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_F3FdxCgPYxnH8SYgFgBsuY"] },
					{ childrenIds: ["block_WrzeLHiJs9VnXSkLXXD5ED"] },
					{ childrenIds: ["block_Wb8pxrh2frxYZWM6hmfc5L"] }
				]
			}
		}
	},
	block_LbwZcoeGigXpK4PTVTyZ8E: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Payment method" }
		}
	},
	block_ETbxLryzrgoKbVBnw1ieyi: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_LbwZcoeGigXpK4PTVTyZ8E"] }
		}
	},
	block_P8fn3PavFZVTrEwufKHKEF: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "VISA – 4252" }
		}
	},
	block_2Bx6KDcv1nT4hPiQ8Eabfv: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_P8fn3PavFZVTrEwufKHKEF"] }
		}
	},
	block_WSzbB3PKqRUxCuUqp9wuK6: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_NYNuDnrs6ZnZ6kj927yv7W: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_ETbxLryzrgoKbVBnw1ieyi"] },
					{ childrenIds: ["block_2Bx6KDcv1nT4hPiQ8Eabfv"] },
					{ childrenIds: ["block_WSzbB3PKqRUxCuUqp9wuK6"] }
				]
			}
		}
	},
	block_TisRUSez8uPYr6bgHLKQeg: {
		type: "Container",
		data: {
			style: {
				backgroundColor: "#ffffff",
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 16,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: [
				"block_4TVeBRBPut2oZoQpG9FV4J",
				"block_SfGDZ1NhRmtjFJS6qs4Zpc",
				"block_XiNoAViyVVEWafdMW4x4TL",
				"block_NYNuDnrs6ZnZ6kj927yv7W"
			] }
		}
	},
	block_UQHMPb5NFLrY9PkWUckmHb: {
		type: "Spacer",
		data: { props: { height: 24 } }
	},
	block_RNsVmDsY33ipzGLtRUsYys: {
		type: "Heading",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: {
				level: "h3",
				text: "Receipt #1923-2093"
			}
		}
	},
	block_Y7W2h9xDuNreQdgMrv82KZ: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 16,
					bottom: 16,
					left: 0,
					right: 0
				}
			},
			props: { text: `JULY 10, 2023 – AUGUST 1, 2023` }
		}
	},
	block_4m1h6Xzhvi9oDrFMgWajjH: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Remix Pro" }
		}
	},
	block_7egXzHguX1zPm5CwYiKuPh: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 8,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "5 seats" }
		}
	},
	block_WbxCFjDKk1Ev11prfgLhvX: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_4m1h6Xzhvi9oDrFMgWajjH", "block_7egXzHguX1zPm5CwYiKuPh"] }
		}
	},
	block_FUaNAn8h7DzU7kVzeFqsug: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$99.75" }
		}
	},
	block_9gDnB1o17vBrS4usmyAVUr: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_FUaNAn8h7DzU7kVzeFqsug"] }
		}
	},
	block_5wDvatGEixESNpVrjWbAGi: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_KFadGhRvS4kHVRr41XMiRs: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_WbxCFjDKk1Ev11prfgLhvX"] },
					{ childrenIds: ["block_9gDnB1o17vBrS4usmyAVUr"] },
					{ childrenIds: ["block_5wDvatGEixESNpVrjWbAGi"] }
				]
			}
		}
	},
	block_3rTWcrZLSt1nnCYW5BdiU9: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_CSV8NQS6gBMQcFXvFAFo3Q: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_KFadGhRvS4kHVRr41XMiRs", "block_3rTWcrZLSt1nnCYW5BdiU9"] }
		}
	},
	block_XZZUC61s2jBfaMfjcFYSo2: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Total" }
		}
	},
	block_LfhgxAyqkNPTGubxqYJNZ5: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_XZZUC61s2jBfaMfjcFYSo2"] }
		}
	},
	block_MsXkdwkAWAbvJ5EcwvqSqv: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$99.75" }
		}
	},
	block_PiKRrj91HQKM1qUW4gDJt1: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_MsXkdwkAWAbvJ5EcwvqSqv"] }
		}
	},
	block_WhzFAeoTPhhgNcG9rdcd4K: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_LJcwZCh6z1EyFeeKH8Egts: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_LfhgxAyqkNPTGubxqYJNZ5"] },
					{ childrenIds: ["block_PiKRrj91HQKM1qUW4gDJt1"] },
					{ childrenIds: ["block_WhzFAeoTPhhgNcG9rdcd4K"] }
				]
			}
		}
	},
	block_HSbX9aqHvSXw9GAB361vpM: {
		type: "Divider",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				lineHeight: 1,
				lineColor: "#EEEEEE"
			}
		}
	},
	block_3of5ne4hc1PFiSKHz59FP8: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "left",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "Amount paid" }
		}
	},
	block_GTPnMRuHqf1bCLk8VLAr4z: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_3of5ne4hc1PFiSKHz59FP8"] }
		}
	},
	block_XvojX8xDiQRr4VNHDwtyXZ: {
		type: "Text",
		data: {
			style: {
				color: null,
				backgroundColor: null,
				fontSize: 14,
				fontFamily: null,
				fontWeight: "bold",
				textAlign: "right",
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { text: "$99.75" }
		}
	},
	block_LbEheyx16SX5S8GK2zY3sJ: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: ["block_XvojX8xDiQRr4VNHDwtyXZ"] }
		}
	},
	block_M6BwLBjomRNsdee4rdoA4y: {
		type: "Container",
		data: {
			style: {
				backgroundColor: null,
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			props: { childrenIds: [] }
		}
	},
	block_DUQnBfK11aHN7ZypDPfeug: {
		type: "ColumnsContainer",
		data: {
			style: {
				backgroundColor: null,
				padding: {
					top: 8,
					bottom: 8,
					left: 0,
					right: 0
				}
			},
			props: {
				columnsCount: 2,
				columns: [
					{ childrenIds: ["block_GTPnMRuHqf1bCLk8VLAr4z"] },
					{ childrenIds: ["block_LbEheyx16SX5S8GK2zY3sJ"] },
					{ childrenIds: ["block_M6BwLBjomRNsdee4rdoA4y"] }
				]
			}
		}
	},
	block_FLTQdJVBNsmRxurTZTSC2V: {
		type: "Container",
		data: {
			style: {
				backgroundColor: "#ffffff",
				borderColor: null,
				borderRadius: null,
				padding: {
					top: 16,
					bottom: 24,
					left: 24,
					right: 24
				}
			},
			props: { childrenIds: [
				"block_RNsVmDsY33ipzGLtRUsYys",
				"block_Y7W2h9xDuNreQdgMrv82KZ",
				"block_CSV8NQS6gBMQcFXvFAFo3Q",
				"block_LJcwZCh6z1EyFeeKH8Egts",
				"block_HSbX9aqHvSXw9GAB361vpM",
				"block_DUQnBfK11aHN7ZypDPfeug"
			] }
		}
	},
	block_Qq64GeHw7K24Fgz5oX81kt: {
		type: "Text",
		data: {
			style: {
				color: "#474849",
				backgroundColor: null,
				fontSize: 12,
				fontFamily: null,
				fontWeight: "normal",
				textAlign: "left",
				padding: {
					top: 24,
					bottom: 16,
					left: 24,
					right: 24
				}
			},
			props: { text: "Can we help? Just reply to this email." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/unsubscribed-resubscribe.ts
var unsubscribed_resubscribe_exports = /* @__PURE__ */ __exportAll({ default: () => UNSUBSCRIBED_RESUBSCRIBE });
var UNSUBSCRIBED_RESUBSCRIBE = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F5F5F5",
			canvasColor: "#FFFFFF",
			textColor: "#262626",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"icon-block",
				"title-block",
				"message-block",
				"resubscribe-button-block",
				"divider-block",
				"footer-block"
			]
		}
	},
	"icon-block": {
		type: "Image",
		data: {
			style: { padding: {
				top: 48,
				bottom: 24,
				left: 24,
				right: 24
			} },
			props: {
				url: null,
				alt: "Unsubscribed",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	"title-block": {
		type: "Heading",
		data: {
			style: {
				padding: {
					top: 24,
					bottom: 16,
					right: 24,
					left: 24
				},
				textAlign: "center"
			},
			props: {
				text: "You've Been Unsubscribed",
				level: "h2"
			}
		}
	},
	"message-block": {
		type: "Text",
		data: {
			style: {
				padding: {
					top: 8,
					bottom: 16,
					right: 24,
					left: 24
				},
				textAlign: "center",
				color: "#666666"
			},
			props: { text: "We're sorry to see you go. You have been successfully unsubscribed from our email communications." }
		}
	},
	"resubscribe-button-block": {
		type: "Button",
		data: {
			style: { padding: {
				top: 24,
				bottom: 24,
				right: 24,
				left: 24
			} },
			props: {
				buttonBackgroundColor: "#0068FF",
				buttonStyle: "rectangle",
				buttonTextColor: "#FFFFFF",
				fullWidth: false,
				size: "medium",
				text: "Subscribe Again",
				url: ""
			}
		}
	},
	"divider-block": {
		type: "Divider",
		data: {
			style: { padding: {
				top: 16,
				bottom: 16,
				left: 24,
				right: 24
			} },
			props: {
				lineHeight: 1,
				lineColor: "#E0E0E0"
			}
		}
	},
	"footer-block": {
		type: "Text",
		data: {
			style: {
				padding: {
					top: 16,
					bottom: 48,
					right: 24,
					left: 24
				},
				textAlign: "center",
				fontSize: 12,
				color: "#999999"
			},
			props: { text: "Need help? Reply to this email or contact our support team." }
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/welcome-alt.ts
var welcome_alt_exports = /* @__PURE__ */ __exportAll({ default: () => WELCOME_ALT });
var WELCOME_ALT = {
	"root": {
		"type": "EmailLayout",
		"data": {
			"backdropColor": "#f4eeda",
			"canvasColor": "#FDFBF3",
			"textColor": "#262626",
			"fontFamily": "MODERN_SANS",
			"childrenIds": [
				"block-1770714384970-294",
				"block-1770714409575-295",
				"block-1770714423723-296",
				"block-1770714448585-297",
				"block-1770714537542-298",
				"block-1770714555433-299",
				"block-1770714571453-300",
				"block-1770714618991-302",
				"block-1770714714991-307",
				"block-1770714813800-312",
				"block-1770715079432-326",
				"block-1770715094414-327",
				"block-1770715113059-328",
				"block-1770715134130-329"
			]
		}
	},
	"block-1770714384970-294": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 44,
					"bottom": 40,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 143,
				"height": 22,
				"url": "https://social-media-marketing-test.sg.ufileos.com/61e73c38-d613-4a1a-a4dc-b0f13178eaed?Expires=2086152870&Signature=OToH7Mf2vZKHvwBRXJmZv7BKQ1E%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714409575-295": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 28,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": " A warm welcome to"
			}
		}
	},
	"block-1770714423723-296": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#F8632C",
				"fontSize": 42,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "company name"
			}
		}
	},
	"block-1770714448585-297": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				},
				"textAlign": "center"
			},
			"props": {
				"width": 476,
				"height": 423,
				"url": "https://social-media-marketing-test.sg.ufileos.com/b922b719-b955-4656-b226-69fa952a6bc4?Expires=2086247320&Signature=QIQCIsaPp%2FeqYHfKizmlLB5TNiM%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714537542-298": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#F8632C",
				"fontSize": 18,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Hi [Name],"
			}
		}
	},
	"block-1770714555433-299": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 36,
					"left": 36
				}
			},
			"props": {
				"markdown": false,
				"text": "Thanks for joining uSpeedo — you’ve just taken a great step forward!Whether you’re here to boost global communication or scale your marketing reach, our service is designed to make your cross-border messaging faster, more reliable, and easier to manage."
			}
		}
	},
	"block-1770714571453-300": {
		"type": "Divider",
		"data": {
			"style": { "padding": {
				"top": 28,
				"bottom": 28,
				"right": 36,
				"left": 36
			} },
			"props": {
				"lineColor": "#F8632C",
				"lineHeight": 3
			}
		}
	},
	"block-1770714601598-301": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "right"
			},
			"props": {
				"width": 224,
				"height": 275,
				"url": "https://social-media-marketing-test.sg.ufileos.com/735963fd-af66-4cd5-9113-8c1696cfc6f0?Expires=2086247408&Signature=boARouNkPkxtYYqtkh6lSvhnLi4%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714618991-303": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 26,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Direct Search Services"
			}
		}
	},
	"block-1770714618991-302": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 44,
				"right": 40,
				"left": 40
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": [
					"block-1770714618991-303",
					"block-1770714630162-304",
					"block-1770714662256-305"
				] }, { "childrenIds": ["block-1770714601598-301"] }]
			}
		}
	},
	"block-1770714630162-304": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontSize": 12,
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Hourly-Based Recruitment SupportDigital HeadhuntingDirect Search ServicesEmployer BrandingOutsourced RecruitmentBig Data Search Technology"
			}
		}
	},
	"block-1770714662256-305": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#F8632C",
				"text": "Get Started",
				"url": ""
			}
		}
	},
	"block-1770714705926-306": {
		"type": "Image",
		"data": {
			"style": { "padding": {
				"top": 0,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"width": 224,
				"height": 275,
				"url": "https://social-media-marketing-test.sg.ufileos.com/c2a93b7e-acad-4e27-97ce-0a34a0cc6917?Expires=2086247509&Signature=6UPXvhMmNRrWVpcW1d89DP40KpE%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714714991-308": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 26,
				"fontWeight": "bold",
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Outsourced recruitment"
			}
		}
	},
	"block-1770714714991-307": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 44,
				"right": 36,
				"left": 36
			} },
			"props": {
				"columnsCount": 2,
				"columnsGap": 16,
				"columns": [{ "childrenIds": ["block-1770714705926-306"] }, { "childrenIds": [
					"block-1770714714991-308",
					"block-1770714734782-309",
					"block-1770714771806-311"
				] }]
			}
		}
	},
	"block-1770714734782-309": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#666666",
				"fontSize": 12,
				"fontWeight": "normal",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Hourly-Based Recruitment SupportDigital HeadhuntingDirect Search ServicesEmployer BrandingOutsourced RecruitmentBig Data Search Technology"
			}
		}
	},
	"block-1770714771806-311": {
		"type": "Button",
		"data": {
			"style": { "padding": {
				"top": 16,
				"bottom": 0,
				"right": 0,
				"left": 0
			} },
			"props": {
				"buttonBackgroundColor": "#F8632C",
				"text": "Get Started",
				"url": ""
			}
		}
	},
	"block-1770714813800-312": {
		"type": "ColumnsContainer",
		"data": {
			"style": { "padding": {
				"top": 20,
				"bottom": 16,
				"right": 36,
				"left": 36
			} },
			"props": {
				"fixedWidths": [
					null,
					null,
					null,
					null
				],
				"columnsCount": 3,
				"columnsGap": 16,
				"columns": [
					{ "childrenIds": ["block-1770714823674-313"] },
					{ "childrenIds": ["block-1770714824987-314"] },
					{ "childrenIds": ["block-1770714826318-315"] }
				]
			}
		}
	},
	"block-1770714823674-313": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#FFF0DB",
				"borderRadius": 12,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 12,
					"left": 12
				}
			},
			"props": { "childrenIds": [
				"block-1770714841242-316",
				"block-1770714902272-319",
				"block-1770714907438-320"
			] }
		}
	},
	"block-1770714824987-314": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#FFF0DB",
				"borderRadius": 12,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 12,
					"left": 12
				}
			},
			"props": { "childrenIds": [
				"block-1770714848980-317",
				"block-1770714943103-321",
				"block-1770714944814-322"
			] }
		}
	},
	"block-1770714826318-315": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#FFF0DB",
				"borderRadius": 12,
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 12,
					"left": 12
				}
			},
			"props": { "childrenIds": [
				"block-1770714855753-318",
				"block-1770715020730-324",
				"block-1770715022181-325"
			] }
		}
	},
	"block-1770714841242-316": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 60,
				"height": 60,
				"url": "https://social-media-marketing-test.sg.ufileos.com/a559db11-0a4d-494e-a6b8-ee266ff08863?Expires=2086247647&Signature=JOTwfWRLD9eGnFOd8QA38oU%2FH9I%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714848980-317": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 60,
				"height": 60,
				"url": "https://social-media-marketing-test.sg.ufileos.com/afdda7fe-3203-49da-9a8d-676fb17ca9bc?Expires=2086247654&Signature=S6yYOnGcgLUh5o8Fx4zscrejw44%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714855753-318": {
		"type": "Image",
		"data": {
			"style": {
				"padding": {
					"top": 0,
					"bottom": 0,
					"right": 0,
					"left": 0
				},
				"textAlign": "center"
			},
			"props": {
				"width": 60,
				"height": 60,
				"url": "https://social-media-marketing-test.sg.ufileos.com/a351e8db-9848-47dc-9cdb-d8c69782818b?Expires=2086247660&Signature=gNqOmb4eRGRVxA9VlXSnrP8NupU%3D&UCloudPublicKey=TOKEN_8d2a1be4-ca78-4495-aa18-4d1325bcaee7",
				"alt": "Sample product",
				"linkHref": null,
				"contentAlignment": "middle"
			}
		}
	},
	"block-1770714902272-319": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 16,
					"left": 16
				}
			},
			"props": {
				"markdown": false,
				"text": "Global coverage"
			}
		}
	},
	"block-1770714907438-320": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#775438",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Reliable messaging across 200+ countries and regions."
			}
		}
	},
	"block-1770714943103-321": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "High-speed delivery"
			}
		}
	},
	"block-1770714944814-322": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#775438",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 8,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Fast, stable, and high-conversion communication."
			}
		}
	},
	"block-1770715020730-324": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Secure & easy to use"
			}
		}
	},
	"block-1770715022181-325": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#775438",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 28,
					"right": 0,
					"left": 0
				}
			},
			"props": {
				"markdown": false,
				"text": "Simple dashboard, full privacy protection."
			}
		}
	},
	"block-1770715079432-326": {
		"type": "Text",
		"data": {
			"style": {
				"fontSize": 26,
				"fontWeight": "bold",
				"textAlign": "center",
				"padding": {
					"top": 32,
					"bottom": 8,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "Manage your recruitment from your hand"
			}
		}
	},
	"block-1770715094414-327": {
		"type": "Text",
		"data": {
			"style": {
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 80,
					"left": 80
				}
			},
			"props": {
				"markdown": false,
				"text": "Digital and all-encompassing recruitment services tailored to your needs"
			}
		}
	},
	"block-1770715113059-328": {
		"type": "Button",
		"data": {
			"style": {
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 48,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"buttonBackgroundColor": "#F8632C",
				"text": "Get Started",
				"url": ""
			}
		}
	},
	"block-1770715134130-329": {
		"type": "Container",
		"data": {
			"style": {
				"backgroundColor": "#F8632C",
				"padding": {
					"top": 16,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": { "childrenIds": [
				"block-1770715161814-330",
				"block-1770715168784-331",
				"block-1770715174880-332"
			] }
		}
	},
	"block-1770715161814-330": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 16,
					"bottom": 0,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "©2026 Grain 1725 Slough Avenue Scranton, PA"
			}
		}
	},
	"block-1770715168784-331": {
		"type": "Socials",
		"data": {
			"props": {
				"platforms": [
					"facebook",
					"instagram",
					"x"
				],
				"iconStyle": "no-border-white",
				"iconSize": 36,
				"socials": [
					{
						"platform": "facebook",
						"url": null
					},
					{
						"platform": "instagram",
						"url": null
					},
					{
						"platform": "x",
						"url": null
					}
				]
			},
			"style": { "padding": {
				"top": 16,
				"bottom": 16,
				"right": 24,
				"left": 24
			} }
		}
	},
	"block-1770715174880-332": {
		"type": "Text",
		"data": {
			"style": {
				"color": "#ffffff",
				"fontSize": 12,
				"fontWeight": "normal",
				"textAlign": "center",
				"padding": {
					"top": 0,
					"bottom": 16,
					"right": 24,
					"left": 24
				}
			},
			"props": {
				"markdown": false,
				"text": "Terms and Conditions I Unsubscribe I FAQ"
			}
		}
	}
};
//#endregion
//#region src/getConfiguration/sample/welcome.ts
var welcome_exports = /* @__PURE__ */ __exportAll({ default: () => WELCOME });
var WELCOME = {
	root: {
		type: "EmailLayout",
		data: {
			backdropColor: "#F2F5F7",
			canvasColor: "#FFFFFF",
			textColor: "#242424",
			fontFamily: "MODERN_SANS",
			childrenIds: [
				"block-1709571212684",
				"block-1709571228545",
				"block-1709571234315",
				"block-1709571247550",
				"block-1709571258507",
				"block-1709571281151",
				"block-1709571302968",
				"block-1709571282795"
			]
		}
	},
	"block-1709571212684": {
		type: "Image",
		data: {
			style: { padding: {
				top: 24,
				bottom: 24,
				right: 24,
				left: 24
			} },
			props: {
				url: null,
				alt: "Logo",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	"block-1709571228545": {
		type: "Text",
		data: {
			style: {
				fontWeight: "normal",
				padding: {
					top: 0,
					bottom: 16,
					right: 24,
					left: 24
				}
			},
			props: { text: "Hi Anna 👋," }
		}
	},
	"block-1709571234315": {
		type: "Text",
		data: {
			style: {
				fontWeight: "normal",
				padding: {
					top: 0,
					bottom: 16,
					right: 24,
					left: 24
				}
			},
			props: { text: "Welcome to Marketbase! Marketbase is how teams within fast growing marketplaces effortlessly monitor conversations to prevent disintermediation, identify problematic users, and increase trust & safety within their community." }
		}
	},
	"block-1709571247550": {
		type: "Text",
		data: {
			style: {
				fontWeight: "normal",
				padding: {
					top: 0,
					bottom: 16,
					right: 24,
					left: 24
				}
			},
			props: { text: "Best of all, you can connect your existing messaging services in minutes:" }
		}
	},
	"block-1709571258507": {
		type: "Image",
		data: {
			style: { padding: {
				top: 16,
				bottom: 16,
				right: 24,
				left: 24
			} },
			props: {
				url: null,
				alt: "Video thumbnail",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	"block-1709571281151": {
		type: "Text",
		data: {
			style: {
				fontWeight: "normal",
				padding: {
					top: 16,
					bottom: 16,
					right: 24,
					left: 24
				}
			},
			props: { text: "If you ever need help, just reply to this email and one of us will get back to you shortly. We’re here to help." }
		}
	},
	"block-1709571282795": {
		type: "Image",
		data: {
			style: { padding: {
				top: 16,
				bottom: 40,
				right: 24,
				left: 24
			} },
			props: {
				url: null,
				alt: "Illustration",
				linkHref: null,
				contentAlignment: "middle"
			}
		}
	},
	"block-1709571302968": {
		type: "Button",
		data: {
			style: {
				fontSize: 14,
				padding: {
					top: 16,
					bottom: 24,
					right: 24,
					left: 24
				}
			},
			props: {
				buttonBackgroundColor: "#0079cc",
				buttonStyle: "rectangle",
				text: "Open dashboard",
				url: ""
			}
		}
	}
};
//#endregion
export { basic_template_exports as _, shopping_cart_exports as a, reservation_reminder_exports as c, one_time_passcode_exports as d, newsletter_with_unsubscribe_exports as f, education_exports as g, invite_to_event_exports as h, subscription_receipt_exports as i, post_metrics_report_exports as l, mothers_day_exports as m, welcome_alt_exports as n, respond_to_message_exports as o, new_product_launch_exports as p, unsubscribed_resubscribe_exports as r, reset_password_exports as s, welcome_exports as t, order_ecommerce_exports as u, EMPTY_EMAIL_MESSAGE as v };
