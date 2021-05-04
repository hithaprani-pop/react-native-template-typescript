import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { LoginAPI } from '../../API/LoginAPI';
import { useAppData } from '../../Providers/AppConfig';
import { useUIElements } from '../../Providers/UIProvider';
import { Button } from '../common/Button';
import { Header } from '../common/Header';
import { Input } from '../common/Input';
import { loginStyles } from './Login.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationType } from '../../Navigation/NavigationType';

type NavigationProp = StackNavigationProp<NavigationType, 'Login'>;

type LoginProp = {
  navigation: NavigationProp;
};

export const Login: React.FC<LoginProp> = props => {
  const appData = useAppData();
  const uiElements = useUIElements();
  const { strings } = appData;
  const styles = loginStyles(appData.colors);

  const [KeyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('');

  const renderForm = () => {
    return (
      <View style={styles.formContainer}>
        <Input
          label={'EmailId'}
          inputType={'text'}
          value={email}
          onUpdate={(value: string) => {
            setEmail(value);
          }}
          textInputProps={{
            keyboardType: 'email-address',
          }}
          mainContainerStyle={styles.inputMainContainer}
        />
        <Button
          title={'Login'}
          onPress={() => {
            LoginAPI(
              { name: '', password: '' },
              data => {
                console.log(data);
                props.navigation.reset({
                  index: 1,
                  routes: [{ name: 'Home', params: { token: '' } }],
                });
              },
              error => {
                console.log(error);
              },
            );
            // navigate('Home');
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        title={'Login'}
        onBackpress={() => {
          props.navigation.pop();
        }}
      />
      {renderForm()}
      <Text style={styles.versionText}>
        {strings.version.replace('{0}', DeviceInfo.getReadableVersion())}
      </Text>
    </View>
  );
};
