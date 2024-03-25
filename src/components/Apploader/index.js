import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { setTransactions } from '../../redux/transactionSlice';

export default function Apploader() {

    const dispatch = useDispatch();
    useEffect(() => {
        const transactionsDetail = [
            {
                "id": 1,
                "transactionName": "Coffee",
                "amount": 3.50,
                "transactionDate": "2024-03-16",
                "location": "New York"
            },
            {
                "id": 2,
                "transactionName": "Groceries",
                "amount": 55.25,
                "transactionDate": "2024-03-15",
                "location": "Los Angeles"
            },
            {
                "id": 3,
                "transactionName": "Gas",
                "amount": 40.00,
                "transactionDate": "2024-03-14",
                "location": "Chicago"
            },
            {
                "id": 4,
                "transactionName": "Restaurant",
                "amount": 30.75,
                "transactionDate": "2024-03-14",
                "location": "Houston"
            },
            {
                "id": 5,
                "transactionName": "Movie Tickets",
                "amount": 25.00,
                "transactionDate": "2024-03-13",
                "location": "Phoenix"
            },
            {
                "id": 6,
                "transactionName": "Books",
                "amount": 20.50,
                "transactionDate": "2024-03-12",
                "location": "Philadelphia"
            },
            {
                "id": 7,
                "transactionName": "Electronics",
                "amount": 200.00,
                "transactionDate": "2024-03-11",
                "location": "San Antonio"
            },
            {
                "id": 8,
                "transactionName": "Clothing",
                "amount": 45.80,
                "transactionDate": "2024-03-10",
                "location": "San Diego"
            },
            {
                "id": 9,
                "transactionName": "Dinner",
                "amount": 35.20,
                "transactionDate": "2024-03-09",
                "location": "Dallas"
            },
            {
                "id": 10,
                "transactionName": "Haircut",
                "amount": 15.00,
                "transactionDate": "2024-03-08",
                "location": "San Jose"
            },
        ];
        dispatch(setTransactions(transactionsDetail));
    }, []);

}