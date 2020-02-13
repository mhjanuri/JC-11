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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import gaya from './src/components/gaya'

const App = () => {
  const [nama] = useState(['DAVID', 'DZAKY', 'HAFIZ', 'AYA', 'TIKA']);
  const [namateman] = useState("REZA ARAP")
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
  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        
        <View style={gaya.kotak1}></View>

        <View style={gaya.kotak2}>
          <ScrollView>
            <View style={{backgroundColor: 'pink', height: 200, borderStyle:'solid', borderColor:'black' }}></View>
            <View style={{flexDirection:'row', flex:1, flexWrap:'wrap'}}>
              <View style={{height: 125, width:'33.3%', backgroundColor:'black'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'yellow'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'white'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'green'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'red'}}></View>
              <View style={{height: 125, width:'33.3%', backgroundColor:'blue'}}></View>
            </View>
            <View style={{backgroundColor: 'grey', height: 200}}></View>
          </ScrollView>
        </View>

        <View style={gaya.kotak3}></View>
        
      </View>
    </>
  );
};



export default App;
