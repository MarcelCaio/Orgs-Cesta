import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../components/Texto';

export default function Items({ item: { nome, imagem } }) {

    return <View style={styles.item}>
        <Image source={imagem} style={styles.image} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>

}

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16
    },
    image: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})