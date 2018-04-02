var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { action, observable, computed } from "mobx";
import { Is } from "utility-collection";
import { Generic } from "./generic";
export class PaginatedList extends Generic {
    // ---------------
    constructor(name, collection, idFieldName) {
        super(collection);
        // @observable private pageInfo: IPageInfo = null;
        this.pageMapIds = {};
        this.pageMapInfo = {};
        this.skip = 0;
        this.rowsByPage = 100000; // Rows or PageSize
        this.page = 1;
        this.pageCount = 0;
        this.count = -1;
        this.pageUrlTemplate = null;
        this.name = name;
        this.collection = collection;
        this.idFieldName = idFieldName;
    }
    // computed -------------------------------------------------
    get pageCollectionIds() {
        if (this.pageMapIds[this.page] !== undefined && this.pageMapIds[this.page] !== null) {
            return this.pageMapIds[this.page];
        }
        else {
            return [];
        }
    }
    get pageCollection() {
        return this.pageCollectionIds.map((id) => {
            const item = this.collection.getItem(id);
            if (item !== undefined && item !== null) {
                return item;
            }
            else {
                return null;
            }
        });
    }
    get infiniteCollectionIds() {
        let returnIds = [];
        for (let p = 1; p < this.page; p++) {
            if (this.pageMapIds[p] !== undefined && this.pageMapIds[p] !== null) {
                returnIds = returnIds.concat(returnIds, this.pageMapIds[p]);
            }
        }
        return returnIds;
    }
    get infiniteCollection() {
        return this.infiniteCollectionIds.map((id) => {
            const item = this.collection.getItem(id);
            if (item !== undefined && item !== null) {
                return item;
            }
            else {
                return null;
            }
        });
    }
    // actions -------------------------------------------------
    setPage(pageNumber) {
        if (Is.nullOrUndefined(this.pageMapInfo[pageNumber])) {
            this.pageMapInfo[this.page] = {
                page: this.page,
            };
        }
        this.page = pageNumber;
    }
    get pageInfo() {
        return this.pageMapInfo[this.page];
    }
    // @action public setCurrentPage(currentPage: number, rowsByPage: number = -1, pageCount: number = -1): void {
    // 	if (rowsByPage > -1 && rowsByPage !== null) {
    // 		this.rowsByPage = rowsByPage;
    // 	}
    // 	if (pageCount > -1 && pageCount !== null) {
    // 		this.pageCount = pageCount;
    // 	}
    // 	this.skip = (currentPage - 1) * this.rowsByPage;
    // 	this.page = currentPage;
    // }
    // items controller
    setItem(item) {
        this.collection.setItem(item);
        // this.collection.update();
        // this.update();
    }
    getItem(id) {
        return this.collection.getItem(id.toString());
    }
    removeItem(id) {
        const item = this.getItem(id);
        if (item !== undefined && item !== null) {
            this.collection.removeItem(id.toString());
            return true;
        }
        else {
            return false; // remove success
        }
    }
    // @action public setItems(items: TStore[], page: number = -1, rowsByPage: number = -1, pageCount: number = -1, count: number = -1): void {
    setItems(items) {
        const hasItems = !Is.nullOrUndefined(items);
        const pageIds = [];
        if (hasItems) {
            items.forEach((item) => {
                this.setItem(item);
                pageIds.push(item[this.idFieldName]);
            });
        }
    }
    setPaginatedList(paginatedList) {
        if (!Is.nullOrUndefined(this.pageUrlTemplate)) {
            if (paginatedList.pageUrlTemplate.toLowerCase() !== this.pageUrlTemplate.toLowerCase()) {
                this.invalidateList();
            }
        }
        const hasItems = !Is.nullOrUndefined(paginatedList.items);
        const pageIds = [];
        if (hasItems) {
            paginatedList.items.forEach((item) => {
                this.setItem(item);
                pageIds.push(item[this.idFieldName]);
            });
        }
        if (paginatedList.page > -1) {
            this.page = paginatedList.page;
            this.pageMapIds[paginatedList.page] = pageIds;
        }
        if (paginatedList.rowsByPage > -1) {
            this.rowsByPage = paginatedList.rowsByPage;
        }
        if (paginatedList.pageCount > -1) {
            this.pageCount = paginatedList.pageCount;
        }
        if (paginatedList.count > -1) {
            this.count = paginatedList.count;
        }
        if (paginatedList.skip > -1) {
            this.skip = paginatedList.skip;
        }
        // -------------------
        this.pageMapInfo[paginatedList.page] = {
            nextPage: paginatedList.nextPage,
            prevPage: paginatedList.prevPage,
            rowsByPage: paginatedList.rowsByPage,
            nextPageUrl: paginatedList.nextPageUrl,
            prevPageUrl: paginatedList.prevPageUrl,
            page: paginatedList.page,
            pageUrl: paginatedList.pageUrl,
            pageUrlTemplate: paginatedList.pageUrlTemplate,
            skip: paginatedList.skip,
        };
        this.update();
    }
    invalidateList() {
        for (const key in this.pageMapIds) {
            if (this.pageMapIds.hasOwnProperty(key)) {
                this.pageMapIds[key] = undefined;
            }
        }
        for (const key in this.pageMapInfo) {
            if (this.pageMapInfo.hasOwnProperty(key)) {
                this.pageMapInfo[key] = undefined;
            }
        }
        this.update();
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], PaginatedList.prototype, "pageMapIds", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], PaginatedList.prototype, "pageMapInfo", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "skip", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "rowsByPage", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "page", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "pageCount", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "count", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], PaginatedList.prototype, "pageUrlTemplate", void 0);
__decorate([
    computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "pageCollectionIds", null);
__decorate([
    computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "pageCollection", null);
__decorate([
    computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "infiniteCollectionIds", null);
__decorate([
    computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "infiniteCollection", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setPage", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "pageInfo", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "getItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "removeItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setItems", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setPaginatedList", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "invalidateList", null);
//# sourceMappingURL=store-paginated-list.js.map