import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: [],
        mode: "add"
    },
    reducers: {
        setTransactions: (state, action) => {

            state.transactions = action.payload.map(transaction => ({
                ...transaction,
                transactionDate: new Date(transaction.transactionDate).toISOString()
            }));

        },
        addTransaction: (state, action) => {
            const { id, transactionName, amount, transactionDate, location } = action.payload;
            state.transactions.push({
                id,
                transactionName,
                amount,
                transactionDate: transactionDate,
                location
            });
        },
        editTransaction: (state, action) => {

            const updatedTransactions = state.transactions.map((transaction) => {
                let newData = action.payload

                if (transaction.id === newData.id) {
                    transaction.transactionName = newData.transactionName
                    transaction.amount = newData.amount
                    transaction.transactionDate = newData.transactionDate
                    transaction.location = newData.location
                }
                return transaction;
            });
            console.log(updatedTransactions)

            state.transactions = updatedTransactions

        },
        deleteTransaction: (state, action) => {
            const id = action.payload;
            state.transactions = state.transactions.filter(
                (transaction) => transaction.id !== id
            );
        },
        setTransactionMode: (state, action) => {
            console.log(action.payload)
            state.mode = action.payload
        }
    },
})

export const { setTransactions, addTransaction, editTransaction, deleteTransaction, setTransactionMode } = transactionSlice.actions;

export default transactionSlice.reducer;