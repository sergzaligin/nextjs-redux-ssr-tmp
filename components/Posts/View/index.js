import React from 'react';

import classes from './Posts.module.scss';

export default ({ posts }) => {

	return(
		<div className={ classes.posts } >
			Posts
		</div>
	);
};