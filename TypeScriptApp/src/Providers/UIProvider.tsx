import React, { createContext, useContext, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useAppData } from './AppConfig';
import { uiProviderStyles } from './UIProvider.styles';

export type UIContextProps = {
  loading: boolean;
  setShowLoading: (_value: boolean, _message: string) => void;
};

export const UIContext = createContext({
  loading: false,
  setShowLoading: (_value: boolean, _message = '') => {},
});

export const UIProvider: React.FC = props => {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const appData = useAppData();
  const styles = uiProviderStyles(appData.colors);

  const renderSpinner = () => {
    return (
      <View style={styles.spinnerView}>
        <ActivityIndicator size={'large'} color={appData.colors.SpinnerColor} />
        {loadingMessage ? (
          <Text style={styles.messageStyle}>{loadingMessage}</Text>
        ) : null}
      </View>
    );
  };

  return (
    <UIContext.Provider
      value={{
        loading: showLoading,
        setShowLoading: (value, message = '') => {
          setShowLoading(value);
          setLoadingMessage(message || '');
        },
      }}>
      {showLoading ? renderSpinner() : null}
      {props.children}
    </UIContext.Provider>
  );
};

export const useUIElements = () => useContext(UIContext);
