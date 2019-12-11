import React, { Component } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios'
import { APIURL } from '../support/ApiUrl';

class Belitiket extends Component {
    state = {
        datamovie:{},
        seats:260,
        baris:0,
        booked:[],
        loading:true,
        jam:12,
        pilihan:[]
    }

    componentDidMount() {
        // console.log(this.props.location.state)
        var studioID = this.props.location.state.studioID
        var movieID = this.props.location.state.id
        Axios.get(`${APIURL}/studios/${studioID}`)
        .then((res1)=>{
            Axios.get(`${APIURL}/orders?movieId=${movieID}&jadwal=${this.state.jam}`)
            .then((res2)=>{
                var arrAxios=[]
                res2.data.forEach((val)=>{
                    arrAxios.push(Axios.get(`${APIURL}/ordersDetails?orderId=${val.id}`))
                })
                var arrAxios2=[]
                Axios.all(arrAxios)
                .then((res3)=>{
                    res3.forEach((val)=>{
                        arrAxios2.push(...val.data)
                    })
                    this.setState({
                        datamovie: this.props.location.state,
                        seats: res1.data.jumlahKursi,
                        baris: res1.data.jumlahKursi/20,
                        booked: arrAxios2,
                        loading: false,
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }).catch((err2) => {
                console.log(err2)
            })
        }).catch((err1)=>{
            console.log(err1)
        })
    }

    renderseat = () => {
        var arr=[]
        for(let i=0; i<this.state.seats/this.state.baris; i++){
            arr.push([])
            for(let j=0; j<this.state.seats/this.state.baris; j++){
                arr[i].push(i)
            }
        }
        console.log(this.state.booked)
        for(let j=0; j<this.state.booked.length; j++){
            arr[this.state.booked[j].row][this.state.booked[j].seat]=3
        }
        for(let a=0; a<this.state.pilihan.length; a++){
            arr[this.state.booked[j].row][this.state.booked[j].seat]=2
        }
        var alpahabet='abcdefghijklmnopqrstuvwxyz'.toUpperCase()
        var jsx=arr.map((val,index)=>{
            return(
                <div key={index}>
                 { 
                    val.map((val,i)=>{
                        if(val1===1){
                            return(
                                <button key={i} disabled className='rounded btn-disabled mr-2 mt-2 bg-danger text-center'>
                                    {alpahabet[index]+(i+1)}
                                </button>
                            )
                        }else if(val1===2){
                            return(
                            <button key={i}className='rounded btn-disabled mr-2 mt-2 bg-danger text-center'>
                            {alpahabet[index]+(i+1)}>
                            </button>
                         )
                    }
                    return(
                         <button key={i}className='rounded btn-disabled mr-2 mt-2 bg-danger text-center'>
                            {alpahabet[index]+(i+1)}>
                            </button>
                         )
                         })
                 }
                </div>    
            )
        })
        return jsx
    }

    render() { 
        if (this.props.location.state && this.props.AuthLog) {
            return (
                <div>
                    beli tiket
                    {this.state.loading ? null : this.renderseat()}
                </div>
            );
        }
        return (
            <div>
                404 not found
            </div>
        )
    }
}
 
const MapstateToprops = (state) => {
    return {
        AuthLog: state.Auth.login
    }
}
export default connect(MapstateToprops)(Belitiket);