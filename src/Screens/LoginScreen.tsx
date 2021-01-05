import React, {useContext, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Input} from 'react-native-elements';
import {UserContext} from '../Context/User';

const {width} = Dimensions.get('window');

const LoginScreen = () => {
  const [roomid, setRoomid] = useState(null);
  const [username, setUsername] = useState(null);
  const {setUser} = useContext(UserContext);

  const handleChange = (name: string, e: any) => {
    if (name === 'roomid') {
      setRoomid(e);
    }
    if (name === 'username') {
      setUsername(e);
    }
  };

  const loginPress = () => {
    const user = {
      roomid: roomid,
      username: username,
    };
    const jUser = JSON.stringify(user);
    setUser(jUser);
  };

  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="center"
          style={styles.logo}
          source={require('../img/pion-logo.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Room ID"
          leftIcon={<Icon name="users" size={24} color="black" />}
          onChangeText={(e) => handleChange('roomid', e)}
        />
        <Input
          placeholder="User Name"
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={(e) => handleChange('username', e)}
        />
        <Button onPress={loginPress} style={{marginTop: '10%'}} title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //justifyContent: 'center',+
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
    backgroundColor: '#19202c',
    paddingTop: 10,
    marginBottom: '25%',
  },
  logo: {
    width: width,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: '15%',
  },
});

export default LoginScreen;
