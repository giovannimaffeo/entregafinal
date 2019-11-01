import React from 'react';
import {Text,StyleSheet,View,Image, TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';
import { screenWidth, screenHeight } from './src/constants/dimensions'

export default function TelaFuncionario() {
  return (
    <View style={styles.container}>
        <View style={styles.barra}>
            <Text style={styles.estiloBarra}>MENU DO FUNCIONÁRIO</Text>
        </View>

        <View style={styles.linhas}>
            <Text style={styles.informacao}>NOME:</Text>
            <Text style={styles.informacao}>Leonardo</Text>
            
        </View>

        <View style={styles.linhas}>
            <Text style={styles.informacao}>MATRICULA:</Text>
            <Text style={styles.informacao}>1291289 </Text>
            
        </View>

        <View style={styles.linhas}>
            <Text style={styles.informacao}>META:</Text>
            <Text style={styles.informacao}>Encanar 10 tubos</Text>
            
        </View>

        <View style={styles.linhas}>
            <Text style={styles.informacao}>PRAZO:</Text>
            <Text style={styles.informacao}>10/10</Text>
            
        </View>

        

        

       

     
        

    </View>
  );
}

const styles = StyleSheet.create({

    //divs//
    container: {flex:1,backgroundColor:'lightgreen',flexDirection:'column'},
    estiloBarra: {justifyContent:'center',marginTop: screenHeight*0.03, textAlign:'center',flex:1,flexDirection:'column',fontSize: screenHeight*0.03, fontWeight:'bold'},
    

    //barra menu //
    barra:{height: screenHeight * 0.1, backgroundColor:'lightgrey', justifyContent:'center'},

    //linhas//
    linhas:{ height: screenHeight * 0.225,flexDirection:'row'},



    //estilos//
    informacao: {margin: screenWidth*0.1, textAlign:'center', textAlign:'center', 
    height: screenHeight * 0.05, width: screenWidth * 0.3,
    backgroundColor:'grey',fontSize:15,fontWeight:'bold',borderRadius: screenHeight*0.2},

    
})