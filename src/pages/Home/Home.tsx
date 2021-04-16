import React, { FC, useContext } from 'react';

import { Store } from '@store/common';
import CheckElement from '@components/CheckElement';

const Home: FC = () => {
	const { state, dispatch } = useContext(Store);

	return (
		<div>
			<CheckElement tree={state[0]} dispatch={dispatch} />
		</div>
	);
};

export default Home;
