// import PropTypes from 'prop-types';
import React from 'react';
import {
	Link,
} from 'react-router-dom';

const Register = () => {
	return (
		<h3>
			Register
			<span className="switch pull-right">
        Already have an account?
				<Link to="/login">Log in</Link>
			</span>
		</h3>
	);
};

Register.propTypes = {
};

export default Register;
