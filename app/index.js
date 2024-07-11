import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
          onPress={() => navigation.navigate('Explorar')}>
          <Text style={styles.buttonTextB}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.input2}>Primeiro acesso</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CadastroEmpresa')}>
          <Text style={styles.input2}>Cadastrar Empresa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
          <Text style={styles.input2}>Esqueceu a senha</Text>
        </TouchableOpacity>

        <View style={styles.imglogo}>
          
        </View>
      </View>
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
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
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
    marginBottom: 20,
  },
  buttonTextB: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input2: {
    marginTop: 20,
    color: '#2D9AFF',
    fontWeight: 'bold',
  },
  imglogo: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
});

export default LoginScreen;