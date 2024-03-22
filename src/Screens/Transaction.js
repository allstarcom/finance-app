import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionList from '../components/Transaction/TransactionList';


export default function Transaction() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TransactionList/>
      </View>
    );
  }
  