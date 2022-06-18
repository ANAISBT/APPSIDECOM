import ColchonesPage from "../screens/ColchonesPage/ColchonesPage";
import OsitosPage from "../screens/OsitosPage/OsitosPages";
import React from "react";
import StartGame from "../screens/Start-Game/StartGame";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();//iniciar el Stack

const SidecomNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='StartGame'>
            {/* dentro del stack */}
            <Stack.Screen
    name="StartGame"
    component={StartGame}
    />
    <Stack.Screen
    name="Ositos"
    component={OsitosPage}
    />
    <Stack.Screen
    name="Colchones"
    component={ColchonesPage}
    />
  </Stack.Navigator>
    )
}
export default SidecomNavigator;

