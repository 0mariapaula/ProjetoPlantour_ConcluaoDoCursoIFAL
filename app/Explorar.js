import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Explorar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Explorar</Text>
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

export default Explorar;
