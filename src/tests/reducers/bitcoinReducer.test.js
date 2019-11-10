import bitcoinReducer from '../../reducers/bitcoinReducer';
import { FETCH_BITCOIN } from '../../actions/types';

describe('bitcoin reducer', () => {
	const bitcoinData = { bpi: 'bitcoin price index' };

	it('fetches and sets bitcoin data', () => {
		expect(
			bitcoinReducer({}, { type: FETCH_BITCOIN, payload: bitcoinData })
		).toEqual(bitcoinData);
	});
});
