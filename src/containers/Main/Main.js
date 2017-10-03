// import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import {
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import {
	Col
} from 'react-bootstrap';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Forgot from '../../components/Forgot/Forgot';

// import { createQuestions, updateResult } from '../actions';
// import QuestionList from '../components/QuestionList';

import * as utilStyle from '../../styles/utils.scss';
import * as style from './style.scss';

export default class Main extends Component {
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

							<Redirect to="/login" />
							<Switch>
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<Route path="/forgot" component={Forgot} />
							</Switch>

						</Col>
					</div>
				</div>
			</main>
		);
	}
}
