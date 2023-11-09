import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Header() {
 return (
   <View style={styles.header}>
        <TouchableOpacity>
            <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image
            source={require('../../../assets/direct.png')}
            style={styles.direct}
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
        elevation: 5

    },
    logo:{
        width:105,
        height: 35
    },
    direct:{
        height: 25,
        width: 25,
        marginTop: 7
    }
    
  });