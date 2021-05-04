import { StyleSheet } from 'react-native';
import { colorType } from '../Resources/Colors';
import { Fonts } from '../Resources/Fonts';

export const landingScreenStyles = (colors: colorType) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.defaultBackgroundColor,
    },
    subContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    versionText: {
      fontSize: 12,
      color: colors.fontColor,
      alignSelf: 'center',
      marginBottom: 20,
    },
  });
};
