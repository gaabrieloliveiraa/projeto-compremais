import React, { useEffect, useState } from "react";
import { RefreshControl, ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Container, BannerItem, RateContainer, PromoList, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta, Rate } from './styles';

export default function App({route}) {
  
  const item = route.params.paramKey;

  return (
    <Container>
  
      <Header title="Detalhes do produto" />
      <View style={{ flex: 1, padding: 24 }}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.nome}>{item.descricao}</Text>
      <Text style={styles.nome}>{item.preco}</Text>
      </View>
      
    </Container>
  );
}
 const styles = StyleSheet.create({
   nome:{
    
     alignItems: 'center',
     fontSize: 19,
     padding: 10,
     color:'#fff'
   }
 })