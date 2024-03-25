import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/main';


export default function TransactionDetail({ route }) {
    const transaction = route.params.transaction;


    return (
        <View style={styles.transactionCard}>
            <Text style={styles.transactionHeader}>Transaction Detail</Text>
            <View style={styles.transactionRow}>
                <Text style={styles.transactionLabel}>Transaction Name:</Text>
                <Text style={styles.transactionText}>{transaction.transactionName}</Text>
            </View>
            <View style={styles.transactionRow}>
                <Text style={styles.transactionLabel}>Amount:</Text>
                <Text style={styles.transactionText}>${transaction.amount}</Text>
            </View>
            <View style={styles.transactionRow}>
                <Text style={styles.transactionLabel}>Transaction Date:</Text>
                <Text style={styles.transactionText}>{transaction.transactionDate}</Text>
            </View>
            <View style={styles.transactionRow}>
                <Text style={styles.transactionLabel}>Location:</Text>
                <Text style={styles.transactionText}>{transaction.location}</Text>
            </View>
        </View>
    );
}