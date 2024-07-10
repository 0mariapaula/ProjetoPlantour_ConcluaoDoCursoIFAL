import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Início</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Inicio;
