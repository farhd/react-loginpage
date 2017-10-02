// import PropTypes from 'prop-types';
import React from 'react';
import Dialog from '../Dialog/Dialog';
import SocialButtons from '../Social-buttons/Buttons';
import Separator from '../Separator/Separator';

const Login = () => {
	return (
		<Dialog
			headerText="Log in"
			switchText="Not registered yet?&nbsp;"
			switchLinkPath="/register"
			switchLinkText="Register"
		>
			<SocialButtons actionVerb="Login" />
			<Separator title="or" />
		</Dialog>
	);
};

Login.propTypes = {
};

export default Login;
