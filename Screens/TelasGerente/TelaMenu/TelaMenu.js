
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
  TouchableOpacity
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

import {screenWidth, screenHeight} from '../../../src/constants/dimensions';



export default function TelaMenu({ navigation }){
    return(

        <View style={{flex: 1}}>
  
            <View style={styles.container}>

                <View style={styles.header}>

                    <Text style={styles.text}>O que você deseja fazer?</Text>

                </View>

                <View style={{ marginTop: 40, justifyContent: "center" }}>

                    <View style={styles.icones}>
                        
                        <Image source ={require('../../../src/assets/icones/Alvo.png')} />
                        <Image source ={require('../../../src/assets/icones/gravata.png')} />
                        <Image source ={require('../../../src/assets/icones/maleta.png')} />
                        <Image source ={require('../../../src/assets/icones/pessoaTerno.png')} />
                       





                    </View>


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

    icones:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

    },

    container: {
        height: screenHeight*0.73,
        borderRadius: 25,
        justifyContent: "center",
        marginHorizontal: 60,
        marginVertical: screenHeight*0.06,

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
        height: screenHeight*0.073,
        justifyContent: "center",
        backgroundColor:'#4dffdb',
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 5,
    },

    textobotao: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})