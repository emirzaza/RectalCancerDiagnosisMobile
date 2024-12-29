import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native';

const Signup = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../../assets/images/signup_img.png")}
        style={styles.photo}
      />
      <Text style={styles.welcomeText}>-------- SIGN UP --------</Text>

      <TextInput
        placeholder="Enter your name.."
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your surname.."
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your username.."
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your password.."
        style={styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Enter your email.."
        style={styles.input}
        keyboardType="email-address"
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "#007bff" },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
});
