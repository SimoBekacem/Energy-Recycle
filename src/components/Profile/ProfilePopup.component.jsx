import React from 'react';
import './ProfileButton.style.css';
import personImage from '../../assets/person.jpeg';
import walletIcon from '../../assets/lapplication-wallet-pass.png';
import settingsIcon from '../../assets/parametres-cog.png';

const ProfilePopup = ({ onClose }) => {
	return (
		<div className='profile-popup'>
			<div className='profile-info'>
				<div
					className='user-image'
					style={{ backgroundImage: `url(${personImage})` }}
				></div>
				<h1 className='close-button' onClick={onClose}>
					X
				</h1>
			</div>
			<div className='profile-details'>
				<h1>Al3arandass8</h1>
				<h1>idN#o1t4i8fi5c6a7t9i xoxn...</h1>
				<div className='profile-icons'>
					<div>
						<img src={walletIcon} alt='Wallet' width='30px' />
						<h4>Wallet</h4>
					</div>
					<div>
						<img src={settingsIcon} alt='Settings' width='30px' />
						<h4>Settings</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePopup;
