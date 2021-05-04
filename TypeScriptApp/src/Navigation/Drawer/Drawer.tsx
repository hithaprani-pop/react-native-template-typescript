import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export const CustomDrawer = (
  data: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          data.navigation.toggleDrawer();
        }}>
        <Text>close drawer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
