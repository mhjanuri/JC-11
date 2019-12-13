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
                    </Table>
                </center>
            </div>
        );
    }
}
 
export default Cart;