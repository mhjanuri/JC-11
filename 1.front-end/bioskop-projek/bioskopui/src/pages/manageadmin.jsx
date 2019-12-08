import React, { Component } from 'react';
import Axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {APIURL} from '../support/ApiUrl'
import Fade from 'react-reveal/Fade'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'

// const APIURL = 'http://localhost:2000'
// const useStyles = makeStyles({
//     root: {
//         width: '100%',
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 650,
//     },
// });

class ManageAdmin extends Component {
    state = {
        dataFilm: [],
        readMoreSelected:-1,
        modalAdd:false
    }

    componentDidMount() {
        Axios.get(`${APIURL}/movies`)
            .then((res) => {
                this.setState({ dataFilm: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    onSaveAddDataClick = () => {
        var jadwaltemplate = [12, 14, 16, 18, 20]
        var jadwal = []
        for (var i = 0; i < jadwaltemplate.length; i++) {
            if (this.refs[`jadwal${i}`].checked) {
                jadwal.push(jadwaltemplate[i])
            }
        }
        var iniref = this.refs
        var title = iniref.title.value
        var image = iniref.image.value
        var sinopsis = iniref.sinopsis.value
        var sutradara = iniref.sutradara.value
        var genre = iniref.genre.value
        var durasi = iniref.durasi.value
        var produksi = iniref.produksi.value
        var data = {
            title: title,
            sutradara,
            durasi,
            jadwal,
            sinopsis,
            image,
            genre,
            produksi
        }
        Axios.post(`${APIURL}/movies`, data)
            .then(() => {
                Axios.get(`${APIURL}/movies`)
                    .then((res) => {
                        this.setState({ datafilm: res.data, modaladd: false })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
        this.setState({modalAdd:false})
    }

    renderMovies = () => {
        return this.state.dataFilm.map((val, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell><img src={val.image} alt={`gambar`} height='200px'/> </TableCell>
                    { this.state.readMoreSelected===index?(
                        <TableCell style={{width:'500px'}}>
                            {val.sinopsis}
                            <br/>
                            <span style={{ color: 'red', cursor: 'pointer'}} onClick={() => this.setState({ readMoreSelected: -1 })}>
                                Read Less
                            </span>
                        </TableCell>)
                        :
                        (<TableCell style={{width:'500px'}}> 
                            {val.sinopsis.split('').filter((val,index)=>index<=50)}
                            <br/>
                            <span style={{ color: 'red', cursor: 'pointer'}} onClick={() => this.setState({ readMoreSelected: index })}>
                                Read More
                            </span>  
                        </TableCell>)
                    }
                    {/* <TableCell>{val.sinopsis}</TableCell> */}
                    <TableCell>{val.jadwal}</TableCell>
                    <TableCell>{val.sutradara}</TableCell>
                    <TableCell>{val.genre}</TableCell>
                    <TableCell>{val.durasi}</TableCell>
                    <TableCell style={{ width: '200px' }}>
                        <button className='btn btn-outline-primary mr-1' style={{ width: '72.25px' }}>Edit</button>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </TableCell>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <div className='mx-3'>
                <Modal isOpen={this.state.modalAdd} toggle={() => this.setState({ modaladd: false })}>
                    <ModalHeader>
                        Add Data
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='title' placeholder='title' className='form-control mt-2' />
                        <input type="text" ref='image' placeholder='image' className='form-control mt-2' />
                        <input type="text" ref='sinopsis' placeholder='sinopsis' className='form-control mt-2 mb-2' />
                        Jadwal:
                        <input type="checkbox" ref='jadwal0' /> <span className='mr-2'>12.00</span>
                        <input type="checkbox" ref='jadwal1' /><span className='mr-2'>14.00</span>
                        <input type="checkbox" ref='jadwal2' /><span className='mr-2'>16.00</span>
                        <input type="checkbox" ref='jadwal3' /><span className='mr-2'>18.00</span>
                        <input type="checkbox" ref='jadwal4' /><span className='mr-2'>20.00</span>
                        <input type="text" ref='sutradara' placeholder='sutradara' className='form-control mt-2' />
                        <input type="text" ref='genre' placeholder='genre' className='form-control mt-2' />
                        <input type="number" ref='durasi' placeholder='durasi' className='form-control mt-2' />
                        <input type="text" ref='produksi' placeholder='produksi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onSaveAddDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modalAdd: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>
                <Fade>
                    <button className='btn btn-success' onClick={()=>this.setState({modalAdd:true})}>Add Data</button>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell>Judul</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Sinopsis</TableCell>
                                <TableCell>Jadwal</TableCell>
                                <TableCell>Sutradara</TableCell>
                                <TableCell>Genre</TableCell>
                                <TableCell>Durasi</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderMovies()}
                        </TableBody>
                    </Table>
                </Fade>
            </div>
        );
    }
}

export default ManageAdmin;