import { Alert, Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import {TextInput, TouchableOpacity} from 'react-native-web';
import react, { useEffect, useRef, useState } from "react";

import Colors from "../../constants/colors";
import { StatusBar } from "expo-status-bar";

const OpenPage = props=> {
    
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.secondary} translucent={true}/>
            <View styles={styles.logo}>
                <Image source={require("../../img/logo_sidecom.png")} style={styles.imgLogo}/>
            </View>
            <MyTexTextInput keyboardType='email-adress' placeholder='E-mail' image='user'/>
            <MyTexTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
            secureTextEntry={hidePassword}
            onPress={()=> setHidePassword(!hidePasword)}/>
            <View style={styles.btnMain}>
                <TouchableOpacity>
                    <Text style={styles.btntxt}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnTransparent}>
                <TouchableOpacity>
                    <Text style={[styles.btntxt, {color:Colors.primary}]}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnTransparent}>
                <TouchableOpacity>
                    <Text style={[styles.txtTransparent, {textDecorationLine: 'underline'}]}>Olvide mi contraseña</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff",
    },
    logo:{
        paddingTop: 50,
        alignItems: 'center',
    },
    imgLogo:{
        height: 250,
        width: 250,
    }
})
export default OpenPage;
