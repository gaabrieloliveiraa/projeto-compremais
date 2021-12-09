import React, {useState} from "react"
import {Image, View, Text, TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){

  const [loading, setLoading] = useState(false);

  const [register, setRegister] = useState({
        nome: '',
        email:'',
        senha:'',
       
      });

      const onChangeName = (nome) => {
        setRegister({
          ...register,
          nome: nome
        });
      };

      const onChangeEmail = (email) => {
        setRegister({
          ...register,
          email: email
        });
      };

      const onChangeSenha = (senha) => {
        setRegister({
          ...register,
          senha: senha
        });
      };

  

      const saveData = () => {
        setLoading(true);
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');

        fetch('http://10.0.2.2:3000/usuarios', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            nome: register.nome, 
            email: register.email,
            senha: register.senha,
            
      
          }),
        })
          .then((response) => {
            setLoading(false)
            response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      };

   return(
      <KeyboardView>

        <Container>
        <Image source={require('../../assets/novalogo.png')}  style={{width: 440, height: 70, paddingTop: 40,}}/>

       
          <Input
            placeholderTextColor="#fff"
            placeholder="Digite seu nome:"
            autocorrect={false}
            onChangeText={(nome) => onChangeName(nome)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />

        <Input
            placeholderTextColor="#fff"
            placeholder="Digite seu e-mail:"
            autocorrect={false}
            onChangeText={(email) => onChangeEmail(email)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />    
          
          <Input
            placeholderTextColor="#fff"
            placeholder="Digite sua senha:"
            
            secureTextEntry
            autocorrect={false}
            onChangeText={(senha) => onChangeSenha(senha)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />
   

          <TouchableOpacity onPress={saveData}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius:10 ,height:40 }}>
          <Text style={{ color: 'blue', textAlign: 'center' }}>
            {loading ? 'Salvando...' : 'Salvar'}
        
       
          </Text>
        </View>
      </TouchableOpacity>
      
         
      </Container>  
     
</KeyboardView>
    
    
    )
}

      