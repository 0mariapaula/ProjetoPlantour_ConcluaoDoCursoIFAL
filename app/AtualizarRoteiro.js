import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig'; // Ajuste o caminho conforme necessário

const AtualizarRoteiro = () => {
  const router = useRouter();
  const { roteiro } = useLocalSearchParams(); // Parâmetro passado da tela anterior

  // Verifique se o parâmetro roteiro está presente e é um JSON válido
  let roteiroData = {};
  try {
    roteiroData = roteiro ? JSON.parse(roteiro) : {};
  } catch (error) {
    Alert.alert('Erro', 'Dados do roteiro inválidos.');
    return;
  }

  const [nome, setNome] = useState(roteiroData.nome || '');
  const [dataInicio, setDataInicio] = useState(roteiroData.dataInicio || '');
  const [dataFinal, setDataFinal] = useState(roteiroData.dataFinal || '');
  const [visibilidade, setVisibilidade] = useState(roteiroData.visibilidade || '');
  const [locais, setLocais] = useState((roteiroData.locais || []).join(', '));

  const handleUpdate = async () => {
    if (!nome || !dataInicio || !dataFinal || !visibilidade || !locais) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    try {
      await updateDoc(doc(db, 'roteiros', roteiroData.id), {
        nome,
        dataInicio,
        dataFinal,
        visibilidade,
        locais: locais.split(',').map(loc => loc.trim()),
      });
      Alert.alert('Sucesso', 'Roteiro atualizado com sucesso!');
      router.push('/Viagens'); // Navegar de volta para a lista de roteiros
    } catch (error) {
      console.error('Erro ao atualizar roteiro: ', error);
      Alert.alert('Erro', 'Não foi possível atualizar o roteiro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.label}>Data Início:</Text>
      <TextInput
        style={styles.input}
        value={dataInicio}
        onChangeText={setDataInicio}
      />
      <Text style={styles.label}>Data Final:</Text>
      <TextInput
        style={styles.input}
        value={dataFinal}
        onChangeText={setDataFinal}
      />
      <Text style={styles.label}>Visibilidade:</Text>
      <TextInput
        style={styles.input}
        value={visibilidade}
        onChangeText={setVisibilidade}
      />
      <Text style={styles.label}>Locais (separados por vírgula):</Text>
      <TextInput
        style={styles.input}
        value={locais}
        onChangeText={setLocais}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2D9AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AtualizarRoteiro;
