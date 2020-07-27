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
        flexDirection: 'column',
        paddingHorizontal: 39,
        marginTop: 38
    },

    bankTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 30,
        marginBottom: 28
    },

    bank: {
        flexDirection: 'row',
        //justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        paddingHorizontal: 9,
        paddingVertical: 7,
        height: 53,
        borderRadius: 11,
        shadowColor: '#000',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.5
    },

    logoBank: {
        backgroundColor: '#FFF',
        width: 40,
        height: 40,
        borderRadius: 40/2,
        marginRight: 5
    },

    bankName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20
    }
})