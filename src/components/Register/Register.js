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
import utilStyle from '../../styles/utils.scss';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			withEmail: false,
			payload: {
				firstName: '',
				lastName: '',
				email: '',
				pass: '',
				userType: '',
				user_lang: '',
			},
		};

		this.handleWithEmail = this.handleWithEmail.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleWithEmail() {
		this.setState({
			withEmail: !this.state.withEmail,
		});
	}

	handleInput(e) {
		this.setState({
			payload: {
				...this.state.payload,
				[e.target.id]: e.target.value
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert('Register as: ' + this.state.payload.email);
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
				<FormGroup controlId="firstName">
					<ControlLabel className={utilStyle.weight__light}>First name</ControlLabel>
					<FormControl
						type="text"
						placeholder="John"
						required
						value={this.state.firstName}
						onChange={this.handleInput}
					/>
				</FormGroup>

				<FormGroup controlId="lastName">
					<ControlLabel className={utilStyle.weight__light}>Last name</ControlLabel>
					<FormControl
						type="text"
						placeholder="Doe"
						required
						value={this.state.lastName}
						onChange={this.handleInput}
					/>
				</FormGroup>

				<FormGroup controlId="email">
					<ControlLabel className={utilStyle.weight__light}>Email address</ControlLabel>
					<FormControl
						type="email"
						placeholder="john.d@domain.com"
						required
						value={this.state.email}
						onChange={this.handleInput}
					/>
				</FormGroup>

				<FormGroup controlId="pass">
					<ControlLabel className={utilStyle.weight__light}>Password</ControlLabel>
					<FormControl
						type="password"
						placeholder="********"
						required
						value={this.state.pass}
						onChange={this.handleInput}
					/>
				</FormGroup>

				<FormGroup controlId="user_type">
					<ControlLabel className={utilStyle.weight__light}>User type</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.handleInput}
						required>
						<option value="">Select user type</option>
						<option value="tenant">Private tenant</option>
						<option value="owner">Appartment owner / manager</option>
					</FormControl>
				</FormGroup>

				<FormGroup controlId="user_lang">
					<ControlLabel className={utilStyle.weight__light}>Language</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.handleInput}
						required>
						<option value="en">English</option>
						<option value="ger">Deutsch</option>
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
