import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import iconAtm from '../../assets/icon/atm.png'
import qrCodeScanner from '../../assets/qrCodeScanner.png'

export default function ExtractionQR() {
    const navigation = useNavigation();

    function toBack() {
        navigation.goBack();
    }

    function navigateToMap() {
        navigation.navigate('MapATM')
    }

    function navigateToScanner() {
        navigation.navigate('ScannerQR')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />

            <View style={styles.header}></View>

            <View style={styles.headerInfo}>
                <TouchableOpacity
                    style={styles.buttonToBack}
                    onPress={toBack}
                >
                    <Feather name="chevron-left" size={30} color="#FFF" />
                    <Text style={styles.headerButtonText}>Cancelar</Text>
                </TouchableOpacity>

                <View style={styles.infoExtract}>
                    <Text style={styles.textTitle}>ESCANEAR QR CODE</Text>
                    <Image source={qrCodeScanner} style={styles.imgScanner} />
                    <Text style={styles.description}>Selecione a opção Saque Digital na tela do caixa e posicione a câmera no QR Code</Text>
                </View>
            </View>
        </View>
    )
}