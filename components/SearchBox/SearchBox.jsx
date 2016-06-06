import React from 'react';

class SearchBox extends React.Component {
	constructor() {
		super();
		this.state = {
			searchInput: ''
		};
	}

	// update state as user inputs search
	searchInputChanged(event) {
		this.setState({ searchInput: event.target.value });
	}

	render() {
		return (
			<div>
				<h1>Search Box</h1>
				<form>
					<input type="text" 
								 placeholder="Search Wikipedia"
								 onChange={this.searchInputChanged.bind(this)}
								 value={this.state.searchInput}/>
				</form>
			</div>
		);
	}
}

export default SearchBox;
