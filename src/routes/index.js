import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {MaterialCommunityIcons } from '@expo/vector-icons';


import Ofertas from '../pages/Ofertas';
import Login from '../pages/Signin';
import StackRoutes from './stackRoutes';
import Signin from '../pages/Signin';
import Acount from '../pages/Acount';
import CadProdutos from '../pages/CadProdutos';
import CadCategorias from '../pages/CadCategorias';
import ListaCategorias from '../pages/ListaCategorias';
import DetalheProduto from '../pages/DetalheProduto';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown:false,

                drawerStyle:{
                    backgroundColor: '#2d5ff5',
                    paddingTop: 20,                   
                },

                drawerActiveBackgroundColor:'#809aeb',
                drawerActiveTintColor:'#FFF',
                drawerInactiveTintColor:'#FFF'
            }}
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={StackRoutes}
            options={{
                title:'Home',
                drawerIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                )     
            }}
            />
            <Drawer.Screen
             name="Ofertas" 
             component={Ofertas}
             options={{
                 title: "Ofertas",

                 drawerIcon: ({focused,size, color}) => (
                     <MaterialCommunityIcons
                     name="sale"
                     size={size}
                     color={color}
                     />
                 )
                 
             }}
              />

            <Drawer.Screen 
            name="Signin" 
            component={Signin}
            options={{
                title:'Login',
                drawerIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons
                        name="account-circle"
                        size={size}
                        color={color}               
                        />
                      )
                        }}
                     />

            <Drawer.Screen 
            name="Acount" 
            component={Acount}
            options={{
                title:'Criar Conta',
                drawerIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons
                        name="account-plus"
                        size={size}
                        color={color}               
                        />
                      )
                        }}
                     />               
          
          <Drawer.Screen
          name="CadProdutos"
          component={CadProdutos}
          options={{
              title:'Cadastrar Produtos',
              drawerIcon: ({focused, size, color}) =>(
                  <MaterialCommunityIcons
                  name="rename-box"
                  size={size}
                  color={color}
                  />
              )
          }}
       />   

<Drawer.Screen
          name="CadCategorias"
          component={CadCategorias}
          options={{
              title:'Cadastrar Categorias',
              drawerIcon: ({focused, size, color}) =>(
                  <MaterialCommunityIcons
                  name="rename-box"
                  size={size}
                  color={color}
                  />
              )
          }}
       />     

<Drawer.Screen
          name="ListaCategorias"
          component={ListaCategorias}
          options={{
              title:'Categorias',
              drawerIcon: ({focused, size, color}) =>(
                  <MaterialCommunityIcons
                  name="text-box"
                  size={size}
                  color={color}
                  />
              )
          }}
       />     
        </Drawer.Navigator>
 )
}

export default Routes;