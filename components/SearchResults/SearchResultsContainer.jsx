import React from 'react';
import SearchResult from './SearchResult.jsx';

require('./SearchResults.scss');

class SearchResultsContainer extends React.Component {
	render() {
		return (
			<div className="results-container">
				{this.props.results.map((result) => {
					return <SearchResult result={result} key={result.pageid}/>
				})}
			</div>
		);
	}
}

export default SearchResultsContainer;
