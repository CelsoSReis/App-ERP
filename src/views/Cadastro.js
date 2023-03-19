import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Platform} from "react-native";
//style css
import { styles } from "../../assets/css/Style";
//firebase
import { cadastrar } from "../servicos/requisicoesFirebase";

export default function Cadastro(){
    //const [display, setDisplay]=useState('');
    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('');
    const [confirmaSenha, setConfirmaSenha]=useState('');
    //envio do cadastro 
    async function realizarCadastro(){
        await cadastrar(email, senha, confirmaSenha);
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
    }
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container, styles.backgroundLogin]}>
            <View>
                <Image source={require('../../assets/logo.png')} style={styles.imagem_Login} />
            </View>
            <View style={styles.formulario_Login}>
                <TextInput style={styles.input_Login} placeholder="Usuário" onChangeText={text=>setEmail(text)} />
                <TextInput style={styles.input_Login} placeholder="Senha" secureTextEntry={true} onChangeText={text=>setSenha(text)}/>
                <TextInput style={styles.input_Login} placeholder="Confirmar Senha" secureTextEntry={true} onChangeText={text=>setConfirmaSenha(text)}/>

                <TouchableOpacity style={styles.botao_Login} onPress={()=>realizarCadastro()}>
                    <Text style={styles.botao_Logintexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}