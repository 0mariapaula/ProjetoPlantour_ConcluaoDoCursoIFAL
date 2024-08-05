import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, Text } from 'react-native';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmaSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    axios.post('http://10.140.40.19:3000/api/usuarios_comuns', {
      nome_completo: nomeCompleto,
      email: email,
      telefone: telefone,
      cpf: cpf,
      senha: senha,
    })
    .then(response => {
      setMensagem('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
      setMensagem('Erro ao cadastrar usuário');
    });
  };

  return (
    <View>
      <TextInput placeholder="Nome Completo" onChangeText={setNomeCompleto} value={nomeCompleto} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Telefone" onChangeText={setTelefone} value={telefone} />
      <TextInput placeholder="CPF" onChangeText={setCpf} value={cpf} />
      <TextInput placeholder="Senha" onChangeText={setSenha} value={senha} secureTextEntry />
      <TextInput placeholder="Confirma Senha" onChangeText={setConfirmaSenha} value={confirmaSenha} secureTextEntry />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <Text>{mensagem}</Text>
    </View>
  );
};

export default Cadastro;
