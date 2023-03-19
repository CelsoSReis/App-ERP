import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
//Import style
import {styles} from '../../assets/css/Style';

export default function Home(props){
    console.log(props);
    return(
        <>
            <View style={styles.containerHome} >
                <TouchableOpacity style={styles.botaoHome} onPress={()=>props.navigation.navigate('Login',{id:30})}>
                    <Image style={styles.imgLogin}
                        source={require('../../assets/img/login.png')}
                    />
                    <Text style={{margin: 5, fontWeight: "bold", color:"#C0392B"}}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoHome} onPress={()=>props.navigation.navigate('Cadastro',{id:30})}>
                    <Image style={styles.imgCadastrar}
                        source={require('../../assets/img/cadastrar.png')}
                    />
                    <Text style={{margin: 5, fontWeight: "bold", color:"#C0392B"}}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{marginBottom: 1, textAlign: "center", backgroundColor:"white", fontSize: 10, color:"#C0392B"}}>Desenvolvido por ReisWeb</Text>
            </View>
        </>
    );
}