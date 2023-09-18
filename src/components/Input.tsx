import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


const styles = StyleSheet.create({
    input:{
        height: 35,
        width:250,
        borderRadius:5,
        borderWidth:2,
        padding:10,
        margin:10
    },
})


type InputProps = {
    placeholder: string
}



const Input = ({placeholder}:InputProps) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
            >
            </TextInput>
        </View>
    );
};

const Password = ({placeholder}:InputProps) =>{
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={true}
            >
            </TextInput>
        </View>
    );
};

export {Input, Password};
