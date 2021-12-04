import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Testvd} from '@components/Ttest';
import RNBootSplash from 'react-native-bootsplash';
export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 5000);
  }, []);
  return (
    <SafeAreaProvider>
      <Text>dsmkl</Text>
      <Testvd />
    </SafeAreaProvider>
  );
};
