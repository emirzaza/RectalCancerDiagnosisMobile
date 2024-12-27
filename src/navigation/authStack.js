import React from 'react'
import { login, signup } from '../components/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator initialRouteName ='giris' screenOptions={{headerShown:false}} >
            <Stack.Screen name='giris'component={login}/>
            <Stack.Screen name='kayit'component={signup}/>
     </Stack.Navigator>
  )
}

export default authStack

