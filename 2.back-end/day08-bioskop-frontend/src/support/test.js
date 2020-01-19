// onDeleteClick = (val) => {
//     Swal.fire({
//         title: "Are you sure to delete? <br/>" + val.title,
//         text: "",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.value) {
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//             Axios.delete(`${url}movies/${val.id}`, this.state.dataMovies)
//                 .then((res) => {
//                     Axios.get(`${url}movies`)
//                         .then((res) => {
//                             this.setState({ dataMovies: res.data, modaledit: false })
//                         })
//                 }).catch((err) => {
//                     console.log(err)
//                 })
//         }
//     })
// }


// const jadwalWithEmbelEmbel=(arr)=>{
//     var tempArr=[]
//     for (i=0; i < arr.length; i++) {
//         tempArr.push(arr[i]+':00 PM')
//     }
//     return tempArr
// }

// var testArr=[12,14,16,20]

// console.log(jadwalWithEmbelEmbel(testArr))








// import React, { Component } from 'react';
// import Axios from 'axios'
// import { connect } from 'react-redux'
// import { Table, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
// import { url } from '../ApiUrl/urlapi';
// import HeaderHome from '../components/header';
// import { Button } from 'react-bootstrap'
// import Numeral from 'numeral'
// import { LoginSuccessAction } from '../redux/action';
// import NotFound from './notfound'



// class Cart extends Component {
//     state = {
//         datacart: [],
//         cartData: [],
//         modaldetail: false,
//         indexdetail: 0
//     }

//     componentDidMount() {

//         Axios.get(`${url}orders?_expand=movie&userId=${this.props.UserId}&bayar=false`)
//             .then((res) => {

//                 var datacart = res.data
//                 var qtyarr = []
//                 console.log(res.data)
//                 res.data.forEach(element => {
//                     qtyarr.push(Axios.get(`${url}ordersDetails?orderId=${element.id}`))
//                 });
//                 var qtyarrfinal = []
//                 console.log(qtyarr)
//                 Axios.all(qtyarr)
//                     .then((res1) => {
//                         res1.forEach((val) => {
//                             qtyarrfinal.push(val.data)
//                         })
//                         console.log(qtyarrfinal)
//                         var datafinal = []
//                         datacart.forEach((val, index) => {
//                             datafinal.push({ ...val, qty: qtyarrfinal[index] })
//                         })
//                         console.log(datafinal)
//                         this.setState({
//                             datacart: datafinal
//                         })
//                     }).catch((err) => {

//                     })
//             }).catch((err) => {
//                 console.log(err)
//             })
//     }

//     onDetailClick

//     totalharga = () => {
//         var total = 0

//         this.state.datacart.map((val) => {
//             return total += val.totalharga
//         })

//         total = 'Rp. ' + Numeral(total).format('0,0') + ',00'
//         return total

//     }


//     onClickCheckOut = () => {
//         if (this.state.cartData.length !== 0) {
//             var data = this.state.cartData
//             var today = new Date();
//             var dd = String(today.getDate()).padStart(2, '0');
//             var mm = String(today.getMonth() + 1).padStart(2, '0');
//             var yyyy = today.getFullYear();
//             today = dd + '/' + mm + '/' + yyyy;
//             var objek = { tanggal: today, item: data }
//             var transaksicart = this.props.transaksi
//             var arr = [...transaksicart, objek]

//             Axios.post(url + 'users/' + this.props.UserId.id, { transactions: arr })
//                 .then(() => {
//                     this.setState({ cartData: [] })
//                     Axios.patch(url + 'users/' + this.props.UserId.id, { cartData: this.state.transactions })
//                         .then((res) => {
//                             this.props.OnLoginSuccess(res.data)
//                             alert('tiket sukses anda beli terimakasih')
//                         })
//                 })
//         } else {
//             alert('tidak ada tiket yang anda pesan')
//         }
//     }


//     renderCart = () => {

//         if (this.state.datacart !== null) {
//             if (this.state.datacart.length === 0) {
//                 return (<tr>
//                     <td></td>
//                     <td>Cart masih Kosong</td>
//                 </tr>)
//             }
//             return this.state.datacart.map((val, index) => {
//                 return (
//                     <tr key={index}>
//                         <td style={{ width: 100 }}>{index + 1}</td>
//                         <td style={{ width: 800 }}>{val.movie.title}</td>
//                         <td style={{ width: 100 }}>{val.jadwal}</td>
//                         <td style={{ width: 100 }}>{val.qty.length}</td>
//                         <td style={{ width: 900 }}>{'Rp. ' + Numeral(val.totalharga).format('0,0') + ',00'}</td>

//                         <td style={{ width: 100 }}><Button onClick={() => this.setState({ modaldetail: true, indexdetail: index })} variant='info'>Details</Button></td>
//                         <td style={{ width: 100 }}><Button variant='danger'>Cancel</Button></td>
//                     </tr>
//                 )
//             })
//         }
//     }
//     render() {
//         if (this.props.UserId) {
//             return (
//                 <div>

//                     <Modal centered
//                         isOpen={this.state.modaldetail}
//                         toggle={() => {
//                             this.setState({ modaldetail: false });
//                         }}
//                     >
//                         <ModalHeader>Details</ModalHeader>
//                         <ModalBody>
//                             <Table >
//                                 <tbody>
//                                     <tr>
//                                         <th>No.</th>
//                                         <th>Seat</th>

//                                     </tr>
//                                 </tbody>
//                                 <tbody>
//                                     {this.state.datacart !== null && this.state.datacart.length !== 0
//                                         ? this.state.datacart[this.state.indexdetail].qty.map((val, index) => {
//                                             return (
//                                                 <tr key={index}>
//                                                     <td>{index + 1}</td>
//                                                     <td>{"abcdefghijklmnopqrstuvwxyz".toUpperCase()[val.row] + [val.seat + 1]}</td>
//                                                 </tr>
//                                             );
//                                         })
//                                         : null}
//                                 </tbody>
//                             </Table>
//                         </ModalBody>
//                     </Modal>




//                     <HeaderHome />
//                     <center style={{ marginBottom: '50px' }}>
//                         <Table style={{
//                             width: 900
//                         }} >
//                             <thead>
//                                 <tr>
//                                     <th style={{ width: 100 }}>No.</th>
//                                     <th style={{ width: 800 }}>Title</th>
//                                     <th style={{ width: 100 }}>Jadwal</th>
//                                     <th style={{ width: 100 }}>Jumlah</th>
//                                     <th style={{ width: 800 }}>Total Harga</th>
//                                     <th style={{ width: 100 }}>Detail</th>
//                                     <th style={{ width: 100 }}>Cancel</th>

//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.renderCart()}
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td></td>
//                                     <td style={{
//                                         width: 900,
//                                         fontWeight: 'bold'
//                                     }}>Total Keseluruhan</td>

//                                     <td></td>
//                                     <td></td>
//                                     <td style={{
//                                         fontWeight: 'bold'
//                                     }}>{this.totalharga()}</td>
//                                     <td></td>
//                                 </tr>

//                             </tfoot>
//                         </Table>

//                         <Button onClick={this.onClickCheckOut} variant='dark'>Checkout</Button>
//                     </center>

//                 </div>
//             );
//         }
//         return (
//             <div>
//                 <NotFound />
//             </div>
//         )
//     }
// }

// const MapstateToprops = state => {
//     return {
//         AuthLog: state.Auth.login,
//         UserId: state.Auth.id,
//         transaksi: state.Auth.transactions
//     }
// }
// export default connect(MapstateToprops, { LoginSuccessAction })(Cart);