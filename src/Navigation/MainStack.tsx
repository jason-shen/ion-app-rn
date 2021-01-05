import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './Routes';
import MainScreen from '../Screens/MainScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator mode="modal" initialRouteName="Login">
      <Stack.Screen
        name={routes.Home}
        component={MainScreen}
        options={{
          title: 'ion',
          headerStyle: {
            backgroundColor: '#19202c',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
