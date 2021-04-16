import React from 'react';
import { render, screen } from '@testing-library/react';

import CheckElement from './CheckElement';

describe('<CheckElement />', () => {
	test('should render CheckElement', async () => {
		render(<CheckElement />);
		const linkElement = screen.getByText(/Teste/i);
		expect(linkElement).toBeInTheDocument();
	});
});
