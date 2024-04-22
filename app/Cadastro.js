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
      <Image style={styles.logo} source={require('./../assets/logo.png')} />

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

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
    backgroundColor: '#AADDDD',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#D9D9D9',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#AADDDD',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTextB: {
    color: '#084D75',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input2: {
    marginTop: 10,
    color: '#0000FF',
    fontWeight: 'bold',
  },
});

export default Cadastro;
