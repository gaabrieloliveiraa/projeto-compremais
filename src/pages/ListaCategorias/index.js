import React, {useState} from "react"
import {Image, View, Text,TouchableOpacity} from 'react-native';
import { Subtitle } from "../Signin/styles";
import { KeyboardView, Title , Container, Input, ButtonSubmit, TextButton,ButtonText } from './styles'

export default function App(){
   return(
      <KeyboardView>
        <Container>
        <Image source={require('../../assets/logo.png')}  style={{width: 400, height: 70, paddingTop: 40,}}/>

        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <>
                <Title numberOfLines={1}>{item.nome}</Title>
                <Text>{item.descricao}</Text>
                <Text>{item.preco}</Text>
              </>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </Container>
         
   
</KeyboardView>
    
    
    )
}

      