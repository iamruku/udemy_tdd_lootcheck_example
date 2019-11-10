import * as actionTypes from '../../actions/types';
import * as actions from '../../actions/actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('balance actions', () => {
	it('creates an action to set the balance', () => {
		const balance = 0;

		const expectedAction = {
			type: actionTypes.SET_BALANCE,
			payload: balance
		};

		expect(actions.setBalance(balance)).toEqual(expectedAction);
	});

	it('creates an action to deposit a balance', () => {
		const deposit = 10;

		const expectedAction = {
			type: actionTypes.DEPOSIT_BALANCE,
			payload: deposit
		};

		expect(actions.depositBalance(deposit)).toEqual(expectedAction);
	});

	it('creates an action to withdraw a balance', () => {
		const withdraw = 10;

		const expectedAction = {
			type: actionTypes.WITHDRAW_BALANCE,
			payload: withdraw
		};

		expect(actions.withdrawBalance(withdraw)).toEqual(expectedAction);
	});
});

// https://api.coindesk.com/v1/bpi/currentprice.json
describe('bitcoin actions', () => {
	const createMockStore = configureMockStore([thunk]);
	const store = createMockStore({ bitcoin: {} });

	const mockResponse = { body: { bpi: 'bitcoin price index' } };

	fetchMock.get(
		'https://api.coindesk.com/v1/bpi/currentprice.json',
		mockResponse
	);

	it('creates an async action to fetch the bitcoin value', () => {
		const expectedActions = [
			{ type: actionTypes.FETCH_BITCOIN, payload: mockResponse.body }
		];

		return store.dispatch(actions.fetchBitcoin()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
