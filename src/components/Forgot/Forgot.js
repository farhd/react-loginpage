import React, { Component } from 'react';
import Dialog from '../Dialog/Dialog';
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

export default class Forgot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payload: {
				email: '',
			}
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		alert('Forgot for: ' + this.state.payload.email);
	}

	render() {
		return (
			<Dialog
				headerText="Reset your password"
			>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="email">
						<ControlLabel className={utilStyle.weight__light}>
							Please enter the email address associated with your Homelike account
						</ControlLabel>
						<FormControl
							type="email"
							placeholder="john.d@domain.com"
							required
							value={this.state.email}
							onChange={this.handleInput}
						/>
					</FormGroup>

					<Link to="/login">Back</Link>
					<Button type="submit" bsStyle="primary" className="pull-right">Reset your password</Button>
				</form>
			</Dialog>
		);
	}
}
