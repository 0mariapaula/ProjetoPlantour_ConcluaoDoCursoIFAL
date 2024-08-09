import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; //adc : antes nao estava funcionando

const Detalhes = () => {
//  const navigation = useNavigation();
  //const route = useRoute();
  
  const { place } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => router.push('/Buscar')}>
          <Image source={require('../assets/seta.png')} style={styles.seta} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/configuracao.png')} style={styles.configuracao} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        {place.photos && place.photos.length > 0 && (
          <Image
            source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY` }}
            style={styles.image}
          />
        )}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{place.name}</Text>
          <Text style={styles.cardSubtitle}>{place.formatted_address}</Text>
          <Text style={styles.cardSubtitle}>Avaliação: {place.rating}</Text>
          {place.opening_hours && (
            <Text style={styles.cardSubtitle}>
              {place.opening_hours.open_now ? 'Aberto agora' : 'Fechado agora'}
            </Text>
          )}
          {place.formatted_phone_number && (
            <Text style={styles.cardSubtitle}>Telefone: {place.formatted_phone_number}</Text>
          )}
          {place.website && (
            <Text style={styles.cardSubtitle}>Website: {place.website}</Text>
          )}
        
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
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
});

export default Detalhes;
