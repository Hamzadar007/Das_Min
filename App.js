import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator  from './navigation/MainNavigator';
import AppLoading from 'expo-app-loading';
import fonts from './assets/fonts'
import * as Font from 'expo-font';



export default function App() {

// const fetchFont=()=>{

// return Font.loadAsync({
  
// })

// }


  return (
  <MainNavigator></MainNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
