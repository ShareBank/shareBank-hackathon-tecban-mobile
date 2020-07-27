import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Picker, Image, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import iconLock from '../../assets/icon/lock.png'

export default function AddBank() {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState('')

    function backToMain() {
        navigation.goBack();
    }

    function linkingBank() {
        Linking.openURL('https://www.itau.com.br/')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.buttonToBack}
                    onPress={backToMain}
                >
                    <Feather name="chevron-left" size={30} color="#000" />
                    <Text style={styles.headerText}>Voltar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.section}>
                <Text style={styles.title}>Selecione o banco para você fazer a autenticação</Text>

                <View style={styles.form}>

                    <Image source={iconLock} />

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Nome</Text>
                        <Picker
                            selectedValue={selectedValue}
                            itemStyle={{
                                height: 40,
                                width: '100%',
                            }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Caixa Econômica Federal" value="cef" />
                            <Picker.Item label="Santader" value="santader" />
                            <Picker.Item label="Banco Inter" value="inter" />
                            <Picker.Item label="Itaú" value="itau" />
                            <Picker.Item label="Banco do Brasil" value="bb" />
                            <Picker.Item label="Nubank" value="nubank" />
                        </Picker>
                    </View>

                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={linkingBank}
                    >
                        <Text style={styles.buttonText}>Fazer autenticação</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCancel}
                        onPress={backToMain}
                    >
                        <Text style={[styles.buttonText, { color: '#000' }]}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}