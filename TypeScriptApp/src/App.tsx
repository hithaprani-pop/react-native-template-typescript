import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { AppProvider } from './Providers/AppConfig';
import { UIProvider } from './Providers/UIProvider';

export const App = () => {
  return (
    <AppProvider>
      <UIProvider>
        <Navigation />
      </UIProvider>
    </AppProvider>
  );
};
