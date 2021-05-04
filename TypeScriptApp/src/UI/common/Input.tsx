/**
 * Props:
 * label: Input Label
 * inputType: 'text' |'date' |'checkbox' |'radioButton' |'drop'
 * value: input value
 * onUpdate: (value)=>void  // can be string or {key:1, value:'option1'}
 * options: used for checkbox|radioButton|drop
 *          ex: [{key:1, value:'option1'},{key:2, value:'option2'}]
 * isPassword: boolean only if inputType is text
 * textInputProps: only if inputType is text, extra textInput props
 * dropProps: only if inputType is drop, extra Drop props
 * dateType: 'date' | 'time' | 'datetime' only if inputType is date
 * datePickerProps:  only if inputType is date, extra DateTimePickerModal props
 * checkboxProps: only if inputType is checkbox, extra CheckBox props
 */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useAppData } from '../../Providers/AppConfig';
import { DropDown, DropDownProps } from './DropDown';
import { inputStyles } from './Input.styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CheckBox, { CheckBoxProps } from '@react-native-community/checkbox';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonInputProps,
  RadioButtonLabel,
  RadioButtonLabelProps,
  RadioButtonProps,
} from 'react-native-simple-radio-button';

type InputProps = {
  label: string;
  inputType: 'text' | 'date' | 'checkbox' | 'radioButton' | 'drop';
  value: string | { key: number | string; value: string };
  onUpdate: (
    value:
      | string
      | { key: number | string; value: string }
      | { key: number | string; value: string }[],
  ) => void;
  options?: { key: number | string; value: string }[];
  isPassword?: boolean;
  disable?: boolean;
  textInputProps?: TextInputProps;
  listWidth?: number;
  dropProps?: DropDownProps;
  dateContainerStyle?: ViewStyle;
  dateType?: 'date' | 'time' | 'datetime';
  datePickerProps?: DateTimePickerModal;
  checkboxContainerStyle?: ViewStyle;
  tintColor?: string;
  onTintColor?: string;
  onCheckColor?: string;
  onFillColor?: string;
  checkboxProps?: CheckBoxProps;
  mainContainerStyle?: ViewStyle;
  radioButtonLabelProps?: RadioButtonLabelProps;
  radioButtonInputProps?: RadioButtonInputProps;
  circleColor?: string;
  radiobuttonContainerStyle?: ViewStyle;
  radioButtonProps?: RadioButtonProps;
};

export const Input: React.FC<InputProps> = props => {
  const {
    label,
    inputType,
    value,
    onUpdate,
    options,
    isPassword,
    disable,
    textInputProps,
    listWidth,
    dropProps,
    dateContainerStyle,
    dateType,
    datePickerProps,
    checkboxContainerStyle,
    tintColor,
    onTintColor,
    onCheckColor,
    onFillColor,
    checkboxProps,
    mainContainerStyle,
    radioButtonLabelProps,
    radioButtonInputProps,
    circleColor,
    radiobuttonContainerStyle,
    radioButtonProps,
  } = props;
  const appData = useAppData();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const styles = inputStyles(appData.colors, isFocused);

  const renderTextInput = () => {
    return (
      <TextInput
        value={value as string}
        style={styles.inputTextStyles}
        placeholderTextColor={appData.colors.placeHolderTextColor}
        placeholder={label}
        onChangeText={value => {
          onUpdate(value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        selectionColor={appData.colors.appPrimaryColor}
        secureTextEntry={isPassword}
        editable={!disable}
        {...textInputProps}
      />
    );
  };

  const renderDropInput = () => {
    if (options) {
      return (
        <DropDown
          onShow={() => {
            setIsFocused(true);
          }}
          onHide={() => {
            setIsFocused(false);
          }}
          optionsData={options}
          selectedOption={value as { key: number | string; value: string }}
          onChange={value => {
            onUpdate(value);
          }}
          defaultLabel={label}
          listWidth={listWidth}
          labelTextStyle={
            value ? styles.inputTextStyles : styles.placeHolderTextStyles
          }
          {...dropProps}
        />
      );
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setIsFocused(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setIsFocused(false);
  };
  const handleConfirm = (date: Date) => {
    onUpdate(date.toString());
    hideDatePicker();
  };
  const renderDateInput = () => {
    const isValidDate = value && moment(value as string).isValid();
    return (
      <View style={styles.dateMainContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={showDatePicker}
          style={[styles.dateContainer, dateContainerStyle]}>
          <Text
            style={
              isValidDate
                ? styles.inputTextStyles
                : styles.placeHolderTextStyles
            }>
            {isValidDate ? moment(value as string).format('DD-MM-YYYY') : label}
          </Text>
          <Text>📅</Text>
          {/* <appData.images.calendarIcon /> */}
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={dateType}
          onConfirm={date => handleConfirm(date)}
          onCancel={hideDatePicker}
          {...datePickerProps}
        />
      </View>
    );
  };

  const renderCheckbox = () => {
    return (options as { key: number | string; value: string }[]).map(
      (option, index) => {
        const isSelected = ((value || []) as {
          key: number | string;
          value: string;
        }[]).includes(option);
        return (
          <View
            key={index}
            style={[styles.checkboxContainer, checkboxContainerStyle]}>
            <CheckBox
              disabled={false}
              value={isSelected}
              style={styles.checkboxStyle}
              tintColor={tintColor || appData.colors.appPrimaryColor}
              onTintColor={onTintColor || appData.colors.appPrimaryColor}
              onCheckColor={onCheckColor || appData.colors.appPrimaryColor}
              onFillColor={onFillColor}
              onValueChange={newValue => {
                let temp: { key: number | string; value: string }[] = [];
                temp.push(
                  ...((value || []) as {
                    key: number | string;
                    value: string;
                  }[]),
                );
                if (newValue) {
                  temp.push(option);
                } else {
                  temp = temp.filter(
                    optionFilter => optionFilter.key !== option.key,
                  );
                }
                onUpdate(temp);
              }}
              boxType={'square'}
              onAnimationType={'bounce'}
              offAnimationType={'bounce'}
              lineWidth={1.5}
              animationDuration={0.25}
              {...checkboxProps}
            />
            <Text style={styles.inputTextStyles}>{option.value}</Text>
          </View>
        );
      },
    );
  };

  const renderRadioButton = () => {
    return (
      <View style={[styles.radiobuttonContainer, radiobuttonContainerStyle]}>
        {(options as { key: number | string; value: string }[]).map(
          (option, i) => {
            const isSelected: boolean = value
              ? (value as { key: number | string; value: string }).key ===
                option.key
              : false;
            return (
              <RadioButton labelHorizontal={true} key={i} {...radioButtonProps}>
                <RadioButtonInput
                  obj={{ label: option.value, value: option.key }}
                  index={i}
                  isSelected={isSelected}
                  onPress={_value => {
                    onUpdate(option);
                  }}
                  borderWidth={1}
                  buttonInnerColor={
                    circleColor || appData.colors.appPrimaryColor
                  }
                  buttonOuterColor={
                    circleColor || appData.colors.appPrimaryColor
                  }
                  buttonOuterSize={20}
                  buttonSize={10}
                  buttonStyle={{}}
                  buttonWrapStyle={styles.radioButtonStyle}
                  {...radioButtonInputProps}
                />
                <RadioButtonLabel
                  obj={{ label: option.value, value: option.key }}
                  index={i}
                  labelHorizontal={true}
                  onPress={_value => {
                    onUpdate(option);
                  }}
                  labelStyle={styles.radioLabelTextStyle}
                  labelWrapStyle={styles.radioLabelStyle}
                  {...radioButtonLabelProps}
                />
              </RadioButton>
            );
          },
        )}
      </View>
    );
  };

  return (
    <View style={[styles.mainContainerStyle, mainContainerStyle]}>
      {value || ['checkbox', 'radioButton'].includes(inputType) ? (
        <Text style={styles.headingTextstyle}>{label}</Text>
      ) : null}
      {inputType === 'text'
        ? renderTextInput()
        : inputType === 'drop'
        ? renderDropInput()
        : inputType === 'date'
        ? renderDateInput()
        : inputType === 'checkbox'
        ? renderCheckbox()
        : inputType === 'radioButton'
        ? renderRadioButton()
        : null}
    </View>
  );
};
