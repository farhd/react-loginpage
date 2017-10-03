import * as types from '../actions/types';

const initialState = {
	lang: 'en'
};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.CHANGE_LANG:
			return {
				...state,
				lang: action.lang
			};

		default:
			return state;
	}
}
