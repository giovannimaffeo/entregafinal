
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
  Image,
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
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TelaMenu({ navigation }){
    return(

        <View style={{flex: 1, backgroundColor: "#b3ffe7"}}>
  
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.text}>O que você deseja fazer?</Text>

                </View>

                <View style={{ marginTop: 40, justifyContent: "center" }}>

                    <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('TelaCadastraMetas')} >
                        
                        <Text style={styles.textobotao}>Cadastrar Meta</Text>
                    
                    </TouchableOpacity>
                    

                    <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('TelaAssociaTarefaMeta')} >
                        
                        <Text style={styles.textobotao}>Adicionar Tarefas a uma Meta</Text>
                    
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('TelaCadastraFuncionario')} >
                        
                        <Text style={styles.textobotao}>Cadastrar Funcionário</Text>
                        
                    </TouchableOpacity>
                    

                    <TouchableOpacity style = {styles.botao} onPress = {() => navigation.navigate('TelaAssociaTrabalho')} >
                        
                        <Text style={styles.textobotao}>Adicionar Funcionários à Tarefa</Text>
                        
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
        fontSize: 23,
    
    },
    
    botao: {
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        backgroundColor: "#33ffbb",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 5,
    },

    textobotao: {
        fontSize: 15,
    }
})