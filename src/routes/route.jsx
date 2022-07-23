import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import App from '../App';
//File import sendiri
import HomePage from '../component/HomePage';
import Login from '../component/Login';
import Register from '../component/Register';

const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <App /> } />
				<Route path='/home' element={ <HomePage /> } />
				<Route path='/login' element={ <Login /> } />
				<Route path='/register' element={ <Register /> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;