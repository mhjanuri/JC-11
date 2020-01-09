// const nama = require('./day1')
// console.log(nama.hurufH(11))

var objekku={
    bobi:()=>{
        return [0,1,{
            fakhran:[0,1,{
                dzaky:()=>{
                    return {
                        ragiel:[0,()=>{
                            return {
                                kartika:(a)=>{
                                    return [0,1,2,'berhasil'+a]
                                }
                            }
                        }]
                    }
                }
            }]
        }]
    }
}

console.log(objekku.bobi()[2].fakhran[2].dzaky().ragiel[1]().kartika(' :p')[3])