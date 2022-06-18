import { Button, Dimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import Colors from "../../constants/colors";

const OsitosPage = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectNumber] = useState("");

  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const handlerResetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setSelectNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedOutput
  if(confirmed) {
    confirmedOutput = (
        <View style={styles.inputContainer}>
            <Text>Tu compra es de: </Text>
            <View style={styles.container}>
                <Text style={styles.Number}>{selectedNumber}</Text>
            </View>
            <Text>OSITOS</Text>
        </View>
    )
  }
  const isIOs=Platform.OS=="ios";
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior={isIOs ? "position" : "height"} keyboardVerticalOffset={30}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.title}> COMPRANDO </Text>
        <View style={styles.inputContainer}>
          <Text> Escriba la cantidad que desea comprar</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handlerInputNumber}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Borrar"
                onPress={handlerResetInput}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                onPress={handlerConfirmInput}
                color={Colors.primary}
              />
            </View>
          </View>
        </View>
        {confirmedOutput}
      </ScrollView>
      </KeyboardAvoidingView>
  );
};
export default OsitosPage;
const {width,height} =Dimensions.get("window");
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor:Colors.white,
  },
  title: {
    fontSize: 20,
    marginVertical: 30,
  },
  button: {
    width: 100,
  },
  inputContainer: {
    width: width/1.5,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: height>600 ? 10:5,
  },
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 28,
    marginTop: 20,
  },
  container:{
    borderWidth: 2,
    borderColor: Colors.primary,
    padding:10,
    borderRadius: 10,
    marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Number:{
    color: Colors.secondary,
    fontSize: 22,
  }
});
