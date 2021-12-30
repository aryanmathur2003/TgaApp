import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <Text >Testing for React Native</Text>
      <Text style = {styles.loginTop} >Testing changes</Text>
      <StatusBar style="auto" />
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

  loginTop: {
    textAlign: 'left',
    color: '#ff0000',
    marginBottom: 5,
  },


});
