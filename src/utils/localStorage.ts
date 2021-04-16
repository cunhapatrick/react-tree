import { ITree } from '@store/modules/tree/types';

export const setLocalStorage = (key: string, data: unknown): void => {
	if (key === 'tree') {
		const browserStore: ITree[] = [...(data as ITree[])];
		localStorage.setItem(key, JSON.stringify(browserStore));
	} else if (typeof data !== 'string') {
		localStorage.setItem(key, JSON.stringify(data));
	} else {
		localStorage.setItem(key, data);
	}
};

export const getLocalStorage = (key: string): any => {
	if (key === 'tree') {
		const browserStore: ITree[] = JSON.parse(localStorage.getItem(key));
		return browserStore;
	}
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (err) {
		return localStorage.getItem(key);
	}
};
