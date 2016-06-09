jest.unmock('../components/App/App');
jest.unmock('q');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../components/App/App';
import q from 'q';
import wikipediaService from '../lib/wikipediaService.js';

describe('<App/>', () => {
	let app;

	beforeEach(() => {
		app = TestUtils.renderIntoDocument(<App/>);
	});

	const successResponses = {
		Clinton: [
			{ pageId: 1, extract: 'Page 1' },
			{ pageId: 2, extract: 'Page 2' }
		],
		Sanders: [
			{ pageId: 3, extract: 'Page 3' },
			{ pageId: 4, extract: 'Page 4' }
		]
	};

	// returns resolved promise with result based on search term
	let searchFn = jest.genMockFunction().mockImplementation((term) => {
		return q.when(successResponses[term]);
	});

	wikipediaService.searchFor = searchFn;

	it('calls the wikipedia service to search for the input', () => {
		app.performSearch('Clinton');
		expect(searchFn).toBeCalledWith('Clinton');
	});

	it('updates the results in state with the response from wikipediaService', () => {
		expect(app.state.results).toEqual([]);
		app.performSearch('Sanders').then(() => {
			expect(app.state.results).toEqual([
				{ pageId: 3, extract: 'Page 3' },
				{ pageId: 4, extract: 'Page 4' }
			]);
		});
	});
});
