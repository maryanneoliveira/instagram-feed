import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../componentes/Logo';
import MeuBotao from '../componentes/MeuBotao';
import { useState } from 'react';
import { useNavigation} from '@react-navigation/native'
export default function Login() {

  const[email,setEmail]= useState('');
  const[senha,setSenha]= useState('');

  const navigation = useNavigation();
 const [VerSenha, setVerSenha] = useState(true)
  return (
    
    <View style={styles.container}>
        <Logo></Logo>
      
      <TextInput style={[styles.textInput,{marginTop:12}]} placeholder=' Phone number,username or email' placeholderTextColor={'#fff'} color={'#fff'}
      onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput secureTextEntry={VerSenha} style={[styles.textInput,{marginTop:12}]} placeholder=' Password' placeholderTextColor={'#fff'} color={'#fff'}
      onChangeText={(text) => setSenha(text)}
      ></TextInput>

      <TouchableOpacity onPress={() => setVerSenha(!VerSenha)}> 
      <Text style={styles.textoMostrarSenha}>Show</Text>
      </TouchableOpacity>

      <MeuBotao email={email} senha={senha}/>
  
      <TouchableOpacity onPress={() => navigation.navigate('telaCadastro')}> 
      <Text style={styles.textoNaoTemConta}> Don't have an account? Sing Up </Text>
      </TouchableOpacity>

      <View style={styles.linha}>

      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:'70%',
    borderWidth: 0.2,
    borderColor:'#fff',
    height:45,
    padding:6,
    borderRadius:4,
    backgroundColor:'#262626',
   // tintColor:'#fff',
  
  },
  textoMostrarSenha:{
    fontSize:11,
    fontWeight:"bold",
    color:"#2584f4",
    marginTop:12,
    marginLeft:255
  },

  textoNaoTemConta:{
    fontSize:13,
    fontWeight:'bold',
    color:"#2584f4",
    marginTop:130,
   alignItems:'center'
  },

  linha:{
    backgroundColor:'#fff',
    width:340,
    height:0.5,
    marginTop:-25
  }

});
