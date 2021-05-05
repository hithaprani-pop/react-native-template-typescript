import { StyleSheet } from 'react-native';
import { colorType } from '../Resources/Colors';
import { Fonts } from '../Resources/Fonts';

export const uiProviderStyles = (colors: colorType) => {
  return StyleSheet.create({
    spinnerView: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.SpinnerBackgroud,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5000,
      elevation: 5000,
    },
    messageStyle: {
      fontSize: 14,
      marginTop: 12,
    },
  });
};
