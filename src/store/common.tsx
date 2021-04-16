import React, { ReactNode, createContext, useReducer } from 'react';
import { ITree } from './modules/tree/types';
import Tree from './modules/tree/store';
import treeReducer from './modules/tree/reducer';

interface IAux {
	children: ReactNode;
}

const initialState: any = {
	...Tree,
};

export const Store = createContext<any>(initialState);

export function StoreProvider({ children }: IAux): JSX.Element {
	const [state, dispatch]: [ITree[], any] = useReducer(
		treeReducer,
		initialState
	);

	return (
		<Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
	);
}
