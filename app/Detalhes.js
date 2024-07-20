import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Detalhes = () => {
  const route = useRoute();
  const { place } = route.params;

  return (
    <View style={styles.container}>
      {place.photos && place.photos.length > 0 && (
        <Image
          source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyAACgV5Ok9n-HsESqMo9d8cRGAiHFlOEAY` }}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.subtitle}>{place.formatted_address}</Text>
      <Text style={styles.rating}>Rating: {place.rating}</Text>
      {place.opening_hours && (
        <Text style={styles.details}>
          {place.opening_hours.open_now ? 'Aberto agora' : 'Fechado agora'}
        </Text>
      )}
      {place.formatted_phone_number && (
        <Text style={styles.details}>Telefone: {place.formatted_phone_number}</Text>
      )}
      {place.website && (
        <Text style={styles.details}>Website: {place.website}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#FFD700',
  },
  details: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Detalhes;
