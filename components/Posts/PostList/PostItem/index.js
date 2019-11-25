import React from 'react';

import classes from './PostItem.module.scss';

export default ({ post }) => {

	return(
		<article className={ classes.postItem } >
			<h1>{ post.title }</h1>
		</article>
	);
};