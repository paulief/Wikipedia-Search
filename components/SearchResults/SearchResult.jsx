import React from 'react';

require('./SearchResults.scss');

class SearchResult extends React.Component {

	buildLink(pageId) {
		return `http://en.wikipedia.org/?curid=${pageId}`;
	}

	render() {
		return(
			<div className="result">
				<a href={this.buildLink(this.props.result.pageid)}>
					<div>
						<div className="result-title">Title: {this.props.result.title}</div>
						<div className="result-extract">{this.props.result.extract}</div>
						<br/>
					</div>
				</a>
			</div>
		);
	}
}

export default SearchResult;
