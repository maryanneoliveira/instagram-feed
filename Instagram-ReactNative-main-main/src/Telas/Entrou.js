import React, {useState} from 'react';
import { View, SafeAreaView, FlatList, StyleSheet, StatusBar, Text, Switch,Image} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import List from '../componentes/List';

export default function App() {
  const[feed,setFeed] = useState([
    {
      id: '1',
      nome: 'FlávioMedeiros',
      descricao: 'Mais um dia tranquilo',
      imgPerfil:'https://lh3.googleusercontent.com/a-/ALV-UjXS0wWfUpI9nlBX2vWYts_4D3e72bhyojbuosYH-AFhA4U=s64-p-k-rw-no',
      imgPubli: 'https://st.depositphotos.com/1001759/3906/i/450/depositphotos_39063707-stock-photo-male-legs-on-the-beach.jpg',
      likeada: true,
      likers: 1
    },
    {
      id: '2',
      nome: 'Tesla_the_golden',
      descricao: 'Rasgando tudo',
      imgPerfil: 'https://i0.statig.com.br/bancodeimagens/37/a2/in/37a2in61s2f93v0rxid9ppoqn.jpg',
      imgPubli: 'https://img.freepik.com/fotos-premium/cachorro-golden-retriever-descansando-e-brincando-em-um-gramado-quadrado_259859-34.jpg',
      likeada: true,
      likers: 20
    },
    {
      id: '3',
      nome: 'HomerSimpson',
      descricao: 'Tomando uma',
      imgPerfil: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/24406363/7012668/1/full.jpg',
      imgPubli: 'https://1.bp.blogspot.com/-y-b1Ca40K_I/Tsd7P4XgQ0I/AAAAAAAACJI/-Q1wryxrUHk/s1600/ScreenShot.jpg',
      likeada: true,
      likers: 1000
    },
    {
      id: '4',
      nome: 'DarthVader',
      descricao: 'VENHA PRO LADO ESCURO DA FORÇA',
      imgPerfil: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg',
      imgPubli: 'https://images4.alphacoders.com/132/thumb-1920-1327480.png',
      likeada: false,
      likers: 0
    },
    {
      id: '5',
      nome: 'Miranha_amigao_da_vizinhança',
      descricao: 'Combatendo inimigos',
      imgPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJI3rcv8OfikeoMSVcJLrWhXXrJALs1EhYMGiZfVDjieM8n3t9iB2EGfugqfDCf_kYfU&usqp=CAU',
      imgPubli: 'https://blog.br.playstation.com/tachyon/sites/4/2023/05/6b7bb259e830dcacec1d74b605802a260d8de868.jpg?resize=1088%2C612&crop_strategy=smart',
      likeada: true,
      likers: 150
    }
  ]);
 
  return (
   <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    
    <Header/>

    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      data={feed}
      renderItem={({item}) => <List data={item}/> }
    />

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#000' 
  },
  
});