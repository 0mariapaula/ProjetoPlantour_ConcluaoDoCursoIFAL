import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; //adc : antes nao estava funcionando
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, addDoc } from "firebase/firestore";
import { db } from './../firebaseConfig';
import { getAuth } from 'firebase/auth';

const CriarRoteiro = () => {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [locais, setLocais] = useState(['']);
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFinal, setDataFinal] = useState(new Date());
  const [visibilidade, setVisibilidade] = useState('Privado');
  const [showInicio, setShowInicio] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const addLocalInput = () => {
    setLocais([...locais, '']);
  };

  const removeLocalInput = (index) => {
    const updatedLocais = [...locais];
    updatedLocais.splice(index, 1);
    setLocais(updatedLocais);
  };

  const onChangeInicio = (event, selectedDate) => {
    const currentDate = selectedDate || dataInicio;
    setShowInicio(Platform.OS === 'ios');
    setDataInicio(currentDate);
  };

  const onChangeFinal = (event, selectedDate) => {
    const currentDate = selectedDate || dataFinal;
    setShowFinal(Platform.OS === 'ios');
    setDataFinal(currentDate);
  };

  const showDatepickerInicio = () => {
    setShowInicio(true);
  };

  const showDatepickerFinal = () => {
    setShowFinal(true);
  };

  const adicionarRoteiro = async () => {
    try {
      const usuarioId = 'ID_DO_USUARIO_AUTENTICADO'; // Substitua com o ID do usuário autenticado
      await addDoc(collection(db, 'roteiros'), {
        nome,
        locais,
        dataInicio: dataInicio.toISOString(),
        dataFinal: dataFinal.toISOString(),
        visibilidade,
        usuarioId, // Certifique-se de adicionar o campo usuarioId
      });
      console.log('Roteiro criado com sucesso!');
      router.push('/Viagens'); // Navegar de volta para a tela 'Viagens'
    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.push('/Viagens')}>
            <Image source={require('../assets/seta.png')} style={styles.seta} />
          </TouchableOpacity>
          <Text style={styles.topBarText}>Criar Roteiro</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Definir locais</Text>
            <View style={styles.localInputContainer}>
              {locais.map((local, index) => (
                <View key={index} style={styles.localInputRow}>
                  <TextInput
                    style={[styles.input, styles.localInput]}
                    placeholder={`Local ${index + 1}`}
                    value={local}
                    onChangeText={(text) => {
                      const updatedLocais = [...locais];
                      updatedLocais[index] = text;
                      setLocais(updatedLocais);
                    }}
                  />
                  <TouchableOpacity onPress={() => removeLocalInput(index)}>
                    <Text style={styles.removeButton}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity onPress={addLocalInput} style={styles.addButton}>
                <Text style={styles.addButtonText}>Adicionar Local</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data de Início</Text>
            <TouchableOpacity onPress={showDatepickerInicio}>
              <Text style={styles.input}>{dataInicio.toDateString()}</Text>
            </TouchableOpacity>
            {showInicio && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dataInicio}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeInicio}
              />
            )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data de Final</Text>
            <TouchableOpacity onPress={showDatepickerFinal}>
              <Text style={styles.input}>{dataFinal.toDateString()}</Text>
            </TouchableOpacity>
            {showFinal && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dataFinal}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeFinal}
              />
            )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Visibilidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Visibilidade"
              value={visibilidade}
              onChangeText={setVisibilidade}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={adicionarRoteiro}>
            <Text style={styles.submitButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  seta: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  topBarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  contentContainer: {
    padding: 20,
    flex: 1,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  localInputContainer: {
    marginTop: 10,
  },
  localInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  localInput: {
    flex: 1,
    marginRight: 10,
  },
  removeButton: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#2D9AFF',
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#2D9AFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CriarRoteiro;
