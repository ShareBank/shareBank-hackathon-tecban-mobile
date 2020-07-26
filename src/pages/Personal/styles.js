import { StyleSheet } from 'react-native';
import StatusBar from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
    },

    header: {
        flexDirection: 'row',
        paddingTop: StatusBar.statusBarHeight + 13.62,
        paddingLeft: 23,
        alignItems: 'center',
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

    image: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    imageText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },

    photo: {
        width: 112,
        height: 112,
        borderRadius: 112/2,
        marginTop: 17
    },

    form: {
        marginTop: 17,
        paddingHorizontal: 34
    },

    inputLabel: {
        color: '#FF00A4',
        fontSize: 10,
        fontFamily: 'Poppins_500Medium'
    },

    textInput: {
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        fontFamily: 'Poppins_500Medium',
        fontSize: 17
    },

    sectionPassword: {
        marginTop: 59
    },

    sectionTitle: {
        color: '#797979',
        fontFamily: 'Poppins_300Light',
        fontSize: 12        
    },

    buttonLogout: {
        marginTop: 45,
        backgroundColor: '#0E65E5',
        alignItems: 'center',
        width: '100%',
        borderRadius: 23
    },

    buttonText: {
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        paddingVertical: 9
    },  

    buttonDelete: {
        marginTop: 32,
        backgroundColor: '#F80051',
        alignItems: 'center',
        width: '100%',
        borderRadius: 23
    }
    
})