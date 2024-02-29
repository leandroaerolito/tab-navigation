import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Settings (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Settings</Text>
            <Text style={styles.subText}>Aqui você não vai encontrar nada além de um texto simples para reter a sua atenção. Mas, se leu até aqui, é um bom sinal de que a aplicação está <Text style={styles.bold}>agradavelmente interessante</Text>. Os estudos não param meu caro amigo!</Text>
        </View>
    );
}



const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },

    text:{
        color: "#008b8b",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 30,
    },
    subText:{
        fontSize: 18,
        fontWeight:"normal",
        marginLeft: 15,
        marginRight: 15,
        padding: 50,
        textAlign:"justify",
        
    },
     bold: {
        color: "#6495ed",
        fontWeight: "bold",
     }
})