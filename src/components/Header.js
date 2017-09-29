import React from 'react';
import {
	Navbar,
	FormGroup,
	FormControl,
	Button,
} from 'react-bootstrap';
import logo from '../static/img/homelike.png';
import * as styles from '../styles/app.scss';

const Header = () => {
	return (
		<header>
			<Navbar bsStyle="navbar" className={styles.header}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" className={styles.logo}>
							<img src={logo} alt="Homelike" className={styles.logo__img} />
						</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullLeft className={'hidden-xs ' + styles.nav__form}>
						<FormGroup>
							<FormControl
								className={styles.nav__search}
								type="text"
								placeholder="What city are you interested in?">
								<i className="fa fa-search" />
							</FormControl>
						</FormGroup>
						{' '}
						<Button type="submit">Submit</Button>
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
