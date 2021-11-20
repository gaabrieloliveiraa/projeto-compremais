import React from "react";
import { Image, View, Text } from 'react-native';
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,Subtitle, Header} from './styles'


function Signin(){
    return(
      <KeyboardView>
        <Container>
        <Image source={require('../../assets/env.png')} />
         {/* <Title >Entrar em minha conta</Title> */}
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