import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from 'expo-router';

const EsqueceuSenha = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const sendPasswordResetEmail = async () => {
    // Simulação de envio assíncrono (substitua com a lógica real de envio de e-mail)
    try {
      // Simular um tempo de espera de 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aqui você chamaria sua API ou serviço para enviar o e-mail de recuperação
      Alert.alert('Sucesso', `Um e-mail de recuperação foi enviado para ${email}`);

      // Navegar para a tela de confirmação após o envio do e-mail
      navigation.navigate('ConfirmacaoOk');
    } catch (error) {
      console.error('Erro ao enviar e-mail de recuperação:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar o e-mail de recuperação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, insira seu endereço de e-mail.');
      return;
    }

    // Chamar a função para enviar o e-mail de recuperação
    sendPasswordResetEmail();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Cadeado.png')} style={styles.cadeado} />
      <Text style={styles.label}>Esqueceu Sua Senha?</Text>
      <Text style={styles.label2}>Digite seu endereço de e-mail abaixo e enviaremos um link para você recuperar o acesso à sua conta.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label3}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity 
          onPress={handleResetPassword}
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
    width: '100%',
    height:'60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  label: {
    marginBottom: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 30,
  },
  label2: {
    marginBottom: 5,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label3: {
    fontSize: 20,
    marginBottom: 5,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  cadeado: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 50,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: '#D9D9D9',
  },
  input2: {
    color: '#2D9AFF',
    fontWeight: 'bold',
    marginTop: 50,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
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
    marginTop: 40,
  },
});

export default EsqueceuSenha;