import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { GantiPassword } from '../redux/actions/AuthActions';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { APIURL } from '../support/ApiUrl';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

class UserSetting extends Component {
    state = {
        kehome: false
    }


    componentDidMount() {
        console.log(this.props.usernamelog);
    }

    handleChangePassClick = () => {
        var passwordlama = this.refs.passwordlama.value;
        var passwordbaru = this.refs.passwordbaru.value;
        var password = this.refs.konfirmasipassword.value;
        var updatePass = {
            password,
            username: this.props.usernamelog,
            role: this.props.role
        };
        console.log(updatePass);
        if (passwordlama === "" || passwordbaru === "" || password === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password is empty!"
            });
        } else if (passwordlama === passwordbaru) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pick another new password "
            });
        } else if (passwordlama !== this.props.passuser) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Current password didn't match"
            });
        } else if (passwordbaru !== password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "New password didn't match"
            });
        } else {
            Axios.put(`${APIURL}/users/${this.props.userid}`, updatePass)
                .then(res => {
                    // console.log(res.data);
                    Swal.fire({
                        title: "Confirm change password?",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        cancelButtonText: "Cancel",
                        confirmButtonText: "Yes"
                    }).then(result => {
                        if (result.value) {
                            this.props.GantiPassword(res.data);
                            window.location.reload()
                            this.setState({ kehome: true });
                            Swal.fire({
                                title: "Your password has been updated.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };



    render() {

        if (this.state.kehome || this.props.userlog === false) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div style={{ marginBottom: '220px' }} className='container'>
                    <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>Change Password</h2>
                    <center>
                        <div className='settinguser'>
                            <Form.Group style={{ textAlign: 'center', width: '300px' }} controlId="formBasicPassword">
                                <Form.Label style={{ fontWeight: 'bold' }}>Username</Form.Label>
                                <Form.Control style={{ textAlign: 'center', width: '300px' }} type="text" defaultValue={this.props.usernamelog}
                                    ref="user" disabled />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control style={{ textAlign: 'center', width: '300px' }} type="password" ref='passwordlama' placeholder="Current Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control style={{ textAlign: 'center', width: '300px' }} type="password" ref='passwordbaru' placeholder="New Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control style={{ textAlign: 'center', width: '300px' }} type="password" ref='konfirmasipassword' placeholder="Confirm New Password" />
                            </Form.Group>


                            <Button onClick={this.handleChangePassClick} variant="danger" >Submit</Button>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
// const onOkModalClick = () => {
//     window.location.reload()
//     window.location.assign(`${URL}/`)
// }

const mapStateToProps = state => {
    return {
        usernamelog: state.Auth.username,
        userlog: state.Auth.login,
        userid: state.Auth.id,
        passuser: state.Auth.password,
        role: state.Auth.role
    };
};

export default connect(mapStateToProps, { GantiPassword })(UserSetting);

