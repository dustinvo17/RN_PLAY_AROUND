import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
export default function App() {
  return (
    <View style={styles.container}>
       <Header title="yoooo"/>
       <StartGameScreen/>
    </View>
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
