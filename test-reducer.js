import { postsAPI } from './api';

const initialState = {
	posts: null,
};

const SET_POSTS = 'SET_POSTS';

export default (state = initialState, action) => {
	switch (action.type) {

		case SET_POSTS: 
		
			return Object.assign({},{
				...state,
				posts: action.posts,
			});
			
		default:
			return state;
	}
};

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export const fetchPosts =  () => {

	return async dispatch => { 
        const response = await postsAPI.list();
		//console.log('res', response.data);
		dispatch(setPosts(response.data));
	};
	

};
