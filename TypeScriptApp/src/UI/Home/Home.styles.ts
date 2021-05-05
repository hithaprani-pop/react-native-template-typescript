import { StyleSheet } from 'react-native';
import { colorType } from '../../Resources/Colors';
import { Fonts } from '../../Resources/Fonts';

export const homeStyles = (colors: colorType) => {
  return StyleSheet.create({
    mainContainer: {
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      marginVertical: 20,
    },
    buttonContainer: { marginVertical: 20 },
  });
};
