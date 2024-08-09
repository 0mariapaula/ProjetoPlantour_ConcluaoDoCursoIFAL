import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; //adc : antes nao estava funcionando
import DateTimePicker from '@react-native-community/datetimepicker';

const CriarRoteiro = () => {
//  const navigation = useNavigation();
const router = useRouter(); //adc essa parte aqui

  const [nome, setNome] = useState('');
  const [locais, setLocais] = useState(['']); // Estado para armazenar a lista de locais

  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFinal, setDataFinal] = useState(new Date());
  const [visibilidade, setVisibilidade] = useState('Privado');
  const [showInicio, setShowInicio] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  // Função para adicionar um novo campo de entrada de local
  const addLocalInput = () => {
    setLocais([...locais, '']);
  };

  // Função para remover um campo de entrada de local
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
                      let updatedLocais = [...locais];
                      updatedLocais[index] = text;
                      setLocais(updatedLocais);
                    }}
                  />
                  {index === locais.length - 1 ? ( // Mostrar ícone de adição para o último campo de entrada
                    <TouchableOpacity style={styles.localButton} onPress={addLocalInput}>
                      <Image
                        source={{ uri: 'https://img.icons8.com/ios/452/plus.png' }}
                        style={styles.localIcon}
                      />
                    </TouchableOpacity>
                  ) : ( // Mostrar ícone de remoção para os demais campos de entrada
                    <TouchableOpacity style={styles.localButton} onPress={() => removeLocalInput(index)}>
                      <Image
                        source={{ uri: 'https://img.icons8.com/android/452/minus.png' }}
                        style={styles.localIcon}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data início</Text>
              <TouchableOpacity onPress={showDatepickerInicio}>
                <TextInput
                  style={[styles.input, styles.dateInput]}
                  placeholder="Data início"
                  value={dataInicio.toLocaleDateString()}
                  editable={false}
                />
              </TouchableOpacity>
              {showInicio && (
                <DateTimePicker
                  testID="dateTimePickerInicio"
                  value={dataInicio}
                  mode="date"
                  display="default"
                  onChange={onChangeInicio}
                />
              )}
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data final</Text>
              <TouchableOpacity onPress={showDatepickerFinal}>
                <TextInput
                  style={[styles.input, styles.dateInput]}
                  placeholder="Data final"
                  value={dataFinal.toLocaleDateString()}
                  editable={false}
                />
              </TouchableOpacity>
              {showFinal && (
                <DateTimePicker
                  testID="dateTimePickerFinal"
                  value={dataFinal}
                  mode="date"
                  display="default"
                  onChange={onChangeFinal}
                />
              )}
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Visibilidade</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setVisibilidade('Privado')}
              >
                <View style={[styles.radioCircle, visibilidade === 'Privado' && styles.selectedRadioCircle]} />
                <Text style={styles.radioText}>Privado</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => setVisibilidade('Público')}
              >
                <View style={[styles.radioCircle, visibilidade === 'Público' && styles.selectedRadioCircle]} />
                <Text style={styles.radioText}>Público</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={[styles.button, styles.finalizarButton]}>
            <Text style={styles.finalizarButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 50, // Ajustar conforme necessário
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    bottom: 30,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  inputGroup: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  seta: {
    right: 150,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  localInputContainer: {
    width: '100%',
  },
  localInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  localInput: {
    flex: 1,
  },
  localButton: {
    marginLeft: 10,
  },
  localIcon: {
    width: 24,
    height: 24,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginLeft: 150,
  },
  dateInput: {
    width: '48%',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2D9AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    backgroundColor: '#2D9AFF',
  },
  radioText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2D9AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finalizarButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2D9AFF',
  },
  finalizarButtonText: {
    color: '#2D9AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CriarRoteiro;
