import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import logoBank from '../../assets/icon/one.png'

export default function BankManager() {
    const navigation = useNavigation();

    function toBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />

            <View style={styles.headerInfo}>
                <TouchableOpacity
                    style={styles.buttonToBack}
                    onPress={toBack}
                >
                    <Feather name="chevron-left" size={30} color="#000" />
                    <Text style={styles.headerButtonText}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Saque Digital</Text>
                </View>
            </View>

            <View style={styles.sectionBanks}>
                <TouchableOpacity 
                    style={styles.bank}
                >
                    <Image source={logoBank} style={styles.logoBank} />
                    <Text style={styles.bankName}>Banco 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}