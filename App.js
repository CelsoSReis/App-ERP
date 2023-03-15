import React from 'react';
//css
import { styles } from './assets/css/Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, PainelAdmin, Cadastro} from './src/views';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"Bem Vindo",
            headerStyle:{backgroundColor:'green'},
            headerTintColor:"#333",
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'bold'}
          }} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="PainelAdmin" component={PainelAdmin} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  }