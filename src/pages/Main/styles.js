import { StyleSheet } from 'react-native';
import StatusBar from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    header: {
        flexDirection: 'row',
        paddingTop: StatusBar.statusBarHeight + 15,
        paddingLeft: 32,
    },

    functions: {
        marginBottom: 37,
        alignItems: 'center',
        paddingHorizontal: 32
    },

    descriptionText: {
        color: '#FFF',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 30
    },

    buttonLogin: {
        width: '100%',
        backgroundColor: '#0E65E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 19,
        borderRadius: 23,
    },

    buttonLoginText: {
        fontFamily: 'Poppins_700Bold',
        color: '#FFF',
        paddingVertical: 9,
        fontSize: 17
    },

    buttonSign: {
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 19,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 23
    },

    buttonSignText: {
        fontFamily: 'Poppins_700Bold',
        color: '#FFF',
        paddingVertical: 9,
        fontSize: 17
    },

    //Estilização Modal
    modal: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },

    containerModal: {
        paddingHorizontal: 24,
        flex: 1,
    },

    title: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 30,
        marginTop: 31
    },

    formLogin: {
        marginTop: 28
    },

    inputLabel: {
        color: '#FF00A4',
        fontSize: 10,
        fontFamily: 'Poppins_500Medium'
    },

    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#C1C1C1',
        fontFamily: 'Poppins_500Medium',
        fontSize: 17
    },

    button: {
        marginTop: 43,
        backgroundColor: '#0E65E5',
        borderRadius: 23,
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        paddingTop: 7,
        paddingBottom: 5,
        fontSize: 17,
        fontFamily: 'Poppins_700Bold'
    }
})