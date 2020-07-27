import { StyleSheet, Dimensions } from 'react-native';
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 20,
        paddingTop: StatusBar.statusBarHeight + 20,
        position: 'absolute',
        zIndex: 0
    },

    header: {
        flexDirection: 'row',
        zIndex: 1,
        backgroundColor: '#000'
    },

    buttonToBack: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        left: 20,
        paddingTop: StatusBar.statusBarHeight + 8,
        zIndex: 4,
        backgroundColor: '#000',
        right: 0,
        left: 0,
        paddingHorizontal: 28,
        paddingBottom: 10
    },

    headerButtonText: {
        color: '#FFF',
        fontFamily: 'Poppins_500Medium',
        marginRight: 36
    },

    title: {
        alignItems: 'center',
        paddingTop: StatusBar.statusBarHeight + 8,
        zIndex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
    },

    textTitle: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },

    footer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 8,
        paddingVertical: 14
    },

    footerText: {
        color: '#FFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        paddingLeft: 7.81
    }
})