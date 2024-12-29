import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './userStack';
import { setLogin } from '../redux/userSlice';
import { useSelector } from 'react-redux';

const rootstack = () => {

  const {isAuth }= useSelector((state)=> state.user)

  return (
    <NavigationContainer>
        {!isAuth ? <AuthStack></AuthStack> : <UserStack></UserStack>}
    </NavigationContainer>
  )
}

export default rootstack

