import React, {useState} from "react"
import {Image, View, Text,TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){
   return(
    <KeyboardView>

    <Container>
    <Image source={require('../../assets/novalogo.png')}  style={{width: 440, height: 70, paddingTop: 40,}}/>

    <Subtitle></Subtitle>
      <Input
        placeholderTextColor="#fff"
        placeholder="Nome da categoria:"
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

      