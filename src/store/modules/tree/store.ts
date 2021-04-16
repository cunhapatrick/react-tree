import { getLocalStorage, setLocalStorage } from '@utils/localStorage';
import { transformRawData } from '@utils/dataHelpers';
import rawTree from '@data/tree.json';
import { ITree, ITreeList } from './types';

const treeStore: ITreeList = [];

const localTreeStore: ITreeList = getLocalStorage('tree') as ITree[];

if (!localTreeStore) {
	const transformedData: ITreeList = transformRawData(rawTree);
	setLocalStorage('tree', transformedData);

	if (transformedData) (treeStore as ITree[]).push(...transformedData);
} else if ((localTreeStore as ITree[]).length > 0) {
	(treeStore as ITree[]).push(...localTreeStore);
}

export default treeStore;
