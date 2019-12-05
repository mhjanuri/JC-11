import React, { Component } from 'react';
import Axios from 'axios'

// eslint-disable-next-line
const url='http://localhost:2000'

class Home extends Component {
    state = {
        dataMovies:[]
    }

    componentDidMount(){
        Axios.get(`${url}/movies`)
        .then((res)=>{
            this.setState({dataMovies:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderMovies=()=>{
        return this.state.dataMovies.map((val,index)=>{
            return (
                
            )
        })
    }

    render() { 
        return (
            <div>
                ini
            </div>
        )    
    }
}
 
export default Home;