import { TREE, ICheckTreeAction } from './types';

export default class TreeAction {
	private dispatch: (data: ICheckTreeAction) => void;

	constructor(dispatch: (data: unknown) => unknown) {
		this.dispatch = dispatch;
	}

	public eventCheckTree(id: string): any {
		this.dispatch({
			type: TREE.Check,
			payload: { id },
		});
	}
}
