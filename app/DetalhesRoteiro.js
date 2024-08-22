import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig'; // Ajuste o caminho conforme necessário

const DetalhesRoteiro = () => {
  const router = useRouter();
  const { roteiro } = useLocalSearchParams(); // Parâmetro passado da tela anterior
  const roteiroData = JSON.parse(roteiro);

  const handleUpdate = () => {
    // Navegar para a tela de atualização
    router.push({
      pathname: '/AtualizarRoteiro',
      query: { roteiro: JSON.stringify(roteiroData) },
    });
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'roteiros', roteiroData.id));
      Alert.alert('Sucesso', 'Roteiro excluído com sucesso!');
      router.push('/Viagens'); // Navegar de volta para a lista de roteiros
    } catch (error) {
      console.error('Erro ao excluir roteiro: ', error);
      Alert.alert('Erro', 'Não foi possível excluir o roteiro.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleUpdate}>
          <Icon name="edit" size={24} color="#2D9AFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert(
          'Excluir Roteiro',
          'Tem certeza que deseja excluir este roteiro?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: handleDelete },
          ]
        )}>
          <Icon name="delete" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{roteiroData.nome}</Text>
      <Text style={styles.detail}>Início: {new Date(roteiroData.dataInicio).toLocaleDateString()}</Text>
      <Text style={styles.detail}>Final: {new Date(roteiroData.dataFinal).toLocaleDateString()}</Text>
      <Text style={styles.detail}>Visibilidade: {roteiroData.visibilidade}</Text>
      <Text style={styles.detail}>Locais: {roteiroData.locais.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetalhesRoteiro;
