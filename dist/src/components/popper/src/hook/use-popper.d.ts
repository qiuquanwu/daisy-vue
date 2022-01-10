import type { SetupContext } from 'vue';
import { PopperProps, EmitType, IPopperState } from '@components/popper/types';
export default function usePopper(props: PopperProps, { emit }: SetupContext<EmitType[]>): IPopperState;
