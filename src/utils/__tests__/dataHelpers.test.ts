import { desorderTree, orderTree, rawTree } from '@data/treeTest';
import {
	sortTransformData,
	transformRawData,
	checkAllDecendents,
	verifyCheckStateAllDecendents,
} from '../dataHelpers';

describe('dataHelpers test', () => {
	it('Should sort tree Data by ascending order', async () => {
		const sortedTree = sortTransformData(desorderTree);
		expect(sortedTree).toEqual(orderTree);
	});

	it('Should convert rawTree into a iteratable tree sorted', async () => {
		const transformData = transformRawData(rawTree);
		expect(transformData).toEqual(orderTree);
	});

	it('Should check false for all descendents', () => {
		expect(verifyCheckStateAllDecendents(orderTree[0])).toBeFalsy();
	});

	it('Should turn check true for all descendents', () => {
		const auxOrderTreeDescendents = checkAllDecendents(orderTree[0]);
		expect(
			verifyCheckStateAllDecendents(auxOrderTreeDescendents[0])
		).toBeTruthy();
	});
});
