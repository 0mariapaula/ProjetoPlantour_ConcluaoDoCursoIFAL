import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router'; //adc : antes nao estava funcionando

const Cadastro = () => {
  //const navigation = useNavigation();
  const router = useRouter(); //adc
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCadastro = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !phone || !cpf || !password || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }
    if (!/^\d{10,11}$/.test(phone)) {
      Alert.alert('Erro', 'Telefone inválido!');
      return;
    }
    if (!/^\d{11}$/.test(cpf)) {
      Alert.alert('Erro', 'CPF inválido!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    console.log('Nome:', trimmedName);
    console.log('Email:', trimmedEmail);
    console.log('Telefone:', phone);
    console.log('CPF:', cpf);
    console.log('Senha:', password);

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo
  };

  const handleNumericInput = (input) => {
    return input.replace(/[^0-9]/g, '');
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
          <Text style={styles.title}>Cadastro de usuário</Text>

          <Text style={styles.label}>Nome Completo:</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setName} 
            value={name} 
            placeholder="Digite seu nome completo"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setEmail} 
            value={email} 
            placeholder="Digite seu email"
          />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) => setPhone(handleNumericInput(text))}
            value={phone}
            placeholder="Digite seu telefone"
          />

          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) => setCpf(handleNumericInput(text))}
            value={cpf}
            placeholder="Digite seu CPF"
          />

          <Text style={styles.label}>Criar senha :</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <Text style={styles.label}>Confirmar senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleCadastro}
          >
            <Text style={styles.buttonTextB}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/index')}>
            <Text style={styles.input2}>Já possui cadastro? Faça login.</Text>
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
    height: '100%',
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
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
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

export default Cadastro;