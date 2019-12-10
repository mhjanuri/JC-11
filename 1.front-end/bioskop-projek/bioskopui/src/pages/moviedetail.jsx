import React, { Component } from 'react';
import Axios from 'axios';
import { APIURL } from '../support/ApiUrl';


class MovieDetail extends Component {
    state = {
        datadetailfilm:{}
    }

    componentDidMount(){
        Axios.get(`${APIURL}/movies/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({datadetailfilm:res.data})
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    render() { 
        return (
            <div>
                Ini Detail
            </div>
        );
    }
}
 
export default MovieDetail;