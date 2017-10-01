// import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
// import {
// 	Route,
// 	Redirect,
// 	Switch
// } from 'react-router-dom';
import {
	Col
} from 'react-bootstrap';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

// import { createQuestions, updateResult } from '../actions';
// import QuestionList from '../components/QuestionList';

import * as utilStyle from '../../utils/utils.scss';
import * as style from './style.scss';

export class Main extends Component {
	static propTypes = {
	};

	constructor() {
		super();
	}

	render() {
		return (
			<main className={style.accounts}>
				<div className="container">
					<div className="row">
						<Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}
							className={style.control + ' ' + utilStyle['z-depth-1']}>

							<Login />

						</Col>
					</div>
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect( mapStateToProps, {
} )(Main);
