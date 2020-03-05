import React from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableWithoutFeedback } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { API_URL } from '../helpers/apiurl';
import { initEditProfile, initPostDetailProfile } from '../actions';

class Profile extends React.Component {
    onBtnEditProfilePress = () => {
        this.props.initEditProfile(this.props.user)
        this.props.navigation.navigate('EditProfile')
    }

    onPostPress = (post) => {
        this.props.initPostDetailProfile(post)
        this.props.navigation.navigate('PostDetailProfile')
    }

    renderListPost = () => {
        var i = 2;
        return this.props.listPost.map((item, index) => {
            var styleObj = { width: '33%', marginVertical: 1 }
            if((index + 1) === i ) {
                i += 3;
                styleObj.marginHorizontal = '0.5%'
            }
            return (
                <TouchableWithoutFeedback
                    onPress={() => this.onPostPress(item)}
                    key={index}
                >
                    <View 
                        style={styleObj}
                    >
                        <Image source={{uri: `${API_URL}${item.image}` }} style={{height: 125, width: '100%' }}/>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    leftComponent={{ 
                        text: this.props.user.username, 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 4 }}
                    rightComponent={{ 
                        icon: 'menu', 
                        color: 'black',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : - 25,
                        borderBottomWidth: 0.5
                    }}
                />
                <ListItem
                    leftAvatar={{
                        source: { uri: `${API_URL}${this.props.user.profileimage}` },
                        size: 'large'
                    }}
                    title={this.props.user.displayname}
                    subtitle={`Instagrin ${this.props.user.role}`}
                    containerStyle={{
                        width: '100%'
                    }}
                />
                <View style={{ paddingLeft: 15 }}>
                    <Text>{this.props.user.bio}</Text>
                </View>
                <Button 
                    title="Edit Profile"
                    containerStyle={{ 
                        marginVertical: 15, 
                        marginHorizontal: 15, 
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        width: '95%'
                    }}
                    buttonStyle={{ borderColor: 'gray' }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={this.onBtnEditProfilePress}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex: 1
                }}>
                    {this.renderListPost()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1
    }
})

const mapStateToProps = ({ user, homeListPost }) => {
    var listPost = homeListPost.listPost.filter((item) => {
        return item.userId === user.id
    })
    return { user, listPost }
}

export default connect(mapStateToProps, { initEditProfile, initPostDetailProfile })(Profile);