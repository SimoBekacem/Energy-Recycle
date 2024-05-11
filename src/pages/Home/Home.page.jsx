import React from 'react';

import './Home.style.css';

import Header from '../../components/HeaderSimo/HeaderSimo.component';
import NavigationBar from '../../components/NavigationBarSimo/NavigationBarSimo.component';
import Body from '../../components/BodySimo/BodySimo.component';

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<NavigationBar />
			<Body />
		</div>
	);
}
