import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#1a1a1a',
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth:  5,
        borderBottomColor: '#ffbf00',
        paddingTop: 15

    },
    logo: {
        width: 150,
        height: 40
    },
    notification: {
        position: "absolute",
        right: 20,
        paddingTop: 15
    },
    notificationImage: {
        width: 30,
        height: 35
    },
    circle: {
        width: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 18,
        bottom: 13,
    },
    leftIcon: {
        paddingTop: 15,
        position: "absolute",
        left: 20

    },
    leftIconImage: {
        width: 35,
        height: 35,
        opacity: 0.5

    }
});


export default styles;