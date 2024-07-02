import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import BottomNavBar from './BottomNavBar'; // Certifique-se de ajustar o caminho conforme necessário

const Inicio = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plantour</Text>
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
});

export default Inicio;
