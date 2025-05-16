import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Exerc04() {
    const [peso, setPeso] = useState();
    const [preco, setPreco] = useState(null);

    const calcular = () => {
        const valor = parseFloat(peso); // Corrigido: usar peso
        const precoquilo = 89.9;

        if (!isNaN(valor) && valor > 0) {
            const total = valor * precoquilo;
            setPreco(total.toFixed(2));
        } else {
            setPreco(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Quantos KG do alimento:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPeso} // Corrigido
                keyboardType="numeric" // Opcional: só números
            />
            <Button title="Calcular" onPress={calcular} />
            {preco && (
                <Text style={styles.resultado}>
                    O preço do produto é R$ {preco}.
                </Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        width: "80%",
        paddingHorizontal: 10,
    },
    resultado: {
        fontSize: 20,
        marginTop: 20,
    },
});