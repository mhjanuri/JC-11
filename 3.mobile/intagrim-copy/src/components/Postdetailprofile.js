import React,{Component} from 'react';
import {View,Image} from 'react-native'
import style from './../style/style'
import { Header, Icon, Overlay } from 'react-native-elements'; 
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {API_URL} from './../support/apiUrl'
import {connect} from 'react-redux'

class PostdetailProfile  extends Component {
    state = { isVisible: false, deleteVisible: false }

    render() { 
        return (
            <View>
                <Header
                    placement='left'
                    centerComponent={{ 
                        text: 'Post', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftComponent={{ 
                        icon: 'arrow-back', 
                        color: 'black',
                        onPress: () => this.props.navigation.goBack() 
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <Card>
                    <CardItem>
                        <Left style={{ flex: 3 }}>
                            <Thumbnail source={{uri: `${API_URL}${this.props.profileimage}` }} />
                            <Body>
                                <Text>{this.props.username}</Text>
                                <Text note>Instagrin User</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon
                                name='more-vert'
                                size={30}
                                onPress={() => this.setState({ isVisible: true  })}
                            />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: `${API_URL}${this.props.image}` }} style={{height: 350, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>{this.props.caption}</Text>
                        </Left>
                    </CardItem>
                </Card>
                <Overlay 
                    isVisible={this.state.isVisible}
                    height={'auto'}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <TouchableWithoutFeedback onPress={this.onEditPress}>
                        <Text
                            style={{
                                fontSize: 16,
                                paddingVertical: 15
                            }}
                        >
                            Edit
                        </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setState({ isVisible: false, deleteVisible: true })}>
                        <Text
                            style={{
                                fontSize: 16,
                                paddingVertical: 15
                            }}
                        >
                            Delete
                        </Text>
                    </TouchableWithoutFeedback>
                </Overlay>
            </View>
          );
    }
}
 


const mapStateToProps = ({ post }) => {
    // console.log('Post Detail : ', post.selectedPostDetailProfile)
    return {
        ...post.selectedPostDetailProfile,
        deleteLoading: post.deleteLoading
    }
}
export default connect(mapStateToProps) (PostdetailProfile)