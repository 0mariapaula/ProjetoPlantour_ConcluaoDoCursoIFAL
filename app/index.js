import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; //adc : antes nao estava funcionando
import { Route } from 'expo-router/build/Route';

const LoginScreen = () => {
  //const navigation = useNavigation();
  const router = useRouter(); //adc essa parte aqui
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('Explorar');
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

        <View style>

        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}>
          <Text style={styles.buttonTextB}>Entrar</Text>
        </TouchableOpacity>  

         {/* <TouchableOpacity onPress={() => router.push ('/Explorar')}>
          <Text style={styles.buttonTextB}>Entrar</Text>
        </TouchableOpacity>   ESSE CAMPO É O CERTO !!!! MAS NAO ESTA PEGANDO O ESTILO DO BOTT*/}

        <TouchableOpacity onPress={() => router.push('/Cadastro')}>
          <Text style={styles.input2}>Primeiro acesso</Text>
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