import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exerc04 from './components/Exerc04';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Restaurante Bem-Bão</Text>
      <Exerc04 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 44,
    fontWeight: 'bold',
    margin: 10,
  },
});