import React from 'react';

class SearchResult extends React.Component {

	buildLink(pageId) {
		return `http://en.wikipedia.org/?curid=${pageId}`;
	}

	render() {
		return(
			<a href={this.buildLink(this.props.result.pageid)}>
				<div>
					<div>Title: {this.props.result.title}</div>
					<div>{this.props.result.extract}</div>
					<br/>
				</div>
			</a>
		);
	}
}

export default SearchResult;
