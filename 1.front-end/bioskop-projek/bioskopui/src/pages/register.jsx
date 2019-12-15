import React, { Component } from 'react';
// import Axios from 'axios';
// import { APIURL } from '../support/ApiUrl';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { LoginSuccessAction, Loginthunk, Login_error } from './../redux/actions'
import Loader from 'react-loader-spinner'

class Register extends Component {
    state = {
        error: '',
        loading: false
    }

    onLoginClick = () => {
        var username = this.refs.username.value
        var password = this.refs.password.value
        this.props.Loginthunk(username, password)

        // this.setState({loading:true})
        // Axios.get(`${APIURL}/users?username=${username}&password=${password}`)
        // .then(res=>{
        //     if(res.data.length){
        //         localStorage.setItem('dino',res.data[0].id)
        //         this.props.LoginSuccessAction(res.data[0])
        //         // this.setState(login)
        //     }else{
        //         this.setState({error:'salah masukkan password'})
        //     }
        //     this.setState({ loading: false })
        // }).catch((err)=>{
        //     console.log(err)
        //     this.setState({loading:false})
        // })
    }

    render() {
        if (this.props.AuthLog) {
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <div className="mt-3 d-flex justify-content-center">
                    <div style={{ width: '500px', border: '1px solid black' }} className='rounded p-2'>
                        <h1>Register</h1>
                        <div className='p-1' style={{ borderBottom: '1px solid black' }}>
                            <input type='text' className='username' style={{ border: 'transparent', width: '100%', fontsize: '20px' }} ref='username' placeholder='input username' />
                        </div>
                        <div className='p-1' style={{ borderBottom: '1px solid black' }}>
                            <input type='password' className='username' style={{ border: 'transparent', width: '100%', fontsize: '20px' }} ref='password' placeholder='input password' />
                        </div>
                        {this.props.Auth.error === '' ?
                            null
                            :
                            <div className="alert alert-danger mt-2">
                                {this.props.Auth.error} <span onClick={this.props.Login_error} className='float-right font-weight-bold'>x</span>
                            </div>
                        }
                        <div className='mt-4'>
                            {this.props.Auth.loading ?
                                <Loader
                                    type="Triangle"
                                    color="#FF6969"
                                    height={100}
                                    width={100}
                                />
                                :
                                <button className='btn btn-primary' onClick={this.onLoginClick}>Login</button>
                            }
                        </div>
                        <div className='mt-2'>
                            sudah punya akun? <Link to='/login'>Login</Link> aja
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        AuthLog: state.Auth.login,
        Auth: state.Auth
    }
}

export default connect(MapStateToProps, { LoginSuccessAction, Loginthunk, Login_error })(Register);





// onClickRegister = (e) => {
//     e.preventDefault()
//     var username = this.refs.username.value;
//     var password = this.refs.password.value;
//     var repassword = this.refs.repassword.value;
//     var role = "user";
//     var newUser = { username, password, role };
//     if (username === "" || password === "" || repassword === "") {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Data Gaboleh Ada Yang Kosong!"
//         });
//     } else {
//         Axios.get(`${url}users?username=${username}`)
//             .then(res1 => {
//                 console.log(res1);
//                 if (res1.data.length === 0) {
//                     if (password !== repassword) {
//                         Swal.fire({
//                             icon: "error",
//                             title: "Oops...",
//                             text: "Password must match"
//                         });
//                     } else {
//                         Axios.post(`${url}users`, newUser)
//                             .then(res => {
//                                 Swal.fire({
//                                     icon: "success",
//                                     title: "Success!",
//                                     text: "Your are success Registered! Please Login"
//                                 });
//                                 this.setState({ kelogin: true });

//                             })
//                             .catch(err1 => {
//                                 console.log(err1);
//                             });
//                     }
//                 } else {
//                     Swal.fire({
//                         icon: "error",
//                         title: "Oops...",
//                         text: `"${username}" is not Available, Try Using Another Username :`
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }