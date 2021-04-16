import { setLocalStorage, getLocalStorage } from '@utils/localStorage';
import { random } from 'faker';

describe('localStorage test', () => {
	let key: string;
	let data: string;

	beforeAll(() => {
		key = random.word();
		data = random.word();
	});

	afterAll(() => {
		localStorage.clear();
	});

	it('Should set the data on localStorage browser', () => {
		setLocalStorage(key, data);
		const storageData = localStorage.getItem(key);
		expect(storageData).toBe(data);
	});

	it('Should get the data on localStorage browser', () => {
		const storageData = getLocalStorage(key);
		expect(storageData).toBe(data);
	});
});
