import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Register() {
    const navigation = useNavigation();

    function backToMain() {
        navigation.goBack();
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
                <Text style={styles.title}>Vamos começar com essas informações 😁</Text>

                <View style={styles.form}>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Nome</Text>
                        <TextInput style={styles.textInput} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>E-mail</Text>
                        <TextInput style={styles.textInput} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Senha</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Repetir senha</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>Fazer cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}