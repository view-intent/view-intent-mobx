var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable } from "mobx";
import { Exclude } from "class-transformer";
import { Generic } from "./generic";
export class Store extends Generic {
    // @observable public viUpVersion: number = 0;
    constructor(rootStore) {
        super(rootStore);
        this.setParent = this.setParent.bind(this);
        this.setParent(rootStore);
    }
    setParent(rootStore) {
        super.setParent(rootStore);
        this.rootStore = rootStore;
    }
}
__decorate([
    Exclude(),
    observable,
    __metadata("design:type", Object)
], Store.prototype, "rootStore", void 0);
export default Store;
//# sourceMappingURL=store.js.map