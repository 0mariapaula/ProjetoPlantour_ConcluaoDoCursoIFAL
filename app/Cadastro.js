import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; 
import { useNavigation } from 'expo-router';

const Cadastro = () => {
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
      <Image style={styles.logo} source={require('./../assets/logo.png')} />
      
      <View style={styles.rota}>
        <Text style={styles.label}>Nome Completo</Text>
           <TextInput style={styles.input}/>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.label}>Cria Senha</Text>
        <TextInput style={styles.input}/>

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput style={styles.input}/>

      </View>
      

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonTextB}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
        <Text style={styles.input2}>Esqueceu a senha</Text>
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
    bottom:350
  },
  inputContainer: {
    height : '85%',
    paddingTop: 0,
    width: '110%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    top:700
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    bottom:70
  },
  label: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'justify',
    fontWeight: 'bold',
    right:100
  },
  label2: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'justify',
    fontWeight: 'bold',
    right:100
  },
  input: {
  right:110,
  width: '80%',
  height: 30,
  borderWidth: 1,
  borderTopWidth: 0, // Remove a borda superior
  borderLeftWidth: 0, // Remove a borda esquerda
  borderRightWidth: 0, // Remove a borda direita
  borderColor: 'black', // Torna a cor da borda transparente
  borderBottomColor: '#cccccc', // Cor da linha que parece ser a borda
  borderRadius: 50,
  paddingHorizontal: 170,
  marginBottom: 10,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    top:0
  },
  rota: {
    left:110,
  bottom:50,
    
  },
  buttonTextB: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input2: {
    marginTop: 10,
    color: '#0000FF',
    fontWeight: 'bold',
    top:20
  },
});

export default Cadastro;
