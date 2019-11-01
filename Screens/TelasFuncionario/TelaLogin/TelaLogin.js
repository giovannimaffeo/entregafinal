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

export default function TelaLogin({ navigation }){
    return(

        <View>

            <View>
                <Text>Login do Funcionário</Text>
            </View>

            <View>

                <TextInput 
                    placeholder = "Nome ou Matrícula"
                />

                <TextInput 
                    placeholder = "Senha"
                />
                
            </View>

            <View>

                <Button
                    title = "Confirmar"
                    onPress = {() => navigation.navigate('TelaInformacoes')}
                />

            </View>

        </View>
    
    );
}