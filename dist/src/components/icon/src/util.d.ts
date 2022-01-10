declare type TPromise = Promise<SVGSVGElement> & {
    isPending: () => boolean;
};
export declare function copySvgAttrs(svgEle: SVGSVGElement): Record<string, string>;
export declare function filterAttrs(attrs: Record<string, unknown>): Record<string, string>;
export declare function download(url: string): TPromise;
export {};
