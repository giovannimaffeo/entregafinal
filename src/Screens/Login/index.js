import React from 'react';
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';
import {screenWidth, screenHeight} from '../../constants/dimensions';


export default function Login({ navigation }) {
  return (
    
    // View Container//
    <View style={styles.container}>

        {/* TITULO/LOGO */}
        <Image 
            source ={require('../../assets/images/logo.png')}
            style = {styles.logo}/>
        
        {/* CAIXA DE TEXTO USERNAME */}
        <TextInput style={styles.username} placeholder="Digite um username"/>

        {/* CAIXA DE TEXTO SENHA */}
        <TextInput secureTextEntry={true} style={styles.senha} placeholder="Digite uma senha"/>

        {/* BOTÃO DE LOGIN*/}        
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>LOGIN</Text>
        </TouchableOpacity>

        <View>

            <TouchableOpacity style={styles.botao} onPress = {() => navigation.navigate('TelaMenu')}>

                <Text style={styles.botaoTexto}>Gerente</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress = {() => navigation.navigate('TelaFuncionario')} >

                <Text style={styles.botaoTexto}>Funcionário</Text>

            </TouchableOpacity>




        </View>

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