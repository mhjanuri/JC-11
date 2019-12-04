import React, { Component } from 'react';
import Axios from 'axios'
import { APIURL, TOKEN } from '../support/ApiUrl';

class Home extends Component {
    state = {
        dataprovinsi:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/provinsi`)
        .then((res)=>{
            console.log(res.data.data)
            this.setState({dataprovinsi:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
        console.log("masuk sini")
    }

    onProvinsiChange=(a)=>{
        console.log(a.target.value)
    }

    renderProvinsi=()=>{
        return this.state.dataprovinsi.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    render() {
        if (this.state.dataprovinsi.length===0) {
            return <div>Loading...</div>
        }
        return (
            <div onChange={this.onProvinsiChange} className='mt-3'>
                <select ref='provinsi'>
                    {this.renderProvinsi()}
                </select>
                <br/>
                <select>

                </select>

            </div>
        );
    }
}
 
export default Home;