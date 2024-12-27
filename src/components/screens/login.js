import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Pressable, Image } from 'react-native';
import Loading from '../../components/loading';


const login = ({navigation}) =>  {

const [name, setname] = useState("")
const [surname, setSurname] = useState("")
const [result, setResult] = useState("")
const [isloading, setIsloading] = useState(false)

  return (
    <View style={styles.container}>

      <Image
      source={require("../../../assets/images/signin_img.png")}
      style={styles.foto}
      />
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
      secureTextEntry={true}
      
      />
      <TextInput
      placeholder='Enter your phone number..'
      style={styles.input}
      keyboardType='numeric'
      />
      <TextInput
      placeholder='Enter your email..'
      style={styles.input}
      inputMode='email'
     
      />

      <Pressable style={({pressed})=>[{
        backgroundColor: pressed ? "gray" : "lightblue"
      },
      styles.Buton]}
      onPress={()=> setIsloading(true)}>
        
        <Text style={styles.butontext} >BUTTON</Text>
      </Pressable>

      <Pressable style={({pressed})=>[{
        backgroundColor: pressed ? "gray" : "lightblue"
      },
      styles.Buton]}
      onPress={()=> navigation.navigate('kayit')}>
        
        <Text style={styles.butontext} >signin</Text>
      </Pressable>

      




      

      {isloading ? <Loading></Loading> : null}

    </View>

  );
}

export default login;

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
  },
  foto:{
    height: "100",
    width:"100",
  }
});
