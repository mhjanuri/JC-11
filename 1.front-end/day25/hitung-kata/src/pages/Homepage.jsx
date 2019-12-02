import React, { Component } from 'react';
import {connect} from 'react-redux'
import {StrCount} from './../redux/actions'


class Homepage extends Component {
    state = {  }

    onWordChange=()=>{
        this.props.StrCount(this.refs.words.value)
    }

    // onTambahClick=()=>{
    //     this.props.tambah()
    // }
    // onkurangClick=()=>{
    //     this.props.Kurangactions()
    // }

    render() { 
        return (
            <center>
                <h2 ref="judul">Ini Text Area</h2>                
                <textarea onChange={this.onWordChange} ref="words" type="text" placeholder="Masukkan Kalimat..." style={{width:'80%',height:'100px',borderRadius:'10px',padding:'10px'}}/>
                <h2 ref="judul">{this.props.Angka} Word(s)</h2>
            
            
            
                {/* <div className='d-flex justify-content-center mt-5'>
                    <button onClick={this.onkurangClick} className='mr-3'>-</button>
                    {this.props.Angka}
                    <button onClick={this.onTambahClick} className='ml-3'>+</button>
                    <button onClick={()=>this.props.ResetActions()}>Reset</button>
                </div> */}

            </center>
            
        );
    }
}

const MapStateToProps=(state)=>{
    return{
        Angka:state.bebas
    }
}

// export default connect(MapStateToProps, { tambah: Tambahactions, Kurangactions, ResetActions, StrCount}) (Homepage);
export default connect(MapStateToProps, { StrCount })(Homepage);