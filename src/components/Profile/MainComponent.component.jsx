import React, { useState } from 'react';
import ProfileButton from './ProfileButton.component';
import ProfilePopup from './ProfilePopup.component';

const MainComponent = () => {
	const [showProfilePopup, setShowProfilePopup] = useState(false);

	const toggleProfilePopup = () => {
		setShowProfilePopup(!showProfilePopup);
	};

	return (
		<div>
			<ProfileButton onClick={toggleProfilePopup} />
			{showProfilePopup && <ProfilePopup onClose={toggleProfilePopup} />}
		</div>
	);
};

export default MainComponent;
