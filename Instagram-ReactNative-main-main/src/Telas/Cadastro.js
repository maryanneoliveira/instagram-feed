import { View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";
import Logo from "../componentes/Logo";
import MeuBotao2 from "../componentes/MeuBotao2";
import { useState, version } from 'react';
export default function Cadastro(){

    const [email,setEmail]= useState('');
    const [senha,setSenha]= useState('');
    const [confimarSenha, setConfirmarSenha]= useState('')
    const [VerSenha, setVerSenha] = useState(true)

    return (
        <View style={styles.container}>
            <Logo></Logo>

            <TextInput style={[styles.textInput, { marginTop: 12 }]} placeholder='your email' placeholderTextColor={'#fff'} color={'#fff'}
                onChangeText={(text) => setEmail(text)}
            ></TextInput>

            <TextInput secureTextEntry={VerSenha} style={[styles.textInput, { marginTop: 12 }]} placeholder=' Password'  placeholderTextColor={'#fff'} color={'#fff'}
                onChangeText={(text) => setSenha(text)}
            ></TextInput>

            <TextInput secureTextEntry={VerSenha} style={[styles.textInput, { marginTop: 12 }]} placeholder='Confirm your password'  placeholderTextColor={'#fff'} color={'#fff'}
                onChangeText={(text) => setConfirmarSenha(text)}
            ></TextInput>

            <TouchableOpacity onPress={() => setVerSenha(!VerSenha)}>
                <Text style={styles.textoMostrarSenha}>Show</Text>
            </TouchableOpacity>

            <MeuBotao2 email={email} senha={senha} confimarSenha={confimarSenha} ></MeuBotao2>


        </View>
    )
}

const styles= StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
    },

    textInput:{
        width:'70%',
        borderWidth: 0.2,
        borderColor:'#fff',
        height:40,
        padding:6,
        borderRadius:4,
        backgroundColor:'#262626',
    },

    textoMostrarSenha:{
        fontSize:11,
        fontWeight:"bold",
        color:"#2584f4",
        marginTop:12,
        marginLeft:255
    }
})