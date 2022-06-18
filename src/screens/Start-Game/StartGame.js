import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../../constants/colors";
import React from "react";
import { useFonts } from "expo-font";

const isIOs=Platform.OS=="ios";
export default function StartGame({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior={isIOs ? "position" : "height"} keyboardVerticalOffset={30}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <Text style={styles.title}>Selecciona lo que deseas</Text>
        <View style={styles.inputContainer}>
          <Text>Ositos</Text>
          <Image
            style={styles.image}
            source={require("../../img/dibujos-animados-adorables-ilustraciones-vectoriales-de-osito-peluche-para-niños-y-pequeños-ilustración-vectorial-193557602.jpg")}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Ositos"
                onPress={() => navigation.navigate("Ositos")}
                color="#FFA69E"
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text>Colchones</Text>
          <Image
            style={styles.image}
            source={require("../../img/COLCHÓN-Su-Majestad-v11.png")}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Colchones"
                onPress={() => navigation.navigate("Colchones")}
                color="#FFA69E"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "column",
  },
  keyboard:{
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginVertical: 10,
  },
  ScrollView:{
    flex:1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 200,
    minWidth: 200,
    maxWidth: "90%",
    height: 300,
    alignItems: "center",
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 20,
    borderRadius: 10,
    marginVertical: 20,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  button: {
    marginVertical: 15,
    width: width / 8,
    alignItems: "center",
    paddingVertical: 15,
  },
  image: {
    height: 160,
    width: 150,
    marginTop: 15,
  },
});
