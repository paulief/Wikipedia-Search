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

    this.updateResults = this.updateResults.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

	performSearch(searchInput) {
    return wikipediaService.searchFor(searchInput)
            .then(this.updateResults);
	}

  updateResults(results) {
    this.setState({ results: results });
  }

  render() {
    return (
    	<div>
    		<SearchBox submitFn={this.performSearch}/>
    		<SearchResultsContainer results={this.state.results}/>
    	</div>
    );
  }
}

export default App;
