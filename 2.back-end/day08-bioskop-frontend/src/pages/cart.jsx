import React, { Component } from 'react';
import Axios from 'axios'
import {connect} from 'react-redux'
import { Table, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import {APIURL} from '../support/ApiUrl'
import { Redirect } from 'react-router-dom' 
import Numeral from 'numeral'
// import { countCart } from './../redux/actions'
// import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"

// const MySwal = withReactContent(Swal)

class Cart extends Component {
    state = {
        datacart:null,
        datacartLength:0,
        modaldetail:false,
        indexdetail:0
    }

    componentDidMount(){
        Axios.get(`${APIURL}/orders?_expand=movie&userId=${this.props.UserId}&bayar=false`)
        .then(res=>{
            console.log('res.data', res.data)
            var datacart=res.data
            var qtyarr=[]
            res.data.forEach(element => {
                // console.log(element)
                qtyarr.push(Axios.get(`${APIURL}/ordersDetails?orderId=${element.id}`))
            })
            console.log('qtyarr',qtyarr)

            var qtyarrfinal=[]
            Axios.all(qtyarr)
            .then((res1)=>{
                res1.forEach((val) =>{
                    qtyarrfinal.push(val.data)
                })
                console.log('qtyarrfinal ',qtyarrfinal)
                var datafinal=[]
                datacart.forEach((val,index)=>{
                    datafinal.push({...val, qty: qtyarrfinal[index]})
                })
                console.log('datafinal ',datafinal)
                this.setState({
                    datacart:datafinal,
                    datacartLength:datafinal.length
                })
                // console.log(this.state.datacart)
            }).catch(err1=>{
                console.log('err1', err1)
            })
        }).catch(err=>{
            console.log('err', err)
        })
        
    }

    jadwalWithEmbelEmbel = (arr) => {
        return arr + ':00PM'
    }

    onDetailClick=()=>{

    }

    onCancelClick=(val)=>{
        console.log(this.state.datacart[val].movie)
        // console.log(this.state.datacart[val].movie)
        // console.log(this.state.datacart[val].qty)
        // this.state.datacart.splice(val,1)
        
        // MySwal.fire({
        //     title: `Are you sure want to delete <br/> ${val.title}?`,
        //     text: "",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.value) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //         Axios.delete(`${APIURL}/orders/${val.id}`, this.state.datacart)
        //             .then((res) => {
        //                 Axios.get(`${APIURL}/orders`)
        //                     .then((res) => {
        //                         this.setState({ datacart: res.data})
        //                     })
        //             }).catch((err) => {
        //                 console.log(err)
        //             })
        //     }
        // })
    }

    renderCart(){
        console.log("datacart ",this.state.datacart)
        // console.log(this.state.datacartLength)
        // this.props.countCart(this.state.datacartLength)

        if (this.state.datacart!==null) {
            if (this.state.datacart.length===0) {
                return (
                    <tr>
                        <td>Belum ada barang di Cart</td>
                    </tr>
                )
            }
            return this.state.datacart.map((val,index)=>{
                // console.log('VAL.JADWAL '+val.jadwal)
                return (
                    <tr key={index}>
                        <td style={{ width: 100 }}>{index + 1}</td>
                        <td style={{ width: 300 }}>{val.movie.title}</td>
                        <td style={{ width: 100 }}>{this.jadwalWithEmbelEmbel(val.jadwal)}</td>
                        <td style={{ width: 100 }}>{val.qty.length}</td>
                        <td style={{ width: 800 }}>{'Rp. ' + Numeral(val.totalharga).format('0,0') + ',00'}</td>
                        <td style={{ width: 100 }}><button onClick={() => this.setState({ modaldetail: true, indexdetail: index })}>Details</button></td>
                        {/* <td style={{ width: 100 }} onClick={()=>this.onCancelClick(index)} ><button>Cancel</button></td> */}
                    </tr>
                )
                
            })
        } else {
            // console.log('state.datacart is empty:null')
            // console.log(this.state.datacart)
            // console.log(this.state.datacartLength)
        }
    }

    render() { 
        if (this.props.UserRole==='admin') {
            return <Redirect to={'/pagenotfound'} />
        }
        if (this.props.UserId) {
            return (
                <div>
                    <Modal isOpen={this.state.modaldetail} toggle={() => this.setState({ modaldetail: false })}>
                        <ModalHeader>
                            Detail Seat
                        </ModalHeader>
                        <ModalBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Seat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.datacart !== null && this.state.datacart.length !== 0
                                        ? this.state.datacart[this.state.indexdetail].qty.map((val, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{"abcdefghijklmnopqrstuvwxyz".toUpperCase()[val.row] + [val.seat + 1]}</td>
                                                </tr>
                                            );
                                        })
                                        : null}
                                </tbody>
                                
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-primary' onClick={() => this.setState({ modaldetail: false })}>Ok</button>
                        </ModalFooter>
                    </Modal>


                    <center>
                        <Table style={{width:600}}>
                            <thead>
                                <tr>
                                    <th style={{ width: 100 }}>Order Id</th>
                                    <th style={{ width: 300 }}>Judul</th>
                                    <th style={{ width: 100 }}>Jadwal</th>
                                    <th style={{ width: 100 }}>Jumlah</th>
                                    <th style={{ width: 800 }}>Total Harga</th>
                                    <th style={{ width: 100 }}>Detail</th>
                                    {/* <th style={{ width: 100 }}>Cancel</th> */}
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
        return <Redirect to={'/pagenotfound'} />
    }
}

const mapStateToProps=(state)=>{
    return{
        AuthLog:state.Auth.login,
        UserId:state.Auth.id,
        UserRole:state.Auth.role
    }
}
export default connect(mapStateToProps)(Cart);
