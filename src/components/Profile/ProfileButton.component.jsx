import React from 'react';
import './ProfileButton.style.css';

const bar = require('../../assets/burger-bar.png');

const ProfileButton = ({ onClick }) => {
	return (
		<img
			src={bar}
			className='profile-button'
			onClick={onClick}
			alt='logo'
			width='60px'
		/>
	);
};

export default ProfileButton;
