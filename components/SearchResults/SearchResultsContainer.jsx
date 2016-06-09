import React from 'react';
import SearchResult from './SearchResult.jsx';

class SearchResultsContainer extends React.Component {
	render() {
		return (
			<div>
				{this.props.results.map((result) => {
					return <SearchResult result={result} key={result.pageid}/>
				})}
			</div>
		);
	}
}

export default SearchResultsContainer;
