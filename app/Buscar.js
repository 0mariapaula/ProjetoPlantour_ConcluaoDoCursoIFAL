import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Buscar = () => {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const navigation = useNavigation();

  const fetchPlaces = async (pageToken = '') => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`, {
        params: {
          query: query,
          key: 'AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY',
          pagetoken: pageToken,
        },
      });

      if (pageToken) {
        setPlaces(prevPlaces => [...prevPlaces, ...response.data.results]);
      } else {
        setPlaces(response.data.results);
      }

      setNextPageToken(response.data.next_page_token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardPress = (place) => {
    navigation.navigate('Detalhes', { place });
  };

  const renderPlace = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      {item.photos && item.photos.length > 0 && (
        <Image
          source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY` }}
          style={styles.image}
        />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.formatted_address}</Text>
        <Text style={styles.rating}>Avaliação: {item.rating}</Text>
        <Text style={styles.distance}>{item.distance ? `${item.distance} km` : ''}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!nextPageToken) return null;

    return (
      <TouchableOpacity style={styles.loadMoreButton} onPress={() => fetchPlaces(nextPageToken)}>
        <Text style={styles.loadMoreText}>Ver mais</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Explorar')}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um local"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.button} onPress={() => fetchPlaces()}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={places}
        renderItem={renderPlace}
        keyExtractor={item => item.place_id}
        contentContainerStyle={styles.list}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
  },
  inputContainer: {
    height: 80,
    width: '113%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    bottom: 0,
  },
  seta: {
    right: 190,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  list: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
  },
  distance: {
    fontSize: 12,
    color: '#888',
  },
  loadMoreButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loadMoreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Buscar;
