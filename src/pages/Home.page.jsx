import React from 'react';

import Header from '../components/HeaderSimo.component';
import NavigationBar from '../components/NavigationBarSimo.component';
import Body from '../components/BodySimo.component';

export default function Home() {
	return (
		<div>
			<Header />
			<NavigationBar />
			<Body />
		</div>
	);
}
