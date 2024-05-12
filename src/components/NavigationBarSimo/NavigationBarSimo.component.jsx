import React from 'react';
import { useDispatch } from 'react-redux';

import { changeRoute } from '../../redux/slices/router.slice';

import './NavigationBarSimo.style.css';

export default function NavigationBar() {
	const dispatch = useDispatch();
	function handleClick(value) {
		dispatch(changeRoute(value));
	}
	return (
		<div className='navigation-bar'>
			<h1
				className='navigagation-bar-link'
				onClick={() => {
					handleClick('home');
				}}
			>
				Home
			</h1>
			<h1
				className='navigagation-bar-link'
				onClick={() => {
					handleClick('market');
				}}
			>
				Market
			</h1>
			<h1
				className='navigagation-bar-link'
				onClick={() => {
					handleClick('invitation');
				}}
			>
				Invitation
			</h1>
			<h1
				className='navigagation-bar-link'
				onClick={() => {
					handleClick('notification');
				}}
			>
				Notifications
			</h1>
		</div>
	);
}
