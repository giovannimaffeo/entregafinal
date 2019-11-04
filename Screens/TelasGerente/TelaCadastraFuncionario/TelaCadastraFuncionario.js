/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button, 
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function TelaAssociaTrabalho({ navigation }){
    return(

        <View style={{flex: 1}}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.text}>Cadastro de Funcionários</Text>

                </View>

                <View style={{marginTop: 40}}>

                    <TextInput 
                        placeholder = "Nome Completo do Funcionário"
                        style = {styles.input}
                    />

                    <TextInput
                        style = {styles.input} 
                        placeholder = "Matrícula do Funcionário"
                    />

                    <TextInput 
                        style = {styles.input}
                        placeholder = "Função na Empresa do Funcionário"
                    />

                </View>

                <View style={{marginTop: 5, alignItems: "flex-end"}}>

                    <TouchableOpacity onPress = {() => navigation.goBack()} style={styles.botao} >

                        <Text style={{fontWeight: "bold"}}>Confirmar</Text>
    
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    
    );
}


const styles = StyleSheet.create({

    container: {
        height: 500,
        borderRadius: 25,
        justifyContent: "center",
        marginHorizontal: 60, 
        marginVertical: 30
    },

    header: {
        alignItems: "center",
    }, 
    
    text: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 25,
    
    },
    
    textbox: {
        alignItems: "center",
    },

    input: {
    
        borderWidth: 2,
        borderColor: "#4dffdb",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 5,
        
    },

    botao: {
    
        padding:20,
        height: 50,
        justifyContent: "center",
        backgroundColor: "#4dffdb",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 5,
    
    },
    
    textogrande: {
        //colocar wrap
    }
})
