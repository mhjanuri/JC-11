import React, { Component } from 'react';
import Axios from 'axios'
import { APIURL, TOKEN, TOKENN, } from '../support/ApiUrl';

class Home extends Component {
    state = {
        dataprovinsi:[],
        datakabupaten:[]
    }

    componentDidMount(){
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/provinsi`)
        .then((res)=>{
            // console.log(res.data.data)
            this.setState({dataprovinsi:res.data.data})
        }).catch((err)=>{
            console.log(err)
        })
        console.log("masuk sini")
        console.log(TOKENN)
    }

    onProvinsiChange=(a)=>{
        var idprov=a.target.value
        // console.log(idprov)
        Axios.get(`${APIURL}MeP7c5ne${TOKEN}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
        .then((res)=>{
            // console.log(res.data.data)
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
                <select onChange={this.onProvinsiChange} ref='provinsi' style={{ width: '400px' }}>
                    <option defaultValue='Pilih Nama Provinsi...' hidden>Pilih Nama Provinsi... </option>
                    {this.renderProvinsi()}
                </select>
                <br/>
                <br/>
                <select style={{width: '400px'}}>
                    <option defaultValue='Pilih Nama Kabupaten...' hidden>Pilih Nama Kabupaten... </option>
                    {this.renderKabupaten()}
                </select>

            </div>
        );
    }
}
 
export default Home;