import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './userStack';


const rootstack = () => {

    const isAuth = false

  return (
    <NavigationContainer>
        {!isAuth ? <AuthStack></AuthStack> : <UserStack></UserStack>}
    </NavigationContainer>
  )
}

export default rootstack

