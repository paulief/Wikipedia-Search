jest.unmock('../components/SearchBox/SearchBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchBox from '../components/SearchBox/SearchBox';

describe('<SearchBox/>', () => {
	it('adds some maths', () => {
		expect(1+2).toEqual(3);
	});
});
