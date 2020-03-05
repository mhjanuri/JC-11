import React,{useEffect} from 'react';
import {View, FlatList, Image, TouchableWithoutFeedback} from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import style from './../style/style'
import {connect} from 'react-redux'
import {getListPost} from './../redux/actions'
import {API_URL} from './../support/apiUrl'

const Home = ({navigation,getListPost,listPost,refreshing})=>{
    useEffect(()=>{
        getListPost()
    },[])
    const onRefresh=()=>{
        console.log('masuk refresh')
        getListPost()
    }
    // console.log(listPost)
    const renderItemPost = ({ item }) => {
        return (
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Card>
                    <TouchableWithoutFeedback >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: `${API_URL}${item.profileimage}`}} />
                                <Body>
                                    <Text>{item.username}</Text>
                                    <Text note>Instagrin User</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </TouchableWithoutFeedback>
                    <CardItem cardBody>
                        <Image source={{uri: `${API_URL}${item.image}` }} style={{height: 350, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>{item.caption}</Text>
                        </Left>
                    </CardItem>
                </Card>
            </View>
        )
    }

    return(
        <View style={{ flex: 1 }}>
        <Header
            leftComponent={{ 
                text: 'Instagrin', 
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
        <FlatList
            data={listPost}
            renderItem={renderItemPost}
            refreshing={refreshing} 
            onRefresh={onRefresh}
        />
    </View>
    )
}


const mapStateToProps = ({ post }) => {
    return {
        listPost: post.postList,
        refreshing: post.homeRefreshing
    }
} 


export default connect(mapStateToProps,{getListPost}) (Home);