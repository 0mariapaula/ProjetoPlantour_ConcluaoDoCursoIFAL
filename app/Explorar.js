import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNavBar from './BottomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../firebaseConfig';

const Explorar = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [configModalVisible, setConfigModalVisible] = useState(false);
  const [publicacoes, setPublicacoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "publicacoes"));
      const fetchedPublicacoes = querySnapshot.docs.map(doc => doc.data());
      setPublicacoes(fetchedPublicacoes);
    };

    fetchData();
  }, []);

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

          <View style={styles.cardContainer}>
            {publicacoes.map((publicacao, index) => (
              <TouchableOpacity key={index} style={styles.card} onPress={() => router.push('/CardDetalhes')}>
                <Image source={{ uri: publicacao.imageUrl }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{publicacao.title}</Text>
                <Text style={styles.cardDescription}>{publicacao.description}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.textoTitulo3}>Restaurantes próximos de você</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
            {publicacoes.filter(pub => pub.category === 'Restaurante').map((publicacao, index) => (
              <TouchableOpacity key={index} style={styles.cardCarousel}>
                <Image source={{ uri: publicacao.imageUrl }} style={styles.cardImageCarrossel} />
                <Text style={styles.cardTitle}>{publicacao.title}</Text>
                <Text style={styles.cardDescription}>{publicacao.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <BottomNavBar openSearchModal={() => setModalVisible(true)} />

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
  // Aqui estão as definições de estilo, iguais às que você forneceu
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
    height: '15%', // aqui
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
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  carouselContainer: {
    marginTop: 20,
    bottom: 50,
  },
  cardCarousel: {
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImageCarrossel: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  configOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  configIcon: {
    marginRight: 10,
  },
  configOptionText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
});

export default Explorar;
