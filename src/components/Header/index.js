import React, {useContext} from 'react';
import { BackHandler } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {Container, MenuButton, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { JetContext } from '../../context/menulateral';


function Header({ title }){
    
    const navigation = useNavigation();
    const [Jet, setJet] = useContext(JetContext)
    return(
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()} >
                <Feather name="menu" size={46} color="#FFF" />
              </MenuButton> 
              <Title>{title}</Title> 
              <Feather name="log-out" size={38} color="#FFF" style={{marginLeft: 80}} onPress={async () => {
                  await AsyncStorage.clear();

                  console.log("cliquei")
                  setJet(JSON.stringify({success:false}))
                  //BackHandler.exitApp();
                  navigation.navigate("Signin")
              }} />
        </Container>
    )
}

export default Header;