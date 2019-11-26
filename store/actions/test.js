import { postsAPI } from '../../api';

import { SET_POSTS } from '../types/test';

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export const fetchPosts =  () => {
	return async dispatch => { 
        const response = await postsAPI.list();
		//console.log('res', response.data);
		dispatch(setPosts(response.data));
	};
};