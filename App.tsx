//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CounterScreen from './src/CounterScreen';
import ListScreen from './src/ListScreen';
import BottomNavigation from './src/Components/BottomNav';
const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux';
import { store } from './src/store/store';

// create a component
const App = () => {
  return (
    <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="HomeScreen"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="CounterScreen"
          component={CounterScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};

export default App;
