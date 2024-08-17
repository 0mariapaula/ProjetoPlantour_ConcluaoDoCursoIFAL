import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from './BottomNavBar';

const Perfil = () => {
  const navigation = useNavigation();

  // Dados do usuário (estes valores podem vir de um estado, contexto, ou API)
  const userData = {
    name: 'Nome do Usuário',
    email: 'email@exemplo.com',
    profileImage: require('../assets/profile.png'), // Imagem do perfil (altere o caminho conforme necessário)
  };

  return (
    <View style={styles.container}>
      {/* Container do cabeçalho */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Explorar')} style={styles.setaContainer}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal da tela */}
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          {/* Imagem de perfil do usuário */}
          <Image source={userData.profileImage} style={styles.profileImage} />
          
          {/* Nome e e-mail do usuário */}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>
        </View>
      </View>

      {/* Barra de navegação fixa no final da tela */}
      <BottomNavBar style={styles.bottomNavBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between', // Garante que o conteúdo principal e a barra inferior estejam separados
  },
  inputContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative', // Permite que o elemento da seta seja posicionado de forma absoluta dentro do contêiner
  },
  setaContainer: {
    position: 'absolute',
    left: 20, // Distância da borda esquerda, ajuste conforme necessário
  },
  seta: {
    width: 30, // Largura da seta, ajuste conforme necessário
    height: 30, // Altura da seta, ajuste conforme necessário
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start', // Posiciona o conteúdo mais para cima
    alignItems: 'center',
    paddingTop: 20, // Espaço do topo, ajuste conforme necessário
  },
  profileContainer: {
    flexDirection: 'row', // Organiza a imagem e as informações em linha
    alignItems: 'center', // Alinha os itens no centro verticalmente
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20, // Espaço entre a imagem e as informações
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Perfil;