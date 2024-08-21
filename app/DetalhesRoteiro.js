import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetalhesRoteiro = () => {
  const route = useRoute();
  const { roteiro } = route.params; // Obtém os parâmetros passados da tela anterior
  
  // Verifica se o roteiro está disponível
  if (!roteiro) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nenhum roteiro encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{roteiro.nome}</Text>
      <Text style={styles.detail}>Locais: {roteiro.locais?.join(', ')}</Text>
      <Text style={styles.detail}>Início: {new Date(roteiro.dataInicio).toLocaleDateString()}</Text>
      <Text style={styles.detail}>Final: {new Date(roteiro.dataFinal).toLocaleDateString()}</Text>
      <Text style={styles.detail}>Visibilidade: {roteiro.visibilidade}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default DetalhesRoteiro;
