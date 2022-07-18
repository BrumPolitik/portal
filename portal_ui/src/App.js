import './App.scss';
import Routing from "./routes/routing"
import SideNav from './sharedcomponents/sidenav';
import Heading from './sharedcomponents/header';
import { BrowserRouter, Router, Link } from "react-router-dom";

function App() {
  return (
	
	<div >	
		<BrowserRouter>
			<div>
				
			</div>
			<div className='body'>
				<Routing />
			</div>
		</BrowserRouter>
	</div>
  );
}

export default App;
