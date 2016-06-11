import React from 'react';

class SearchBox extends React.Component {
	constructor() {
		super();
		this.state = {
			searchInput: ''
		};

		this.searchInputChanged = this.searchInputChanged.bind(this);
		this.submitSearch       = this.submitSearch.bind(this);
	}

	// update state as user inputs search
	searchInputChanged(event) {
		this.setState({ searchInput: event.target.value });
	}

	submitSearch(event) {
		event.preventDefault();
		this.props.submitFn(this.state.searchInput);
	}

	render() {
		return (
			<div>
				<h1>Wikipedia Search</h1>
					<input type="text" 
								 placeholder="Search Wikipedia"
								 onChange={this.searchInputChanged}
								 value={this.state.searchInput}/>
					<button type="submit"
									onClick={this.submitSearch}>
						Search
					</button>
			</div>
		);
	}
}

export default SearchBox;
