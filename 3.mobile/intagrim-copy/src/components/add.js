import React,{Component} from 'react';
import style from './../style/style'
import { View, Image, Text, ScrollView, AsyncStorage } from 'react-native';
import { Header, Button, Input, Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from './../support/apiUrl';

class Add extends Component {
    state = {
        caption : '', 
        image: null, 
        loading: false, 
        error: ''
    }

    onBtnSelectGaleryPress= async()=>{
        try {
            var img =await ImagePicker.openPicker({
                width: 700,
                height: 700,
                cropping: true,
                mediaType: 'photo'
            })
            this.setState({ image: img })    
        } catch (error) {
            console.log(error)
        }

    }
    
    onBtnOpenCameraPress = () => {
        ImagePicker.openCamera({
            width: 700,
            height: 700,
            cropping: true
        }).then(img => {
            this.setState({ image: img })
        }).catch(cancel => {
            console.log(cancel)
        });
    }


    onBtnPostImagePress=async ()=>{
        this.setState({error:'',loading:true})
        try {
            console.log(this.state.image)
            const image = {
                uri: this.state.image.path,
                type: 'image/jpeg',
                name: 'photo.jpg',
            }
            const token=await AsyncStorage.getItem('usertoken')
            var formdata = new FormData();
            var options = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }
            var data = {
                caption: this.state.caption,
                userId: this.props.user.id
            }
            formdata.append('image', image)
            formdata.append('data', JSON.stringify(data))
            console.log(image)
            const res = await axios.post(API_URL + '/post/addpost', formdata, options)
            this.setState({ loading: false })
        } catch (error) {
            console.log(error)
            this.setState({ loading: false, error: error.response.data.message })
        }
    }


    render() { 
        return (
            <View style={{flex:1}}>
                <Header
                    leftComponent={{
                        text:'Select Image',
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        elevation: 2
                    }}
                />
                <ScrollView>
                    <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                        <Button
                            icon={
                                <Icon
                                    name="photo-library"
                                    size={30}
                                    color="white"
                                />
                            }
                            title="Select from Gallery"
                            onPress={this.onBtnSelectGaleryPress}
                            containerStyle={{ marginBottom : 15 }}
                            buttonStyle={{ backgroundColor: 'black' }}
                        />
                        <Button
                            icon={
                                <Icon
                                    name="photo-camera"
                                    size={30}
                                    color="white"
                                />
                            }
                            title="Open Camera"
                            onPress={this.onBtnOpenCameraPress}
                            buttonStyle={{ backgroundColor: 'black' }}
                        />
                        <Input
                            placeholder='Caption'
                            onChangeText={(text) => this.setState({ caption: text })}
                            value={this.state.caption}
                        />
                    </View>
                    <View style={{ marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Image 
                            source={{ uri: this.state.image ? this.state.image.path : null }} 
                            style={{ height: 350, width: '100%' }} 
                        />
                    </View>
                    <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
                        <Text style={{ color: 'red' }}>{this.state.error}</Text>
                        <Button
                            icon={
                                <Icon
                                    name="cloud-upload"
                                    size={30}
                                    color="white"
                                />
                            }
                            title="Post Image"
                            buttonStyle={{ backgroundColor: 'black' }}
                            onPress={this.onBtnPostImagePress}
                            loading={this.state.loading}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user
    }
}
export default connect(mapStateToProps) (Add);
