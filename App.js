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
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TelaMenu from './Screens/TelasGerente/TelaMenu/TelaMenu'
import TelaAlteraEvolucao from './Screens/TelasGerente/TelaAlteraEvolucao/TelaAlteraEvolucao'
import TelaAssociaTrabalho from './Screens/TelasGerente/TelaAssociaTrabalho/TelaAssociaTrabalho'
import TelaCadastraMetas from './Screens/TelasGerente/TelaCadastraMetas/TelaCadastraMetas'
import TelaCadastraFuncionarios from './Screens/TelasGerente/TelaCadastraFuncionario/TelaCadastraFuncionario'
import TelaAssociaTarefaMeta from './Screens/TelasGerente/TelaAssociaTarefaMeta/TelaAssociaTarefaMeta'
import TelaAdicionaTarefa from './Screens/TelasGerente/TelaAssociaTarefaMeta/TelaAdicionaTarefa'
import TelaEscolheFuncionarios from './Screens/TelasGerente/TelaAssociaTrabalho/TelaEscolheFuncionarios'



import TelaTipoUsuario from './Screens/TelaTipoUsuario/TelaTipoUsuario'

import TelaLogin from './Screens/TelasFuncionario/TelaLogin/TelaLogin'
import TelaInformacoes from './Screens/TelasFuncionario/TelaInformacoes/TelaInformacoes'

const AppNavigator = createStackNavigator (
  {
    TelaMenu: {
      screen: TelaMenu
    },
    TelaCadastraMetas: {
      screen: TelaCadastraMetas
    },
    TelaCadastraFuncionario:{
      screen: TelaCadastraFuncionarios
    },
    TelaAssociaTrabalho:{
      screen: TelaAssociaTrabalho
    },
    TelaTipoUsuario:{
      screen: TelaTipoUsuario
    },
    TelaLogin:{
      screen: TelaLogin
    },
    TelaInformacoes:{
      screen: TelaInformacoes
    },
    TelaAssociaTarefaMeta:{
      screen: TelaAssociaTarefaMeta
    },
    TelaAdicionaTarefa:{
      screen: TelaAdicionaTarefa
    },
    TelaEscolheFuncionarios:{
      screen: TelaEscolheFuncionarios
    },
    
    
    

  
  },
  {
    initialRouteName: 'TelaTipoUsuario'
  },




);

const AppContainer = createAppContainer(AppNavigator);

export default function App(){
  return(

      <AppContainer />



  );
}