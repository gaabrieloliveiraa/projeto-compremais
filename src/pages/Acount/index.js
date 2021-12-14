import React, {useState} from "react"
import {Image, View, Text, TouchableOpacity, ToastAndroid, Alert} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){

 
  const [loading, setLoading] = useState(false);

  const [register, setRegister] = useState({
        nome: '',
        email:'',
        senha:'',
       
      });
      const [validEmail, setValidEmail] = useState(true);

      const onChangeName = (nome) => {
        setRegister({
          ...register,
          nome: nome
        });
      };

      const onChangeEmail = (email) => {
        var re = /\S+@\S+\.\S+/;

        if(re.test(email)) {
          setValidEmail(true)
          setRegister({
            ...register,
            email: email
          });
        } else {
          setValidEmail(false);
        }
      };

      const onChangeSenha = (senha) => {
        setRegister({
          ...register,
          senha: senha
        });
      };

  

      const saveData = () => {
          if(register.email != '' && register.nome != '' && register.senha != '' && validEmail) {
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
          } else {
            Alert.alert(
              "Aviso.",
              "Existem campo(s) vazio ou estão inválidos.",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        
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

{!validEmail && <Text style={{color: "red", marginBottom: 10}}>E-mail inválido.</Text> }
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

      