import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import { Wallet } from '../../components/Wallet';

describe('Wallet', () => {
	const _depositBalance = jest.fn();
	const _withdrawBalance = jest.fn();
	const props = {
		balance: 20,
		depositBalance: _depositBalance,
		withdrawBalance: _withdrawBalance
	};

	const wrapper = shallow(<Wallet {...props}></Wallet>);

	describe('initial dom content', () => {
		it('renders wrapper', () => {
			expect(wrapper).toMatchSnapshot();
		});

		it('displays the balance from props', () => {
			expect(wrapper.find('.balance').text()).toEqual(
				`Wallet Balance: ${props.balance}`
			);
		});

		it('contains an input to enter a balance amount', () => {
			expect(wrapper.find('.inp-balance').exists()).toBe(true);
		});

		it('contains a button to deposit the balance', () => {
			expect(wrapper.find('.btn-deposit').exists()).toBe(true);
		});

		it('contains a button to withdraw the balance', () => {
			expect(wrapper.find('.btn-withdraw').exists()).toBe(true);
		});
	});

	describe('initial state content', () => {
		it('should initialize `inputBalance` to 0', () => {
			expect(wrapper.state().inputBalance).toEqual(0);
		});
	});

	describe('change in input balance', () => {
		const balance = '25';

		beforeEach(() => {
			wrapper
				.find('.inp-balance')
				.simulate('change', { target: { value: balance } });
		});

		it('should update inputBalance prop in `state`', () => {
			expect(wrapper.state().inputBalance).toEqual(parseFloat(balance));
		});

		describe('user wants to deposit balance', () => {
			beforeEach(() => {
				wrapper.find('.btn-deposit').simulate('click');
			});

			it('dispatches the `depositBalance()` via props', () => {
				expect(_depositBalance).toHaveBeenCalledWith(parseFloat(balance));
			});
		});

		describe('user wants to withdraw balance', () => {
			beforeEach(() => {
				wrapper.find('.btn-withdraw').simulate('click');
			});

			it('dispatches the `withdrawBalance()` via props', () => {
				expect(_withdrawBalance).toHaveBeenCalledWith(parseFloat(balance));
			});
		});
	});
});
