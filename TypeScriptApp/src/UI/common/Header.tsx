import React from 'react';
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppData } from '../../Providers/AppConfig';
import { headerStyles } from './Header.styles';

type HeaderProps = {
  subContainerStyle: ViewStyle;
  onBackpress?: () => void;
  title?: string;
  titleStyle?: TextStyle;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  mainContainerStyle?: ViewStyle;
  backgroundImage?: React.FC;
};

export const Header: React.FC<HeaderProps> = props => {
  const appData = useAppData();
  const styles = headerStyles(appData.colors);
  const {
    subContainerStyle,
    onBackpress,
    title,
    titleStyle,
    subTitle,
    subTitleStyle,
    mainContainerStyle,
    backgroundImage,
  } = props;

  const renderContent = () => {
    return (
      <View style={[styles.subContainerStyle, subContainerStyle]}>
        {onBackpress ? (
          <TouchableOpacity
            onPress={() => {
              if (onBackpress) {
                onBackpress();
              }
            }}
            style={styles.iconContainerStyle}>
            <Text style={[styles.titleStyle, titleStyle]}>ᐸ</Text>
            {/* {<appData.images.backarrow />} */}
          </TouchableOpacity>
        ) : null}
        <View>
          {title ? (
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
          ) : null}
          {subTitle ? (
            <Text style={[styles.subTitleStyle, subTitleStyle]}>
              {subTitle}
            </Text>
          ) : null}
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.mainContainerStyle, mainContainerStyle]}>
      {backgroundImage ? (
        <View>
          <View style={styles.imageContainerStyle}>{backgroundImage}</View>
          {renderContent()}
        </View>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={appData.colors.gradientColor}
          style={styles.gradientContianer}>
          {renderContent()}
        </LinearGradient>
      )}
    </View>
  );
};
