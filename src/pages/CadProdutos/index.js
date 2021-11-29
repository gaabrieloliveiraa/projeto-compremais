import React from 'react';
import { View, KeyboardAvoidingView, Text, Image, TextInput, Touchable, TouchableOpacity, StyleSheet} from 'react-native';

export default function App(){
   return(
          <KeyboardAvoidingView style={styles.background}>
          <View style={styles.containerLogo}>
            
               <Image  source={require('../../assets/logo.png')}  style={{width: 400, height:90 }}/>  
            

          </View>

          <View style={styles.container}>
            <TextInput
             style={styles.input}
              placeholder="Nome do produto"
              autoCorrect={false}
              onChangeText={()=> {}}
            />

                <TextInput
                style={styles.input}
                placeholder="Descrição do produto"
                autoCorrect={false}
                onChangeText={()=> {}}
              /> 

               <TextInput
                style={styles.input}
                placeholder="Categoria do produto"
                autoCorrect={false}
                onChangeText={()=> {}}
              /> 

              <TextInput
              style={styles.input}
              placeholder="Valor"
              autoCorrect={false}
              onChangeText={()=> {}}
            />

            <TouchableOpacity >
              <Text style={styles.submitText}>Carregar imagem</Text>
            </TouchableOpacity>

           <TouchableOpacity  style={styles.btnSubmit}>
              <Text style={styles.submitText}>Cadastrar</Text>
            </TouchableOpacity>
         

          </View>
          </KeyboardAvoidingView>
        );
      }

      const styles = StyleSheet.create({
        background:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'blue'
        },
        container:{
        //flex:1,
          alignItems:'center',
          justifyContent:'center',
          width:'90%',
        },
        input:{
          backgroundColor:'#fff',
          width:'90%',
          marginBottom:15,
          color: '#222',
          fontSize:17,
          borderRadius: 7,
          padding: 15,
        },
        btnSubmit:{
          backgroundColor:'#35aaff',
          
          width: '90%',
          height: 45,
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 5,
        },
        btnCad:{
          backgroundColor:'#35aaff',
          width: '50%',
          height: 45,
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 5,
        },
        submitText:{
          padding: 10,
          color: '#fff',
          fontSize:18,
        },
        
      })