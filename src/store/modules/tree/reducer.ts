import { current, produce } from 'immer';
import {
	findTreeNode,
	checkAllDecendents,
	updateTreeNode,
} from '@utils/dataHelpers';
import { TREE, ICheckTreeAction, ITree, ITreeList } from './types';

import defaultState from './store';

const reducer = (state = defaultState, action: ICheckTreeAction): ITreeList => {
	switch (action.type) {
		case TREE.Check:
			return produce<any>(state, (draft) => {
				const tree = current(draft);
				const treeNode: ITree = findTreeNode(tree, action.payload.id);

				treeNode.children = checkAllDecendents(treeNode as ITree);
				draft = updateTreeNode(draft, action.payload.id, treeNode);
			});

		default:
			return state;
	}
};

export default reducer;
