import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView,TextInput } from 'react-native';
import { useNavigation } from 'expo-router';

const EsqueceuSenha = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Cadeado.png')} style={styles.cadeado} />
     <Text style={styles.label}>Esqueceu Sua Senha?</Text>
     <Text style={styles.label2}>Digite seu endereço de e-mail abaixo e enviaremos um link para você recuperar o acesso à sua conta.</Text>

    <View style={styles.inputContainer}>
      
    <Text style={styles.label3}>Email :</Text>
          <TextInput style={styles.input}/>
          <TouchableOpacity 
        style={styles.button}>
        <Text style={styles.buttonTextB}>Enviar Email</Text>
      </TouchableOpacity>
      <Text style={styles.buttonTextOU}>OU</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.input2}>Criar Nova Conta</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D9AFF',
  },
  inputContainer: {
    height: '100%',
    width: '100%',
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    top: 150,
  },
  label: {
    marginBottom: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 23,
    top:60,
  },
  
  label2: {
    marginBottom: 5,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    top:90,
    marginStart:42,
    right:20,
  },
  label3: {
    fontSize: 20,
    marginBottom: 5,
    color: '#084D75',
    textAlign: 'justify',
    fontWeight: 'bold',
    left:30,
    top:30,
  },
  cadeado: {
    width: 100,
    height: 100,
    borderRadius: 10,
    top:40,
    marginTop:270,
  },
  input: {
    top:50,
    left:40,
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    paddingHorizontal: 2,
    marginBottom: 15,
    backgroundColor: '#D9D9D9',
  },
  input2: {
    color: '#0000FF',
    fontWeight: 'bold',
    left:140,
    top:170,
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    left:110,
    top:80,
  },
  buttonTextB: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextOU: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    left:180,
    top:120,
  },

});
export default EsqueceuSenha;


