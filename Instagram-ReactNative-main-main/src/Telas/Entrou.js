import React, {useState} from 'react';
import { View, SafeAreaView, FlatList, StyleSheet, StatusBar, Text, Switch,Image} from 'react-native';
import  Header  from '../componentes/Header';
import Barra from '../componentes/Barra';
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
      likers: 100
    },
    {
      id: '2',
      nome: 'FabiolaMeloOficial',
      descricao: 'Gerar um testemunho dói!',
      imgPerfil: 'https://yt3.googleusercontent.com/ytc/APkrFKYZCjVxTrpRmfQcboV3xLUvUevfpnoKwSBkdsH28w=s900-c-k-c0x00ffffff-no-rj',
      imgPubli: 'https://static.cdn.pleno.news/2023/10/Snapinsta.app_385703149_869182638108390_5574725311251439364_n_1080-768x960.jpg',
      likeada: true,
      likers: 50000
    },
    {
      id: '3',
      nome: 'G1',
      descricao: 'Noticia é aqui',
      imgPerfil: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAjVBMVEXEFwz////AAADEEwbGHhTDEAD35eTLOjPDAAC/AAD88vH89vbDCADnsrDkqKbGIxrvzMrqurjIMCnNSELz19bUambciofNS0bSZGD56unPVVDuyMb13dzjo6H89PPRWlbflZLdjYrXd3ThnZvflJHot7XJNC3HKyPLPznZgX7XdHHSX1vrwsHVb2vLPTY/X1DUAAAEzUlEQVR4nO2dW1fqOhRG2xUCC9oiBZWrqKgoB7b//+edFiiYlQSoDxvd+eYDY4g+NHMkze1LjCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAH4Im0td+hl+HolY3G/K1H+OXwdyNC0bptR/kN5G2F0lpLR7TtR/l96BoMIv3ROraT/Nb4DSLDzSg7SJSuo9jaKuHpkkzhraa0M0mjqGtHkwvsQTazqBp1LGsQdsZqN+zpUHbGejBJQ3aTsP2Ww3azkOO11ro2i4oOSXQdiRlIubyk4ylDLXn8AW0HWDiu25vPI/jpHOb3fHBXGGygvZWoG2HYlrdmgY2k/ZWHE+P3/X0Tgu0bWF+cYiYDYvaxcZQI98tqEFbVA74nz0WMtZkDGub0FZBraZHQhyP+21oc0ILr7SCpH9aWx6oNt80qaJj9BSVtvHux9ngJkxtlMV12Gvj121NXBC3gtRG3VrWKm0RPc2TLnOkg9RGr/WsHbRF5UyiUBSkNn6sae2obU+I2hTXtQZtBSQ3UKDtAtKJS0yn99bNb33DWWiLaGZZmT8tacfQPTCBtnRkSXkmriJqKaW59XtoKyqbWCiKx++GE0V30Gahl9IIy3AaDaBNwmIuOld2hNSub8FrI7FatHYFSK0Za+ja9LtZ3o0zB6lYjERC18Zile3DnfKW6ZjQtYmlj1tP6FZWyuC1mcmXV180XoyJg9dmxhE8bdSqlaFrE+969hWXV9B2RCmjtB3veYJ0DW1HlPmq9x/D0OZMAdqgrT4qurSRmuskgWuLxHp4ii7hImhuFHfoO5onZqXBazNX2168w11zxh+8tvykjgqpJXRtfG+Wd+JupXLlKHRt+sMsr3sur0UyJnhtVkZ+4fJGU/OPoM1auG3ZzZRES4Y2e3N5fiN7U/pPWoM2azOh6Bboa6F12xFHgjYx/i/J0uowgmJqyX1UaNtSJUkNcRPeZhnUnewMoG0PO3bdSzO9ac8bHYc2az/hEqCteIGl0PYdEEL9HmT3pqeZQVuJ97SVBzl1DVSbY/50kh607aC1W9CemTlVkAmbYLVF3DgxDpm2zexMF9oqdHvhu2jhnujN+EJmRfRnsNrKk0Arl7jNDckh8UJoU2IdU4WkrRS3zs1USJIty5tNxWrmQEZsTK2yx/j3San9cf92O54nSac5fZnsroPV/TONUHHeOZAFeROq3q5+cPlZpcbFTo1j917RF/7yA/9YRCpwCjFbzrzB06HZRp+CbIUSTQ0+KUKelLF6hBDR/WbcWZ24CVzOvOZoowXt7Ytr9ukTR3JdKYe2L4vim4ZLnOOo2hpXhhs7fvngeCRyhya2TpT6w4MBYe7AzF775WhNl5QXuLUe7APM6Ecjx+Hlcf46Giz7y4/H+8y5deVN4QeEZ7vvBA9oo64swxkSVLaisv2pW9n+4M32jTtANu1rP/JPwAr8nWFMaKIFab0eIWlgNrrl9CWBgvkS84M9rFz3ozhpNmDtgKLBZZGjN/y7NIOUhufFjdcY5kpSendMPr/QWREaqANN9Jj5tpenozYGuT5Sos/njUjyJrOv17EDJ+Venx4snh+yPM+6T6vROxOcXYTSzLucOHOKvhMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/l/8BqFM7chzYXhEAAAAASUVORK5CYII=',
      imgPubli: 'https://sindpesp.org.br/wp-content/uploads/2022/03/g1-5sindpesp-indenizacao.jpeg',
      likeada: true,
      likers: 10
    },
    {
      id: '4',
      nome: 'TheChosen',
      descricao: 'Jesus quer salvar voce',
      imgPerfil: 'https://s2-techtudo.glbimg.com/DIH5Hpfg_mnL8ocWhxh-IqveUtY=/0x0:1200x800/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/D/u/vy2A8XT52rahRmGQnKhA/design-sem-nome.jpg',
      imgPubli: 'https://assets-global.website-files.com/60ff690cd7b0537edb99a29a/64f10713432577598d7c8bca_The%20Chosen%20e%20Brasil%20Paralelo.jpg',
      likeada: true,
      likers: 5000
    },
    {
      id: '5',
      nome: 'Miranha_amigao_da_vizinhança',
      descricao: 'Combatendo inimigos',
      imgPerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJI3rcv8OfikeoMSVcJLrWhXXrJALs1EhYMGiZfVDjieM8n3t9iB2EGfugqfDCf_kYfU&usqp=CAU',
      imgPubli: 'https://blog.br.playstation.com/tachyon/sites/4/2023/05/6b7bb259e830dcacec1d74b605802a260d8de868.jpg?resize=1088%2C612&crop_strategy=smart',
      likeada: true,
      likers: 150
    },

    {
      id: '6',
      nome: 'Mark zuckerberg',
      descricao: 'Em breve uma nova rede',
      imgPerfil: 'https://istoedinheiro.com.br/wp-content/uploads/sites/17/2022/04/mark-zuckerberg-e1667996200485.jpg',
      imgPubli: 'https://investidorsardinha.r7.com/wp-content/uploads/2020/11/mark-zuckerberg-quem-e-carreira-vida-pessoal-e-criacao-do-facebook-3-1024x768.jpg',
      likeada: true,
      likers: 150
    }
  ]);
 
  return (
   <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content"/>
    
    <Header/>

    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      data={feed}
      renderItem={({item}) => <List data={item}/> }
    />
    <Barra></Barra>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#000' 
  },
  
});