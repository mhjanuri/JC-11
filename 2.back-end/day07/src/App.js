import React, { useEffect, Fragment, useState} from 'react';
import './App.css';
import Axios from 'axios'
import { Table } from 'reactstrap';
import Modal from './component/modal'

import { APIURL, APIURLimage } from './helper/apiurl';

function App() {

  const [datausers,setdatausers]=useState([])
  const [roles, setroles] = useState([])
  const [modal, setModal] = useState(false)
  const [modaldelete, setModaldelete] = useState(false)

  const  modal = () => setModal(!modal)
  const  modaldelete =  () => setModaldelete(!modaldelete)

  useEffect(()=>{
    console.log('didmount')
    Axios.get(`${APIURL}users`)
    .then(res=>{
      console.log(res.data)
      setdatausers(res.data.datauser)
      setroles(res.data.datarole)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const 

  const renderusers=()=>{
   return datausers.map((val,index)=>{
      return(
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{val.username}</td>
        <td><img src={`${APIURLimage+val.image}`} height='150px'/></td>
        <td>{val.email}</td>
        <td>{val.phone}</td>
        <td>{val.usia}</td>
        {
          val.rolename?
          <td>{val.rolename}</td>
          :
          <td>user tidak ada peran tolong diisi</td>
        }
        <td>
          <button onClick={()=>opentogel(index)}>Edit</button>
          <button onClick={toggledelete}>Delete</button>
        </td>
      </tr>
      )
    })
  }

  const Updatedata=()=>{
    // console.log(datausersedit)
    var data={
      username:datausersedit.username,
      email:datausersedit.email,
      usia:datausersedit.usia,
      roleid:datausersedit.roleid,
    }
    Axios.put(`${APIURL}users/${datausersedit.id}`,data)
    .then((res)=>{
      setdatausers(res.data.datauser)
      setroles(res.data.datarole)
      setModal(!modal)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const onAddImageFileChange=(event)=>{
    // console.log(document.getElementById('addImagePost').files[0])
    console.log(event.target.files[0])
    var file=event.target.files[0]
    if(file){
        setimageadd({...addimagefile,addImageFileName:file.name,addImageFile:event.target.files[0]})
    }else{
        setimageadd({...addimagefile,addImageFileName:'Select Image...',addImageFile:undefined})
    }
  }

  const adddata=()=>{
    var formdata=new FormData()
    const {username,roleid,usia,email}=dataadd
    const data={
      username:username.current.value,
      roleid:roleid.current.value,
      usia:usia.current.value,
      password:'rahasia',
      email:email.current.value,
    }
    var Headers={
      headers:
      {
          'Content-Type':'multipart/form-data',
      }
  }
    formdata.append('image',addimagefile.addImageFile)
    formdata.append('data',JSON.stringify(data))
    Axios.post(`${APIURL}postusers`,formdata,Headers)
    .then((res)=>{
      setdatausers(res.data.datauser)
      setroles(res.data.datarole) 
    }).catch((err)=>{
      console.log(err)
    })
  }
  if(datausers.length===0){
    return <div>loading</div>
  }


  return (
    <Fragment>

{/* EDIT MODAL */}
      <Modal title='edit data' toggle={toggle} modal={modal} actionfunc={Updatedata}>
        <input type='text' className='form-control' value={datausersedit.username} onChange={e=>setdatausersedit({...datausersedit,username:e.target.value})}/>
        <input type='text' className='form-control' value={datausersedit.email} onChange={e=>setdatausersedit({...datausersedit,email:e.target.value})}/>
        <input type='number' className='form-control' value={datausersedit.usia} onChange={e=>setdatausersedit({...datausersedit,usia:e.target.value})}/>
        <select className='form-control' value={datausersedit.roleid} onChange={e=>setdatausersedit({...datausersedit,roleid:e.target.value})}>
          <option hidden>piliih category</option>
          {
            roles.map((val,index)=>{
              return(
              <option key={index} value={val.id}>
                {val.nama}
              </option>
              )
            })
          }
        </select>
      </Modal>

{/* ADD MODAL */}
      <Modal title='add data' toggle={toggleadd} modal={modaladd} actionfunc={adddata} >
        <input type='text' placeholder='username' className='form-control' ref={dataadd.username} />
        <input type='text' placeholder='email' className='form-control' ref={dataadd.email}/>
        <input type='number' placeholder='usia' className='form-control' ref={dataadd.usia} />
        <CustomInput type='file' label={addimagefile.addImageFileName} id='addImagePost' className='form-control' onChange={onAddImageFileChange} />
        <select className='form-control' ref={dataadd.roleid}>
          <option hidden>piliih category</option>
          {
            roles.map((val,index)=>{
              return(
              <option key={index} value={val.id}>
                {val.nama}
              </option>
              )
            })
          }
        </select>
      </Modal>

{/* DELETE MODAL */}
      <Modal title='delete data' toggle={toggledelete} modal={modaldelete}>
        fsdasd delete
      </Modal>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Usia</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderusers()}
          
        </tbody>
      </Table>
    </Fragment>
  );
}

export default App;
