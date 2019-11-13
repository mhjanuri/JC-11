const discount=(hargaasli, discount)=>{
     return hargaasli-(hargaasli*(discount/100))
}
console.log(discount(10000,20))