import React,{useState} from 'react';
import {View} from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements';
import style from './../style/style'
import * as Animatable from 'react-native-animatable';

// fbec40e5-2d70-4792-841e-f54876f1cdaa
const Register=({navigation})=>{

    const [passHidden,setpassHidden]=useState(true)
    const [conpassHidden,setconpassHidden]=useState(true)
    return(
        <View style={style.RegcontainerStyle}>
            <Animatable.Text animation={'fadeInDown'} duration={2000}>
                <Text h3>Register</Text>
            </Animatable.Text>
            <View style={style.ReginputStyle}>
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='email'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='account-box'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon
                            name={passHidden?'visibility-off':'visibility'}
                            size={24}
                            color={passHidden ? '#bfc3c9' : 'black'}
                            onPress={()=>setpassHidden(!passHidden)}
                        />
                    }
                    secureTextEntry={passHidden}
                />
                <Input
                    placeholder='Confirm Password'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                    rightIcon={
                        <Icon
                            name={conpassHidden?'visibility-off':'visibility'}
                            size={24}
                            color={conpassHidden ? '#bfc3c9' : 'black'}
                            onPress={()=>setconpassHidden(!conpassHidden)}
                        />
                    }
                    secureTextEntry={conpassHidden}
                />
            </View>
            <Button
                title="Back to Login"
                containerStyle={{ width: '95%' }}
                buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                titleStyle={{ color: 'black' }}
                type="outline"
                onPress={() => navigation.goBack()}
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