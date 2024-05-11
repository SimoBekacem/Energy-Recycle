import React from 'react';

import './ListInfo-UserButtons.style.css';

export default function ListInfo_UserButtons() {
	return (
		<div className='userButtons'>
			<div className='userButtons-fist'>
				<button className='userButtons-fist-collab'>Collaborate</button>
			</div>
			<div className='userButtons-seconde'>
				<button className='userButtons-seconde-dele'>Delete</button>
				<button className='userButtons-seconde-map'>See on map</button>
			</div>
		</div>
	);
}
