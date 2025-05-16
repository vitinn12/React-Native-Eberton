import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exerc05 from './components/Exerc05';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nota do Aluno</Text>
      <Exerc05 />
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