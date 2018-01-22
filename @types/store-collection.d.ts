import { Store } from "./store";
export declare class CollectionMap<TStore extends {
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
    readonly pageCollectionIds: string[];
    readonly pageCollection: TStore[];
    readonly infiniteCollectionIds: string[];
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
    type: {
        new (rootStore: TRootStore): TStore;
    };
    idFieldName: string;
    instances: {
        [name: string]: CollectionMap<TStore, TRootStore>;
    };
    items: {
        [id: string]: TStore;
    };
    constructor(rootStore: TRootStore, type: {
        new (...args: any[]): TStore;
    }, idFieldName?: "id" | "name" | "string" | string);
    ensureCollectionMap(name: string, create?: boolean): boolean;
}
