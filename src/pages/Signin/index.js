import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, ViewText, SubmitButton, ButtonText, Button } from './styles'


function Signin() {

  const endpoint = 'http://10.0.2.2:3000/usuarios?email=';

  const [login, setLogin] = useState({
    email: '',
    senha: '',
  });

  const handleMessageButtonClick = () => {
    console.log("Simboraaaaaa");
    // navigation.reset({
    //   routes: [{name: 'Acount'}]
    // })
  }

  const [data, setData] = useState(null);

  const loadLogin = async () => {
    try {
      const response = await fetch(endpoint + login.email, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then(response => {
          setData(response[0]);
        });
        console.log(data);
        if(data.email === login.email && data.senha === login.senha){
          console.log('Funfou')
        } else {
          console.log('Deu pal no excel');
        }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  const onGetEmail = (email) => {
    setLogin({
      ...login,
      email: email
    });
  };

  const onGetSenha = (senha) => {
    setLogin({
      ...login,
      senha: senha
    });
  };


  const validar = () => {
    let error = false
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setErrorEmail("Preencha seu e-mail corretamente")
    error = true
  }

  const salvar = () => {
    if (validar()) {
      console.log("Salvou")
    }
  }

  return (

    <KeyboardView>
      <Container>
        <Image source={require('../../assets/novalogo.png')} style={{ width: 500, height: 120, paddingTop: 40, }} />


        <Input
          placeholderTextColor="#fff"
          placeholder="E-mail:"
          autocorrect={false}
          onChangeText={(email) => onGetEmail(email)}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Senha:"
          secureTextEntry
          autocorrect={false}
          onChangeText={(senha) => onGetSenha(senha)}

        />

        <ButtonSubmit onPress={loadLogin} >
          <TextButton>Login</TextButton>
        </ButtonSubmit>

        <ViewText>
          <Text>Ainda não possui conta ?</Text>
        </ViewText>

        <SubmitButton onPress={handleMessageButtonClick} >
          <ButtonText>Cadastre-se</ButtonText>
        </SubmitButton>
      </Container>
    </KeyboardView>


  )
}

export default Signin;