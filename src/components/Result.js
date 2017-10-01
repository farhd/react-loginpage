import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetQuestions } from '../actions';

class Result extends Component {
	static propTypes = {
		resetQuestions: PropTypes.func.isRequired,
		result: PropTypes.shape({
			correct: PropTypes.number.isRequired,
			answered: PropTypes.number.isRequired
		}).isRequired
	};

	constructor() {
		super();
	}

	handleReset() {
		this.props.resetQuestions();
	}

	render() {
		const { correct, answered } = this.props.result;
		return (
			<div >
				<strong>Result:</strong>
				<div>Correct: {correct}</div>
				<div>Answered: {answered}</div>

				<div >
					<Link
						to="/"
						onClick={this.handleReset.bind(this)}>
						Try again
					</Link>

					<span >or</span>

					<Link to="/" >
						Review answers
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		result: state.result
	};
};

export default connect(mapStateToProps, {
	resetQuestions
})(Result);
