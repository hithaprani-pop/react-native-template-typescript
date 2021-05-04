import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header } from '../common/Header';
import { Button } from '../common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { homeStyles } from './Home.styles';
import { useAppData } from '../../Providers/AppConfig';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationType } from '../../Navigation/NavigationType';

type NavigationProp = StackNavigationProp<NavigationType, 'HomePage'>;

type HomeProp = {
  navigation: NavigationProp;
};

export const Home: React.FC<HomeProp> = props => {
  const appData = useAppData();
  const styles = homeStyles(appData.colors);
  return (
    <View>
      <Header title={'Login'} />
      <SafeAreaView>
        <Text style={styles.textStyle}>Home</Text>
        <Button
          title={'Logout'}
          onPress={() => {
            AsyncStorage.removeItem('login');
            props.navigation.reset({
              index: 1,
              routes: [{ name: 'landingScreen' }],
            });
          }}
        />
      </SafeAreaView>
    </View>
  );
};
