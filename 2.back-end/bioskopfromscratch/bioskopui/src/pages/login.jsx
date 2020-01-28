import React, { Component } from 'react';
import Axios from 'axios';
import { URL } from '../support/Url';
import { APIURL } from '../support/ApiUrl';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {LoginSuccessAction,Login_error} from './../redux/actions'
// import { LoginSuccessAction, Loginthunk, Login_error } from './../redux/actions'

import Loader from 'react-loader-spinner'

class Login extends Component {
    state = {
        error:'',
        loading:false
    }

    onLoginClick=()=>{
        var username=this.refs.username.value 
        var password=this.refs.password.value
        // this.props.Loginthunk(username,password)
        
        // this.setState({loading:true})
        Axios.get(`${APIURL}/users?username=${username}&password=${password}`)
        .then(res=>{
            if(res.data.length){
                console.log(res.data)
                localStorage.setItem('dino',res.data[0].id)
                this.props.LoginSuccessAction(res.data[0])
                window.location.reload()
                window.location.assign(`${URL}/`)
                // this.setState(login)
            }else{
                this.setState({error:'Incorrect password'})
            }
            this.setState({ loading: false })
        }).catch((err)=>{
            console.log(err)
            this.setState({loading:false})
        })
    }

    render() {
        if (this.props.AuthLog) {
            return <Redirect to={'/'}/>
        }
        return (
            <div>
                <div className="mt-3 d-flex justify-content-center">
                    <div style={{width:'500px',border:'1px solid black'}} className='rounded p-2'>
                        <h1>Login</h1>

                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type='text' className='username' style={{border:'transparent',width:'100%',fontsize:'20px'}} ref='username' placeholder='input username' />
                        </div>

                        <div className='p-1' style={{ borderBottom: '1px solid black' }}>
                            <input type='password' className='username' style={{ border: 'transparent', width: '100%', fontsize: '20px' }} ref='password' placeholder='input password' />
                        </div>

                        {this.state.error === ''?
                            null
                            :
                            <div className="alert alert-danger mt-2">
                                {this.state.error} <span style={{cursor:'pointer'}} onClick={()=>{this.setState({error:''})}} className='float-right font-weight-bold'>x</span>
                            </div>
                        }
                        <div className='mt-4'>
                            {this.props.Auth.loading?
                                <Loader
                                    type="Puff"
                                    color="#FF6969"
                                    height={100}
                                    width={100}
                                />
                                :
                                <button className='btn btn-primary' onClick={this.onLoginClick}>Login</button>
                            }
                        </div>
                        <div className='mt-2'>
                            belum ada akun? <Link to='/register'>Register</Link> aja dulu
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        AuthLog:state.Auth.login,
        Auth:state.Auth
    }
}
 
export default connect(mapStateToProps, {LoginSuccessAction, Login_error}) (Login);
// export default connect(mapStateToProps, {LoginSuccessAction, Loginthunk, Login_error}) (Login);