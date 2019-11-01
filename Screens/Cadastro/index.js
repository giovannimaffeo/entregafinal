import React from 'react';
import {Text,StyleSheet,View,Image, TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';


export default function Cadastro() {
  return (
    <View style={styles.container}>
        <Text style={styles.principal}>SISTEMA DE CADASTRO</Text>

        <TextInput style={styles.username} placeholder="Digite um username"/>
        <TextInput secureTextEntry={true} style={styles.senha} placeholder="Digite uma senha"/>
                
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row'}}>
           <CheckBox/>
           <Text>Gerente</Text>
        </View>

       

     
        

    </View>
  );
}

const styles = StyleSheet.create({
    principal: {marginBottom:100,width:300,backgroundColor:'grey',fontSize:30,fontWeight:'bold',borderRadius:3},
    container: {flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'lightgreen'},
    logo: {width:150,height:150,borderRadius:100},
    username: {marginTop:10,width:300,backgroundColor:'grey',fontSize:15,fontWeight:'bold',borderRadius:3},
    senha: {marginTop:10,width:300,backgroundColor:'grey',fontSize:15,fontWeight:'bold',borderRadius:3},
    botao: {width:300,height:42,backgroundColor:'lightblue',marginTop:10,borderRadius:4,alignItems:'center',
    justifyContent:'center'},
    botaoTexto: {fontSize:16,fontWeight:'bold',color:'white'},
    
})