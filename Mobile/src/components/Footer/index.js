import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import add from '../../assets/Plus.png';
import save from '../../assets/Salvar.png'

export default function Footer({ icon }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={icon == 'add' ? add : save} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.text}>Organize sua vida</Text>

        </View>
    )
}