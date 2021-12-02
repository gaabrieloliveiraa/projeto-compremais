import React, {useState} from "react"
import {Image, View, Text, TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,} from './styles'


function Acount(){

    

    const [loading, setLoading] = useState(false);

    const [register, setRegister] = useState({
          nome: '',
          email:'',
          senha:'',
          cpf:'',
          telefone:'',
        });

        const onChangeName = (value) => {
          setRegister({ ...register, nome, email, senha, cpf, telefone: value });
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
              cpf:register.cpf,
              telefone:register.telefone
              
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

    export default Acount;