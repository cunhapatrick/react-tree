import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';

import { StoreProvider } from '@store/common';
import App from './App';

const root = document.getElementById('app-root');
render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	root
);
