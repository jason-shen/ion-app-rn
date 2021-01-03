import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
