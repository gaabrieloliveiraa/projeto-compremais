import React from "react";
import { View, Text} from 'react-native';
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,} from './styles'


function Acount(){
    return(
      <KeyboardView>

        <Container>
        <Title>Cadastre-se</Title>

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
            placeholder="Cpf:"
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


          <ButtonSubmit>
            <TextButton>Cadastrar</TextButton>
          </ButtonSubmit>

         
      </Container>     
</KeyboardView>
    
    
    )
} 

    export default Acount;