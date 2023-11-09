import React from 'react';
import { View, StyleSheet,Image } from 'react-native';

export default function Logo() {
 return (
   <Image style = {styles.logo} source={require("../../assets/logo.png")}>

   </Image>
  );
}

const styles=StyleSheet.create({
  logo:{
    width:300,
    height:100,
    marginTop: 25,
    marginBottom:25
  }

})

