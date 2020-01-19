import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import { APIURL } from '../support/ApiUrl';
import {URL} from '../support/Url'
import Numeral from 'numeral'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import {Redirect} from 'react-router-dom' 

class Belitiket extends Component {
    state = {  
        datamovie:{},
        seats:260,
        baris:0,
        booked:[],
        loading:true,
        jam:12,
        pilihan:[],
        harga:0,
        jumlahtiket:0,
        openModalCart:false,
        redirectHome:false
    }

    componentDidMount(){
        this.onJamchange()

    }

    onJamchange=()=>{
        var studioId=this.props.location.state.studioId
        console.log(studioId)
        var movieId=this.props.location.state.id
        Axios.get(`${APIURL}/studios/${studioId}`)
        .then((res1)=>{
            Axios.get(`${APIURL}/orders?movieId=${movieId}&jadwal=${this.state.jam}`)
            .then((res2)=>{
                var arrAxios=[]
                res2.data.forEach((val)=>{
                    arrAxios.push(Axios.get(`${APIURL}/ordersDetails?orderId=${val.id}`))
                })
                var arrAxios2=[]
                Axios.all(arrAxios)
                .then((res3)=>{
                    // console.log(res3)
                    res3.forEach((val)=>{
                        arrAxios2.push(...val.data)
                    })
                    // console.log(arrAxios2)
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
        Axios.post(`${APIURL}/orders`,dataorders)
        .then((res)=>{
            // console.log(res.data.id)
            var dataordersdetail=[]
            pilihan.forEach((val)=>{
                dataordersdetail.push({
                    orderId:res.data.id,
                    seat:val.seat,
                    row:val.row
                })
            })
            // console.log(dataordersdetail)
            var dataordersdetail2=[]
            dataordersdetail.forEach((val)=>{
                dataordersdetail2.push(Axios.post(`${APIURL}/ordersDetails`,val))
            })
            Axios.all(dataordersdetail2)
            .then((res1)=>{
                // console.log(res1)
                this.setState({openModalCart:true})
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    onClearClick=()=>{
        this.setState({ pilihan: [] })
    }

    renderHargadanQuantity=()=>{
        var jumlahtiket=this.state.pilihan.length
        var harga=jumlahtiket*25000
        return (
            <div>
                {jumlahtiket} tiket X {Numeral(25000).format('Rp0,0.00')} = {Numeral(harga).format('Rp0,0.00')}
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
        // console.log(this.state.booked)
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
                                    <button key={i} disabled className='rounded btn-disble mr-2 mt-2 text-center'>
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
            if (this.props.UserRole==="admin") {
                return <Redirect to={'/pagenotfound'} />
            }
            if (this.state.redirectHome) {
                return <Redirect to={'/'} />
            } 
            console.log(this.state.pilihan)
            return (
                
                <div>
                    <Modal isOpen={this.state.openModalCart}>
                        <ModalBody >Cart berhasil ditambahkan</ModalBody>
                        <ModalFooter>
                            <button 
                                onClick={() => onOkModalClick()}
                                className='btn btn-success'>Okay
                            </button>
                        </ModalFooter>
                    </Modal>

                    <center className='mt-1'>
                        {this.state.loading?null:this.renderbutton()}
                        <div>
                            {this.state.pilihan.length? (
                                <div>
                                    <button className='btn btn-primary mt-3 mr-3' onClick={this.onOrderClick}>
                                        Order
                                    </button>
                                    <button className='btn btn-danger mt-3' onClick={this.onClearClick}>
                                        Clear
                                    </button>
                                </div>
                            ) : null
                        }
                        </div>
                        {this.state.pilihan.length ? this.renderHargadanQuantity():null}
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
                <Redirect to={'/pagenotfound'} />
                )
            }
        }
        
        const onOkModalClick = () => {
            window.location.reload()
            window.location.assign(`${URL}/`)
        }

        const mapStateToProps=(state)=>{
            return{
                AuthLog:state.Auth.login,
                UserRole:state.Auth.role,
                UserId:state.Auth.id
            }
        }
        
        export default connect(mapStateToProps) (Belitiket);