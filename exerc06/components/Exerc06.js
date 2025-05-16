import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Exerc06() {
    const [numero, setNumero] = useState();
    const [centena, setCentena] = useState();
    const [dezena, setDezena] = useState();
    const [unidade, setUnidade] = useState();

    const calcular = () => {
        const num = parseInt(numero);

        if (num >= 0 && num <= 999) {
            setCentena(Math.floor(num / 100));
            setDezena(Math.floor((num % 100) / 10));
            setUnidade(num % 10);
        } else {
            setCentena(null);
            setDezena(null);
            setUnidade(null);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Número:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNumero}
                keyboardType="numeric"
            />
            <Button title="Calcular" onPress={calcular} />
            {centena !== null && (
                <Text style={styles.resultado}>
                    CENTENA = {centena}{"\n"}
                    DEZENA = {dezena}{"\n"}
                    UNIDADE = {unidade}
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
        marginTop: 10,
    },
});