import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { API_URL } from '../helpers/apiurl';

class PostDetailProfile extends React.Component {
    state = { isVisible: false, deleteVisible: false }

    deletePost = () => {

    }

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
                                onPress={() => this.setState({ isVisible: true })}
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
                    <View>
                        <TouchableWithoutFeedback>
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
                    </View>
                </Overlay>
                <Overlay 
                    isVisible={this.state.deleteVisible}
                    height={'auto'}
                >
                    <View style={{ alignItems: 'center' }}>
                        <View style={{
                            alignItems: 'center',
                            height: 100,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                paddingBottom: 10
                            }}>
                                Confirm Deletion
                            </Text>
                            <Text note>
                                Delete this post?
                            </Text>
                        </View>
                        <TouchableWithoutFeedback
                            onPress={this.deletePost}
                        >
                            <View style={{
                                paddingVertical: 12,
                                borderTopWidth: 0.3,
                                borderTopColor: '#dedede',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: '#4388d6',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Delete
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.setState({ deleteVisible: false })}>
                            <View style={{
                                paddingVertical: 12,
                                borderTopWidth: 0.3,
                                borderTopColor: '#dedede',
                                width: '100%',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontSize: 16
                                    }}
                                >
                                    Don't delete
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Overlay>
                <Overlay 
                    isVisible={this.props.deleteLoading}
                    height={'auto'}
                    width={'auto'}
                >
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 16 }}>
                            Deleting ...
                        </Text>
                    </View>
                </Overlay>
            </View>
        )
    }
}

const mapStateToProps = ({ postDetailProfile }) => {
    return {
        ...postDetailProfile
    }
}

export default connect(mapStateToProps)(PostDetailProfile);