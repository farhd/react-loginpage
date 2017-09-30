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
import * as styles from './style.scss';
import Icon from 'react-fontawesome';

const Header = () => {
	return (
		<header>
			<Navbar className={styles.header}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" className={styles.logo}>
							<img src={logo} alt="Homelike" className={styles.logo__img} />
						</a>
					</Navbar.Brand>
					<Navbar.Toggle className={styles.nav__toggle} />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullLeft className={'hidden-xs ' + styles.nav__form}>
						<FormGroup>
							<FormControl
								className={styles.nav__search}
								type="text"
								placeholder="What city are you interested in?" />
							<Icon
								name="search"
								inverse
								size="lg"
								className={styles.search__icon}
							/>
						</FormGroup>
					</Navbar.Form>
					<Nav pullRight>
						<NavItem href="#" className={styles.nav__link}>For Landlords</NavItem>
						<NavItem href="#" className={styles.nav__link}>Log in</NavItem>
						<NavDropdown
							title="EN"
							id="basic-nav-dropdown"
							className={styles.nav__link}>
							<MenuItem className={styles.dd__item}>English</MenuItem>
							<MenuItem divider />
							<MenuItem className={styles.dd__item}>Deutsch</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
