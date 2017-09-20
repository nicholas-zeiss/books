

import React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Books from './Books';
import Contact from './Contact';
import Home from './Home';
import Reviews from './Reviews';


const App = props => {
	return (
		<div id='app'>
			<header>
				<img src='/client/images/sun.jpg'/>
				<div id='header-right'>
					<nav>
						<NavLink to='/home'>HOME</NavLink>
						<NavLink to='/books'>BOOKS</NavLink>
						<NavLink to='/reviews'>REVIEWS</NavLink>
						<NavLink to='/contact'>CONTACT</NavLink>
					</nav>
					<h1>Gloria Koster</h1>
					<h2>Children's Book Author</h2>
				</div>
			</header>

			<div id='content-container'>
	      <Route path='/books' component = { Books }></Route>
	      <Route path='/contact' component={ Contact }></Route>
	      <Route path='/home' component={ Home }></Route>
	      <Route path='/reviews' component={ Reviews }></Route>
	  	</div>
		</div>
	);
};


export default App;

