import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const LoginStack = () => {
  return (
    <View style={styles.root}>
      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
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

export default LoginStack;
