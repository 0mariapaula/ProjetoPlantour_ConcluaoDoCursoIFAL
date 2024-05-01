import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; 
import { useNavigation } from 'expo-router';

const inicio = () => {
  return (
    <View style={styles.container}>
          <View style={styles.inputContainer}></View>
    <View>
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
    </View>
  );
};
const styles = StyleSheet.create({
  
  inputContainer: {
    height : '85%',
    paddingTop: 0,
    width: '110%',
    backgroundColor: '#2D9AFF',
    borderRadius: 0,
    padding: 20,
    bottom:530

  },
  input: {
    width: '40%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    bottom:620,
    left:15,
  },
  button: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    bottom:720,
    left:15,
    
  },
  button2: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    bottom:790,
    left:210,
  },
  button3: {
    width: '45%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    bottom:795,
    left:110,
  },
  buttonTextB: {
    color: '#3A3A3A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 5,
    color: '#fff',
    textAlign: 'justify',
    fontWeight: 'bold',
    bottom:780,
    left:25,
  },

});

export default inicio;