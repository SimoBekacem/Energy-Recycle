import React from 'react';

import './HeaderSimo.style.css';

const logo = require('../../assets/logo.png');
const sidbar = require('../../assets/burger-bar.png');

export default function Header() {
	return (
		<div className='header'>
			<img src={logo} alt='logo' width='200px' />
			<img src={sidbar} alt='sidbar' width='50px' />
		</div>
	);
}
