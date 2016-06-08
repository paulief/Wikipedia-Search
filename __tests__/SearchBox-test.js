jest.unmock('../components/SearchBox/SearchBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchBox from '../components/SearchBox/SearchBox';

// could be augmented to take properties
const buildSearchBox = (props = {}) => {
	return TestUtils.renderIntoDocument(<SearchBox {...props}/>);
}

describe('<SearchBox/>', () => {
	let searchBox;

	it('updates the state when the value is changed', () => {
		searchBox = buildSearchBox();

		const inputElement = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'input');

		// state should start with empty string
		expect(searchBox.state).toEqual({ searchInput: '' });
		expect(inputElement.value).toEqual('');

		TestUtils.Simulate.change(inputElement, { target: { value: 'new' } });

		// state should now be updated
		expect(searchBox.state).toEqual({ searchInput: 'new' });
		expect(inputElement.value).toEqual('new');
	});

	it('calls the search function passed down from parent when button is clicked', () => {
		let submitFn = jest.genMockFunction();
		searchBox = buildSearchBox({ submitFn: submitFn });

		// set value of input
		searchBox.setState({ searchInput: 'called search' });

		const submitBtn = TestUtils.findRenderedDOMComponentWithTag(searchBox, 'button');
		TestUtils.Simulate.click(submitBtn);

		expect(submitFn).toBeCalledWith('called search');
	});

});
