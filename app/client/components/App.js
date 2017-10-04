

import React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import About from './About';
import Books from './Books';
import Contact from './Contact';
import Home from './Home';


const App = props => {
	return (
		<div id='app'>
			<header>
				<img src='/client/images/children.png'/>
				<div id='header-right'>
					<nav>
						<NavLink to='/home'>HOME</NavLink>
						<NavLink to='/about'>ABOUT ME</NavLink>
						<NavLink to='/books'>BOOKS</NavLink>
						<NavLink to='/contact'>CONTACT ME</NavLink>
					</nav>
					<h1>Gloria Koster</h1>
					<h2>Children's Book Author</h2>
				</div>
			</header>

			<div id='content-container'>
	      <Route path='/about' component={ About }></Route>
	      <Route path='/books' component = { Books }></Route>
	      <Route path='/contact' component={ Contact }></Route>
	      <Route path='/home' component={ Home }></Route>
	  	</div>
		</div>
	);
};


export default App;

