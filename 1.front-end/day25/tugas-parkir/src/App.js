import React from 'react';
import './App.css';
import Header from './components/header'
import {connect} from 'react-redux'
import {Pay,Jam} from './../src/redux/actions/bayaractions'

class App extends React.Component{
  state={
    selecteditems:0,
    bayar:0,
    parkir:0,
    ride:''
  }
  BtnBayar=(a)=>{
    var jam=this.refs.parkir.value
    var bayar=0
    if(a==='mobil'){
      bayar=jam*2000
    }else{
      bayar=jam*1000
    }
    this.props.Pay(bayar)
    this.props.Jam(jam)
    this.setState({bayar:bayar})
    this.setState({parkir:jam })
    this.refs.parkir.value=''

  }
  printData=()=>{
    if(this.state.selecteditems===0){
      return(
        <p></p>
      )
    }else if(this.state.selecteditems===1){
      return(
        <div className='font-weight-bolder'>
          <input ref='parkir' className='mr-5' type='number'/>
          Jam
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='mr-5'>
            <span style={{color:'red',textAlign:"left"}}>Total bayar </span>
             Rp.{this.props.bayar},00
          </div>
          <input type='button' className='btn btn-primary mr-5 mt-5' value='Bayar' onClick={()=>this.BtnBayar('mobil')}/>
          <div>{this.state.parkir} Jam</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Catatan= 2000/Jam
        </div>
      )
    }else{
      return(
        <div className='font-weight-bolder'>
          <input ref='parkir' className='mr-5' type='number'/>
          Jam
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='mr-5' >
            <span style={{color:'blue',textAlign:"left"}}>Total bayar </span>
             Rp.{this.props.bayar},00
          </div>
          <input type='button' className='btn btn-primary mr-5 mt-5' value='Bayar' onClick={()=>this.BtnBayar('motor')}/>
          <div>{this.state.parkir} Jam</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Catatan= 1000/Jam
        </div>
      )
    }
  }
  onBtnMobil=()=>{
    this.setState({selecteditems:1})
    this.setState({ride:'Mobil'})
    this.setState({parkir:0})
    this.props.Pay(0)
    this.props.Jam(0)
  }
  onBtnMotor=()=>{
    this.setState({selecteditems:2})
    this.setState({ ride: 'Motor' })
    this.setState({parkir:0})
    this.props.Pay(0)
    this.props.Jam(0)
  }
  render(){
    return (
      <div>
        <Header/>
        <center>
          <h1>Aplikasi Parkir {this.state.ride} </h1>
          <input type='button' className='btn btn-outline-primary mr-5' value='MOBIL' onClick={this.onBtnMobil}/>
          <input type='button' className='btn btn-outline-primary ml-5' value='MOTOR' onClick={this.onBtnMotor}/>
          <br/>
          <br/>
          <br/>
          <br/>
          {this.printData()}          
        </center>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
      bayar :state.parkir.pay,
      parkir: state.parkir.jam
  }
}
export default connect(mapStateToProps,{Pay,Jam}) (App);
