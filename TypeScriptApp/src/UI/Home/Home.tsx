import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Header } from '../common/Header';
import { Button } from '../common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { homeStyles } from './Home.styles';
import { useAppData } from '../../Providers/AppConfig';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationType } from '../../Navigation/NavigationType';
import { useUIElements } from '../../Providers/UIProvider';
import DeviceInfo from 'react-native-device-info';

type NavigationProp = StackNavigationProp<NavigationType, 'HomePage'>;

type HomeProp = {
  navigation: NavigationProp;
};

export const Home: React.FC<HomeProp> = props => {
  const appData = useAppData();
  const uiElements = useUIElements();
  const { strings } = appData;
  const styles = homeStyles(appData.colors);
  return (
    <View>
      <Header title={'Login'} />
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.textStyle}>Home</Text>
        <Button
          title={appData.strings.Logout}
          onPress={() => {
            AsyncStorage.removeItem('login');
            props.navigation.reset({
              index: 1,
              routes: [{ name: 'landingScreen' }],
            });
          }}
          mainContainer={styles.buttonContainer}
        />
        <Button
          title={'Change Theme: ' + appData.currentTheme}
          onPress={() => {
            appData.setAppTheme(
              appData.currentTheme === 'light' ? 'dark' : 'light',
            );
          }}
          mainContainer={styles.buttonContainer}
        />
        <Button
          title={'Change Language: ' + appData.currentLanguage}
          onPress={() => {
            appData.setLanguage(
              appData.currentLanguage === 'Eng' ? 'Spa' : 'Eng',
            );
          }}
          mainContainer={styles.buttonContainer}
        />
        <Button
          title={'Load'}
          onPress={() => {
            uiElements.setShowLoading(true, 'nvajksdnjk');
            setTimeout(() => {
              uiElements.setShowLoading(false);
            }, 2000);
          }}
          mainContainer={styles.buttonContainer}
        />
        <Text style={styles.textStyle}>
          {strings.version.replace('{0}', DeviceInfo.getReadableVersion())}
        </Text>
      </SafeAreaView>
    </View>
  );
};
