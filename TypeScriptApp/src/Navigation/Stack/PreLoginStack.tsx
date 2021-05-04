import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { LandingScreen } from '../../UI/LandingScreen';
import { Login } from '../../UI/Login/Login';
import { DrawerNavigation } from '../Drawer/DrawerNavigation';

const Stack = createStackNavigator();

export const PreLoginStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'landingScreen'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'landingScreen'} component={LandingScreen} />
      <Stack.Screen name={'Home'} component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
