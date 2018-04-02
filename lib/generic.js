var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { action, observable, observe, toJS } from "mobx";
import { Is } from "utility-collection";
import { Exclude, classToPlainFromExist } from "class-transformer";
import { cloneDeep } from "lodash";
export class Generic {
    constructor(parent = null) {
        this.viParent = null;
        // @Exclude()
        this.viUpVersion = 0;
        this.updateSchedule = false;
        this.update = this.update.bind(this);
        this.setParent = this.setParent.bind(this);
        this.setParent(parent);
        observe(this, () => {
            this.update();
        });
    }
    setParent(parent) {
        this.viParent = parent;
    }
    toObject(exclude = []) {
        const newThis = cloneDeep(toJS(this));
        delete newThis.rootStore;
        delete newThis.viParent;
        delete newThis.setParent;
        // delete newThis.update;
        delete newThis.viUpVersion;
        for (const key in newThis) {
            if (newThis.hasOwnProperty(key)) {
                const prop = newThis[key];
                if (prop.hasOwnProperty("toObject")) {
                    newThis[key] = newThis[key].toObject(exclude);
                }
                else if (typeof prop === "function") {
                    delete newThis[key];
                }
            }
        }
        exclude.forEach((key) => {
            delete newThis[key];
        });
        const simpleObj = classToPlainFromExist({}, newThis, { enableCircularCheck: true });
        return simpleObj;
    }
    setField(fieldName, value) {
        this[fieldName] = value;
    }
    update(level = 0) {
        if (!this.updateSchedule) {
            this.updateSchedule = true;
            setImmediate(() => {
                this.viUpVersion = this.viUpVersion + 1;
                if (!Is.nullOrUndefined(this.viParent) && level < 20) {
                    level = level + 1;
                    // console.log("update", level);
                    this.viParent.update(level);
                }
                this.updateSchedule = false;
            });
        }
    }
}
__decorate([
    Exclude(),
    observable,
    __metadata("design:type", Object)
], Generic.prototype, "viParent", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], Generic.prototype, "viUpVersion", void 0);
__decorate([
    Exclude(),
    __metadata("design:type", Boolean)
], Generic.prototype, "updateSchedule", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Generic.prototype, "setField", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Generic.prototype, "update", null);
export default Generic;
//# sourceMappingURL=generic.js.map