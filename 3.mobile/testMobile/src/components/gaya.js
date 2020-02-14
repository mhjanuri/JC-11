import {StyleSheet} from 'react-native'

const gaya = StyleSheet.create({
  tulisan: {
    color: 'yellow',
    fontSize: 21,
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 15,
    margin: 10
  },
  tulisana: {
    color: 'blue',
    fontSize: 21,
    backgroundColor: 'pink',
    textAlign: 'center',
    padding: 15,
    margin: 10
  },
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
    alignItems: 'center',
    justifyContent:'center'
  },
  kotak2: {
    // width: 100,
    // height: 100,
    backgroundColor: 'skyblue',
    flex: 12,
  },
  kotak3: {
    // width: 200,
    // height: 200,
    backgroundColor: 'steelblue',
    flex: 1,
  },
});

module.exports=gaya