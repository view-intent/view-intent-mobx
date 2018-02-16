/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return extras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return useStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return isStrictModeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return asReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return asFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return asStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return asMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return isModifierDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return autorunAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return createTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return whyRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isArrayLike; });
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return interceptable.interceptors && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = oldItems.slice(0, toIndex).concat([
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
                .values
                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.dehancer = undefined;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    m001: "It is not allowed to assign new values to @action fields",
    m002: "`runInAction` expects a function",
    m003: "`runInAction` expects a function without arguments",
    m004: "autorun expects a function",
    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    m012: "computed takes one or two arguments if used as function",
    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    m014: "extendObservable expected 2 or more arguments",
    m015: "extendObservable expects an object as first argument",
    m016: "extendObservable should not be used on maps, use map.merge instead",
    m017: "all arguments of extendObservable should be objects",
    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    m020: "modifiers can only be used for individual object properties",
    m021: "observable expects zero or one arguments",
    m022: "@observable can not be used on getters, use @computed instead",
    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    m025: "whyRun can only be used on reactions and computed values",
    m026: "`action` can only be invoked on functions",
    m028: "It is not allowed to set `useStrict` when a derivation is running",
    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    m033: "`observe` doesn't support the fire immediately property for observable maps.",
    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    m035: "Cannot make the designated object observable; it is not extensible",
    m036: "It is not possible to get index atoms from arrays",
    m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
    /**
     * This function is invoked once, when the property is added to a new instance.
     * When this happens is not strictly determined due to differences in TS and Babel:
     * Typescript: Usually when constructing the new instance
     * Babel, sometimes Typescript: during the first get / set
     * Both: when calling `runLazyInitializers(instance)`
     */
    onInitialize, get, set, enumerable, 
    /**
     * Can this decorator invoked with arguments? e.g. @decorator(args)
     */
    allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || (arguments.length === 5 && argLen < 3)) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
            });
            return {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) {
                return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
            };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers &&
            instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        if (descriptor !== undefined && descriptor.get !== undefined) {
            throw new Error("[mobx] action is not expected to be used with getters");
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || "Autorun@" + getNextId();
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = "When@" + getNextId();
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || "AutorunAsync@" + getNextId();
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() {
        func(r);
    }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name =
        opts.name || expression.name || effect.name || "Reaction@" + getNextId();
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effect(value, r);
        if (!firstTime && changed === true)
            effect(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce an new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, equals, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.equals = equals;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // This is an minor optimization which could be omitted to simplify the code
            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
            // tracking as it will never be called again inside this batch.
            startBatch();
            if (shouldCompute(this))
                this.value = this.computeValue(false);
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this
                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this
                .name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var wasSuspended = this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = (this.value = this.computeValue(true));
        return (wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue));
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking
            ? "[active] the value of this computation is needed by a reaction"
            : this.isComputing
                ? "[get] The value of this computed was requested outside a reaction"
                : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING
                ? getMessage("m032")
                : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking
                    ? " (... or any observable accessed during the remainder of the current run)"
                    : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target) && target.hasOwnProperty("$mobx"))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                setPropertyValue(this, propName, v);
            }
        }));
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                return this.$mobx.values[propName].set(v);
            }
        }));
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name,
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "update",
                object: instance,
                oldValue: observable.value,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: name,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
 * Returns true if the provided value is reactive.
 * @param value object, function or array
 * @param property if property is specified, checks whether value.property is reactive.
 */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!isObservableMap(target), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var observableFactories = {
    box: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    },
    array: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    },
    map: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    },
    object: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    },
    shallowObject: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    },
    ref: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    },
    shallow: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    },
    deep: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    },
    struct: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    }
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.dehancer = undefined;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data[key].value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: name,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        transaction(function () {
            var observable$$1 = (_this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false));
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this.dehanceValue(this._data[key].get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = _this.keys();
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values might still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return (res[key] = _this.get(key)); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return typeof window !== "undefined" ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit
        ? " (... and " + (things.length - limit) + "more)"
        : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function getEnumerableKeys(obj) {
    var res = [];
    for (var key in obj)
        res.push(key);
    return res;
}
/**
 * Naive deepEqual. Doesn't check for prototype, non-enumerable or out-of-range properties on arrays.
 * If you have such a case, you probably should use this function but something fancier :).
 */
function deepEqual(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    if (areBothNaN(a, b))
        return true;
    if (typeof a !== "object")
        return a === b;
    var aIsArray = isArrayLike(a);
    var aIsMap = isMapLike(a);
    if (aIsArray !== isArrayLike(b)) {
        return false;
    }
    else if (aIsMap !== isMapLike(b)) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length - 1; i >= 0; i--)
            if (!deepEqual(a[i], b[i]))
                return false;
        return true;
    }
    else if (aIsMap) {
        if (a.size !== b.size)
            return false;
        var equals_1 = true;
        a.forEach(function (value, key) {
            equals_1 = equals_1 && deepEqual(b.get(key), value);
        });
        return equals_1;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (isMapLike(a) && isMapLike(b)) {
            if (a.size !== b.size)
                return false;
            // Freaking inefficient.... Create PR if you run into this :) Much appreciated!
            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
        }
        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
            return false;
        for (var prop in a) {
            if (!(prop in b))
                return false;
            if (!deepEqual(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return false;
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b));
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isMapLike(x) {
    return isES6Map(x) || isObservableMap(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function getMapLikeKeys(map$$1) {
    var keys;
    if (isPlainObject(map$$1))
        keys = Object.keys(map$$1);
    else if (Array.isArray(map$$1))
        keys = map$$1.map(function (_a) {
            var key = _a[0];
            return key;
        });
    else if (isMapLike(map$$1))
        keys = Array.from(map$$1.keys());
    else
        fail("Cannot get keys from " + map$$1);
    return keys;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
    var global_1 = getGlobal();
    if (!global_1.__mobxInstanceCount) {
        global_1.__mobxInstanceCount = 1;
    }
    else {
        global_1.__mobxInstanceCount++;
        setTimeout(function () {
            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
                warnedAboutMultipleInstances = true;
                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
            }
        });
    }
}
function isolateGlobalState() {
    runInIsolationCalled = true;
    getGlobal().__mobxInstanceCount--;
}
function shareGlobalState() {
    // TODO: remove in 4.0; just use peer dependencies instead.
    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
    shareGlobalStateCalled = true;
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            d.onBecomeStale();
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed
            ? "stopped"
            : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning
            ? " (... or any observable accessed during the remainder of the current run)"
            : "") + "\n\t" + getMessage("m038") + "\n";
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(equals) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
};
computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072 // TODO: remove in 4.0
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
 * expr can be used to create temporarily views inside views.
 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
 *
 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
 * instead it will only rerenders when the current todo is (de)selected.
 *
 * reactiveComponent((props) => {
 *     const todo = props.todo;
 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
 * });
 *
 */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return (res_1[key] = toJS(value, detectCycles, __alreadySeen)); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === "string" || typeof object === "number")
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    switch (arguments.length) {
        case 0:
            thing = globalState.trackingDerivation;
            if (!thing)
                return log(getMessage("m024"));
            break;
        case 2:
            thing = getAtom(thing, prop);
            break;
    }
    thing = getAtom(thing);
    if (isComputedValue(thing))
        return log(thing.whyRun());
    else if (isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    interceptReads: interceptReads,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    isolateGlobalState: isolateGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
var everything = {
    Reaction: Reaction,
    untracked: untracked,
    Atom: Atom,
    BaseAtom: BaseAtom,
    useStrict: useStrict,
    isStrictModeEnabled: isStrictModeEnabled,
    spy: spy,
    comparer: comparer,
    asReference: asReference,
    asFlat: asFlat,
    asStructure: asStructure,
    asMap: asMap,
    isModifierDescriptor: isModifierDescriptor,
    isObservableObject: isObservableObject,
    isBoxedObservable: isObservableValue,
    isObservableArray: isObservableArray,
    ObservableMap: ObservableMap,
    isObservableMap: isObservableMap,
    map: map,
    transaction: transaction,
    observable: observable,
    computed: computed,
    isObservable: isObservable,
    isComputed: isComputed,
    extendObservable: extendObservable,
    extendShallowObservable: extendShallowObservable,
    observe: observe,
    intercept: intercept,
    autorun: autorun,
    autorunAsync: autorunAsync,
    when: when,
    reaction: reaction,
    action: action,
    isAction: isAction,
    runInAction: runInAction,
    expr: expr,
    toJS: toJS,
    createTransformer: createTransformer,
    whyRun: whyRun,
    isArrayLike: isArrayLike,
    extras: extras
};
var warnedAboutDefaultExport = false;
var _loop_1 = function (p) {
    var val = everything[p];
    Object.defineProperty(everything, p, {
        get: function () {
            if (!warnedAboutDefaultExport) {
                warnedAboutDefaultExport = true;
                console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " +
                    "and won’t work in mobx@4.0.0\n" +
                    "Use `import * as mobx from 'mobx'` instead");
            }
            return val;
        }
    });
};
for (var p in everything) {
    _loop_1(p);
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
}

/* unused harmony default export */ var _unused_webpack_default_export = (everything);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Store {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Store;

/* unused harmony default export */ var _unused_webpack_default_export = (Store);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_store__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RootStore", function() { return __WEBPACK_IMPORTED_MODULE_1__root_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_collection__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PaginatedList", function() { return __WEBPACK_IMPORTED_MODULE_2__store_collection__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return __WEBPACK_IMPORTED_MODULE_2__store_collection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extras", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BaseAtom", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "useStrict", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isStrictModeEnabled", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "asReference", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "asFlat", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "asStructure", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "asMap", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isModifierDescriptor", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "autorunAsync", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "when", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "action", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "expr", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTransformer", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "whyRun", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return __WEBPACK_IMPORTED_MODULE_0_mobx__["v"]; });

__WEBPACK_IMPORTED_MODULE_0_mobx__["s" /* extras */].isolateGlobalState();






/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

class RootStore {
    set(model) {
        for (const key in model) {
            if (model.hasOwnProperty(key)) {
                this[key] = model[key];
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RootStore;

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RootStore.prototype, "set", null);
/* unused harmony default export */ var _unused_webpack_default_export = (RootStore);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class PaginatedList {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = PaginatedList;

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Object)
], PaginatedList.prototype, "pageMapIds", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Number)
], PaginatedList.prototype, "skip", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Number)
], PaginatedList.prototype, "pageSize", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Number)
], PaginatedList.prototype, "page", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Number)
], PaginatedList.prototype, "pageQty", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Number)
], PaginatedList.prototype, "totalItems", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["n" /* computed */],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "pageCollectionIds", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["n" /* computed */],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "pageCollection", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["n" /* computed */],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "infiniteCollectionIds", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["n" /* computed */],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], PaginatedList.prototype, "infiniteCollection", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setCurrentPage", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "getItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "removeItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], PaginatedList.prototype, "setItems", null);
class Collection extends __WEBPACK_IMPORTED_MODULE_1__store__["a" /* Store */] {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Collection;

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Object)
], Collection.prototype, "paginatedLists", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["F" /* observable */],
    __metadata("design:type", Object)
], Collection.prototype, "items", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["n" /* computed */],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Collection.prototype, "defaultCollection", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", PaginatedList)
], Collection.prototype, "getPaginatedList", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "setItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "getItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Collection.prototype, "removeItem", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Collection.prototype, "collectGarbage", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Boolean)
], Collection.prototype, "ensurePaginatedList", null);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2I2NmE3ODA5NTczNGI2ODkyMDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yb290LXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQy9FLHFCQUFxQix1REFBdUQ7O0FBRTVFO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVELGlEQUFpRCxnQ0FBZ0M7QUFDakYsbURBQW1ELGtDQUFrQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLHVCQUF1QjtBQUNqRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0Q0FBNEM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFDQUFxQyxFQUFFO0FBQ3JGO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlDQUF5QztBQUN2RSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLDhDQUE4QyxFQUFFO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSw4QkFBOEIsRUFBRTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHLGlCQUFpQixFQUFFO0FBQzdILHNFQUFzRSxpQkFBaUIsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHVEQUF1RCxFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzRUFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtDQUFrQyxFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FRTjtBQUNPO0lBQVAsb0RBQU07Ozs7Z0RBZ0JOO0FBQ087SUFBUCxvREFBTTs7OztxREFVTiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YjY2YTc4MDk1NzM0YjY4OTIwMCIsIi8qKiBNb2JYIC0gKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUsIDIwMTYgLSBNSVQgTGljZW5zZWQgKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbi8qKlxuICogQW55dGhpbmcgdGhhdCBjYW4gYmUgdXNlZCB0byBfc3RvcmVfIHN0YXRlIGlzIGFuIEF0b20gaW4gbW9ieC4gQXRvbXMgaGF2ZSB0d28gaW1wb3J0YW50IGpvYnNcbiAqXG4gKiAxKSBkZXRlY3Qgd2hlbiB0aGV5IGFyZSBiZWluZyBfdXNlZF8gYW5kIHJlcG9ydCB0aGlzICh1c2luZyByZXBvcnRPYnNlcnZlZCkuIFRoaXMgYWxsb3dzIG1vYnggdG8gbWFrZSB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHJ1bm5pbmcgZnVuY3Rpb25zIGFuZCB0aGUgZGF0YSB0aGV5IHVzZWRcbiAqIDIpIHRoZXkgc2hvdWxkIG5vdGlmeSBtb2J4IHdoZW5ldmVyIHRoZXkgaGF2ZSBfY2hhbmdlZF8uIFRoaXMgd2F5IG1vYnggY2FuIHJlLXJ1biBhbnkgZnVuY3Rpb25zIChkZXJpdmF0aW9ucykgdGhhdCBhcmUgdXNpbmcgdGhpcyBhdG9tLlxuICovXG52YXIgQmFzZUF0b20gPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxuICAgICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJhc2VBdG9tKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gdHJ1ZTsgLy8gZm9yIGVmZmVjdGl2ZSB1bm9ic2VydmluZy4gQmFzZUF0b20gaGFzIHRydWUsIGZvciBleHRyYSBvcHRpbWl6YXRpb24sIHNvIGl0cyBvbkJlY29tZVVub2JzZXJ2ZWQgbmV2ZXIgZ2V0cyBjYWxsZWQsIGJlY2F1c2UgaXQncyBub3QgbmVlZGVkXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzSW5kZXhlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICB9XG4gICAgQmFzZUF0b20ucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cbiAgICAgKi9cbiAgICBCYXNlQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cbiAgICAgKi9cbiAgICBCYXNlQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgIH07XG4gICAgQmFzZUF0b20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VBdG9tO1xufSgpKTtcbnZhciBBdG9tID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXRvbSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cbiAgICAgKiBUaGUgb25CZWNvbWVPYnNlcnZlZCBhbmQgb25CZWNvbWVVbm9ic2VydmVkIGNhbGxiYWNrcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2UgbWFuYWdlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiQXRvbUBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDsgfVxuICAgICAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5vbkJlY29tZU9ic2VydmVkSGFuZGxlciA9IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyO1xuICAgICAgICBfdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID0gb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcjtcbiAgICAgICAgX3RoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlOyAvLyBmb3IgZWZmZWN0aXZlIHVub2JzZXJ2aW5nLlxuICAgICAgICBfdGhpcy5pc0JlaW5nVHJhY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEF0b20ucHJvdG90eXBlLnJlcG9ydE9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQmVpbmdUcmFja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmVpbmdUcmFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZEhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICByZXR1cm4gISFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgIC8vIHJldHVybiBkb2Vzbid0IHJlYWxseSBnaXZlIHVzZWZ1bCBpbmZvLCBiZWNhdXNlIGl0IGNhbiBiZSBhcyB3ZWxsIGNhbGxpbmcgY29tcHV0ZWQgd2hpY2ggY2FsbHMgYXRvbSAobm8gcmVhY3Rpb25zKVxuICAgICAgICAvLyBhbHNvIGl0IGNvdWxkIG5vdCB0cmlnZ2VyIHdoZW4gY2FsY3VsYXRpbmcgcmVhY3Rpb24gZGVwZW5kZW50IG9uIEF0b20gYmVjYXVzZSBBdG9tJ3MgdmFsdWUgd2FzIGNhY2hlZCBieSBjb21wdXRlZCBjYWxsZWQgYnkgZ2l2ZW4gcmVhY3Rpb24uXG4gICAgfTtcbiAgICBBdG9tLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNCZWluZ1RyYWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXRvbTtcbn0oQmFzZUF0b20pKTtcbnZhciBpc0F0b20gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQXRvbVwiLCBCYXNlQXRvbSk7XG5cbmZ1bmN0aW9uIGhhc0ludGVyY2VwdG9ycyhpbnRlcmNlcHRhYmxlKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xuICAgIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycztcbiAgICAgICAgaWYgKGludGVyY2VwdG9ycylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCghY2hhbmdlIHx8IGNoYW5nZS50eXBlLCBcIkludGVyY2VwdCBoYW5kbGVycyBzaG91bGQgcmV0dXJuIG5vdGhpbmcgb3IgYSBjaGFuZ2Ugb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMobGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5hYmxlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyA9IFtdKTtcbiAgICBsaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMobGlzdGVuYWJsZSwgY2hhbmdlKSB7XG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnM7XG4gICAgaWYgKCFsaXN0ZW5lcnMpXG4gICAgICAgIHJldHVybjtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gICAgfVxuICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG59XG5cbmZ1bmN0aW9uIGlzU3B5RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICAgIHZhciBjaGFuZ2UgPSBvYmplY3RBc3NpZ24oe30sIGV2ZW50LCB7IHNweVJlcG9ydFN0YXJ0OiB0cnVlIH0pO1xuICAgIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHsgc3B5UmVwb3J0RW5kOiB0cnVlIH07XG5mdW5jdGlvbiBzcHlSZXBvcnRFbmQoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZSlcbiAgICAgICAgc3B5UmVwb3J0KG9iamVjdEFzc2lnbih7fSwgY2hhbmdlLCBFTkRfRVZFTlQpKTtcbiAgICBlbHNlXG4gICAgICAgIHNweVJlcG9ydChFTkRfRVZFTlQpO1xufVxuZnVuY3Rpb24gc3B5KGxpc3RlbmVyKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdG9yU3ltYm9sKCkge1xuICAgIHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvcikgfHwgXCJAQGl0ZXJhdG9yXCI7XG59XG52YXIgSVNfSVRFUkFUSU5HX01BUktFUiA9IFwiX18kJGl0ZXJhdGluZ1wiO1xuZnVuY3Rpb24gYXJyYXlBc0l0ZXJhdG9yKGFycmF5KSB7XG4gICAgLy8gcmV0dXJuaW5nIGFuIGFycmF5IGZvciBlbnRyaWVzKCksIHZhbHVlcygpIGV0YyBmb3IgbWFwcyB3YXMgYSBtaXMtaW50ZXJwcmV0YXRpb24gb2YgdGhlIHNwZWNzLi4sXG4gICAgLy8geWV0IGl0IGlzIHF1aXRlIGNvbnZlbmllbnQgdG8gYmUgYWJsZSB0byB1c2UgdGhlIHJlc3BvbnNlIGJvdGggYXMgYXJyYXkgZGlyZWN0bHkgYW5kIGFzIGl0ZXJhdG9yXG4gICAgLy8gaXQgaXMgc3Vib3B0aW1hbCwgYnV0IGFsYXMuLi5cbiAgICBpbnZhcmlhbnQoYXJyYXlbSVNfSVRFUkFUSU5HX01BUktFUl0gIT09IHRydWUsIFwiSWxsZWdhbCBzdGF0ZTogY2Fubm90IHJlY3ljbGUgYXJyYXkgYXMgaXRlcmF0b3JcIik7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFycmF5LCBJU19JVEVSQVRJTkdfTUFSS0VSLCB0cnVlKTtcbiAgICB2YXIgaWR4ID0gLTE7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFycmF5LCBcIm5leHRcIiwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBpZHggPj0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICB2YWx1ZTogaWR4IDwgdGhpcy5sZW5ndGggPyB0aGlzW2lkeF0gOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBkZWNsYXJlSXRlcmF0b3IocHJvdG90VHlwZSwgaXRlcmF0b3JGYWN0b3J5KSB7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKHByb3RvdFR5cGUsIGl0ZXJhdG9yU3ltYm9sKCksIGl0ZXJhdG9yRmFjdG9yeSk7XG59XG5cbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcbi8vIERldGVjdHMgYnVnIGluIHNhZmFyaSA5LjEuMSAob3IgaU9TIDkgc2FmYXJpIG1vYmlsZSkuIFNlZSAjMzY0XG52YXIgc2FmYXJpUHJvdG90eXBlU2V0dGVySW5oZXJpdGFuY2VCdWcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB2ID0gZmFsc2U7XG4gICAgdmFyIHAgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCIwXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5jcmVhdGUocClbXCIwXCJdID0gMTtcbiAgICByZXR1cm4gdiA9PT0gZmFsc2U7XG59KSgpO1xuLyoqXG4gKiBUaGlzIGFycmF5IGJ1ZmZlciBjb250YWlucyB0d28gbGlzdHMgb2YgcHJvcGVydGllcywgc28gdGhhdCBhbGwgYXJyYXlzXG4gKiBjYW4gcmVjeWNsZSB0aGVpciBwcm9wZXJ0eSBkZWZpbml0aW9ucywgd2hpY2ggc2lnbmlmaWNhbnRseSBpbXByb3ZlcyBwZXJmb3JtYW5jZSBvZiBjcmVhdGluZ1xuICogcHJvcGVydGllcyBvbiB0aGUgZmx5LlxuICovXG52YXIgT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRSA9IDA7XG4vLyBUeXBlc2NyaXB0IHdvcmthcm91bmQgdG8gbWFrZSBzdXJlIE9ic2VydmFibGVBcnJheSBleHRlbmRzIEFycmF5XG52YXIgU3R1YkFycmF5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHViQXJyYXkoKSB7XG4gICAgfVxuICAgIHJldHVybiBTdHViQXJyYXk7XG59KCkpO1xuZnVuY3Rpb24gaW5oZXJpdChjdG9yLCBwcm90bykge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0W1wic2V0UHJvdG90eXBlT2ZcIl0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgT2JqZWN0W1wic2V0UHJvdG90eXBlT2ZcIl0oY3Rvci5wcm90b3R5cGUsIHByb3RvKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gPSBwcm90bztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN0b3JbXCJwcm90b3R5cGVcIl0gPSBwcm90bztcbiAgICB9XG59XG5pbmhlcml0KFN0dWJBcnJheSwgQXJyYXkucHJvdG90eXBlKTtcbi8vIFdlZXggZnJlZXplIEFycmF5LnByb3RvdHlwZVxuLy8gTWFrZSB0aGVtIHdyaXRlYWJsZSBhbmQgY29uZmlndXJhYmxlIGluIHByb3RvdHlwZSBjaGFpblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9wdWxsLzE1MjlcbmlmIChPYmplY3QuaXNGcm96ZW4oQXJyYXkpKSB7XG4gICAgXG4gICAgW1xuICAgICAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgICAgIFwicHVzaFwiLFxuICAgICAgICBcInNoaWZ0XCIsXG4gICAgICAgIFwiY29uY2F0XCIsXG4gICAgICAgIFwicG9wXCIsXG4gICAgICAgIFwidW5zaGlmdFwiLFxuICAgICAgICBcInJlcGxhY2VcIixcbiAgICAgICAgXCJmaW5kXCIsXG4gICAgICAgIFwiZmluZEluZGV4XCIsXG4gICAgICAgIFwic3BsaWNlXCIsXG4gICAgICAgIFwicmV2ZXJzZVwiLFxuICAgICAgICBcInNvcnRcIlxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHViQXJyYXkucHJvdG90eXBlLCBrZXksIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LnByb3RvdHlwZVtrZXldXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgYXJyYXksIG93bmVkKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5vd25lZCA9IG93bmVkO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQmFzZUF0b20obmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKTtcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgLy8gYWRkcyAvIHJlbW92ZXMgdGhlIG5lY2Vzc2FyeSBudW1lcmljIHByb3BlcnRpZXMgdG8gdGhpcyBvYmplY3RcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiAob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuIERpZCB5b3UgdXNlIHBlZWsoKSB0byBjaGFuZ2UgaXQ/XCIpO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCArPSBkZWx0YTtcbiAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBvbGRMZW5ndGggKyBkZWx0YSArIDEgPiBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFKVxuICAgICAgICAgICAgcmVzZXJ2ZUFycmF5QnVmZmVyKG9sZExlbmd0aCArIGRlbHRhICsgMSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmV3SXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWTtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgICAgICB9XG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5lbmhhbmNlcih2LCB1bmRlZmluZWQpOyB9KTtcbiAgICAgICAgdmFyIGxlbmd0aERlbHRhID0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XG4gICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNyZWF0ZSBvciByZW1vdmUgbmV3IGVudHJpZXNcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICAgICAgICBpZiAoZGVsZXRlQ291bnQgIT09IDAgfHwgbmV3SXRlbXMubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlBcnJheVNwbGljZShpbmRleCwgbmV3SXRlbXMsIHJlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXMocmVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zcGxpY2VJdGVtc0ludG9WYWx1ZXMgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgICAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy52YWx1ZXMpLnNwbGljZS5hcHBseShfYSwgW2luZGV4LCBkZWxldGVDb3VudF0uY29uY2F0KG5ld0l0ZW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcbiAgICAgICAgICAgICAgICAuY29uY2F0KG5ld0l0ZW1zLCB0aGlzLnZhbHVlcy5zbGljZShpbmRleCArIGRlbGV0ZUNvdW50KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlID0gZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5U3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuYXJyYXksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XG59KCkpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic2VydmFibGVBcnJheSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG93bmVkID09PSB2b2lkIDApIHsgb3duZWQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBfdGhpcywgb3duZWQpO1xuICAgICAgICBhZGRIaWRkZW5GaW5hbFByb3AoX3RoaXMsIFwiJG1vYnhcIiwgYWRtKTtcbiAgICAgICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpbml0aWFsVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2FmYXJpUHJvdG90eXBlU2V0dGVySW5oZXJpdGFuY2VCdWcpIHtcbiAgICAgICAgICAgIC8vIFNlZW1zIHRoYXQgU2FmYXJpIHdvbid0IHVzZSBudW1lcmljIHByb3RvdHlwZSBzZXR0ZXIgdW50aWxsIGFueSAqIG51bWVyaWMgcHJvcGVydHkgaXNcbiAgICAgICAgICAgIC8vIGRlZmluZWQgb24gdGhlIGluc3RhbmNlLiBBZnRlciB0aGF0IGl0IHdvcmtzIGZpbmUsIGV2ZW4gaWYgdGhpcyBwcm9wZXJ0eSBpcyBkZWxldGVkLlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFkbS5hcnJheSwgXCIwXCIsIEVOVFJZXzApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5pbnRlcmNlcHQoaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHsgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXlzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcnJheXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy5wZWVrKCksIGFycmF5cy5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpc09ic2VydmFibGVBcnJheShhKSA/IGEucGVlaygpIDogYSk7IH0pKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdJdGVtcykge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5zcGxpY2VXaXRoQXJyYXkoMCwgdGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGFycmF5IGJhY2sgdG8gYSAoc2hhbGxvdykgamF2YXNjcmlwdCBzdHJ1Y3R1cmUuXG4gICAgICogRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguZGVoYW5jZVZhbHVlcyh0aGlzLiRtb2J4LnZhbHVlcyk7XG4gICAgfTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kXG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGhpc0FyZywgZnJvbUluZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHZvaWQgMCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgICAgIHZhciBpZHggPSB0aGlzLmZpbmRJbmRleC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0KGlkeCk7XG4gICAgfTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kSW5kZXhcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRoaXNBcmcsIGZyb21JbmRleCkge1xuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB2b2lkIDApIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnBlZWsoKSwgbCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZyb21JbmRleDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCBpdGVtc1tpXSwgaSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qXG4gICAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXG4gICAgICogc2luY2UgdGhlc2UgZnVuY3Rpb25zIGFsdGVyIHRoZSBpbm5lciBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMuXG4gICAgICogQmVjYXVzZSB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMsIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbXB1dGVkIGZ1bmN0aW9uLFxuICAgICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxuICAgICAqL1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCkge1xuICAgICAgICB2YXIgbmV3SXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5zcGxpY2VXaXRoQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXMuJG1vYng7XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoYWRtLnZhbHVlcy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzLiRtb2J4LnZhbHVlcy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpcy4kbW9ieDtcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpdGVtcyk7XG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcmV2ZXJzZSBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIG1ha2VzIGl0IGJvdGggYSAnZGVyaXZhdGlvbicgYW5kIGEgJ211dGF0aW9uJy5cbiAgICAgICAgLy8gc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBkZWZhdWx0IGFuZCBqdXN0IG1ha2UgaXQgYW4gZGVydml0YXRpb25cbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5zb3J0LmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuJG1vYnguZGVoYW5jZVZhbHVlcyh0aGlzLiRtb2J4LnZhbHVlcykuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJbmRleChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzOiBcIiArIGluZGV4ICsgXCIgaXMgbmVnYXRpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzOiBcIiArIGluZGV4ICsgXCIgaXMgbm90IHNtYWxsZXIgdGhhbiBcIiArIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbmRleC5jYWxsKHRoaXMsIGZyb21JbmRleCk7XG4gICAgICAgIGNoZWNrSW5kZXguY2FsbCh0aGlzLCB0b0luZGV4KTtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvbGRJdGVtcyA9IHRoaXMuJG1vYngudmFsdWVzO1xuICAgICAgICB2YXIgbmV3SXRlbXM7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPCB0b0luZGV4KSB7XG4gICAgICAgICAgICBuZXdJdGVtcyA9IG9sZEl0ZW1zLnNsaWNlKDAsIGZyb21JbmRleCkuY29uY2F0KG9sZEl0ZW1zLnNsaWNlKGZyb21JbmRleCArIDEsIHRvSW5kZXggKyAxKSwgW1xuICAgICAgICAgICAgICAgIG9sZEl0ZW1zW2Zyb21JbmRleF1cbiAgICAgICAgICAgIF0sIG9sZEl0ZW1zLnNsaWNlKHRvSW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0b0luZGV4IDwgZnJvbUluZGV4XG4gICAgICAgICAgICBuZXdJdGVtcyA9IG9sZEl0ZW1zLnNsaWNlKDAsIHRvSW5kZXgpLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgb2xkSXRlbXNbZnJvbUluZGV4XVxuICAgICAgICAgICAgXSwgb2xkSXRlbXMuc2xpY2UodG9JbmRleCwgZnJvbUluZGV4KSwgb2xkSXRlbXMuc2xpY2UoZnJvbUluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwbGFjZShuZXdJdGVtcyk7XG4gICAgfTtcbiAgICAvLyBTZWUgIzczNCwgaW4gY2FzZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIHVucmVsaWFibGUuLi5cbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgaW1wbCA9IHRoaXMuJG1vYng7XG4gICAgICAgIGlmIChpbXBsKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBpbXBsLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbXBsLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1wbC5kZWhhbmNlVmFsdWUoaW1wbC52YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIGltcGxcbiAgICAgICAgICAgICAgICAudmFsdWVzXG4gICAgICAgICAgICAgICAgLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvLyBTZWUgIzczNCwgaW4gY2FzZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIHVucmVsaWFibGUuLi5cbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXMuJG1vYng7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhZG0udmFsdWVzO1xuICAgICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgYXQgaW5kZXggaW4gcmFuZ2VcbiAgICAgICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGFkbS5hdG9tKTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlID0gYWRtLmVuaGFuY2VyKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGFkbS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBhZGQgYSBuZXcgaXRlbVxuICAgICAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXk7XG59KFN0dWJBcnJheSkpO1xuZGVjbGFyZUl0ZXJhdG9yKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJyYXlBc0l0ZXJhdG9yKHRoaXMuc2xpY2UoKSk7XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5nZXRBcnJheUxlbmd0aCgpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAobmV3TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuJG1vYnguc2V0QXJyYXlMZW5ndGgobmV3TGVuZ3RoKTtcbiAgICB9XG59KTtcbltcbiAgICBcImV2ZXJ5XCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZvckVhY2hcIixcbiAgICBcImluZGV4T2ZcIixcbiAgICBcImpvaW5cIixcbiAgICBcImxhc3RJbmRleE9mXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInJlZHVjZVwiLFxuICAgIFwicmVkdWNlUmlnaHRcIixcbiAgICBcInNsaWNlXCIsXG4gICAgXCJzb21lXCIsXG4gICAgXCJ0b1N0cmluZ1wiLFxuICAgIFwidG9Mb2NhbGVTdHJpbmdcIlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgIHZhciBiYXNlRnVuYyA9IEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV07XG4gICAgaW52YXJpYW50KHR5cGVvZiBiYXNlRnVuYyA9PT0gXCJmdW5jdGlvblwiLCBcIkJhc2UgZnVuY3Rpb24gbm90IGRlZmluZWQgb24gQXJyYXkgcHJvdG90eXBlOiAnXCIgKyBmdW5jTmFtZSArIFwiJ1wiKTtcbiAgICBhZGRIaWRkZW5Qcm9wKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIGZ1bmNOYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlRnVuYy5hcHBseSh0aGlzLnBlZWsoKSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbn0pO1xuLyoqXG4gKiBXZSBkb24ndCB3YW50IHRob3NlIHRvIHNob3cgdXAgaW4gYGZvciAoY29uc3Qga2V5IGluIGFyKWAgLi4uXG4gKi9cbm1ha2VOb25FbnVtZXJhYmxlKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFtcbiAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgXCJpbnRlcmNlcHRcIixcbiAgICBcIm9ic2VydmVcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJjb25jYXRcIixcbiAgICBcImdldFwiLFxuICAgIFwicmVwbGFjZVwiLFxuICAgIFwidG9KU1wiLFxuICAgIFwidG9KU09OXCIsXG4gICAgXCJwZWVrXCIsXG4gICAgXCJmaW5kXCIsXG4gICAgXCJmaW5kSW5kZXhcIixcbiAgICBcInNwbGljZVwiLFxuICAgIFwic3BsaWNlV2l0aEFycmF5XCIsXG4gICAgXCJwdXNoXCIsXG4gICAgXCJwb3BcIixcbiAgICBcInNldFwiLFxuICAgIFwic2hpZnRcIixcbiAgICBcInVuc2hpZnRcIixcbiAgICBcInJldmVyc2VcIixcbiAgICBcInNvcnRcIixcbiAgICBcInJlbW92ZVwiLFxuICAgIFwibW92ZVwiLFxuICAgIFwidG9TdHJpbmdcIixcbiAgICBcInRvTG9jYWxlU3RyaW5nXCJcbl0pO1xuLy8gU2VlICMzNjRcbnZhciBFTlRSWV8wID0gY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoMCk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIGB0aGlzYD8sIHNlZSAjNzUyP1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFwiXCIgKyBpbmRleCwgY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoaW5kZXgpKTtcbn1cbmZ1bmN0aW9uIHJlc2VydmVBcnJheUJ1ZmZlcihtYXgpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkU7IGluZGV4IDwgbWF4OyBpbmRleCsrKVxuICAgICAgICBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpO1xuICAgIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSBtYXg7XG59XG5yZXNlcnZlQXJyYXlCdWZmZXIoMTAwMCk7XG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xuICAgIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZy4kbW9ieCk7XG59XG5cbnZhciBVTkNIQU5HRUQgPSB7fTtcbnZhciBPYnNlcnZhYmxlVmFsdWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgbmFtZSwgbm90aWZ5U3B5KSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7IG5vdGlmeVNweSA9IHRydWU7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICAgICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgX3RoaXMudmFsdWUgPSBlbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkLCBuYW1lKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgLy8gb25seSBub3RpZnkgc3B5IGlmIHRoaXMgaXMgYSBzdGFuZC1hbG9uZSBvYnNlcnZhYmxlXG4gICAgICAgICAgICBzcHlSZXBvcnQoeyB0eXBlOiBcImNyZWF0ZVwiLCBvYmplY3Q6IF90aGlzLCBuZXdWYWx1ZTogX3RoaXMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpIHtcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5wcmVwYXJlTmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gVU5DSEFOR0VEO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwbHkgbW9kaWZpZXJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUgPyBuZXdWYWx1ZSA6IFVOQ0hBTkdFRDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuc2V0TmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcbn0oQmFzZUF0b20pKTtcbk9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGVbcHJpbWl0aXZlU3ltYm9sKCldID0gT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIGlzT2JzZXJ2YWJsZVZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVWYWx1ZVwiLCBPYnNlcnZhYmxlVmFsdWUpO1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gICAgbTAwMTogXCJJdCBpcyBub3QgYWxsb3dlZCB0byBhc3NpZ24gbmV3IHZhbHVlcyB0byBAYWN0aW9uIGZpZWxkc1wiLFxuICAgIG0wMDI6IFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb25cIixcbiAgICBtMDAzOiBcImBydW5JbkFjdGlvbmAgZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIsXG4gICAgbTAwNDogXCJhdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvblwiLFxuICAgIG0wMDU6IFwiV2FybmluZzogYXR0ZW1wdGVkIHRvIHBhc3MgYW4gYWN0aW9uIHRvIGF1dG9ydW4uIEFjdGlvbnMgYXJlIHVudHJhY2tlZCBhbmQgd2lsbCBub3QgdHJpZ2dlciBvbiBzdGF0ZSBjaGFuZ2VzLiBVc2UgYHJlYWN0aW9uYCBvciB3cmFwIG9ubHkgeW91ciBzdGF0ZSBtb2RpZmljYXRpb24gY29kZSBpbiBhbiBhY3Rpb24uXCIsXG4gICAgbTAwNjogXCJXYXJuaW5nOiBhdHRlbXB0ZWQgdG8gcGFzcyBhbiBhY3Rpb24gdG8gYXV0b3J1bkFzeW5jLiBBY3Rpb25zIGFyZSB1bnRyYWNrZWQgYW5kIHdpbGwgbm90IHRyaWdnZXIgb24gc3RhdGUgY2hhbmdlcy4gVXNlIGByZWFjdGlvbmAgb3Igd3JhcCBvbmx5IHlvdXIgc3RhdGUgbW9kaWZpY2F0aW9uIGNvZGUgaW4gYW4gYWN0aW9uLlwiLFxuICAgIG0wMDc6IFwicmVhY3Rpb24gb25seSBhY2NlcHRzIDIgb3IgMyBhcmd1bWVudHMuIElmIG1pZ3JhdGluZyBmcm9tIE1vYlggMiwgcGxlYXNlIHByb3ZpZGUgYW4gb3B0aW9ucyBvYmplY3RcIixcbiAgICBtMDA4OiBcIndyYXBwaW5nIHJlYWN0aW9uIGV4cHJlc3Npb24gaW4gYGFzUmVmZXJlbmNlYCBpcyBubyBsb25nZXIgc3VwcG9ydGVkLCB1c2Ugb3B0aW9ucyBvYmplY3QgaW5zdGVhZFwiLFxuICAgIG0wMDk6IFwiQGNvbXB1dGVkIGNhbiBvbmx5IGJlIHVzZWQgb24gZ2V0dGVyIGZ1bmN0aW9ucywgbGlrZTogJ0Bjb21wdXRlZCBnZXQgbXlQcm9wcygpIHsgcmV0dXJuIC4uLjsgfScuIEl0IGxvb2tzIGxpa2UgaXQgd2FzIHVzZWQgb24gYSBwcm9wZXJ0eS5cIixcbiAgICBtMDEwOiBcIkBjb21wdXRlZCBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlciBmdW5jdGlvbnMsIGxpa2U6ICdAY29tcHV0ZWQgZ2V0IG15UHJvcHMoKSB7IHJldHVybiAuLi47IH0nXCIsXG4gICAgbTAxMTogXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLiBJZiB1c2luZyBjb21wdXRlZCBhcyBkZWNvcmF0b3IsIGRvbid0IHBhc3MgaXQgYXJndW1lbnRzXCIsXG4gICAgbTAxMjogXCJjb21wdXRlZCB0YWtlcyBvbmUgb3IgdHdvIGFyZ3VtZW50cyBpZiB1c2VkIGFzIGZ1bmN0aW9uXCIsXG4gICAgbTAxMzogXCJbbW9ieC5leHByXSAnZXhwcicgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnNpZGUgb3RoZXIgcmVhY3RpdmUgZnVuY3Rpb25zLlwiLFxuICAgIG0wMTQ6IFwiZXh0ZW5kT2JzZXJ2YWJsZSBleHBlY3RlZCAyIG9yIG1vcmUgYXJndW1lbnRzXCIsXG4gICAgbTAxNTogXCJleHRlbmRPYnNlcnZhYmxlIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIsXG4gICAgbTAxNjogXCJleHRlbmRPYnNlcnZhYmxlIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIixcbiAgICBtMDE3OiBcImFsbCBhcmd1bWVudHMgb2YgZXh0ZW5kT2JzZXJ2YWJsZSBzaG91bGQgYmUgb2JqZWN0c1wiLFxuICAgIG0wMTg6IFwiZXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIixcbiAgICBtMDE5OiBcIlttb2J4LmlzT2JzZXJ2YWJsZV0gaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiLFxuICAgIG0wMjA6IFwibW9kaWZpZXJzIGNhbiBvbmx5IGJlIHVzZWQgZm9yIGluZGl2aWR1YWwgb2JqZWN0IHByb3BlcnRpZXNcIixcbiAgICBtMDIxOiBcIm9ic2VydmFibGUgZXhwZWN0cyB6ZXJvIG9yIG9uZSBhcmd1bWVudHNcIixcbiAgICBtMDIyOiBcIkBvYnNlcnZhYmxlIGNhbiBub3QgYmUgdXNlZCBvbiBnZXR0ZXJzLCB1c2UgQGNvbXB1dGVkIGluc3RlYWRcIixcbiAgICBtMDI0OiBcIndoeVJ1bigpIGNhbiBvbmx5IGJlIHVzZWQgaWYgYSBkZXJpdmF0aW9uIGlzIGFjdGl2ZSwgb3IgYnkgcGFzc2luZyBhbiBjb21wdXRlZCB2YWx1ZSAvIHJlYWN0aW9uIGV4cGxpY2l0bHkuIElmIHlvdSBpbnZva2VkIHdoeVJ1biBmcm9tIGluc2lkZSBhIGNvbXB1dGF0aW9uOyB0aGUgY29tcHV0YXRpb24gaXMgY3VycmVudGx5IHN1c3BlbmRlZCBidXQgcmUtZXZhbHVhdGluZyBiZWNhdXNlIHNvbWVib2R5IHJlcXVlc3RlZCBpdHMgdmFsdWUuXCIsXG4gICAgbTAyNTogXCJ3aHlSdW4gY2FuIG9ubHkgYmUgdXNlZCBvbiByZWFjdGlvbnMgYW5kIGNvbXB1dGVkIHZhbHVlc1wiLFxuICAgIG0wMjY6IFwiYGFjdGlvbmAgY2FuIG9ubHkgYmUgaW52b2tlZCBvbiBmdW5jdGlvbnNcIixcbiAgICBtMDI4OiBcIkl0IGlzIG5vdCBhbGxvd2VkIHRvIHNldCBgdXNlU3RyaWN0YCB3aGVuIGEgZGVyaXZhdGlvbiBpcyBydW5uaW5nXCIsXG4gICAgbTAyOTogXCJJTlRFUk5BTCBFUlJPUiBvbmx5IG9uQmVjb21lVW5vYnNlcnZlZCBzaG91bGRuJ3QgYmUgY2FsbGVkIHR3aWNlIGluIGEgcm93XCIsXG4gICAgbTAzMGE6IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgb2JzZXJ2ZWQgb2JzZXJ2YWJsZSB2YWx1ZXMgb3V0c2lkZSBhY3Rpb25zIGlzIG5vdCBhbGxvd2VkLiBQbGVhc2Ugd3JhcCB0aGUgY29kZSBpbiBhbiBgYWN0aW9uYCBpZiB0aGlzIGNoYW5nZSBpcyBpbnRlbmRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIixcbiAgICBtMDMwYjogXCJTaWRlIGVmZmVjdHMgbGlrZSBjaGFuZ2luZyBzdGF0ZSBhcmUgbm90IGFsbG93ZWQgYXQgdGhpcyBwb2ludC4gQXJlIHlvdSB0cnlpbmcgdG8gbW9kaWZ5IHN0YXRlIGZyb20sIGZvciBleGFtcGxlLCB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9mIGEgUmVhY3QgY29tcG9uZW50PyBUcmllZCB0byBtb2RpZnk6IFwiLFxuICAgIG0wMzE6IFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIixcbiAgICBtMDMyOiBcIiogVGhpcyBjb21wdXRhdGlvbiBpcyBzdXNwZW5kZWQgKG5vdCBpbiB1c2UgYnkgYW55IHJlYWN0aW9uKSBhbmQgd29uJ3QgcnVuIGF1dG9tYXRpY2FsbHkuXFxuXHREaWRuJ3QgZXhwZWN0IHRoaXMgY29tcHV0YXRpb24gdG8gYmUgc3VzcGVuZGVkIGF0IHRoaXMgcG9pbnQ/XFxuXHQgIDEuIE1ha2Ugc3VyZSB0aGlzIGNvbXB1dGF0aW9uIGlzIHVzZWQgYnkgYSByZWFjdGlvbiAocmVhY3Rpb24sIGF1dG9ydW4sIG9ic2VydmVyKS5cXG5cdCAgMi4gQ2hlY2sgd2hldGhlciB5b3UgYXJlIHVzaW5nIHRoaXMgY29tcHV0YXRpb24gc3luY2hyb25vdXNseSAoaW4gdGhlIHNhbWUgc3RhY2sgYXMgdGhleSByZWFjdGlvbiB0aGF0IG5lZWRzIGl0KS5cIixcbiAgICBtMDMzOiBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgdGhlIGZpcmUgaW1tZWRpYXRlbHkgcHJvcGVydHkgZm9yIG9ic2VydmFibGUgbWFwcy5cIixcbiAgICBtMDM0OiBcImBtb2J4Lm1hcGAgaXMgZGVwcmVjYXRlZCwgdXNlIGBuZXcgT2JzZXJ2YWJsZU1hcGAgb3IgYG1vYngub2JzZXJ2YWJsZS5tYXBgIGluc3RlYWRcIixcbiAgICBtMDM1OiBcIkNhbm5vdCBtYWtlIHRoZSBkZXNpZ25hdGVkIG9iamVjdCBvYnNlcnZhYmxlOyBpdCBpcyBub3QgZXh0ZW5zaWJsZVwiLFxuICAgIG0wMzY6IFwiSXQgaXMgbm90IHBvc3NpYmxlIHRvIGdldCBpbmRleCBhdG9tcyBmcm9tIGFycmF5c1wiLFxuICAgIG0wMzc6IFwiSGkgdGhlcmUhIEknbSBzb3JyeSB5b3UgaGF2ZSBqdXN0IHJ1biBpbnRvIGFuIGV4Y2VwdGlvbi5cXG5JZiB5b3VyIGRlYnVnZ2VyIGVuZHMgdXAgaGVyZSwga25vdyB0aGF0IHNvbWUgcmVhY3Rpb24gKGxpa2UgdGhlIHJlbmRlcigpIG9mIGFuIG9ic2VydmVyIGNvbXBvbmVudCwgYXV0b3J1biBvciByZWFjdGlvbilcXG50aHJldyBhbiBleGNlcHRpb24gYW5kIHRoYXQgbW9ieCBjYXVnaHQgaXQsIHRvIGF2b2lkIHRoYXQgaXQgYnJpbmdzIHRoZSByZXN0IG9mIHlvdXIgYXBwbGljYXRpb24gZG93bi5cXG5UaGUgb3JpZ2luYWwgY2F1c2Ugb2YgdGhlIGV4Y2VwdGlvbiAodGhlIGNvZGUgdGhhdCBjYXVzZWQgdGhpcyByZWFjdGlvbiB0byBydW4gKGFnYWluKSksIGlzIHN0aWxsIGluIHRoZSBzdGFjay5cXG5cXG5Ib3dldmVyLCBtb3JlIGludGVyZXN0aW5nIGlzIHRoZSBhY3R1YWwgc3RhY2sgdHJhY2Ugb2YgdGhlIGVycm9yIGl0c2VsZi5cXG5Ib3BlZnVsbHkgdGhlIGVycm9yIGlzIGFuIGluc3RhbmNlb2YgRXJyb3IsIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHlvdSBjYW4gaW5zcGVjdCB0aGUgb3JpZ2luYWwgc3RhY2sgb2YgdGhlIGVycm9yIGZyb20gd2hlcmUgaXQgd2FzIHRocm93bi5cXG5TZWUgYGVycm9yLnN0YWNrYCBwcm9wZXJ0eSwgb3IgcHJlc3MgdGhlIHZlcnkgc3VidGxlIFxcXCIoLi4uKVxcXCIgbGluayB5b3Ugc2VlIG5lYXIgdGhlIGNvbnNvbGUuZXJyb3IgbWVzc2FnZSB0aGF0IHByb2JhYmx5IGJyb3VnaHQgeW91IGhlcmUuXFxuVGhhdCBzdGFjayBpcyBtb3JlIGludGVyZXN0aW5nIHRoYW4gdGhlIHN0YWNrIG9mIHRoaXMgY29uc29sZS5lcnJvciBpdHNlbGYuXFxuXFxuSWYgdGhlIGV4Y2VwdGlvbiB5b3Ugc2VlIGlzIGFuIGV4Y2VwdGlvbiB5b3UgY3JlYXRlZCB5b3Vyc2VsZiwgbWFrZSBzdXJlIHRvIHVzZSBgdGhyb3cgbmV3IEVycm9yKFxcXCJPb3BzXFxcIilgIGluc3RlYWQgb2YgYHRocm93IFxcXCJPb3BzXFxcImAsXFxuYmVjYXVzZSB0aGUgamF2YXNjcmlwdCBlbnZpcm9ubWVudCB3aWxsIG9ubHkgcHJlc2VydmUgdGhlIG9yaWdpbmFsIHN0YWNrIHRyYWNlIGluIHRoZSBmaXJzdCBmb3JtLlxcblxcbllvdSBjYW4gYWxzbyBtYWtlIHN1cmUgdGhlIGRlYnVnZ2VyIHBhdXNlcyB0aGUgbmV4dCB0aW1lIHRoaXMgdmVyeSBzYW1lIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgZW5hYmxpbmcgXFxcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25cXFwiLlxcbihOb3RlIHRoYXQgaXQgbWlnaHQgcGF1c2Ugb24gbWFueSBvdGhlciwgdW5yZWxhdGVkIGV4Y2VwdGlvbiBhcyB3ZWxsKS5cXG5cXG5JZiB0aGF0IGFsbCBkb2Vzbid0IGhlbHAgeW91IG91dCwgZmVlbCBmcmVlIHRvIG9wZW4gYW4gaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3VlcyFcXG5cIixcbiAgICBtMDM4OiBcIk1pc3NpbmcgaXRlbXMgaW4gdGhpcyBsaXN0P1xcbiAgICAxLiBDaGVjayB3aGV0aGVyIGFsbCB1c2VkIHZhbHVlcyBhcmUgcHJvcGVybHkgbWFya2VkIGFzIG9ic2VydmFibGUgKHVzZSBpc09ic2VydmFibGUgdG8gdmVyaWZ5KVxcbiAgICAyLiBNYWtlIHN1cmUgeW91IGRpZG4ndCBkZXJlZmVyZW5jZSB2YWx1ZXMgdG9vIGVhcmx5LiBNb2JYIG9ic2VydmVzIHByb3BzLCBub3QgcHJpbWl0aXZlcy4gRS5nOiB1c2UgJ3BlcnNvbi5uYW1lJyBpbnN0ZWFkIG9mICduYW1lJyBpbiB5b3VyIGNvbXB1dGF0aW9uLlxcblwiXG59O1xuZnVuY3Rpb24gZ2V0TWVzc2FnZShpZCkge1xuICAgIHJldHVybiBtZXNzYWdlc1tpZF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbikge1xuICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMjZcIikpO1xuICAgIGludmFyaWFudCh0eXBlb2YgYWN0aW9uTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBhY3Rpb25OYW1lLmxlbmd0aCA+IDAsIFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIHZhciByZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmVzLm9yaWdpbmFsRm4gPSBmbjtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgcnVuSW5mbyA9IHN0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGZuLCBzY29wZSwgYXJncyk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEFjdGlvbihydW5JbmZvKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydEFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCkgJiYgISFhY3Rpb25OYW1lO1xuICAgIHZhciBzdGFydFRpbWUgPSAwO1xuICAgIGlmIChub3RpZnlTcHkpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGwgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgfHwgMDtcbiAgICAgICAgdmFyIGZsYXR0ZW5kQXJncyA9IG5ldyBBcnJheShsKTtcbiAgICAgICAgaWYgKGwgPiAwKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICAgICAgZmxhdHRlbmRBcmdzW2ldID0gYXJnc1tpXTtcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBmbjogZm4sXG4gICAgICAgICAgICBvYmplY3Q6IHNjb3BlLFxuICAgICAgICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZEFyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBwcmV2RGVyaXZhdGlvbiA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZXZEZXJpdmF0aW9uOiBwcmV2RGVyaXZhdGlvbixcbiAgICAgICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzOiBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMsXG4gICAgICAgIG5vdGlmeVNweTogbm90aWZ5U3B5LFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICAgIH07XG59XG5mdW5jdGlvbiBlbmRBY3Rpb24ocnVuSW5mbykge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzKTtcbiAgICBlbmRCYXRjaCgpO1xuICAgIHVudHJhY2tlZEVuZChydW5JbmZvLnByZXZEZXJpdmF0aW9uKTtcbiAgICBpZiAocnVuSW5mby5ub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZSB9KTtcbn1cbmZ1bmN0aW9uIHVzZVN0cmljdChzdHJpY3QpIHtcbiAgICBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID09PSBudWxsLCBnZXRNZXNzYWdlKFwibTAyOFwiKSk7XG4gICAgZ2xvYmFsU3RhdGUuc3RyaWN0TW9kZSA9IHN0cmljdDtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFzdHJpY3Q7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGVFbmFibGVkKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS5zdHJpY3RNb2RlO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXMoYWxsb3dTdGF0ZUNoYW5nZXMsIGZ1bmMpIHtcbiAgICAvLyBUT0RPOiBkZXByZWNhdGUgLyByZWZhY3RvciB0aGlzIGZ1bmN0aW9uIGluIG5leHQgbWFqb3JcbiAgICAvLyBDdXJyZW50bHkgb25seSB1c2VkIGJ5IGBAb2JzZXJ2ZXJgXG4gICAgLy8gUHJvcG9zZWQgY2hhbmdlOiByZW1vdmUgZmlyc3QgcGFyYW0sIHJlbmFtZSB0byBgZm9yYmlkU3RhdGVDaGFuZ2VzYCxcbiAgICAvLyByZXF1aXJlIGVycm9yIGNhbGxiYWNrIGluc3RlYWQgb2YgdGhlIGhhcmRjb2RlZCBlcnJvciBtZXNzYWdlIG5vdyB1c2VkXG4gICAgLy8gVXNlIGBpbkFjdGlvbmAgaW5zdGVhZCBvZiBhbGxvd1N0YXRlQ2hhbmdlcyBpbiBkZXJpdmF0aW9uLnRzIHRvIGNoZWNrIHN0cmljdE1vZGVcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xuICAgIHZhciByZXM7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0gZnVuYygpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcztcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gcHJldjtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgZGVjb3JhdG9yLCB0aGF0IG5vcm1hbGl6ZXMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW5cbiAqIFR5cGVTY3JpcHQgYW5kIEJhYmVsLiBNYWlubHkgY2F1c2VkIGJ5IHRoZSBmYWN0IHRoYXQgbGVnYWN5LWRlY29yYXRvciBjYW5ub3QgYXNzaWduXG4gKiB2YWx1ZXMgZHVyaW5nIGluc3RhbmNlIGNyZWF0aW9uIHRvIHByb3BlcnRpZXMgdGhhdCBoYXZlIGEgZ2V0dGVyIHNldHRlci5cbiAqXG4gKiAtIFNpZ2ggLVxuICpcbiAqIEFsc28gdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIEBkZWNvcmF0b3IgZmllbGQgYW5kIEBkZWNvcmF0b3IoYXJncykgZmllbGQsIGFuZCBkaWZmZXJlbnQgZm9ybXMgb2YgdmFsdWVzLlxuICogRm9yIHBlcmZvcm1hbmNlIChjcHUgYW5kIG1lbSkgcmVhc29ucyB0aGUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGRlZmluZWQgb24gdGhlIHByb3RvdHlwZSAoYXQgbGVhc3QgaW5pdGlhbGx5KS5cbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVzZSBwcm9wZXJ0aWVzIGRlc3BpdGUgYmVpbmcgZW51bWVyYWJsZSBtaWdodCBub3Qgc2hvdyB1cCBpbiBPYmplY3Qua2V5cygpIChidXQgdGhleSB3aWxsIHNob3cgdXAgaW4gZm9yLi4uaW4gbG9vcHMpLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc1Byb3BlcnR5RGVjb3JhdG9yKFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCBvbmNlLCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhZGRlZCB0byBhIG5ldyBpbnN0YW5jZS5cbiAgICAgKiBXaGVuIHRoaXMgaGFwcGVucyBpcyBub3Qgc3RyaWN0bHkgZGV0ZXJtaW5lZCBkdWUgdG8gZGlmZmVyZW5jZXMgaW4gVFMgYW5kIEJhYmVsOlxuICAgICAqIFR5cGVzY3JpcHQ6IFVzdWFsbHkgd2hlbiBjb25zdHJ1Y3RpbmcgdGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEJhYmVsLCBzb21ldGltZXMgVHlwZXNjcmlwdDogZHVyaW5nIHRoZSBmaXJzdCBnZXQgLyBzZXRcbiAgICAgKiBCb3RoOiB3aGVuIGNhbGxpbmcgYHJ1bkxhenlJbml0aWFsaXplcnMoaW5zdGFuY2UpYFxuICAgICAqL1xuICAgIG9uSW5pdGlhbGl6ZSwgZ2V0LCBzZXQsIGVudW1lcmFibGUsIFxuICAgIC8qKlxuICAgICAqIENhbiB0aGlzIGRlY29yYXRvciBpbnZva2VkIHdpdGggYXJndW1lbnRzPyBlLmcuIEBkZWNvcmF0b3IoYXJncylcbiAgICAgKi9cbiAgICBhbGxvd0N1c3RvbUFyZ3VtZW50cykge1xuICAgIGZ1bmN0aW9uIGNsYXNzUHJvcGVydHlEZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IsIGN1c3RvbUFyZ3MsIGFyZ0xlbikge1xuICAgICAgICBpZiAoYXJnTGVuID09PSB2b2lkIDApIHsgYXJnTGVuID0gMDsgfVxuICAgICAgICBpbnZhcmlhbnQoYWxsb3dDdXN0b21Bcmd1bWVudHMgfHwgcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSwgXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IChleGNlcHQgZm9yIGdldHRlciAvIHNldHRlcnMpXG4gICAgICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fbW9ieEluaXRpYWxpemVkUHJvcHMgfHwgdGhpcy5fX21vYnhJbml0aWFsaXplZFByb3BzW2tleV0gIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlc2NyaXB0SW5pdGlhbGl6ZVByb3BlcnR5KHRoaXMsIGtleSwgdW5kZWZpbmVkLCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0LmNhbGwodGhpcywga2V5KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fbW9ieEluaXRpYWxpemVkUHJvcHMgfHwgdGhpcy5fX21vYnhJbml0aWFsaXplZFByb3BzW2tleV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzY3JpcHRJbml0aWFsaXplUHJvcGVydHkodGhpcywga2V5LCB2LCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmNhbGwodGhpcywga2V5LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUgJiYgYXJnTGVuIDwgMykpIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlc2NyaXB0IHRhcmdldCBpcyBFUzMsIHNvIGl0IHdvbid0IGRlZmluZSBwcm9wZXJ0eSBmb3IgdXNcbiAgICAgICAgICAgICAgICAvLyBvciB1c2luZyBSZWZsZWN0LmRlY29yYXRlIHBvbHlmaWxsLCB3aGljaCB3aWxsIHJldHVybiBubyBkZXNjcmlwdG9yXG4gICAgICAgICAgICAgICAgLy8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzMzMylcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIG5ld0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0Rlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBiYWJlbCBhbmQgdHlwZXNjcmlwdCBnZXR0ZXIgLyBzZXR0ZXIgcHJvcHNcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkodGFyZ2V0LCBcIl9fbW9ieExhenlJbml0aWFsaXplcnNcIikpIHtcbiAgICAgICAgICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgXCJfX21vYnhMYXp5SW5pdGlhbGl6ZXJzXCIsICh0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycyAmJiB0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycy5zbGljZSgpKSB8fCBbXSAvLyBzdXBwb3J0IGluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gZGVzY3JpcHRvci52YWx1ZSwgaW5pdGlhbGl6ZXJfMSA9IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXI7XG4gICAgICAgICAgICB0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycy5wdXNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZShpbnN0YW5jZSwga2V5LCBpbml0aWFsaXplcl8xID8gaW5pdGlhbGl6ZXJfMS5jYWxsKGluc3RhbmNlKSA6IHZhbHVlXzEsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX21vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTGF6eUluaXRpYWxpemVycyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldC5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnMgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5MYXp5SW5pdGlhbGl6ZXJzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXQuY2FsbCh0aGlzLCBrZXksIHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsbG93Q3VzdG9tQXJndW1lbnRzKSB7XG4gICAgICAgIC8qKiBJZiBjdXN0b20gYXJndW1lbnRzIGFyZSBhbGxvd2VkLCB3ZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZGVjb3JhdG9yICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvKiogRGlyZWN0IGludm9jYXRpb246IEBkZWNvcmF0b3IgYmxhICovXG4gICAgICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NQcm9wZXJ0eURlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgLyoqIEluZGlyZWN0IGludm9jYXRpb246IEBkZWNvcmF0b3IoYXJncykgYmxhICovXG4gICAgICAgICAgICB2YXIgb3V0ZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUHJvcGVydHlEZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IsIG91dGVyQXJncywgYXJnTGVuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1Byb3BlcnR5RGVjb3JhdG9yO1xufVxuZnVuY3Rpb24gdHlwZXNjcmlwdEluaXRpYWxpemVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB2LCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShpbnN0YW5jZSwgXCJfX21vYnhJbml0aWFsaXplZFByb3BzXCIpKVxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGluc3RhbmNlLCBcIl9fbW9ieEluaXRpYWxpemVkUHJvcHNcIiwge30pO1xuICAgIGluc3RhbmNlLl9fbW9ieEluaXRpYWxpemVkUHJvcHNba2V5XSA9IHRydWU7XG4gICAgb25Jbml0aWFsaXplKGluc3RhbmNlLCBrZXksIHYsIGN1c3RvbUFyZ3MsIGJhc2VEZXNjcmlwdG9yKTtcbn1cbmZ1bmN0aW9uIHJ1bkxhenlJbml0aWFsaXplcnMoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVycyA9PT0gdHJ1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChpbnN0YW5jZS5fX21vYnhMYXp5SW5pdGlhbGl6ZXJzKSB7XG4gICAgICAgIGFkZEhpZGRlblByb3AoaW5zdGFuY2UsIFwiX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1wiLCB0cnVlKTtcbiAgICAgICAgaW5zdGFuY2UuX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVycyAmJlxuICAgICAgICAgICAgaW5zdGFuY2UuX19tb2J4TGF6eUluaXRpYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbml0aWFsaXplcikgeyByZXR1cm4gaW5pdGlhbGl6ZXIoaW5zdGFuY2UpOyB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvcihhcmdzKSB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMiB8fCBhcmdzLmxlbmd0aCA9PT0gMykgJiYgdHlwZW9mIGFyZ3NbMV0gPT09IFwic3RyaW5nXCI7XG59XG5cbnZhciBhY3Rpb25GaWVsZERlY29yYXRvciA9IGNyZWF0ZUNsYXNzUHJvcGVydHlEZWNvcmF0b3IoZnVuY3Rpb24gKHRhcmdldCwga2V5LCB2YWx1ZSwgYXJncywgb3JpZ2luYWxEZXNjcmlwdG9yKSB7XG4gICAgdmFyIGFjdGlvbk5hbWUgPSBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSAxID8gYXJnc1swXSA6IHZhbHVlLm5hbWUgfHwga2V5IHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuICAgIHZhciB3cmFwcGVkQWN0aW9uID0gYWN0aW9uKGFjdGlvbk5hbWUsIHZhbHVlKTtcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwga2V5LCB3cmFwcGVkQWN0aW9uKTtcbn0sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trZXldO1xufSwgZnVuY3Rpb24gKCkge1xuICAgIGludmFyaWFudChmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDFcIikpO1xufSwgZmFsc2UsIHRydWUpO1xudmFyIGJvdW5kQWN0aW9uRGVjb3JhdG9yID0gY3JlYXRlQ2xhc3NQcm9wZXJ0eURlY29yYXRvcihmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKTtcbn0sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trZXldO1xufSwgZnVuY3Rpb24gKCkge1xuICAgIGludmFyaWFudChmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDFcIikpO1xufSwgZmFsc2UsIGZhbHNlKTtcbnZhciBhY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEsIGFyZzIpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IoYXJnMSk7XG4gICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59O1xuYWN0aW9uLmJvdW5kID0gZnVuY3Rpb24gYm91bmRBY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBhY3Rpb25fMSA9IGNyZWF0ZUFjdGlvbihcIjxub3QgeWV0IGJvdW5kIGFjdGlvbj5cIiwgYXJnMSk7XG4gICAgICAgIGFjdGlvbl8xLmF1dG9CaW5kID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbl8xO1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRBY3Rpb25EZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn07XG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCBAYWN0aW9uIG1ldGhvZCgpIHsgfS4gRGVmaW5lZCBvbiBwcm90byBiZWZvcmUgYmVpbmcgZGVjb3JhdGVkXG4gICAgICAgICAgICAvLyBEb24ndCB1c2UgdGhlIGZpZWxkIGRlY29yYXRvciBpZiB3ZSBhcmUganVzdCBkZWNvcmF0aW5nIGEgbWV0aG9kXG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlQWN0aW9uKG5hbWUsIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBhY3Rpb24gaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgd2l0aCBnZXR0ZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJvdW5kIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bkluQWN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgYWN0aW9uTmFtZSA9IHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiID8gYXJnMSA6IGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIjtcbiAgICB2YXIgZm4gPSB0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiID8gYXJnMSA6IGFyZzI7XG4gICAgdmFyIHNjb3BlID0gdHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzIgOiBhcmczO1xuICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMDJcIikpO1xuICAgIGludmFyaWFudChmbi5sZW5ndGggPT09IDAsIGdldE1lc3NhZ2UoXCJtMDAzXCIpKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGFjdGlvbk5hbWUgPT09IFwic3RyaW5nXCIgJiYgYWN0aW9uTmFtZS5sZW5ndGggPiAwLCBcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBpc0FjdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IFwiZnVuY3Rpb25cIiAmJiB0aGluZy5pc01vYnhBY3Rpb24gPT09IHRydWU7XG59XG5mdW5jdGlvbiBkZWZpbmVCb3VuZEFjdGlvbih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZm4pIHtcbiAgICB2YXIgcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihwcm9wZXJ0eU5hbWUsIGZuLCB0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcGVydHlOYW1lLCByZXMpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGFyZUJvdGhOYU4oYSwgYikgfHwgaWRlbnRpdHlDb21wYXJlcihhLCBiKTtcbn1cbnZhciBjb21wYXJlciA9IHtcbiAgICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgICBzdHJ1Y3R1cmFsOiBzdHJ1Y3R1cmFsQ29tcGFyZXIsXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbXBhcmVyXG59O1xuXG5mdW5jdGlvbiBhdXRvcnVuKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgbmFtZSwgdmlldywgc2NvcGU7XG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5hbWUgPSBhcmcxO1xuICAgICAgICB2aWV3ID0gYXJnMjtcbiAgICAgICAgc2NvcGUgPSBhcmczO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9IGFyZzEubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQoKTtcbiAgICAgICAgdmlldyA9IGFyZzE7XG4gICAgICAgIHNjb3BlID0gYXJnMjtcbiAgICB9XG4gICAgaW52YXJpYW50KHR5cGVvZiB2aWV3ID09PSBcImZ1bmN0aW9uXCIsIGdldE1lc3NhZ2UoXCJtMDA0XCIpKTtcbiAgICBpbnZhcmlhbnQoaXNBY3Rpb24odmlldykgPT09IGZhbHNlLCBnZXRNZXNzYWdlKFwibTAwNVwiKSk7XG4gICAgaWYgKHNjb3BlKVxuICAgICAgICB2aWV3ID0gdmlldy5iaW5kKHNjb3BlKTtcbiAgICB2YXIgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICAgICAgdmlldyhyZWFjdGlvbik7XG4gICAgfVxuICAgIHJlYWN0aW9uLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHJlYWN0aW9uLmdldERpc3Bvc2VyKCk7XG59XG5mdW5jdGlvbiB3aGVuKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICB2YXIgbmFtZSwgcHJlZGljYXRlLCBlZmZlY3QsIHNjb3BlO1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuYW1lID0gYXJnMTtcbiAgICAgICAgcHJlZGljYXRlID0gYXJnMjtcbiAgICAgICAgZWZmZWN0ID0gYXJnMztcbiAgICAgICAgc2NvcGUgPSBhcmc0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9IFwiV2hlbkBcIiArIGdldE5leHRJZCgpO1xuICAgICAgICBwcmVkaWNhdGUgPSBhcmcxO1xuICAgICAgICBlZmZlY3QgPSBhcmcyO1xuICAgICAgICBzY29wZSA9IGFyZzM7XG4gICAgfVxuICAgIHZhciBkaXNwb3NlciA9IGF1dG9ydW4obmFtZSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHNjb3BlKSkge1xuICAgICAgICAgICAgci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB2YXIgcHJldlVudHJhY2tlZCA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgICAgICAgICBlZmZlY3QuY2FsbChzY29wZSk7XG4gICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGlzcG9zZXI7XG59XG5mdW5jdGlvbiBhdXRvcnVuQXN5bmMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIHZhciBuYW1lLCBmdW5jLCBkZWxheSwgc2NvcGU7XG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5hbWUgPSBhcmcxO1xuICAgICAgICBmdW5jID0gYXJnMjtcbiAgICAgICAgZGVsYXkgPSBhcmczO1xuICAgICAgICBzY29wZSA9IGFyZzQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYW1lID0gYXJnMS5uYW1lIHx8IFwiQXV0b3J1bkFzeW5jQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIGZ1bmMgPSBhcmcxO1xuICAgICAgICBkZWxheSA9IGFyZzI7XG4gICAgICAgIHNjb3BlID0gYXJnMztcbiAgICB9XG4gICAgaW52YXJpYW50KGlzQWN0aW9uKGZ1bmMpID09PSBmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDZcIikpO1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKVxuICAgICAgICBkZWxheSA9IDE7XG4gICAgaWYgKHNjb3BlKVxuICAgICAgICBmdW5jID0gZnVuYy5iaW5kKHNjb3BlKTtcbiAgICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgciA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFyLmlzRGlzcG9zZWQpXG4gICAgICAgICAgICAgICAgICAgIHIudHJhY2socmVhY3Rpb25SdW5uZXIpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIGZ1bmMocik7XG4gICAgfVxuICAgIHIuc2NoZWR1bGUoKTtcbiAgICByZXR1cm4gci5nZXREaXNwb3NlcigpO1xufVxuZnVuY3Rpb24gcmVhY3Rpb24oZXhwcmVzc2lvbiwgZWZmZWN0LCBhcmczKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzKSB7XG4gICAgICAgIGZhaWwoZ2V0TWVzc2FnZShcIm0wMDdcIikpO1xuICAgIH1cbiAgICBpZiAoaXNNb2RpZmllckRlc2NyaXB0b3IoZXhwcmVzc2lvbikpIHtcbiAgICAgICAgZmFpbChnZXRNZXNzYWdlKFwibTAwOFwiKSk7XG4gICAgfVxuICAgIHZhciBvcHRzO1xuICAgIGlmICh0eXBlb2YgYXJnMyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gYXJnMztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG4gICAgb3B0cy5uYW1lID1cbiAgICAgICAgb3B0cy5uYW1lIHx8IGV4cHJlc3Npb24ubmFtZSB8fCBlZmZlY3QubmFtZSB8fCBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgb3B0cy5maXJlSW1tZWRpYXRlbHkgPSBhcmczID09PSB0cnVlIHx8IG9wdHMuZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlO1xuICAgIG9wdHMuZGVsYXkgPSBvcHRzLmRlbGF5IHx8IDA7XG4gICAgb3B0cy5jb21wYXJlU3RydWN0dXJhbCA9IG9wdHMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0cy5zdHJ1Y3QgfHwgZmFsc2U7XG4gICAgLy8gVE9ETzogY3JlYXRlcyB1Z2x5IHNweSBldmVudHMsIHVzZSBgZWZmZWN0ID0gKHIpID0+IHJ1bkluQWN0aW9uKG9wdHMubmFtZSwgKCkgPT4gZWZmZWN0KHIpKWAgaW5zdGVhZFxuICAgIGVmZmVjdCA9IGFjdGlvbihvcHRzLm5hbWUsIG9wdHMuY29udGV4dCA/IGVmZmVjdC5iaW5kKG9wdHMuY29udGV4dCkgOiBlZmZlY3QpO1xuICAgIGlmIChvcHRzLmNvbnRleHQpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uYmluZChvcHRzLmNvbnRleHQpO1xuICAgIH1cbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIGVxdWFscyA9IG9wdHMuZXF1YWxzXG4gICAgICAgID8gb3B0cy5lcXVhbHNcbiAgICAgICAgOiBvcHRzLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdHMuc3RydWN0ID8gY29tcGFyZXIuc3RydWN0dXJhbCA6IGNvbXBhcmVyLmRlZmF1bHQ7XG4gICAgdmFyIHIgPSBuZXcgUmVhY3Rpb24ob3B0cy5uYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaXJzdFRpbWUgfHwgb3B0cy5kZWxheSA8IDEpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgICAgICB9LCBvcHRzLmRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgICAgICBpZiAoci5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICByLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBleHByZXNzaW9uKHIpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3RUaW1lICYmIG9wdHMuZmlyZUltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgZWZmZWN0KHZhbHVlLCByKTtcbiAgICAgICAgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIGVmZmVjdCh2YWx1ZSwgcik7XG4gICAgICAgIGlmIChmaXJzdFRpbWUpXG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICB9XG4gICAgci5zY2hlZHVsZSgpO1xuICAgIHJldHVybiByLmdldERpc3Bvc2VyKCk7XG59XG5cbi8qKlxuICogQSBub2RlIGluIHRoZSBzdGF0ZSBkZXBlbmRlbmN5IHJvb3QgdGhhdCBvYnNlcnZlcyBvdGhlciBub2RlcywgYW5kIGNhbiBiZSBvYnNlcnZlZCBpdHNlbGYuXG4gKlxuICogQ29tcHV0ZWRWYWx1ZSB3aWxsIHJlbWVtYmVyIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJhdGNoLCBvclxuICogd2hpbGUgYmVpbmcgb2JzZXJ2ZWQuXG4gKlxuICogRHVyaW5nIHRoaXMgdGltZSBpdCB3aWxsIHJlY29tcHV0ZSBvbmx5IHdoZW4gb25lIG9mIGl0cyBkaXJlY3QgZGVwZW5kZW5jaWVzIGNoYW5nZWQsXG4gKiBidXQgb25seSB3aGVuIGl0IGlzIGJlaW5nIGFjY2Vzc2VkIHdpdGggYENvbXB1dGVkVmFsdWUuZ2V0KClgLlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGRlc2NyaXB0aW9uOlxuICogMS4gRmlyc3QgdGltZSBpdCdzIGJlaW5nIGFjY2Vzc2VkIGl0IHdpbGwgY29tcHV0ZSBhbmQgcmVtZW1iZXIgcmVzdWx0XG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xuICogMi4gRmlyc3QgdGltZSBhbnkgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZSwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHdhaXQgZm9yIDMuXG4gKiAzLiBXaGVuIGl0J3MgYmVpbmcgYWNjZXNzZWQsIHJlY29tcHV0ZSBpZiBhbnkgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQuXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXG4gKiAgICBnbyB0byBzdGVwIDIuIGVpdGhlciB3YXlcbiAqXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cbiAqL1xudmFyIENvbXB1dGVkVmFsdWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXG4gICAgICpcbiAgICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxuICAgICAqXG4gICAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXG4gICAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXG4gICAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1YWxDb21wYXJlcmAgZGVlcGx5IGNvbXBhcmVzIHRoZSBzdHJ1Y3R1cmUuXG4gICAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhbiBuZXcgYWdncmVnYXRlZCBvYmplY3QgYW5kXG4gICAgICogZG9uJ3Qgd2FudCB0byBub3RpZnkgb2JzZXJ2ZXJzIGlmIGl0IGlzIHN0cnVjdHVyYWxseSB0aGUgc2FtZS5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wdXRlZFZhbHVlKGRlcml2YXRpb24sIHNjb3BlLCBlcXVhbHMsIG5hbWUsIHNldHRlcikge1xuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuZXF1YWxzID0gZXF1YWxzO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IG51bGw7IC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNJbmRleGVzID0ge307XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKG51bGwpO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7IC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIkNvbXB1dGVkVmFsdWVAXCIgKyBnZXROZXh0SWQoKTtcbiAgICAgICAgaWYgKHNldHRlcilcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gY3JlYXRlQWN0aW9uKG5hbWUgKyBcIi1zZXR0ZXJcIiwgc2V0dGVyKTtcbiAgICB9XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub25CZWNvbWVTdGFsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKHRoaXMpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcyBjb21wdXRlZCB2YWx1ZS5cbiAgICAgKiBXaWxsIGV2YWx1YXRlIGl0cyBjb21wdXRhdGlvbiBmaXJzdCBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnZhcmlhbnQoIXRoaXMuaXNDb21wdXRpbmcsIFwiQ3ljbGUgZGV0ZWN0ZWQgaW4gY29tcHV0YXRpb24gXCIgKyB0aGlzLm5hbWUsIHRoaXMuZGVyaXZhdGlvbik7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG1pbm9yIG9wdGltaXphdGlvbiB3aGljaCBjb3VsZCBiZSBvbWl0dGVkIHRvIHNpbXBsaWZ5IHRoZSBjb2RlXG4gICAgICAgICAgICAvLyBUaGUgY29tcHV0ZWRWYWx1ZSBpcyBhY2Nlc3NlZCBvdXRzaWRlIG9mIGFueSBtb2J4IHN0dWZmLiBCYXRjaCBvYnNlcnZpbmcgc2hvdWxkIGJlIGVub3VnaCBhbmQgZG9uJ3QgbmVlZFxuICAgICAgICAgICAgLy8gdHJhY2tpbmcgYXMgaXQgd2lsbCBuZXZlciBiZSBjYWxsZWQgYWdhaW4gaW5zaWRlIHRoaXMgYmF0Y2guXG4gICAgICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSlcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpXG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpXG4gICAgICAgICAgICB0aHJvdyByZXN1bHQuY2F1c2U7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzKSlcbiAgICAgICAgICAgIHRocm93IHJlcy5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIGludmFyaWFudCghdGhpcy5pc1J1bm5pbmdTZXR0ZXIsIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyB0aGlzXG4gICAgICAgICAgICAgICAgLm5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0ZXIuY2FsbCh0aGlzLnNjb3BlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgXCJbQ29tcHV0ZWRWYWx1ZSAnXCIgKyB0aGlzXG4gICAgICAgICAgICAgICAgLm5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIik7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb21wdXRlXCIsXG4gICAgICAgICAgICAgICAgZm46IHRoaXMuZGVyaXZhdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHdhc1N1c3BlbmRlZCA9IHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSAodGhpcy52YWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKHRydWUpKTtcbiAgICAgICAgcmV0dXJuICh3YXNTdXNwZW5kZWQgfHxcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG9sZFZhbHVlKSB8fFxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24obmV3VmFsdWUpIHx8XG4gICAgICAgICAgICAhdGhpcy5lcXVhbHMob2xkVmFsdWUsIG5ld1ZhbHVlKSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5jb21wdXRlVmFsdWUgPSBmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IHRydWU7XG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGgrKztcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICByZXMgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCB0aGlzLmRlcml2YXRpb24sIHRoaXMuc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoLS07XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGF1dG9ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogcHJldlZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUud2h5UnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNUcmFja2luZyA9IEJvb2xlYW4oZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKTtcbiAgICAgICAgdmFyIG9ic2VydmluZyA9IHVuaXF1ZSh0aGlzLmlzQ29tcHV0aW5nID8gdGhpcy5uZXdPYnNlcnZpbmcgOiB0aGlzLm9ic2VydmluZykubWFwKGZ1bmN0aW9uIChkZXApIHsgcmV0dXJuIGRlcC5uYW1lOyB9KTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHVuaXF1ZShnZXRPYnNlcnZlcnModGhpcykubWFwKGZ1bmN0aW9uIChkZXApIHsgcmV0dXJuIGRlcC5uYW1lOyB9KSk7XG4gICAgICAgIHJldHVybiAoXCJcXG5XaHlSdW4/IGNvbXB1dGF0aW9uICdcIiArIHRoaXMubmFtZSArIFwiJzpcXG4gKiBSdW5uaW5nIGJlY2F1c2U6IFwiICsgKGlzVHJhY2tpbmdcbiAgICAgICAgICAgID8gXCJbYWN0aXZlXSB0aGUgdmFsdWUgb2YgdGhpcyBjb21wdXRhdGlvbiBpcyBuZWVkZWQgYnkgYSByZWFjdGlvblwiXG4gICAgICAgICAgICA6IHRoaXMuaXNDb21wdXRpbmdcbiAgICAgICAgICAgICAgICA/IFwiW2dldF0gVGhlIHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgd2FzIHJlcXVlc3RlZCBvdXRzaWRlIGEgcmVhY3Rpb25cIlxuICAgICAgICAgICAgICAgIDogXCJbaWRsZV0gbm90IHJ1bm5pbmcgYXQgdGhlIG1vbWVudFwiKSArIFwiXFxuXCIgK1xuICAgICAgICAgICAgKHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HXG4gICAgICAgICAgICAgICAgPyBnZXRNZXNzYWdlKFwibTAzMlwiKVxuICAgICAgICAgICAgICAgIDogXCIgKiBUaGlzIGNvbXB1dGF0aW9uIHdpbGwgcmUtcnVuIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIG9ic2VydmFibGVzIGNoYW5nZXM6XFxuICAgIFwiICsgam9pblN0cmluZ3Mob2JzZXJ2aW5nKSArIFwiXFxuICAgIFwiICsgKHRoaXMuaXNDb21wdXRpbmcgJiYgaXNUcmFja2luZ1xuICAgICAgICAgICAgICAgICAgICA/IFwiICguLi4gb3IgYW55IG9ic2VydmFibGUgYWNjZXNzZWQgZHVyaW5nIHRoZSByZW1haW5kZXIgb2YgdGhlIGN1cnJlbnQgcnVuKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIikgKyBcIlxcbiAgICBcIiArIGdldE1lc3NhZ2UoXCJtMDM4XCIpICsgXCJcXG5cXG4gICogSWYgdGhlIG91dGNvbWUgb2YgdGhpcyBjb21wdXRhdGlvbiBjaGFuZ2VzLCB0aGUgZm9sbG93aW5nIG9ic2VydmVycyB3aWxsIGJlIHJlLXJ1bjpcXG4gICAgXCIgKyBqb2luU3RyaW5ncyhvYnNlcnZlcnMpICsgXCJcXG5cIikpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbXB1dGVkVmFsdWU7XG59KCkpO1xuQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGVbcHJpbWl0aXZlU3ltYm9sKCldID0gQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudmFsdWVPZjtcbnZhciBpc0NvbXB1dGVkVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQ29tcHV0ZWRWYWx1ZVwiLCBDb21wdXRlZFZhbHVlKTtcblxudmFyIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgbmFtZSkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVyY2VwdG9ycyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xuICAgICAqL1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCkpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGFyZ2V0KSAmJiB0YXJnZXQuaGFzT3duUHJvcGVydHkoXCIkbW9ieFwiKSlcbiAgICAgICAgcmV0dXJuIHRhcmdldC4kbW9ieDtcbiAgICBpbnZhcmlhbnQoT2JqZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpLCBnZXRNZXNzYWdlKFwibTAzNVwiKSk7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXG4gICAgICAgIG5hbWUgPSAodGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYnNlcnZhYmxlT2JqZWN0XCIpICsgXCJAXCIgKyBnZXROZXh0SWQoKTtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5hbWUpO1xuICAgIGFkZEhpZGRlbkZpbmFsUHJvcCh0YXJnZXQsIFwiJG1vYnhcIiwgYWRtKTtcbiAgICByZXR1cm4gYWRtO1xufVxuZnVuY3Rpb24gZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5RnJvbURlc2NyaXB0b3IoYWRtLCBwcm9wTmFtZSwgZGVzY3JpcHRvciwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgaWYgKGFkbS52YWx1ZXNbcHJvcE5hbWVdICYmICFpc0NvbXB1dGVkVmFsdWUoYWRtLnZhbHVlc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIC8vIGFscmVhZHkgb2JzZXJ2YWJsZSBwcm9wZXJ0eVxuICAgICAgICBpbnZhcmlhbnQoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIFwiVGhlIHByb3BlcnR5IFwiICsgcHJvcE5hbWUgKyBcIiBpbiBcIiArIGFkbS5uYW1lICsgXCIgaXMgYWxyZWFkeSBvYnNlcnZhYmxlLCBjYW5ub3QgcmVkZWZpbmUgaXQgYXMgY29tcHV0ZWQgcHJvcGVydHlcIik7XG4gICAgICAgIGFkbS50YXJnZXRbcHJvcE5hbWVdID0gZGVzY3JpcHRvci52YWx1ZTsgLy8gdGhlIHByb3BlcnR5IHNldHRlciB3aWxsIG1ha2UgJ3ZhbHVlJyByZWFjdGl2ZSBpZiBuZWVkZWQuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbm90IHlldCBvYnNlcnZhYmxlIHByb3BlcnR5XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICAgIC8vIG5vdCBhIGNvbXB1dGVkIHZhbHVlXG4gICAgICAgIGlmIChpc01vZGlmaWVyRGVzY3JpcHRvcihkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgICAgICAgICAgLy8geCA6IHJlZihzb21lVmFsdWUpXG4gICAgICAgICAgICB2YXIgbW9kaWZpZXJEZXNjcmlwdG9yID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgICAgIGRlZmluZU9ic2VydmFibGVQcm9wZXJ0eShhZG0sIHByb3BOYW1lLCBtb2RpZmllckRlc2NyaXB0b3IuaW5pdGlhbFZhbHVlLCBtb2RpZmllckRlc2NyaXB0b3IuZW5oYW5jZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQWN0aW9uKGRlc2NyaXB0b3IudmFsdWUpICYmIGRlc2NyaXB0b3IudmFsdWUuYXV0b0JpbmQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKGFkbS50YXJnZXQsIHByb3BOYW1lLCBkZXNjcmlwdG9yLnZhbHVlLm9yaWdpbmFsRm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQ29tcHV0ZWRWYWx1ZShkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgICAgICAgICAgLy8geDogY29tcHV0ZWQoc29tZUV4cHIpXG4gICAgICAgICAgICBkZWZpbmVDb21wdXRlZFByb3BlcnR5RnJvbUNvbXB1dGVkVmFsdWUoYWRtLCBwcm9wTmFtZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB4OiBzb21lVmFsdWVcbiAgICAgICAgICAgIGRlZmluZU9ic2VydmFibGVQcm9wZXJ0eShhZG0sIHByb3BOYW1lLCBkZXNjcmlwdG9yLnZhbHVlLCBkZWZhdWx0RW5oYW5jZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBnZXQgeCgpIHsgcmV0dXJuIDMgfSBzZXQgeCh2KSB7IH1cbiAgICAgICAgZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eShhZG0sIHByb3BOYW1lLCBkZXNjcmlwdG9yLmdldCwgZGVzY3JpcHRvci5zZXQsIGNvbXBhcmVyLmRlZmF1bHQsIHRydWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmluZU9ic2VydmFibGVQcm9wZXJ0eShhZG0sIHByb3BOYW1lLCBuZXdWYWx1ZSwgZW5oYW5jZXIpIHtcbiAgICBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZShhZG0udGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyhhZG0pKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UoYWRtLCB7XG4gICAgICAgICAgICBvYmplY3Q6IGFkbS50YXJnZXQsXG4gICAgICAgICAgICBuYW1lOiBwcm9wTmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG4gICAgdmFyIG9ic2VydmFibGUgPSAoYWRtLnZhbHVlc1twcm9wTmFtZV0gPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBlbmhhbmNlciwgYWRtLm5hbWUgKyBcIi5cIiArIHByb3BOYW1lLCBmYWxzZSkpO1xuICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gb2JzZXJ2YWJsZVZhbHVlIG1pZ2h0IGhhdmUgY2hhbmdlZCBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhZG0udGFyZ2V0LCBwcm9wTmFtZSwgZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICAgIG5vdGlmeVByb3BlcnR5QWRkaXRpb24oYWRtLCBhZG0udGFyZ2V0LCBwcm9wTmFtZSwgbmV3VmFsdWUpO1xufVxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eShhZG0sIHByb3BOYW1lLCBnZXR0ZXIsIHNldHRlciwgZXF1YWxzLCBhc0luc3RhbmNlUHJvcGVydHkpIHtcbiAgICBpZiAoYXNJbnN0YW5jZVByb3BlcnR5KVxuICAgICAgICBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZShhZG0udGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgYWRtLnZhbHVlc1twcm9wTmFtZV0gPSBuZXcgQ29tcHV0ZWRWYWx1ZShnZXR0ZXIsIGFkbS50YXJnZXQsIGVxdWFscywgYWRtLm5hbWUgKyBcIi5cIiArIHByb3BOYW1lLCBzZXR0ZXIpO1xuICAgIGlmIChhc0luc3RhbmNlUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFkbS50YXJnZXQsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkUHJvcGVydHlGcm9tQ29tcHV0ZWRWYWx1ZShhZG0sIHByb3BOYW1lLCBjb21wdXRlZFZhbHVlKSB7XG4gICAgdmFyIG5hbWUgPSBhZG0ubmFtZSArIFwiLlwiICsgcHJvcE5hbWU7XG4gICAgY29tcHV0ZWRWYWx1ZS5uYW1lID0gbmFtZTtcbiAgICBpZiAoIWNvbXB1dGVkVmFsdWUuc2NvcGUpXG4gICAgICAgIGNvbXB1dGVkVmFsdWUuc2NvcGUgPSBhZG0udGFyZ2V0O1xuICAgIGFkbS52YWx1ZXNbcHJvcE5hbWVdID0gY29tcHV0ZWRWYWx1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWRtLnRhcmdldCwgcHJvcE5hbWUsIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnKHByb3BOYW1lKSk7XG59XG52YXIgb2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlncyA9IHt9O1xudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0ge307XG5mdW5jdGlvbiBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnKHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxuICAgICAgICAob2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngudmFsdWVzW3Byb3BOYW1lXS5nZXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnKHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gfHxcbiAgICAgICAgKGNvbXB1dGVkUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngudmFsdWVzW3Byb3BOYW1lXS5nZXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngudmFsdWVzW3Byb3BOYW1lXS5zZXQodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIHNldFByb3BlcnR5VmFsdWUoaW5zdGFuY2UsIG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgdmFyIGFkbSA9IGluc3RhbmNlLiRtb2J4O1xuICAgIHZhciBvYnNlcnZhYmxlID0gYWRtLnZhbHVlc1tuYW1lXTtcbiAgICAvLyBpbnRlcmNlcHRcbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZShhZG0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICBvYmplY3Q6IGluc3RhbmNlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgIH1cbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAvLyBub3RpZnkgc3B5ICYgb2JzZXJ2ZXJzXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyhhZG0pO1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWUsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKGFkbSwgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vdGlmeVByb3BlcnR5QWRkaXRpb24oYWRtLCBvYmplY3QsIG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyhhZG0pO1xuICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfVxuICAgICAgICA6IG51bGw7XG4gICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICBpZiAobm90aWZ5KVxuICAgICAgICBub3RpZnlMaXN0ZW5lcnMoYWRtLCBjaGFuZ2UpO1xuICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydEVuZCgpO1xufVxudmFyIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pO1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB7XG4gICAgaWYgKGlzT2JqZWN0KHRoaW5nKSkge1xuICAgICAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXG4gICAgICAgIHJ1bkxhenlJbml0aWFsaXplcnModGhpbmcpO1xuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmcuJG1vYngpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyByZWFjdGl2ZS5cbiAqIEBwYXJhbSB2YWx1ZSBvYmplY3QsIGZ1bmN0aW9uIG9yIGFycmF5XG4gKiBAcGFyYW0gcHJvcGVydHkgaWYgcHJvcGVydHkgaXMgc3BlY2lmaWVkLCBjaGVja3Mgd2hldGhlciB2YWx1ZS5wcm9wZXJ0eSBpcyByZWFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSB8fCBpc09ic2VydmFibGVNYXAodmFsdWUpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdldE1lc3NhZ2UoXCJtMDE5XCIpKTtcbiAgICAgICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIG8gPSB2YWx1ZS4kbW9ieDtcbiAgICAgICAgICAgIHJldHVybiBvLnZhbHVlcyAmJiAhIW8udmFsdWVzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEZvciBmaXJzdCBjaGVjaywgc2VlICM3MDFcbiAgICByZXR1cm4gKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgfHxcbiAgICAgICAgISF2YWx1ZS4kbW9ieCB8fFxuICAgICAgICBpc0F0b20odmFsdWUpIHx8XG4gICAgICAgIGlzUmVhY3Rpb24odmFsdWUpIHx8XG4gICAgICAgIGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihlbmhhbmNlcikge1xuICAgIGludmFyaWFudCghIWVuaGFuY2VyLCBcIjooXCIpO1xuICAgIHJldHVybiBjcmVhdGVDbGFzc1Byb3BlcnR5RGVjb3JhdG9yKGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGJhc2VWYWx1ZSwgXywgYmFzZURlc2NyaXB0b3IpIHtcbiAgICAgICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUodGFyZ2V0LCBuYW1lKTtcbiAgICAgICAgaW52YXJpYW50KCFiYXNlRGVzY3JpcHRvciB8fCAhYmFzZURlc2NyaXB0b3IuZ2V0LCBnZXRNZXNzYWdlKFwibTAyMlwiKSk7XG4gICAgICAgIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCB1bmRlZmluZWQpO1xuICAgICAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHkoYWRtLCBuYW1lLCBiYXNlVmFsdWUsIGVuaGFuY2VyKTtcbiAgICB9LCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuJG1vYngudmFsdWVzW25hbWVdO1xuICAgICAgICBpZiAob2JzZXJ2YWJsZSA9PT0gdW5kZWZpbmVkIC8vIFNlZSAjNTA1XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmdldCgpO1xuICAgIH0sIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9LCB0cnVlLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0KSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwcm9wZXJ0aWVzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcih0YXJnZXQsIGRlZXBFbmhhbmNlciwgcHJvcGVydGllcyk7XG59XG5mdW5jdGlvbiBleHRlbmRTaGFsbG93T2JzZXJ2YWJsZSh0YXJnZXQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHByb3BlcnRpZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlSGVscGVyKHRhcmdldCwgcmVmZXJlbmNlRW5oYW5jZXIsIHByb3BlcnRpZXMpO1xufVxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcih0YXJnZXQsIGRlZmF1bHRFbmhhbmNlciwgcHJvcGVydGllcykge1xuICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoID49IDIsIGdldE1lc3NhZ2UoXCJtMDE0XCIpKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiwgZ2V0TWVzc2FnZShcIm0wMTVcIikpO1xuICAgIGludmFyaWFudCghaXNPYnNlcnZhYmxlTWFwKHRhcmdldCksIGdldE1lc3NhZ2UoXCJtMDE2XCIpKTtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BTZXQpIHtcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBwcm9wU2V0ID09PSBcIm9iamVjdFwiLCBnZXRNZXNzYWdlKFwibTAxN1wiKSk7XG4gICAgICAgIGludmFyaWFudCghaXNPYnNlcnZhYmxlKHByb3BTZXQpLCBnZXRNZXNzYWdlKFwibTAxOFwiKSk7XG4gICAgfSk7XG4gICAgdmFyIGFkbSA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQpO1xuICAgIHZhciBkZWZpbmVkUHJvcHMgPSB7fTtcbiAgICAvLyBOb3RlIGNvdWxkIGJlIG9wdGltaXNlZCBpZiBwcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMVxuICAgIGZvciAodmFyIGkgPSBwcm9wZXJ0aWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wU2V0ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BTZXQpXG4gICAgICAgICAgICBpZiAoZGVmaW5lZFByb3BzW2tleV0gIT09IHRydWUgJiYgaGFzT3duUHJvcGVydHkocHJvcFNldCwga2V5KSkge1xuICAgICAgICAgICAgICAgIGRlZmluZWRQcm9wc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBwcm9wU2V0ICYmICFpc1Byb3BlcnR5Q29uZmlndXJhYmxlKHRhcmdldCwga2V5KSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNlZSAjMTExLCBza2lwIG5vbi1jb25maWd1cmFibGUgb3Igbm9uLXdyaXRhYmxlIHByb3BzIGZvciBgb2JzZXJ2YWJsZShvYmplY3QpYC5cbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcFNldCwga2V5KTtcbiAgICAgICAgICAgICAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlGcm9tRGVzY3JpcHRvcihhZG0sIGtleSwgZGVzY3JpcHRvciwgZGVmYXVsdEVuaGFuY2VyKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGRlZXBEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihkZWVwRW5oYW5jZXIpO1xudmFyIHNoYWxsb3dEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihzaGFsbG93RW5oYW5jZXIpO1xudmFyIHJlZkRlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyKHJlZmVyZW5jZUVuaGFuY2VyKTtcbnZhciBkZWVwU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZGVlcFN0cnVjdEVuaGFuY2VyKTtcbnZhciByZWZTdHJ1Y3REZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZTdHJ1Y3RFbmhhbmNlcik7XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUodikge1xuICAgIGlmICh2ID09PSB2b2lkIDApIHsgdiA9IHVuZGVmaW5lZDsgfVxuICAgIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gZGVlcERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoIDw9IDEsIGdldE1lc3NhZ2UoXCJtMDIxXCIpKTtcbiAgICBpbnZhcmlhbnQoIWlzTW9kaWZpZXJEZXNjcmlwdG9yKHYpLCBnZXRNZXNzYWdlKFwibTAyMFwiKSk7XG4gICAgLy8gaXQgaXMgYW4gb2JzZXJ2YWJsZSBhbHJlYWR5LCBkb25lXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2KSlcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cbiAgICB2YXIgcmVzID0gZGVlcEVuaGFuY2VyKHYsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAvLyB0aGlzIHZhbHVlIGNvdWxkIGJlIGNvbnZlcnRlZCB0byBhIG5ldyBvYnNlcnZhYmxlIGRhdGEgc3RydWN0dXJlLCByZXR1cm4gaXRcbiAgICBpZiAocmVzICE9PSB2KVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIC8vIG90aGVyd2lzZSwganVzdCBib3ggaXRcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5ib3godik7XG59XG52YXIgb2JzZXJ2YWJsZUZhY3RvcmllcyA9IHtcbiAgICBib3g6IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImJveFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGRlZXBFbmhhbmNlciwgbmFtZSk7XG4gICAgfSxcbiAgICBzaGFsbG93Qm94OiBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJzaGFsbG93Qm94XCIpO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgcmVmZXJlbmNlRW5oYW5jZXIsIG5hbWUpO1xuICAgIH0sXG4gICAgYXJyYXk6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYXJyYXlcIik7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGRlZXBFbmhhbmNlciwgbmFtZSk7XG4gICAgfSxcbiAgICBzaGFsbG93QXJyYXk6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2hhbGxvd0FycmF5XCIpO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCByZWZlcmVuY2VFbmhhbmNlciwgbmFtZSk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwibWFwXCIpO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXAoaW5pdGlhbFZhbHVlcywgZGVlcEVuaGFuY2VyLCBuYW1lKTtcbiAgICB9LFxuICAgIHNoYWxsb3dNYXA6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2hhbGxvd01hcFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIHJlZmVyZW5jZUVuaGFuY2VyLCBuYW1lKTtcbiAgICB9LFxuICAgIG9iamVjdDogZnVuY3Rpb24gKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwib2JqZWN0XCIpO1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIC8vIGNvbnZlcnQgdG8gb2JzZXJ2YWJsZSBvYmplY3RcbiAgICAgICAgYXNPYnNlcnZhYmxlT2JqZWN0KHJlcywgbmFtZSk7XG4gICAgICAgIC8vIGFkZCBwcm9wZXJ0aWVzXG4gICAgICAgIGV4dGVuZE9ic2VydmFibGUocmVzLCBwcm9wcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICBzaGFsbG93T2JqZWN0OiBmdW5jdGlvbiAocHJvcHMsIG5hbWUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJzaGFsbG93T2JqZWN0XCIpO1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIGFzT2JzZXJ2YWJsZU9iamVjdChyZXMsIG5hbWUpO1xuICAgICAgICBleHRlbmRTaGFsbG93T2JzZXJ2YWJsZShyZXMsIHByb3BzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuICAgIHJlZjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIC8vIGFsdGhvdWdoIHJlZiBjcmVhdGVzIGFjdHVhbGx5IGEgbW9kaWZpZXIgZGVzY3JpcHRvciwgdGhlIHR5cGUgb2YgdGhlIHJlc3VsdGlnIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vIG9mIHRoZSBvYmplY3QgaXMgYFRgIGluIHRoZSBlbmQsIHdoZW4gdGhlIGRlc2NyaXB0b3JzIGFyZSBpbnRlcnByZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihyZWZlcmVuY2VFbmhhbmNlciwgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZWZEZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hhbGxvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIC8vIGFsdGhvdWdoIHJlZiBjcmVhdGVzIGFjdHVhbGx5IGEgbW9kaWZpZXIgZGVzY3JpcHRvciwgdGhlIHR5cGUgb2YgdGhlIHJlc3VsdGlnIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vIG9mIHRoZSBvYmplY3QgaXMgYFRgIGluIHRoZSBlbmQsIHdoZW4gdGhlIGRlc2NyaXB0b3JzIGFyZSBpbnRlcnByZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihzaGFsbG93RW5oYW5jZXIsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2hhbGxvd0RlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgLy8gYWx0aG91Z2ggcmVmIGNyZWF0ZXMgYWN0dWFsbHkgYSBtb2RpZmllciBkZXNjcmlwdG9yLCB0aGUgdHlwZSBvZiB0aGUgcmVzdWx0aWcgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gb2YgdGhlIG9iamVjdCBpcyBgVGAgaW4gdGhlIGVuZCwgd2hlbiB0aGUgZGVzY3JpcHRvcnMgYXJlIGludGVycHJldGVkXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTW9kaWZpZXJEZXNjcmlwdG9yKGRlZXBFbmhhbmNlciwgYXJndW1lbnRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWVwRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0cnVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIC8vIGFsdGhvdWdoIHJlZiBjcmVhdGVzIGFjdHVhbGx5IGEgbW9kaWZpZXIgZGVzY3JpcHRvciwgdGhlIHR5cGUgb2YgdGhlIHJlc3VsdGlnIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vIG9mIHRoZSBvYmplY3QgaXMgYFRgIGluIHRoZSBlbmQsIHdoZW4gdGhlIGRlc2NyaXB0b3JzIGFyZSBpbnRlcnByZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihkZWVwU3RydWN0RW5oYW5jZXIsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcFN0cnVjdERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBvYnNlcnZhYmxlID0gY3JlYXRlT2JzZXJ2YWJsZTtcbi8vIHdlaXJkIHRyaWNrIHRvIGtlZXAgb3VyIHR5cGluZ3MgbmljZWx5IHdpdGggb3VyIGZ1bmNzLCBhbmQgc3RpbGwgZXh0ZW5kIHRoZSBvYnNlcnZhYmxlIGZ1bmN0aW9uXG5PYmplY3Qua2V5cyhvYnNlcnZhYmxlRmFjdG9yaWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAob2JzZXJ2YWJsZVtuYW1lXSA9IG9ic2VydmFibGVGYWN0b3JpZXNbbmFtZV0pOyB9KTtcbm9ic2VydmFibGUuZGVlcC5zdHJ1Y3QgPSBvYnNlcnZhYmxlLnN0cnVjdDtcbm9ic2VydmFibGUucmVmLnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihyZWZTdHJ1Y3RFbmhhbmNlciwgYXJndW1lbnRzWzBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZWZTdHJ1Y3REZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IobWV0aG9kTmFtZSkge1xuICAgIGZhaWwoXCJFeHBlY3RlZCBvbmUgb3IgdHdvIGFyZ3VtZW50cyB0byBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiLiBEaWQgeW91IGFjY2lkZW50YWxseSB0cnkgdG8gdXNlIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIgYXMgZGVjb3JhdG9yP1wiKTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllckRlc2NyaXB0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcIm9iamVjdFwiICYmIHRoaW5nICE9PSBudWxsICYmIHRoaW5nLmlzTW9ieE1vZGlmaWVyRGVzY3JpcHRvciA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihlbmhhbmNlciwgaW5pdGlhbFZhbHVlKSB7XG4gICAgaW52YXJpYW50KCFpc01vZGlmaWVyRGVzY3JpcHRvcihpbml0aWFsVmFsdWUpLCBcIk1vZGlmaWVycyBjYW5ub3QgYmUgbmVzdGVkXCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzTW9ieE1vZGlmaWVyRGVzY3JpcHRvcjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgIGVuaGFuY2VyOiBlbmhhbmNlclxuICAgIH07XG59XG5mdW5jdGlvbiBkZWVwRW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAgIGlmIChpc01vZGlmaWVyRGVzY3JpcHRvcih2KSlcbiAgICAgICAgZmFpbChcIllvdSB0cmllZCB0byBhc3NpZ24gYSBtb2RpZmllciB3cmFwcGVkIHZhbHVlIHRvIGEgY29sbGVjdGlvbiwgcGxlYXNlIGRlZmluZSBtb2RpZmllcnMgd2hlbiBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiwgbm90IHdoZW4gbW9kaWZ5aW5nIGl0XCIpO1xuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIG5hbWUpO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgbmFtZSk7XG4gICAgaWYgKGlzRVM2TWFwKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgbmFtZSk7XG4gICAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBzaGFsbG93RW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAgIGlmIChpc01vZGlmaWVyRGVzY3JpcHRvcih2KSlcbiAgICAgICAgZmFpbChcIllvdSB0cmllZCB0byBhc3NpZ24gYSBtb2RpZmllciB3cmFwcGVkIHZhbHVlIHRvIGEgY29sbGVjdGlvbiwgcGxlYXNlIGRlZmluZSBtb2RpZmllcnMgd2hlbiBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiwgbm90IHdoZW4gbW9kaWZ5aW5nIGl0XCIpO1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2KSB8fCBpc09ic2VydmFibGVBcnJheSh2KSB8fCBpc09ic2VydmFibGVNYXAodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zaGFsbG93QXJyYXkodiwgbmFtZSk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnNoYWxsb3dPYmplY3QodiwgbmFtZSk7XG4gICAgaWYgKGlzRVM2TWFwKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zaGFsbG93TWFwKHYsIG5hbWUpO1xuICAgIHJldHVybiBmYWlsKFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHJlZmVyZW5jZUVuaGFuY2VyKG5ld1ZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiBkZWVwU3RydWN0RW5oYW5jZXIodiwgb2xkVmFsdWUsIG5hbWUpIHtcbiAgICAvLyBkb24ndCBjb25mdXNlIHN0cnVjdHVyYWxseSBjb21wYXJlIGVuaGFuY2VyIHdpdGggcmVmIGVuaGFuY2VyISBUaGUgbGF0dGVyIGlzIHByb2JhYmx5XG4gICAgLy8gbW9yZSBzdWl0ZWQgZm9yIGltbXV0YWJsZSBvYmplY3RzXG4gICAgaWYgKGRlZXBFcXVhbCh2LCBvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVBcnJheSh2LCBkZWVwU3RydWN0RW5oYW5jZXIsIG5hbWUpO1xuICAgIGlmIChpc0VTNk1hcCh2KSlcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKHYsIGRlZXBTdHJ1Y3RFbmhhbmNlciwgbmFtZSk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodikpIHtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICBhc09ic2VydmFibGVPYmplY3QocmVzLCBuYW1lKTtcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcihyZXMsIGRlZXBTdHJ1Y3RFbmhhbmNlciwgW3ZdKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlcih2LCBvbGRWYWx1ZSwgbmFtZSkge1xuICAgIGlmIChkZWVwRXF1YWwodiwgb2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgcmV0dXJuIHY7XG59XG5cbi8qKlxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cbiAqXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxuICovXG5mdW5jdGlvbiB0cmFuc2FjdGlvbihhY3Rpb24sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7IHRoaXNBcmcgPSB1bmRlZmluZWQ7IH1cbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseSh0aGlzQXJnKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxufVxuXG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xudmFyIE9ic2VydmFibGVNYXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVNYXAoaW5pdGlhbERhdGEsIGVuaGFuY2VyLCBuYW1lKSB7XG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyOyB9XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZU1hcEBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy4kbW9ieCA9IE9ic2VydmFibGVNYXBNYXJrZXI7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9oYXNNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpOyAvLyBoYXNNYXAsIG5vdCBoYXNoTWFwID4tKS5cbiAgICAgICAgdGhpcy5fa2V5cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodW5kZWZpbmVkLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIua2V5cygpXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmludGVyY2VwdG9ycyA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XG4gICAgfVxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl9oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEtleShrZXkpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBrZXkgPSBcIlwiICsga2V5O1xuICAgICAgICBpZiAodGhpcy5faGFzTWFwW2tleV0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzTWFwW2tleV0uZ2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIGZhbHNlKS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXNzZXJ0VmFsaWRLZXkoa2V5KTtcbiAgICAgICAga2V5ID0gXCJcIiArIGtleTtcbiAgICAgICAgdmFyIGhhc0tleSA9IHRoaXMuX2hhcyhrZXkpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBoYXNLZXkgPyBcInVwZGF0ZVwiIDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIHZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWRkVmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXNzZXJ0VmFsaWRLZXkoa2V5KTtcbiAgICAgICAga2V5ID0gXCJcIiArIGtleTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGFzKGtleSkpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB0aGlzLl9kYXRhW2tleV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2tleXMucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gX3RoaXMuX2RhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlJCQxLnNldE5ld1ZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2RhdGFba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlSGFzTWFwRW50cnkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAvLyBvcHRpbWl6YXRpb247IGRvbid0IGZpbGwgdGhlIGhhc01hcCBpZiB3ZSBhcmUgbm90IG9ic2VydmluZywgb3IgcmVtb3ZlIGVudHJ5IGlmIHRoZXJlIGFyZSBubyBvYnNlcnZlcnMgYW55bW9yZVxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXBba2V5XTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICBlbnRyeS5zZXROZXdWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbnRyeSA9IHRoaXMuX2hhc01hcFtrZXldID0gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgcmVmZXJlbmNlRW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsga2V5ICsgXCI/XCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAobmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSB0aGlzLl9kYXRhW25hbWVdO1xuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUkJDEucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlJCQxLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX2FkZFZhbHVlID0gZnVuY3Rpb24gKG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gKF90aGlzLl9kYXRhW25hbWVdID0gbmV3IE9ic2VydmFibGVWYWx1ZShuZXdWYWx1ZSwgX3RoaXMuZW5oYW5jZXIsIF90aGlzLm5hbWUgKyBcIi5cIiArIG5hbWUsIGZhbHNlKSk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUkJDEudmFsdWU7IC8vIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBjaGFuZ2VkXG4gICAgICAgICAgICBfdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkobmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICBfdGhpcy5fa2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBrZXkgPSBcIlwiICsga2V5O1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLl9kYXRhW2tleV0uZ2V0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5QXNJdGVyYXRvcih0aGlzLl9rZXlzLnNsaWNlKCkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJyYXlBc0l0ZXJhdG9yKHRoaXMuX2tleXMubWFwKHRoaXMuZ2V0LCB0aGlzKSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gYXJyYXlBc0l0ZXJhdG9yKHRoaXMuX2tleXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIF90aGlzLmdldChrZXkpXTsgfSkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgX3RoaXMuZ2V0KGtleSksIGtleSwgX3RoaXMpOyB9KTtcbiAgICB9O1xuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KG90aGVyKSlcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCBvdGhlcltrZXldKTsgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSlcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChpc0VTNk1hcChvdGhlcikpXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpOyB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIG1hcCBmcm9tIFwiICsgb3RoZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5rZXlzKCkuZm9yRWFjaChfdGhpcy5kZWxldGUsIF90aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGdyYWIgYWxsIHRoZSBrZXlzIHRoYXQgYXJlIHByZXNlbnQgaW4gdGhlIG5ldyBtYXAgYnV0IG5vdCBwcmVzZW50IGluIHRoZSBjdXJyZW50IG1hcFxuICAgICAgICAgICAgLy8gYW5kIGRlbGV0ZSB0aGVtIGZyb20gdGhlIG1hcCwgdGhlbiBtZXJnZSB0aGUgbmV3IG1hcFxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNhdXNlIHJlYWN0aW9ucyBvbmx5IG9uIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgICAgICB2YXIgbmV3S2V5cyA9IGdldE1hcExpa2VLZXlzKHZhbHVlcyk7XG4gICAgICAgICAgICB2YXIgb2xkS2V5cyA9IF90aGlzLmtleXMoKTtcbiAgICAgICAgICAgIHZhciBtaXNzaW5nS2V5cyA9IG9sZEtleXMuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBuZXdLZXlzLmluZGV4T2YoaykgPT09IC0xOyB9KTtcbiAgICAgICAgICAgIG1pc3NpbmdLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIF90aGlzLmRlbGV0ZShrKTsgfSk7XG4gICAgICAgICAgICBfdGhpcy5tZXJnZSh2YWx1ZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBub24gb2JzZXJ2YWJsZSBvYmplY3QgY2xvbmUgb2YgdGhpcyBtYXAuXG4gICAgICogTm90ZSB0aGF0IHRoZSB2YWx1ZXMgbWlnaHQgc3RpbGwgYmUgb2JzZXJ2YWJsZS4gRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTLlxuICAgICAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAocmVzW2tleV0gPSBfdGhpcy5nZXQoa2V5KSk7IH0pO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBVc2VkIGJ5IEpTT04uc3RyaW5naWZ5XG4gICAgICAgIHJldHVybiB0aGlzLnRvSlMoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmlzVmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBrZXkgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGtleSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuYXNzZXJ0VmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkS2V5KGtleSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5tYXBdIEludmFsaWQga2V5OiAnXCIgKyBrZXkgKyBcIicsIG9ubHkgc3RyaW5ncywgbnVtYmVycyBhbmQgYm9vbGVhbnMgYXJlIGFjY2VwdGVkIGFzIGtleSBpbiBvYnNlcnZhYmxlIG1hcHMuXCIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAodGhpcy5uYW1lICtcbiAgICAgICAgICAgIFwiW3sgXCIgK1xuICAgICAgICAgICAgdGhpcy5rZXlzKCkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSArIFwiOiBcIiArIChcIlwiICsgX3RoaXMuZ2V0KGtleSkpOyB9KS5qb2luKFwiLCBcIikgK1xuICAgICAgICAgICAgXCIgfV1cIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgZ2V0TWVzc2FnZShcIm0wMzNcIikpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlTWFwO1xufSgpKTtcbmRlY2xhcmVJdGVyYXRvcihPYnNlcnZhYmxlTWFwLnByb3RvdHlwZSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbn0pO1xuZnVuY3Rpb24gbWFwKGluaXRpYWxWYWx1ZXMpIHtcbiAgICBkZXByZWNhdGVkKFwiYG1vYngubWFwYCBpcyBkZXByZWNhdGVkLCB1c2UgYG5ldyBPYnNlcnZhYmxlTWFwYCBvciBgbW9ieC5vYnNlcnZhYmxlLm1hcGAgaW5zdGVhZFwiKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAoaW5pdGlhbFZhbHVlcyk7XG59XG4vKiAndmFyJyBmaXhlcyBzbWFsbC1idWlsZCBpc3N1ZSAqL1xudmFyIGlzT2JzZXJ2YWJsZU1hcCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApO1xuXG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcbk9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkpO1xuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogZ2xvYmFsO1xufVxuZnVuY3Rpb24gZ2V0TmV4dElkKCkge1xuICAgIHJldHVybiArK2dsb2JhbFN0YXRlLm1vYnhHdWlkO1xufVxuZnVuY3Rpb24gZmFpbChtZXNzYWdlLCB0aGluZykge1xuICAgIGludmFyaWFudChmYWxzZSwgbWVzc2FnZSwgdGhpbmcpO1xuICAgIHRocm93IFwiWFwiOyAvLyB1bnJlYWNoYWJsZVxufVxuZnVuY3Rpb24gaW52YXJpYW50KGNoZWNrLCBtZXNzYWdlLCB0aGluZykge1xuICAgIGlmICghY2hlY2spXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBJbnZhcmlhbnQgZmFpbGVkOiBcIiArIG1lc3NhZ2UgKyAodGhpbmcgPyBcIiBpbiAnXCIgKyB0aGluZyArIFwiJ1wiIDogXCJcIikpO1xufVxuLyoqXG4gKiBQcmludHMgYSBkZXByZWNhdGlvbiBtZXNzYWdlLCBidXQgb25seSBvbmUgdGltZS5cbiAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGRlcHJlY2F0ZWQgbWVzc2FnZSB3YXMgYWxyZWFkeSBwcmludGVkIGJlZm9yZVxuICovXG52YXIgZGVwcmVjYXRlZE1lc3NhZ2VzID0gW107XG5mdW5jdGlvbiBkZXByZWNhdGVkKG1zZykge1xuICAgIGlmIChkZXByZWNhdGVkTWVzc2FnZXMuaW5kZXhPZihtc2cpICE9PSAtMSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlcHJlY2F0ZWRNZXNzYWdlcy5wdXNoKG1zZyk7XG4gICAgY29uc29sZS5lcnJvcihcIlttb2J4XSBEZXByZWNhdGVkOiBcIiArIG1zZyk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgaW52b2tlZCBhdCBtb3N0IG9uY2UuXG4gKi9cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICAgIHZhciBpbnZva2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGludm9rZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGludm9rZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbmZ1bmN0aW9uIHVuaXF1ZShsaXN0KSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAocmVzLmluZGV4T2YoaXRlbSkgPT09IC0xKVxuICAgICAgICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGpvaW5TdHJpbmdzKHRoaW5ncywgbGltaXQsIHNlcGFyYXRvcikge1xuICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gMTAwOyB9XG4gICAgaWYgKHNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IHNlcGFyYXRvciA9IFwiIC0gXCI7IH1cbiAgICBpZiAoIXRoaW5ncylcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHNsaWNlZCA9IHRoaW5ncy5zbGljZSgwLCBsaW1pdCk7XG4gICAgcmV0dXJuIFwiXCIgKyBzbGljZWQuam9pbihzZXBhcmF0b3IpICsgKHRoaW5ncy5sZW5ndGggPiBsaW1pdFxuICAgICAgICA/IFwiICguLi4gYW5kIFwiICsgKHRoaW5ncy5sZW5ndGggLSBsaW1pdCkgKyBcIm1vcmUpXCJcbiAgICAgICAgOiBcIlwiKTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUgfHwgcHJvdG8gPT09IG51bGw7XG59XG5mdW5jdGlvbiBvYmplY3RBc3NpZ24oKSB7XG4gICAgdmFyIHJlcyA9IGFyZ3VtZW50c1swXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSlcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxudmFyIHByb3RvdHlwZUhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUpIHtcbiAgICByZXR1cm4gcHJvdG90eXBlSGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BOYW1lKTtcbn1cbmZ1bmN0aW9uIG1ha2VOb25FbnVtZXJhYmxlKG9iamVjdCwgcHJvcE5hbWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkSGlkZGVuUHJvcChvYmplY3QsIHByb3BOYW1lc1tpXSwgb2JqZWN0W3Byb3BOYW1lc1tpXV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5GaW5hbFByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcbiAgICByZXR1cm4gIWRlc2NyaXB0b3IgfHwgKGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICE9PSBmYWxzZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlICE9PSBmYWxzZSk7XG59XG5mdW5jdGlvbiBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICBpbnZhcmlhbnQoaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApLCBcIkNhbm5vdCBtYWtlIHByb3BlcnR5ICdcIiArIHByb3AgKyBcIicgb2JzZXJ2YWJsZSwgaXQgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgd3JpdGFibGUgaW4gdGhlIHRhcmdldCBvYmplY3RcIik7XG59XG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlS2V5cyhvYmopIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICByZXR1cm4gcmVzO1xufVxuLyoqXG4gKiBOYWl2ZSBkZWVwRXF1YWwuIERvZXNuJ3QgY2hlY2sgZm9yIHByb3RvdHlwZSwgbm9uLWVudW1lcmFibGUgb3Igb3V0LW9mLXJhbmdlIHByb3BlcnRpZXMgb24gYXJyYXlzLlxuICogSWYgeW91IGhhdmUgc3VjaCBhIGNhc2UsIHlvdSBwcm9iYWJseSBzaG91bGQgdXNlIHRoaXMgZnVuY3Rpb24gYnV0IHNvbWV0aGluZyBmYW5jaWVyIDopLlxuICovXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICAgIGlmIChhID09PSBudWxsICYmIGIgPT09IG51bGwpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYXJlQm90aE5hTihhLCBiKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB2YXIgYUlzQXJyYXkgPSBpc0FycmF5TGlrZShhKTtcbiAgICB2YXIgYUlzTWFwID0gaXNNYXBMaWtlKGEpO1xuICAgIGlmIChhSXNBcnJheSAhPT0gaXNBcnJheUxpa2UoYikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChhSXNNYXAgIT09IGlzTWFwTGlrZShiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFJc0FycmF5KSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoYVtpXSwgYltpXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYUlzTWFwKSB7XG4gICAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGVxdWFsc18xID0gdHJ1ZTtcbiAgICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBlcXVhbHNfMSA9IGVxdWFsc18xICYmIGRlZXBFcXVhbChiLmdldChrZXkpLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXF1YWxzXzE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChpc01hcExpa2UoYSkgJiYgaXNNYXBMaWtlKGIpKSB7XG4gICAgICAgICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gRnJlYWtpbmcgaW5lZmZpY2llbnQuLi4uIENyZWF0ZSBQUiBpZiB5b3UgcnVuIGludG8gdGhpcyA6KSBNdWNoIGFwcHJlY2lhdGVkIVxuICAgICAgICAgICAgcmV0dXJuIGRlZXBFcXVhbChvYnNlcnZhYmxlLnNoYWxsb3dNYXAoYSkuZW50cmllcygpLCBvYnNlcnZhYmxlLnNoYWxsb3dNYXAoYikuZW50cmllcygpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0RW51bWVyYWJsZUtleXMoYSkubGVuZ3RoICE9PSBnZXRFbnVtZXJhYmxlS2V5cyhiKS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gYSkge1xuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiBiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChhW3Byb3BdLCBiW3Byb3BdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUobmFtZSwgY2xhenopIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcbiAgICBjbGF6ei5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIHhbcHJvcE5hbWVdID09PSB0cnVlO1xuICAgIH07XG59XG5mdW5jdGlvbiBhcmVCb3RoTmFOKGEsIGIpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09PSBcIm51bWJlclwiICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpKTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSwgZGlzcmVnYXJkaW5nIG9ic2VydmFiaWxpdHkuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSB8fCBpc09ic2VydmFibGVBcnJheSh4KTtcbn1cbmZ1bmN0aW9uIGlzTWFwTGlrZSh4KSB7XG4gICAgcmV0dXJuIGlzRVM2TWFwKHgpIHx8IGlzT2JzZXJ2YWJsZU1hcCh4KTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gICAgaWYgKGdldEdsb2JhbCgpLk1hcCAhPT0gdW5kZWZpbmVkICYmIHRoaW5nIGluc3RhbmNlb2YgZ2V0R2xvYmFsKCkuTWFwKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRNYXBMaWtlS2V5cyhtYXAkJDEpIHtcbiAgICB2YXIga2V5cztcbiAgICBpZiAoaXNQbGFpbk9iamVjdChtYXAkJDEpKVxuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWFwJCQxKTtcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1hcCQkMSkpXG4gICAgICAgIGtleXMgPSBtYXAkJDEubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9hWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfSk7XG4gICAgZWxzZSBpZiAoaXNNYXBMaWtlKG1hcCQkMSkpXG4gICAgICAgIGtleXMgPSBBcnJheS5mcm9tKG1hcCQkMS5rZXlzKCkpO1xuICAgIGVsc2VcbiAgICAgICAgZmFpbChcIkNhbm5vdCBnZXQga2V5cyBmcm9tIFwiICsgbWFwJCQxKTtcbiAgICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIHByaW1pdGl2ZVN5bWJvbCgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wudG9QcmltaXRpdmUpIHx8IFwiQEB0b1ByaW1pdGl2ZVwiO1xufVxuZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJcIiArIHZhbHVlIDogdmFsdWU7XG59XG5cbi8qKlxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcbiAqL1xudmFyIHBlcnNpc3RlbnRLZXlzID0gW1wibW9ieEd1aWRcIiwgXCJyZXNldElkXCIsIFwic3B5TGlzdGVuZXJzXCIsIFwic3RyaWN0TW9kZVwiLCBcInJ1bklkXCJdO1xudmFyIE1vYlhHbG9iYWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vYlhHbG9iYWxzIHZlcnNpb24uXG4gICAgICAgICAqIE1vYlggY29tcGF0aWJsaXR5IHdpdGggb3RoZXIgdmVyc2lvbnMgbG9hZGVkIGluIG1lbW9yeSBhcyBsb25nIGFzIHRoaXMgdmVyc2lvbiBtYXRjaGVzLlxuICAgICAgICAgKiBJdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIHN0aWxsIHN0b3JlcyBzaW1pbGFyIGluZm9ybWF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZlcnNpb24gPSA1O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IHJ1bm5pbmcgZGVyaXZhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIHJ1bm5pbmcgYSBjb21wdXRhdGlvbiBjdXJyZW50bHk/IChub3QgYSByZWFjdGlvbilcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcHV0YXRpb25EZXB0aCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFYWNoIHRpbWUgYSBkZXJpdmF0aW9uIGlzIHRyYWNrZWQsIGl0IGlzIGFzc2lnbmVkIGEgdW5pcXVlIHJ1bi1pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAnZ3VpZCcgZm9yIGdlbmVyYWwgcHVycG9zZS4gV2lsbCBiZSBwZXJzaXN0ZWQgYW1vbmdzdCByZXNldHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vYnhHdWlkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBpbiBhIGJhdGNoIGJsb2NrPyAoYW5kIGhvdyBtYW55IG9mIHRoZW0pXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluQmF0Y2ggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2YWJsZXMgdGhhdCBkb24ndCBoYXZlIG9ic2VydmVycyBhbnltb3JlLCBhbmQgYXJlIGFib3V0IHRvIGJlXG4gICAgICAgICAqIHN1c3BlbmRlZCwgdW5sZXNzIHNvbWVib2R5IGVsc2UgYWNjZXNzZXMgaXQgaW4gdGhlIHNhbWUgYmF0Y2hcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0lPYnNlcnZhYmxlW119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBzY2hlZHVsZWQsIG5vdCB5ZXQgZXhlY3V0ZWQsIHJlYWN0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ1JlYWN0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIGN1cnJlbnRseSBwcm9jZXNzaW5nIHJlYWN0aW9ucz9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIGNoYW5nZSBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xuICAgICAgICAgKiBJbiBnZW5lcmFsLCBNb2JYIGRvZXNuJ3QgYWxsb3cgdGhhdCB3aGVuIHJ1bm5pbmcgY29tcHV0YXRpb25zIGFuZCBSZWFjdC5yZW5kZXIuXG4gICAgICAgICAqIFRvIGVuc3VyZSB0aGF0IHRob3NlIGZ1bmN0aW9ucyBzdGF5IHB1cmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFsbG93U3RhdGVDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHN0cmljdCBtb2RlIGlzIGVuYWJsZWQsIHN0YXRlIGNoYW5nZXMgYXJlIGJ5IGRlZmF1bHQgbm90IGFsbG93ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXNlZCBieSBjcmVhdGVUcmFuc2Zvcm1lciB0byBkZXRlY3QgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIGhhcyBiZWVuIHJlc2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZXNldElkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNweSBjYWxsYmFja3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3B5TGlzdGVuZXJzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWxseSBhdHRhY2hlZCBlcnJvciBoYW5kbGVycyB0aGF0IHJlYWN0IHNwZWNpZmljYWxseSB0byBlcnJvcnMgaW4gcmVhY3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gTW9iWEdsb2JhbHM7XG59KCkpO1xudmFyIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XG52YXIgc2hhcmVHbG9iYWxTdGF0ZUNhbGxlZCA9IGZhbHNlO1xudmFyIHJ1bkluSXNvbGF0aW9uQ2FsbGVkID0gZmFsc2U7XG52YXIgd2FybmVkQWJvdXRNdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xue1xuICAgIHZhciBnbG9iYWxfMSA9IGdldEdsb2JhbCgpO1xuICAgIGlmICghZ2xvYmFsXzEuX19tb2J4SW5zdGFuY2VDb3VudCkge1xuICAgICAgICBnbG9iYWxfMS5fX21vYnhJbnN0YW5jZUNvdW50ID0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdsb2JhbF8xLl9fbW9ieEluc3RhbmNlQ291bnQrKztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNoYXJlR2xvYmFsU3RhdGVDYWxsZWQgJiYgIXJ1bkluSXNvbGF0aW9uQ2FsbGVkICYmICF3YXJuZWRBYm91dE11bHRpcGxlSW5zdGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgd2FybmVkQWJvdXRNdWx0aXBsZUluc3RhbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIFdhcm5pbmc6IHRoZXJlIGFyZSBtdWx0aXBsZSBtb2J4IGluc3RhbmNlcyBhY3RpdmUuIFRoaXMgbWlnaHQgbGVhZCB0byB1bmV4cGVjdGVkIHJlc3VsdHMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzEwODIgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUoKSB7XG4gICAgcnVuSW5Jc29sYXRpb25DYWxsZWQgPSB0cnVlO1xuICAgIGdldEdsb2JhbCgpLl9fbW9ieEluc3RhbmNlQ291bnQtLTtcbn1cbmZ1bmN0aW9uIHNoYXJlR2xvYmFsU3RhdGUoKSB7XG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIDQuMDsganVzdCB1c2UgcGVlciBkZXBlbmRlbmNpZXMgaW5zdGVhZC5cbiAgICBkZXByZWNhdGVkKFwiVXNpbmcgYHNoYXJlR2xvYmFsU3RhdGVgIGlzIG5vdCByZWNvbW1lbmRlZCwgdXNlIHBlZXIgZGVwZW5kZW5jaWVzIGluc3RlYWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzEwODIgZm9yIGRldGFpbHMuXCIpO1xuICAgIHNoYXJlR2xvYmFsU3RhdGVDYWxsZWQgPSB0cnVlO1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcbiAgICB2YXIgb3duU3RhdGUgPSBnbG9iYWxTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IGNoZWNrXG4gICAgICovXG4gICAgaWYgKGdsb2JhbC5fX21vYnNlcnZhYmxlVHJhY2tpbmdTdGFjayB8fCBnbG9iYWwuX19tb2JzZXJ2YWJsZVZpZXdTdGFjaylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIEFuIGluY29tcGF0aWJsZSB2ZXJzaW9uIG9mIG1vYnNlcnZhYmxlIGlzIGFscmVhZHkgbG9hZGVkLlwiKTtcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbCAmJiBnbG9iYWwuX19tb2J4R2xvYmFsLnZlcnNpb24gIT09IG93blN0YXRlLnZlcnNpb24pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBBbiBpbmNvbXBhdGlibGUgdmVyc2lvbiBvZiBtb2J4IGlzIGFscmVhZHkgbG9hZGVkLlwiKTtcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbClcbiAgICAgICAgZ2xvYmFsU3RhdGUgPSBnbG9iYWwuX19tb2J4R2xvYmFsO1xuICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbCA9IG93blN0YXRlO1xufVxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlO1xufVxuXG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXG4gKi9cbmZ1bmN0aW9uIHJlc2V0R2xvYmFsU3RhdGUoKSB7XG4gICAgZ2xvYmFsU3RhdGUucmVzZXRJZCsrO1xuICAgIHZhciBkZWZhdWx0R2xvYmFscyA9IG5ldyBNb2JYR2xvYmFscygpO1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscylcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZVtrZXldID0gZGVmYXVsdEdsb2JhbHNba2V5XTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFnbG9iYWxTdGF0ZS5zdHJpY3RNb2RlO1xufVxuXG5mdW5jdGlvbiBoYXNPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVycyAmJiBvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XG59XG5mdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XG4gICAgLy8gaW52YXJpYW50KG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SLCBjYW4gYWRkIG9ubHkgZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgYWRkIGFscmVhZHkgYWRkZWQgbm9kZVwiKTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgdmFyIGwgPSBvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGg7XG4gICAgaWYgKGwpIHtcbiAgICAgICAgLy8gYmVjYXVzZSBvYmplY3QgYXNzaWdubWVudCBpcyByZWxhdGl2ZWx5IGV4cGVuc2l2ZSwgbGV0J3Mgbm90IHN0b3JlIGRhdGEgYWJvdXQgaW5kZXggMC5cbiAgICAgICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzW25vZGUuX19tYXBpZF0gPSBsO1xuICAgIH1cbiAgICBvYnNlcnZhYmxlLm9ic2VydmVyc1tsXSA9IG5vZGU7XG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUpXG4gICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGU7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgZGlkbid0IGFkZCBub2RlXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZGVsZXRpbmcgbGFzdCBvYnNlcnZlclxuICAgICAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkZWxldGluZyBmcm9tIF9vYnNlcnZlcnNJbmRleGVzIGlzIHN0cmFpZ2h0IGZvcndhcmQsIHRvIGRlbGV0ZSBmcm9tIF9vYnNlcnZlcnMsIGxldCdzIHN3YXAgYG5vZGVgIHdpdGggbGFzdCBlbGVtZW50XG4gICAgICAgIHZhciBsaXN0ID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XG4gICAgICAgIHZhciBtYXAgPSBvYnNlcnZhYmxlLm9ic2VydmVyc0luZGV4ZXM7XG4gICAgICAgIHZhciBmaWxsZXIgPSBsaXN0LnBvcCgpOyAvLyBnZXQgbGFzdCBlbGVtZW50LCB3aGljaCBzaG91bGQgZmlsbCB0aGUgcGxhY2Ugb2YgYG5vZGVgLCBzbyB0aGUgYXJyYXkgZG9lc24ndCBoYXZlIGhvbGVzXG4gICAgICAgIGlmIChmaWxsZXIgIT09IG5vZGUpIHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBub2RlIHdhcyB0aGUgbGFzdCBlbGVtZW50LCB3aGljaCBhbHJlYWR5IGdvdCByZW1vdmVkIGZyb20gYXJyYXlcbiAgICAgICAgICAgIHZhciBpbmRleCA9IG1hcFtub2RlLl9fbWFwaWRdIHx8IDA7IC8vIGdldHRpbmcgaW5kZXggb2YgYG5vZGVgLiB0aGlzIGlzIHRoZSBvbmx5IHBsYWNlIHdlIGFjdHVhbGx5IHVzZSBtYXAuXG4gICAgICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBtYXAgc3RvcmUgYWxsIGluZGV4ZXMgYnV0IDAsIHNlZSBjb21tZW50IGluIGBhZGRPYnNlcnZlcmBcbiAgICAgICAgICAgICAgICBtYXBbZmlsbGVyLl9fbWFwaWRdID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWFwW2ZpbGxlci5fX21hcGlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RbaW5kZXhdID0gZmlsbGVyO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBtYXBbbm9kZS5fX21hcGlkXTtcbiAgICB9XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKSB7XG4gICAgaWYgKCFvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24pIHtcbiAgICAgICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SLCByZW1vdmUgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICAgICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5sZW5ndGggPT09IDAsIFwiSU5URVJOQUwgRVJST1IsIHNob3VsZCBvbmx5IHF1ZXVlIGZvciB1bm9ic2VydmF0aW9uIHVub2JzZXJ2ZWQgb2JzZXJ2YWJsZXNcIik7XG4gICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IHRydWU7XG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH1cbn1cbi8qKlxuICogQmF0Y2ggc3RhcnRzIGEgdHJhbnNhY3Rpb24sIGF0IGxlYXN0IGZvciBwdXJwb3NlcyBvZiBtZW1vaXppbmcgQ29tcHV0ZWRWYWx1ZXMgd2hlbiBub3RoaW5nIGVsc2UgZG9lcy5cbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcbiAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG59XG5mdW5jdGlvbiBlbmRCYXRjaCgpIHtcbiAgICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgICAgIHJ1blJlYWN0aW9ucygpO1xuICAgICAgICAvLyB0aGUgYmF0Y2ggaXMgYWN0dWFsbHkgYWJvdXQgdG8gZmluaXNoLCBhbGwgdW5vYnNlcnZpbmcgc2hvdWxkIGhhcHBlbiBoZXJlLlxuICAgICAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGxpc3RbaV07XG4gICAgICAgICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQmVjb21lVW5vYnNlcnZlZCgpO1xuICAgICAgICAgICAgICAgIC8vIE5PVEU6IG9uQmVjb21lVW5vYnNlcnZlZCBtaWdodCBwdXNoIHRvIGBwZW5kaW5nVW5vYnNlcnZhdGlvbnNgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZSkge1xuICAgIHZhciBkZXJpdmF0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgIGlmIChkZXJpdmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW1wbGUgb3B0aW1pemF0aW9uLCBnaXZlIGVhY2ggZGVyaXZhdGlvbiBydW4gYW4gdW5pcXVlIGlkIChydW5JZClcbiAgICAgICAgICogQ2hlY2sgaWYgbGFzdCB0aW1lIHRoaXMgb2JzZXJ2YWJsZSB3YXMgYWNjZXNzZWQgdGhlIHNhbWUgcnVuSWQgaXMgdXNlZFxuICAgICAgICAgKiBpZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgcmVsYXRpb24gaXMgYWxyZWFkeSBrbm93blxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRlcml2YXRpb24ucnVuSWQgIT09IG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkgPSBkZXJpdmF0aW9uLnJ1bklkO1xuICAgICAgICAgICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdbZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50KytdID0gb2JzZXJ2YWJsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICAgIH1cbn1cbi8qKlxuICogTk9URTogY3VycmVudCBwcm9wYWdhdGlvbiBtZWNoYW5pc20gd2lsbCBpbiBjYXNlIG9mIHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYmVoYXZlIHVuZXhwZWN0ZWRseVxuICogSXQgd2lsbCBwcm9wYWdhdGUgY2hhbmdlcyB0byBvYnNlcnZlcnMgZnJvbSBwcmV2aW91cyBydW5cbiAqIEl0J3MgaGFyZCBvciBtYXliZSBpbXBvc3NpYmxlICh3aXRoIHJlYXNvbmFibGUgcGVyZikgdG8gZ2V0IGl0IHJpZ2h0IHdpdGggY3VycmVudCBhcHByb2FjaFxuICogSG9wZWZ1bGx5IHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYXJlbid0IGEgZmVhdHVyZSBwZW9wbGUgc2hvdWxkIGRlcGVuZCBvblxuICogQWxzbyBtb3N0IGJhc2ljIHVzZSBjYXNlcyBzaG91bGQgYmUgb2tcbiAqL1xuLy8gQ2FsbGVkIGJ5IEF0b20gd2hlbiBpdHMgdmFsdWUgY2hhbmdlc1xuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKVxuICAgICAgICByZXR1cm47XG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICB2YXIgb2JzZXJ2ZXJzID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XG4gICAgdmFyIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIGQgPSBvYnNlcnZlcnNbaV07XG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXG4gICAgICAgICAgICBkLm9uQmVjb21lU3RhbGUoKTtcbiAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgfVxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufVxuLy8gQ2FsbGVkIGJ5IENvbXB1dGVkVmFsdWUgd2hlbiBpdCByZWNhbGN1bGF0ZSBhbmQgaXRzIHZhbHVlIGNoYW5nZWRcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZChvYnNlcnZhYmxlKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgIHZhciBvYnNlcnZlcnMgPSBvYnNlcnZhYmxlLm9ic2VydmVycztcbiAgICB2YXIgaSA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZCA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUpXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICAgICAgZWxzZSBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFIC8vIHRoaXMgaGFwcGVucyBkdXJpbmcgY29tcHV0aW5nIG9mIGBkYCwganVzdCBrZWVwIGxvd2VzdE9ic2VydmVyU3RhdGUgdXAgdG8gZGF0ZS5cbiAgICAgICAgKVxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIH1cbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufVxuLy8gVXNlZCBieSBjb21wdXRlZCB3aGVuIGl0cyBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCB3ZSBkb24ndCB3YW4ndCB0byBpbW1lZGlhdGVseSByZWNvbXB1dGUuXG5mdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XG4gICAgdmFyIG9ic2VydmVycyA9IG9ic2VydmFibGUub2JzZXJ2ZXJzO1xuICAgIHZhciBpID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBkID0gb2JzZXJ2ZXJzW2ldO1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcbiAgICAgICAgICAgIGQub25CZWNvbWVTdGFsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cblxudmFyIElEZXJpdmF0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAvLyBiZWZvcmUgYmVpbmcgcnVuIG9yIChvdXRzaWRlIGJhdGNoIGFuZCBub3QgYmVpbmcgb2JzZXJ2ZWQpXG4gICAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIk5PVF9UUkFDS0lOR1wiXSA9IC0xXSA9IFwiTk9UX1RSQUNLSU5HXCI7XG4gICAgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxuICAgIC8vIHdvbid0IHJlY2FsY3VsYXRlIGRlcml2YXRpb25cbiAgICAvLyB0aGlzIGlzIHdoYXQgbWFrZXMgbW9ieCBmYXN0XG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiVVBfVE9fREFURVwiXSA9IDBdID0gXCJVUF9UT19EQVRFXCI7XG4gICAgLy8gc29tZSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IGRvbid0IGtub3cgaWYgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWRcbiAgICAvLyB3aWxsIHJlcXVpcmUgdG8gY2hlY2sgZmlyc3QgaWYgVVBfVE9fREFURSBvciBQT1NTSUJMWV9TVEFMRVxuICAgIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgICAvL1xuICAgIC8vIGhhdmluZyB0aGlzIHN0YXRlIGlzIHNlY29uZCBiaWcgb3B0aW1pemF0aW9uOlxuICAgIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiUE9TU0lCTFlfU1RBTEVcIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVcIjtcbiAgICAvLyBBIHNoYWxsb3cgZGVwZW5kZW5jeSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uIGFuZCB0aGUgZGVyaXZhdGlvblxuICAgIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIlNUQUxFXCJdID0gMl0gPSBcIlNUQUxFXCI7XG59KShJRGVyaXZhdGlvblN0YXRlIHx8IChJRGVyaXZhdGlvblN0YXRlID0ge30pKTtcbnZhciBDYXVnaHRFeGNlcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIC8vIEVtcHR5XG4gICAgfVxuICAgIHJldHVybiBDYXVnaHRFeGNlcHRpb247XG59KCkpO1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ2F1Z2h0RXhjZXB0aW9uO1xufVxuLyoqXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cbiAqIElmIGRlcGVuZGVuY2llc1N0YXRlIGlzIDEgdGhlbiBpdCB3aWxsIHJlY2FsY3VsYXRlIGRlcGVuZGVuY2llcyxcbiAqIGlmIGFueSBkZXBlbmRlbmN5IGNoYW5nZWQgaXQgd2lsbCBwcm9wYWdhdGUgaXQgYnkgY2hhbmdpbmcgZGVwZW5kZW5jaWVzU3RhdGUgdG8gMi5cbiAqXG4gKiBCeSBpdGVyYXRpbmcgb3ZlciB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSB3ZXJlIHJlcG9ydGVkIGFuZFxuICogc3RvcHBpbmcgb24gdGhlIGZpcnN0IGNoYW5nZSwgYWxsIHRoZSByZWNhbGN1bGF0aW9ucyBhcmUgb25seSBjYWxsZWQgZm9yIENvbXB1dGVkVmFsdWVzXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgZGVyaXZhdGlvbiBkb2Vzbid0IGNoYW5nZSB0aGVuIHRoZSBkZXJpdmF0aW9uIHNob3VsZCBydW4gdGhlIHNhbWUgd2F5XG4gKiB1cCB1bnRpbCBhY2Nlc3NpbmcgeC10aCBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiBzaG91bGRDb21wdXRlKGRlcml2YXRpb24pIHtcbiAgICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUpIHtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc6XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5TVEFMRTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU6IHtcbiAgICAgICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nLCBsID0gb2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIG5vdCBpbnRlcmVzdGVkIGluIHRoZSB2YWx1ZSAqb3IqIGV4Y2VwdGlvbiBhdCB0aGlzIG1vbWVudCwgYnV0IGlmIHRoZXJlIGlzIG9uZSwgbm90aWZ5IGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGBkZXJpdmF0aW9uYCBpcyBhbiBvYnNlcnZlciBvZiBgb2JqYFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICE9PSBudWxsOyAvLyBmaWx0ZXIgb3V0IGFjdGlvbnMgaW5zaWRlIGNvbXB1dGF0aW9uc1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xuICAgIHZhciBoYXNPYnNlcnZlcnMkJDEgPSBhdG9tLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgIC8vIFNob3VsZCBuZXZlciBiZSBwb3NzaWJsZSB0byBjaGFuZ2UgYW4gb2JzZXJ2ZWQgb2JzZXJ2YWJsZSBmcm9tIGluc2lkZSBjb21wdXRlZCwgc2VlICM3OThcbiAgICBpZiAoZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA+IDAgJiYgaGFzT2JzZXJ2ZXJzJCQxKVxuICAgICAgICBmYWlsKGdldE1lc3NhZ2UoXCJtMDMxXCIpICsgYXRvbS5uYW1lKTtcbiAgICAvLyBTaG91bGQgbm90IGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBvYnNlcnZlZCBzdGF0ZSBvdXRzaWRlIHN0cmljdCBtb2RlLCBleGNlcHQgZHVyaW5nIGluaXRpYWxpemF0aW9uLCBzZWUgIzU2M1xuICAgIGlmICghZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgJiYgaGFzT2JzZXJ2ZXJzJCQxKVxuICAgICAgICBmYWlsKGdldE1lc3NhZ2UoZ2xvYmFsU3RhdGUuc3RyaWN0TW9kZSA/IFwibTAzMGFcIiA6IFwibTAzMGJcIikgKyBhdG9tLm5hbWUpO1xufVxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxuICogVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGRlcml2YXRpb25gIG9iamVjdCBhbmQgdGhlIGRlcml2YXRpb24gaXMgcmVnaXN0ZXJlZFxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cbiAqL1xuZnVuY3Rpb24gdHJhY2tEZXJpdmVkRnVuY3Rpb24oZGVyaXZhdGlvbiwgZiwgY29udGV4dCkge1xuICAgIC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgICAvLyBhcnJheSB3aWxsIGJlIHRyaW1tZWQgYnkgYmluZERlcGVuZGVuY2llc1xuICAgIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pO1xuICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nLmxlbmd0aCArIDEwMCk7XG4gICAgZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50ID0gMDtcbiAgICBkZXJpdmF0aW9uLnJ1bklkID0gKytnbG9iYWxTdGF0ZS5ydW5JZDtcbiAgICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IGRlcml2YXRpb247XG4gICAgdmFyIHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXZUcmFja2luZztcbiAgICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cbiAqIHVwZGF0ZSBvYnNlcnZpbmcgdG8gYmUgbmV3T2JzZXJ2aW5nIHdpdGggdW5pcXVlIG9ic2VydmFibGVzXG4gKiBub3RpZnkgb2JzZXJ2ZXJzIHRoYXQgYmVjb21lIG9ic2VydmVkL3Vub2JzZXJ2ZWRcbiAqL1xuZnVuY3Rpb24gYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gICAgLy8gaW52YXJpYW50KGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HLCBcIklOVEVSTkFMIEVSUk9SIGJpbmREZXBlbmRlbmNpZXMgZXhwZWN0cyBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlICE9PSAtMVwiKTtcbiAgICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nO1xuICAgIHZhciBvYnNlcnZpbmcgPSAoZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm5ld09ic2VydmluZyk7XG4gICAgdmFyIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKHRoaXMgbGlzdCBjYW4gY29udGFpbiBkdXBsaWNhdGVzKTpcbiAgICAvLyAgIDA6IGZpcnN0IG9jY3VycmVuY2UsIGNoYW5nZSB0byAxIGFuZCBrZWVwIGl0XG4gICAgLy8gICAxOiBleHRyYSBvY2N1cnJlbmNlLCBkcm9wIGl0XG4gICAgdmFyIGkwID0gMCwgbCA9IGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgZGVwID0gb2JzZXJ2aW5nW2ldO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDE7XG4gICAgICAgICAgICBpZiAoaTAgIT09IGkpXG4gICAgICAgICAgICAgICAgb2JzZXJ2aW5nW2kwXSA9IGRlcDtcbiAgICAgICAgICAgIGkwKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBjYXN0IGlzICdzYWZlJyBoZXJlLCBiZWNhdXNlIGlmIGRlcCBpcyBJT2JzZXJ2YWJsZSwgYGRlcGVuZGVuY2llc1N0YXRlYCB3aWxsIGJlIHVuZGVmaW5lZCxcbiAgICAgICAgLy8gbm90IGhpdHRpbmcgdGhlIGNvbmRpdGlvblxuICAgICAgICBpZiAoZGVwLmRlcGVuZGVuY2llc1N0YXRlID4gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlKSB7XG4gICAgICAgICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBkZXAuZGVwZW5kZW5jaWVzU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JzZXJ2aW5nLmxlbmd0aCA9IGkwO1xuICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gbmV3T2JzZXJ2aW5nIHNob3VsZG4ndCBiZSBuZWVkZWQgb3V0c2lkZSB0cmFja2luZyAoc3RhdGVtZW50IG1vdmVkIGRvd24gdG8gd29yayBhcm91bmQgRkYgYnVnLCBzZWUgIzYxNClcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBvbGQgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKGl0IGlzIHVuaXF1ZSBhZnRlciBsYXN0IGJpbmREZXBlbmRlbmNpZXMpXG4gICAgLy8gICAwOiBpdCdzIG5vdCBpbiBuZXcgb2JzZXJ2YWJsZXMsIHVub2JzZXJ2ZSBpdFxuICAgIC8vICAgMTogaXQga2VlcHMgYmVpbmcgb2JzZXJ2ZWQsIGRvbid0IHdhbnQgdG8gbm90aWZ5IGl0LiBjaGFuZ2UgdG8gMFxuICAgIGwgPSBwcmV2T2JzZXJ2aW5nLmxlbmd0aDtcbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIHZhciBkZXAgPSBwcmV2T2JzZXJ2aW5nW2xdO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIoZGVwLCBkZXJpdmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBkZXAuZGlmZlZhbHVlID0gMDtcbiAgICB9XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChub3cgaXQgc2hvdWxkIGJlIHVuaXF1ZSlcbiAgICAvLyAgIDA6IGl0IHdhcyBzZXQgdG8gMCBpbiBsYXN0IGxvb3AuIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgLy8gICAxOiBpdCB3YXNuJ3Qgb2JzZXJ2ZWQsIGxldCdzIG9ic2VydmUgaXQuIHNldCBiYWNrIHRvIDBcbiAgICB3aGlsZSAoaTAtLSkge1xuICAgICAgICB2YXIgZGVwID0gb2JzZXJ2aW5nW2kwXTtcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xuICAgICAgICAgICAgYWRkT2JzZXJ2ZXIoZGVwLCBkZXJpdmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTb21lIG5ldyBvYnNlcnZlZCBkZXJpdmF0aW9ucyBtYXkgYmVjb21lIHN0YWxlIGR1cmluZyB0aGlzIGRlcml2YXRpb24gY29tcHV0YXRpb25cbiAgICAvLyBzbyB0aGV5IGhhdmUgaGFkIG5vIGNoYW5jZSB0byBwcm9wYWdhdGUgc3RhbGVuZXNzICgjOTE2KVxuICAgIGlmIChsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xuICAgICAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlO1xuICAgICAgICBkZXJpdmF0aW9uLm9uQmVjb21lU3RhbGUoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhck9ic2VydmluZyhkZXJpdmF0aW9uKSB7XG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SIGNsZWFyT2JzZXJ2aW5nIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nO1xuICAgIGRlcml2YXRpb24ub2JzZXJ2aW5nID0gW107XG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIHJlbW92ZU9ic2VydmVyKG9ic1tpXSwgZGVyaXZhdGlvbik7XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xufVxuZnVuY3Rpb24gdW50cmFja2VkKGFjdGlvbikge1xuICAgIHZhciBwcmV2ID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICB2YXIgcmVzID0gYWN0aW9uKCk7XG4gICAgdW50cmFja2VkRW5kKHByZXYpO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRTdGFydCgpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gdW50cmFja2VkRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2O1xufVxuLyoqXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcbiAqXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcbiAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxuICAgICAgICByZXR1cm47XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9ic1tpXS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xufVxuXG52YXIgUmVhY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0aW9uKG5hbWUsIG9uSW52YWxpZGF0ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vbkludmFsaWRhdGUgPSBvbkludmFsaWRhdGU7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IFtdO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgICAqL1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5ydW5SZWFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyYWNrUGVuZGluZyAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbkludmFsaWRhdGUgZGlkbid0IHRyaWdnZXIgdHJhY2sgcmlnaHQgYXdheS4uXG4gICAgICAgICAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNjaGVkdWxlZC1yZWFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGZuOiBmblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcbiAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKHJlc3VsdC5jYXVzZSk7XG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCh7XG4gICAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5kQmF0Y2goKTtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcihlcnJvciwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIlttb2J4XSBFbmNvdW50ZXJlZCBhbiB1bmNhdWdodCBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGJ5IGEgcmVhY3Rpb24gb3Igb2JzZXJ2ZXIgY29tcG9uZW50LCBpbjogJ1wiICsgdGhpcztcbiAgICAgICAgdmFyIG1lc3NhZ2VUb1VzZXIgPSBnZXRNZXNzYWdlKFwibTAzN1wiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlIHx8IG1lc3NhZ2VUb1VzZXIgLyogbGF0dGVyIHdpbGwgbm90IGJlIHRydWUsIG1ha2Ugc3VyZSB1Z2xpZnkgZG9lc24ndCByZW1vdmUgKi8sIGVycm9yKTtcbiAgICAgICAgLyoqIElmIGRlYnVnZ2luZyBicm91Z2h0IHlvdSBoZXJlLCBwbGVhc2UsIHJlYWQgdGhlIGFib3ZlIG1lc3NhZ2UgOi0pLiBUbnghICovXG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoZikgeyByZXR1cm4gZihlcnJvciwgX3RoaXMpOyB9KTtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZGlzcG9zZWQgd2hpbGUgcnVubmluZywgY2xlYW4gdXAgbGF0ZXIuIE1heWJlIG5vdCBvcHRpbWFsLCBidXQgcmFyZSBjYXNlXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgICAgICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgci4kbW9ieCA9IHRoaXM7XG4gICAgICAgIHIub25FcnJvciA9IHJlZ2lzdGVyRXJyb3JIYW5kbGVyO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS53aHlSdW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZpbmcgPSB1bmlxdWUodGhpcy5faXNSdW5uaW5nID8gdGhpcy5uZXdPYnNlcnZpbmcgOiB0aGlzLm9ic2VydmluZykubWFwKGZ1bmN0aW9uIChkZXApIHsgcmV0dXJuIGRlcC5uYW1lOyB9KTtcbiAgICAgICAgcmV0dXJuIFwiXFxuV2h5UnVuPyByZWFjdGlvbiAnXCIgKyB0aGlzLm5hbWUgKyBcIic6XFxuICogU3RhdHVzOiBbXCIgKyAodGhpcy5pc0Rpc3Bvc2VkXG4gICAgICAgICAgICA/IFwic3RvcHBlZFwiXG4gICAgICAgICAgICA6IHRoaXMuX2lzUnVubmluZyA/IFwicnVubmluZ1wiIDogdGhpcy5pc1NjaGVkdWxlZCgpID8gXCJzY2hlZHVsZWRcIiA6IFwiaWRsZVwiKSArIFwiXVxcbiAqIFRoaXMgcmVhY3Rpb24gd2lsbCByZS1ydW4gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgb2JzZXJ2YWJsZXMgY2hhbmdlczpcXG4gICAgXCIgKyBqb2luU3RyaW5ncyhvYnNlcnZpbmcpICsgXCJcXG4gICAgXCIgKyAodGhpcy5faXNSdW5uaW5nXG4gICAgICAgICAgICA/IFwiICguLi4gb3IgYW55IG9ic2VydmFibGUgYWNjZXNzZWQgZHVyaW5nIHRoZSByZW1haW5kZXIgb2YgdGhlIGN1cnJlbnQgcnVuKVwiXG4gICAgICAgICAgICA6IFwiXCIpICsgXCJcXG5cXHRcIiArIGdldE1lc3NhZ2UoXCJtMDM4XCIpICsgXCJcXG5cIjtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdGlvbjtcbn0oKSk7XG5mdW5jdGlvbiByZWdpc3RlckVycm9ySGFuZGxlcihoYW5kbGVyKSB7XG4gICAgaW52YXJpYW50KHRoaXMgJiYgdGhpcy4kbW9ieCAmJiBpc1JlYWN0aW9uKHRoaXMuJG1vYngpLCBcIkludmFsaWQgYHRoaXNgXCIpO1xuICAgIGludmFyaWFudCghdGhpcy4kbW9ieC5lcnJvckhhbmRsZXIsIFwiT25seSBvbmUgb25FcnJvckhhbmRsZXIgY2FuIGJlIHJlZ2lzdGVyZWRcIik7XG4gICAgdGhpcy4kbW9ieC5lcnJvckhhbmRsZXIgPSBoYW5kbGVyO1xufVxuZnVuY3Rpb24gb25SZWFjdGlvbkVycm9yKGhhbmRsZXIpIHtcbiAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWR4ID0gZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9O1xufVxuLyoqXG4gKiBNYWdpYyBudW1iZXIgYWxlcnQhXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcbiAqIHVudGlsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGlzIGlzIGdvbm5hIGJlIGEgbmV2ZXIgZW5kaW5nIGxvb3AuLi5cbiAqL1xudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xudmFyIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcbmZ1bmN0aW9uIHJ1blJlYWN0aW9ucygpIHtcbiAgICAvLyBUcmFtcG9saW5pbmcsIGlmIHJ1blJlYWN0aW9ucyBhcmUgYWxyZWFkeSBydW5uaW5nLCBuZXcgcmVhY3Rpb25zIHdpbGwgYmUgcGlja2VkIHVwXG4gICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucylcbiAgICAgICAgcmV0dXJuO1xuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XG59XG5mdW5jdGlvbiBydW5SZWFjdGlvbnNIZWxwZXIoKSB7XG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcbiAgICB2YXIgYWxsUmVhY3Rpb25zID0gZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucztcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxuICAgIC8vIEhlbmNlIHdlIHdvcmsgd2l0aCB0d28gdmFyaWFibGVzIGFuZCBjaGVjayB3aGV0aGVyXG4gICAgLy8gd2UgY29udmVyZ2UgdG8gbm8gcmVtYWluaW5nIHJlYWN0aW9ucyBhZnRlciBhIHdoaWxlLlxuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoKytpdGVyYXRpb25zID09PSBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlYWN0aW9uIGRvZXNuJ3QgY29udmVyZ2UgdG8gYSBzdGFibGUgc3RhdGUgYWZ0ZXIgXCIgKyBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUyArIFwiIGl0ZXJhdGlvbnMuXCIgK1xuICAgICAgICAgICAgICAgIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICByZW1haW5pbmdSZWFjdGlvbnNbaV0ucnVuUmVhY3Rpb24oKTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG59XG52YXIgaXNSZWFjdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlcihmbikge1xuICAgIHZhciBiYXNlU2NoZWR1bGVyID0gcmVhY3Rpb25TY2hlZHVsZXI7XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZm4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTsgfSk7IH07XG59XG5cbmZ1bmN0aW9uIGFzUmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgZGVwcmVjYXRlZChcImFzUmVmZXJlbmNlIGlzIGRlcHJlY2F0ZWQsIHVzZSBvYnNlcnZhYmxlLnJlZiBpbnN0ZWFkXCIpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnJlZih2YWx1ZSk7XG59XG5mdW5jdGlvbiBhc1N0cnVjdHVyZSh2YWx1ZSkge1xuICAgIGRlcHJlY2F0ZWQoXCJhc1N0cnVjdHVyZSBpcyBkZXByZWNhdGVkLiBVc2Ugb2JzZXJ2YWJsZS5zdHJ1Y3QsIGNvbXB1dGVkLnN0cnVjdCBvciByZWFjdGlvbiBvcHRpb25zIGluc3RlYWQuXCIpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnN0cnVjdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBhc0ZsYXQodmFsdWUpIHtcbiAgICBkZXByZWNhdGVkKFwiYXNGbGF0IGlzIGRlcHJlY2F0ZWQsIHVzZSBvYnNlcnZhYmxlLnNoYWxsb3cgaW5zdGVhZFwiKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5zaGFsbG93KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGFzTWFwKGRhdGEpIHtcbiAgICBkZXByZWNhdGVkKFwiYXNNYXAgaXMgZGVwcmVjYXRlZCwgdXNlIG9ic2VydmFibGUubWFwIG9yIG9ic2VydmFibGUuc2hhbGxvd01hcCBpbnN0ZWFkXCIpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcChkYXRhIHx8IHt9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWREZWNvcmF0b3IoZXF1YWxzKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNsYXNzUHJvcGVydHlEZWNvcmF0b3IoZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgXywgX18sIG9yaWdpbmFsRGVzY3JpcHRvcikge1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIG9yaWdpbmFsRGVzY3JpcHRvciAhPT0gXCJ1bmRlZmluZWRcIiwgZ2V0TWVzc2FnZShcIm0wMDlcIikpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIG9yaWdpbmFsRGVzY3JpcHRvci5nZXQgPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMTBcIikpO1xuICAgICAgICB2YXIgYWRtID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgXCJcIik7XG4gICAgICAgIGRlZmluZUNvbXB1dGVkUHJvcGVydHkoYWRtLCBuYW1lLCBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0LCBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LCBlcXVhbHMsIGZhbHNlKTtcbiAgICB9LCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuJG1vYngudmFsdWVzW25hbWVdO1xuICAgICAgICBpZiAob2JzZXJ2YWJsZSA9PT0gdW5kZWZpbmVkIC8vIFNlZSAjNTA1XG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmdldCgpO1xuICAgIH0sIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLiRtb2J4LnZhbHVlc1tuYW1lXS5zZXQodmFsdWUpO1xuICAgIH0sIGZhbHNlLCBmYWxzZSk7XG59XG52YXIgY29tcHV0ZWREZWNvcmF0b3IgPSBjcmVhdGVDb21wdXRlZERlY29yYXRvcihjb21wYXJlci5kZWZhdWx0KTtcbnZhciBjb21wdXRlZFN0cnVjdERlY29yYXRvciA9IGNyZWF0ZUNvbXB1dGVkRGVjb3JhdG9yKGNvbXBhcmVyLnN0cnVjdHVyYWwpO1xuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzIHByb3BlcnRpZXM6IEBjb21wdXRlZCBnZXQgdmFsdWUoKSB7IHJldHVybiBleHByOyB9LlxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xuICovXG52YXIgY29tcHV0ZWQgPSBmdW5jdGlvbiBjb21wdXRlZChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpbnZhcmlhbnQodHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMTFcIikpO1xuICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoIDwgMywgZ2V0TWVzc2FnZShcIm0wMTJcIikpO1xuICAgIHZhciBvcHRzID0gdHlwZW9mIGFyZzIgPT09IFwib2JqZWN0XCIgPyBhcmcyIDoge307XG4gICAgb3B0cy5zZXR0ZXIgPSB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiID8gYXJnMiA6IG9wdHMuc2V0dGVyO1xuICAgIHZhciBlcXVhbHMgPSBvcHRzLmVxdWFsc1xuICAgICAgICA/IG9wdHMuZXF1YWxzXG4gICAgICAgIDogb3B0cy5jb21wYXJlU3RydWN0dXJhbCB8fCBvcHRzLnN0cnVjdCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBjb21wYXJlci5kZWZhdWx0O1xuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRWYWx1ZShhcmcxLCBvcHRzLmNvbnRleHQsIGVxdWFscywgb3B0cy5uYW1lIHx8IGFyZzEubmFtZSB8fCBcIlwiLCBvcHRzLnNldHRlcik7XG59O1xuY29tcHV0ZWQuc3RydWN0ID0gY29tcHV0ZWRTdHJ1Y3REZWNvcmF0b3I7XG5jb21wdXRlZC5lcXVhbHMgPSBjcmVhdGVDb21wdXRlZERlY29yYXRvcjtcblxuZnVuY3Rpb24gZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpIHtcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcIm9iamVjdFwiICYmIHRoaW5nICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheSh0aGluZykpIHtcbiAgICAgICAgICAgIGludmFyaWFudChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkLCBnZXRNZXNzYWdlKFwibTAzNlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmcuJG1vYnguYXRvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSkge1xuICAgICAgICAgICAgdmFyIGFueVRoaW5nID0gdGhpbmc7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXRvbShhbnlUaGluZy5fa2V5cyk7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFueVRoaW5nLl9kYXRhW3Byb3BlcnR5XSB8fCBhbnlUaGluZy5faGFzTWFwW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGludmFyaWFudCghIW9ic2VydmFibGUsIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBydW5MYXp5SW5pdGlhbGl6ZXJzKHRoaW5nKTtcbiAgICAgICAgaWYgKHByb3BlcnR5ICYmICF0aGluZy4kbW9ieClcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyIC8vIFRPRE86IHJlbW92ZSBpbiA0LjBcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJwbGVhc2Ugc3BlY2lmeSBhIHByb3BlcnR5XCIpO1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGluZy4kbW9ieC52YWx1ZXNbcHJvcGVydHldO1xuICAgICAgICAgICAgaW52YXJpYW50KCEhb2JzZXJ2YWJsZSwgXCJubyBvYnNlcnZhYmxlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvdW5kIG9uIHRoZSBvYnNlcnZhYmxlIG9iamVjdCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmIChpc1JlYWN0aW9uKHRoaW5nLiRtb2J4KSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZy4kbW9ieDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFpbChcIkNhbm5vdCBvYnRhaW4gYXRvbSBmcm9tIFwiICsgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KSB7XG4gICAgaW52YXJpYW50KHRoaW5nLCBcIkV4cGVjdGluZyBzb21lIG9iamVjdFwiKTtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XG4gICAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgIHJ1bkxhenlJbml0aWFsaXplcnModGhpbmcpO1xuICAgIGlmICh0aGluZy4kbW9ieClcbiAgICAgICAgcmV0dXJuIHRoaW5nLiRtb2J4O1xuICAgIGludmFyaWFudChmYWxzZSwgXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXREZWJ1Z05hbWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgdmFyIG5hbWVkO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpXG4gICAgICAgIG5hbWVkID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICAgIGVsc2VcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nKTsgLy8gdmFsaWQgZm9yIGFycmF5cyBhcyB3ZWxsXG4gICAgcmV0dXJuIG5hbWVkLm5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcHV0ZWQodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdmFsdWUuJG1vYngudmFsdWVzW3Byb3BlcnR5XSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmICh0eXBlb2YgY2JPckZpcmUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlKTtcbn1cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgaGFuZGxlcikge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLmludGVyY2VwdChoYW5kbGVyKTtcbn1cblxuLyoqXG4gKiBleHByIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSB0ZW1wb3JhcmlseSB2aWV3cyBpbnNpZGUgdmlld3MuXG4gKiBUaGlzIGNhbiBiZSBpbXByb3ZlZCB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIGlmIGEgdmFsdWUgY2hhbmdlcyBvZnRlbiwgYnV0IHVzdWFsbHkgZG9lc24ndCBhZmZlY3QgdGhlIG91dGNvbWUgb2YgYW4gZXhwcmVzc2lvbi5cbiAqXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgdGhlIGV4cHJlc3Npb24gcHJldmVudHMgdGhhdCBhIGNvbXBvbmVudCBpcyByZXJlbmRlciBfZWFjaCB0aW1lXyB0aGUgc2VsZWN0aW9uIGNoYW5nZXM7XG4gKiBpbnN0ZWFkIGl0IHdpbGwgb25seSByZXJlbmRlcnMgd2hlbiB0aGUgY3VycmVudCB0b2RvIGlzIChkZSlzZWxlY3RlZC5cbiAqXG4gKiByZWFjdGl2ZUNvbXBvbmVudCgocHJvcHMpID0+IHtcbiAqICAgICBjb25zdCB0b2RvID0gcHJvcHMudG9kbztcbiAqICAgICBjb25zdCBpc1NlbGVjdGVkID0gbW9ieC5leHByKCgpID0+IHByb3BzLnZpZXdTdGF0ZS5zZWxlY3Rpb24gPT09IHRvZG8pO1xuICogICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/IFwidG9kbyB0b2RvLXNlbGVjdGVkXCIgOiBcInRvZG9cIn0+e3RvZG8udGl0bGV9PC9kaXY+XG4gKiB9KTtcbiAqXG4gKi9cbmZ1bmN0aW9uIGV4cHIoZXhwciwgc2NvcGUpIHtcbiAgICBpZiAoIWlzQ29tcHV0aW5nRGVyaXZhdGlvbigpKVxuICAgICAgICBjb25zb2xlLndhcm4oZ2V0TWVzc2FnZShcIm0wMTNcIikpO1xuICAgIC8vIG9wdGltaXphdGlvbjogd291bGQgYmUgbW9yZSBlZmZpY2llbnQgaWYgdGhlIGV4cHIgaXRzZWxmIHdvdWxkbid0IGJlIGV2YWx1YXRlZCBmaXJzdCBvbiB0aGUgbmV4dCBjaGFuZ2UsIGJ1dCBqdXN0IGEgJ2NoYW5nZWQnIHNpZ25hbCB3b3VsZCBiZSBmaXJlZFxuICAgIHJldHVybiBjb21wdXRlZChleHByLCB7IGNvbnRleHQ6IHNjb3BlIH0pLmdldCgpO1xufVxuXG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgZGV0ZWN0Q3ljbGVzLCBfX2FscmVhZHlTZWVuKSB7XG4gICAgaWYgKGRldGVjdEN5Y2xlcyA9PT0gdm9pZCAwKSB7IGRldGVjdEN5Y2xlcyA9IHRydWU7IH1cbiAgICBpZiAoX19hbHJlYWR5U2VlbiA9PT0gdm9pZCAwKSB7IF9fYWxyZWFkeVNlZW4gPSBbXTsgfVxuICAgIC8vIG9wdGltaXphdGlvbjogdXNpbmcgRVM2IG1hcCB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCFcbiAgICAvLyBvcHRpbWl6YXRpb246IGxpZnQgdGhpcyBmdW5jdGlvbiBvdXRzaWRlIHRvSlMsIHRoaXMgbWFrZXMgcmVjdXJzaW9uIGV4cGVuc2l2ZVxuICAgIGZ1bmN0aW9uIGNhY2hlKHZhbHVlKSB7XG4gICAgICAgIGlmIChkZXRlY3RDeWNsZXMpXG4gICAgICAgICAgICBfX2FscmVhZHlTZWVuLnB1c2goW3NvdXJjZSwgdmFsdWVdKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlKHNvdXJjZSkpIHtcbiAgICAgICAgaWYgKGRldGVjdEN5Y2xlcyAmJiBfX2FscmVhZHlTZWVuID09PSBudWxsKVxuICAgICAgICAgICAgX19hbHJlYWR5U2VlbiA9IFtdO1xuICAgICAgICBpZiAoZGV0ZWN0Q3ljbGVzICYmIHNvdXJjZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IF9fYWxyZWFkeVNlZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChfX2FscmVhZHlTZWVuW2ldWzBdID09PSBzb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2FscmVhZHlTZWVuW2ldWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gY2FjaGUoW10pO1xuICAgICAgICAgICAgdmFyIHRvQWRkID0gc291cmNlLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRvSlModmFsdWUsIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbik7IH0pO1xuICAgICAgICAgICAgcmVzLmxlbmd0aCA9IHRvQWRkLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9BZGQubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgICAgIHJlc1tpXSA9IHRvQWRkW2ldO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBjYWNoZSh7fSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKVxuICAgICAgICAgICAgICAgIHJlc1trZXldID0gdG9KUyhzb3VyY2Vba2V5XSwgZGV0ZWN0Q3ljbGVzLCBfX2FscmVhZHlTZWVuKTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChzb3VyY2UpKSB7XG4gICAgICAgICAgICB2YXIgcmVzXzEgPSBjYWNoZSh7fSk7XG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gKHJlc18xW2tleV0gPSB0b0pTKHZhbHVlLCBkZXRlY3RDeWNsZXMsIF9fYWxyZWFkeVNlZW4pKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkpXG4gICAgICAgICAgICByZXR1cm4gdG9KUyhzb3VyY2UuZ2V0KCksIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbik7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybWVyKHRyYW5zZm9ybWVyLCBvbkNsZWFudXApIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHRyYW5zZm9ybWVyID09PSBcImZ1bmN0aW9uXCIgJiYgdHJhbnNmb3JtZXIubGVuZ3RoIDwgMiwgXCJjcmVhdGVUcmFuc2Zvcm1lciBleHBlY3RzIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBhcmd1bWVudFwiKTtcbiAgICAvLyBNZW1vaXplczogb2JqZWN0IGlkIC0+IHJlYWN0aXZlIHZpZXcgdGhhdCBhcHBsaWVzIHRyYW5zZm9ybWVyIHRvIHRoZSBvYmplY3RcbiAgICB2YXIgb2JqZWN0Q2FjaGUgPSB7fTtcbiAgICAvLyBJZiB0aGUgcmVzZXRJZCBjaGFuZ2VzLCB3ZSB3aWxsIGNsZWFyIHRoZSBvYmplY3QgY2FjaGUsIHNlZSAjMTYzXG4gICAgLy8gVGhpcyBjb25zdHJ1Y3Rpb24gaXMgdXNlZCB0byBhdm9pZCBsZWFraW5nIHJlZnMgdG8gdGhlIG9iamVjdENhY2hlIGRpcmVjdGx5XG4gICAgdmFyIHJlc2V0SWQgPSBnbG9iYWxTdGF0ZS5yZXNldElkO1xuICAgIC8vIExvY2FsIHRyYW5zZm9ybWVyIGNsYXNzIHNwZWNpZmljYWxseSBmb3IgdGhpcyB0cmFuc2Zvcm1lclxuICAgIHZhciBUcmFuc2Zvcm1lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhUcmFuc2Zvcm1lciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtZXIoc291cmNlSWRlbnRpZmllciwgc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0cmFuc2Zvcm1lcihzb3VyY2VPYmplY3QpOyB9LCB1bmRlZmluZWQsIGNvbXBhcmVyLmRlZmF1bHQsIFwiVHJhbnNmb3JtZXItXCIgKyB0cmFuc2Zvcm1lci5uYW1lICsgXCItXCIgKyBzb3VyY2VJZGVudGlmaWVyLCB1bmRlZmluZWQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5zb3VyY2VJZGVudGlmaWVyID0gc291cmNlSWRlbnRpZmllcjtcbiAgICAgICAgICAgIF90aGlzLnNvdXJjZU9iamVjdCA9IHNvdXJjZU9iamVjdDtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBUcmFuc2Zvcm1lci5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgZGVsZXRlIG9iamVjdENhY2hlW3RoaXMuc291cmNlSWRlbnRpZmllcl07XG4gICAgICAgICAgICBpZiAob25DbGVhbnVwKVxuICAgICAgICAgICAgICAgIG9uQ2xlYW51cChsYXN0VmFsdWUsIHRoaXMuc291cmNlT2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybWVyO1xuICAgIH0oQ29tcHV0ZWRWYWx1ZSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmIChyZXNldElkICE9PSBnbG9iYWxTdGF0ZS5yZXNldElkKSB7XG4gICAgICAgICAgICBvYmplY3RDYWNoZSA9IHt9O1xuICAgICAgICAgICAgcmVzZXRJZCA9IGdsb2JhbFN0YXRlLnJlc2V0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBnZXRNZW1vaXphdGlvbklkKG9iamVjdCk7XG4gICAgICAgIHZhciByZWFjdGl2ZVRyYW5zZm9ybWVyID0gb2JqZWN0Q2FjaGVbaWRlbnRpZmllcl07XG4gICAgICAgIGlmIChyZWFjdGl2ZVRyYW5zZm9ybWVyKVxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0aXZlVHJhbnNmb3JtZXIuZ2V0KCk7XG4gICAgICAgIC8vIE5vdCBpbiBjYWNoZTsgY3JlYXRlIGEgcmVhY3RpdmUgdmlld1xuICAgICAgICByZWFjdGl2ZVRyYW5zZm9ybWVyID0gb2JqZWN0Q2FjaGVbaWRlbnRpZmllcl0gPSBuZXcgVHJhbnNmb3JtZXIoaWRlbnRpZmllciwgb2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHJlYWN0aXZlVHJhbnNmb3JtZXIuZ2V0KCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldE1lbW9pemF0aW9uSWQob2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG9iamVjdCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBvYmplY3QgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSB0cmFuc2Zvcm0gZXhwZWN0ZWQgc29tZSBraW5kIG9mIG9iamVjdCBvciBwcmltaXRpdmUgdmFsdWUsIGdvdDogXCIgKyBvYmplY3QpO1xuICAgIHZhciB0aWQgPSBvYmplY3QuJHRyYW5zZm9ybUlkO1xuICAgIGlmICh0aWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aWQgPSBnZXROZXh0SWQoKTtcbiAgICAgICAgYWRkSGlkZGVuUHJvcChvYmplY3QsIFwiJHRyYW5zZm9ybUlkXCIsIHRpZCk7XG4gICAgfVxuICAgIHJldHVybiB0aWQ7XG59XG5cbmZ1bmN0aW9uIGxvZyhtc2cpIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIHJldHVybiBtc2c7XG59XG5mdW5jdGlvbiB3aHlSdW4odGhpbmcsIHByb3ApIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpbmcgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgICAgICBpZiAoIXRoaW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiBsb2coZ2V0TWVzc2FnZShcIm0wMjRcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaW5nID0gZ2V0QXRvbSh0aGluZywgcHJvcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpbmcgPSBnZXRBdG9tKHRoaW5nKTtcbiAgICBpZiAoaXNDb21wdXRlZFZhbHVlKHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIGxvZyh0aGluZy53aHlSdW4oKSk7XG4gICAgZWxzZSBpZiAoaXNSZWFjdGlvbih0aGluZykpXG4gICAgICAgIHJldHVybiBsb2codGhpbmcud2h5UnVuKCkpO1xuICAgIHJldHVybiBmYWlsKGdldE1lc3NhZ2UoXCJtMDI1XCIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jeVRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG5vZGVUb0RlcGVuZGVuY3lUcmVlKGdldEF0b20odGhpbmcsIHByb3BlcnR5KSk7XG59XG5mdW5jdGlvbiBub2RlVG9EZXBlbmRlbmN5VHJlZShub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lXG4gICAgfTtcbiAgICBpZiAobm9kZS5vYnNlcnZpbmcgJiYgbm9kZS5vYnNlcnZpbmcubGVuZ3RoID4gMClcbiAgICAgICAgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZykubWFwKG5vZGVUb0RlcGVuZGVuY3lUcmVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBub2RlVG9PYnNlcnZlclRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb09ic2VydmVyVHJlZShub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lXG4gICAgfTtcbiAgICBpZiAoaGFzT2JzZXJ2ZXJzKG5vZGUpKVxuICAgICAgICByZXN1bHQub2JzZXJ2ZXJzID0gZ2V0T2JzZXJ2ZXJzKG5vZGUpLm1hcChub2RlVG9PYnNlcnZlclRyZWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdFJlYWRzKHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgdmFyIHRhcmdldDtcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVBcnJheSh0aGluZykgfHwgaXNPYnNlcnZhYmxlVmFsdWUodGhpbmcpKSB7XG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3BPckhhbmRsZXIgIT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFpbChcIkludGVyY2VwdFJlYWRzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBhIHNwZWNpZmljIHByb3BlcnR5LCBub3Qgd2l0aCBhbiBvYmplY3QgaW4gZ2VuZXJhbFwiKTtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BPckhhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwoXCJFeHBlY3RlZCBvYnNlcnZhYmxlIG1hcCwgb2JqZWN0IG9yIGFycmF5IGFzIGZpcnN0IGFycmF5XCIpO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBmYWlsKFwiQW4gaW50ZXJjZXB0IHJlYWRlciB3YXMgYWxyZWFkeSBlc3RhYmxpc2hlZFwiKTtcbiAgICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGFyZ2V0LmRlaGFuY2VyID0gdW5kZWZpbmVkO1xuICAgIH07XG59XG5cbi8qKlxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE2XG4gKiBNSVQgTGljZW5zZWRcbiAqXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhbiBnbG9iYWwgb3ZlcnZpZXcgb2YgaG93IE1vYlggaW50ZXJuYWxseSB3b3JrcyxcbiAqIHRoaXMgaXMgYSBnb29kIHBsYWNlIHRvIHN0YXJ0OlxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxuICpcbiAqIFNvdXJjZSBmb2xkZXJzOlxuICogPT09PT09PT09PT09PT09XG4gKlxuICogLSBhcGkvICAgICBNb3N0IG9mIHRoZSBwdWJsaWMgc3RhdGljIG1ldGhvZHMgZXhwb3NlZCBieSB0aGUgbW9kdWxlIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSB0eXBlcy8gICBBbGwgdGhlIG1hZ2ljIHRoYXQgaXMgbmVlZCB0byBoYXZlIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCB2YWx1ZXMgaXMgaW4gdGhpcyBmb2xkZXIuIEluY2x1ZGluZyB0aGUgbW9kaWZpZXJzIGxpa2UgYGFzRmxhdGAuXG4gKiAtIHV0aWxzLyAgIFV0aWxpdHkgc3R1ZmYuXG4gKlxuICovXG52YXIgZXh0cmFzID0ge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzOiBhbGxvd1N0YXRlQ2hhbmdlcyxcbiAgICBkZWVwRXF1YWw6IGRlZXBFcXVhbCxcbiAgICBnZXRBdG9tOiBnZXRBdG9tLFxuICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lLFxuICAgIGdldERlcGVuZGVuY3lUcmVlOiBnZXREZXBlbmRlbmN5VHJlZSxcbiAgICBnZXRBZG1pbmlzdHJhdGlvbjogZ2V0QWRtaW5pc3RyYXRpb24sXG4gICAgZ2V0R2xvYmFsU3RhdGU6IGdldEdsb2JhbFN0YXRlLFxuICAgIGdldE9ic2VydmVyVHJlZTogZ2V0T2JzZXJ2ZXJUcmVlLFxuICAgIGludGVyY2VwdFJlYWRzOiBpbnRlcmNlcHRSZWFkcyxcbiAgICBpc0NvbXB1dGluZ0Rlcml2YXRpb246IGlzQ29tcHV0aW5nRGVyaXZhdGlvbixcbiAgICBpc1NweUVuYWJsZWQ6IGlzU3B5RW5hYmxlZCxcbiAgICBvblJlYWN0aW9uRXJyb3I6IG9uUmVhY3Rpb25FcnJvcixcbiAgICByZXNlcnZlQXJyYXlCdWZmZXI6IHJlc2VydmVBcnJheUJ1ZmZlcixcbiAgICByZXNldEdsb2JhbFN0YXRlOiByZXNldEdsb2JhbFN0YXRlLFxuICAgIGlzb2xhdGVHbG9iYWxTdGF0ZTogaXNvbGF0ZUdsb2JhbFN0YXRlLFxuICAgIHNoYXJlR2xvYmFsU3RhdGU6IHNoYXJlR2xvYmFsU3RhdGUsXG4gICAgc3B5UmVwb3J0OiBzcHlSZXBvcnQsXG4gICAgc3B5UmVwb3J0RW5kOiBzcHlSZXBvcnRFbmQsXG4gICAgc3B5UmVwb3J0U3RhcnQ6IHNweVJlcG9ydFN0YXJ0LFxuICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyOiBzZXRSZWFjdGlvblNjaGVkdWxlclxufTtcbnZhciBldmVyeXRoaW5nID0ge1xuICAgIFJlYWN0aW9uOiBSZWFjdGlvbixcbiAgICB1bnRyYWNrZWQ6IHVudHJhY2tlZCxcbiAgICBBdG9tOiBBdG9tLFxuICAgIEJhc2VBdG9tOiBCYXNlQXRvbSxcbiAgICB1c2VTdHJpY3Q6IHVzZVN0cmljdCxcbiAgICBpc1N0cmljdE1vZGVFbmFibGVkOiBpc1N0cmljdE1vZGVFbmFibGVkLFxuICAgIHNweTogc3B5LFxuICAgIGNvbXBhcmVyOiBjb21wYXJlcixcbiAgICBhc1JlZmVyZW5jZTogYXNSZWZlcmVuY2UsXG4gICAgYXNGbGF0OiBhc0ZsYXQsXG4gICAgYXNTdHJ1Y3R1cmU6IGFzU3RydWN0dXJlLFxuICAgIGFzTWFwOiBhc01hcCxcbiAgICBpc01vZGlmaWVyRGVzY3JpcHRvcjogaXNNb2RpZmllckRlc2NyaXB0b3IsXG4gICAgaXNPYnNlcnZhYmxlT2JqZWN0OiBpc09ic2VydmFibGVPYmplY3QsXG4gICAgaXNCb3hlZE9ic2VydmFibGU6IGlzT2JzZXJ2YWJsZVZhbHVlLFxuICAgIGlzT2JzZXJ2YWJsZUFycmF5OiBpc09ic2VydmFibGVBcnJheSxcbiAgICBPYnNlcnZhYmxlTWFwOiBPYnNlcnZhYmxlTWFwLFxuICAgIGlzT2JzZXJ2YWJsZU1hcDogaXNPYnNlcnZhYmxlTWFwLFxuICAgIG1hcDogbWFwLFxuICAgIHRyYW5zYWN0aW9uOiB0cmFuc2FjdGlvbixcbiAgICBvYnNlcnZhYmxlOiBvYnNlcnZhYmxlLFxuICAgIGNvbXB1dGVkOiBjb21wdXRlZCxcbiAgICBpc09ic2VydmFibGU6IGlzT2JzZXJ2YWJsZSxcbiAgICBpc0NvbXB1dGVkOiBpc0NvbXB1dGVkLFxuICAgIGV4dGVuZE9ic2VydmFibGU6IGV4dGVuZE9ic2VydmFibGUsXG4gICAgZXh0ZW5kU2hhbGxvd09ic2VydmFibGU6IGV4dGVuZFNoYWxsb3dPYnNlcnZhYmxlLFxuICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgaW50ZXJjZXB0OiBpbnRlcmNlcHQsXG4gICAgYXV0b3J1bjogYXV0b3J1bixcbiAgICBhdXRvcnVuQXN5bmM6IGF1dG9ydW5Bc3luYyxcbiAgICB3aGVuOiB3aGVuLFxuICAgIHJlYWN0aW9uOiByZWFjdGlvbixcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBpc0FjdGlvbjogaXNBY3Rpb24sXG4gICAgcnVuSW5BY3Rpb246IHJ1bkluQWN0aW9uLFxuICAgIGV4cHI6IGV4cHIsXG4gICAgdG9KUzogdG9KUyxcbiAgICBjcmVhdGVUcmFuc2Zvcm1lcjogY3JlYXRlVHJhbnNmb3JtZXIsXG4gICAgd2h5UnVuOiB3aHlSdW4sXG4gICAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICAgIGV4dHJhczogZXh0cmFzXG59O1xudmFyIHdhcm5lZEFib3V0RGVmYXVsdEV4cG9ydCA9IGZhbHNlO1xudmFyIF9sb29wXzEgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciB2YWwgPSBldmVyeXRoaW5nW3BdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVyeXRoaW5nLCBwLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXJuZWRBYm91dERlZmF1bHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICB3YXJuZWRBYm91dERlZmF1bHRFeHBvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVzaW5nIGRlZmF1bHQgZXhwb3J0IChgaW1wb3J0IG1vYnggZnJvbSAnbW9ieCdgKSBpcyBkZXByZWNhdGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJhbmQgd29u4oCZdCB3b3JrIGluIG1vYnhANC4wLjBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiVXNlIGBpbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnYCBpbnN0ZWFkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmZvciAodmFyIHAgaW4gZXZlcnl0aGluZykge1xuICAgIF9sb29wXzEocCk7XG59XG5pZiAodHlwZW9mIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSBcIm9iamVjdFwiKSB7XG4gICAgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0TW9ieCh7IHNweTogc3B5LCBleHRyYXM6IGV4dHJhcyB9KTtcbn1cblxuZXhwb3J0IHsgZXh0cmFzLCBSZWFjdGlvbiwgdW50cmFja2VkLCBJRGVyaXZhdGlvblN0YXRlLCBBdG9tLCBCYXNlQXRvbSwgdXNlU3RyaWN0LCBpc1N0cmljdE1vZGVFbmFibGVkLCBzcHksIGNvbXBhcmVyLCBhc1JlZmVyZW5jZSwgYXNGbGF0LCBhc1N0cnVjdHVyZSwgYXNNYXAsIGlzTW9kaWZpZXJEZXNjcmlwdG9yLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlTWFwLCBtYXAsIHRyYW5zYWN0aW9uLCBvYnNlcnZhYmxlLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBleHRlbmRPYnNlcnZhYmxlLCBleHRlbmRTaGFsbG93T2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgaW50ZXJjZXB0LCBhdXRvcnVuLCBhdXRvcnVuQXN5bmMsIHdoZW4sIHJlYWN0aW9uLCBhY3Rpb24sIGlzQWN0aW9uLCBydW5JbkFjdGlvbiwgZXhwciwgdG9KUywgY3JlYXRlVHJhbnNmb3JtZXIsIHdoeVJ1biwgaXNBcnJheUxpa2UgfTtleHBvcnQgZGVmYXVsdCBldmVyeXRoaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbW9ieC9saWIvbW9ieC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0b3JlPFQsIFRSb290U3RvcmU+IHtcclxuXHRba2V5OiBzdHJpbmddOiBhbnk7XHJcblx0cHVibGljIHJvb3RTdG9yZTogVFJvb3RTdG9yZTtcclxuXHRwdWJsaWMgY29uc3RydWN0b3Iocm9vdFN0b3JlOiBUUm9vdFN0b3JlKSB7XHJcblx0XHR0aGlzLnJvb3RTdG9yZSA9IHJvb3RTdG9yZTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS50cyIsImltcG9ydCB7IGV4dHJhcyB9IGZyb20gXCJtb2J4XCI7XHJcbmV4dHJhcy5pc29sYXRlR2xvYmFsU3RhdGUoKTtcclxuZXhwb3J0ICogZnJvbSBcIi4vcm9vdC1zdG9yZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdG9yZS1jb2xsZWN0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0b3JlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJtb2J4XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb290U3RvcmUge1xyXG5cdFtrZXk6IHN0cmluZ106IGFueTtcclxuXHRAYWN0aW9uIHB1YmxpYyBzZXQobW9kZWw6IGFueSkge1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gbW9kZWwpIHtcclxuXHRcdFx0aWYgKG1vZGVsLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHR0aGlzW2tleV0gPSBtb2RlbFtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RTdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jvb3Qtc3RvcmUudHMiLCJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUsIGNvbXB1dGVkLCBvYnNlcnZlIH0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRlZExpc3Q8VFN0b3JlIGV4dGVuZHMgeyBbZmllbGQ6IHN0cmluZ106IGFueTsgfSwgVFJvb3RTdG9yZT4ge1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7IC8vIHRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9ucyAoRXguOiBmYXZvcml0ZVJlc3RhdXJhbnRlcywgKVxyXG5cdHB1YmxpYyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uPFRTdG9yZSwgVFJvb3RTdG9yZT47XHJcblx0cHVibGljIGlkRmllbGROYW1lOiBzdHJpbmc7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBwYWdlTWFwSWRzOiB7IFtwYWdlOiBudW1iZXJdOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+IH0gPSB7fTtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIHNraXA6IG51bWJlciA9IDA7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyID0gMTAwMDAwOyAvLyBSb3dzIG9yIFBhZ2VTaXplXHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgcGFnZVF0eTogbnVtYmVyID0gMDtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIHRvdGFsSXRlbXM6IG51bWJlciA9IC0xO1xyXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29sbGVjdGlvbjogQ29sbGVjdGlvbjxUU3RvcmUsIFRSb290U3RvcmU+LCBpZEZpZWxkTmFtZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcclxuXHRcdHRoaXMuaWRGaWVsZE5hbWUgPSBpZEZpZWxkTmFtZTtcclxuXHR9XHJcblx0Ly8gY29tcHV0ZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEBjb21wdXRlZCBwdWJsaWMgZ2V0IHBhZ2VDb2xsZWN0aW9uSWRzKCk6IEFycmF5PHN0cmluZyB8IG51bWJlcj4ge1xyXG5cdFx0aWYgKHRoaXMucGFnZU1hcElkc1t0aGlzLnBhZ2VdICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYWdlTWFwSWRzW3RoaXMucGFnZV0gIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFnZU1hcElkc1t0aGlzLnBhZ2VdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAY29tcHV0ZWQgcHVibGljIGdldCBwYWdlQ29sbGVjdGlvbigpOiBUU3RvcmVbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYWdlQ29sbGVjdGlvbklkcy5tYXAoKGlkKSA9PiB7XHJcblx0XHRcdGNvbnN0IGl0ZW06IFRTdG9yZSA9IHRoaXMuY29sbGVjdGlvbi5nZXRJdGVtKGlkKTtcclxuXHRcdFx0aWYgKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAY29tcHV0ZWQgcHVibGljIGdldCBpbmZpbml0ZUNvbGxlY3Rpb25JZHMoKTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB7XHJcblx0XHRsZXQgcmV0dXJuSWRzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gW107XHJcblx0XHRmb3IgKGxldCBwID0gMTsgcCA8IHRoaXMucGFnZTsgcCsrKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhZ2VNYXBJZHNbcF0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhZ2VNYXBJZHNbcF0gIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm5JZHMgPSByZXR1cm5JZHMuY29uY2F0KHJldHVybklkcywgdGhpcy5wYWdlTWFwSWRzW3BdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldHVybklkcztcclxuXHR9XHJcblx0QGNvbXB1dGVkIHB1YmxpYyBnZXQgaW5maW5pdGVDb2xsZWN0aW9uKCk6IFRTdG9yZVtdIHtcclxuXHRcdHJldHVybiB0aGlzLmluZmluaXRlQ29sbGVjdGlvbklkcy5tYXAoKGlkKSA9PiB7XHJcblx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLmNvbGxlY3Rpb24uZ2V0SXRlbShpZCk7XHJcblx0XHRcdGlmIChpdGVtICE9PSB1bmRlZmluZWQgJiYgaXRlbSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0QGFjdGlvbiBwdWJsaWMgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciA9IC0xLCBwYWdlUXR5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG5cdFx0aWYgKHBhZ2VTaXplID4gLTEgJiYgcGFnZVNpemUgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHBhZ2VRdHkgPiAtMSAmJiBwYWdlUXR5ICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMucGFnZVF0eSA9IHBhZ2VRdHk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNraXAgPSAoY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemU7XHJcblx0XHR0aGlzLnBhZ2UgPSBjdXJyZW50UGFnZTtcclxuXHR9XHJcblx0Ly8gaXRlbXMgY29udHJvbGxlclxyXG5cdEBhY3Rpb24gcHVibGljIHNldEl0ZW0oaXRlbTogVFN0b3JlKSB7XHJcblx0XHR0aGlzLmNvbGxlY3Rpb24uc2V0SXRlbShpdGVtKTtcclxuXHR9XHJcblx0QGFjdGlvbiBwdWJsaWMgZ2V0SXRlbShpZDogc3RyaW5nIHwgbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uLmdldEl0ZW0oaWQudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cdEBhY3Rpb24gcHVibGljIHJlbW92ZUl0ZW0oaWQ6IHN0cmluZyB8IG51bWJlcikge1xyXG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XHJcblx0XHRpZiAoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5jb2xsZWN0aW9uLnJlbW92ZUl0ZW0oaWQudG9TdHJpbmcoKSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyByZW1vdmUgc3VjY2Vzc1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAYWN0aW9uIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogVFN0b3JlW10sIHBhZ2U6IG51bWJlciA9IC0xLCBwYWdlU2l6ZTogbnVtYmVyID0gLTEsIHBhZ2VRdHk6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcblx0XHRjb25zdCBoYXNJdGVtczogYm9vbGVhbiA9IChpdGVtcyAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zICE9PSBudWxsKTtcclxuXHRcdGNvbnN0IHBhZ2VJZHM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbXTtcclxuXHRcdGlmIChoYXNJdGVtcykge1xyXG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtOiBUU3RvcmUpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldEl0ZW0oaXRlbSk7XHJcblx0XHRcdFx0cGFnZUlkcy5wdXNoKGl0ZW1bdGhpcy5pZEZpZWxkTmFtZV0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChwYWdlID4gLTEpIHtcclxuXHRcdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuXHRcdFx0dGhpcy5wYWdlTWFwSWRzW3BhZ2VdID0gcGFnZUlkcztcclxuXHRcdH1cclxuXHRcdGlmIChwYWdlU2l6ZSA+IC0xKSB7IHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTsgfVxyXG5cdFx0aWYgKHBhZ2VRdHkgPiAtMSkgeyB0aGlzLnBhZ2VRdHkgPSBwYWdlUXR5OyB9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2xsZWN0aW9uPFRTdG9yZSBleHRlbmRzIHsgW2ZpZWxkOiBzdHJpbmddOiBhbnk7IH0sIFRSb290U3RvcmU+IGV4dGVuZHMgU3RvcmU8VFN0b3JlLCBUUm9vdFN0b3JlPiB7XHJcblx0cHJpdmF0ZSB0eXBlOiB7IG5ldyhyb290U3RvcmU6IFRSb290U3RvcmUpOiBUU3RvcmU7IH0gPSBudWxsO1xyXG5cdHByaXZhdGUgaWRGaWVsZE5hbWU6IHN0cmluZztcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIHBhZ2luYXRlZExpc3RzOiB7IFtuYW1lOiBzdHJpbmddOiBQYWdpbmF0ZWRMaXN0PFRTdG9yZSwgVFJvb3RTdG9yZT47IH0gPSB7fTtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIGl0ZW1zOiB7IFtpZDogc3RyaW5nXTogVFN0b3JlOyB9ID0ge307XHJcblx0Y29uc3RydWN0b3Iocm9vdFN0b3JlOiBUUm9vdFN0b3JlLCB0eXBlOiB7IG5ldyguLi5hcmdzOiBhbnlbXSk6IFRTdG9yZTsgfSwgaWRGaWVsZE5hbWU6IFwiaWRcIiB8IFwibmFtZVwiIHwgXCJzdHJpbmdcIiB8IHN0cmluZyA9IFwiaWRcIikge1xyXG5cdFx0c3VwZXIocm9vdFN0b3JlKTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmlkRmllbGROYW1lID0gaWRGaWVsZE5hbWU7XHJcblx0fVxyXG5cdEBjb21wdXRlZCBwdWJsaWMgZ2V0IGRlZmF1bHRDb2xsZWN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFnaW5hdGVkTGlzdHNbXCJkZWZhdWx0XCJdO1xyXG5cdH1cclxuXHRAYWN0aW9uIHB1YmxpYyBnZXRQYWdpbmF0ZWRMaXN0KG5hbWU6IHN0cmluZyk6IFBhZ2luYXRlZExpc3Q8VFN0b3JlLCBUUm9vdFN0b3JlPiB7XHJcblx0XHR0aGlzLmVuc3VyZVBhZ2luYXRlZExpc3QobmFtZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5wYWdpbmF0ZWRMaXN0c1tuYW1lXTtcclxuXHR9XHJcblx0QGFjdGlvbiBwdWJsaWMgc2V0SXRlbShpdGVtOiBUU3RvcmUpIHtcclxuXHRcdHRoaXMuaXRlbXNbaXRlbVt0aGlzLmlkRmllbGROYW1lXS50b1N0cmluZygpXSA9IGl0ZW07XHJcblx0fVxyXG5cdEBhY3Rpb24gcHVibGljIGdldEl0ZW0oaWQ6IHN0cmluZyB8IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbXNbaWQudG9TdHJpbmcoKV07XHJcblx0fVxyXG5cdEBhY3Rpb24gcHVibGljIHJlbW92ZUl0ZW0oaWQ6IHN0cmluZyB8IG51bWJlcikge1xyXG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XHJcblx0XHRpZiAoaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0gIT09IG51bGwpIHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuaXRlbXNbaWQudG9TdHJpbmcoKV07XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyByZW1vdmUgc3VjY2Vzc1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAYWN0aW9uIHB1YmxpYyBjb2xsZWN0R2FyYmFnZSgpOiB2b2lkIHtcclxuXHRcdGxldCBpZHM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbXTtcclxuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLnBhZ2luYXRlZExpc3RzKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhZ2luYXRlZExpc3RzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcblx0XHRcdFx0Y29uc3QgcGFnaW5hdGVkTGlzdCA9IHRoaXMucGFnaW5hdGVkTGlzdHNbbmFtZV07XHJcblx0XHRcdFx0aWRzID0gaWRzLmNvbmNhdChwYWdpbmF0ZWRMaXN0LnBhZ2VDb2xsZWN0aW9uSWRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChjb25zdCBpZCBpbiB0aGlzLml0ZW1zKSB7XHJcblx0XHRcdGlmICh0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2lkXTtcclxuXHRcdFx0XHRpZiAoaWRzLmluZGV4T2YoaWQpID09PSAtMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0QGFjdGlvbiBwdWJsaWMgZW5zdXJlUGFnaW5hdGVkTGlzdChuYW1lOiBzdHJpbmcsIGNyZWF0ZTogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnBhZ2luYXRlZExpc3RzW25hbWVdICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wYWdpbmF0ZWRMaXN0c1tuYW1lXSAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAoY3JlYXRlKSB7XHJcblx0XHRcdFx0dGhpcy5wYWdpbmF0ZWRMaXN0c1tuYW1lXSA9IG5ldyBQYWdpbmF0ZWRMaXN0KG5hbWUsIHRoaXMsIHRoaXMuaWRGaWVsZE5hbWUpO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUtY29sbGVjdGlvbi50cyJdLCJzb3VyY2VSb290IjoiIn0=