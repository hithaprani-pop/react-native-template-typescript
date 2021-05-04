import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Home } from '../../UI/Home/Home';

const Stack = createStackNavigator();

export const PostLoginStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomePage'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'HomePage'} component={Home} />
    </Stack.Navigator>
  );
};
