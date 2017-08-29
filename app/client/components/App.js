

import React from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import About from './About';
import Books from './Books';
import Contact from './Contact';
import Home from './Home';

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props.children)

		return (
			<div id="app">
				<header>
					<h1>Gloria Koster</h1>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About Me</NavLink>
					<NavLink to='/books'>Books</NavLink>
					<NavLink to='/contact'>ContactMe</NavLink>
				</header>
				<div id="content">
		      <Route exact path='/' component={ Home }></Route>
		      <Route path='/about' component={ About }></Route>
		      <Route path='/books' component = { Books }></Route>
		      <Route path='/contact' component={ Contact }></Route>
		  	</div>
			</div>
		);
	}
}


export default Header;

