import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const postsAPI = {
	
	list() {

		return instance.get(`todos`);

	},
	getOne(id){
		return instance.post(`todos/${ id }`);
	},
}