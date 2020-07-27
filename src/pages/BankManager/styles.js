import { StyleSheet } from 'react-native'
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    headerinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 3,
        position: 'absolute',
        paddingTop: StatusBar.statusBarHeight + 8,
    },

    headerText: {
        color: '#000',
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
        color: '#000',
        fontFamily: 'Poppins_500Medium',
        marginRight: 36
    },

    title: {
        alignItems: 'center',
        paddingTop: StatusBar.statusBarHeight + 8,
    },

    textTitle: {
        color: '#000',
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },

    sectionBanks: {
        flexDirection: 'column'
    },

    bank: {
        flexDirection: 'row',
        //justifyContent: 'center'
    },

    // logoBank: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // }
})