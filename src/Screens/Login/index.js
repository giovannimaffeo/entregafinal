import React from 'react';
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';
import {screenWidth, screenHeight} from './src/constants/dimensions';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


export default function Login() {
  return (

    // View Container//
    <View style={styles.container}>

        {/* TITULO/LOGO */}
        <Image 
            source ={require('./src/assets/images/logo.png')}
            style = {styles.logo}/>
        
        {/* CAIXA DE TEXTO USERNAME */}
        <TextInput style={styles.username} placeholder="Digite um username"/>

        {/* CAIXA DE TEXTO SENHA */}
        <TextInput secureTextEntry={true} style={styles.senha} placeholder="Digite uma senha"/>

        {/* BOTÃO DE LOGIN*/}        
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>LOGIN</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    //VIEWS//
    container: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
  
    //TITULO//
    titulo: {
        marginBottom: screenWidth * 0.23,
        width: screenWidth * 0.8,
        backgroundColor:'grey',
        fontSize: screenWidth * 0.08,
        fontWeight:'bold',
        borderRadius: screenWidth * 0.008
    },
    
    //ESTILOS//
    logo: {
        width: screenWidth * 0.4,
        height: screenWidth * 0.4,
        borderRadius: screenWidth * 0.1
    },
    username: {
        marginTop: screenWidth * 0.1,
        width: screenWidth * 0.8,
        backgroundColor:'#80ffe5',
        fontSize: screenWidth * 0.04,
        fontWeight:'bold',
        borderRadius: screenWidth * 0.008
    },
  
    senha: {
        marginTop: screenWidth * 0.027,
        width: screenWidth * 0.8,
        backgroundColor:'#80ffe5',
        fontSize: screenWidth * 0.04,
        fontWeight:'bold',
        borderRadius: screenWidth * 0.008
    },
  
    botao: {
        width: screenWidth * 0.8,
        height: screenWidth * 0.12,
        backgroundColor:'lightgrey',
        marginTop: screenWidth * 0.027,
        borderRadius: screenWidth * 0.011,
        alignItems:'center',
        justifyContent:'center'
    },
  
    botaoTexto: {
        fontSize: screenWidth * 0.043,
        fontWeight:'bold',
        color:'black'
    },
    
  })