// import PropTypes from 'prop-types';
import React from 'react';
import {
	Link,
} from 'react-router-dom';
import SocialButtons from '../Social-buttons/Buttons';
import Separator from '../Separator/Separator';
import style from './style.scss';

const Login = () => {
	return (
		<div>
			<div>
				<span className={style.dialog__title}>
					Log in
				</span>
				<span className={style.dialog__switch + ' pull-right'}>
					Not registered yet?&nbsp;
					<Link to="/register">Register</Link>
				</span>
			</div>

			<SocialButtons />

			<Separator title="or" />

		</div>
	);
};

Login.propTypes = {
};

export default Login;
