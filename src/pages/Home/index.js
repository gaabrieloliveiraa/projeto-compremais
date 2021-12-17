import React, { useEffect, useState, navigate } from "react";
import { RefreshControl, ActivityIndicator, FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Container, BannerItem, RateContainer, PromoList, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta, Rate } from './styles';

import DetalheProduto from '../../pages/DetalheProduto';


function Home({ navigation: { navigate } }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  /**
   * Trabalhando com imagens
   */
  const [image, setImage] = useState(null);
  const addImage = () => { };

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
        method: 'GET'
      })
        .then((response) => response.json());
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            numColumns={2}
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigate('DetalheProduto', {
                paramKey: item,
              })}>
                <View style={styles.containerUpload}>
                  {
                    image && <Image source={{ uri: image }} style={{ width: 200, height: 200}} />
                  }
                </View>
                <Title style={styles.title} numberOfLines={1}>{item.nome}</Title>
              </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    padding: 10,
    
    
  },
  containerUpload: {
    elevation: 2,
    height: 150,
    width: 150,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 99,
    overflow: 'hidden',
    padding: 5,
    marginRight: 10
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
  },
  title: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default Home;