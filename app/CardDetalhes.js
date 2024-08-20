import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardDetalhes = () => {
  const router = useRouter();
  const { imagemUrl, titulo, descricao, endereco, tipo, valor, id, userId } = useLocalSearchParams();

  const deletePublicacao = async () => {
    Alert.alert(
      "Excluir Publicação",
      "Você tem certeza que deseja excluir esta publicação?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'publicacoes', id));
              router.push('/Explorar');
            } catch (error) {
              console.error('Erro ao excluir publicação:', error);
            }
          }
        }
      ]
    );
  };

  const editPublicacao = () => {
    router.push({
      pathname: '/EditarPublicacao',
      params: { 
        id, 
        imagemUrl, 
        titulo,
        descricao,
        endereco,
        tipo,
        valor 
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => router.push('/Explorar')}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/configuracao.png')} style={styles.configuracao} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          {imagemUrl ? (
            <Image source={{ uri: imagemUrl }} style={styles.cardImage} />
          ) : (
            <View style={styles.noImage}>
              <Text style={styles.noImageText}>Sem Imagem</Text>
            </View>
          )}
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{titulo}</Text>
            <Text style={styles.cardSubtitle}>Endereço: {endereco}</Text>
            <Text style={styles.cardSubtitle}>Tipo: {tipo}</Text>
            <Text style={styles.cardSubtitle}>Valor: {valor}</Text>
            <Text style={styles.cardDescription}>{descricao}</Text>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.editButton} onPress={editPublicacao}>
              <Icon name="edit" size={20} color="#2D9AFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={deletePublicacao}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    height: 80,
    width: '113%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    bottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
    paddingBottom: 60, // Ajuste para acomodar os botões
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  seta: {
    right: 150,
    position: 'absolute',
  },
  configuracao: {
    left: 160,
    width: 30,
    height: 30,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
  noImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  noImageText: {
    color: '#888',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  editButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
  },
});

export default CardDetalhes;
