import React from 'react';

import './ListInfo-UserInfo.style.css';

const pers = require('../../assets/person.jpeg');

export default function ListInfo_UserInfo() {
	return (
		<div className='userInfo'>
			<div className='userInfo-image'></div>
			<div className='userInfo-descreption'>
				<h2 className='userInfo-descreption-name'>Samir@5</h2>
				<h3 className='userInfo-descreption-tag'>Verified</h3>
				<h4 className='userInfo-descreption-numb'>06458xxxxx</h4>
				<h4 className='userInfo-descreption-space'>10 m away</h4>
			</div>
		</div>
	);
}
