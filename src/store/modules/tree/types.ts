export interface ITree {
	id: string;
	name: string;
	level: number;
	check: boolean;
	order: number;
	children: ITree[] | [];
}

export type ITreeList = ITree[] | [];

export enum TREE {
	Check = 'TREE_CHECK',
}

interface IPayloadAction {
	id: string;
}

export interface ICheckTreeAction {
	type: TREE;
	payload: IPayloadAction;
}
