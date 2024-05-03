import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
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

      {/* Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={require('../assets/paris.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paris - França</Text>
          <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/maceio.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Maceió - Brasil</Text>
          <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/paris.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Paris - França</Text>
          <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/espanha.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Espanha</Text>
          <Text style={styles.cardDescription}>lore lore lore lore lore lore lore lore lore</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    height: '45%',
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#2D9AFF',
    borderRadius: 0,
    padding: 20,
    top: 30,
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
    bottom: 130,
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
    bottom: 220,
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
    bottom: 240,
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
    top: 200,
   right:30,
  
  },
  label: {
    marginBottom: 5,
    color: '#FFFFFF',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 25,
    top:160,
  
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os cards sejam automaticamente posicionados em várias linhas
    justifyContent: 'space-between',
    marginTop: 20,
    bottom:270,
  },
  card: {
    width: '50%', // Ajuste o tamanho dos cards para ocupar metade do espaço disponível na linha
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
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
});

export default Inicio;
