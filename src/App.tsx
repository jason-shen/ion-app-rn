import React, {useMemo, useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import {UserContext} from './Context/User';
import MainNavigation from './Navigation';

const App = () => {
  const [user, setUser] = useState<undefined | string>(undefined);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);
  return (
    <UserContext.Provider value={providerValue}>
      <View style={styles.root}>
        <StatusBar translucent barStyle="light-content" />
        <MainNavigation />
      </View>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
