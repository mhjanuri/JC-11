import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios'
import './App.css';
import {Table, Input, Button} from 'reactstrap'
import {APIURL} from './helper/apiurl'
import Modal from './components/modal'

function App() {

  const [datausers, setdatauser]=useState([])

  const [modal, setModal] = useState(false)
  const toggle = ()=> {setModal(!modal)}

  const [addData]=useState({
    nama:useRef(),
    email:useRef()
  })

  useEffect(()=>{
    Axios.get(`${APIURL}users/user`)
    .then(res=>{
      setdatauser(res.data.datauser)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  const addUser=()=>{
    var formdata=new FormData()
    const {nama, email}=addData
    const data={
      nama:nama.current.value,
      email:email.current.value
    }

   
    console.log(data)
    Axios.post(`${APIURL}users/register`,data)
    .then((res)=>{
      setdatauser(res.data.datauser)
      setModal(!modal)
    }).catch((err)=>{
      console.log(err)
    })
  }






  const renderUser=()=>{
    return datausers.map((val,index)=>{
      return (

        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{val.nama}</td>
          <td>{val.email}</td>         
        </tr>

      )
    })
  }






  return (
    <div>

    <Modal title='Add User' toggle={toggle} modal={modal} actionfunc={addUser} >

      <Input className='mb-2' type='text' placeholder="tulis nama user"  innerRef={addData.nama} />
      <Input type='text' placeholder="tulis email" innerRef={addData.email}  />
    
    </Modal>

    <Button variant='danger' onClick={toggle} >Add User</Button>
     <Table>
      <thead>
        <tr>
          <th>NO</th>
          <th>Nama</th>
          <th>Email</th>
          
        </tr>
      </thead>
      <tbody>

        {renderUser()}
        
      </tbody>
    </Table>
    </div>
  );
}

export default App;
