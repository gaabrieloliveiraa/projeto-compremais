import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Container, BannerItem, RateContainer, PromoList, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderOferta, Rate } from './styles';

function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/produtos')
        .then((response) => response.json());
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
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
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <>
                <Title numberOfLines={1}>{item.nome}</Title>
                <Text>{item.descricao}</Text>
                <Text>{item.preco}</Text>
              </>
            )}
          />
        )}
      </View>
    </Container>
  );
}

//       return(
//         <Container>
//         <Header title="Página Inicial" />



// {/* 
//           <SearchContainer>
//           <Input
//           placeholder="Ex: Jogos para PS4"
//           placeholderTextColor="#ddd"
//               />

//          <SearchButton>
//             <Feather name="search" size={38} color="#FFF" />
//             </SearchButton>
//         </SearchContainer>

//         <ScrollView>
//           <Title>Em Destaque</Title>

//           <BannerButton>
//             <Banner
//             resizeMethod="resize"
//               source={{ uri: 'https://images.unsplash.com/photo-1633704797971-eacd062c9d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'}}
//               />
//           </BannerButton>

//           <SliderOferta
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={[1,2,3,4,5]}
//             renderItem={ ({ item }) => <SliderItem /> }
//             />

//       <Title>Eletrodomésticos</Title>
//       <SliderOferta   
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={[1,2,3,4,5]}
//             renderItem={({ item })=> <SliderItem/>}
//             />

//       <Title>SuperMercado</Title>
//       <SliderOferta   
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={[1,2,3,4,5]}
//             renderItem={({ item })=> <SliderItem/>}
//             />

//       <Title>Games e Pc Gamer</Title>
//       <SliderOferta   
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             data={[1,2,3,4,5]}
//             renderItem={({ item })=> <SliderItem/>}
//             /> 

//         </ScrollView>
//  */}

//       </Container>

//      )
//   }

export default Home;