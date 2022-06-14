import React, { useState } from "react";
import { getRaffleTransactions } from "../../service/raffle.service";
import { PAGE_SIZE } from "../../statics";
import TransactionRow from "./TransactionRow";
import Pagination from "../../webparts/Shared/Pagination";

class Transactions extends React.Component {
    state = {
        transactions: [],
        winner: {},
        charity: {},
        page: 0,
        loading: false,
        loadedPage: -1,
        total: 0
    }

    fetch_data = () => {
        if (!this.state.loading && this.state.loadedPage !== this.state.page) {
            const page = this.state.page
            this.setState({loading: true})
            getRaffleTransactions(
                this.props.id,
                page === 0 ? 0 : page * PAGE_SIZE + (this.props.status === 'failed' ? 0 : 2),
                page === 0 ? PAGE_SIZE + (this.props.status === 'failed' ? 0 : 2) : PAGE_SIZE
            ).then(({data}) => {
                    let charity = {...this.state.charity};
                    let winner = {...this.state.winner};
                    let txs = [];
                    data.items.forEach(item => {
                        if (item.type === 'winner') {
                            winner = item;
                        } else if (item.type === 'charity') {
                            charity = item;
                        } else {
                            txs.push(item)
                        }
                    })
                    this.setState({
                        transactions: txs,
                        loading: false,
                        loadedPage: page,
                        total: data.total,
                        charity: charity,
                        winner: winner
                    });
                }
            )
        }
    }
    prevPage = () => {
        if (this.state.page > 0) {
            this.setState(state => ({...state, page: state.page - 1}))
        }
    }
    nextPage = () => {
        if (this.state.page < Math.ceil(this.state.total / PAGE_SIZE) - 1) {
            this.setState(state => ({...state, page: state.page + 1}))
        }
    }

    componentDidMount = () => {
        this.fetch_data();
    }

    componentDidUpdate = () => {
        this.fetch_data();
    }

    render = () => {
        const total_page = Math.ceil(this.state.total / (PAGE_SIZE + (this.props.status === 'failed' ? 0 : 2)))
        return (
            <div className="container all-transactions mt-5">
                <h2 className="transaction-title text-center mb-4">Details of Transactions</h2>
                <div className="container mt-5">
                    {this.props.status !== 'failed' ? (
                        <React.Fragment>
                            <h2 className="winner-title text-left mb-4">Winner Payment</h2>
                            <TransactionRow transaction={this.state.winner} status="winner"/>
                            <h2 className="winner-title text-left mb-4">Charity Payment</h2>
                            <TransactionRow transaction={this.state.charity} status="charity"/>
                        </React.Fragment>
                    ) : null}
                    {this.state.transactions.map((item, index) => (
                        <TransactionRow
                            transaction={item}
                            status="ticket"
                            row={this.state.page * PAGE_SIZE + index + 1}/>
                    ))}
                </div>
                <section id="pagination" className="p-5">
                    {total_page > 0 ? (
                        <Pagination
                            currentPage={this.state.page + 1}
                            totalPages={total_page}
                            prevPage={() => this.prevPage()}
                            nextPage={() => this.nextPage()}/>
                    ) : null}
                </section>
            </div>
        )
    }
}

export default Transactions
