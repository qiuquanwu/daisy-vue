import { isPlainObject, isArray, isFunction, NOOP, isString } from '@vue/shared';
/**
 * whether the object is a Regular Expression
 * @param {Object} object the given object
 * @return {Boolean}
 */
export declare function isRegExp(value: string): boolean;
export declare const isServer: boolean;
export declare const isBool: (val: unknown) => boolean;
export declare const isHTMLElement: (val: unknown) => boolean;
export { isArray, isPlainObject, isFunction, isString, NOOP };
/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
export declare function debounce(fn: (...args: any[]) => unknown, delay: number): typeof fn;
/**
 * return a throttle version of the function
 */
export declare function throttle(fn: (...args: any[]) => unknown, limit: number): typeof fn;
export declare function flatten<T>(list: any[]): T[];
