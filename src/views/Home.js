import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
//Import style
import {styles} from '../../assets/css/Style';

export default function Home(props){
    console.log(props);
    return(
        <View style={styles.containerHome} >
            <TouchableOpacity style={styles.botaoHome} onPress={()=>props.navigation.navigate('Login',{id:30})}>
                <Image
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoHome} onPress={()=>props.navigation.navigate('Cadastro',{id:30})}>
                <Image
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>
        </View>
    );
}