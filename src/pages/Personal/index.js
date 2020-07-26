import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import imagePersonal from '../../assets/images-profile/img-profile.jpg'

export default function Personal() {
    const navigation = useNavigation();

    function handleLogout() {
        navigation.navigate('Main')
    }

    function toBack() {
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView 
            behavior="position"
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonToBack}
                    onPress={toBack}
                >
                    <Feather name="chevron-left" size={30} color="#000" />
                    <Text style={styles.headerText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.image}>
                <Text style={styles.imageText}>Perfil</Text>
                <Image source={imagePersonal} style={styles.photo} />
            </View>

            <View style={styles.form}>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Nome</Text>
                    <TextInput 
                        style={styles.textInput} 
                        value="Leonardo Garruba"
                    />
                </View>

                <View style={[styles.input, { marginTop: 30 }]}>
                    <Text style={styles.inputLabel}>E-mail</Text>
                    <TextInput 
                        style={styles.textInput}
                        value="leonardogarruba@gmail.com" 
                    />
                </View>

                <View style={styles.sectionPassword}>
                    <Text style={styles.sectionTitle}>NOVA SENHA</Text>

                    <View style={[styles.input, { marginTop: 30 }]}>
                        <Text style={styles.inputLabel}>Senha</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={[styles.input, { marginTop: 30 }]}>
                        <Text style={styles.inputLabel}>Repetir senha</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={handleLogout}
                >
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={() => { }}
                >
                    <Text style={styles.buttonText}>Apagar minha conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}