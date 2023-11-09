import { TouchableOpacity, StyleSheet, Text, Alert} from "react-native";
import { useNavigation} from '@react-navigation/native'
import firebase from "../firebaseConnection";


export default function MeuBotao(props){
    const email = props.email
    const senha = props.senha
    const navigation = useNavigation();
    async function Logar(){
        await firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(( value ) => {
            navigation.navigate('entrou')
            
        })

        .catch((error)=>{
            alert("Erro no login");
        })

        }
        
    return(
        <TouchableOpacity 
        style={styles.button}
        onPress={() => Logar()}
        >
            <Text style={styles.texto}> Login</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2584f4',
        width:'70%',
        height:40,
        borderRadius:2,
        justifyContent:'center',
        margin:25,
        marginBottom:100,
    },
    texto:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:"center"
      
       
    }
})