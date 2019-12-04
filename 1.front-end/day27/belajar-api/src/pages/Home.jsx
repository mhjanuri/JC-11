import React, { Component } from 'react';
import Axios from 'axios'
import { APIURL, TOKEN } from '../support/ApiUrl';

class Home extends Component {
    state = {
        dataprovinsi:[],
        datakabupaten:[]
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
        // console.log(a.target.value)
        var idprov=a.target.value
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
        .then((res)=>{
            console.log(res.data.data)
            this.setState({datakabupaten:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
        console.log("masuk sini PROVINSI")

    }

    renderProvinsi=()=>{
        return this.state.dataprovinsi.map((val,index)=>{
            return(
                <option value={val.id} key={index}>{val.name}</option>
            )
        })
    }

    renderKabupaten=()=>{
        if(this.state.datakabupaten.length===0){
            return <option>pilih provinsi dulu... </option>
        }
        return this.state.datakabupaten.map((val,index)=>{
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
            <div className='mt-3'>
                <select onChange={this.onProvinsiChange} ref='provinsi'>
                    <option defaultValue='Pilih Nama Provinsi...' hidden>Pilih Nama Provinsi... </option>
                    {this.renderProvinsi()}
                </select>
                <select>
                    {this.renderKabupaten()}
                </select>

            </div>
        );
    }
}
 
export default Home;