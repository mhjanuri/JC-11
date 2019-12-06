import React, { Component } from 'react';
import Axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {APIURL} from '../support/ApiUrl'

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
        readMoreSelected:-1
    }

    componentDidMount() {
        Axios.get(`${APIURL}/movies`)
            .then((res) => {
                this.setState({ dataFilm: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    splitData = (a = '') => {
    // eslint-disable-next-line
        let b = a.split('').filter(index => {
            return index <= 100;
        });
    };

    renderMovies = () => {
        return this.state.dataFilm.map((val, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell><img src={val.image} alt={`gambar`} height='200px'/> </TableCell>
                    { this.state.readMoreSelected===index?(
                        <TableCell style={{width:'800px'}}>
                            {val.sinopsis}
                            <br/>
                            <span 
                                style={{ color: 'red', cursor: 'pointer'}} 
                                onClick={() => this.setState({ readMoreSelected: -1 })}>
                                Read Less
                            </span>
                        </TableCell>)
                        :
                        (<TableCell style={{width:'800px'}}> 
                            {this.splitData(val.sinopsis)}
                            <br/>
                            <span 
                                style={{ color: 'red', cursor: 'pointer'}} 
                                onClick={() => this.setState({ readMoreSelected: index })}>
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
            </div>
        );
    }
}

export default ManageAdmin;