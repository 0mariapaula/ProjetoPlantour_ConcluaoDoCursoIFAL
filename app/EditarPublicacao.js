import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';
import Icon from 'react-native-vector-icons/Feather';

const EditarPublicacao = () => {
  const router = useRouter();
  const { id, titulo, descricao, endereco, valor } = useLocalSearchParams();

  const [nome, setNome] = useState(titulo);
  const [descricaoState, setDescricaoState] = useState(descricao);
  const [enderecoState, setEnderecoState] = useState(endereco);
  const [valorState, setValorState] = useState(valor);

  const saveChanges = async () => {
    try {
      const docRef = doc(db, 'publicacoes', id);
      await updateDoc(docRef, {
        titulo: nome,
        descricao: descricaoState,
        endereco: enderecoState,
        valor: valorState,
      });
      router.push('/Explorar');
    } catch (error) {
      console.error('Erro ao atualizar publicação:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Publicação</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <View style={styles.iconContainer}>
            <Icon name="tag" size={20} color="#2D9AFF" />
            <Text style={styles.iconText}>Título</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite o título"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.iconContainer}>
            <Icon name="file-text" size={20} color="#2D9AFF" />
            <Text style={styles.iconText}>Descrição</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição"
            value={descricaoState}
            onChangeText={setDescricaoState}
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.iconContainer}>
            <Icon name="map-pin" size={20} color="#2D9AFF" />
            <Text style={styles.iconText}>Endereço</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite o endereço"
            value={enderecoState}
            onChangeText={setEnderecoState}
          />
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.iconContainer}>
            <Icon name="dollar-sign" size={20} color="#2D9AFF" />
            <Text style={styles.iconText}>Valor</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor"
            value={valorState}
            onChangeText={setValorState}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={saveChanges}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/Explorar')}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D9AFF',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2D9AFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#2D9AFF',
    fontSize: 16,
  },
});

export default EditarPublicacao;
