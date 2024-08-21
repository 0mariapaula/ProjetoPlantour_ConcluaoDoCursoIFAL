import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from './../firebaseConfig'; // ajuste o caminho conforme necessário
import uuid from 'react-native-uuid';  // Alterado para importar react-native-uuid

const Criar = () => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagem, setImagem] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log('ImagePicker result:', result);
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      console.log('Image URI:', uri);
  
      try {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, `images/${uuid.v4()}`);
        
        // Upload the image
        await uploadBytes(storageRef, blob);
  
        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        console.log('Download URL:', downloadURL);
  
        // Set the image URL state
        setImagem(downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Erro', 'Não foi possível fazer o upload da imagem.');
      }
    } else {
      console.error('No image selected or URI is undefined');
      Alert.alert('Erro', 'Nenhuma imagem selecionada ou URI indefinida.');
    }
  };
  
  

  const handlePost = async () => {
    if (!titulo || !valor || !descricao || !endereco || !tipo) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }

    const publicationData = {
      titulo,
      valor: parseFloat(valor),
      descricao,
      endereco,
      tipo,
      empresaId: 'id_da_empresa', // Substitua com o ID real da empresa
      imagemUrl: imagem,
    };

    try {
      await addDoc(collection(db, 'publicacoes'), publicationData);
      Alert.alert('Sucesso', 'Publicação criada com sucesso!');
      
      // Resetar os campos
      setTitulo('');
      setValor('');
      setDescricao('');
      setEndereco('');
      setTipo('');
      setImagem(null);
    } catch (error) {
      console.error('Erro ao criar a publicação:', error);
      Alert.alert('Erro', 'Não foi possível criar a publicação.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
       <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Explorar')} style={styles.setaContainer}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Postar Novo Card</Text>

        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.image} />
          ) : (
            <Text style={styles.imagePickerText}>Escolher Imagem</Text>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
          placeholderTextColor="#888"
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione o Tipo" value="" />
            <Picker.Item label="Restaurante" value="restaurante" />
            <Picker.Item label="Hotel" value="hotel" />
            <Picker.Item label="Bar" value="bar" />
            <Picker.Item label="Ponto Turístico" value="Ponto Turístico" />
            <Picker.Item label="Cafeteria" value="cafeteria" />
            <Picker.Item label="Passeio" value="Passeio" />
          </Picker>
        </View>

        <TouchableOpacity onPress={handlePost} style={styles.button}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F5F5F5',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    position: 'relative', // Permite que o elemento da seta seja posicionado de forma absoluta dentro do contêiner
  },
  setaContainer: {
    position: 'absolute',
    left: 20, // Distância da borda esquerda, ajuste conforme necessário
  },
  seta: {
    width: 30, // Largura da seta, ajuste conforme necessário
    height: 30, // Altura da seta, ajuste conforme necessário
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  imagePicker: {
    width: 200,
    height: 200,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  imagePickerText: {
    color: '#007BFF',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Criar;
