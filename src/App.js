import { Home, Login, Public } from './containers/public';
import { Routes, Route } from 'react-router-dom';
function App() {
	return (
		<div className=' '>
			<Routes>
				<Route path='/*' element={<Public />}>
					<Route path='/public' element={<Home />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
