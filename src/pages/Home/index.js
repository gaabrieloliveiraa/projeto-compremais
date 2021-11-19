import React from "react";
import { ScrollView} from "react-native";

import { Container,SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta} from './styles';

import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';

import SliderItem from '../../components/SliderItem';

   

  function Home(){
     return(
       
       <Container>
       
       <Header title="Página Inicial" />

        <SearchContainer>
        <Input
        placeholder="Ex: Jogos para PS4"
        placeholderTextColor="#ddd"
            />

         <SearchButton>
            <Feather name="search" size={38} color="#FFF" />
            </SearchButton>
        </SearchContainer>

        <ScrollView>
          <Title>Em Destaque</Title>

          <BannerButton>
            <Banner
            resizeMethod="resize"
              source={{ uri: 'https://images.unsplash.com/photo-1633704797971-eacd062c9d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'}}
              />
          </BannerButton>

          <SliderOferta
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5]}
            renderItem={ ({ item }) => <SliderItem /> }
            />

      <Title>Eletrodomésticos</Title>
      <SliderOferta   
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5]}
            renderItem={({ item })=> <SliderItem/>}
            />

      <Title>SuperMercado</Title>
      <SliderOferta   
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5]}
            renderItem={({ item })=> <SliderItem/>}
            />

      <Title>Games e Pc Gamer</Title>
      <SliderOferta   
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[1,2,3,4,5]}
            renderItem={({ item })=> <SliderItem/>}
            /> 

        </ScrollView>


      </Container>

     )
  }

  export default Home;