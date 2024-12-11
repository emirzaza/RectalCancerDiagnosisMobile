import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native';

export default function App() {

const [name, setname] = useState("")
const [surname, setSurname] = useState("")
const [result, setResult] = useState("")

  return (
    <View style={styles.container}>

      <Text>--------welcome {result} --------</Text>

      <TextInput
      placeholder='Enter your name..'
      style={styles.input}
      onChangeText={setname}
      
      />
      <TextInput
      placeholder='Enter your surname..'
      style={styles.input}
      onChangeText={setSurname}
      />
      <TextInput
      placeholder='Enter your password..'
      style={styles.input}
      
      />
      <TextInput
      placeholder='Enter your phone number..'
      style={styles.input}
      keyboardType='numeric'
      />
      <TextInput
      placeholder='Enter your email..'
      style={styles.input}
     
      />

      <Pressable style={({pressed})=>[{
        backgroundColor: pressed ? "gray" : "lightblue"
      },
      styles.Buton]}
      onPress={()=> setResult(name+surname)}>
        
        <Text style={styles.butontext} >BUTTON</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    width: '80%',
    height:50,
    borderRadius:10,
    textAlign: 'center',
    marginVertical:10,
  },
  Buton:{
    borderWidth:1,
    width: '80%',
    height:50,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
    
  },
  butontext:{
    color:"white",
    fontWeight: "bold",
  }
});
