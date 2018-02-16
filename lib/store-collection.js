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
import { Store } from "./store";
export class PaginatedList {
    constructor(name, collection, idFieldName) {
        this.pageMapIds = {};
        this.skip = 0;
        this.pageSize = 100000; // Rows or PageSize
        this.page = 1;
        this.pageQty = 0;
        this.totalItems = -1;
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
    setCurrentPage(currentPage, pageSize = -1, pageQty = -1) {
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
    setItem(item) {
        this.collection.setItem(item);
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
    setItems(items, page = -1, pageSize = -1, pageQty = -1) {
        const hasItems = (items !== undefined && items !== null);
        const pageIds = [];
        if (hasItems) {
            items.forEach((item) => {
                this.setItem(item);
                pageIds.push(item[this.idFieldName]);
            });
        }
        if (page > -1) {
            this.page = page;
            this.pageMapIds[page] = pageIds;
        }
        if (pageSize > -1) {
            this.pageSize = pageSize;
        }
        if (pageQty > -1) {
            this.pageQty = pageQty;
        }
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], PaginatedList.prototype, "pageMapIds", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "skip", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "pageSize", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "page", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "pageQty", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PaginatedList.prototype, "totalItems", void 0);
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
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setCurrentPage", null);
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
    __metadata("design:paramtypes", [Array, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setItems", null);
export class Collection extends Store {
    constructor(rootStore, type, idFieldName = "id") {
        super(rootStore);
        this.type = null;
        this.paginatedLists = {};
        this.items = {};
        this.type = type;
        this.idFieldName = idFieldName;
    }
    get defaultCollection() {
        return this.paginatedLists["default"];
    }
    getPaginatedList(name) {
        this.ensurePaginatedList(name);
        return this.paginatedLists[name];
    }
    setItem(item) {
        this.items[item[this.idFieldName].toString()] = item;
    }
    getItem(id) {
        return this.items[id.toString()];
    }
    removeItem(id) {
        const item = this.getItem(id);
        if (item !== undefined && item !== null) {
            delete this.items[id.toString()];
            return true;
        }
        else {
            return false; // remove success
        }
    }
    collectGarbage() {
        let ids = [];
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
    ensurePaginatedList(name, create = true) {
        if (this.paginatedLists[name] !== undefined && this.paginatedLists[name] !== null) {
            if (create) {
                this.paginatedLists[name] = new PaginatedList(name, this, this.idFieldName);
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], Collection.prototype, "paginatedLists", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], Collection.prototype, "items", void 0);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Collection.prototype, "defaultCollection", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", PaginatedList)
], Collection.prototype, "getPaginatedList", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "setItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "getItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "removeItem", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Collection.prototype, "collectGarbage", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Boolean)
], Collection.prototype, "ensurePaginatedList", null);
//# sourceMappingURL=store-collection.js.map