export var PageFetch;
(function (PageFetch) {
    const fetchAction = null;
    function registerFetchAction(action) {
        this.fetchAction = action;
    }
    PageFetch.registerFetchAction = registerFetchAction;
    function getFetchAction() {
        return fetchAction;
    }
    PageFetch.getFetchAction = getFetchAction;
})(PageFetch || (PageFetch = {}));
PageFetch.registerFetchAction((url) => {
    console.log("--> fetch", url);
});
//# sourceMappingURL=page-fetch.js.map