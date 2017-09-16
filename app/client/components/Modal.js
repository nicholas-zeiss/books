

import React from 'react';


const Modal = props => {
	return (
		<div id='modal' onClick={props.close}>
			<div id='modal-content'>
				<span onClick={props.close}>X</span>
				<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
				<h2>Lorem Ipsum</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum risus massa, non facilisis metus dapibus in. Maecenas iaculis semper tincidunt. Donec tincidunt molestie odio.</p>
			</div>
		</div>
	);
}

export default Modal;