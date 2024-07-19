import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detalhes = () => {
  const route = useRoute();
  const { result } = route.params;
  const parsedResult = JSON.parse(result);

  const imageUrl = parsedResult.photos && parsedResult.photos.length > 0
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${parsedResult.photos[0].photo_reference}&key=YOUR_GOOGLE_API_KEY`
    : 'https://via.placeholder.com/400';

  // Log para verificar a URL da imagem
  console.log("Detalhes Image URL:", imageUrl);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{parsedResult.name}</Text>
      <Text>{parsedResult.formatted_address}</Text>
      {parsedResult.rating && <Text>Rating: {parsedResult.rating}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Detalhes;
     