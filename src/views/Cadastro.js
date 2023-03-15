import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Platform} from "react-native";
//style css
import { styles } from "../../assets/css/Style";

export default function Cadastro(){
    const [display, setDisplay]=useState('none');
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