import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';


function Ofertas(){
  /**
   * tela adaptada para efetuar o cadastro de produto
   * basta clicar no botão para enviar o produto
   * tem que colocar os campos nela e fazer a referência dos campos para enviar os dados
   * 
   */
const getDataUsingPost = () => {

  /**
   * dados inseridos manualmente para envio
   */
  var dataToSend =  {
    "nome": "Simbora",
    "descricao": "Begoço baum da gota",
    "preco": 10.0,
    "categoria_id": 2
  };  
  
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  //POST request
  fetch('http://10.0.2.2:3000/produtos', {
    method: 'POST', //Request Type
    body: formBody, //post body
    headers: {
      //Header Defination
      'Content-Type': 
        'application/x-www-form-urlencoded;charset=UTF-8',
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
};
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          {/*Running POST Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingPost}>
            <Text style={styles.textStyle}>
              Mandando a bagaça
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
      /*
      <View>
          <Text>TELA DE OFERTAS</Text>
      </View>
      */
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      padding: 20,
    },
    textStyle: {
      fontSize: 18,
      color: 'white',
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#f4511e',
      padding: 10,
      marginVertical: 10,
    },
  });

export default Ofertas;