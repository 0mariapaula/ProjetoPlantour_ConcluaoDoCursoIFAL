import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';

const DetalhesRoteiro = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { roteiro } = useLocalSearchParams();
  const roteiroData = JSON.parse(roteiro);

  const handleUpdate = () => {
    router.push({
      pathname: '/AtualizarRoteiro',
      query: { roteiro: JSON.stringify(roteiroData) },
    });
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'roteiros', roteiroData.id));
      Alert.alert('Sucesso', 'Roteiro excluído com sucesso!');
      router.push('/Viagens');
    } catch (error) {
      console.error('Erro ao excluir roteiro: ', error);
      Alert.alert('Erro', 'Não foi possível excluir o roteiro.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Viagens')} style={styles.setaContainer}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{roteiroData.nome}</Text>
        <View style={styles.infoContainer}>
          <Icon name="date-range" size={20} color="#2D9AFF" style={styles.icon} />
          <Text style={styles.detail}>Início: {new Date(roteiroData.dataInicio).toLocaleDateString()}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="date-range" size={20} color="#2D9AFF" style={styles.icon} />
          <Text style={styles.detail}>Final: {new Date(roteiroData.dataFinal).toLocaleDateString()}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="visibility" size={20} color="#2D9AFF" style={styles.icon} />
          <Text style={styles.detail}>Visibilidade: {roteiroData.visibilidade}</Text>
        </View>
        <Text style={styles.subTitle}>Locais</Text>
        <View style={styles.locationsContainer}>
          {roteiroData.locais.map((local, index) => (
            <Text key={index} style={styles.locationItem}>
              {` ${index + 1}: ${local}`}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleUpdate}>
          <Icon name="edit" size={28} color="#2D9AFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert(
          'Excluir Roteiro',
          'Tem certeza que deseja excluir este roteiro?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: handleDelete, style: 'destructive' },
          ]
        )}>
          <Icon name="delete" size={28} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    position: 'absolute',
    top: 0,
    width: '117%',
    height: 80,
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  setaContainer: {
    position: 'absolute',
    left: 20,
  },
  seta: {
    width: 30,
    height: 30,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    width: '100%',
    maxWidth: 500,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D9AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D9AFF',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 10,
  },
  detail: {
    fontSize: 16,
    color: '#333333',
  },
  locationsContainer: {
    marginTop: 10,
    width: '100%',
  },
  locationItem: {
    fontSize: 16,
    color: '#333333',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
  },
});

export default DetalhesRoteiro;
