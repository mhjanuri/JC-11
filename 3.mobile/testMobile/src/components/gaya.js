import {StyleSheet} from 'react-native'

const gaya = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 21,
    backgroundColor: 'pink',
    textAlign: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    fontWeight: 'bold',
  },
  kotak1: {
    // width: 50,
    // height: 50,
    backgroundColor: 'powderblue',
    flex: 1,
  },
  kotak2: {
    // width: 100,
    // height: 100,
    backgroundColor: 'skyblue',
    flex: 6,
  },
  kotak3: {
    // width: 200,
    // height: 200,
    backgroundColor: 'steelblue',
    flex: 1,
  },
});

module.exports=gaya