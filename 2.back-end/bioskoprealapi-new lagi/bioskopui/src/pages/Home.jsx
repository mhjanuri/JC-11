import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'
const url='http://localhost:2000/'

class Home extends Component {
    state = {
        dataMovies:[]
    }
    componentDidMount(){
        // mendapatkan data movies
        Axios.get(`${url}movies`)
        .then((res)=>{
            this.setState({dataMovies:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    renderMovies=()=>{
        return this.state.dataMovies.map((val,index)=>{
            return (
                    <div key={index}  className="col-md-3 py-5 pr-3 pl-1 ">
                        <div className="card kartu " style={{width: '100%'}}>
                            <div className="gambaar1">
                                <Link to={'/moviedetail/'+val.id}>
                                    <img src={val.image} className="card-img-top kartu gambar" alt="..." />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                            </div>
                        </div>
                    </div>
            )
        })
    }
    render() { 
        return (
            <div className=' mx-5'>
                <div className="row py-5 " style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    {this.renderMovies()}
                </div>
            </div>
          );
    }
}
 
export default Home;