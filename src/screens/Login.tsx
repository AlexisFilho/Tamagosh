import React from "react";
import { SafeAreaView,StyleSheet,Text,TextInput, View, Button } from "react-native";

import SendButton from "../components/SendButton";
import {Input, Password} from "../components/Input";

const styles = StyleSheet.create({
    
    center:{
        alignItems:"center",
        justifyContent:"center",
        height: "100%"
    }


});

const Login = ({ navigation }:any) => {
    return (
        <SafeAreaView>
            <View
                style = {styles.center}

            >
                <Input placeholder="Login"/>
                <Password placeholder="Senha"/>
                
                
                <Button
                    onPress={() => navigation.navigate("Home")}
                    title="Entrar"
                />
            </View>
            
            
        </SafeAreaView>
    );
}

export default Login;