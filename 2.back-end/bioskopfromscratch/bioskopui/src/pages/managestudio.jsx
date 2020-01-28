import React, { Component } from 'react';
import Axios from 'axios'
import {Table,TableBody,TableHead,TableCell,TableRow} from '@material-ui/core'
import { APIURL } from '../support/ApiUrl';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import Fade from 'react-reveal/Fade'

class ManageStuduio extends Component {
    state = { 
        datastudio:[],
        modaladd:false,
        modaledit:false,
        indexedit:0,
    }

    componentDidMount(){
        Axios.get(`${APIURL}studios`)
        .then(res=>{
            this.setState({datastudio:res.data})
        }).catch(err=>{
            console.log(err)
        })
    }
    onUpdateDataclick=()=>{
        var nama=this.refs.editnama.value
        var jumlahKursi=parseInt(this.refs.editkursi.value)
        var id=this.state.datastudio[this.state.indexedit].id
        var data={
            nama,
            jumlahKursi
        }
        console.log(data)
        Axios.put(`${APIURL}studios/${id}`,data)
        .then(()=>{
            Axios.get(`${APIURL}studios`)
            .then((res)=>{
                this.setState({datastudio:res.data,modaledit:false})
            })
            .catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    onSaveAddDataClick=()=>{
       var nama=this.refs.nama.value
       var jumlahKursi=parseInt(this.refs.kursi.value)
       var data={
           nama,
           jumlahKursi
       }
       Axios.post(`${APIURL}studios`,data)
       .then(()=>{
           Axios.get(`${APIURL}studios`)
           .then((res)=>{
               this.setState({datastudio:res.data,modaladd:false})
           })
           .catch((err)=>{
               console.log(err)
           })
       }).catch((err)=>{
           console.log(err)
       })
    }

    renderStudios=()=>{
        return this.state.datastudio.map((val,index)=>{
            return(
                <TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{val.nama}</TableCell>
                    <TableCell>{val.jumlahKursi}</TableCell>
                    <TableCell>
                        <button className='btn btn-outline-primary mr-3' onClick={()=>this.setState({modaledit:true,indexedit:index})}>Edit</button>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </TableCell>
                </TableRow>
            )
        })
    }

    render() {
        const {datastudio,indexedit}=this.state
        const {length}=datastudio
        if(length===0){
            return <div>loading</div>
        }
        return (
            <div className='mx-3'>
                <Modal isOpen={this.state.modaledit} toggle={()=>this.setState({modaledit:false})}>
                    <ModalHeader>
                        Edit Studio {datastudio[indexedit].id}
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='editnama' defaultValue={datastudio[indexedit].nama} placeholder='Nama studio' className='form-control mt-2'/>
                        <input type="number" ref='editkursi' defaultValue={datastudio[indexedit].jumlahKursi} placeholder='kursi' className='form-control mt-2'/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onUpdateDataclick} >Save</button>
                        <button onClick={()=>this.setState({modaledit:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modaladd} toggle={()=>this.setState({modaladd:false})}>
                    <ModalHeader>
                        Add Data
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='nama'  placeholder='namastudio' className='form-control mt-2'/>
                        <input type="number"  ref='kursi' placeholder='kursi' className='form-control mt-2'/>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onSaveAddDataClick}>Save</button>
                        <button onClick={()=>this.setState({modaladd:false})}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Fade>
                    <button className='btn btn-success' onClick={()=>this.setState({modaladd:true})}>add Data</button>
                    <Table size='small' >
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Nama Studio</TableCell>
                                <TableCell>Jumlah Kursi</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderStudios()}
                        </TableBody>
                    </Table>
                </Fade>
            </div>
        );
    }
}

 
export default ManageStuduio;