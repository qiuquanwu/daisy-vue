import { App, DefineComponent } from 'vue';
declare type ComponentType = DefineComponent<{}, {}, any>;
export interface UiInstance {
    version: string;
    componentPrefix: string;
    install: (app: App) => void;
}
interface UiCreateOptions {
    components?: ComponentType[];
    componentPrefix?: string;
}
export default function create({ componentPrefix, components }?: UiCreateOptions): UiInstance;
export {};
