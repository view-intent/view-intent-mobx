import { Store } from "./store";
export declare class PaginatedList<TStore extends {
    [field: string]: any;
}, TRootStore> {
    name: string;
    collection: Collection<TStore, TRootStore>;
    idFieldName: string;
    private pageMapIds;
    private skip;
    private pageSize;
    private page;
    private pageQty;
    private totalItems;
    constructor(name: string, collection: Collection<TStore, TRootStore>, idFieldName: string);
    readonly pageCollectionIds: Array<string | number>;
    readonly pageCollection: TStore[];
    readonly infiniteCollectionIds: Array<string | number>;
    readonly infiniteCollection: TStore[];
    setCurrentPage(currentPage: number, pageSize?: number, pageQty?: number): void;
    setItem(item: TStore): void;
    getItem(id: string | number): TStore;
    removeItem(id: string | number): boolean;
    setItems(items: TStore[], page?: number, pageSize?: number, pageQty?: number): void;
}
export declare abstract class Collection<TStore extends {
    [field: string]: any;
}, TRootStore> extends Store<TStore, TRootStore> {
    private type;
    private idFieldName;
    private paginatedLists;
    private items;
    constructor(rootStore: TRootStore, type: {
        new (...args: any[]): TStore;
    }, idFieldName?: "id" | "name" | "string" | string);
    readonly defaultCollection: PaginatedList<TStore, TRootStore>;
    getPaginatedList(name: string): PaginatedList<TStore, TRootStore>;
    setItem(item: TStore): void;
    getItem(id: string | number): TStore;
    removeItem(id: string | number): boolean;
    collectGarbage(): void;
    ensurePaginatedList(name: string, create?: boolean): boolean;
}
