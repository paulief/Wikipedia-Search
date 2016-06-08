import React from 'react';

class SearchResult extends React.Component {
	render() {
		return(
			<div>
				{this.props.result}
			</div>
		);
	}
}

export default SearchResult;
