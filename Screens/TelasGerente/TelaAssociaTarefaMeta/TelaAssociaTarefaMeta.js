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
  FlatList,
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


const DATA = 

    [
    {
        descricao: "Aumentar a produtividade",
        prazo: "3 meses"
    },

    
    {
        descricao: "Melhorar processos",
        prazo: "1 mês"
    },

    
    {
        descricao: "Reduzir gastos com energia",
        prazo: "4 meses"
    },
];




export default function TelaCadastraMetas({ navigation }){
    return(

        <View style={styles.container}>

            <View style={{marginTop: 20}}>

                <FlatList

                    data = {DATA}

                    renderItem = { ({item}) =>  <TouchableOpacity onPress = { () => navigation.navigate('TelaAdicionaTarefa') } style = {styles.botao} ><Text style={{fontWeight: "bold"}}>{item.descricao}</Text></TouchableOpacity> }

                    keyExtractor = { (item, index ) => index }

                />

            </View>
        
        </View>
    
    );
}


const styles = StyleSheet.create({

container: {
    flex: 1,
    borderColor: "black",
    
},

botao: {
        
    height: 50,
    justifyContent: "center",
    backgroundColor: "#4dffdb",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 5,
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