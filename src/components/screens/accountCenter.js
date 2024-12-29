import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const AccountCenter = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Account Center</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Surname:</Text>
        <TextInput style={styles.input} placeholder="Enter your surname" />

        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} placeholder="Enter your username" />

        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountCenter;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    padding: 16,
  },
  formWrapper: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d9e9f3',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cce4f6',
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: '#f9fcff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});