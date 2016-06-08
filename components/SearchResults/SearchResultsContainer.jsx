import React from 'react';
import SearchResult from './SearchResult.jsx';

class SearchResultsContainer extends React.Component {
	render() {
		return (
			<ul>
				{this.props.results.map((result) => {
					return <SearchResult result={result.pageid} key={result.pageid}/>
				})}
			</ul>
		);
	}
}

export default SearchResultsContainer;
