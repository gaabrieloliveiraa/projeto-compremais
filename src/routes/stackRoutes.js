import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Acount from '../pages/Acount';
import CadCategorias from '../pages/CadCategorias';
import CadProdutos from '../pages/CadProdutos'
import ListaCategorias from '../pages/ListaCategorias'

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}options={{headerShown:false}}/>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Acount" component={Acount} />
            <Stack.Screen name="CadCategorias" component={CadCategorias} />
            <Stack.Screen name="CadProdutos" component={CadProdutos} />
            <Stack.Screen name="ListaCategorias" component={ListaCategorias} />
            
               
        </Stack.Navigator>
        
    )
}



export default StackRoutes;
  