import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

const CadastroEmpresa = () => {
  const router = useRouter(); 
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedAddress = address.trim();

    if (!cnpj || !trimmedEmail || !phone || !trimmedAddress || !trimmedName || !password || !confirmPassword) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return;
    }
    if (!/^\d{14}$/.test(cnpj)) {
      Alert.alert('Erro', 'CNPJ inválido!');
      return;
    }
    if (!/^\d{10,11}$/.test(phone)) {
      Alert.alert('Erro', 'Telefone inválido!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso', 'Conta da empresa criada com sucesso!');
      router.push('/');
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
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
          <Text style={styles.label}>CNPJ:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={14}
            onChangeText={(text) => setCnpj(handleNumericInput(text))}
            value={cnpj}
            placeholder="Digite o CNPJ"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setEmail} 
            value={email} 
            placeholder="Digite o email"
          />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) => setPhone(handleNumericInput(text))}
            value={phone}
            placeholder="Digite o telefone"
          />

          <Text style={styles.label}>Endereço:</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setAddress} 
            value={address} 
            placeholder="Digite o endereço"
          />

          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={setName} 
            value={name} 
            placeholder="Digite o nome"
          />

          <Text style={styles.label}>Criar senha :</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <Text style={styles.label}>Confirmar senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.buttonTextB}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/')}>
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
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '70%',
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