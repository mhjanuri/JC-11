
const repeat = (a = ['a', 'b', 'c', 'd', 'e', 'a'])=>{
    for(var i=0;i<a.length;i++){
        for (var j=1;j<a.length;j++) {
            if(a[i]==a[j]){
                return a[i]
            }
        }
    }
}

console.log(repeat())