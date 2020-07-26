import React, { useRef } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Modalize } from 'react-native-modalize'

import styles from './styles';

import background from '../../assets/background-main.png';
import logo from '../../assets/logo/logo.png';

export default function Main() {
    const navigation = useNavigation();
    const modalizeRef = useRef(null);

    function navigateToRegister() {
        navigation.navigate('Register')
    }

    function navigateToProfile() {
        navigation.navigate('Profile')
    }

    function openModal() {
        modalizeRef.current?.open();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.imageBackground}>
                <View style={styles.header}>
                    <Image source={logo} style={{ width: 160, height: 30, paddingBottom: 15 }} />
                </View>

                <View style={styles.functions}>
                    <Text style={styles.descriptionText}>Está pronto para revolução bancária?</Text>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={navigateToRegister}
                    >
                        <Text style={styles.buttonLoginText}>Abrir uma conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSign}
                        onPress={openModal}
                    >
                        <Text style={styles.buttonSignText}>Já tenho uma conta</Text>

                    </TouchableOpacity>
                </View>

                <Modalize
                        ref={modalizeRef}
                        snapPoint={350}
                        modalHeight={350}
                        modalStyle={styles.modal}
                    >
                        <View style={styles.containerModal}>

                            <Text style={styles.title}>Fazer login</Text>

                            <View style={styles.formLogin}>
                                <View style={styles.input}>
                                    <Text style={styles.inputLabel}>E-mail</Text>
                                    <TextInput style={styles.textInput} />
                                </View>

                                <View style={styles.input}>
                                    <Text style={[styles.inputLabel, { marginTop: 30}]}>Senha</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        secureTextEntry={true}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={navigateToProfile}
                                >
                                    <Text style={styles.buttonText}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modalize>
            </ImageBackground>
        </View>
    )

}