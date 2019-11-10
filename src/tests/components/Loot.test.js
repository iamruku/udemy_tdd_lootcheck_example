import React from 'react';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import { Loot } from '../../components/Loot';

describe('Loot', () => {
	const _fetchBitcoin = jest.fn();
	const props = { balance: 10, bitcoin: {} };
	let wrapper = shallow(<Loot {...props}></Loot>);

	describe('initial dom content', () => {
		it('renders wrapper', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('on mount', () => {
		beforeEach(() => {
			props.fetchBitcoin = _fetchBitcoin;
			wrapper = mount(<Loot {...props}></Loot>);
		});

		it('dispatches the `fetchBitcoin()` method via props', () => {
			expect(_fetchBitcoin).toHaveBeenCalled();
		});
	});

	describe('when there is valid bitcoin prop', () => {
		beforeEach(() => {
			const props = {
				balance: 10,
				bitcoin: { bpi: { USD: { rate: '1,000' } } }
			};
			wrapper = shallow(<Loot {...props}></Loot>);
		});

		it('displays the correct bitcoin value', () => {
			expect(wrapper.find('h3').text()).toEqual('Bitcoin Balance: 0.01');
		});
	});
});
