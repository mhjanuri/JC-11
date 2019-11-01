function tanggal() {
    var a=new Date()
    var hari = ['minggu','senin','selasa','rabu','kamis','jum\'at','sabtu']
    var bulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september','oktober','november','desember']
    return (hari[a.getDay()] + ', '+a.getDate()+' '+bulan[a.getMonth()]+' '+a.getFullYear())
}

console.log(tanggal())
