import { action } from "mobx";
export abstract class RootStore {
	[key: string]: any;
	@action public set(value: any) {
		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				this[key] = value[key];
			}
		}
	}
}
export default RootStore;
