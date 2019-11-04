import React from 'react';
import {Text,StyleSheet,View,Image,TextInput,TouchableOpacity,ScrollView,Alert,Button} from 'react-native';
import {screenWidth, screenHeight} from '../../constants/dimensions';


export default function Funcionario() {
  return (

    // View Container//
    <View style={styles.container}>
        
        {/* View Titulo */}
        <View style={styles.viewTitulo}>
            <Text style = {styles.textoTitulo}>TELA DO FUNCIONÁRIO</Text> 
        </View>

        {/* View Box */}
        <View style = {styles.viewBox}>

            {/* View NOME*/}
            <View style = {styles.viewNomeMatricula}>

                {/* View INFORMACAO */}
                <View style = {styles.viewInformacao}>
                    <Text style = {styles.textoBox}>NOME</Text>
                </View>
                
                {/* View DADOS */}
                <View style = {styles.viewDados}>
                    <Text>Leonardo Lombardi</Text>
                </View>
                
            </View>
            
            {/* View MATRICULA */}
            <View style = {styles.viewNomeMatricula}>

                {/* View INFORMACAO */}
                <View style = {styles.viewInformacao}>
                    <Text style = {styles.textoBox}>MATRICULA</Text>
                </View>
                
                {/* View DADOS */}
                <View style = {styles.viewDados}>
                    <Text>3563</Text>
                </View>
            </View>

            {/* View METAS*/}
            <View style = {styles.viewMetas}>

                {/* View INFORMACAO */}
                <View style = {styles.viewInformacao}>
                    <Text style = {styles.textoBox}>METAS</Text>
                </View>
                
                {/* View DADOS */}
                <View style = {styles.viewDados}>
                    <ScrollView>
                        <TouchableOpacity 
                        style = {styles.botaoMeta} 
                        onPress={() => Alert.alert('Printar tarefas correspondentes abaixo')}>  
                            <Text>Meta 1</Text>                  
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style = {styles.botaoMeta} 
                        onPress={() => Alert.alert('Printar tarefas correspondentes abaixo')}>  
                            <Text>Meta 2</Text>                  
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style = {styles.botaoMeta} 
                        onPress={() => Alert.alert('Printar tarefas correspondentes abaixo')}>  
                            <Text>Meta 3</Text>                  
                        </TouchableOpacity>


                    </ScrollView>
                    
                </View>
            </View>

            {/* View TAREFAS*/}
            <View style = {styles.viewTarefas}>

                {/* View INFORMACAO */}
                <View style = {styles.viewInformacao}>
                    <Text style = {styles.textoBox}>TAREFAS</Text>
                </View>
                
                {/* View DADOS */}
                <View style = {styles.viewDados}>
                    <ScrollView>
                        <Text>Comprar 10 tubos</Text>
                        <Text>Pintar 20 tubos</Text>
                    
                    </ScrollView>
                    <Text>Prazo: 24/10</Text>
                    
                </View>
            </View>

            


            
        </View>

        

    </View>
  );
}

const styles = StyleSheet.create({
    //VIEWS//
    container: {
        flex:1, 
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor:'#b3fff0',
    },

    viewTitulo: {
        backgroundColor:'#1affd1',
        height: screenHeight*0.1,
        width: screenWidth*0.8,
        borderRadius: screenHeight*0.1,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: screenHeight*0.05,
        borderWidth: screenHeight*0.001,
        borderColor: 'blue'
    },

    viewBox: {
        backgroundColor:'#80ffe5',
        height: screenHeight*0.5,
        width: screenWidth*0.8,
        marginTop: screenHeight*0.1,
        borderWidth: screenHeight*0.001,
        borderColor: 'blue',
    },

    viewNomeMatricula: {
        flexDirection: 'row',
        height: '15%',
        borderBottomWidth: screenHeight*0.001,
        borderColor: 'blue'
    },

    viewInformacao: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: screenHeight*0.001,
        borderColor: 'blue'
    },

    viewDados: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: screenHeight * 0.01,
    },

    viewMetas: {
        flexDirection: 'row',
        height: '25%',
        borderBottomWidth: screenHeight*0.001,
        borderColor: 'blue'
    },

    viewTarefas: {
        flexDirection: 'row',
        height: '45%',

    },

    //ESTILOS//

    textoTitulo: {
        textAlign:'center',
        fontSize: screenHeight*0.04
    },

    textoBox: {
        fontWeight: 'bold',
        fontSize: screenHeight * 0.03,
        margin: screenHeight * 0.03
    },

    botaoMeta: {
        width: screenWidth * 0.3,
        alignSelf:'center',
        backgroundColor: '#ccfff5',
        borderRadius: screenHeight*0.5,
        alignItems: 'center',
        marginTop: '5%'
    }



 
   
    
});