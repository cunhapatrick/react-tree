import { ITree } from '@store/modules/tree/types';

export interface ICheckContainerProps {
	tree: ITree;
	dispatch: any;
}

export interface ICheckProps {
	id: string;
	name: string;
	check: boolean;
	level: number;
	dropdown: boolean;
	selectedAll: boolean;
	handleDropdown: () => void;
	handleCheck: () => void;
}
