import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './LoginStack';
import {UserContext} from '../Context/User';

import MainStack from './MainStack';

const MainNavigation = () => {
  const {user} = useContext(UserContext);
  return (
    <NavigationContainer>
      {user != undefined ? <MainStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
