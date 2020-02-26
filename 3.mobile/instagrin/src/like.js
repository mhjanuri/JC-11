import React from 'react';
import {Text,View,Button} from 'react-native'
import style from './style/style'
import {useDispatch,useSelector} from 'react-redux'

const Like = ({navigation})=>{
    const dispatch=useDispatch()
    const Angka=useSelector(({Counter})=>Counter.angka)
    return(
        <View style={style.gaya}>
            <Text>Like</Text>
            <Text>{Angka}</Text>
            <Button
                title='Kurang'
                onPress={()=>dispatch({type:'KURANG'})}
            />
            <Button
                title='Tambah'
                color='tomato'
                onPress={()=>dispatch({type:'TAMBAH'})}
            />
        </View>
    )
}

export default Like