import React from 'react'
import { mainpage,history,accountCenter } from '../components/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const userStack = () => {
  return (
    <Stack.Navigator initialRouteName ='anasayfa' screenOptions={{headerShown:false}} >

        <Stack.Screen name='anasayfa'component={mainpage}/>
        <Stack.Screen name='eskimri'component={history}/>
        <Stack.Screen name='güncelleme'component={accountCenter}/>
        
    </Stack.Navigator>
  )
}

export default userStack

