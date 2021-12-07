  import React, {useState} from "react"
  import {Image, View, Text, TouchableOpacity} from 'react-native';
  import { Subtitle } from "../Signin/styles";
  import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'
  
  export default function App(){

    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({
          nome: '',
          descricao:'',
          preco:'',
        });

        const onChangeName = (nome) => {
          setProduct({
            ...product,
            nome: nome
          });
        };

        const onChangeDescription = (descricao) => {
          setProduct({
            ...product,
            descricao: descricao
          });
        };

        const onChangePreco = (preco) => {
          setProduct({
            ...product,
            preco: preco
          });
        };

        const saveData = () => {
          setLoading(true);
          var headers = new Headers();

          headers.append('Content-Type', 'application/json');

          fetch('http://10.0.2.2:3000/produtos', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
              nome: product.nome, 
              descricao: product.descricao,
              preco: product.preco
              
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
              placeholder="Nome do produto:"
              autocorrect={false}
              onChangeText={(nome) => onChangeName(nome)}
              onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
            />
  
          <Input
              placeholderTextColor="#fff"
              placeholder="Descrição:"
              autocorrect={false}
              onChangeText={(descricao) => onChangeDescription(descricao)}
              onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
            />    
            
            <Input
              placeholderTextColor="#fff"
              placeholder="Valor:"

              autocorrect={false}
              onChangeText={(preco) => onChangePreco(preco)}
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

        