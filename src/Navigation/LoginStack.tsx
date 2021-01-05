import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './Routes';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator mode="modal" initialRouteName="Login">
      <Stack.Screen
        name={routes.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
          // title: 'Login',
          // headerStyle: {
          //   backgroundColor: '#19202c',
          //   borderBottomWidth: 0,
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
