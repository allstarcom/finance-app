import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Transaction, Summary } from './src/Screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, Provider } from 'react-redux';
import { store } from './src/redux/store.js';
import Apploader from './src/components/Apploader/index.js';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <Apploader/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transaction" component={Transaction} />
          <Tab.Screen name="Summary" component={Summary} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
