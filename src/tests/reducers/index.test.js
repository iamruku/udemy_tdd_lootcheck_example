import rootReducer from '../../reducers';

describe('root reducer', () => {
	it('initializes the default state', () => {
		expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
	});
});
