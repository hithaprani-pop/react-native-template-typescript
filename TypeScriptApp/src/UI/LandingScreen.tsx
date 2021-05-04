import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useAppData } from '../Providers/AppConfig';
import { Button } from './common/Button';
import DeviceInfo from 'react-native-device-info';
import { landingScreenStyles } from './LandingScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUIElements } from '../Providers/UIProvider';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationType } from '../Navigation/NavigationType';

type NavigationProp = StackNavigationProp<NavigationType, 'landingScreen'>;

type LandingScreenProp = {
  navigation: NavigationProp;
};

export const LandingScreen: React.FC<LandingScreenProp> = props => {
  const appData = useAppData();
  const { setShowLoading } = useUIElements();

  const { strings } = appData;
  const styles = landingScreenStyles(appData.colors);

  useEffect(() => {
    setShowLoading(true);
    AsyncStorage.getItem('login')
      .then(data => {
        if (data) {
          props.navigation.reset({
            index: 1,
            routes: [{ name: 'Home' }],
          });
        }
      })
      .catch(error => {})
      .finally(() => {
        setShowLoading(false);
      });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.subContainer}>
        <Button
          title={'Go to Login'}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        />
        <Text style={styles.versionText}>
          {strings.version.replace('{0}', DeviceInfo.getReadableVersion())}
        </Text>
      </SafeAreaView>
    </View>
  );
};
