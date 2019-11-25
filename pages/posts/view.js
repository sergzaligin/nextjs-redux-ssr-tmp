import React from 'react'
import { connect } from 'react-redux'

class View extends React.Component {

	render() {
		return (<div>View post</div>);
	}

};

const mapStateToProps = (state) => {
    return {
    	posts: state.testPage.posts
    };
};

export default connect(mapStateToProps, {})(View);