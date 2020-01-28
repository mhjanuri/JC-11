import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import {APIURL} from './../support/ApiUrl'
import {Table,ModalHeader,ModalBody,ModalFooter,Modal} from 'reactstrap'
import Numeral from 'numeral'

class History extends Component{
    state={
        datahistory:[],
        indexdetail:0,
        modaldetail:false
    }
    
    componentDidMount(){
        Axios.get(`${APIURL}transactions?userId=${this.props.UserId}`)
        .then((res)=>{
            var detail=[]
            res.data.forEach(element => {
                detail.push(Axios.get(`${APIURL}transactionsDetails?&transactionId=${element.id}`))
            });
            Axios.all(detail)
            .then((res1)=>{
                var detailfinal=[]
                res1.forEach((val)=>{
                    detailfinal.push(val.data)
                })
                var datafinal=[]
                res.data.forEach((val,index)=>{
                    datafinal.push({...val,detail:detailfinal[index]})
                })
                console.log(datafinal)
                this.setState({datahistory:datafinal})

            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            
        })
    }
    renderHistory=()=>{
        if(this.state.datahistory.length===0){
            return (<tr>
                <td>anda belum pernah membeli apa2</td>
            </tr>)
        }
        return this.state.datahistory.map((val,index)=>{
            return(
                <tr key={index}>
                    <td style={{width:100}}>{index+1}</td>
                    <td style={{width:100}}>{val.tanggal}</td>
                    <td style={{width:100}}>{'Rp.'+Numeral(val.totalharga).format('0,0.00') }</td>
                    <td style={{width:100}}><button className='btn btn-primary ' onClick={()=>this.setState({ indexdetail:index,modaldetail:true})}>Detail</button></td>
                </tr>
            )
        })
    
    }
    render(){
        if(this.props.UserId){
            return(
                <div>
                    <Modal isOpen={this.state.modaldetail}  toggle={()=>this.setState({modaldetail:false})}>
                        <ModalHeader>
                            Details
                        </ModalHeader>
                        <ModalBody>
                            <Table>
                            <thead>
                                <tr>
                                    <th>
                                        No.
                                    </th>
                                    <th>
                                        Judul film
                                    </th>
                                    <th>
                                        jumlah tiket
                                    </th>
                                    <th>
                                        Harga
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.datahistory.length?
                                    this.state.datahistory[this.state.indexdetail].detail.map((val,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{val.titlefilm}</td>
                                                <td>{val.qty}</td>
                                                <td>{'Rp.'+Numeral(val.qty*25000).format('0,0.00') }</td>
                                            </tr>
                                        )
                                    })
                                    :
                                    null
                                }
                            </tbody>
                            </Table>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-primary' onClick={()=>this.setState({modaldetail:false})}>Close</button>
                        </ModalFooter>
                    </Modal>
                    <center>
                        <Table style={{width:600}}>
                            <thead>
                                <tr>
                                    <th style={{width:100}}>No.</th>
                                    <th style={{width:100}}>Tanggal</th>
                                    <th style={{width:100}}>Total Harga</th>
                                    <th style={{width:100}}>Rincian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderHistory()}
                            </tbody>
                        </Table>
                    </center>
                </div>
            )
        }
        return <div>404 not found</div>
    }

}
const MapstateToprops=(state)=>{
    return{
        AuthLog:state.Auth.login,
        UserId:state.Auth.id
    }
}
export default connect(MapstateToprops) (History);