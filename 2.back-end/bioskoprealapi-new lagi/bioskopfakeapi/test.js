var INITIAL_STATE={
    id:0,
    username:'',
    password:'',
    login:false,
    error:'',
    loading:false,
    cart:0
}
var namapanjang='iya'
var databackend={
    id:1,
    username:'bobi',
    password:'1234',
}
console.log(databackend)
var dataakhirataustate={
    ...INITIAL_STATE,
    ...databackend
}
console.log({...dataakhirataustate,loading:false,error:'slaah password'})