import React from 'react';
import SearchBox from '../SearchBox/SearchBox.jsx';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer.jsx';
import wikipediaService from '../../lib/wikipediaService.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      results: []
    };
  }

	performSearch(searchInput) {
    wikipediaService.searchFor(searchInput)
                    .then(this.updateResults.bind(this));
	}

  updateResults(results) {
    this.setState({ results: results });
  }

  render() {
    return (
    	<div>
    		<SearchBox submitFn={this.performSearch.bind(this)}/>
    		<SearchResultsContainer results={this.state.results}/>
    	</div>
    );
  }
}

export default App;
