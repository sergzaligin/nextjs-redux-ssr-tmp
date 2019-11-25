import React from 'react'
import { connect } from 'react-redux'
import { postsAPI } from '../../api';

import PostList from '../../components/Posts/PostList';

import { fetchPosts } from '../../test-reducer';

class List extends React.Component {
	

	componentDidMount = () => {
		this.props.fetchPosts();
	};

	render = () => {
		return <div>DDDDD</div>;
	};

};

List.getInitialProps = async ({ req }) => {
  const res = postsAPI.list();
  
  return { stars: res }
}

const mapStateToProps = (state) => {
    return {
    	posts: state.testPage.posts
    };
};

export default connect(mapStateToProps, { fetchPosts })(List);
