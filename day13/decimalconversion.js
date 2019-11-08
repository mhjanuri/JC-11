

var desimalKeBiner=(a)=> {
    let output = []
    while (a>=0) {
        output.push(a % 2) 
        a = Math.floor(a / 2)            
    }
    let biner=output.reverse().join('')
    return biner
}

// Solusi mas dino


var desimalKeHex=(a)=>{
    let output = []
    while (a>=1) {
        if (a%16==10) {
            output.push('A')
        }else if (a%16==11) {
            output.push('B')
        }else if (a%16==12) {
            output.push('C')
        }else if (a%16==13) {
            output.push('D')
        }else if (a%16==14) {
            output.push('E')
        }else if (a%16==15) {
            output.push('F')
        }else {
            output.push(a % 16)   
        }
        a = Math.floor(a / 16)
    }
    let biner=output.reverse().join('')
    return biner
}

var number=50
console.log('Bentuk Hexadecimal dari angka '+number+' adalah: '+desimalKeHex(number))
console.log('Bentuk Binary dari angka '+number+' adalah: '+desimalKeBiner(number))