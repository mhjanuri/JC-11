import React, { useState, useEffect } from 'react';
import {Table, CustomInput} from 'reactstrap';


const Transaksi=()=>{

    const [addimagefile, setimageadd] = useState({
        addImageFileName: 'Pilih foto...',
        addImageFile: undefined,
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

                </tbody>
                <tfoot>
                    <tr>
                        <td> <input type='number' placeholder='userid' /></td>
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