import { auth } from "../config/firebase";
//cria usuário
import { createUserWithEmailAndPassword } from "firebase/auth/react-native";
//import { async } from "@firebase/util";

export async function cadastrar(email, senha, confirmaSenha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
          console.log(dadosDoUsuario)
        })
        .catch((error) => {
            console.log(error)
        });
}