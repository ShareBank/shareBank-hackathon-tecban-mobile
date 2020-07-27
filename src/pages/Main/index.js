import React, { useRef, useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Modalize } from 'react-native-modalize'
import AsyncStorage from "@react-native-community/async-storage";
import apiShareBank from '../../services/apiShareBank';

import styles from './styles';

import background from '../../assets/background-main.png';
import logo from '../../assets/logo/logo.png';

export default function Main() {
    const api = apiShareBank();
    const navigation = useNavigation();
    const modalizeRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignIn = async () => {       
        if(email && password){
            try {
                await api.signin(email, password).then((response)=>{
                    if(response == null){
                        // alert("Email ou Senha Errados");
                        alert(`Usado:\ne: ${email} \ns: ${password}\nCorreto:\ne: lucianabastos@email.com \ns:123 `)
                    }else{
                        handleSaveStorage(response);
                    }
                });           
            } catch (error) {
                alert(`Falha no login, tente novamente`)                
                console.log(error.message);
            }    
        }
    }

    const handleSaveStorage = async (res) =>{
        if(res){
            await AsyncStorage.multiSet([
                ['userId',res._id],
                ['userName',res.name],
                ['userEmail',res.email],
                ['userSalt',res.salt],
                ['userHash',res.hash]
            ],()=>{})             
        }

        navigation.navigate('Profile');
    }

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
                                    <TextInput 
                                        style={styles.textInput} 
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        onChangeText={(t) => setEmail(t)} 
                                    />
                                </View>

                                <View style={styles.input}>
                                    <Text style={[styles.inputLabel, { marginTop: 30}]}>Senha</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        secureTextEntry={true}   
                                        returnKeyType="send"                                     
                                        onChangeText={(t) => setPassword(t)}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSignIn}
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