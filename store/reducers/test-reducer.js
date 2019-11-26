import { SET_POSTS } from '../types/test';

const initialState = {
	posts: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTS: 
			return {
				...state,
				posts: action.posts,
			};
		default:
			return state;
	}
};


