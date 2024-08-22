// EditarRoteiro.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const EditarRoteiro = () => {
  const { roteiro } = useLocalSearchParams();
  const roteiroObj = JSON.parse(roteiro || '{}'); // Parse JSON ou use um valor padrão se o parâmetro estiver indefinido

  console.log('Parâmetro do roteiro:', roteiroObj);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Editar Roteiro</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={roteiroObj.nome || ''}
          onChangeText={(text) => console.log('Nome alterado:', text)} // Adicione lógica para atualizar o estado
        />
        <Text style={styles.label}>Data de Início:</Text>
        <TextInput
          style={styles.input}
          value={roteiroObj.dataInicio ? new Date(roteiroObj.dataInicio).toLocaleDateString() : ''}
          onChangeText={(text) => console.log('Data de início alterada:', text)} // Adicione lógica para atualizar o estado
        />
        <Text style={styles.label}>Data Final:</Text>
        <TextInput
          style={styles.input}
          value={roteiroObj.dataFinal ? new Date(roteiroObj.dataFinal).toLocaleDateString() : ''}
          onChangeText={(text) => console.log('Data final alterada:', text)} // Adicione lógica para atualizar o estado
        />
        <Button title="Salvar" onPress={() => console.log('Salvar alterações')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default EditarRoteiro;
