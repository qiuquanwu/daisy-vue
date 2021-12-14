import { isPlainObject, isArray, isFunction, NOOP, toTypeString, isString, toRawType } from '@vue/shared';

/**
 * whether the object is a Regular Expression
 * @param {Object} object the given object
 * @return {Boolean}
 */
export function isRegExp(value: string): boolean {
  return toTypeString(value) === '[object RegExp]';
}
export const isServer = typeof window === 'undefined';
export const isBool = (val: unknown): boolean => typeof val === 'boolean';
export const isHTMLElement = (val: unknown): boolean => toRawType(val).startsWith('HTML');

export { isArray, isPlainObject, isFunction, isString, NOOP };

/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
export function debounce(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (...args: any[]) => unknown,
  delay: number
): typeof fn {
  let timerId: ReturnType<typeof setTimeout> | null;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

/**
 * return a throttle version of the function
 */
export function throttle(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (...args: any[]) => unknown,
  limit: number
): typeof fn {
  let inThrottle: boolean;
  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (!inThrottle) {
      fn.apply(self, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flatten<T>(list: any[]): T[] {
  return list.reduce((a, b) => a.concat(isArray(b) ? flatten(b) : b), []);
}
