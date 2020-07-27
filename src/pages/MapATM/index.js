import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'

import styles from './styles';

export default function MapATM() {
    const navigation = useNavigation()

    function toBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonToBack}
                    onPress={toBack}
                >
                    <Feather name="chevron-left" size={30} color="#FFF" />
                    <Text style={styles.headerButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.textTitle}>Saque Digital</Text>
            </View>

            <MapView 
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -23.550198,
                    longitude: -46.633933,
                    latitudeDelta: 0.0050,
                    longitudeDelta: 0.0030,
                  }} 
            />

            <View style={styles.footer}>
                <Feather name="alert-circle" size={20} color="#FFF" />
                <Text style={styles.footerText}>Banco24Horas mais próximo de você</Text>
            </View>
        </View>
    )
}