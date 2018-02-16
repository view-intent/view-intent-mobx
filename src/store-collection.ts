import { action, observable, computed, observe } from "mobx";
import { Store } from "./store";

export class PaginatedList<TStore extends { [field: string]: any; }, TRootStore> {
	public name: string; // the name of the collections (Ex.: favoriteRestaurantes, )
	public collection: Collection<TStore, TRootStore>;
	public idFieldName: string;
	@observable private pageMapIds: { [page: number]: Array<string | number> } = {};
	@observable private skip: number = 0;
	@observable private pageSize: number = 100000; // Rows or PageSize
	@observable private page: number = 1;
	@observable private pageQty: number = 0;
	@observable private totalItems: number = -1;
	constructor(name: string, collection: Collection<TStore, TRootStore>, idFieldName: string) {
		this.name = name;
		this.collection = collection;
		this.idFieldName = idFieldName;
	}
	// computed -------------------------------------------------
	@computed public get pageCollectionIds(): Array<string | number> {
		if (this.pageMapIds[this.page] !== undefined && this.pageMapIds[this.page] !== null) {
			return this.pageMapIds[this.page];
		} else {
			return [];
		}
	}
	@computed public get pageCollection(): TStore[] {
		return this.pageCollectionIds.map((id) => {
			const item: TStore = this.collection.getItem(id);
			if (item !== undefined && item !== null) {
				return item;
			} else {
				return null;
			}
		});
	}
	@computed public get infiniteCollectionIds(): Array<string | number> {
		let returnIds: Array<string | number> = [];
		for (let p = 1; p < this.page; p++) {
			if (this.pageMapIds[p] !== undefined && this.pageMapIds[p] !== null) {
				returnIds = returnIds.concat(returnIds, this.pageMapIds[p]);
			}
		}
		return returnIds;
	}
	@computed public get infiniteCollection(): TStore[] {
		return this.infiniteCollectionIds.map((id) => {
			const item = this.collection.getItem(id);
			if (item !== undefined && item !== null) {
				return item;
			} else {
				return null;
			}
		});
	}
	// actions -------------------------------------------------
	@action public setCurrentPage(currentPage: number, pageSize: number = -1, pageQty: number = -1): void {
		if (pageSize > -1 && pageSize !== null) {
			this.pageSize = pageSize;
		}
		if (pageQty > -1 && pageQty !== null) {
			this.pageQty = pageQty;
		}
		this.skip = (currentPage - 1) * this.pageSize;
		this.page = currentPage;
	}
	// items controller
	@action public setItem(item: TStore) {
		this.collection.setItem(item);
	}
	@action public getItem(id: string | number) {
		return this.collection.getItem(id.toString());
	}
	@action public removeItem(id: string | number) {
		const item = this.getItem(id);
		if (item !== undefined && item !== null) {
			this.collection.removeItem(id.toString());
			return true;
		} else {
			return false; // remove success
		}
	}
	@action public setItems(items: TStore[], page: number = -1, pageSize: number = -1, pageQty: number = -1): void {
		const hasItems: boolean = (items !== undefined && items !== null);
		const pageIds: Array<string | number> = [];
		if (hasItems) {
			items.forEach((item: TStore) => {
				this.setItem(item);
				pageIds.push(item[this.idFieldName]);
			});
		}
		if (page > -1) {
			this.page = page;
			this.pageMapIds[page] = pageIds;
		}
		if (pageSize > -1) { this.pageSize = pageSize; }
		if (pageQty > -1) { this.pageQty = pageQty; }
	}
}
export abstract class Collection<TStore extends { [field: string]: any; }, TRootStore> extends Store<TStore, TRootStore> {
	private type: { new(rootStore: TRootStore): TStore; } = null;
	private idFieldName: string;
	@observable private paginatedLists: { [name: string]: PaginatedList<TStore, TRootStore>; } = {};
	@observable private items: { [id: string]: TStore; } = {};
	constructor(rootStore: TRootStore, type: { new(...args: any[]): TStore; }, idFieldName: "id" | "name" | "string" | string = "id") {
		super(rootStore);
		this.type = type;
		this.idFieldName = idFieldName;
	}
	@computed public get defaultCollection() {
		return this.paginatedLists["default"];
	}
	@action public getPaginatedList(name: string): PaginatedList<TStore, TRootStore> {
		this.ensurePaginatedList(name);
		return this.paginatedLists[name];
	}
	@action public setItem(item: TStore) {
		this.items[item[this.idFieldName].toString()] = item;
	}
	@action public getItem(id: string | number) {
		return this.items[id.toString()];
	}
	@action public removeItem(id: string | number) {
		const item = this.getItem(id);
		if (item !== undefined && item !== null) {
			delete this.items[id.toString()];
			return true;
		} else {
			return false; // remove success
		}
	}
	@action public collectGarbage(): void {
		let ids: Array<string | number> = [];
		for (const name in this.paginatedLists) {
			if (this.paginatedLists.hasOwnProperty(name)) {
				const paginatedList = this.paginatedLists[name];
				ids = ids.concat(paginatedList.pageCollectionIds);
			}
		}
		for (const id in this.items) {
			if (this.items.hasOwnProperty(id)) {
				const item = this.items[id];
				if (ids.indexOf(id) === -1) {
					this.removeItem(id);
				}
			}
		}
	}
	@action public ensurePaginatedList(name: string, create: boolean = true): boolean {
		if (this.paginatedLists[name] !== undefined && this.paginatedLists[name] !== null) {
			if (create) {
				this.paginatedLists[name] = new PaginatedList(name, this, this.idFieldName);
				return true;
			}
			return false;
		} else {
			return true;
		}
	}
}
