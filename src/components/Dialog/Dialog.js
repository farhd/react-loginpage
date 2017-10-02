import PropTypes from 'prop-types';
import React from 'react';
import {
	Link,
} from 'react-router-dom';
import style from './style.scss';

const Register = ({
	headerText,
	switchText,
	switchLinkPath,
	switchLinkText,
	children
}) => {
	return (
		<div>
			<div>
				<span className={style.dialog__title}>
					{headerText}
				</span>
				<span className={style.dialog__switch + ' pull-right'}>
					{switchText}
					<Link to={switchLinkPath}>{switchLinkText}</Link>
				</span>
			</div>

			{children}
		</div>
	);
};

Register.propTypes = {
	headerText: PropTypes.any.isRequired,
	switchText: PropTypes.string,
	switchLinkPath: PropTypes.string,
	switchLinkText: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Register;
