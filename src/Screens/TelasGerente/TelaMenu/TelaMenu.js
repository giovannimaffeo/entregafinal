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

export default function TelaMenu(){
    return(
  
        <View>

            <View>

            <Text>O que você deseja fazer?</Text>

            </View>

            <View>

                <Button
                    title = 'Cadastrar uma Meta'
                    onPress = {() => this.props.navigation.navigate('TelaCadastraMetas')}
                />

                <Button
                    title = 'Cadastrar Funcionário'
                    onPress = {() => this.props.navigation.navigate('TelaCadastraFuncionario')}
                />

                <Button
                    title = 'Associar Trabalho'
                    onPress = {() => this.props.navigation.navigate('TelaAssociaTrabalho')}
                />

                <Button
                    title = 'Alterar a Evolução de uma Meta'
                    onPress = {() => this.props.navigation.navigate('TelaAlteraEvolucao')}
                />

            </View>

        </View>
    );
}

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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/*import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';*/

export default function TelaMenu(){
    return(
  
        <View style={styles.container}>

            <View>

            <Text style={styles.text}>O que você deseja fazer?</Text>

            </View>

            <View>

                <Button
                    title = 'Cadastrar uma Meta'
                    onPress = {() => this.props.navigation.navigate('TelaCadastraMetas')}
                />

                <Button
                    title = 'Cadastrar Funcionário'
                    onPress = {() => this.props.navigation.navigate('TelaCadastraFuncionario')}
                />

                <Button
                    title = 'Associar Trabalho'
                    onPress = {() => this.props.navigation.navigate('TelaAssociaTrabalho')}
                />

                <Button
                    title = 'Alterar a Evolução de uma Meta'
                    onPress = {() => this.props.navigation.navigate('TelaAlteraEvolucao')}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

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