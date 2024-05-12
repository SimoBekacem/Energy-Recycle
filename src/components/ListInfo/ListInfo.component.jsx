import React from 'react';

import './ListInfo.style.css';

import ListInfo_UserInfo from '../ListInfo-UserInfo/ListInfo-UserInfo.component';
import ListInfo_UserButtons from '../ListInfo-UserButtons/ListInfo-UserButtons.component';

export default function ListInfo() {
	return (
		<div className='listInfo'>
			<ListInfo_UserInfo />
			<ListInfo_UserButtons />
		</div>
	);
}
