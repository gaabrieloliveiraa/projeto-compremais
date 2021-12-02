import React, { useEffect, useState } from "react";
import { RefreshControl, ActivityIndicator, FlatList, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Container, BannerItem, RateContainer, PromoList, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta, Rate } from './styles';

export default function App({route}) {
  
  const item = route.params.paramKey;

  return (
    <Container>
      <Header title="Detalhes do produto" />
      <View style={{ flex: 1, padding: 24 }}>
      <Text>{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <Text>{item.preco}</Text>
      </View>
    </Container>
  );
}
