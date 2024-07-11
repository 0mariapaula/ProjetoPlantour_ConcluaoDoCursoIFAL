// FiltroEstadoCidade.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']; // Exemplo de estados
const cidades = {
  'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
  'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
  'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
}; // Exemplo de cidades por estado

const FiltroEstadoCidade = ({ onFilterChange }) => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const aplicarFiltro = () => {
    if (estadoSelecionado && cidadeSelecionada) {
      onFilterChange({ estado: estadoSelecionado, cidade: cidadeSelecionada });
      setModalVisible(false);
    } else {
      alert('Por favor, selecione estado e cidade.');
    }
  };

  const limparFiltro = () => {
    setEstadoSelecionado('');
    setCidadeSelecionada('');
    onFilterChange({ estado: '', cidade: '' });
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.filtroButton}>Filtro</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o estado:</Text>
            {estados.map((estado) => (
              <TouchableOpacity
                key={estado}
                style={[
                  styles.option,
                  estado === estadoSelecionado && styles.selectedOption,
                ]}
                onPress={() => setEstadoSelecionado(estado)}
              >
                <Text>{estado}</Text>
              </TouchableOpacity>
            ))}

            {estadoSelecionado ? (
              <>
                <Text style={styles.modalTitle}>Selecione a cidade:</Text>
                {cidades[estadoSelecionado].map((cidade) => (
                  <TouchableOpacity
                    key={cidade}
                    style={[
                      styles.option,
                      cidade === cidadeSelecionada && styles.selectedOption,
                    ]}
                    onPress={() => setCidadeSelecionada(cidade)}
                  >
                    <Text>{cidade}</Text>
                  </TouchableOpacity>
                ))}
              </>
            ) : null}

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={aplicarFiltro}>
                <Text style={styles.buttonText}>Pesquisar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={limparFiltro}>
                <Text style={styles.buttonText}>Limpar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  filtroButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#007BFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default FiltroEstadoCidade;
