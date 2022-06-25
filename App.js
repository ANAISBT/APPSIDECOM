import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import Header from "./src/components/header/header";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SidecomNavigator from "./src/navigation/SidecomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  let [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansItalic: require("./assets/fonts/OpenSans-Italic.ttf"),
  });
  if (!loaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <SidecomNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
});
