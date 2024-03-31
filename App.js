import React, { useEffect } from 'react';
import { Transaction, Summary } from './src/Screens/index';
import TransactionDetail from './src/components/TransactionDetail/TransactionDetail.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, Provider } from 'react-redux';
import { store } from './src/redux/store.js';
import Apploader from './src/components/Apploader/index.js';
import { FontAwesome } from '@expo/vector-icons';
import TransactionForm from './src/components/TranscationForm/TransactionForm.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <Apploader />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Transaction"
            component={TransactionStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="exchange" size={size} color={color} /> // Font Awesome icon for "Transaction" tab
              )
            }}
          />
          <Tab.Screen
            name="Summary"
            component={Summary}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="bar-chart" size={size} color={color} /> // Font Awesome icon for "Summary" tab
              )
            }}
          />
          <Tab.Screen
            name="Transaction Form"
            component={TransactionForm}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="bar-chart" size={size} color={color} /> 
              )
            }}
          />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={Transaction} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}

