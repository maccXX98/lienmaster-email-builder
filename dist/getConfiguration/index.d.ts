export default function getConfiguration(template: string): any;
export declare function loadSampleTemplate(sampleName: string): Promise<any>;
/**
 * 将 JSON 配置转换为 hash URL
 * @param config - 邮件模板配置 JSON
 * @param format - 编码格式：'json' (URL 编码) 或 'code' (base64 编码，更短但需要编码)
 * @returns hash URL，例如: #json/... 或 #code/...
 */
export declare function configToHash(config: any, format?: 'json' | 'code'): string;
//# sourceMappingURL=index.d.ts.map