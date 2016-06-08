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

	submitSearch(event) {
		this.props.submitFn(this.state.searchInput);
	}

	render() {
		return (
			<div>
				<h1>Search Box</h1>
				<form onSubmit={this.submitSearch.bind(this)}>
					<input type="text" 
								 placeholder="Search Wikipedia"
								 onChange={this.searchInputChanged.bind(this)}
								 value={this.state.searchInput}/>
					<button type="submit">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBox;
