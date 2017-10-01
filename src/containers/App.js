import React from 'react';

import Main from './Main/Main';
import Header from '../components/Header/Header';

import * as styles from '../styles/app.scss';

const App = () =>
	<div className={styles.app}>
		<Header />
		<Main />
	</div>;

export default App;
