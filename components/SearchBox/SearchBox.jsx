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
				<h1>Wikipedia Search</h1>
					<input type="text" 
								 placeholder="Search Wikipedia"
								 onChange={this.searchInputChanged.bind(this)}
								 value={this.state.searchInput}/>
					<button type="submit"
									onClick={this.props.submitFn.bind(this, this.state.searchInput)}>
						Search
					</button>
			</div>
		);
	}
}

export default SearchBox;
