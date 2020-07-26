import React, { useRef } from 'react';
import { View, Text, Image, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize'

import styles from './styles'

import iconTrasaction from '../../assets/icon/return-on-investment.png';

export default function Profile() {

    const navigation = useNavigation();
    const modalizeRef = useRef(null)

    function toBack() {
        navigation.goBack()
    }

    function openModal() {
        modalizeRef.current?.open()
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
                    <Text style={styles.value}>3405.20</Text>

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
                        <Text style={styles.cardText}>Transações</Text>
                    </View>
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
                            onPress={() => {}}
                        >
                            <Text style={styles.buttonModalText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize>
        </View>
    )
}