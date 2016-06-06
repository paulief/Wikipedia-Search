import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../SearchBox/SearchBox.jsx'

class App extends React.Component {
  render() {
    return (
    	<SearchBox/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
