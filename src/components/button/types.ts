import { YUISize } from '@base';

export type ButtonType = 'primary' | 'secondary' | 'link';
export type ButtonNativeType = 'button' | 'reset' | 'submit';

export interface ButtonProps {
  type?: ButtonType;
  size?: YUISize;
  outline?: boolean;
  fullWidth?: boolean;
  dashed?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  suffixIcon?: string;
  disabled?: boolean;
  nativeType?: ButtonNativeType;
  href?: string;
  target?: string;
  onClick?: (e: MouseEvent) => void;
}
