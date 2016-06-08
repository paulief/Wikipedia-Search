import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../SearchBox/SearchBox.jsx'

class App extends React.Component {

	performSearch(searchInput) {
		console.log('INPUT = ' + searchInput);
	}

  render() {
    return (
    	<SearchBox submitFn={this.performSearch}/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
