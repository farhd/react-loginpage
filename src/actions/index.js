import * as types from './types';

export function changeLang(lang) {
	return {
		type: types.CHANGE_LANG,
		lang
	};
}
