import React from "react";
import {Image, View, Text} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,} from './styles'


function Acount(){
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

        <Input
            placeholderTextColor="#fff"
            placeholder="Email:"
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

            <Input
            placeholderTextColor="#fff"
            placeholder="CPF:"
            secureTextEntry
            autocorrect={false}
            onChangeText={()=> {}}
          />

          <Input
            placeholderTextColor="#fff"
            placeholder="Telefone:"
            secureTextEntry
            autocorrect={false}
            onChangeText={()=> {}}
          />


          <ButtonSubmit>
            <TextButton>Cadastrar</TextButton>
          </ButtonSubmit>

         
      </Container>     
</KeyboardView>
    
    
    )
} 

    export default Acount;