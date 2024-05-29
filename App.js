import React from 'react';
import { NativeRouter, Route } from 'expo-router';
import Cadastro from './app/components/Cadastro';
import EsqueceuSenha from './app/components/EsqueceuSenha';
import LoginScreen from './app/components/LoginScreen';
import inicio from './app/inicio';
import CardDetalhes from './app/CardDetalhes';
import ConfirmacaoOk from './app/ConfirmacaoOk';
import ConfirmaçãoDeSenha from './app/ConfirmaçãoDeSenha';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/esqueceuSenha" component={EsqueceuSenha} />
      <Route path="/inicio" component={inicio} />
      <Route path="/CardDetalhes" component={CardDetalhes} />
      <Route path="/ConfirmacaoOk" component={ConfirmacaoOk} />
      <Route path="/ConfirmaçãoDeSenha" component={ConfirmaçãoDeSenha} />
    </NativeRouter>
  );
};

export default App;
