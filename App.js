import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Header } from './src/components/index';
import React from 'react';
import StartGame from './src/screens/Start-Game/StartGame';
import { useFonts } from 'expo-font';

export default function App() {
  let[loaded] = useFonts({
    OpenSans : require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansItalic: require("./assets/fonts/OpenSans-Italic.ttf"),
  });
  if(!loaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <Header  title= "SIDECOM" />
       <StartGame /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
