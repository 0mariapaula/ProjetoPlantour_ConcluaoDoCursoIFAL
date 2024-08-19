import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    try {
      // Tenta autenticar o usuário com email e senha
      await signInWithEmailAndPassword(auth, email, password);
      router.push('Explorar');
    } catch (error) {
      // Exibe uma mensagem de erro caso a autenticação falhe
      Alert.alert('Erro', error.message);
    }
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
          onPress={handleLogin}>
          <Text style={styles.buttonTextB}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Cadastro')}>
          <Text style={styles.input2}>Cadastro de Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/CadastroEmpresa')}>
          <Text style={styles.input2}>Cadastrar Empresa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/EsqueceuSenha')}>
          <Text style={styles.input2}>Esqueceu a senha</Text>
        </TouchableOpacity>
        <View style={styles.imglogo}></View>
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
    borderColor: '#3A3A3A', // Cor da borda ajustada para um tom de cinza claro
    borderRadius: 8, // Arredondamento dos cantos para combinar com o estilo da imagem
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff', // Cor de fundo branca
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
