import React from 'react';
import {Text,StyleSheet,View,Image, TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';
import { screenWidth, screenHeight } from './src/constants/dimensions'

export default function TelaGerente() {
  return (
    <View style={styles.container}>
        

        {/*Barra Superios*/}
        <View style={{height: screenHeight*0.1,backgroundColor:'lightgrey',borderBottomWidth:1, justifyContent:'center',alignItems:'center'}}>
            <Text>TELA DO GERENTE</Text>
        </View>

        {/*Nome e Matricula*/}
        <View style={{height: screenHeight*0.45,flexDirection:'row'}}>
            <View style={{flexDirection:'column', width: screenWidth*0.5, backgroundColor:'lightgreen', justifyContent:'center',alignItems:'center'}}>
                <Text>NOME</Text>
                <Text>Matricula</Text>
            </View>

            <View style={{width: screenWidth*0.5, backgroundColor:'lightgreen',justifyContent:'center',alignItems:'center'}}>
                <Text>LEO</Text>
                <Text>1292819</Text>
            </View>
        </View>

        {/*Botões e cadastro*/}
        <View style={{height: screenHeight*0.45,flexDirection:'row', backgroundColor:'lightgreen'}}>

            <View style={{flexDirection:'column', width: screenWidth*0.5, backgroundColor:'lightgreen', justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.botaoA}>
                     <Text style={styles.botaoTexto}>MONITORAR METAS</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'column', width: screenWidth*0.5, backgroundColor:'lightgreen', justifyContent:'center',alignItems:'center'}}>
                <TextInput style={styles.senha} placeholder="Digite uma nova meta"/>
                <TouchableOpacity style={styles.botaoB}>
                    <Text style={styles.botaoTexto}>CRIAR CONTA</Text>
                </TouchableOpacity>
            </View>

        </View>

        



        

    </View>


        

        

       

     
        

    
  );
}

const styles = StyleSheet.create({

    //divs//
    container: {flexDirection:'column'},
    estiloBarra: {justifyContent:'center', textAlign:'center',flex:1,flexDirection:'column',fontSize: screenHeight*0.03, fontWeight:'bold'},
    

    //barra menu //
    barra:{height: screenHeight * 0.1,width: screenWidth*1, backgroundColor:'lightgrey', justifyContent:'center'},

    //linhas//
    linhas:{alignSelf:'center', flexDirection:'row'},



    //estilos//
    informacao: { textAlign:'center', textAlign:'center', 
    height: screenHeight * 0.05, width: screenWidth * 0.3,
    backgroundColor:'grey',fontSize:15,fontWeight:'bold',borderRadius: screenHeight*0.2},
    botaoTexto: {fontSize:10,fontWeight:'bold',color:'white'},

    botaoA: {width:screenWidth*0.4,height:42,backgroundColor:'lightblue',marginTop:10,
    borderRadius:screenWidth*0.3,alignItems:'center',
    justifyContent:'center'},

    botaoB: {width:screenWidth*0.4,height:42,backgroundColor:'lightblue',marginTop:10,
    borderRadius:screenWidth*0.3,alignItems:'center',
    justifyContent:'center'},

    
})