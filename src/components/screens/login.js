import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from '../../components/loading';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPassword, setIsLoading, setLogin } from '../../redux/userSlice';


const Login = ({ navigation }) => {
 
    const {username, password, isLoading }= useSelector((state)=> state.user)

    console.log(username, password, isLoading)

    const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/signin_img.png")}
        style={styles.photo}
      />
      <Text style={styles.welcomeText}>-------- SIGN IN --------</Text>

      
      <TextInput
        placeholder="Enter your usurname.."
        style={styles.input}
        onChangeText={(uname)=>dispatch(setUsername(uname))}
      />
      <TextInput
        placeholder="Enter your password.."
        style={styles.input}
        onChangeText={(text)=>dispatch(setPassword(text))}
        secureTextEntry={true}
      />
      

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "#007bff" },
          styles.button,
        ]}
        onPress={()=>dispatch(setLogin(true))}
      >
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "#007bff" },
          styles.button2,
        ]}
        onPress={() => navigation.navigate('kayit')}
      >
        <Text style={styles.buttonText}>!Sign up here!</Text>
      </Pressable>

      {isLoading ? <Loading /> : null}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  photo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button2: {
    width: '50%',
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'grey',
  },
});
