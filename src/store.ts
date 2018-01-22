import { action } from "mobx";
export abstract class Store<T, TRootStore> {
	[key: string]: any;
	public rootStore: TRootStore;
	public constructor(rootStore: TRootStore) {
		this.rootStore = rootStore;
	}
}
export default Store;
