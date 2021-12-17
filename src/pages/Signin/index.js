import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, ViewText, SubmitButton, ButtonText, Button } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { JetContext } from "../../context/menulateral";

function Signin({navigation}) {
  const [Jets, setJets] = useContext(JetContext);
  const endpoint = 'http://10.0.2.2:3000/usuarios?email=';

  
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@login', value)
    } catch (e) {
      // saving error
    }
  }

  const [login, setLogin] = useState({
    email: '',
    senha: '',
  });
  const [validEmail, setValidEmail] = useState(true);
  
  const entrar = () =>{
    navigation.reset({
      index:0,
      routes:[{name:"Home"}]
    })
  }
  
  const handleMessageButtonClick = () => {
    console.log("Simboraaaaaa");
     navigation.reset({
       routes: [{name: 'Acount'}]
     })
  }

  const [data, setData] = useState(null);

  const loadLogin = async () => {
    try {
      const response = await fetch(endpoint + login.email, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then(response => {
          console.log(response[0])
          setData(response[0]);
          if((response[0].email === login.email) && response[0].senha === login.senha){
            console.log('Funfou,segura peão'); 
            storeData(JSON.stringify({success:true}));
            setJets(JSON.stringify({success:true}));
            navigation.navigate("Home");
          } else {
            console.log('Deu pal no excel'); alert("Email ou senha inválidos")
            storeData(JSON.stringify({success:false}));
          }
          if (response[0].email != '' && login.email !=''  && response[0].email !='' && login.senha != '' && validEmail){
          } else {
            console.log('Deu pal no excel'); alert("Existem campo(s) vazios ou inválidos")
          
          }
        });
        console.log(data);
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
    var re = /\S+@\S+\.\S+/;

    if(re.test(email)) {
      setValidEmail(true)
      setLogin({
        ...login,
        email: email
      });
    } else {
      setValidEmail(false);
    }
  };


 

  const onGetSenha = (senha) => {
    setLogin({
      ...login,
      senha: senha
    });
  };


  
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