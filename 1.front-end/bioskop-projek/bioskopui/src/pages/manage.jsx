import React, { Component } from 'react';
import Axios from 'axios'
// import {makeStyles} from '@material-ui/core/styles'
import { Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'
import { APIURL } from '../support/ApiUrl';
// import Fade from 'react-reveal/Fade'

// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 650,
//     },
//   });

class ManageAdmin extends Component {
    state = {
        datafilm: [],
        readMoreSelected: -1
    }
    componentDidMount() {
        Axios.get(`${APIURL}movies`)
            .then((res) => {
                this.setState({ datafilm: res.data })
            }).catch((err) => {
                console.log(err)
            })
    }

    renderMovies = () => {
        return this.state.datafilm.map((val, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{val.title + 1}</TableCell>
                    <TableCell><img src={val.image} alt={`gambar`} height='200px' /></TableCell>
                    {/* { this.state.readMoreSelected===index?
                    <TableCell>
                    {val.sinopsis}
                    <span style={{color:'red'}} onClick={()=>this.setState({readMoreSelected:-1})}>
                        Read Less
                    </TableCell>
                    :
                    <TableCell>{val.sinopsis.split('').filter((val,index)=>index<=50)}
                    <span onClick={()=>this,this.setState({readMoreSelected:index})}>Read Less</span>
                    <span style={{color:'red'}} onClick={()=>this.setState({readMoreSelected:index})}>
                        Read More
                    </TableCell>

                    } */}
                    <TableCell>{val.sinopsis + 1}</TableCell>
                    <TableCell>{val.jadwal + 1}</TableCell>
                    <TableCell>{val.sutradara + 1}</TableCell>
                    <TableCell>{val.genre + 1}</TableCell>
                    <TableCell>{val.durasi + 1}</TableCell>
                    <TableCell>
                        <button className='btn btn-outline-primary'>Edit</button>
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