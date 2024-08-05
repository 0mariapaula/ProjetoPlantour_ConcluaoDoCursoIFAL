import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, Text } from 'react-native';

const CadastroEmpresa = () => {
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmaSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    axios.post('http://10.140.40.19:3000/api/usuarios_empresas', {
      cnpj: cnpj,
      email: email,
      telefone: telefone,
      endereco: endereco,
      nome: nome,
      senha: senha,
    })
    
    .then(response => {
      setMensagem('Empresa cadastrada com sucesso!');
    })
    .catch(error => {
      setMensagem('Erro ao cadastrar empresa');
    });
  };

  return (
    <View>
      <TextInput placeholder="CNPJ" onChangeText={setCnpj} value={cnpj} />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Telefone" onChangeText={setTelefone} value={telefone} />
      <TextInput placeholder="Endereço" onChangeText={setEndereco} value={endereco} />
      <TextInput placeholder="Nome" onChangeText={setNome} value={nome} />
      <TextInput placeholder="Senha" onChangeText={setSenha} value={senha} secureTextEntry />
      <TextInput placeholder="Confirma Senha" onChangeText={setConfirmaSenha} value={confirmaSenha} secureTextEntry />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <Text>{mensagem}</Text>
    </View>
  );
};

export default CadastroEmpresa;
