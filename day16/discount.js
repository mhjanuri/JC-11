const discount=(hargasali, discount)=>{
     return hargasali-(hargasali*(discount/100))
}
console.log(discount(10000,20))