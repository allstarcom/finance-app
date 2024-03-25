import {createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: [],
    },
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        }

    },  
})

export const { setTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;