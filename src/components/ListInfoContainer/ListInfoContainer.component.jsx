import React from 'react';
import './ListInfoContainer.style.css';
import ListInfo from '../ListInfo/ListInfo.component';

export default function ListInfoContainer() {
	return (
		<div className='list-info-container'>
			{' '}
			{/* Updated class name */}
			<ListInfo />
			<ListInfo />
			<ListInfo />
		</div>
	);
}
