import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BottomNavBar from './BottomNavBar'; // Certifique-se de ajustar o caminho conforme necessário
import { useNavigation } from 'expo-router';

const Viagens = ({ openSearchModal }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>Plantour</Text>
      </View>
      <View style={styles.contentContainer}>
        <View>
        <Text style={styles.roteiros}>Meus Roteiros</Text>
        </View>
        <Botao 
          texto="Criar roteiro" 
          icone={{ uri: 'https://img.icons8.com/ios/452/clipboard.png' }} 
          onPress={() => navigation.navigate('CriarRoteiro')} 
        />
        <Botao 
          texto="Meus locais" 
          icone={{ uri: 'https://img.icons8.com/ios/452/place-marker.png' }} 
          onPress={() => { /* handle button press */ }} 
        />
        <Botao 
          texto="Buscar roteiros" 
          icone={{ uri: 'https://img.icons8.com/ios/452/search.png' }} 
          onPress={() => { /* handle button press */ }} 
        />
        <Botao 
          texto="Buscar atrações" 
          icone={{ uri: 'https://img.icons8.com/ios/452/search.png' }} 
          onPress={() => { /* handle button press */ }} 
        />
      </View>
      <BottomNavBar openSearchModal={openSearchModal} />
    </View>
  );
};

const Botao = ({ texto, icone, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Image source={icone} style={styles.iconeBotao} />
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    right: 140,
  },
  roteiros: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    right: 110,
    bottom: 380,
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top:200,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2D9AFF',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center',
  },
  iconeBotao: {
    width: 24,
    height: 24,
    marginRight: 10,
    right:70,
  },
  textoBotao: {
    color: '#2D9AFF',
    fontSize: 16,
    fontWeight: 'bold',
    right:15,
  },
});

export default Viagens;