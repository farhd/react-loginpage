import reducers from '../src/reducers';
import React from 'react';

describe('>>> R E D U C E R S <<<', () => {
	test('INIT STORE', () => {
		const state = reducers( undefined, {} );
		expect(state).toEqual(
			{
				session: {
					lang: 'en'
				},
			}
		);
	});

	test('CHANGE_LANG', () => {
		const oldState = {
			session: {
				lang: 'en'
			},
		};
		const action = {
			type: 'CHANGE_LANG',
			lang: 'xyz',
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				session: {
					lang: 'xyz'
				},
			}
		);
	});
});
