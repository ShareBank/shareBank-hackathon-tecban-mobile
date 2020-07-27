import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize'
import AsyncStorage from "@react-native-community/async-storage";
import apiShareBank from '../../services/apiShareBank';

import styles from './styles'

import iconTrasaction from '../../assets/icon/return-on-investment-2.png';
import iconItem from '../../assets/icon/book.png';

export default function Profile() {
    const api = apiShareBank();
    const navigation = useNavigation();
    const modalizeRef = useRef(null)
    const modalizePaymentRef = useRef(null)
    const [balance, setbalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const getBalance = async () => {
        const totalBalance = await AsyncStorage.getItem('totalBalance');
        setbalance(totalBalance);
    } 

    const getTransactions = async () => {
        try {
            await api.openbankTransactions().then((response)=>{                
                const {Data:{Transaction}} = response;
                if(Transaction){
                    setTransactions(Transaction);                   
                } else{
                    return 0 ;
                }                
            }).catch((error)=>{
                console.log(error);
            })         
        } catch (error) {
            alert('Não foi possivel obter as transações da Conta')
        }
    }

    useEffect(()=>{
        getBalance();
        getTransactions();
    },[]);

    function toBack() {
        navigation.goBack()
    }

    function openModal() {
        modalizeRef.current?.open()
    }

    function openPaymentModal() {
        modalizePaymentRef.current?.open()
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
                    <Text style={styles.textTitle}>Transações</Text>
                </View>

                <View style={styles.transactionView}>
                    <Text style={styles.transactionTitle}>TOTAL EM CONTAS</Text>
                    <Text style={styles.value}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(balance)}
                    </Text>

                    <TouchableOpacity
                        style={styles.automation}
                        onPress={openModal}
                    >
                        <Text style={styles.buttonText}>Automatizar uma transação</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <Image source={iconTrasaction} style={styles.icon} />
                        <Text style={styles.cardText}>Últimas transações</Text>
                    </View>

                    <FlatList
                        data={transactions}
                        keyExtractor={transaction => String(transaction.TransactionId)}
                        renderItem={({ item: transaction }) => (
                            <View style={styles.listItem}>
                                <View style={styles.viewIcon}>
                                    <Image source={iconItem} />
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.itemTitle}>Faculdade</Text>
                                    <Text style={styles.itemBank}>Saque do Banco 1</Text>
                                    <Text style={styles.itemData}>25 de junho de 2019</Text>
                                </View>
                                <Text style={styles.itemValue}>-R$ 600,00</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

            <Modalize
                ref={modalizeRef}
                snapPoint={400}
                modalHeight={400}
                modalStyle={styles.modal}
            >
                <View style={styles.containerModal}>

                    <Text style={styles.modalTitle}>Agendar pagamento</Text>

                    <View style={styles.formLogin}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Nome desta operação</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={styles.input}>
                            <Text style={[styles.inputLabel, { marginTop: 30 }]}>Valor</Text>
                            <TextInput
                                style={styles.textInput}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={openPaymentModal}
                        >
                            <Text style={styles.buttonModalText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modalize
                    ref={modalizePaymentRef}
                    snapPoint={400}
                    modalHeight={400}
                    modalStyle={styles.modal}
                >
                    <View style={styles.containerModal}>

                        <Text style={styles.modalTitle}>Agendar pagamento</Text>

                        <View style={styles.formLogin}>
                            <View style={styles.input}>
                                <Text style={styles.inputLabel}>Mês de início</Text>
                                <TextInput style={styles.textInput} />
                            </View>

                            <View style={styles.input}>
                                <Text style={[styles.inputLabel, { marginTop: 30 }]}>Mês de término</Text>
                                <TextInput
                                    style={styles.textInput}
                                />
                            </View>

                            <View style={styles.input}>
                                <Text style={[styles.inputLabel, { marginTop: 30 }]}>Mês de término</Text>
                                <TextInput
                                    style={styles.textInput}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => { }}
                            >
                                <Text style={styles.buttonModalText}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modalize>

            </Modalize>
        </View>
    )
}