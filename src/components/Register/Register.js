// import PropTypes from 'prop-types';
import React from 'react';
import Dialog from '../Dialog/Dialog';
import SocialButtons from '../Social-buttons/Buttons';
import Separator from '../Separator/Separator';

const Register = () => {
	return (
		<Dialog
			headerText="Register"
			switchText="Already have an account?&nbsp;"
			switchLinkPath="/login"
			switchLinkText="Log in"
		>
			<SocialButtons actionVerb="Register" />
			<Separator title="or" />
		</Dialog>
	);
};

Register.propTypes = {
};

export default Register;
