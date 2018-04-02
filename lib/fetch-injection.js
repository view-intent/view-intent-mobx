export var FetchInjection;
(function (FetchInjection) {
    let fetchAction = (url) => {
        console.warn(`could not load the ${url} because you didn't register the fetch action.`);
    };
    function registerFetchAction(action) {
        fetchAction = action;
    }
    FetchInjection.registerFetchAction = registerFetchAction;
    function getFetchAction() {
        return fetchAction;
    }
    FetchInjection.getFetchAction = getFetchAction;
})(FetchInjection || (FetchInjection = {}));
//# sourceMappingURL=fetch-injection.js.map