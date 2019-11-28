import React, { Component } from 'react';
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter 
} from 'reactstrap'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Home extends Component {
    state = {
        data:[],
        isopen: false,
        indexedit: -1
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
        var obj={
            kegiatan,
            status:false,
            tanggal
        }
        if(kegiatan==='' || tanggal==='') {
            MySwal.fire(
                'TETOT!!!',
                'Tolong diiisii WOOOOOOOYYYYY bisa baca gak?',
                'error'
            )
        } else {
            var newdata=[...this.state.data, obj]
            this.setState({data:newdata, isopen:false})
        }
    }

    onDeleteDataClick=(index)=>{
        MySwal.fire({
            title: 'Yakin mau hapus ' +this.state.data[index].kegiatan+'?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
            }).then((result) => {
            if (result.value) {
                var data=this.state.data
                data.splice(index,1)
                this.setState({
                    data:data
                })
                MySwal.fire(
                'Deleted!',
                'Data has been deleted.',
                'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                MySwal.fire(
                'Cancelled',
                '',
                'error'
                )
            }
        })
    }

    saveData=(index)=>{
        let newKegiatan = 
        let newStatus = 
        let NewTanggal = 
    }

    renderTodo=()=>{
        return this.state.data.map((val,index)=>{
            if (index===this.state.indexedit) {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td> <input type="text" placeholder='Input Kegiatan' ref='newkegiatan'/></td>
                        <td>
                            <select id="editstatus${index}">
                                <option> Belum</option>
                                <option> Sudah</option>
                            </select>
                        </td>
                        <td> <input type="date" placeholder='Input Tanggal' ref='newtanggal'/></td>
                        <td>
                            <button className="btn btn-warning mr-3 rounded-pill" onClick={()=>this.setState({indexedit:-1})}>Cancel</button>
                            <button className="btn btn-success rounded-pill" onClick={()=>this.saveData(index)}>Save</button>
                        </td>
                    </tr>
                );
            } else {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td> {val.kegiatan}</td>
                    <td> {val.status? 'Sudah' : 'Belum'}</td>
                    <td> {val.tanggal}</td>
                    <td>
                      <button className="btn btn-primary mr-3 rounded-pill" onClick={()=>this.setState({indexedit:index})}>Edit</button>
                      <button className="btn btn-danger rounded-pill" onClick={()=>this.onDeleteDataClick(index)}>Delete</button>
                    </td>
                  </tr>
                );
            }
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
                      <input className='form-control mb-3' placeholder='Input Kegiatan' type="text" ref='kegiatan'/>
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