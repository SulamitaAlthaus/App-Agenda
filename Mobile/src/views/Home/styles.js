import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
        
    },
    texto:{
        flex: 2,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 25,
        fontSize: 25,
    },
    filter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
        fontSize: 16
    },
    filterTextActived:{
        color: '#ffbf00',
        fontSize: 18,
        fontWeight: 'bold',

    },
    filterTextInative:{
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5
        
    }


})

export default styles;
