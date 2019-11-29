import React, { Component } from 'react';

class Homepage extends Component {
    state = {  }

    onTambahClick
    render() { 
        return (
            <div className='d-flex justify-content-center'>
                <button className='mr-3'>-</button>
                    {this.props.Angka}
                <button className='ml-3'>+</button>
            </div>
        );
    }
}

const MapStateToProps=(state)=>{
    return{
        Angka:state.bebas
    }
}


export default connect(MapStateToProps,{tambah:Tambahactions,Kurangactions}) (Homepage);