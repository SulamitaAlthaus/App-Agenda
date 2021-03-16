import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    imageIcon:{
        width: 42,
        height: 40,
        marginHorizontal: 5,
    },
    label:{
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input:{
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#ffbf00',
        marginHorizontal: 10
    },
    inputArea:{
        fontSize: 16,
        padding: 10,
        width: '95%',
        height: 100,
        borderWidth: 1,
        borderColor: '#ffbf00',
        borderRadius: 10,
        marginHorizontal: 10,
        textAlignVertical: 'top'
    },
    inputInline:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    inline:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 50
    },
    switchLabel:{
        fontWeight: 'bold',
        color: '#ffbf00',
        textTransform: 'uppercase',        
        fontSize: 16,
        paddingLeft: 10,
    },
    removeLabel:{
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',        
        fontSize: 16,

    }
});

export default styles;