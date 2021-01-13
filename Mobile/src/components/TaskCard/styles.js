import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '90%',
        height:70,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height:2
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 5
    },
    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    typeActive:{
        width: 50,
        height: 50,
    },
    cardTitle:{
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRigth:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    cardDate:{
        color: '#ffbf00',
        fontSize: 16,
    },
    cardTime:{
        color: '#707070',
    },
    done:{
        opacity: 0.5
    }
});

export default styles;