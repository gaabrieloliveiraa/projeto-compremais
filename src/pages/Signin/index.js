import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {Image, View, Text, StyleSheet} from 'react-native';
import {KeyboardView, Container, Input, ButtonSubmit, TextButton, ViewText , SubmitButton, ButtonText} from './styles'


function Signin(){

  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'Acount'}]
    })
  }

  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  

  const validar = () => {
    let error = false
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setErrorEmail("Preencha seu e-mail corretamente")
      error = true
  }

  const salvar = () => {
    if(validar()){
      console.log("Salvou")
    }
  }

    return(
      
      <KeyboardView>
        <Container>      
         <Image source={require('../../assets/novalogo.png')}  style={{width: 440, height: 70, paddingTop: 40,}}/>
         

        <Input
            placeholderTextColor="#fff"   
            placeholder="E-mail:"
            autocorrect={false}
            onChangeText={(value)=> {setEmail}}
            keyboardType="email-address"
            errorMessage={errorEmail}
          />    
          
          <Input
            placeholderTextColor="#fff"
            placeholder="Senha:"
            secureTextEntry
            autocorrect={false}
            onChangeText={()=> {}}
         
          />
          
          <ButtonSubmit>
            <TextButton>Login</TextButton>
          </ButtonSubmit>

        <ViewText>
          <Text>Ainda não possui conta ?</Text>
         </ViewText>

          <SubmitButton OnPress={handleMessageButtonClick} >
            <ButtonText>Cadastre-se</ButtonText>
          </SubmitButton>

      </Container>     
</KeyboardView>
    
    
    )
} 

    export default Signin;