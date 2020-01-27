import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import io from 'socket.io-client'
import './App.css';


function App() {

  const [messages, setmessages] = useState([]);
  const [userCount, setuserCount] = useState(0);

  const [inputdata] = useState({
    nama: useRef(),
    message: useRef()
  });

  useEffect(() => {
    const socket = io('http://localhost:4500/')
    socket.on('chat message', updateMessage);
    socket.on('user connected', updateUserCount);

    Axios.get('http://localhost:4500/chat/getmessages')
      .then((res) => {
        setmessages(res.data)
      })
  }, []);


  const updateMessage = (msgs) => {
    setmessages(msgs)
  }

  const updateUserCount = (count) => {
    setuserCount(count)
  }

  const onBtnSendClick = () => {
    Axios.post('http://localhost:4500/chat/sendmessage', {

      nama: inputdata.nama.current.value,
      message: inputdata.message.current.value,


    }).then((res) => {
      console.log(res.data)
    })
  }

  const onBtnClearClick = () => {
    Axios.delete('http://localhost:4500/chat/clermessages')
      .then((res) => {
        console.log(res.data)
      })

  }




  const renderListMessage = () => {

    return messages.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.nama}</td>
          <td>{item.message}</td>
          <td></td>
        </tr>
      )
    })
  }


  return (
    <div>
      <center>
        <h2>Chat Group User connected : {userCount}</h2>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>message</th>
              <th><input type='button' value='clear' onClick={onBtnClearClick}></input></th>
            </tr>
          </thead>
          <tbody>
            {renderListMessage()}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input type='text' ref={inputdata.nama} />
              </td>
              <td>
                <input type='text' ref={inputdata.message} />
              </td>
              <td>
                <input type='button' value='send' onClick={onBtnSendClick}></input>
              </td>
            </tr>
          </tfoot>
        </table>

      </center>
    </div>
  );
}

export default App;
