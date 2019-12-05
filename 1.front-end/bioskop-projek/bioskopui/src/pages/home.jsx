import React, { Component } from 'react';
import Axios from 'axios'

// eslint-disable-next-line
const url='http://localhost:2000'

class Home extends Component {
    state = {
        dataMovies:[]
    }

    componentDidMount(){
        Axios.get(`${url}/movies`)
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

                <div key={index} className="col-md-3 py-5 pr-3 pl-1">
                    <div className="card kartu" style={{ width: '100%' }}>
                        <div className="gambaar1">
                            <img src={val.image} className="card-img-top kartu gambar" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <p className="card-text">{val.sinopsis}</p>
                            <a href="#" classname="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() { 
        return (
            <div className='mx-5'>
                <div class="row py-5 " style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    {this.renderMovies()}
                </div>
            </div>
        )    
    }
}
 
export default Home;