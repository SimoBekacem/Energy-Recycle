import React from 'react';

import './ListInfoContainer.style.css';

import ListInfo from '../ListInfo/ListInfo.component';

export default function ListInfoContainer() {
	return (
		<div className='listInfoContainer'>
			<ListInfo />
			<ListInfo />
			<ListInfo />
		</div>
	);
}
