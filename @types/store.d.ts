export declare abstract class Store<T, TRootStore> {
    [key: string]: any;
    rootStore: TRootStore;
    constructor(rootStore: TRootStore);
}
export default Store;
