import React, { Component } from 'react';
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter 
} from 'reactstrap'

class Home extends Component {
    state = {
        data:[],
        isopen: false
    }

    componentDidMount(){
        this.setState({
          data: [
            { kegiatan: "Lari", status: true, tanggal: "2019-11-27" },
            { kegiatan: "Sarapan", status: false, tanggal: "2019-11-28" }
          ]
        });
    }

    onAdddataClick=()=>{
        var kegiatan=this.refs.kegiatan.value
        var tanggal=this.refs.tanggal.value
        console.log(tanggal)
    }

    renderTodo=()=>{
        return this.state.data.map((val,index)=>{
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {val.kegiatan}</td>
                <td> {val.status? 'Sudah' : 'Belum'}</td>
                <td> {val.tanggal}</td>
                <td>
                  <button className="btn btn-primary mr-3">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
        })
    }

    render() { 
        return (
          <div>
              <Modal isOpen={this.state.isopen} toggle={()=>this.setState({isopen:false})}>
                  <ModalHeader>
                      Add Todo
                  </ModalHeader>
                  <ModalBody>
                      <input className='form-control ' placeholder='Input Kegiatan' type="text" ref='kegiatan'/>
                      <input className='form-control' placeholder='Input Tanggal' type="Date" ref='tanggal'/>

                  </ModalBody>
                  <ModalFooter>
                      <button onClick={this.onAdddataClick} className= 'btn btn-success rounded-pill'>Add</button>
                      <button onClick={()=>this.setState({isopen:false})} className= 'btn btn-danger rounded-pill'>Cancel</button>
                  </ModalFooter>
              </Modal>
            <div className="px-5 mx-5 my-5">
              <Table>
                <thead>
                  <tr>
                    <th>No. </th>
                    <th>Kegiatan </th>
                    <th>Status </th>
                    <th>Tanggal </th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tbody>
                    {this.renderTodo()}
                </tbody>
              </Table>
              <div>
                  <button onClick={()=>this.setState({isopen:true})} className='btn btn-success rounded-pill'>Add Todo</button>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Home;