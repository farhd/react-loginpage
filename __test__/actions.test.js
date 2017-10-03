import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('>>> A C T I O N S <<<', () => {
	test('changeLang', () => {
		const actual = actions.changeLang('xyz');
		const expected = {
			type: 'CHANGE_LANG',
			lang: 'xyz'
		};
		expect(actual).toEqual(expected);
	});
});
