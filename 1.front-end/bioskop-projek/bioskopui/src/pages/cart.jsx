import React, { Component } from 'react';
import Axios from 'axios'
import {connect} from 'react-redux'
import {Table, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {APIURL} from '../support/ApiUrl'

class Cart extends Component {
    state = {
        datacart:null
    }

    componentDidMount(){
        Axios.get(`${APIURL}/orders?_expand=movie&userId=${this.props.UserId}&bayar=false`)
        .then(res=>{
            this.setState({datacart:res.data})
            var qtyarr=[]
            res.data.forEach(element => {
                qtyarr.push(`${APIURL}/ordersDetails?orderId=${element.id}`)
            })
            var qtyarrfinal=[]
            Axios.all(qtyarr)
            .then(res1=>{
                res1.forEach((val) =>{
                    qtyarrfinal.push(val.data)
                })
                var datafinal=[]
                datacart.forEach((val,index)=>{
                    datafinal.push({...val,qty:qtyarrfinal[index]})
                })
            }).catch(err1=>{
                console.log(err1)
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    renderCart(){
        if (this.state.datacart!==null) {
            if (this.state.datacart.length===0) {
                return (
                    <tr>
                        <td>Belum ada barang di Cart</td>
                    </tr>
                )
            }
        return this.state.datacart.map((val,index)=>{
            return (
                <tr key={index}>
                    <td style={{width:100}}>{index + 1}</td>
                    <td style={{width:300}}>{val.movie.title}</td>
                    <td style={{width:100}}>{val.jadwal}</td>
                    <td style={{width:100}}><button className='btn btn-primary'>Details</button></td>

                </tr>
            )
        })
        }
    }

    render() { 
        return (
            <div>
                <center>
                    <Table style={{width:600}}>
                        <thead>
                            <tr>
                                <th style={{ width: 100 }}> </th>
                                <th style={{ width: 300 }}> </th>
                                <th style={{ width: 100 }}> </th>
                                <th style={{ width: 100 }}> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCart()}
                        </tbody>
                        <tfoot>
                            <button>Checkout</button>
                        </tfoot>
                    </Table>
                </center>
            </div>
        );
    }
}

const MapStateToProps=(state)=>{
    return{
        AuthLog:state.Auth.login,
        userId:state.Auth.id
    }
}
 
export default connect(MapStateToProps) (Cart);