import React from 'react';
import MainComponent from '../Profile/MainComponent.component';

import './HeaderSimo.style.css';

const logo = require('../../assets/logo.png');
const sidbar = require('../../assets/burger-bar.png');

export default function Header() {
	return (
		<div className='header'>
			<img src={logo} alt='logo' width='200px' />
			<MainComponent />
		</div>
	);
}
