// import PropTypes from 'prop-types';
import React from 'react';
import {
	Link,
} from 'react-router-dom';
import {
	Button,
} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import style from './style.scss';

const Login = () => {
	return (
		<div>
			<div>
				<Button bsSize="md" block
					className={style.social__btn + ' ' + style.google}>
					<Icon name="google" className={style.social__icon} />
					Signup with Google
				</Button>
			</div>

			<div>
				<Button bsSize="md" block
					className={style.social__btn + ' ' + style.linkedin}>
					<Icon name="linkedin" className={style.social__icon} />
					Signup with Linkedin
				</Button>
			</div>

			<div>
				<Button bsSize="md" block
					className={style.social__btn + ' ' + style.xing}>
					<Icon name="xing" className={style.social__icon} />
					Signup with Xing
				</Button>
			</div>
		</div>
	);
};

Login.propTypes = {
};

export default Login;
