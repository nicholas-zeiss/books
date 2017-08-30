

import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id='home'>
				<h2>Lorem Ipsum</h2>
				<img src='https://vignette4.wikia.nocookie.net/seuss/images/d/db/Dr-seuss-cat-in-the-hat-clip-art-free-clipart.jpeg/revision/latest?cb=20170126062846'/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum risus massa, non facilisis metus dapibus in. Maecenas iaculis semper tincidunt. Donec tincidunt molestie odio.</p>
				<p>Phasellus et magna at ipsum varius faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Nunc sed imperdiet diam. Duis nec mauris a ex mattis gravida at vel neque.</p>
				<p>Ut id laoreet nisi. Duis ut convallis tellus, vel efficitur metus.</p>
			</div>
		);
	}
}


export default Home;

