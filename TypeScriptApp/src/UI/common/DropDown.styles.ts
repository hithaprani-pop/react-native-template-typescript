import { StyleSheet } from 'react-native';
import { colorType } from '../../Resources/Colors';
import { Fonts } from '../../Resources/Fonts';

export const dropDownStyle = (colors: colorType, listWidth?: number) => {
  return StyleSheet.create({
    dropContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuStyle: { marginTop: 30, alignItems: 'center' },
    scrollViewStyle: { maxHeight: 200, width: listWidth || 200 },
    menuItemStyle: { maxWidth: listWidth || 200 },
    labelTextStyle: {
      fontSize: 16,
      color: colors.fontColor,
    },
    optionTextStyle: {
      fontSize: 16,
      color: colors.fontColor,
    },
    selectedOptionTextStyle: {
      fontSize: 16,
      color: colors.fontColor,
    },
  });
};
