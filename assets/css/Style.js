import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15
    },
    containerHome: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15
    },
    botaoHome:{
      flex:1,
      alignItems: "center",
      width: 20,
      height: 30
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    imgCadastrar: {
      width: 50,
      height: 50,
    },
    imgLogin: {
      width: 48,
      height: 48,
    },
    texto: {
      color: "#000",
      fontSize:5,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    //login
    imagem_Login:{
      width: 250,
      height: 250,
      marginBottom: 10
    },
    backgroundLogin:{
      backgroundColor:"white",
    },
    erro_Login:(text='none')=>({
      fontWeight:"bold",
      fontSize: 20,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),
    formulario_Login:{
      width: "80%",
    },
    input_Login:{
      backgroundColor:"#D6DBDF",
      fontSize: 18,
      padding: 7,
      marginBottom: 15
    },
    botao_Login:{
      backgroundColor: "#C0392B",
      padding: 15,
      alignSelf:"center",
      borderRadius: 5
    },
    botao_Logintexto:{
      fontWeight: "bold",
      fontSize: 20,
      color: "white"
    }
  });
  export {styles};