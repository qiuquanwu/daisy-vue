import type { VNode, VNodeChild } from 'vue';
export declare const isFragment: (node: VNodeChild) => boolean;
export declare const isText: (node: VNodeChild) => boolean;
export declare const isComment: (node: VNodeChild) => boolean;
export declare const isTemplate: (node: VNodeChild) => boolean;
/**
 * get a valid child node (not fragment nor comment)
 * @param node VNode
 * @param depth number
 * @returns undefined | VNode
 */
declare function getChildren(node: VNode, depth: number): undefined | VNode;
/**
 * 获取指定层级内的第一个可用节点
 * @param node VNodeChild
 * @param maxDepth number
 * @returns undefined | VNode
 */
export declare const getFirstValidNode: (node: VNodeChild, maxDepth?: number) => ReturnType<typeof getChildren>;
export {};
