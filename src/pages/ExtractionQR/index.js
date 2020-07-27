import React from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import iconAtm from '../../assets/icon/atm.png'

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
                    <Text style={styles.headerButtonText}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Saque Digital</Text>
                </View>

                <View style={styles.extractionView}>
                    <View style={styles.imgMain}>
                        <Image source={iconAtm} style={styles.iconAtm} />
                    </View>
                </View>

                <View style={styles.infoExtract}>
                    <Text style={styles.textTitle}>Selecione o valor do saque</Text>

                    <View style={styles.listValue}>
                        <TouchableOpacity
                            style={[styles.containerValue, { marginLeft: 0 }]}
                            onPress={navigateToScanner}
                        >
                            <Text style={styles.valueText}>$50</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.containerValue}
                            onPress={navigateToScanner}
                        >
                            <Text style={styles.valueText}>$100</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.containerValue}
                            onPress={navigateToScanner}
                        >
                            <Text style={styles.valueText}>$150</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.containerValue}
                            onPress={navigateToScanner}
                        >
                            <Text style={styles.valueText}>$200</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.containerValue}
                            onPress={navigateToScanner}
                        >
                            <Text style={styles.valueText}>$300</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.description}>Retire seu dinheiro no caixa do Banco24Horas mais próximo de você.</Text>

                    <TouchableOpacity
                        style={styles.mapView}
                        onPress={navigateToMap}
                    >
                        <Text style={styles.buttonText}>Mapa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}