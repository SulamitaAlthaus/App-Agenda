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
    filterTextActive:{
        color: '#ffbf00',
        fontSize: 18,
        fontWeight: 'bold',

    },
    filterTextInative:{
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5
    },
    content:{
        width: '100%',
        marginTop: 30,
    },
    title:{
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#000000',
        alignItems: 'center'
    },
    titleText:{
        borderColor: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingHorizontal: 5
    }

})

export default styles;
