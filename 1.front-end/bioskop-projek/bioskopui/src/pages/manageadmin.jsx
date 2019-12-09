import React, { Component } from 'react';
import Axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {APIURL} from '../support/ApiUrl'
import Fade from 'react-reveal/Fade'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

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
        modalAdd:false,
        modaldata:false,
        indexedit:0,
        indexdelete:-1,
        jadwal:[12,14,16,18,20,]
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
        var trailer = iniref.trailer.value
        var studioID = iniref.studio.value
        var produksi = iniref.produksi.value

        var data = {
            title: title,
            sutradara,
            durasi,
            jadwal,
            sinopsis,
            image,
            genre,
            produksi,
            trailer,
            studioID
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
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your new data has been added',
            showConfirmButton: false,
            timer: 1500
        })
    }

    onUpdateDataClick = () => {
        var jadwaltemplate = this.state.jadwal
        var jadwal = []
        for (var i = 0; i < jadwaltemplate.length; i++) {
            if (this.refs[`jadwal${i}`].checked) {
                jadwal.push(jadwaltemplate[i])
            }
        }
        var iniref = this.refs
        var title = iniref.edittitle.value
        var image = iniref.editimage.value
        var sinopsis = iniref.editsinopsis.value
        var sutradara = iniref.editsutradara.value
        var genre = iniref.editgenre.value
        var durasi = iniref.editdurasi.value
        var trailer = iniref.edittrailer.value
        var studioID = iniref.editstudio.value
        var produksi = iniref.editproduksi.value

        var data = {
            title: title,
            sutradara,
            durasi,
            jadwal,
            sinopsis,
            image,
            genre,
            produksi,
            trailer,
            studioID
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
        this.setState({ modalAdd: false })
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your new data has been added',
            showConfirmButton: false,
            timer: 1500
        })
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
                        <button className='btn btn-outline-primary mr-1' style={{ width: '72.25px' }} onClick={()=>this.setState({modaledit:true, indexedit:index})}>Edit</button>
                        <button className='btn btn-outline-danger'>Delete</button>
                    </TableCell>
                </TableRow>
            )
        })
    }

    renderAddCheckbox=()=>{
        return this.state.jadwal.map((val,index)=>{
            return (
                <div key={index}>
                    <input type="checkbox" ref={`jadwal${index}`} />
                    <span className='mr-2'>{val}.00</span>
                </div>
            )
        })
    }

    renderEditCheckbox = (indexedit) =>{
        var indexarr=[]
        var datafilmedit=this.state.dataFilm[indexedit].jadwal
        // datafilmedit.forEach((val)=>{
        //     indexarr.push(this.state.jadwal.indexOf(val))
        // })
        for(var i=0;i<datafilmedit.length;i++){
            for(var j=0;j<this.state.jadwal.length;j++){
                indexarr.push[j]
            }
        }
        var checkbox=this.state.jadwal
        var checkboxnew=[]
        checkbox.forEach((val)=>{
            checkboxnew.push({jam:val,tampiledit:false})
        })
        indexarr.forEach((val)=>{
            checkboxnew[val].tampiledit=true
        })
        return checkboxnew.map((val,index)=>{
            if(val,tampiledit){
                return (
                    <div key={index}>
                        <input type='checkbox' defaultChecked ref={`editjadwal${index}`} value={val.jam} />
                        <span className='mr-2'>{val}.00</span>
                    </div>
                )
            } else {
                return (
                    <div key={index}>

                    </div>
                )
            }
        })
    }

    render() {
        const {dataFilm,indexedit}=this.state
        const {length}=dataFilm
        if (length===0) {
            return <div>Loading..</div>
        }

        return (
            <div className='mx-3'>

                <Modal isOpen={this.state.modaledit} toggle={() => this.setState({ modaledit: false })}>
                    <ModalHeader>
                        Edit Data {dataFilm[indexedit].title}
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" defaultValue={dataFilm[indexedit].title} ref='edittitle' placeholder='title' className='form-control mt-2' />
                        <input type="text" defaultValue={dataFilm[indexedit].image} ref='editimage' placeholder='image' className='form-control mt-2' />
                        <input type="text" defaultValue={dataFilm[indexedit].sinopsis} ref='editsinopsis' placeholder='sinopsis' className='form-control mt-2 mb-2' />
                        Jadwal:
                        <div className='d-flex'>
                            {this.renderEditCheckbox(indexedit)}
                        </div>
                        <input type="text" defaultValue={dataFilm[indexedit].trailer} ref='edittrailer' placeholder='link trailer' className='form-control mt-2' />
                        <select ref="editstudio" className='form-control mt-2'>
                            <option value="1">Studio 1</option>
                            <option value="2">Studio 2</option>
                            <option value="3">Studio 3</option>
                        </select>
                        <input type="text" defaultValue={dataFilm[indexedit].sutradara} ref='editsutradara' placeholder='sutradara' className='form-control mt-2' />
                        <input type="text" defaultValue={dataFilm[indexedit].genre} ref='editgenre' placeholder='genre' className='form-control mt-2' />
                        <input type="number" defaultValue={dataFilm[indexedit].durasi} ref='editdurasi' placeholder='durasi' className='form-control mt-2' />
                        <input type="text" defaultValue={dataFilm[indexedit].produksi} ref='editproduksi' placeholder='produksi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onSaveAddDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modalAdd: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalAdd} toggle={() => this.setState({ modaladd: false })}>
                    <ModalHeader>
                        Add Data
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='title' placeholder='title' className='form-control mt-2' />
                        <input type="text" ref='image' placeholder='image' className='form-control mt-2' />
                        <input type="text" ref='sinopsis' placeholder='sinopsis' className='form-control mt-2 mb-2' />
                        Jadwal:
                        <div className='d-flex'>
                            {this.renderAddCheckbox()}
                        </div>
                        <input type="text" ref='trailer' placeholder='link trailer' className='form-control mt-2' />
                        <select ref="studio" className='form-control mt-2'>
                            <option value="1">Studio 1</option>
                            <option value="2">Studio 2</option>
                            <option value="3">Studio 3</option>
                        </select>
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


                {/* HEADER TABLE */}
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