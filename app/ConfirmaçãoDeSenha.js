import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from 'expo-router';

const ConfirmaçãoDeSenha = () => {
  const navigation = useNavigation();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleUpdatePassword = () => {
    const trimmedNovaSenha = novaSenha.trim();
    const trimmedConfirmarSenha = confirmarSenha.trim();

    if (trimmedNovaSenha !== trimmedConfirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem. Por favor, tente novamente.");
    } else if (!trimmedNovaSenha || !trimmedConfirmarSenha) {
      Alert.alert("Erro", "As senhas não podem ser apenas espaços em branco.");
    } else {
      // Aqui você pode adicionar a lógica para atualizar a senha
      console.log('Nova Senha:', trimmedNovaSenha);
      console.log('Confirmar Senha:', trimmedConfirmarSenha);
      Alert.alert("Sucesso", "Senha atualizada com sucesso!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={styles.logo} source={require('./../assets/Cadeado.png')} />
        <Text style={styles.titulo}>Atualizar Senha</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nova Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua nova senha"
              secureTextEntry={true}
              value={novaSenha}
              onChangeText={setNovaSenha}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Nova Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua nova senha"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleUpdatePassword}
          >
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
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
  },
  inputContainer: {
    width: '90%',
    height:'90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#2D9AFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ConfirmaçãoDeSenha;
