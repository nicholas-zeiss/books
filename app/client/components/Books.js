

import React from 'react';

import Modal from './Modal';

class Books extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = { modal: false };
	}

	click() {
		this.setState({ modal: !this.state.modal });
	}

	render() {
		return (
			<section>
				<h2>Click a book to learn more!</h2>

				<div id='books'>
					{ !this.state.modal ? null : <Modal close={this.click.bind(this)}/> }

					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='ruler'></div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='ruler'></div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
					<div className='book-container' onClick={this.click.bind(this)}>
						<img src='https://images-na.ssl-images-amazon.com/images/I/51N595qwKOL._SX360_BO1,204,203,200_.jpg'/>
						<p>Lorem Ipsum</p>
					</div>
				</div>
			</section>
		);
	}
}


export default Books;

