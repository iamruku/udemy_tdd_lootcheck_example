import {
	SET_BALANCE,
	DEPOSIT_BALANCE,
	WITHDRAW_BALANCE
} from '../../actions/types';
import balanceReducer from '../../reducers/balanceReducer';

describe('balance reducer', () => {
	it('sets a balance', () => {
		const balance = 10;

		expect(
			balanceReducer(undefined, { type: SET_BALANCE, payload: balance })
		).toEqual(balance);
	});

	it('deposits a balance', () => {
		const balance = 10;
		const initialBalance = 20;

		expect(
			balanceReducer(initialBalance, {
				type: DEPOSIT_BALANCE,
				payload: balance
			})
		).toEqual(balance + initialBalance);
	});

	it('withdraws a balance', () => {
		const balance = 10;
		const initialBalance = 20;

		expect(
			balanceReducer(initialBalance, {
				type: WITHDRAW_BALANCE,
				payload: balance
			})
		).toEqual(initialBalance - balance);
	});
});
