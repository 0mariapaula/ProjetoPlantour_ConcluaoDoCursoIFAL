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

        <Text style={styles.label}>Nome Completo:</Text>
           <TextInput style={styles.input}/>

        <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input}/>

        <Text style={styles.label}>Telefone:</Text>
          <TextInput style={styles.input}/>

        <Text style={styles.label}>Criar senha :</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={setPassword}
            />

        <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={setPassword}
            />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonTextB}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('index')}>
        <Text style={styles.input2}>Possuo cadastro</Text>
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
    bottom:370
  },
  inputContainer: {
    height : '85%',
    paddingTop: 0,
    width: '110%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    top:750
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    bottom:20
  },
  label: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'justify',
    fontWeight: 'bold',
    right:100
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#D9D9D9',
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
