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

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			withEmail: false,
			submitData: {
				firstName: '',
				lastName: '',
				email: '',
				pass: '',
				userType: '',
				lang: '',
			},
		};

		this.handleWithEmail = this.handleWithEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleWithEmail(e) {
		this.setState({
			withEmail: !this.state.withEmail,
		});
	}

	handleSubmit() {
		event.preventDefault();
		alert('Login as: ' + this.state.email);
	}

	render() {
		const dialog = () => (
			<div className={utilStyle['t-center']}>
				Signup with&nbsp;
				<a href="#" className="signup" onClick={this.handleWithEmail}>E-mail</a>
			</div>
		);
		const regForm = () => (
			<form onSubmit={this.handleSubmit}>
				<FormGroup
					controlId="email"
				>
					<ControlLabel className={utilStyle.weight__light}>First name</ControlLabel>
					<FormControl
						type="text"
						placeholder="John"
						required
						onChange={this.handleChangeEmail}
					/>
				</FormGroup>

				<FormGroup
					controlId="email"
				>
					<ControlLabel className={utilStyle.weight__light}>Last name</ControlLabel>
					<FormControl
						type="text"
						placeholder="Doe"
						required
						onChange={this.handleChangeEmail}
					/>
				</FormGroup>

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
				</FormGroup>

				<FormGroup controlId="user_type">
					<ControlLabel className={utilStyle.weight__light}>User type</ControlLabel>
					<FormControl componentClass="select">
						<option value="">Select user type</option>
						<option value="tenant">Private tenant</option>
						<option value="owner">Appartment owner / manager</option>
					</FormControl>
				</FormGroup>

				<FormGroup controlId="user_lang">
					<ControlLabel className={utilStyle.weight__light}>Language</ControlLabel>
					<FormControl componentClass="select">
						<option value="en">English</option>
						<option value="ger">Deusch</option>
					</FormControl>
				</FormGroup>

				<p className={utilStyle.weight__light}>
					By clicking Register, you agree to our&nbsp;
					<a target="_blank" href="https://www.thehomelike.com/en/imprint-privacy-policy/">Privacy Policy</a>
					&nbsp;and&nbsp;
					<a target="_blank" href="https://www.thehomelike.com/en/terms-and-conditions/">Terms of Use</a>
					.
				</p>

				<Button type="submit" bsStyle="primary" className="pull-right">Log in</Button>
			</form>
		);

		return (
			<Dialog
				headerText="Register"
				switchText="Already have an account?&nbsp;"
				switchLinkPath="/login"
				switchLinkText="Log in"
			>
				<SocialButtons actionVerb="Register" />

				<Separator title="or" />

				{!this.state.withEmail
					? dialog()
					: regForm()
				}

			</Dialog>
		);
	}
}
