import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from './Texto';

export default function components({ text, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.botao, style]} onPress={onPress}>
            <Texto style={styles.textoBotao}>{text}</Texto>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})