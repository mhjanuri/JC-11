import React, { Component } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { APIURL } from '../support/ApiUrl'
import Fade from 'react-reveal/Fade'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import Pagenotfound from '../pages/pagenotfound'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

class ManageAdmin extends Component {
    state = {
        datastudio: [],
        modaladd: false,
        modaledit: false,
        indexedit: 0,
        indexdelete: -1,
    }

    componentDidMount() {
        Axios.get(`${APIURL}/studios`)
            .then((res) => {
                this.setState({ datastudio: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }


    onSaveAddDataClick = () => {
        var iniref = this.refs
        var nama = iniref.namastudio.value
        var jumlahKursi = parseInt(iniref.jumlahkursi.value)

        var data = {
            nama,
            jumlahKursi
        }
        Axios.post(`${APIURL}/studios`, data)
            .then(() => {
                Axios.get(`${APIURL}/studios`)
                    .then((res) => {
                        this.setState({ datastudio: res.data, modaladd: false })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your new data has been added',
            showConfirmButton: false,
            timer: 1500
        })
    }

    onUpdateDataClick = () => {
        var id = this.state.datastudio[this.state.indexedit].id
        var iniref = this.refs
        var nama = iniref.editnama.value
        var jumlahKursi = parseInt(iniref.editjumlahkursi.value)

        var data = {
            nama,
            jumlahKursi
        }
        Axios.put(`${APIURL}/studios/${id}`, data)
            .then(() => {
                Axios.get(`${APIURL}/studios/`)
                    .then((res) => {
                        this.setState({ datastudio: res.data, modaledit: false })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your new data has been updated',
            showConfirmButton: false,
            timer: 1500
        })
    }

    onDeleteClick = (val) => {
        MySwal.fire({
            title: `Are you sure want to delete <br/> ${val.nama}?`,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                Axios.delete(`${APIURL}/studios/${val.id}`, this.state.datastudio)
                    .then((res) => {
                        Axios.get(`${APIURL}/studios`)
                            .then((res) => {
                                this.setState({ datastudio: res.data, modaledit: false })
                            })
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        })
    }

    renderStudios = () => {
        return this.state.datastudio.map((val, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell style={{ width: '200px' }}>{val.nama}</TableCell>
                    <TableCell>{val.jumlahKursi}</TableCell>
                    
                    <TableCell style={{ width: '100px' }}>
                        <button className='btn btn-outline-primary mb-1' style={{ width: '72.25px' }} onClick={() => this.setState({ modaledit: true, indexedit: index })}>Edit</button>
                        {/* <button className='btn btn-outline-danger' >Delete</button> */}
                        <button className='btn btn-outline-danger' onClick={() => this.onDeleteClick(val)} >Delete</button>
                    </TableCell>
                </TableRow>
            )
        })

    }


    render() {
        const { datastudio, indexedit } = this.state
        const { length } = datastudio

        // if (this.props.Auth.id === '') {
        //     return (<Redirect to='/'/>)
        // }
        if (this.props.Auth.role !== 'admin') {
            return (<Redirect to='/pagenotfound' />)
            // return (<Pagenotfound />)
        }

        console.log(this.state.datastudio)
        if (length === 0) {
            return <div>Loading..</div>
        }

        return (
            <div className='mx-3'>


                {/* EDIT DATA START */}
                <Modal isOpen={this.state.modaledit} toggle={() => this.setState({ modaledit: false })}>
                    <ModalHeader>
                        Edit Data {datastudio[indexedit].nama}
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" defaultValue={datastudio[indexedit].nama} ref='editnama' placeholder='Nama Studio' className='form-control mt-2' />
                        <input type="number" defaultValue={datastudio[indexedit].jumlahKursi} ref='editjumlahkursi' placeholder='Jumlah Kursi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onUpdateDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modaledit: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>

                {/* ADD DATA START */}
                <Modal isOpen={this.state.modaladd} toggle={() => this.setState({ modaladd: false })}>
                    <ModalHeader>
                        Add Data Studio
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='namastudio' placeholder='Nama Studio' className='form-control mt-2' />
                        <input type="number" ref='jumlahkursi' placeholder='Jumlah Kursi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onSaveAddDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modaladd: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>


                {/* HEADER TABLE */}
                <Fade>
                    <button className='btn btn-success' onClick={() => this.setState({ modaladd: true })}>Add Data</button>
                    <Table >
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

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}

export default connect(mapStateToProps)(ManageAdmin);



// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'


// class ManageStudio extends Component {
//     state = {  }
//     render() { 
//         if (this.props.Auth.role !== 'admin') {
//             return (<Redirect to='/pagenotfound' />)
//             // return (<Pagenotfound />)
//         }else{
//             return (
//                 <div>
//                     yey anda adalah admin
//                 </div>
//             );

//         }
//     }
// }
 
// const mapStateToProps = (state) => {
//     return {
//         Auth: state.Auth
//     }
// }

// export default connect(mapStateToProps) (ManageStudio);