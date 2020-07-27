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
    justifyContent: 'space-between',
    zIndex: 0
  },
 
  headerInfo: {
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
 
  photo: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    zIndex: 10
  },
 
  section: {
    paddingHorizontal: 21,
    paddingTop: StatusBar.statusBarHeight + 65,
    marginTop: -160,
    // flex: 1,
    // flexDirection: 'column',
    // position: 'absolute',
    // zIndex: 1,
    // right: 0,
    // left: 0
  },
 
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 188,
    paddingHorizontal: 18,
    paddingVertical: 21,
    borderRadius: 8,
    marginTop: 19
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
    marginTop: 18
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
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  extractionSection: {
    flexDirection: 'column',
    marginTop: 18
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
    borderRadius: 72 / 2,
    backgroundColor: '#0000001A'
  },
 
  infoSection: {
    flexDirection: 'column',
    marginTop: 18
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
  },
 
  banks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 19,
  },
 
  addAccount: {
    backgroundColor: '#D8E7FF',
    width: 180,
    height: 188,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  titleAdd: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    color: '#656565',
    marginTop: 14
  },
 
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#656565',
    textAlign: 'center',
    width: 130
  },
})