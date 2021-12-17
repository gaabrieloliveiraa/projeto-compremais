import React, { useState, useContext } from "react";
import { createDrawerNavigator  } from "@react-navigation/drawer";
import { useIsFocused  } from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Ofertas from '../pages/Ofertas';
import Login from '../pages/Signin';
import StackRoutes from './stackRoutes';
import Signin from '../pages/Signin';
import Acount from '../pages/Acount';
import CadProdutos from '../pages/CadProdutos';
import CadCategorias from '../pages/CadCategorias';
import ListaCategorias from '../pages/ListaCategorias';
import DetalheProduto from '../pages/DetalheProduto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JetContext } from "../context/menulateral";
const Drawer = createDrawerNavigator();

function Routes({navigation}) {
    const isFocused = useIsFocused();
    const [login, setLogin] = useState(false);
    const [Jets, setJets] = useContext(JetContext);

    React.useEffect(() => {
        console.log(Jets)
        getData();
        setLogin(Jets)
    }, [Jets])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@login')
          if(value !== null) {
            // value previously stored
            let res = JSON.parse(value);
            setLogin(res);
          }
        } catch(e) {
          // error reading value
        }
      }
  

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#1bb0ce',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#809aeb',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF'
            }}
        >
          <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{ 
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
           
            {!login.success && <Drawer.Screen
                name="Signin"
                component={Signin}
                options={{
                    title: 'Login',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="account-circle"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />}
  {!login.success && <Drawer.Screen 
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
                     />   }            
          
{login.success &&
            <Drawer.Screen
                name="CadProdutos"
                component={CadProdutos}
                options={{
                    title: 'Cadastrar Produtos',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="rename-box"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            }
            {/* {Jets.success && <Drawer.Screen
                name="CadCategorias"
                component={CadCategorias}
                options={{
                    title: 'Cadastrar Categorias',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="rename-box"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />} */}

            {/* {login.success && <Drawer.Screen
                name="ListaCategorias"
                component={ListaCategorias}
                options={{
                    title: 'Categorias',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name="text-box"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />} */}

          < Drawer.Screen
                name="DetalheProduto"
                component={DetalheProduto}

                options={{
                    drawerItemStyle: { height: 0 }
                }}
            />

        </Drawer.Navigator>
    )
}

export default Routes;