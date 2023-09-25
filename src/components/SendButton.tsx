import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        borderWidth:2,
        width:100,
        padding:10,
        height: 45,
        alignItems:"center",
        backgroundColor: "#17d8ff"
        
    },
    text:{
        color:"#000000",
    }



})

const SendButton = () => {
    return (

        <Pressable
            style = {({pressed}) => [
                styles.button,
                pressed && {opacity: 0.8}
                
            ]}
            >

            {({pressed}) => {
                return(
                    <Text
                        style = {[
                            styles.text,
                            pressed && {color: "white"}
                        ]}
                    >
                        Teste
                    </Text>
                );
            }}
        </Pressable>
    );
}

export default SendButton;