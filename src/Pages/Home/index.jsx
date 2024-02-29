import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Home (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Home</Text>
            <Text style={styles.subText}>Aqui eu vou adicionar mais texto para que a área de leitura seja maior. Ou, pelo menos, para testar o quanto ficaria maneiro ter <Text style={styles.bold}>algo a mais para ler</Text>, do que apenas um título magrelo e solitário.</Text>
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
        color: "#f64348",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 30,
    },
    subText:{
        fontSize: 18,
        fontWeight:"normal",
        marginLeft: 15,
        marginRight: 15,
        // paddingBottom: 10,
        padding: 50,
        textAlign:"justify",
        
    },
     bold: {
        color: "#065425",
        fontWeight: "bold",
     }
})