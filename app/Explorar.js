import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNavBar from './BottomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../firebaseConfig'; // ajuste o caminho conforme necessário

const Explorar = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [configModalVisible, setConfigModalVisible] = useState(false);
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    const fetchPublicacoes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "publicacoes"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setPublicacoes(data);
      } catch (error) {
        console.error('Erro ao buscar publicações:', error);
      }
    };

    fetchPublicacoes();
  }, []);

  const openSearchModal = () => {
    setModalVisible(true);
  };

  const closeSearchModal = () => {
    setModalVisible(false);
  };

  const openConfigModal = () => {
    setConfigModalVisible(true);
  };

  const closeConfigModal = () => {
    setConfigModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plantour</Text>
            <TouchableOpacity onPress={openConfigModal}>
              <Image source={require('../assets/configuracao.png')} style={styles.configuracao} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextB}>Restaurantes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonTextB}>Roteiros</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <Text style={styles.buttonTextB}>Hoteis</Text>
          </TouchableOpacity>

          <Text style={styles.textoTitulo}>Populares da semana</Text>
          <Text style={styles.textoTitulo2}>Locais mais visitados no mundo</Text>

          <View style={styles.cardContainer}>
            {publicacoes.map((pub, index) => (
              <TouchableOpacity key={index} style={styles.card} onPress={() => router.push('/CardDetalhes')}>
                {pub.imagemUrl ? (
                  <Image source={{ uri: pub.imagemUrl }} style={styles.cardImage} />
                ) : (
                  <View style={styles.noImage}>
                    <Text style={styles.noImageText}>Sem Imagem</Text>
                  </View>
                )}
                <Text style={styles.cardTitle}>{pub.titulo}</Text>
                <Text style={styles.cardDescription}>{pub.descricao}</Text>
              </TouchableOpacity>
            ))}

            <Text style={styles.textoTitulo3}>Restaurantes próximos de você</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
              <TouchableOpacity style={styles.cardCarousel}>
                <Image source={require('../assets/LePetit.png')} style={styles.cardImageCarrossel} />
                <Text style={styles.cardTitle}>Lê Petit</Text>
                <Text style={styles.cardDescription}>A cidade da luz e do amor.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardCarousel}>
                <Image source={require('../assets/LePetit.png')} style={styles.cardImageCarrossel} />
                <Text style={styles.cardTitle}>Lê Petit</Text>
                <Text style={styles.cardDescription}>Coração tecnológico do Japão.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardCarousel}>
                <Image source={require('../assets/LePetit.png')} style={styles.cardImageCarrossel} />
                <Text style={styles.cardTitle}>Lê Petit</Text>
                <Text style={styles.cardDescription}>0,3 km.</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar openSearchModal={openSearchModal} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={configModalVisible}
        onRequestClose={closeConfigModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="moon-o" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Modo escuro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="user" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="heart" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="lock" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Privacidade e Segurança</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="bell" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configOption} onPress={closeConfigModal}>
              <Icon name="question-circle" size={20} color="#000" style={styles.configIcon} />
              <Text style={styles.configOptionText}>Ajuda e Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.configOption, { borderColor: 'red' }]} onPress={closeConfigModal}>
              <Icon name="sign-out" size={20} color="red" style={styles.configIcon} />
              <Text style={[styles.configOptionText, { color: 'red' }]}>Sair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeConfigModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 70, // Espacinho extra para a barra de navegação
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    height: '23%',
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#2D9AFF',
    borderRadius: 0,
    padding: 20,
    top: 10,
  },
  configuracao: {
    left: 320,
    width: 30,
    height: 30,
    top: 40,
  },
  button: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    bottom: 150,
    right: 100,
  },
  button2: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    bottom: 240,
    left: 100,
  },
  button3: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    bottom: 260,
    left: 10,
  },
  buttonTextB: {
    color: '#3A3A3A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textoTitulo: {
    marginBottom: 5,
    color: '#242424',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 230,
    right: 80,
  },
  textoTitulo2: {
    marginBottom: 5,
    color: '#242424',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 20,
    right: 30,
  },
  textoTitulo3: {
    marginBottom: 5,
    color: '#242424',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 20,
    left: 20,
  },
  label: {
    marginBottom: 5,
    color: '#FFFFFF',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 25,
    top: 80,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    bottom: 280,
  },
  card: {
    width: '50%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: 170,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    textAlign: 'center',
  },
  cardImageCarrossel: {
    width: 160,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardCarousel: {
    width: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    top:13,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  configOption: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  configOptionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  configIcon: {
    marginRight: 10,
  },
});

export default Explorar;