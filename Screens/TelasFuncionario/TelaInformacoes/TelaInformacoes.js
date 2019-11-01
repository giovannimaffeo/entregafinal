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

export default function TelaInformacoes(){
    return(

        <View>

            <View>
                <Text>Nome Completo</Text>
            </View>

            <View>
                <Text>Matrícula</Text>
            </View>

            <View>
                <Text>Trabalho/Projeto</Text>
            </View>

            <View>
                <Text>Meta que está associado</Text>
            </View>

        </View>
    
    );
}

