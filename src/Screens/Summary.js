import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SummaryInfo from '../components/Summary/Summary';


export default function Summary() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SummaryInfo />
    </View>
  );
}