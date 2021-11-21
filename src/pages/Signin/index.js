import React from "react";
import {Image, View, Text,} from 'react-native';
import {KeyboardView, Container, Input, ButtonSubmit, TextButton,Subtitle, Header} from './styles'


function Signin(){
    return(
      
      <KeyboardView>
        
        <Container>      
         <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>
         
        <Input
            placeholderTextColor="#fff"   
            placeholder="Nome:"
            autocorrect={false}
            onChangeText={()=> {}}
          />    
          
          <Input
            placeholderTextColor="#fff"
            placeholder="Senha:"
            secureTextEntry
            autocorrect={false}
            onChangeText={()=> {}}
          />
          

          <ButtonSubmit>
            <TextButton>Entrar</TextButton>
          </ButtonSubmit>

         
      </Container>     
</KeyboardView>
    
    
    )
} 

    export default Signin;