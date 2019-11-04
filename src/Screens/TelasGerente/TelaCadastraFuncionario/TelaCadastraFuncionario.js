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

export default function TelaCadastraFuncionarios(){
    return(

        <View style={styles.container}>

            <View style={styles.textbox}>
                <Text style={styles.text}>Cadastro de Funcionários</Text>
            </View>

            <View>

                <TextInput 
                    placeholder = "Nome Completo do Funcionário"
                />

                <TextInput 
                    placeholder = "Matrícula do Funcionário"
                />

                <TextInput 
                    placeholder = "Função do Funcionário na Empresa"
                />

                <TextInput 
                    placeholder = "Senha do Funcionário"
                />

            </View>

            <View>

                <Button
                    title = "Confirmar"
                    onPress = {() => this.props.navigation.goBack()}
                />

            </View>

        </View>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    );
}

const styles = StyleSheet.create({

    container: {
        margin: 50,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    
    text: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 30,
    
    },
    
    textbox: {
        alignItems: "center",
    },
    
    textogrande: {
        //colocar wrap
    }
})