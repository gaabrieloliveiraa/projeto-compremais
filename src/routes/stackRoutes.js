import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Acount from '../pages/Acount';

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}options={{headerShown:false}}/>
            <Stack.Screen name="Acount" component={Acount} />
            <Stack.Screen name="Signin" component={Signin} />
               
        </Stack.Navigator>
        
    )
}



export default StackRoutes;