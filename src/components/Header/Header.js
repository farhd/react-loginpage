import React from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	FormGroup,
	FormControl,
} from 'react-bootstrap';
import logo from '../../static/img/homelike.png';
import * as style from './style.scss';
import Icon from 'react-fontawesome';

const Header = () => {
	return (
		<header>
			<Navbar className={style.header}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" className={style.logo}>
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
						<NavItem href="#" className={style.nav__link}>For Landlords</NavItem>
						<NavItem href="#" className={style.nav__link}>Log in</NavItem>
						<NavDropdown
							title="EN"
							id="basic-nav-dropdown"
							className={style.nav__link}>
							<MenuItem className={style.dd__item}>English</MenuItem>
							<MenuItem divider />
							<MenuItem className={style.dd__item}>Deutsch</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
