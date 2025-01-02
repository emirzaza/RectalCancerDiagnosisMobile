import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const Mainpage = () => {
  const [mriName, setMriName] = useState('');
  const [file, setFile] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Her tür dosyayı seçmek için
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        // Yalnızca .nii uzantılı dosyaları kabul et
        if (result.name.endsWith('.nii')) {
          setFile(result); // Seçilen dosyayı state'e kaydet
          Alert.alert('Dosya seçildi:', result.name);
          console.log('Seçilen dosya:', result);
        } else {
          Alert.alert('Yalnızca .nii uzantılı dosyaları seçebilirsiniz.');
        }
      } else {
        Alert.alert('Dosya seçilmedi.');
      }
    } catch (error) {
      console.error('Dosya seçimi sırasında hata:', error);
      Alert.alert('Bir hata oluştu:', error.message);
    }
  };

  const submitForm = async () => {
    if (!file || !mriName.trim()) {
      Alert.alert('Lütfen tüm alanları doldurun ve bir dosya seçin.');
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: file.uri,
      type: 'application/octet-stream',
      name: file.name,
    });

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      const data = await response.json();
      Alert.alert('Yanıt:', data.result || 'Yanıt alınamadı.');
    } catch (error) {
      console.error('API çağrısı sırasında hata:', error);
      Alert.alert('Bir hata oluştu:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Upload NII File</Text>

        <Text style={styles.label}>Name your MRI:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter MRI name"
          value={mriName}
          onChangeText={setMriName}
        />

        <Text style={styles.label}>Choose a NII File:</Text>
        <TouchableOpacity style={styles.fileInputButton} onPress={pickFile}>
          <Text style={styles.fileInputButtonText}>
            {file ? file.name : 'Choose File'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={submitForm}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Mainpage;

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
  },
  heading: {
    fontSize: 20,
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
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cce4f6',
    borderRadius: 5,
    fontSize: 14,
    backgroundColor: '#f9fcff',
  },
  fileInputButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  fileInputButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
