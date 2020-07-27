import { StyleSheet } from 'react-native';
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
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
        fontSize: 20
    },

    transactionView: {
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop: 34
    },

    transactionTitle: {
        color: '#34E899',
        fontFamily: 'Poppins_300Light',
        fontSize: 11,
        textShadowColor: '#34E899',
        textShadowOffset: { width: -1, height: 1},
        textShadowRadius: 10
    },
    
    value: {
        color: '#34E899',
        fontFamily: 'Poppins_400Regular',
        fontSize: 41,
        textShadowColor: '#00DF7D75',
        textShadowOffset: { width: -1, height: 1},
        textShadowRadius: 10
    },

    automation: {
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 23,
        marginTop: 31,
        zIndex: 5
    },  

    buttonText: {
        color: '#FFF',
        paddingHorizontal: 31,
        paddingVertical: 8,
        fontFamily: 'Poppins_700Bold',
        fontSize: 14
    },

    section: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 21,
        paddingTop: StatusBar.statusBarHeight + 270,
        position: 'absolute',
        zIndex: 1, 
        right: 0,
        left: 0
    },

    card: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 500,
        paddingHorizontal: 18,
        paddingVertical: 21,
        borderRadius: 8,
        marginBottom: 20,
        paddingBottom: 20
    },

    headerCard: {
        flexDirection: 'row',
        alignItems: "center",
    },

    icon: {
        width: 14.76,
        height: 14.76,
        marginRight: 5.24,
    },

    cardText: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        color: '#F71963'
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        marginTop: 13,
        paddingBottom: 9.5,
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 1
    },

    viewIcon: {
        borderColor: '#000',
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    description: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 7
    },

    itemTitle: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        color: '#2E2125'
    },

    itemBank: {
        color: '#444444',
        fontFamily: 'Poppins_300Light',
        fontSize: 10
    },

    itemData: {
        fontSize: 8,
        fontFamily: 'Poppins_300Light',
        color: '#A2A2A2'
    },

    itemValue: {
        left: 100,
        color: '#FA0255',
        fontFamily: 'Poppins_500Medium',
        fontSize: 11
    },

    //Estilização do Modal
    modal: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },

    containerModal: {
        paddingHorizontal: 24,
        flex: 1,
    },

    modalTitle: {
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 30,
        marginTop: 31
    },

    formLogin: {
        marginTop: 28,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
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
        marginTop: 138,
        backgroundColor: '#0E65E5',
        borderRadius: 23,
        alignItems: 'center'
    },

    buttonModalText: {
        color: '#FFF',
        paddingTop: 7,
        paddingBottom: 5,
        fontSize: 17,
        fontFamily: 'Poppins_700Bold'
    }
})