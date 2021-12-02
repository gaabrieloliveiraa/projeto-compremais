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
        cpf:'',
        telefone:'',
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

      const onChangeCpf = (cpf) => {
          setRegister({
            ...register,
            cpf: cpf
          });
        };

        const onChangeTefone = (telefone) => {
          setRegister({
            ...register,
            telefone: telefone
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
            cpf: register.cpf,
            telefone: register.telefone
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
        <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>

       
          <Input
            placeholderTextColor="#fff"
            placeholder="Nome:"
            autocorrect={false}
            onChangeText={(nome) => onChangeName(nome)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />

        <Input
            placeholderTextColor="#fff"
            placeholder="E-mail:"
            autocorrect={false}
            onChangeText={(email) => onChangeEmail(email)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />    
          
          <Input
            placeholderTextColor="#fff"
            placeholder="Senha:"
            
            secureTextEntry
            autocorrect={false}
            onChangeText={(senha) => onChangeSenha(senha)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />
           
           <Input
            placeholderTextColor="#fff"
            placeholder="CPF:"

            autocorrect={false}
            onChangeText={(cpf) => onChangeCpf(cpf)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />

<Input
            placeholderTextColor="#fff"
            placeholder="Telefone:"

            autocorrect={false}
            onChangeText={(telefone) => onChangeTefone(telefone)}
            onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
          />

          <TouchableOpacity onPress={saveData}>
          <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Text>
        </View>
      </TouchableOpacity>
    
         
      </Container>     
</KeyboardView>
    
    
    )
}

      