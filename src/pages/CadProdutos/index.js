
  import React from "react";
  import {Image, View, Text} from 'react-native';
  import { Subtitle } from "../Signin/styles";
  import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'
  
  export default function App(){
     return(
        <KeyboardView>
  
          <Container>
          <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>
  
         
            <Input
              placeholderTextColor="#fff"
              
              placeholder="Nome do produto:"
              autocorrect={false}
              onChangeText={()=> {}}
            />
  
          <Input
              placeholderTextColor="#fff"
              placeholder="Descrição do produto:"
              autocorrect={false}
              onChangeText={()=> {}}
            />    
            
            <Input
              placeholderTextColor="#fff"
              placeholder="Preço do produto:"
              secureTextEntry
              autocorrect={false}
              onChangeText={()=> {}}
            />
             <Input
              placeholderTextColor="#fff"
              placeholder="Carregar imagem:"
              secureTextEntry
              autocorrect={false}
              onChangeText={()=> {}}
            />

            
            <ButtonSubmit>
              <TextButton>Cadastrar</TextButton>
            </ButtonSubmit>       
           
        </Container>     
  </KeyboardView>
      
      
      )
  }

        