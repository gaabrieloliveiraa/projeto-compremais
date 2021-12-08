import React, { useState } from "react"
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title, Container, Input, ButtonSubmit, TextButton, ButtonText } from './styles'

import { AntDesign } from '@expo/vector-icons';

export default function App() {

  /**
     * Trabalhando com imagens
     */
  const [image, setImage] = useState(null);
  const addImage = () => { };


  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    nome: '',
    descricao: '',
    preco: '',
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

  const styles = StyleSheet.create({
    containerUpload: {
      elevation: 2,
      height: 150,
      width: 150,
      backgroundColor: '#efefef',
      position: 'relative',
      borderRadius: 999,
      overflow: 'hidden',
    },
    uploadBtnContainer: {
      opacity: 0.7,
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '25%',
    },
    uploadBtn: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center'
    }
  });

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

  return (
    <KeyboardView>

      <Container>
        <Image source={require('../../assets/novalogo.png')} style={{ width: 440, height: 70, paddingTop: 40, }} />

        <View style={styles.containerUpload}>
          {
            image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          }
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
              <Text>{image ? 'Edit' : 'Upload'} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Input
          placeholderTextColor="#fff"
          placeholder="Nome do produto:"
          autocorrect={false}
          onChangeText={(nome) => onChangeName(nome)}
          onSubmitEditing={e => { dispatch(addTodo(e.nativeEvent.text)) }}
        />

        <Input
          placeholderTextColor="#fff"
          placeholder="Descrição:"
          autocorrect={false}
          onChangeText={(descricao) => onChangeDescription(descricao)}
          onSubmitEditing={e => { dispatch(addTodo(e.nativeEvent.text)) }}
        />

        <Input
          placeholderTextColor="#fff"
          placeholder="Valor:"

          autocorrect={false}
          onChangeText={(preco) => onChangePreco(preco)}
          onSubmitEditing={e => { dispatch(addTodo(e.nativeEvent.text)) }}
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


  );

}