import 'react-native-gesture-handler';
import React from "react";
import { StatusBar, } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import Signin from './src/pages/Signin';
import { JetProvider } from './src/context/menulateral';

function App(){
  return(
    <JetProvider>
      <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
    </JetProvider>
  )
}

export default App;