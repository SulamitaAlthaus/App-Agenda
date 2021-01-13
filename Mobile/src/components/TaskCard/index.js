import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Default from '../../assets/Default.png';

export default function TaskCard({ done }) {
    return (
        <TouchableOpacity style={[styles.card, done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={Default} style={styles.typeActive} />
                <Text style={styles.cardTitle}>Fazer Relatório</Text>
            </View>
            <View style={styles.cardRigth}>
                <Text style={styles.cardDate}>13/01/2021</Text>
                <Text style={styles.cardTime}>17:48</Text>
            </View>
        </TouchableOpacity>
    )
}