import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const CardDetalhes = () => {
  return (
    <View style={styles.container}>
        
    <View style={styles.inputContainer}>
    </View>
    <View style={styles.cardContainer}>

        <View  style={styles.card}onPress={() => navigation.navigate('CardDetalhes')}>
            <Image source={require('../assets/paris.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Paris - França</Text>
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
  },
  inputContainer: {
    height: '10%',
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#2D9AFF',
    borderRadius: 0,
    padding: 20,
    bottom: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os cards sejam automaticamente posicionados em várias linhas
    justifyContent: 'space-between',
    marginTop: 20,
    bottom: 200,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: -10,
  },
  cardImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    width: '50%', // Ajuste o tamanho dos cards para ocupar metade do espaço disponível na linha
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CardDetalhes;
