import React from 'react';

import PostItem from './PostItem';

export default (props) => {

	return(
		<div>
			{
				props.posts ?
				props.posts.map(post => <PostItem post={ post } key={ post._id }/>)
				: 'loading'
			}
		</div>
	);
};