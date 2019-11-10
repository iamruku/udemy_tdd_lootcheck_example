import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import bitcoinReducer from './bitcoinReducer';

export default combineReducers({
	balance: balanceReducer,
	bitcoin: bitcoinReducer
});
