export type YUISize = 'large' | 'normal' | 'small';
export const YUI_SIZE = ['large', 'normal', 'small'];
export type Nullable<T> = T | null;
export type RefElement = Nullable<HTMLElement>;

export type PopperPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';
