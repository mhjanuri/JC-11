/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import gaya from './src/components/gaya'
import Header from './src/components/header'

const App = () => {
  const [nama] = useState(['DAVID', 'DZAKY', 'HAFIZ', 'AYA', 'TIKA']);
  const [namateman] = useState("REZA ARAP")
  const [foto,setFoto]=useState('foto')
  console.log('halooooo')

  const rendertext=()=>{
    return nama.map((val,index)=>{
      return (
        <Text style={gaya.text} key={index}>
          Halo Gaes nama saya {val}, nama teman saya {namateman}
        </Text>
      );
    })
  }

  const onBangRhomaPress=()=>{
    setFoto('https://s.kaskus.id/r540x540/images/2019/09/16/10046699_20190916035002.jpg')
  }

  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        
        {/* <View style={gaya.kotak1}></View> */}
        <Header>
          INSTAKILOGRAM  
        </Header>

        <View style={gaya.kotak2}>
          <ScrollView>
            <View style={{backgroundColor: 'pink', height: 200, borderStyle:'solid', borderColor:'black' }}>
              <Image style={{height:200}} source={{uri:foto}} ></Image>
            </View>
            <View style={{flexDirection:'row', flex:1, flexWrap:'wrap'}}>
              <View style={{height: 125, width:'33.3%', backgroundColor:'black'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'yellow'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'white'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'green'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'red'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'blue'}}></View>
            </View>
            <View style={{backgroundColor: 'grey', height: 200}}>
              <Button
                title='Klik tombol'
                color='purple'
                onPress={onBangRhomaPress}
              />
            </View>
          </ScrollView>
        </View>

        <View style={gaya.kotak3}></View>
        
      </View>
    </>
  );
};



export default App;
