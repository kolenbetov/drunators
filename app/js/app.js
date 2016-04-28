'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import arena from './reducers/reducers';
import Arena from './arena-components/arena';

let store = createStore(
	arena,
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

render (
	<Provider store={store}>
		<Arena />
	</Provider>,
	document.getElementById('arena')
);