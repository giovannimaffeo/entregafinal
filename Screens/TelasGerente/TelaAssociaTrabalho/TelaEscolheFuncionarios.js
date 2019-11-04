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

//import TelaAssociaTarefaMeta from './TelaAssociaTarefaMeta';


export default function TelaEscolheFuncionarios({ navigation }){
    return(

        <View style={{flex: 1}}>
            
            <View style = {styles.container} >

                <View style={styles.header}>
                    <Text style={styles.text}>Adicionar Tarefa</Text>
                </View>

                <View style={{marginTop:40}}>

                    <View style = {styles.input}>

                        <TextInput 
                            placeholder = "Nome ou matrícula do funcionário"
                        />

                    </ View>

                    <View style = {{flexDirection: "row"}}>

                            <TouchableOpacity style= {styles.botao} onPress = { () => navigation.navigate('TelaMenu') }>
                                
                                <Text style={{fontWeight: "bold"}}>Finalizar</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botao} onPress = { () => navigation.goBack() } >

                                <Text style={{fontWeight: "bold"}}>Adicionar mais uma tarefa</Text>

                            </TouchableOpacity>

                    </View>

                </View>

            </ View>
        
        </View>
        

    );
}


const styles = StyleSheet.create({

header: {
    alignItems: "center",
}, 

container: {
    height: 500,
    borderRadius: 25,
    justifyContent: "center",
    marginHorizontal: 60, 
    marginVertical: 30

},

text: {
    color: "black",
    fontWeight: 'bold',
    fontSize: 30,

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


textbox: {
    alignItems: "center",
},

textogrande: {
    //colocar wrap
}

})

/*<TouchableOpacity
                    onPress { () => navigation.navigate("TelaMenu") } >

                    <Text>Confirmar</Text>

                </ TouchableOpacity >

                <TouchableOpacity
                onPress { () => navigation.navigate("TelaAdicionaTarefa") } >

                <Text>Adicionar mais uma tarefa</Text>

                </ TouchableOpacity >
*/