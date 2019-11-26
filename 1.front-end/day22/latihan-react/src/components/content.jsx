import React, { Component } from 'react';

class Content extends Component {
    state = {  }

    renderStnk=()=>{
        var jsx=this.props.stnk.map((val,index)=>{
            return(
                <div key={index} className='col-md-4 px-5 py-0' style={{border: 'black 1px solid'}}>
                    <div>{val.nama}</div>
                    <div>{val.kendaraan}</div>
                    <div>{val.warna}</div>
                </div>
            )
        })
        // console.log(jsx)
        return jsx
    }

    render() { 
        return (
            <div className='row'>
                {this.renderStnk()}
            </div>
        );
    }
}
 
export default Content;
