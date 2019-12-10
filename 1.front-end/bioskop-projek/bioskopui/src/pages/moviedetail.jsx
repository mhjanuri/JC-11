import React, { Component } from 'react';
import Axios from 'axios';
import { APIURL } from '../support/ApiUrl';
import { Modal, ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class MovieDetail extends Component {
    state = {
        datadetailfilm:{},
        traileropen:false,
        notloginyet:false,
        kelogin:false,
        belitiketok:false

    }

    componentDidMount(){
        Axios.get(`${APIURL}/movies/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({datadetailfilm:res.data})
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    onBeliTicketClick=()=>{
        if(this.props.AuthLog){
            this.setState({belitiketok:true})
        }else{
            this.setState({notloginyet:true})
        }
    }


    render() {
        if(this.state.kelogin){
            return <Redirect to={'/login'} />
        } 
        return (
            <div>
                <Modal isopen={this.state.traileropen} size='lg' toogle={()=>this.setState({traileropen:false})}
                 className='trailer' wrapClassName='trailer'contentClassName='trailer' > 
                    <ModalBody className='p-0 bg-transparent' >
                        <iframe width="100%" height="100%" title={this.state.datadetailfilm.title} src={this.state.datadetailfilm.trailer} 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
                        </iframe>
                    </ModalBody>
                </Modal>
                <div className="row p-3">
                    <div className="col md-5">
                        <img src={this.state.datadetailfilm.image} height='400' alt='film' />
                        <div className='mt-3' style={{fontSize:'30px'}}>
                            {this.state.datadetailfilm.title}
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='mt-1' >
                            Title <span className='ml-4'>:</span>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='mt-1' >
                            Sinopsis <span className='ml-4'>:</span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mt-1'>
                            {this.state.datadetailfilm.title}
                        </div>
                        <div className='mt-1'>
                            {this.state.datadetailfilm.sinopsis}
                        </div>
                        <div className='mt-3'>
                            <button className='mr-3 btn btn-primary' >Beli Tiket</button>
                            <button className='mr-3 btn btn-outline-warning' onClick={()=>this.setState({traileropen:true})} >Trailer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MapStateToProps=(state)=>{
    return {
        AuthLog:state.Auth.login
    }
}
 
export default connect(MapStateToProps) (MovieDetail);