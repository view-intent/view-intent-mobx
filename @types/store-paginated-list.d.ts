import { Store } from "./store";
import { Generic } from "./generic";
import { Collection } from "./store-collection";
export interface IPaginatedListParameter<T> {
    page: number;
    rowsByPage: number;
    count: number;
    skip: number;
    pageCount: number;
    prevPage: number;
    nextPage: number;
    items: T[];
    pageUrl: string;
    nextPageUrl: string;
    prevPageUrl: string;
    pageUrlTemplate: string;
    neighborPagesCount?: number;
    nextPages?: number[];
    prevPages?: number[];
}
export interface IPageInfo {
    page: number;
    rowsByPage?: number;
    skip?: number;
    prevPage?: number;
    nextPage?: number;
    pageUrl?: string;
    nextPageUrl?: string;
    prevPageUrl?: string;
    pageUrlTemplate?: string;
    neighborPagesCount?: number;
    nextPages?: number[];
    prevPages?: number[];
}
export declare class PaginatedList<TStore extends Store<TStore>> extends Generic {
    name: string;
    collection: Collection<TStore>;
    idFieldName: string;
    pageMapIds: {
        [page: number]: Array<string | number>;
    };
    pageMapInfo: {
        [page: number]: IPageInfo;
    };
    private skip;
    private rowsByPage;
    private page;
    private pageCount;
    private count;
    private pageUrlTemplate;
    constructor(name: string, collection: Collection<TStore>, idFieldName: string);
    readonly pageCollectionIds: Array<string | number>;
    readonly pageCollection: TStore[];
    readonly infiniteCollectionIds: Array<string | number>;
    readonly infiniteCollection: TStore[];
    setPage(pageNumber: number): void;
    readonly pageInfo: IPageInfo;
    setItem(item: TStore): void;
    getItem(id: string | number): TStore;
    removeItem(id: string | number): boolean;
    setItems(items: TStore[]): void;
    setPaginatedList(paginatedList: IPaginatedListParameter<TStore>): void;
    invalidateList(): void;
}
