import React, { useState } from 'react';
import {
    TouchableOpacity,
    Image,
    DatePickerIOS
} from 'react-native';
import styles from './styles';
import iconCalendar from '../../assets/Calendario.png';
import iconTime from '../../assets/Relogio.png';


export default function({ type }){
    const [datetime, setDateTime] = useState(new Date);

    return(
        <TouchableOpacity style={styles.input}>
            <DatePickerIOS
                date={datetime}
                mode={type}
                minimumDate={new Date}
                onDateChange={setDateTime}
            />
            <Image style={styles.iconTextInput} source={type=='date' ? iconCalendar : iconTime}/>
        </TouchableOpacity>
    )
}