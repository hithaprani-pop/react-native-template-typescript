import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppData } from '../../Providers/AppConfig';
import { buttonStyles } from './Button.styles';

type ButtonProps = {
  onPress: () => void;
  invert?: boolean;
  disabled?: boolean;
  mainContainer?: ViewStyle;
  buttonStyle?: any;
  custom?: React.FC;
  title?: string;
  titleStyle?: TextStyle;
};

export const Button: React.FC<ButtonProps> = props => {
  const appData = useAppData();
  const { colors } = appData;
  const styles = buttonStyles(colors, props.invert, props.disabled);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        if (!props.disabled) {
          props.onPress && props.onPress();
        }
      }}
      style={[styles.mainContainer, props.mainContainer]}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          props.disabled
            ? [colors.disableColor, colors.disableColor]
            : props.invert
            ? [colors.borderColor, colors.borderColor]
            : colors.gradientColor
        }
        style={[styles.subContainer, props.buttonStyle]}>
        {props.custom ? (
          props.custom
        ) : (
          <Text style={[styles.fontStyle, props.titleStyle]}>
            {props.title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
