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

export default function TelaCadastraMetas({ navigation }){
    return(

        <View style={{flex: 1}}>

            <View style={styles.container}>

                <View style={styles.header}>
                    
                    <Text style={styles.text}>Cadastro de Metas</Text>
                
                </View>


                <View style={{marginTop: 40}}>

                    <TextInput 
                        style = {styles.input} 
                        placeholder = "Descrição da Meta"
                    />
                    

                    <TextInput 
                        style = {styles.input}
                        placeholder = "Prazo para Atingir a Meta"
                    />

                </View>

                <View style = {{alignItems: "flex-end"}}>

                    <TouchableOpacity style = {styles.botao} onPress = {() => navigation.goBack()} >

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
    marginVertical: 30,

},

header: {
    alignItems: "center",
}, 


text: {
    color: "black",
    fontWeight: 'bold',
    fontSize: 30,

},

input: {
    borderWidth: 2,
    borderColor: '#4dffdb',
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
},

botao: {
    width: 90,
    height: 50,
    justifyContent: "center",
    backgroundColor:'#4dffdb',
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 8,
}
})