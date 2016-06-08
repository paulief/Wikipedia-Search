jest.unmock('../components/SearchBox/SearchBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchBox from '../components/SearchBox/SearchBox';

describe('<SearchBox/>', () => {
	it('updates the state when the value is changed', () => {
		const searchBox = TestUtils.renderIntoDocument(
			<SearchBox/>
		);

		const inputElement = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'input');

		// state should start with empty string
		expect(searchBox.state).toEqual({ searchInput: '' });
		expect(inputElement.value).toEqual('');

		TestUtils.Simulate.change(inputElement, { target: { value: 'new' } });

		// state should now be updated
		expect(searchBox.state).toEqual({ searchInput: 'new' });
		expect(inputElement.value).toEqual('new');
	})
});
