import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function List(props) {
 
    function carregaImage(likeada){
        return likeada? require('../../../assets/likeada.png'):
                        require('../../../assets/like.png')
    }

    function mostraLike(likers){
        if(likers === 0){
            return 'ainda não tem nenhuma curtida'
        }else if(likers === 1){
            return likers + ' curtida'
        }else{
            return likers + ' curtidas'
        }
    }
 
 return (
   <View>

    <View style={styles.viewPerfil}>
        <Image
        style={styles.perfilImagem}
        source={{uri: props.data.imgPerfil}}
        />

        <Text style={styles.textPerfil}>
            {props.data.nome}
        </Text>
    </View>

    <Image
    style={styles.imageFeed}
    source={{uri: props.data.imgPubli}}
    />

    <View style={styles.viewLike}>
        <TouchableOpacity>
            <Image
            source={carregaImage(props.data.likeada)}
            style={styles.imgLike}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image
            source={require('../../../assets/commenter.png')}
            style={styles.imgLike}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image
            source={require('../../../assets/like.png')}
            style={styles.imgLike}
            />
        </TouchableOpacity>
    </View>

    <Text style={styles.textLike}>
            {mostraLike(props.data.likers)}
    </Text>

    <Text style={styles.textoDescricao}>
        <Text style={styles.textPerfil}>{props.data.nome}</Text>
        {' '}
        {props.data.descricao}
    </Text>
   
   </View>
  );
}

const styles = StyleSheet.create({
    viewPerfil:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 12
    },
    perfilImagem:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#A52A2A',
        resizeMode: 'contain',
        marginRight: 10
    },
    textPerfil:{
        marginLeft: 6,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 12,
        color:"#fff"
    },
    imageFeed:{
        width: '100%',
        height: 300,
        resizeMode: 'cover'   
    },
    viewLike:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 12,
        alignItems: 'center',
        marginTop: 5

    },
    imgLike:{
        width: 30,
        height: 30,
        marginRight: 5
    },
    textLike:{
        marginLeft: 12,
        fontSize: 15,
        fontWeight: 'bold',
        color:'#fff'
    },
    textPerfil:{
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 8,
        color:'#fff'
    },
    textoDescricao:{
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
        color:'#fff'

    }



    
  });