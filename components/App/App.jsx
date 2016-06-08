import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../SearchBox/SearchBox.jsx'
import SearchResultsContainer from '../SearchResults/SearchResultsContainer.jsx'

class App extends React.Component {

	performSearch(searchInput) {
		console.log('INPUT = ' + searchInput);
	}

  render() {
    return (
    	<div>
    		<SearchBox submitFn={this.performSearch}/>
    		<SearchResultsContainer results={["bla1", "bla2"]}/>
    	</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
