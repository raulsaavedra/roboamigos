import React, {Component} from 'react';

class Header extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		console.log('Header');
		return( 
				<div>
				<h1>Roboamigos</h1>
				</div>
			)
	}
}

export default Header;