import { verifyCheckStateAllDecendents } from '@utils/dataHelpers';
import React, { FC, ReactElement, useState } from 'react';

import TreeAction from '@store/modules/tree/actions';
import CheckElement from './CheckElement';
import { ICheckContainerProps, ICheckProps } from './interface';

const CheckElementContainer: FC<ICheckContainerProps> = ({
	tree,
	dispatch,
}): ReactElement => {
	const [dropdown, setDropdown] = useState(false);

	const treeAction = new TreeAction(dispatch);

	const handleDropdown = (): void => setDropdown(!dropdown);
	const handleCheck = (): void => {
		treeAction.eventCheckTree(tree.id);
	};

	const selectedAll = !verifyCheckStateAllDecendents(tree);

	const props: ICheckProps = {
		id: tree.id,
		name: tree.name,
		check: tree.check,
		level: tree.level,
		dropdown,
		selectedAll,
		handleCheck,
		handleDropdown,
	};

	return <CheckElement {...props} />;
};

export default CheckElementContainer;
