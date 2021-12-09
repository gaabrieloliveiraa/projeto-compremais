import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title, Container, Input, ButtonSubmit, TextButton } from './styles'

export default function App() {

  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState({
    nome: '',
  });

  const onChangeName = (value) => {
    setCategory({ ...category, nome: value });
  };

  const saveData = () => {
    setLoading(true);
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    fetch('http://10.0.2.2:3000/categorias', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        nome: category.nome,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <KeyboardView>

      <Container>
        <Image source={require('../../assets/novalogo.png')} style={{ width: 440, height: 70, paddingTop: 40, }} />


        <Input
          placeholderTextColor="#fff"
          placeholder="Nome da categoria:"
          autocorrect={false}
          onChangeText={(value) => onChangeName(value)}
          onSubmitEditing = { e => { dispatch(addTodo(e.nativeEvent.text))}}
        />

        <TouchableOpacity onPress={saveData}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius:10 ,height:40 }}>
            <Text style={{ color: 'blue', textAlign: 'center'  }}>
              {loading ? 'Salvando...' : 'Salvar'}
            </Text>
          </View>
        </TouchableOpacity>



      </Container>
    </KeyboardView>

  )
}
