import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Texto from '../../../components/Texto';
import Button from '../../../components/Button';

export default function components({ nome, logo, nomeFazenda, descricao, preco, botao }) {
    return (
        <View style={styles.container}>
            <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logo} />
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>

            <Texto style={styles.descricao}>{descricao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>

            <Button text={botao} style={styles.botao} onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({


    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f25",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16
    }
});
