

import React from 'react';

const Home = props => {
	let url = location.origin;

	return (
		<section id='home'>
			<img src='client/images/black.jpg' />
			
			<div className='row'>
				<a href={ url + '/books#peanut' }>
					<img src='client/images/peanut cover.jpg' />
				</a>

				<a href={ url + '/books#mitzi' }>
					<img src='client/images/mitzi cover.jpg' />
				</a>

				<a href={ url + '/books#ruthie' }>
					<img src='client/images/ruthie cover.jpg' />
				</a>
			</div>
			
			<div className='row'>
				<img src='client/images/peanut.jpg' />
				<img src='client/images/mitzi.jpg' />
				<img src='client/images/ruthie 1.jpg' />
			</div>
		</section>
	);
};


export default Home;

