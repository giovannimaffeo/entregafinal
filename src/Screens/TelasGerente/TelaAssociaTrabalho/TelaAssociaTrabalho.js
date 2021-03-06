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

/*import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';*/

export default function TelaAssociaTrabalho(){
    return(

        <View style={styles.container}>

            <View style={styles.textbox}>
                <Text style={styles.text}>Associação de Projetos aos funcionários</Text>
            </View>

            <View>

                <TextInput 
                    placeholder = "Projeto que você deseja Associar Funcionários"
                />

                <TextInput 
                    placeholder = "Funcionários para Associar (Exemplo: Felipe Silva, Arnaldo Lima, ..., Pedro Costa)"
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
        alignItems: "center",
        fontWeight: 'bold',
        fontSize: 30,
    
    },
    
    textbox: {
        alignItems: "center",
        justifyContent: "center",
    },
    
    textogrande: {
        //colocar wrap
    }
})