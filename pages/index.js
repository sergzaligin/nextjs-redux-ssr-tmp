import React from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../store/actions/test';

class Index extends React.Component {

	static async getInitialProps({ reduxStore }) {
	 await reduxStore.dispatch(fetchPosts());
	 	const posts = reduxStore.getState().testPage.posts;
	  //console.log('STATE!!!', posts);

	  return { posts };
	}

	render() {
		return (
			<div>
				<h1>Home page </h1>
				<div>
					{
						
						this.props.posts.map(post => <p key={post.id} >{post.title}</p>)
						
					}
				</div>
			</div>
		);
	};

};

const mapDispatchToProps = dispatch => {
  return {}
}

const mapStateToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
