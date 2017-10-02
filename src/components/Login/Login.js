// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dialog from '../Dialog/Dialog';
import SocialButtons from '../Social-buttons/Buttons';
import Separator from '../Separator/Separator';
import {
	FormGroup,
	FormControl,
	ControlLabel,
	Button,
} from 'react-bootstrap';
import {
	Link,
} from 'react-router-dom';
import dialogStyle from '../Dialog/style.scss';
import utilStyle from '../../styles/utils.scss';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pass: ''
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(e) {
		this.setState({email: e.target.value});
	}
	handleChangePass(e) {
		this.setState({pass: e.target.value});
	}

	handleSubmit() {
		event.preventDefault();
		alert('Login as: ' + this.state.email);
	}

	render() {
		return (
			<Dialog
				headerText="Log in"
				switchText="Not registered yet?&nbsp;"
				switchLinkPath="/register"
				switchLinkText="Register"
			>
				<SocialButtons actionVerb="Login" />

				<Separator title="or" />

				<form onSubmit={this.handleSubmit}>
					<FormGroup
						controlId="email"
					>
						<ControlLabel className={utilStyle.weight__light}>Email address</ControlLabel>
						<FormControl
							type="text"
							placeholder="john.d@domain.com"
							required
							onChange={this.handleChangeEmail}
						/>
					</FormGroup>

					<FormGroup
						className="clearfix"
						controlId="password"
						required
					>
						<ControlLabel className={utilStyle.weight__light}>Password</ControlLabel>
						<FormControl
							type="password"
							placeholder="********"
							required
							onChange={this.handleChange}
						/>
						<Link to="/forgot" className={utilStyle.weight__light + ' ' + 'pull-right'}>Forgot your password?</Link>
					</FormGroup>

					<Button type="submit" bsStyle="primary" className="pull-right">Log in</Button>
				</form>
			</Dialog>
		);
	}
}
