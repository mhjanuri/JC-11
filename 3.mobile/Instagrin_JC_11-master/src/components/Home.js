import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHomeListPost } from '../actions';
import PostCard from './PostCard';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeListPost()
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    leftComponent={{ 
                        text: 'Instagrin', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : -25,
                        elevation: 2
                    }}
                />
                <FlatList 
                    data={this.props.homeListPost}
                    renderItem={({ item }) => <PostCard post={item} />}
                    keyExtractor={item => item.id.toString()}
                    style={{ width: '100%' }}
                    onRefresh={() => this.props.getHomeListPost()}
                    refreshing={this.props.loading}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = ({ homeListPost }) => {
    return {
        homeListPost: homeListPost.listPost,
        loading: homeListPost.loading
    }
}

export default connect(mapStateToProps, { getHomeListPost })(Home);