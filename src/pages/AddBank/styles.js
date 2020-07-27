import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    header: {
        flexDirection: 'row',
        paddingTop: StatusBar.statusBarHeight + 19,
        paddingLeft: 23,
        alignItems: 'center'
    },

    buttonToBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12
    },

    section: {
        paddingHorizontal: 32,
        flex: 1,
        flexDirection: 'column'
    },

    title: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 30,
        marginTop: 31,
        lineHeight: 35,
        textAlign: 'left',
        paddingLeft: 23
    },

    form: {
        marginTop: 40,
        alignItems: "center"
    },

    input: {
        marginTop: 30,
        width: 308,
        borderBottomWidth: 1,
        borderBottomColor: '#C1C1C1'
    },

    inputLabel: {
        color: '#FF00A4',
        fontSize: 10,
        fontFamily: 'Poppins_500Medium',
    },

    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#C1C1C1',
        fontFamily: 'Poppins_500Medium',
        fontSize: 17
    },

    buttonRegister: {
        width: '100%',
        backgroundColor: '#0E65E5',
        alignItems: 'center',
        marginTop: 45,
        paddingVertical: 9,
        borderRadius: 23,
        borderColor: '#0E65E5',
        borderWidth: 2,
        borderRadius: 23
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
        fontSize: 17
    },

    buttonCancel: {
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 18,
        paddingVertical: 9,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 23
    },
})