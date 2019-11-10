import * as actionTypes from './types';
import axios from 'axios';

// [Balance]
export const setBalance = balance => ({
	type: actionTypes.SET_BALANCE,
	payload: balance
});
export const depositBalance = balance => ({
	type: actionTypes.DEPOSIT_BALANCE,
	payload: balance
});
export const withdrawBalance = balance => ({
	type: actionTypes.WITHDRAW_BALANCE,
	payload: balance
});

//[BitCoin]
export const fetchBitcoin = () => async dispatch => {
	const resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

	const json = await resp.json();

	dispatch({ type: actionTypes.FETCH_BITCOIN, payload: json });
};
