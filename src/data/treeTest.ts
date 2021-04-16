import { ITree } from '@store/modules/tree/types';

export const desorderTree: ITree[] = [
	{
		id: '3469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M. 2',
		level: 0,
		order: 1,
		check: false,
		children: [
			{
				id: '87cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 2',
				children: [],
				level: 1,
				order: 1,
				check: false,
			},
			{
				id: '77cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 3',
				children: [],
				level: 1,
				order: 0,
				check: false,
			},
		],
	},
	{
		id: '2469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M.',
		level: 0,
		order: 0,
		check: false,
		children: [
			{
				id: '97cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris',
				level: 1,
				order: 0,
				check: false,
				children: [],
			},
		],
	},
];

export const orderTree: ITree[] = [
	{
		id: '2469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M.',
		level: 0,
		order: 0,
		check: false,
		children: [
			{
				id: '97cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris',
				level: 1,
				order: 0,
				check: false,
				children: [],
			},
		],
	},
	{
		id: '3469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M. 2',
		level: 0,
		order: 1,
		check: false,
		children: [
			{
				id: '77cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 3',
				children: [],
				level: 1,
				order: 0,
				check: false,
			},
			{
				id: '87cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 2',
				children: [],
				level: 1,
				order: 1,
				check: false,
			},
		],
	},
];

export const rawTree = {
	1: {
		id: '3469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M. 2',
		level: 0,
		children: {
			1: {
				id: '87cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 2',
				children: {},
				level: 1,
			},
			0: {
				id: '77cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris 3',
				children: {},
				level: 1,
			},
		},
	},
	0: {
		id: '2469bdab-23b5-4cb8-90c9-c609a49410b0',
		name: 'Richard Paul M.',
		level: 0,
		children: {
			0: {
				id: '97cd3a19-0f1c-4248-a84c-a1f5a0093a89',
				name: 'Luis F. Doris',
				level: 1,
				children: {},
			},
		},
	},
};
