import React, { useRef } from 'react';
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { useAppData } from '../../Providers/AppConfig';
import { dropDownStyle } from './DropDown.styles';

export type DropDownProps = {
  optionsData: { key: string | number; value: string }[];
  selectedOption: { key: string | number; value: string };
  onChange: (value: { key: string | number; value: string }) => void;
  defaultLabel: string;
  listWidth?: number;
  menuStyle?: ViewStyle;
  dropContainerStyle?: ViewStyle;
  selectedOptionTextStyle?: TextStyle;
  optionTextStyle?: TextStyle;
  menuItemStyle?: ViewStyle;
  labelTextStyle?: TextStyle;
  onShow?: () => void;
  onHide?: () => void;
};

export const DropDown: React.FC<DropDownProps> = props => {
  const menuRef = useRef<Menu>(null);
  const appData = useAppData();
  const {
    optionsData,
    selectedOption,
    onChange,
    defaultLabel,
    listWidth,
    menuStyle,
    dropContainerStyle,
    selectedOptionTextStyle,
    optionTextStyle,
    menuItemStyle,
    labelTextStyle,
    onShow,
    onHide,
  } = props;

  const styles = dropDownStyle(appData.colors, listWidth);

  const hideMenu = (value: { key: string | number; value: string }) => {
    if (onChange) {
      onChange(value);
    }
    if (menuRef && menuRef.current) {
      menuRef.current.hide();
    }
  };

  const showMenu = () => {
    if (onShow) {
      onShow();
    }
    if (menuRef && menuRef.current) {
      menuRef.current.show();
    }
  };

  return (
    <Menu
      ref={menuRef}
      onHidden={() => {
        if (onHide) {
          onHide();
        }
      }}
      button={
        <View>
          <TouchableOpacity
            onPress={showMenu}
            style={[styles.dropContainerStyle, dropContainerStyle]}>
            <Text style={[styles.labelTextStyle, labelTextStyle]}>
              {(selectedOption && selectedOption.value) || defaultLabel}
            </Text>
            <Text style={[styles.labelTextStyle, labelTextStyle]}>▼</Text>
          </TouchableOpacity>
        </View>
      }
      style={[styles.menuStyle, menuStyle]}>
      <ScrollView bounces={false} style={styles.scrollViewStyle}>
        {optionsData.map((option, index: number) => {
          const isSelected =
            selectedOption && option.key === selectedOption.key;
          return (
            <MenuItem
              key={index}
              onPress={() => hideMenu(option)}
              textStyle={
                isSelected
                  ? {
                      ...styles.selectedOptionTextStyle,
                      ...selectedOptionTextStyle,
                    }
                  : {
                      ...styles.optionTextStyle,
                      ...optionTextStyle,
                    }
              }
              style={[styles.menuItemStyle, menuItemStyle]}>
              {option.value}
            </MenuItem>
          );
        })}
      </ScrollView>
    </Menu>
  );
};
