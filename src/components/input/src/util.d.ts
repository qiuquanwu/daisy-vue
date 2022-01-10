export declare function lengthOf(str: string): number;
export declare function sliceStr(str: number | string, min: number, max: number): string;
/**
 * 直接截取value到指定的精度
 * @param {number} value
 * @param {number} precision
 */
export declare function valueToFixed(value: string | number, precision: number): string;
interface TextareaHeight {
  minHeight?: string;
  height?: string;
}
export declare const calcTextareaHeight: (ele: HTMLTextAreaElement, minRows?: number, maxRows?: any) => TextareaHeight;
export {};
