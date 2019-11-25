import React from 'react'
import { connect } from 'react-redux'
import { postsAPI } from '../api';

import Posts from '../components/Posts/Posts';

import { fetchPosts } from '../test-reducer';

class Index extends React.Component {

	static async getInitialProps({ reduxStore }) {
	 await reduxStore.dispatch(fetchPosts());
	 	const posts = reduxStore.getState().testPage.posts;
	  console.log('STATE!!!', posts);

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


export default Index;
