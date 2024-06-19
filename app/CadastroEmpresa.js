import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from 'expo-router';

const CadastroEmpresa = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.logo} source={require('./../assets/logo.png')} />
          <Text style={styles.title}>Cadastro de empresa</Text>


          <Text style={styles.label}>CNPJ:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Endereço:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} />

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
            placeholder="Confirmar senha"
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D9AFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#D9D9D9',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
});

export default CadastroEmpresa;
