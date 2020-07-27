import React, {useState, useEffect} from 'react';
import { View, Text, Image, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import AsyncStorage from "@react-native-community/async-storage";
import apiShareBank from '../../services/apiShareBank';

import styles from './styles'

import imageProfile from '../../assets/images-profile/img-profile.jpg'
import iconTrasaction from '../../assets/icon/return-on-investment.png';
import iconQr from '../../assets/icon/qr-code.png';
import iconMoney from '../../assets/icon/money.png';
import iconPlus from '../../assets/icon/plus.png';
import iconBank from '../../assets/icon/bank.png';
import { ScrollView } from 'react-native-gesture-handler';


export default function Profile() {

    const api = apiShareBank();

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [balance, setbalance] = useState('');

    const getName = async () => {
        const userName = await AsyncStorage.getItem('userName');
        setName(userName);
    } 

    const getBalance = async () => {
        try {
            await api.openbankBalances().then((response)=>{
                
                const {Data:{Balance}} = response;
                if(Balance){
                    const totalBalance = 
                    Number(Balance[0].Amount.Amount) +
                    Number(Balance[1].Amount.Amount) +
                    Number(Balance[2].Amount.Amount);
                    setbalance(totalBalance);
                    if (totalBalance) {                        
                        handleSaveStorage(totalBalance);
                    }
                } else{
                    return 0 ;
                }                
            }).catch((error)=>{
                console.log(error);
            })         
        } catch (error) {
            alert('Não foi possivel obter o Saldo da Conta')
        }
    }

    const handleSaveStorage = async (totalBalance) =>{
        if(totalBalance){
            await AsyncStorage.setItem('totalBalance', totalBalance.toString());             
        }
    }

    useEffect(()=>{
        getName();
        getBalance();
    },[]);

    function navigateToPersonal() {
        navigation.navigate('Personal')
    }

    function navigateToTransactions() {
        navigation.navigate('Transactions')
    }

    function navigateToExtractionsQR() {
        navigation.navigate('ExtractionsQR')
    }

    function navigateToAddBank() {
        navigation.navigate('AddBank')
    }    

    function navigateToBankManager() {
        navigation.navigate('BankManager')
    }  

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />

            <View style={styles.header}></View>

            <View style={styles.headerInfo}>
                <Text style={styles.headerText}>Oi {name}! 👋</Text>

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
                        <Text style={styles.value}>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL'
                            }).format(balance)}
                        </Text>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={navigateToTransactions}
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
                            onPress={navigateToExtractionsQR}
                        >
                            <Text style={styles.actionText}>Sacar</Text>

                            <View style={styles.arrowIcon}>
                                <Feather name="arrow-right" size={15} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.banks}>
                    <TouchableOpacity
                        style={styles.addAccount}
                        onPress={navigateToAddBank}
                    >
                        <Image source={iconPlus} />
                        <Text style={styles.titleAdd}>Adicionar conta</Text>
                        <Text style={styles.description}>adicionar uma conta de banco</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.addAccount, { backgroundColor: '#FFF'}]}
                        onPress={navigateToBankManager}
                    >
                        <Image source={iconBank} />
                        <Text style={[styles.description, { marginTop: 13}]}>Você tem 1 banco adicionados</Text>
                    </TouchableOpacity>
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
        </ScrollView>
    )
}