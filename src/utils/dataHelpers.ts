import { ITree, ITreeList } from '@store/modules/tree/types';

export const sortTransformData = (transformData: ITreeList): ITreeList => {
	const comparator = (a: ITree, b: ITree) => {
		if (a.children && a.children.length > 1) {
			a.children.sort(comparator);
		}
		if (b.children && b.children.length > 1) {
			b.children.sort(comparator);
		}
		return a.order - b.order;
	};

	return transformData.sort(comparator);
};

export const transformRawData = (rawData: unknown): ITreeList => {
	const transformData = Object.entries(rawData).map(
		([key, value]: [string, any]) => {
			const children: ITreeList = rawData[key].children['0']
				? transformRawData(rawData[key].children)
				: [];
			return {
				...value,
				children,
				order: parseInt(key, 10),
				check: false,
			};
		}
	);

	return sortTransformData(transformData);
};

export const verifyCheckStateAllDecendents = (tree: ITree): boolean => {
	return tree.children.every(
		(child: ITree) => child.check && verifyCheckStateAllDecendents(child)
	);
};

export const checkAllDecendents = (tree: ITree): ITree[] => {
	return tree.children.map((child: ITree) => ({
		...child,
		check: !child.check,
		children: checkAllDecendents(child),
	}));
};

export const findTreeNode = (tree: unknown, id: string): ITree => {
	let findedNode: ITree;

	Object.keys(tree).forEach((key) => {
		if (tree[key].id === id) {
			findedNode = tree[key] as ITree;
		} else {
			findTreeNode(tree[key].children, id);
		}
	});

	return findedNode;
};

export const updateTreeNode = (
	tree: unknown,
	id: string,
	data: ITree
): unknown => {
	const newTree = tree;
	Object.keys(newTree).forEach((key) => {
		if (newTree[key].id === id) {
			newTree[key] = {
				...(tree[key] as ITree),
				...data,
			};
		} else {
			updateTreeNode(newTree[key].children, id, data);
		}
	});

	return newTree;
};
