
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
  SectionList,
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

const DATA = [
    {
      descricao: 'Aumentar a produtividade',
      data: ['Comprar mais máquinas', 'Otimizar o Tempo'],
      prazo: '3 meses'
    },
    {
      descricao: 'Melhorar processos',
      data: ['Estudar outras indústrias'],
      prazo: '2 meses'
    },
    {
      descricao: 'Reduzir gastos com energia',
      data: ['Comprar placas fotovoltáicas', 'Trocar por LED', 'Seguir o manual de boas práticas'],
      prazo: 'sem prazo'
    },
  ];


export default function TelaAssociaTrabalho({ navigation }){
    return(

      <View style={{flex: 1}}>
        
        <SectionList

            sections = {DATA}

            keyExtractor = { (item, index ) => item + index }
        
            renderItem = { ({ item }) => <View style={{marginHorizontal: 60, marginTop: 10}}><Button color="#4dffdb" title = {item} onPress = {() => navigation.navigate('TelaEscolheFuncionarios')}/></View> }

            renderSectionHeader = { ({ section: { descricao } }) => <View style={styles.header}><Text style={{fontSize: 25, color: "black", fontWeight: "bold"}} >{ descricao }</Text></View> }

        />

      </View> 
    
    );
}


const styles = StyleSheet.create({

  header: {
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 25,
    
  
}, 

  bordaBotao: {
    backgroundColor: "#33ffbb",
  },

  text: {
    color: "black",
    fontWeight: 'bold',
    fontSize: 20,

},

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