import React from "react";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Project from "./pages/project";
import Contact from "./pages/contact";
import About from "./pages/about";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => (
	<div>
    <Router>
	 <Switch>
	 	<Route path="/contacts"><Contact /></Route>
		 <Route path="/blog"><Blog /></Route>
		 <Route path="/" exact><Home /></Route>
		 <Route path="/about"><About /></Route>
		 <Route path="/project"><Project /></Route>
	    </Switch>
    </Router>
	</div>	
);

export default App;
