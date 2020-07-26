import { StyleSheet } from 'react-native';
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    header: {
        backgroundColor: '#000',
        height: 153,
        paddingHorizontal: 20,
        paddingTop: StatusBar.statusBarHeight + 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    headerText: {
        color: '#FFF',
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },

    photo: {
        width: 32,
        height: 32,
        borderRadius: 32/2
    },

    section: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 21,
    },

    card: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 188,
        paddingHorizontal: 18,
        paddingVertical: 21,
        borderRadius: 8,
        marginBottom: 20
    },

    headerCard: {
        flexDirection: 'row',
        alignItems: "center",
    },

    icon: {
        width: 14.76,
        height: 14.76,
        marginRight: 5.24
    },

    cardText: {
        fontFamily: 'Poppins_300Light',
        fontSize: 12,
        color: '#6A6A6A'
    },

    valueSection: {
        flexDirection: 'column',
        marginTop: 19
    },

    valueTitle: {
        color: '#34e899',
        fontSize: 12,
        fontFamily: 'Poppins_300Light'
    },

    value: {
        color: '#34e899',
        fontSize: 35,
        fontFamily: 'Poppins_400Regular'
    },

    actionButton: {
        backgroundColor: '#000',
        width: 136,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
    },

    actionText: {
        color: '#FFF',
        fontSize: 11,
        marginRight: 12.79
    },

    arrowIcon: {
        backgroundColor: '#FFF',
        width: 20,
        height: 20,
        borderRadius: 20/2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    extractionSection: {
        flexDirection: 'column',
        marginTop: 19
    },

    extraction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    extractionDescription: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#656565',
        textAlign: 'left',
        width: 163
    },

    iconQr: {
        width: 72,
        height: 72,
        borderRadius: 72/2,
        backgroundColor: '#0000001A'
    },

    infoSection: {
        flexDirection: 'column',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    info: {
        marginTop: 9.24
    },

    infoTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24
    },

    infoDescription: {
        width: 186,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    infoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 11
    },

    infoText: {
        marginRight: 11,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 11
    },

    iconMoney: {
        justifyContent: 'center'
    }
})