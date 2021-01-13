import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        backgroundColor: '#1a1a1a',
        alignItems: "center",
        borderTopWidth: 5,
        borderTopColor: '#ffbf00',
        position: 'absolute',
        bottom: 0
    },
    button:{
        position: 'relative',
        top: -30,
    },
    image:{
        width: 70,
        height: 70
    },
    text:{
        position: 'relative',
        top: -35,
        color: '#FFF'
    }
});

export default styles;