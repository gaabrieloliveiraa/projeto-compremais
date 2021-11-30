import React, { useEffect, useState } from "react";
import { RefreshControl, ActivityIndicator, FlatList, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Container, BannerItem, RateContainer, PromoList, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta, Rate } from './styles';


function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  /**
   * Atualizando a tela utilizando o component RefreshControl
   * Basta arrastar a tela para baixo, como fazemos nos apps geralmente, para atualizar a tela
   */
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
        
        getProducts();
        
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }
  , [refreshing]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/produtos', {
        method: 'GET'})
        .then((response) => response.json());
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  

  return (
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
  );
}
export default Home;