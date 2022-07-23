import axios from "axios";

const instances = axios.create({
	baseURL: 'https://bem-ipb.herokuapp.com/'
});

export {
	instances
};