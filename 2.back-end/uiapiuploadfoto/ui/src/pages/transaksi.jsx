import React, { useState, useEffect, useRef } from 'react';
import {Table, CustomInput} from 'reactstrap';
import Axios from 'axios';
import {ApiUrl, ApiUrlImage} from './../support/apiurl'


const Transaksi=()=>{

    const [addimagefile, setimageadd] = useState({
        addImageFileName: 'Pilih foto...',
        addImageFile: undefined,
    })

    const [data,setdata]=useState(null)
    const [datainput]=useState({
        userid:useRef()
    })

    useEffect(()=>{
        const fetchdata = async ()=>{
            try {
                const res = await Axios.get(`${ApiUrl}product/gettrans`)
                setdata(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    })

    const onAddImageFileChange = (event) => {
        // console.log(document.getElementById('addImagePost').files[0])
        console.log(event.target.files[0])
        var file = event.target.files[0]
        if (file) {
            setimageadd({ ...addimagefile, addImageFileName: file.name, addImageFile: event.target.files[0] })
        } else {
            setimageadd({ ...addimagefile, addImageFileName: 'Pilih Foto...', addImageFile: undefined })
        }
    }

    const renderData=()=>{
        if (data==null) {
            return(
                <tr>
                    <td>Tidak ada data...</td>
                </tr>
            )
        } else {
            return data.map((val,index)=>{
                return (
                    <tr>
                        <td>{index} </td>
                        <td>{index+1} </td>
                        <td>{val.userid} </td>
                        <td>{val.tanggal}</td>
                        <td><img src={ApiUrlImage} alt={val.image} /> </td>
                    </tr>
                )
            })
        }
    }

    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User id</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
                <tfoot>
                    <tr>
                        <td> <input type='number' placeholder='userid' ref={datainput.userid} /></td>
                        <td><CustomInput type='file' label={addimagefile.addImageFileName} onChange={onAddImageFileChange} /></td>
                        <td><button className='btn btn-primary' >Add Foto</button></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* <tr><input type='number' /></tr> */}
                </tfoot>
            </Table>
        </div>
    )
}

export default Transaksi;