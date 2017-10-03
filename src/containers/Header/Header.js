import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	FormGroup,
	FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeLang } from '../../actions/';

import logo from '../../static/img/homelike.png';
import * as style from './style.scss';
import Icon from 'react-fontawesome';

export class Header extends Component {
	static propTypes = {
		changeLang: PropTypes.func.isRequired,
		lang: PropTypes.string.isRequired,
	};

	constructor() {
		super();
	}

	changeLang(lang) {
		this.props.changeLang(lang);
	}

	render() {
		return (
			<header>
				<Navbar className={style.header}>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="https://www.thehomelike.com/" className={style.logo}>
								<img src={logo} alt="Homelike" className={style.logo__img} />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle className={style.nav__toggle} />
					</Navbar.Header>
					<Navbar.Collapse>
						<Navbar.Form pullLeft className={'hidden-xs ' + style.nav__form}>
							<FormGroup>
								<FormControl
									className={style.nav__search}
									type="text"
									placeholder="What city are you interested in?" />
								<Icon
									name="search"
									inverse
									size="lg"
									className={style.search__icon}
								/>
							</FormGroup>
						</Navbar.Form>
						<Nav pullRight>
							<NavItem href="https://www.thehomelike.com/landlords" className={style.nav__link}>
								For Landlords
							</NavItem>
							<NavItem href="#" className={style.nav__link}>Log in</NavItem>
							<NavDropdown
								title={this.props.lang}
								id="basic-nav-dropdown"
								className={style.nav__link}>
								<MenuItem
									className={style.dd__item}
									onClick={this.changeLang.bind(this, 'en')}
								>
									English
								</MenuItem>
								<MenuItem divider />
								<MenuItem
									className={style.dd__item}
									onClick={this.changeLang.bind(this, 'de')}
								>
									Deutsch
								</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		lang: state.session.lang.toUpperCase()
	};
};

export default connect(mapStateToProps, { changeLang })(Header);
