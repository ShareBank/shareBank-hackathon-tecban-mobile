import React from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

import imageProfile from '../../assets/images-profile/img-profile.jpg'
import iconTrasaction from '../../assets/icon/return-on-investment.png';
import iconQr from '../../assets/icon/qr-code.png';
import iconMoney from '../../assets/icon/money.png';


export default function Profile() {

    const navigation = useNavigation();

    function navigateToPersonal() {
        navigation.navigate('Personal')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />

            <View style={styles.header}>
                <Text style={styles.headerText}>Oi Leonardo! 👋</Text>

                <TouchableOpacity
                    onPress={navigateToPersonal}
                >
                    <Image source={imageProfile} style={styles.photo} />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <Image source={iconTrasaction} style={styles.icon} />
                        <Text style={styles.cardText}>Transações</Text>
                    </View>

                    <View style={styles.valueSection}>
                        <Text style={styles.valueTitle}>TOTAL EM CONTAS</Text>
                        <Text style={styles.value}>3405.20</Text>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.actionText}>Detalhes</Text>

                            <View style={styles.arrowIcon}>
                                <Feather name="arrow-right" size={15} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <Image source={iconTrasaction} style={styles.icon} />
                        <Text style={styles.cardText}>Saque digital</Text>
                    </View>

                    <View style={styles.extractionSection}>
                        <View style={styles.extraction}>
                            <Text style={styles.extractionDescription}>Retire seu dinheiro no Banco24horas apenas com QR Code</Text>
                            <View style={styles.qrCode}>
                                <Image source={iconQr} size={50} style={styles.iconQr} />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.actionText}>Sacar</Text>

                            <View style={styles.arrowIcon}>
                                <Feather name="arrow-right" size={15} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: '#FFFFAC' }]}>
                    <View style={styles.headerCard}>
                        <Image source={iconTrasaction} style={styles.icon} />
                        <Text style={styles.cardText}>Saque digital</Text>
                    </View>

                    <View style={styles.infoSection}>
                        <View style={styles.infoRow}>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>EBA!😱</Text>
                                <Text style={styles.infoDescription}>Você recebeu uma oferta de crédito do Banco Inter</Text>

                                <TouchableOpacity
                                    style={styles.infoButton}
                                    onPress={() => { }}
                                >
                                    <Text style={styles.infoText}>Confira</Text>

                                    <View style={[styles.arrowIcon, { backgroundColor: '#000' }]}>
                                        <Feather name="arrow-right" size={15} color="#FFFFAC" />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.iconMoney}>
                                <View style={styles.qrCode}>
                                    <Image source={iconMoney} size={50} style={styles.iconQr} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}