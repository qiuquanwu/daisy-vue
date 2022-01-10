export declare type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void;
export declare type FlushList = Map<HTMLElement, {
    documentHandler: DocumentHandler;
    bindingFn: (...args: unknown[]) => unknown;
}[]>;
