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

// Action creators are generated for each case reducer function
export const { setTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;