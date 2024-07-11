import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Perfil</Text>
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

export default Perfil;

