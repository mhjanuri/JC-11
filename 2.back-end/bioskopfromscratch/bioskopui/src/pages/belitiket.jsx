import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import { APIURL } from '../support/ApiUrl';
import {Redirect} from 'react-router-dom'
import {Modal,ModalBody,ModalFooter} from 'reactstrap'
import {CartAction} from '../redux/actions'
import Numeral from 'numeral'

class Belitiket extends Component {
    state = {  
        datamovie:{},
        seats:260,
        baris:0,
        booked:[],
        loading:true,
        jam:12,
        pilihan:[],
        openmodalcart:false,
        redirecthome:false
    }
    
    componentDidMount(){
        this.onJamchange()
    }
    onJamchange=()=>{
        var studioId=this.props.location.state.studioId
        var movieId=this.props.location.state.id
        // get jumlah seat di studio
        Axios.get(`${APIURL}studios/${studioId}`)
        .then((res1)=>{
            // get data orders movie utnuk diambil idnya
            Axios.get(`${APIURL}orders?movieId=${movieId}&jadwal=${this.state.jam}`)
            .then((res2)=>{
                var arrAxios=[]
                // get data ordersdetail untuk memilih berapa kursi yang sudah dibooking karena id yang berbeda maka 
                // maka dilakukan get data dengan looping cara looping axios caranya seperti dibawah 
                res2.data.forEach((val)=>{
                    arrAxios.push(Axios.get(`${APIURL}ordersDetails?orderId=${val.id}`))
                })
                var arrAxios2=[]
                console.log(arrAxios)
                // setelah dilooping axios.getnya maka untuk mendapatkan data dilakukan dengan cara axios.all axios.all sama saja seperti promise.all yaitu fitur yang digunakan untuk melooping promise
                Axios.all(arrAxios)
                .then((res3)=>{
                    console.log(res3)
                    // data yang didapatkanpun bentuknya adaalh array bukan object oleh karena itu haru dilooping untuk mendapatkan kursi yang sudah dibooked
                    res3.forEach((val)=>{
                        arrAxios2.push(...val.data)
                    })
                    console.log(arrAxios2)
                    this.setState({
                        datamovie:this.props.location.state,
                        seats:res1.data.jumlahKursi,
                        baris:res1.data.jumlahKursi/20,
                        booked:arrAxios2,
                        loading:false
                    })  
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err2)=>{
                console.log(err2)
            })
        }).catch((err1)=>{
            console.log(err1)
        })
    }
    onButtonjamclick=(val)=>{
        this.setState({jam:val,pilihan:[]})
        this.onJamchange()   
    }

    onPilihSeatClick=(row,seat)=>{
        var pilihan=this.state.pilihan
        pilihan.push({row:row,seat})//seat:seat bisa juga ditulis begitu 
        this.setState({pilihan:pilihan})
    }
    

    onOrderClick=()=>{
        var userId=this.props.UserId
        var movieId=this.state.datamovie.id
        var pilihan=this.state.pilihan
        var jadwal=this.state.jam
        var totalharga=this.state.pilihan.length*25000
        var bayar=false
        var dataorders={
            userId,
            movieId,
            totalharga,
            jadwal,
            bayar
        }
        // cek data orders apakah film ada dicart atau tidak 
        Axios.get(`${APIURL}orders`,{
            params:{
                userId,
                movieId,
                bayar
            }
        }).then((res)=>{
            if(res.data.length){
                // jika masuk sini maka film sudah masuk cart dan yang ditambah adalah ordersdetailnya saja
                console.log(res.data[0].id)
                var dataordersdetail=[]
                pilihan.forEach((val)=>{
                    dataordersdetail.push({
                        orderId:res.data[0].id,
                        seat:val.seat,
                        row:val.row
                    })
                })
                console.log(dataordersdetail)
                var dataordersdetail2=[]
                dataordersdetail.forEach((val)=>{
                    // menambahkan ordersdetail
                    dataordersdetail2.push(Axios.post(`${APIURL}ordersDetails`,val))
                })
                console.log(dataordersdetail2)
                // untuk melooping promise
                Axios.all(dataordersdetail2)
                .then((res1)=>{
                    console.log(res1)
                    // get data jumlah cart untuk dimasukkan ke redux
                    Axios.get(`${APIURL}orders?userId=${this.props.UserId}&bayar=false`)
                    .then(res3=>{
                        this.props.CartAction(res3.data.length)
                        this.setState({openmodalcart:true})
                    }).catch(err=>{
                        console.log(err)
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            }else{
                // membuat orders baru
                Axios.post(`${APIURL}orders`,dataorders)
                .then((res)=>{
                    console.log(res.data.id)
                    var dataordersdetail=[]
                    pilihan.forEach((val)=>{
                        dataordersdetail.push({
                            orderId:res.data.id,
                            seat:val.seat,
                            row:val.row
                        })
                    })
                    console.log(dataordersdetail)
                    var dataordersdetail2=[]
                    dataordersdetail.forEach((val)=>{
                        // post orders details
                        dataordersdetail2.push(Axios.post(`${APIURL}ordersDetails`,val))
                    })
                    // menjalankan rentetan promise 
                    Axios.all(dataordersdetail2)
                    .then((res1)=>{
                        console.log(res1)
                        // get data cart
                        Axios.get(`${APIURL}orders?userId=${this.props.UserId}&bayar=false`)
                        .then(res3=>{
                            this.props.CartAction(res3.data.length)
                            this.setState({openmodalcart:true})
                        }).catch(err=>{
                          console.log(err)
                        })
                    }).catch((err)=>{
                        console.log(err)
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    renderHargadanQuantity=()=>{
        var jumlahtiket=this.state.pilihan.length
        var harga=jumlahtiket*25000
        return(
        <div>
            {jumlahtiket} tiket X {'Rp.'+Numeral(25000).format('0,0.00') }= {'Rp.' +Numeral(harga).format('0,0.00')}
        </div>

        )
    }

    onCancelseatClick=(row,seat)=>{
        var pilihan=this.state.pilihan
        var rows=row
        var seats=seat
        var arr=[]
        for (var i=0;i<pilihan.length;i++){
            if(pilihan[i].row!==rows||pilihan[i].seat!==seats){
                arr.push(pilihan[i])
            }
        }
        this.setState({pilihan:arr})
    }

    renderseat=()=>{
        var arr=[]
        for(let i=0;i<this.state.baris;i++){
            arr.push([])
            for(let j=0;j<this.state.seats/this.state.baris;j++){
                arr[i].push(1)
            }
        }
        console.log(this.state.booked)
        for(let j=0;j<this.state.booked.length;j++){
            arr[this.state.booked[j].row][this.state.booked[j].seat]=3
        }
        
        for(let a=0;a<this.state.pilihan.length;a++){
            arr[this.state.pilihan[a].row][this.state.pilihan[a].seat]=2
        }
        var alphabet='abcdefghijklmnopqrstuvwxyz'.toUpperCase()
        var jsx=arr.map((val,index)=>{
            return(
                <div key={index}>
                    {
                        val.map((val1,i)=>{
                            if(val1===3){
                                return(
                                    <button key={i} disabled className='rounded btn-disble mr-2 mt-2 bg-danger text-center'>
                                        {alphabet[index] +(i+1)} 
                                    </button>
                                )
                            }else if(val1===2){
                                return(
                                    <button key={i} onClick={()=>this.onCancelseatClick(index,i)}   className='rounded btn-order mr-2 mt-2 btn-pilih text-center'>
                                        {alphabet[index] +(i+1)}
                                    </button>
                                )
                            }
                            return(
                                <button key={i} onClick={()=>this.onPilihSeatClick(index,i)}  className='rounded btn-order mr-2 mt-2 text-center'>
                                    {alphabet[index]+(i+1)}
                                </button>
                            )
                        })
                    }
                </div>
            )
        })
        return jsx
    }
    renderbutton=()=>{
        return this.state.datamovie.jadwal.map((val,index)=>{
            if(this.state.jam===val){
                return(
                    <button className='mx-2 btn btn-outline-primary' disabled>{val}.00</button>
                )
            }
            return(
                <button className='mx-2 btn btn-outline-primary' onClick={()=>this.onButtonjamclick(val)}>{val}.00</button>
            )
        })
    }
    render(){
        if(this.props.location.state &&this.props.AuthLog){
            if(this.state.redirecthome){
                return <Redirect to={'/'}/>
            }
            return (
                <div>
                    <Modal isOpen={this.state.openmodalcart}>
                        <ModalBody>
                            cart berhasil ditambah bro
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={()=>this.setState({redirecthome:true})}>Ok</button>
                        </ModalFooter>
                    </Modal>
                    <center className='mt-1'>
                        <div>
                            {this.state.datamovie.title}
                        </div>
                        {this.state.loading?null:this.renderbutton()}
                        <div>
                            {this.state.pilihan.length?<button onClick={this.onOrderClick} className='btn btn-primary mt-3'>Order</button> 
                            :
                            null
                            }
                        </div>
                        {
                            this.state.pilihan.length?
                            this.renderHargadanQuantity()
                            :
                            null
                        }
                    </center>
                    <div className="d-flex justify-content-center mt-4">
                        <div>
                            {this.state.loading?null:this.renderseat()} 
                        </div>
                    </div>
                </div>
              );
        }
        return(
            <div>
                404 not found
            </div>
        )
    }
}

const MapstateToprops=(state)=>{
    return{
        AuthLog:state.Auth.login,
        UserId:state.Auth.id
    }
}
export default connect(MapstateToprops,{CartAction}) (Belitiket);
