import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditarPublicacao = () => {
  const router = useRouter();
  const { id, imagemUrl, titulo, descricao, endereco, tipo, valor } = useLocalSearchParams();

  const [nome, setNome] = useState(titulo);
  const [descricaoState, setDescricaoState] = useState(descricao);
  const [enderecoState, setEnderecoState] = useState(endereco);
  const [valorState, setValorState] = useState(valor);
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFinal, setDataFinal] = useState(new Date());
  const [showInicio, setShowInicio] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const onChangeInicio = (event, selectedDate) => {
    const currentDate = selectedDate || dataInicio;
    setShowInicio(Platform.OS === 'ios');
    setDataInicio(currentDate);
  };

  const onChangeFinal = (event, selectedDate) => {
    const currentDate = selectedDate || dataFinal;
    setShowFinal(Platform.OS === 'ios');
    setDataFinal(currentDate);
  };

  const saveChanges = async () => {
    try {
      const docRef = doc(db, 'publicacoes', id);
      await updateDoc(docRef, {
        titulo: nome,
        descricao: descricaoState,
        endereco: enderecoState,
        valor: valorState,
        dataInicio: dataInicio.toISOString(),
        dataFinal: dataFinal.toISOString(),
      });
      router.push('/Explorar');
    } catch (error) {
      console.error('Erro ao atualizar publicação:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={descricaoState}
          onChangeText={setDescricaoState}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={enderecoState}
          onChangeText={setEnderecoState}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          value={valorState}
          onChangeText={setValorState}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={saveChanges}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/Explorar')}>
        <Text>Voltar</Text>
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
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2D9AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default EditarPublicacao;