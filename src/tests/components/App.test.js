import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import App from '../../components/App';

describe('App', () => {
	const wrapper = shallow(<App></App>);

	describe('initial dom content', () => {
		it('renders wrapper', () => {
			expect(wrapper).toMatchSnapshot();
		});

		it('contains a `Connect(Wallet)` component', () => {
			expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
		});

		it('contains a `Connect(Loot)` component', () => {
			expect(wrapper.find('Connect(Loot)').exists()).toBe(true);
		});
	});
});
