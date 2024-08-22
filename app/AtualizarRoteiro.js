import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';

const AtualizarRoteiro = () => {
  const router = useRouter();
  const { roteiro } = useLocalSearchParams();

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
  const [locais, setLocais] = useState(roteiroData.locais || []);

  const handleUpdate = async () => {
    if (!nome || !dataInicio || !dataFinal || !visibilidade || locais.length === 0) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    try {
      await updateDoc(doc(db, 'roteiros', roteiroData.id), {
        nome,
        dataInicio,
        dataFinal,
        visibilidade,
        locais,
      });
      Alert.alert('Sucesso', 'Roteiro atualizado com sucesso!');
      router.push('/Viagens');
    } catch (error) {
      console.error('Erro ao atualizar roteiro: ', error);
      Alert.alert('Erro', 'Não foi possível atualizar o roteiro.');
    }
  };

  const handleAddLocal = () => {
    setLocais([...locais, '']);
  };

  const handleLocalChange = (index, value) => {
    const newLocais = [...locais];
    newLocais[index] = value;
    setLocais(newLocais);
  };

  const handleRemoveLocal = (index) => {
    setLocais(locais.filter((_, i) => i !== index));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Atualizar Roteiro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Roteiro"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Início (AAAA-MM-DD)"
        value={dataInicio}
        onChangeText={setDataInicio}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Final (AAAA-MM-DD)"
        value={dataFinal}
        onChangeText={setDataFinal}
      />
      <TextInput
        style={styles.input}
        placeholder="Visibilidade"
        value={visibilidade}
        onChangeText={setVisibilidade}
      />
      <Text style={styles.subTitle}>Locais</Text>
      {locais.map((local, index) => (
        <View key={index} style={styles.localContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Local ${index + 1}`}
            value={local}
            onChangeText={(value) => handleLocalChange(index, value)}
          />
          <TouchableOpacity onPress={() => handleRemoveLocal(index)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remover</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={handleAddLocal} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Local</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Atualizar Roteiro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D9AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D9AFF',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  localContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#FF6347',
  },
  addButton: {
    backgroundColor: '#2D9AFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#2D9AFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AtualizarRoteiro;
