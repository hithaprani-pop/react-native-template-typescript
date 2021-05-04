import { StyleSheet } from 'react-native';
import { colorType } from '../../Resources/Colors';
import { Fonts } from '../../Resources/Fonts';

export const loginStyles = (colors: colorType) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.defaultBackgroundColor,
    },
    formContainer: {
      flex: 1,
      marginHorizontal: 48,
      marginTop: 20,
    },
    versionText: {
      fontSize: 12,
      color: colors.fontColor,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    buttonContainerStyle: { marginVertical: 7 },
    inputMainContainer: {
      height: 44,
      justifyContent: 'flex-end',
      marginBottom: 20,
    },
  });
};
