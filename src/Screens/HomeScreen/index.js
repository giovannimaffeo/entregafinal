import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet, Alert,Image} from 'react-native';
import {screenWidth, screenHeight} from '../../constants/dimensions';

import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {
    return (

        
            // Container //
            <View style={styles.container}>

                {/* View do Titulo */}
                <View style = {styles.viewTitulo}>
                    <Text style = {styles.tituloTexto}> BEM-VINDO </Text>
                            
                </View>

                {/* View Da Imagem */}
                <View style = {styles.viewImagens}>
                    <Image 
                    source ={require('../../assets/images/logo.png')}
                    style = {styles.logo}
                    />
                    <Text> TUBOS S.A</Text>
                </View>

                {/* View dos Botões */}
                <View style = {styles.viewBotoes}>
                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => navigation.navigate('Login') } >
                        <Text style={styles.botaoTexto}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => navigation.navigate('Cadastro') } >
                        <Text style={styles.botaoTexto}>CADASTRAR</Text>
                    </TouchableOpacity> 
                </View>
                
                
            </View>

        

)};
const styles = StyleSheet.create({

    //VIEWS//
    container: {
        flexDirection:'column',
        flex: 1,
        //borderWidth: screenHeight * 0.02
    },

    viewTitulo: {
        height: screenHeight*0.2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    viewImagens: {
        marginTop: screenHeight * 0.09,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    viewBotoes: {
        marginTop: screenHeight * 0.12,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    //ESTILOS//

    tituloTexto: {
        fontSize: screenWidth * 0.1,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        
    },

    logo: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.5,
        borderRadius: screenWidth * 0.01
    },

    

    
    botaoTexto: {
        fontSize: screenWidth * 0.05,
        fontWeight:'bold',
        color:'black',
        textAlign:'center'

    },


    botao: {
        width: screenWidth * 0.4,
        height: screenHeight*0.1,
        backgroundColor:'#4dffdb',
        borderRadius: screenHeight*0.1,
        alignItems:'center',
        justifyContent:'center',
        padding: screenHeight * 0.01,
    },


})       
    

export default HomeScreen;
