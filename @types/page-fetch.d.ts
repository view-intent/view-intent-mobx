export declare type FetchAction = (url: string) => void;
export declare namespace PageFetch {
    function registerFetchAction(action: FetchAction): void;
    function getFetchAction(): FetchAction;
}
