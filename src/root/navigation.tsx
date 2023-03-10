import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/onboarding/login';
import Signup from '../components/onboarding/signup';
// all componenets import, 
const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name='signup' component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;