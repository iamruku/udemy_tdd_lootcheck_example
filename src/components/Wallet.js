import React, { Component } from 'react';
import { connect } from 'react-redux';
import { depositBalance, withdrawBalance } from '../actions/actions';

export class Wallet extends Component {
	state = { inputBalance: 0 };

	deposit = () => {
		this.props.depositBalance(this.state.inputBalance);
	};

	withdraw = () => {
		this.props.withdrawBalance(this.state.inputBalance);
	};

	render() {
		return (
			<div>
				<h2 className="balance">Wallet Balance: {this.props.balance}</h2>
				<br />
				<label>Balance&nbsp;</label>
				<input
					type="text"
					className="inp-balance"
					onChange={e =>
						this.setState({ inputBalance: parseFloat(e.target.value) })
					}></input>
				<button className="btn-deposit" onClick={this.deposit}>
					Deposit
				</button>
				<button className="btn-withdraw" onClick={this.withdraw}>
					Withdraw
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ balance }) => ({ balance });

export default connect(
	mapStateToProps,
	{ depositBalance, withdrawBalance }
)(Wallet);
