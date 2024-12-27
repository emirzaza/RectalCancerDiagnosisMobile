import React from 'react'
import { Mainpage,History,AccountCenter } from '../components/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator;

const userStack = () => {
  return (
    <Stack.Navigator initialRouteName ='anasayfa' screenOptions={{headerShown:false}} >

        <Stack.Screen name='anasayfa'component={Mainpage}/>
        <Stack.Screen name='eskimri'component={History}/>
        <Stack.Screen name='güncelleme'component={AccountCenter}/>
        
    </Stack.Navigator>
  )
}

export default userStack

