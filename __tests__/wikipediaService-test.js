jest.unmock('../lib/wikipediaService');
jest.unmock('q');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import wikipediaService from '../lib/wikipediaService.js';
import jsonp from 'jsonp';
import q from 'q';

const API_URL =  'http://www.wikipedia.org/w/api.php?action=query&format=json' +
                 '&prop=extracts&generator=search&exsentences=2&explaintext' +
                 '&exlimit=20&exintro&gsrnamespace=0&gsrlimit=20&gsrsearch=';

const defaultResponse = {
	query: {
		pages: {
			1: {
				pageid: 1,
				title: 'Page 1',
				extract: 'Some words'
			},
			2: {
				pageid: 2,
				title: 'Page 2',
				extract: 'Some other words'
			}
		}
	}
};

function mockJsonp(mockResponse) {
	jsonp.mockImplementation((url, options, cb) => {
		cb(null, mockResponse || defaultResponse);
	});
}

describe('wikipediaService', () => {
	it('calls jsonp with the correct url', () => {
		wikipediaService.searchFor('test');
		expect(jsonp).toBeCalledWith(API_URL + 'test', {}, jasmine.any(Function));
	});

	describe('query results', () => {
		it('returns the properly formatted results as an array', () => {
			mockJsonp();
			wikipediaService.searchFor('test').then((result) => {
				expect(result).toEqual([
					{ pageid: 1, title: 'Page 1', extract: 'Some words' },
					{ pageid: 2, title: 'Page 2', extract: 'Some other words' }
				]);
			});
		});

		it('returns a blank array when there are no results', () => {
			mockJsonp({ other: 'stuff' });
			wikipediaService.searchFor('test').then((result) => {
				expect(result).toEqual([]);
			});
		});
	});
});
