import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail } from "firebase/auth";  // Importe a função correta do Firebase
import { auth } from '../firebaseConfig';  // Certifique-se de que o auth está sendo importado corretamente

const EsqueceuSenha = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const sendPasswordResetEmailFirebase = async () => {
    try {
      // Envia o email de redefinição de senha usando Firebase
      await sendPasswordResetEmail(auth, email);

      // Redireciona para a tela de confirmação após o envio do e-mail
      router.push('/ConfirmacaoOk');
    } catch (error) {
      // Em caso de erro, exibe uma mensagem
      Alert.alert('Erro', 'Ocorreu um erro ao enviar o e-mail de recuperação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, insira seu endereço de e-mail.');
      return;
    }

    // Chamar a função para enviar o e-mail de recuperação
    sendPasswordResetEmailFirebase();
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

        <TouchableOpacity onPress={() => router.push('/Cadastro')}>
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
    borderColor: '#3A3A3A', // Cor da borda ajustada para um tom de cinza claro
    borderRadius: 8, // Arredondamento dos cantos para combinar com o estilo da imagem
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff', // Cor de fundo branca
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