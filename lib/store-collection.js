var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CollectionMap = /** @class */ (function () {
    function CollectionMap(name, collection, idFieldName) {
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
    Object.defineProperty(CollectionMap.prototype, "pageCollectionIds", {
        // computed -------------------------------------------------
        get: function () {
            if (this.pageMapIds[this.page] !== undefined && this.pageMapIds[this.page] !== null) {
                return this.pageMapIds[this.page];
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionMap.prototype, "pageCollection", {
        get: function () {
            var _this = this;
            return this.pageCollectionIds.map(function (id) {
                var item = _this.collection.getItem(id);
                if (item !== undefined && item !== null) {
                    return item;
                }
                else {
                    return null;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionMap.prototype, "infiniteCollectionIds", {
        get: function () {
            var returnIds = [];
            for (var p = 1; p < this.page; p++) {
                if (this.pageMapIds[p] !== undefined && this.pageMapIds[p] !== null) {
                    returnIds = returnIds.concat(returnIds, this.pageMapIds[p]);
                }
            }
            return returnIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionMap.prototype, "infiniteCollection", {
        get: function () {
            var _this = this;
            return this.infiniteCollectionIds.map(function (id) {
                var item = _this.collection.getItem(id);
                if (item !== undefined && item !== null) {
                    return item;
                }
                else {
                    return null;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    // actions -------------------------------------------------
    CollectionMap.prototype.setCurrentPage = function (currentPage, pageSize, pageQty) {
        if (pageSize === void 0) { pageSize = -1; }
        if (pageQty === void 0) { pageQty = -1; }
        if (pageSize > -1 && pageSize !== null) {
            this.pageSize = pageSize;
        }
        if (pageQty > -1 && pageQty !== null) {
            this.pageQty = pageQty;
        }
        this.skip = (currentPage - 1) * this.pageSize;
        this.page = currentPage;
    };
    // items controller
    CollectionMap.prototype.setItem = function (item) {
        this.collection.items[item[this.idFieldName]] = item;
    };
    CollectionMap.prototype.getItem = function (id) {
        return this.collection.items[id.toString()];
    };
    CollectionMap.prototype.removeItem = function (id) {
        var item = this.getItem(id);
        if (item !== undefined && item !== null) {
            delete this.collection.items[id];
            return true;
        }
        else {
            return false; // remove success
        }
    };
    CollectionMap.prototype.setItems = function (items, page, pageSize, pageQty) {
        var _this = this;
        if (page === void 0) { page = -1; }
        if (pageSize === void 0) { pageSize = -1; }
        if (pageQty === void 0) { pageQty = -1; }
        var hasItems = (items !== undefined && items !== null);
        var pageIds = [];
        if (hasItems) {
            items.forEach(function (item) {
                _this.setItem(item);
                pageIds.push(item[_this.idFieldName]);
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
    };
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], CollectionMap.prototype, "pageMapIds", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], CollectionMap.prototype, "skip", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], CollectionMap.prototype, "pageSize", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], CollectionMap.prototype, "page", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], CollectionMap.prototype, "pageQty", void 0);
    __decorate([
        observable,
        __metadata("design:type", Number)
    ], CollectionMap.prototype, "totalItems", void 0);
    __decorate([
        computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], CollectionMap.prototype, "pageCollectionIds", null);
    __decorate([
        computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], CollectionMap.prototype, "pageCollection", null);
    __decorate([
        computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], CollectionMap.prototype, "infiniteCollectionIds", null);
    __decorate([
        computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], CollectionMap.prototype, "infiniteCollection", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], CollectionMap.prototype, "setCurrentPage", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CollectionMap.prototype, "setItem", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CollectionMap.prototype, "getItem", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CollectionMap.prototype, "removeItem", null);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Number, Number, Number]),
        __metadata("design:returntype", void 0)
    ], CollectionMap.prototype, "setItems", null);
    return CollectionMap;
}());
export { CollectionMap };
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection(rootStore, type, idFieldName) {
        if (idFieldName === void 0) { idFieldName = "id"; }
        var _this = _super.call(this, rootStore) || this;
        _this.type = null;
        _this.instances = {};
        _this.items = {};
        _this.type = type;
        _this.idFieldName = idFieldName;
        return _this;
    }
    Collection.prototype.ensureCollectionMap = function (name, create) {
        if (create === void 0) { create = true; }
        if (this.instances[name] !== undefined && this.instances[name] !== null) {
            if (create) {
                this.instances[name] = new CollectionMap(name, this, this.idFieldName);
                return true;
            }
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], Collection.prototype, "instances", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], Collection.prototype, "items", void 0);
    __decorate([
        action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", Boolean)
    ], Collection.prototype, "ensureCollectionMap", null);
    return Collection;
}(Store));
export { Collection };
//# sourceMappingURL=store-collection.js.map