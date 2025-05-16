import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Exerc04() {
    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [media, setMedia] = useState();

    const calcular = () => {
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);

        if (n1 > 0 && n2 > 0 && n3 > 0) {
            const mediaPonderada = (n1 * 2 + n2 * 2 + n3 * 3) / (2 + 2 + 3);
            setMedia(mediaPonderada.toFixed(2));
        } else {
            setMedia(null);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nota 1:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNota1}
            />
            <Text style={styles.texto}>Nota 2:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNota2}
            />
            <Text style={styles.texto}>Nota 3:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNota3}
            />
            <Button title="Calcular" onPress={calcular} />
            {media && (
                <Text style={styles.resultado}>
                    A média ponderada é {media}.
                </Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
    },
    input: {
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 5,
        width: "100%",
        paddingHorizontal: 10,
    },
    resultado: {
        fontSize: 20,
        marginTop: 20,
    },
});