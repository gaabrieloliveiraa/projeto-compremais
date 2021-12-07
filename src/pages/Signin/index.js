import React from "react";
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

    return(
      
      <KeyboardView>
        <Container>      
         <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>
         

        <Input
            placeholderTextColor="#fff"   
            placeholder="E-mail:"
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