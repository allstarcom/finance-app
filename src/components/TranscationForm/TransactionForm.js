import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../styles/main';
import * as database from '../../database/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, editTransaction, setTransactionMode } from '../../redux/transactionSlice'; // Import setMode action creator
import { useNavigation } from '@react-navigation/native';


const TransactionForm = ({ route }) => {
    const [transactionName, setTransactionName] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [transactionDate, setTransactionDate] = useState(new Date());
    const [location, setLocation] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const mode = useSelector(state => state.transaction.mode); // Get mode from Redux store
    const transactionToEdit = route.params

    useEffect(() => {
        if (mode === "edit" && transactionToEdit != undefined) {
            let params = transactionToEdit.transactionToEdit
            setTransactionId(params.id)
            setTransactionName(params.transactionName);
            setAmount(params.amount.toString());
            setTransactionDate(new Date(params.transactionDate));
            setLocation(params.location);
        }
    }, [transactionToEdit]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setTransactionName('');
            setAmount('');
            setTransactionDate(new Date());
            setLocation('');
            dispatch(setTransactionMode('add'));
        });
        return unsubscribe;
    }, [navigation]);


    const handleTransaction = async () => {
        transactionNavigation = navigation.navigate('Transaction');

        const newTransaction = {
            transactionName,
            amount: parseFloat(amount),
            transactionDate: transactionDate.toISOString(),
            location
        };

        if (mode === 'add') {
            const id = await database.save(newTransaction);
            newTransaction.id = id;
            dispatch(addTransaction(newTransaction));
            transactionNavigation

        } else {
            newTransaction.id = transactionId;
            database.update(newTransaction.id, newTransaction)
            dispatch(editTransaction(newTransaction));
            navigation.navigate('Transaction');
            transactionNavigation
        }
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || transactionDate;
        setShowDatePicker(false);
        setTransactionDate(currentDate);
    };

    return (
        <View style={styles.transactionContainer}>
            <TextInput
                style={styles.transactionInput}
                value={transactionName}
                onChangeText={setTransactionName}
                placeholder="Transaction Name"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.transactionInput}
                value={amount}
                onChangeText={setAmount}
                placeholder="Amount"
                placeholderTextColor="#888"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.dateTimePicker} onPress={() => setShowDatePicker(true)}>
                <Text>{transactionDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={transactionDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    style={styles.dateTimePicker}
                />
            )}
            <TextInput
                style={styles.transactionInput}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.transactionButton} onPress={handleTransaction}>
                <Text style={styles.transactionButtonText}>{mode === 'add' ? 'Add Transaction' : 'Update Transaction'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TransactionForm;
