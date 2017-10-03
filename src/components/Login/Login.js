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
import utilStyle from '../../styles/utils.scss';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payload: {
				email: '',
				pass: '',
			}
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		this.setState({
			payload: {
				...this.state.payload,
				[e.target.id]: e.target.value,
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert('Login as: ' + this.state.payload.email);
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
							type="email"
							placeholder="john.d@domain.com"
							required
							onChange={this.handleInput}
						/>
					</FormGroup>

					<FormGroup
						className="clearfix"
						controlId="pass"
						required
					>
						<ControlLabel className={utilStyle.weight__light}>Password</ControlLabel>
						<FormControl
							type="password"
							placeholder="********"
							required
							onChange={this.handleInput}
						/>
						<Link to="/forgot" className={utilStyle.weight__light + ' ' + 'pull-right'}>Forgot your password?</Link>
					</FormGroup>

					<Button type="submit" bsStyle="primary" className="pull-right">Log in</Button>
				</form>
			</Dialog>
		);
	}
}
