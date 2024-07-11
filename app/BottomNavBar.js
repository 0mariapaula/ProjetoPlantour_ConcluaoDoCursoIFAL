import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const BottomNavBar = ({ openSearchModal }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Explorar')}>
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.navText}>Explorar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={openSearchModal}>
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
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'black',
  },
});

export default BottomNavBar;
