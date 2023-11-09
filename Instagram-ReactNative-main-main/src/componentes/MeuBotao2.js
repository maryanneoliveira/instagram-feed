import { TouchableOpacity, StyleSheet, Text} from "react-native";
import firebase from '../firebaseConnection';

import { useNavigation} from '@react-navigation/native'
export default function MeuBotao2(props){
    const email = props.email
    const senha = props.senha
    const confirmaSenha = props.confimarSenha
    const navigation = useNavigation();

    function cadastrar() {
        if (senha !== confirmaSenha) {
            alert('As senhas precisam ser iguais')
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, senha)
                .then((value) => {
                    navigation.navigate('telaLogin')
                })
                .catch((error) => {
                    alert('algo deu errado!')
                })
        }
    }

    return(

        <TouchableOpacity
         style={styles.button}
         onPress={() => cadastrar()}
        >
            <Text style={styles.texto}> Register </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2584f4',
        width:'70%',
        height:40,
        borderRadius:2,
        justifyContent:'center',
        margin:20,
        marginBottom:25

    },
    texto:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
      
       
    }
})