import React, {useState} from "react"
import {Image, View, Text,TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){
   return(
      <KeyboardView>
        <Container>
        <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>

       
          <Input
            placeholderTextColor="#fff"
            
            placeholder="Selecionar categoria:"
            autocorrect={false}
            onChangeText={()=> {}}
          />
          
          <ButtonSubmit>
            <TextButton>Exibir</TextButton>
          </ButtonSubmit> 
         
      </Container>     
</KeyboardView>
    
    
    )
}

      