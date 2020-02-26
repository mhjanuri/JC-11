import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'
import {connect} from 'react-redux'
import {OnTambah} from './actions/CounterActions'
import * as Animatable from 'react-native-animatable'

const Home = ({navigation,Angka,OnTambah})=>{
    return(
        <View style={style.gaya}>
            <Text>Home1</Text>
            <Text>{Angka}</Text>
            <Button
                title='Tambah'
                onPress={()=>OnTambah()}
            />
        </View>
    )
}


const MapstateToProps=({Counter})=>{
    return{
        Angka:Counter.angka
    }
}
// const Tambah=()=>{
//     return{
//         type:'TAMBAH'
//     }
// }

export default connect(MapstateToProps,{OnTambah}) (Home);