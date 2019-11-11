const berapatahun = (awal,persen,pendatang,target) => {
    var penduduk=awal
    var tahun=0
    do {
        penduduk+=pendatang+(penduduk*(persen/100))
        tahun ++
    } while (penduduk<target);
    return tahun+' tahun'
}
console.log(berapatahun(1000,5,50,1200))