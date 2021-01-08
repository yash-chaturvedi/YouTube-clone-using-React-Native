import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'

import HomeScreen from './src/screens/Home'
import Search from './src/screens/Search';

export default function App() {
  return (
    <View style={{ flex : 1 , marginTop : Constant.statusBarHeight,}} >
      {/* <HomeScreen/> */}
      <Search/>
      <StatusBar style="auto" />
    </View>
  );
}

