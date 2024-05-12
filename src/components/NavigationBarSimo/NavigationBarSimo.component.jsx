import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoute } from '../../redux/slices/router.slice';
import './NavigationBarSimo.style.css';

export default function NavigationBar() {
	const dispatch = useDispatch();
	const { value: route } = useSelector((state) => state.route);
	console.log(route);

	const routes = ['home', 'market', 'invitation', 'notification'];

	const handleClick = (value) => {
		dispatch(changeRoute(value));
	};

	return (
		<div className='navigation-bar'>
			{routes.map((r) => (
				<h1
					key={r}
					className={`navigation-bar-link ${
						route === r ? 'link-underline' : ''
					}`}
					onClick={() => handleClick(r)}
				>
					{capitalizeFirstLetter(r)}{' '}
				</h1>
			))}
		</div>
	);
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
