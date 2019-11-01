import React from 'react';
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,Alert} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.principal}>SISTEMA DE CADASTRO</Text>

        <View style={styles.botoes}>
            <TouchableOpacity>
                <Text style={styles.secundario}>BOTOES</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.secundario}>BOTOES</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.principal}>IMAGEM</Text>
        

    </View>
  );
}

const styles = StyleSheet.create({
    //divs//
    container: {flexDirection:'column', flex:1,alignItems:'center',backgroundColor:'lightgreen'},
    botoes: {flexDirection:'row',marginTop:50, },

    //estilos//
    principal: {marginTop:10,width:'80%',backgroundColor:'grey',fontSize:20,fontWeight:'bold',alignItems:'center'},
    secundario: {marginTop:10,width:'40%',backgroundColor:'grey',fontSize:10,fontWeight:'bold',alignItems:'center'},
    
    
})