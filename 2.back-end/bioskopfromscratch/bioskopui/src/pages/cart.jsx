import React, { Component } from 'react';
import Axios from 'axios'
import {connect} from 'react-redux'
import {Table,ModalHeader,ModalBody,ModalFooter,Modal} from 'reactstrap'
import {APIURL} from './../support/ApiUrl'
import {CartAction} from '../redux/actions'
import Numeral from 'numeral'


class Cart extends Component {
    state = {
        datacart:null,
        indexdetail:0,
        modaldetail:false
        
    }

    componentDidMount(){
      this.ongetdata()
    }
    ongetdata=()=>{
        Axios.get(`${APIURL}orders?_expand=movie&userId=${this.props.UserId}&bayar=false`)
        .then((res)=>{
            var datacart=res.data
            var qtyarr=[]
            console.log(res.data)
            res.data.forEach(element => {
                qtyarr.push(Axios.get(`${APIURL}ordersDetails?orderId=${element.id}`))
            });
            var qtyarrfinal=[]
            console.log(qtyarr)
            Axios.all(qtyarr)
            .then((res1)=>{
                res1.forEach((val)=>{
                    qtyarrfinal.push(val.data)
                })
                console.log(qtyarrfinal)
                var datafinal=[]
                datacart.forEach((val,index)=>{
                    datafinal.push({...val,qty:qtyarrfinal[index]})
                })
                console.log(datafinal)
                this.setState({
                    datacart:datafinal
                })
            }).catch((err)=>{

            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    onbtnCheckOut=()=>{
        var userId=this.props.UserId
        var datacart=this.state.datacart
        var harga=0
        this.state.datacart.forEach((val)=>{
            harga+=val.qty.length*25000
        })
        var today=new Date()
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        var ubahdata=[]
        datacart.forEach((val)=>{
            ubahdata.push(Axios.patch(`${APIURL}orders/${val.id}`,{bayar:true}))
        })
        Axios.all(ubahdata)
        .then(res=>{
            Axios.post(`${APIURL}transactions`,{
                userId,
                totalharga:harga,
                tanggal:today
            })
            .then((res1)=>{
                var transactionsdetails=[]
                datacart.forEach((val)=>{
                    transactionsdetails.push({
                        transactionId:res1.data.id,
                        orderId:val.id,
                        titlefilm:val.movie.title,
                        qty:val.qty.length
                    })
                })
                var transactionsdetails2=[]
                transactionsdetails.forEach((val)=>{
                    transactionsdetails2.push(Axios.post(`${APIURL}transactionsDetails`,val))
                })
                Axios.all(transactionsdetails2)
                .then((res2)=>{
                    console.log(res2)
                    Axios.get(`${APIURL}orders?userId=${this.props.UserId}&bayar=false`)
                    .then(res3=>{
                        this.props.CartAction(res3.data.length)
                        this.ongetdata()
                    }).catch(err=>{
                      console.log(err)
                    })

                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>{
                console.log(err)
            })
        }).catch(err=>{

        })
    }
    rendertotalharga=()=>{
        var harga=0
        this.state.datacart.forEach((val)=>{
            harga+=val.qty.length*25000
        })
        return 'Rp.'+Numeral(harga).format('0,0.00')
    }
    renderCart=()=>{
        if(this.state.datacart!==null){
            if(this.state.datacart.length===0){
                return (<tr>
                    <td>belum ada barang di Cart</td>
                </tr>)
            }
            return this.state.datacart.map((val,index)=>{
                return(
                    <tr key={index}>
                        <td style={{width:100}}>{index+1}</td>
                        <td style={{width:300}}>{val.movie.title}</td>
                        <td style={{width:100}}>{val.jadwal}</td>
                        <td style={{width:100}}>{val.qty.length}</td>
                        <td style={{width:100}}>{'Rp.'+Numeral(val.qty.length*25000).format('0,0.00')}</td>
                        <td style={{width:100}}><button className='btn btn-primary' onClick={()=>this.setState({ indexdetail:index,modaldetail:true})} >Details</button></td>
                    </tr>
                )
            })
        }
    }
    render() {
        if(this.props.UserId){
            return (
                <div>
                    <Modal isOpen={this.state.modaldetail}  toggle={()=>this.setState({modaldetail:false})}>
                        <ModalHeader>
                            Details
                        </ModalHeader>
                        <ModalBody>
                            <Table>
                            <thead>
                                <tr>
                                    <th>
                                        No.
                                    </th>
                                    <th>
                                        Bangku
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.datacart!==null &&this.state.datacart.length!==0 ?
                                    this.state.datacart[this.state.indexdetail].qty.map((val,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{'abcdefghijklmnopqrstuvwxyz'.toUpperCase()[val.row]+(val.seat+1)}</td>
                                            </tr>
                                        )
                                    })
                                    :
                                    null
                                }
                            </tbody>
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-primary' onClick={()=>this.setState({modaldetail:false})}>Close</button>
                        </ModalFooter>
                    </Modal>
                    <center>
                        <Table style={{width:600}}>
                            <thead>
                                <tr>
                                    <th style={{width:100}}>No.</th>
                                    <th style={{width:300}}>Title</th>
                                    <th style={{width:100}}>Jadwal</th>
                                    <th style={{width:100}}>Jumlah</th>
                                    <th style={{width:100}}>Harga</th>
                                    <th style={{width:100}}>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCart()}
                            </tbody>
                          
                    
                        </Table>
                        <div className='d-flex justify-content-between 'style={{paddingLeft:'30%',paddingRight:'37.5%'}}>
                            <div >
                                <button className='btn btn-success' onClick={this.onbtnCheckOut}>checkout</button> 
                            </div>
                            <div  className='float-right'>
                                Total Harga &nbsp;
                                {this.state.datacart?this.rendertotalharga():null}
                            </div>

                        </div>
                    </center>
                </div>
              );
        }
        return(
            <div>404 not found</div>
        )
    }
}

const MapstateToprops=(state)=>{
    return{
        AuthLog:state.Auth.login,
        UserId:state.Auth.id
    }
}
export default connect(MapstateToprops,{CartAction}) (Cart);