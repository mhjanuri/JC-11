import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Tambahactions,Kurangactions,ResetActions} from './../redux/actions'

class Homepage extends Component {
    state = {  }

    onTambahClick=()=>{
        this.props.tambah()
    }
    onkurangClick=()=>{
        this.props.Kurangactions()
    }

    render() { 
        return (
            <div className='d-flex justify-content-center mt-5'>
                <button onClick={this.onkurangClick} className='mr-3'>-</button>
                {this.props.Angka}
                <button onClick={this.onTambahClick} className='ml-3'>+</button>
                <button onClick={() => this.props.ResetActions()}>Reset</button>
            </div>
        );
    }
}

const MapStateToProps=(state)=>{
    return{
        Angka:state.bebas
    }
}


export default connect(MapStateToProps, { tambah: Tambahactions, Kurangactions, ResetActions}) (Homepage);