import { StyleSheet } from 'react-native';
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    header: {
        backgroundColor: '#000',
        height: 354,
        paddingHorizontal: 20,
        paddingTop: StatusBar.statusBarHeight + 8,
        justifyContent: 'space-between',
        flexDirection: 'column',
        zIndex: 0,
        position: 'absolute',
        right: 0,
        left: 0
    },

    headerinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 3,
        position: 'absolute',
        paddingTop: StatusBar.statusBarHeight + 8,
        left: 25,
        right: 25
    },

    headerText: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },

    buttonToBack: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        left: 20,
        paddingTop: StatusBar.statusBarHeight + 8,
        zIndex: 10
    },

    headerButtonText: {
        color: '#FFF',
        fontFamily: 'Poppins_500Medium',
        marginRight: 36
    },

    title: {
        alignItems: 'center',
        paddingTop: StatusBar.statusBarHeight + 8,
    },

    textTitle: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 14,
        marginBottom: 12
    },

    extractionView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgMain: {
        backgroundColor: '#2B2B2B',
        width: 128,
        height: 128,
        borderRadius: 128/2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    infoExtract: {
        //marginTop: 45,
        paddingHorizontal: 38,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 256
        top: 200,
        bottom: 200
    },

    listValue: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
        paddingHorizontal: 38
    },

    containerValue: {
        borderColor: '#FFF',
        borderRadius: 128/2,
        borderWidth: 2,
        marginLeft: 11,
    },

    valueText: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#FFF',
        marginTop: 45,
        width: 273
    },

    mapView: {
        marginTop: 25,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 23,
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
        paddingVertical: 9
    },

    imgScanner: {
        borderColor: '#FFF',
        borderWidth: 3,
        width: 278,
        height: 278
    },

})