import React from "react";
import { SafeAreaView,StyleSheet,Text,TextInput, View } from "react-native";
import SendButton from "../components/SendButton";
import {Input, Password} from "../components/Input";

const styles = StyleSheet.create({
    
    center:{
        alignItems:"center",
        justifyContent:"center",
        height: "100%"
    }


});

const Login = () => {
    return (
        <SafeAreaView>
            <View
                style = {styles.center}

            >
                <Input placeholder="Login"/>
                <Password placeholder="Senha"/>
                
                
                <SendButton/>
            </View>
            
            
        </SafeAreaView>
    );
}

export default Login;