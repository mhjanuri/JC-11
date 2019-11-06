// var sex2 = (x) => {
//     document.getElementById('klikini').value = x
// }
// var klik = (y) => {
//     var nama = document.getElementById('nama').value
//     var usia = document.getElementById('umur').value
//     document.getElementsByTagName('h2')[0].innerHTML = `Nama : ${nama}`
//     document.getElementsByTagName('h2')[1].innerHTML = `Usia : ${usia}`
//     document.getElementsByTagName('h2')[2].innerHTML = `Jenis Kelamin : ${y}`
// }

var onNameChange=()=>{
    if (document.getElementById('nama').value!=='') {
        document.getElementsByTagName('h5')[0].innerHTML = 'nama udah diisi'
    } else {
        document.getElementsByTagName('h5')[0].innerHTML = 'harap diisi'
    }
}
const onBtnResClick=()=>{
    var nama=document.getElementById('nama').value
    var usia=document.getElementById('usia').value
    var Kelamin=''
    if(document.getElementsByName('sex')[0].checked) {
        kelamin='Pria'
    }else if(document.getElementsByName('sex')[1].checked){
        kelamin='Wanita'
    }
    if (nama&&usia&&kelamin)
    document.getElementsByTagName('h5')[1].innerHTML=`nama ${nama}<br>usia ${usia}<br>${kelamin}`
    document.getElementsByTagName('h5')[0].innerHTML=``
    document.getElementById('nama').value=''
    document.getElementById('nama').value=''

}