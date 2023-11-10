import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Barra() {
 return (
   <View style={styles.header}>
        <TouchableOpacity>
            <Image
            source={require('../../../assets/casinha.png')}
            style={styles.casinha}
            />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
            source={require('../../../assets/lupa.png')}
            style={styles.lupa}
            />
        </TouchableOpacity>
        

        <TouchableOpacity>
            <Image
            source={require('../../../assets/add.png')}
            style={styles.add}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image
            source={require('../../../assets/reels.png')}
            style={styles.reels}
            />
        </TouchableOpacity>

      
   </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        borderBottomWidth: 0.7,
        shadowColor: '#fff',
        elevation: 5,
        marginBottom:2,
        marginTop:30,
        alignItems:'center'

    },
    casinha:{
        width:40,
        height: 30
    },
    lupa:{
        height: 40,
        width: 45,
        
    },

    add:{
        height: 50,
        width: 50,
       
        
    },

    reels:{
        height: 40,
        width: 40,
      
        
    }

  
    

    
  });