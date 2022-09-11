import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import axios from "axios";
import Redirect from "./components/redirect";

function App() {
	axios.defaults.baseURL = "https://uink-go.herokuapp.com";
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeComponent />} />
					<Route path='/:id' element={<Redirect />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
