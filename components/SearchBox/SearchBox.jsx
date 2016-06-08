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
		event.preventDefault();
		this.props.submitFn(this.state.searchInput);
	}

	render() {
		return (
			<div>
				<h1>Wikipedia Search</h1>
					<input type="text" 
								 placeholder="Search Wikipedia"
								 onChange={this.searchInputChanged.bind(this)}
								 value={this.state.searchInput}/>
					<button type="submit"
									onClick={this.submitSearch.bind(this)}>
						Search
					</button>
			</div>
		);
	}
}

export default SearchBox;
