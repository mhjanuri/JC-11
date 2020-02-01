import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import {LoginSuccessAction} from './../redux/actions'
import Axios from 'axios';
import { APIURL,apiRealUrl } from '../support/ApiUrl';

class Register extends Component {
    state = {
        error:'',
        loading:false
    }
    onConfrimchange=()=>{
        var password=this.refs.password.value
        var confirmpassword=this.refs.confirmpassword.value
        if(password!==confirmpassword){
            this.setState({error:'confirm dan pass harus sama'})
        }else{
            this.setState({error:''})
        }
    }
    onRegisterClick=()=>{
        var username=this.refs.username.value
        var password=this.refs.password.value
        var email=this.refs.email.value
        var confirmpassword=this.refs.confirmpassword.value
        this.setState({loading:true})
        if(password!==confirmpassword){
            this.setState({error:'confirm dan pass harus sama'})
        }else{
            // cek data
            Axios.post(`${apiRealUrl}user/register`,{
                username,password,email
            })
            .then((res)=>{
                console.log(res.data)
            }).catch((err)=>{

            })
            // Axios.get(`${APIURL}users?username=${username}&password=${password}`)
            // .then(res=>{
            //     if(res.data.length){
            //         this.setState({error:'username telah terdaftar'})
            //     }else{
            //         Axios.post(`${APIURL}users`,{username,password,role: "user",email})
            //         .then((res)=>{
            //             localStorage.setItem('dino',res.data.id)
            //             this.props.LoginSuccessAction(res.data)
            //             this.setState({loading:false})
            //         }).catch((err)=>{
            //             console.log(err)
            //         })
            //     }
            // }).catch((err)=>{
            //     console.log(err)
            //     this.setState({loading:false})
            // })
        }
        //pake redux biasa codenya dibawah
    }

    render() {
        if(this.props.AuthLog){
            return <Redirect to={'/'}/>
        } 
        return (
            <div>
                <div className=' mt-3 d-flex justify-content-center'>
                    <div style={{width:'500px',border:'1px solid black'}} className='rounded p-2'>
                        <h1>Register</h1>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="text" className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='username' placeholder='username bro'/>
                        </div>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="text" className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='email' placeholder='email bro'/>
                        </div>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="password" className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='password' placeholder='pass bro'/>
                        </div>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="password" onChange={this.onConfrimchange} className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='confirmpassword' placeholder='confirm pass bro'/>
                        </div>

                        {this.state.error===''?
                            null
                            :
                            <div className="alert alert-danger mt-2">
                                {this.state.error} <span onClick={()=>this.setState({error:''})} className='float-right font-weight-bold'>X</span>
                            </div>
                    
                        }
                        <div className='mt-4'>
                            {this.props.Auth.loading?
                                <Loader
                                    type="Puff"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                />
                                :
                                <button className='btn btn-primary' onClick={this.onRegisterClick}>Register</button>
                            }
                        </div>
                        <div className='mt-2'>
                            sudah ada akun ?<Link to={'/login'}> Login </Link> aja mbak/mas
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

const MapstateToprops=(state)=>{
    return{
        AuthLog:state.Auth.login,
        Auth:state.Auth
    }
}

export default connect(MapstateToprops,{LoginSuccessAction}) (Register);