import React,{useState} from 'react';
import {View} from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './style/style'
import * as Animatable from 'react-native-animatable';


const Register=({navigation})=>{
    return(
        <View style={style.RegcontainerStyle}>
            <Text>Register</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}   
// const Register=({navigation})=>{
              
//     const [Email,setEmail]=useState('')
//     return(
//         <View style={style.RegcontainerStyle}>
//             <Animatable.Text animation={'fadeInDown'} duration={2000}>
//                 <Text h3>Register</Text>
//             </Animatable.Text>
//             <View style={style.ReginputStyle}>
//                 <Input
//                     placeholder='Email'
//                     leftIcon={
//                         <Icon
//                             name='email'
//                             size={24}
//                             color='black'
//                         />
//                     }
//                     value={Email}
//                     onChangeText={(text)=>setEmail(text)}
//                 />
//                 <Input
//                     placeholder='Username'
//                     leftIcon={
//                         <Icon
//                             name='account-box'
//                             size={24}
//                             color='black'
//                         />
//                     }
//                 />
//                  <Button
//                     title="Back to Login"
//                     containerStyle={{ width: '95%' }}
//                     buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
//                     titleStyle={{ color: 'black' }}
//                     type="outline"
//                     onPress={() => navigation.goBack()}
//                 />
//             </View>
//         </View>
//     )
// }

export default Register