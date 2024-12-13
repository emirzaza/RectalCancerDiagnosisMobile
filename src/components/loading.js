import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const loading = () => {
  return (
    <View style={styles.container}>

      <ActivityIndicator size={'large'} color={"blue"}/>
      <Text>loading..</Text>
    </View>
  )
}

export default loading

const styles = StyleSheet.create({

    container:{
        position:"absolute",
        width:"100",
        height:"100",
        alignItems:"center",
        justifyContent:"center"
    }
})