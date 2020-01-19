import React, { Component } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {APIURL} from '../support/ApiUrl'
import Fade from 'react-reveal/Fade'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import Pagenotfound from '../pages/pagenotfound'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

class ManageAdmin extends Component {
    state = {
        datafilm: [],
        studio:[],
        readmoreSelected:-1,
        modaladd:false,
        modaledit:false,
        indexedit:0,
        indexdelete:-1,
        jadwal:[12,14,16,18,20]
    }

    componentDidMount() {
        Axios.get(`${APIURL}/movies`)
            .then((res) => {
            this.setState({ datafilm: res.data })
            }).catch((err) => {
                console.log(err)
            })
        Axios.get(`${APIURL}/studios`)
            .then((res1) => {
            this.setState({ studio: res1.data })
            }).catch((err) => {
                console.log(err)
            })
    }
    
    jadwalWithEmbelEmbel = (arr) => {
        var tempArr = []
        for (var i = 0; i < arr.length; i++) {
            tempArr.push(arr[i] + ':00PM, ')
        }
        return tempArr
        
    }
    studioWithEmbelEmbel=(arr)=>{
        var tempArr=[]
        tempArr.push('Studio ' + arr)
        return tempArr
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
        var studioId = iniref.studio.value
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
            studioId
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
        var id=this.state.datafilm[this.state.indexedit].id
        for (var i = 0; i < jadwaltemplate.length; i++) {
            if (this.refs[`editjadwal${i}`].checked) {
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
        var studioId = iniref.editstudio.value
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
            studioId
        }
        Axios.put(`${APIURL}/movies/${id}`, data)
            .then(() => {
                Axios.get(`${APIURL}/movies/`)
                    .then((res) => {
                        this.setState({ datafilm: res.data, modaledit: false })
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
        console.log(val.id)
        MySwal.fire({
            title: `Are you sure want to delete <br/> ${val.title}?`,
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
                Axios.delete(`${APIURL}/movies/${val.id}`, this.state.datafilm)
                    .then((res) => {
                        Axios.get(`${APIURL}/movies`)
                            .then((res) => {
                                this.setState({ datafilm: res.data, modaledit: false })
                            })
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        })
    }

    renderMovies = () => {
        return this.state.datafilm.map((val, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell style={{width:'200px'}}>{val.title}</TableCell>
                    <TableCell style={{ width: '100px' }}><img src={val.image} alt={`gambar`} width='100px'/> </TableCell>
                    { this.state.readmoreSelected===index?(
                        <TableCell style={{width:'500px'}}>
                            {val.sinopsis}
                            <br/>
                            <span style={{ color: 'red', cursor: 'pointer'}} onClick={() => this.setState({ readmoreSelected: -1 })}>
                                Read Less
                            </span>
                        </TableCell>)
                        :
                        (<TableCell style={{width:'500px'}}> 
                            {val.sinopsis.split('').filter((val,index)=>index<=100)}...
                            <br/>
                            <span style={{ color: 'red', cursor: 'pointer'}} onClick={() => this.setState({ readmoreSelected: index })}>
                                Read More
                            </span>  
                        </TableCell>)
                    }
                    {/* <TableCell>{val.sinopsis}</TableCell> */}
                    <TableCell>{this.jadwalWithEmbelEmbel(val.jadwal)}</TableCell>
                    <TableCell>{val.sutradara}</TableCell>
                    <TableCell>{val.genre}</TableCell>
                    <TableCell>{val.durasi}</TableCell>
                    <TableCell style={{ width: '100px' }}>{this.studioWithEmbelEmbel(val.studioId)}</TableCell>
                    <TableCell>{val.produksi}</TableCell>
                    <TableCell style={{ width: '100px' }}>
                        <button className='btn btn-outline-primary mb-1' style={{ width: '72.25px' }} onClick={()=>this.setState({modaledit:true, indexedit:index})}>Edit</button>
                        {/* <button className='btn btn-outline-danger' >Delete</button> */}
                        <button className='btn btn-outline-danger' onClick={()=>this.onDeleteClick(val)} >Delete</button>

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
        var datafilmedit=this.state.datafilm[indexedit].jadwal
        // datafilmedit.forEach((val)=>{
        //     indexarr.push(this.state.jadwal.indexOf(val))
        // })
        for(var i=0;i<datafilmedit.length;i++){
            for(var j=0;j<this.state.jadwal.length;j++){
                if(datafilmedit[i]===this.state.jadwal[j]){
                    indexarr.push(j)
                }
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
            if(val.tampiledit){
                return (
                    <div key={index}>
                        <input type='checkbox' defaultChecked ref={`editjadwal${index}`} value={val.jam} />
                        <span className='mr-2'>{val.jam}.00</span>
                    </div>
                )
            } else {
                return (
                    <div key={index}>
                        <input type='checkbox' ref={`editjadwal${index}`} value={val.jam}/>
                        <span className='mr-2'>{val.jam}.00</span>
                    </div>
                )
            }
        })
    }

    // renderStudio=()=>{
    //     return this.state.studio.map((val, index) => {
    //         return (
    //             <option key={index} value={val.nama}>{val.nama}</option>
    //         )
    //     })
    // }
    

    render() {
        const {datafilm,indexedit}=this.state
        const {length}=datafilm
        // console.log(this.state.studio)

        // if (this.props.Auth.id === '') {
        //     return (<Redirect to='/'/>)
        // }
        if (this.props.Auth.role !== 'admin') {
            return (<Redirect to='/pagenotfound'/>)
            // return (<Pagenotfound />)
        }

        // console.log(this.state.datafilm[1])
        if (length===0) {
            return <div>Loading..</div>
        }

        return (
            <div className='mx-3'>

            
            {/* EDIT DATA START */}
                <Modal isOpen={this.state.modaledit} toggle={() => this.setState({ modaledit: false })}>
                    <ModalHeader>
                        Edit Data {datafilm[indexedit].title}
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" defaultValue={datafilm[indexedit].title} ref='edittitle' placeholder='title' className='form-control mt-2' />
                        <input type="text" defaultValue={datafilm[indexedit].image} ref='editimage' placeholder='image' className='form-control mt-2' />
                        <textarea rows='5' ref='editsinopsis' defaultValue={datafilm[indexedit].sinopsis} placeholder='sinopsis' className='form-control mt-2 mb-2' />
                        Jadwal:
                        <div className='d-flex'>
                            {this.renderEditCheckbox(indexedit)}
                        </div>
                        <input type="text" defaultValue={datafilm[indexedit].trailer} ref='edittrailer' placeholder='link trailer' className='form-control mt-2' />
                        <select defaultValue={datafilm[indexedit].studioId} ref="editstudio" className='form-control mt-2'>
                            {this.state.studio.map((val) => {
                                return (
                                    <option value={val.id}>{val.nama}</option>
                                )
                            })
                            }
                        </select>
                        <input type="text" defaultValue={datafilm[indexedit].sutradara} ref='editsutradara' placeholder='sutradara' className='form-control mt-2' />
                        <input type="text" defaultValue={datafilm[indexedit].genre} ref='editgenre' placeholder='genre' className='form-control mt-2' />
                        <input type="number" defaultValue={datafilm[indexedit].durasi} ref='editdurasi' placeholder='durasi' className='form-control mt-2' />
                        <input type="text" defaultValue={datafilm[indexedit].produksi} ref='editproduksi' placeholder='produksi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onUpdateDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modaledit: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>

            {/* ADD DATA START */}
                <Modal isOpen={this.state.modaladd} toggle={() => this.setState({ modaladd: false })}>
                    <ModalHeader>
                        Add Data
                    </ModalHeader>
                    <ModalBody>
                        <input type="text" ref='title' placeholder='title' className='form-control mt-2' />
                        <input type="text" ref='image' placeholder='image url' className='form-control mt-2' />
                        <textarea rows='5' ref='sinopsis' placeholder='sinopsis' className='form-control mt-2 mb-2' />
                        Jadwal:
                        <div className='d-flex'>
                            {this.renderAddCheckbox()}
                        </div>
                        <input type="text" ref='trailer' placeholder='trailer url' className='form-control mt-2' />
                        <select ref="studio" className='form-control mt-2'>
                            {this.state.studio.map((val)=>{
                                return(
                                    <option value={val.id}>{val.nama}</option>
                                )
                            })
                            }
                                             
                        </select>
                        <input type="text" ref='sutradara' placeholder='sutradara' className='form-control mt-2' />
                        <input type="text" ref='genre' placeholder='genre' className='form-control mt-2' />
                        <input type="number" ref='durasi' placeholder='durasi' className='form-control mt-2' />
                        <input type="text" ref='produksi' placeholder='produksi' className='form-control mt-2' />
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' onClick={this.onSaveAddDataClick} style={{ width: '72.7344px' }}>Save</button>
                        <button className='btn btn-outline-danger' onClick={() => this.setState({ modaladd: false })}>Cancel</button>
                    </ModalFooter>
                </Modal>


            {/* HEADER TABLE */}
                <Fade>
                    <button className='btn btn-success' onClick={()=>this.setState({modaladd:true})}>Add Data</button>
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
                                <TableCell>Studio</TableCell>
                                <TableCell>Produksi</TableCell>
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

const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
} 

export default connect(mapStateToProps) (ManageAdmin);