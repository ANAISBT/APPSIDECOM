import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import ColchonesPage from './src/screens/ColchonesPage/ColchonesPage';
import  Header from './src/components/header/header';
import { NavigationContainer } from '@react-navigation/native';
import OsitosPage from './src/screens/OsitosPage/OsitosPages';
import React from 'react';
import StartGame from './src/screens/Start-Game/StartGame';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

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
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
    name="StartGame"
    component={StartGame}
    options={{title: "WELCOME"}}/>
    <Stack.Screen
    name="Ositos"
    component={OsitosPage}
    options={{title: "Ositos Page"}}/>
    <Stack.Screen
    name="Colchones"
    component={ColchonesPage}
    options={{title: "Colchones Page"}}/>
  </Stack.Navigator>
</NavigationContainer>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
