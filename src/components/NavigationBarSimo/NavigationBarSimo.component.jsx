import React from 'react';

import './NavigationBarSimo.style.css';

export default function NavigationBar() {
	return (
		<div className='navigation-bar'>
			<h1 className='navigagation-bar-link'>Home</h1>
			<h1 className='navigagation-bar-link'>Market</h1>
			<h1 className='navigagation-bar-link'>Invitation</h1>
			<h1 className='navigagation-bar-link'>Notifications</h1>
		</div>
	);
}
