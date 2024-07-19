// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/components/LoginScreen';
import Cadastro from './app/components/Cadastro';
import EsqueceuSenha from './app/components/EsqueceuSenha';
import Inicio from './app/inicio';
import CardDetalhes from './app/CardDetalhes';
import ConfirmacaoOk from './app/ConfirmacaoOk';
import ConfirmacaoDeSenha from './app/ConfirmaçãoDeSenha';
import CadastroEmpresa from './app/CadastroEmpresa';
import Explorar from './app/Explorar';
import Detalhes from './app/Detalhes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CardDetalhes" component={CardDetalhes} />
        <Stack.Screen name="ConfirmacaoOk" component={ConfirmacaoOk} />
        <Stack.Screen name="ConfirmacaoDeSenha" component={ConfirmacaoDeSenha} />
        <Stack.Screen name="CadastroEmpresa" component={CadastroEmpresa} />
        <Stack.Screen name="Explorar" component={Explorar} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
