// Explorar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from 'expo-router';
import BottomNavBar from './BottomNavBar';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import FiltroEstadoCidade from './FiltroEstadoCidade'; // Importando o componente de filtro

const API_KEY = 'AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY'; // Substitua pela sua chave de API do Google Places

const Explorar = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [configModalVisible, setConfigModalVisible] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtro, setFiltro] = useState({ estado: '', cidade: '' }); // Estado inicial do filtro

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

  const fetchPlaces = async () => {
    if (!searchQuery.trim()) {
      alert('Por favor, insira um termo de pesquisa.');
      return;
    }

    setLoading(true);
    try {
      let query = `${searchQuery}`;
      console.log(`Iniciando pesquisa para: ${query}`);
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`
      );
      console.log('Resposta da API:', response.data);
      if (response.data.status === 'OK') {
        setResults(response.data.results);
        response.data.results.forEach((item) => {
          console.log('Resultado:', JSON.stringify(item, null, 2));
        });
      } else {
        console.error('Erro na resposta da API:', response.data.status);
        alert(`Erro na pesquisa: ${response.data.status}`);
      }
    } catch (error) {
      console.error('Erro ao buscar locais:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filtroSelecionado) => {
    setFiltro(filtroSelecionado);
    // Lógica para aplicar o filtro na busca
    console.log('Novo filtro selecionado:', filtroSelecionado);
    // Aqui você pode adicionar a lógica para refazer a busca com base nos filtros selecionados
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

          {/* Componente de filtro */}
          <FiltroEstadoCidade onFilterChange={handleFilterChange} />

          {/* Restante do conteúdo da tela */}
          <TouchableOpacity style={styles.button} onPress={openSearchModal}>
            <Text style={styles.buttonTextB}>Pesquisar</Text>
          </TouchableOpacity>

          {/* Adicione aqui o restante do conteúdo da sua tela */}
        </View>
      </ScrollView>
      <BottomNavBar />
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
    borderRadius: 10,
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