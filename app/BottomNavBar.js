import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const BottomNavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
        params: {
          query: searchText,
          key: 'AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY'                },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResultPress = (result) => {
    navigation.navigate('Detalhes', { result: JSON.stringify(result) });
    setIsSearchMode(false); // Esconder os resultados de busca após navegar para detalhes
  };

  const handleOpenSearch = () => {
    setIsSearchMode(true);
  };

  const renderItem = ({ item }) => {
    const photoReference = item.photos && item.photos.length > 0 ? item.photos[0].photo_reference : null;
    const imageUrl = photoReference
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=YOUR_GOOGLE_API_KEY`
      : 'https://via.placeholder.com/400';

    // Log para verificar a URL da imagem
    console.log("Card Image URL:", imageUrl);

    return (
      <TouchableOpacity style={styles.card} onPress={() => handleResultPress(item)}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardAddress}>{item.formatted_address}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isSearchMode ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Buscar"
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Explorar')}>
            <FontAwesome name="home" size={24} color="black" />
            <Text style={styles.navText}>Explorar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handleOpenSearch}>
            <FontAwesome name="search" size={24} color="black" />
            <Text style={styles.navText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Criar')}>
            <Entypo name="plus" size={24} color="blue" />
            <Text style={styles.navText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Viagens')}>
            <MaterialIcons name="navigation" size={24} color="black" />
            <Text style={styles.navText}>Viagens</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Perfil')}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      )}

      {isSearchMode && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.place_id}
          renderItem={renderItem}
          contentContainerStyle={styles.resultsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#2D9AFF',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navButton: {
    padding: 10,
    alignItems: 'center',
  },
  navText: {
    color: '#2D9AFF',
    fontWeight: 'bold',
  },
  resultsContainer: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAddress: {
    fontSize: 14,
    color: '#777',
  },
});

export default BottomNavBar;
