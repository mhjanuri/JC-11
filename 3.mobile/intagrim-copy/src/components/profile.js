import React from 'react';
import { View, Text, Platform, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectProfilePost } from './../redux/actions';
import { API_URL } from '../support/apiUrl';
const Profile=({navigation,user,listPost,selectProfilePost})=>{


    const onSelectPostPress=(post)=>{
        console.log(post)
        selectProfilePost(post)
        navigation.navigate('detailProfile',{
            post
        })
    }

    const renderListPost = () => {
        var i = 2;
        return listPost.map((item, index) => {
            var styleObj = { width: '33%', marginVertical: 1 }
            if((index + 1) === i ) {
                i += 3;
                styleObj.marginHorizontal = '0.5%'
            }
            return (
                <View 
                    style={styleObj}
                >
                    <TouchableWithoutFeedback 
                        onPress={() => onSelectPostPress(item)}
                    >
                        <Image  source={{uri: `${API_URL}${item.image}` }} style={{height: 125, width: '100%' }}/>
                    </TouchableWithoutFeedback>
                </View>
            )
        })
    }


    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <Header
                leftComponent={{ 
                    text: user.username, 
                    style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                }}
                leftContainerStyle={{ flex: 4 }}
                rightComponent={{ 
                    icon: 'menu', 
                    color: 'black',
                    onPress: () => navigation.toggleDrawer()
                }}
                containerStyle={{
                    backgroundColor: '#fff',
                    justifyContent: 'space-around',
                    marginTop: Platform.OS === 'ios' ? 0 : - 25,
                    borderBottomWidth: 0.5
                }}
            />
            <ScrollView>
                <ListItem
                    leftAvatar={{
                        source: { uri: `${API_URL}${user.profileimage}` },
                        size: 'large'
                    }}
                    title={user.displayname}
                    subtitle={`Instagrin ${user.role}`}
                />
                <View>
                    <Text>{user.bio}</Text>
                </View>
                <Button 
                    title="Edit Profile"
                    containerStyle={{ 
                        marginVertical: 15, 
                        marginHorizontal: 15, 
                        borderWidth: 0.5,
                        borderColor: 'gray'
                    }}
                    buttonStyle={{ borderColor: 'gray' }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    // onPress={this.onBtnEditProfilePress}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        flex: 1
                    }}
                >
                    {renderListPost()}
                </View>
            </ScrollView>
        </View>

    )
}
const mapStateToProps = ({ auth, post }) => {
    var user = auth.user ? auth.user : { id: 0, displayname: '', profileimage: '' }
    var listPost = post.postList.filter((item,index) => {
        return user.id === item.userId
    })
    return {
        user,
        listPost
    }
}
export default connect(mapStateToProps,{selectProfilePost}) (Profile)