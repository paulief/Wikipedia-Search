import q from 'q';
import jsonp from 'jsonp';

const API_URL =  'http://www.wikipedia.org/w/api.php?action=query&format=json' +
                 '&prop=extracts&generator=search&exsentences=2&explaintext' +
                 '&exlimit=20&exintro&gsrnamespace=0&gsrlimit=20&gsrsearch=';

let wikipediaService = {
	searchFor: (term) => {
		let deferred      = q.defer();

		jsonp(API_URL + term, {}, (err, response) => {
			let pageResults = getResultsFromResponse(response);
			deferred.resolve(pageResults);
		});

		return deferred.promise;
	}
};

// response has each pageId as a key in pages, with the value holding the data
// this returns an array of all the pages' data
function getResultsFromResponse(response) {
	let pages = response.query.pages;

	return Object.keys(pages).map(pageId => pages[pageId])
}

export default wikipediaService;
