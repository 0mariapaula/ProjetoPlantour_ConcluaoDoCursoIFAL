import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; 
import { useNavigation } from 'expo-router';

const ConfirmacaoOk = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}></View>
      <Image style={styles.logo} source={require('./../assets/Cadeado.png')} />
       <Text style={styles.titulo}>Email Enviado</Text>
        <Text style={styles.label}>Um email de confirmação foi enviado. Verifique sua caixa de entrada e siga as instruções.</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('ConfirmaçãoDeSenha')}>
        <Text  style={styles.buttonTextB}>OK</Text> 
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D9AFF',
    paddingHorizontal: 20,
    bottom:0
  },
  inputContainer: {
    height: '30%',
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    textAlign: 'center',
    top:250,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    bottom:190,
    right:10,
  },
  titulo: {
    width: 120,
    height: 120,
    bottom:190,
    fontSize: 18,
    color:'#FFFFFF',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    right:3,
    fontWeight: 'bold',
    fontSize: 18,
    bottom:200,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    bottom:190
  },
  buttonTextB: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

});

export default ConfirmacaoOk;
