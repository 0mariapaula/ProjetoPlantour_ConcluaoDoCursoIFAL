import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';


const CardDetalhes = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('Explorar')}>
        <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image source={require('../assets/configuracao.png')} style={styles.configuracao} />
        </TouchableOpacity>

        {/* Adicione outros conteúdos aqui, se necessário */}
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={require('../assets/paris.png')} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Paris - França</Text>
            <Text style={styles.cardSubtitle}>Endereço: Champs-Élysées</Text>
            <Text style={styles.cardSubtitle}>Bairro: 8th arrondissement</Text>
            <Text style={styles.cardSubtitle}>Cidade: Paris</Text>
            <Text style={styles.cardSubtitle}>Estado: Île-de-France</Text>
            <Text style={styles.cardSubtitle}>País: França</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
            </Text>
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
    bottom:20,
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
    left:160,
    width:30,
    height:30,
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
});

export default CardDetalhes;
