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

import { createAppContainer, createStackNavigator } from 'react-navigation';
import TelaMenu from './src/Screens/TelasGerente/TelaMenu/TelaMenu';
import TelaCadastraMetas from '/src/Screens/TelasGerente/TelaCadastraMetas/TelaCadastraMetas';

const AppNavigator = createStackNavigator (
  {
    Home: {
      screen: TelaMenu
    },
    Page2: {
      screen: TelaCadastraMetas
    },

  }


);

const AppContainer = createAppContainer(AppNavigator);

export default function App(){
  return(

      <AppContainer />



  );
}