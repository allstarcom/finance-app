import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/main';
import { useSelector } from 'react-redux';


export default function Summary({ }) {
    const summary = useSelector((state) => state.transaction.transactions);

    const totalTransactions = summary.length;
    const totalBalance = summary.reduce((total, transaction) => total + transaction.amount, 0).toFixed(2);
    const highestTransactionName = summary.reduce((highest, transaction) => (transaction.amount > highest.amount ? transaction : highest), summary[0]).transactionName;
    const lowestTransactionName = summary.reduce((lowest, transaction) => (transaction.amount < lowest.amount ? transaction : lowest), summary[0]).transactionName;

    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryHeader}>Summary</Text>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryText}>Total Transactions:</Text>
                <Text style={styles.summaryValue}>{totalTransactions}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryText}>Total Balance:</Text>
                <Text style={styles.summaryValue}>${totalBalance}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryText}>Highest Transaction Name:</Text>
                <Text style={styles.summaryValue}>{highestTransactionName}</Text>
            </View>
            <View style={styles.summaryItem}>
                <Text style={styles.summaryText}>Lowest Transaction Name:</Text>
                <Text style={styles.summaryValue}>{lowestTransactionName}</Text>
            </View>
        </View>
    );
}