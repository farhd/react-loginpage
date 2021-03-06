import PropTypes from 'prop-types';
import React from 'react';
import {
	Button,
} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import style from './style.scss';

const Login = ({actionVerb = 'Log in'}) => {
	return (
		<div>
			<div>
				<Button block
					className={style.social__btn + ' ' + style.google}>
					<Icon name="google" className={style.social__icon} />
					{actionVerb} with Google
				</Button>
			</div>

			<div>
				<Button block
					className={style.social__btn + ' ' + style.linkedin}>
					<Icon name="linkedin" className={style.social__icon} />
					{actionVerb} with Linkedin
				</Button>
			</div>

			<div>
				<Button block
					className={style.social__btn + ' ' + style.xing}>
					<Icon name="xing" className={style.social__icon} />
					{actionVerb} with Xing
				</Button>
			</div>
		</div>
	);
};

Login.propTypes = {
	actionVerb: PropTypes.string
};

export default Login;
