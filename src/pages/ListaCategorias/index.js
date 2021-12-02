import React, {useState} from "react"
import {Image, View, Text,TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){
   return(
    <KeyboardView>

    <Container>
    <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>

    <Subtitle>Crie sua conta grátis</Subtitle>
      <Input
        placeholderTextColor="#fff"
        
        placeholder="Nome:"
        autocorrect={false}
        onChangeText={()=> {}}
      />

    </Container>
         
   
</KeyboardView>
    
    
    )
}

      