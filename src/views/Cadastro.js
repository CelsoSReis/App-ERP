import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Platform} from "react-native";
//style css
import { styles } from "../../assets/css/Style";
//firebase
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Cadastro(){
    const [display, setDisplay]=useState('none');

    useEffect(() => {
        createUserWithEmailAndPassword(auth, "celsosr87@reisweb.com", "123456")
        .then((dadosDoUsuario) => {
          console.log(dadosDoUsuario)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container, styles.backgroundLogin]}>
            <View>
                <Image source={require('../../assets/logo.png')} style={styles.imagem_Login} />
            </View>
            <View>
                <Text style={styles.erro_Login(display)}>Cadastro Realizado!!</Text>
            </View>
            <View style={styles.formulario_Login}>
                <TextInput style={styles.input_Login} placeholder="Usuário" />
                <TextInput style={styles.input_Login} placeholder="Senha" secureTextEntry={true}/>
                <TextInput style={styles.input_Login} placeholder="Confirmar Senha" secureTextEntry={true}/>

                <TouchableOpacity style={styles.botao_Login} onPress={()=>setDisplay('flex')}>
                    <Text style={styles.botao_Logintexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}