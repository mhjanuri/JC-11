import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

const App = () => {
  return (
    <>
      <View>
        <Header name='Spotify' />
        <AlbumList/>
      </View>
    </>
  );
};




export default App;
