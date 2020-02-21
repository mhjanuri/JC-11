import React, { Component } from 'react';
import Axios from 'axios'
import { View, Text, ActivityIndicator } from 'react-native';

class AlbumList extends Component {
    state = {
        dataAlbums:[]
    }

    async componentDidMount(){
        try {
            const {data} = await Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            this.setState({dataAlbums: data})
        } catch (err) {
            console.log(err)
        }
    }

    renderAlbums=()=>{
        // const {dataAlbums}=this.state
        if (this.state.dataAlbums.length===0) {
            return <ActivityIndicator size='large' color='#00FF00' />
        } else {
            return this.state.dataAlbums.map((val,index)=>{
                return <Text key={index}>{val.title}</Text>
            })
        }
    }

    render() { 
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}
 
export default AlbumList;