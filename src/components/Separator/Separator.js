import PropTypes from 'prop-types';
import React from 'react';
import style from './style.scss';

const Separator = ({title = 'or'}) => {
	return (
		<div className={style.separator}>
			<div className={style.title}>{title}</div>
		</div>
	);
};

Separator.propTypes = {
	title: PropTypes.string,
};

export default Separator;
