import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../Screens/Authentication/Intro';
import LoginRegister from '../Screens/Authentication/LoginRegister';
import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="LoginRegister" component={LoginRegister} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
