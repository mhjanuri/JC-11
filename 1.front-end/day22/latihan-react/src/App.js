import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Container from './components/container'

class App extends Component {
  state = {
    stnk:[],
    loading:true

   }
  componentDidMount(){
    this.setState({stnk: 
      [
        {nama:'bobi',kendaraan:'ambulan',warna:'hotpink'},
        {nama:'Dzaky',kendaraan:'MRT',warna:'orange shoppe'},
        {nama:'anya', kendaraan:'busway',warna:'ungu'}
      ],loading:false
    })
  }

  ubahangkaonclick(){
    this.setState((prevstate)=>{
      return (
        angka:prevstate
      )
    })
  }
  render() {
    const {loading,stnk}=this.state
    if (loading) {
      return <div>Loading...</div>
    }
    return ( 
      <div>
        <Header namauser={'fakhran'}/>
        <Content stnk={stnk}>

        </Content>
      </div>
    );
  }
}
 
export default App;
