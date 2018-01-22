import { action } from "mobx";
export abstract class RootStore {
	[key: string]: any;
	@action public set(model: any) {
		for (const key in model) {
			if (model.hasOwnProperty(key)) {
				this[key] = model[key];
			}
		}
	}
}
export default RootStore;
