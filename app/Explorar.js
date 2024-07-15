import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, TextInput, FlatList } from 'react-native';
import { useNavigation } from 'expo-router';
import BottomNavBar from './BottomNavBar'; // Certifique-se de ajustar o caminho conforme necessário
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do FontAwesome

const GOOGLE_PLACES_API_KEY = 'AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY'; // Substitua pela sua chave da API do Google Places

const Explorar = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const openSearchModal = () => {
    setModalVisible(true);
  };

  const closeSearchModal = () => {
    setModalVisible(false);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${GOOGLE_PLACES_API_KEY}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToDetails = (place_id) => {
    // Navegar para a tela de detalhes, passando o ID do lugar como parâmetro
    navigation.navigate('CardDetalhes', { place_id });
  };

  const renderResult = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigateToDetails(item.place_id)}>
      {item.photos && item.photos.length > 0 && (
        <Image
          source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${GOOGLE_PLACES_API_KEY}` }}
          style={styles.cardImage}
        />
      )}
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDescription}>{item.formatted_address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plantour</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Config')}>
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
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CardDetalhes')}>
              <Image source={require('../assets/paris.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Paris - França</Text>
              <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../assets/maceio.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Maceió - Brasil</Text>
              <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../assets/paris.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Paris - França</Text>
              <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../assets/espanha.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Espanha</Text>
              <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
            </TouchableOpacity>

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
        visible={modalVisible}
        onRequestClose={closeSearchModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#888"
            />
            <FlatList
              data={results}
              renderItem={renderResult}
              keyExtractor={item => item.place_id}
              contentContainerStyle={styles.resultsContainer}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.searchButtonText}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closeSearchModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
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
    color: '#828282',
    textAlign: 'justify',
    fontSize: 12,
    bottom: 230,
    right: 35,
  },
  textoTitulo3: {
    marginBottom: 5,
    color: '#242424',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 140,
    right: 60,
  },
  cardContainer: {
    alignItems: 'center',
    bottom: 210,
  },
  card: {
    width: 320,
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3A3A3A',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#3A3A3A',
  },
  searchButton: {
    backgroundColor: '#2D9AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10, // Espaçamento ajustado para não cobrir completamente os resultados
    zIndex: 1, // Coloca o botão na frente dos resultados
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#2D9AFF',
    fontWeight: 'bold',
  },
  resultsContainer: {
    alignItems: 'center',
    paddingBottom: 20, // Adiciona espaço extra no final para o botão Fechar
  },
  cardCarousel: {
    width: 150,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginRight: 10,
  },
  cardImageCarrossel: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Explorar;
