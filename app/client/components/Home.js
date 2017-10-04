

import React from 'react';

// Also - on the homepage I'd like to make my photo be alone at the top and a little larger that the other images. 
// Then underneath we could have each of the 3 book covers with an associated image under each. The boy goes under
// Peanut Free, the dog goes under Mitzi, and Ruthie is the little girl.

const Home = props => {
	return (
		<section id='home'>
			<div className='row'>
				<img src='client/images/black.jpg' />
				<img src='client/images/mitzi cover.jpg' />
				<img src='client/images/peanut cover.jpg' />
			</div>
			<div className='row'>
				<img src='client/images/ruthie cover.jpg' />
				<img src='client/images/peanut.jpg' />
				<img src='client/images/mitzi.jpg' />
			</div>
			<div className='row'>
				<img src='client/images/ruthie 1.jpg' />
				<img src='client/images/ruthie 2.jpg' />
			</div>
		</section>
	);
};


export default Home;

