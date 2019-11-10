import {
	SET_BALANCE,
	DEPOSIT_BALANCE,
	WITHDRAW_BALANCE
} from '../actions/types';

export const initialState = 0;

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_BALANCE: {
			return action.payload;
		}
		case DEPOSIT_BALANCE: {
			return state + action.payload;
		}
		case WITHDRAW_BALANCE: {
			return state - action.payload;
		}
		default: {
			return state;
		}
	}
};
