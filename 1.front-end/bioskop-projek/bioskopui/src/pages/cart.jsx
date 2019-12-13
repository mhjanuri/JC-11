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
        return
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

MapStateToProps(state){

}
 
export default connect(MapStateToProps) (Cart);