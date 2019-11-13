for (var i = 0;i<a.length;i++) {
    for (j=0;j<hurufbesar.length;j++) {
        if (a[i] == hurufbesar[j]) {
            if (b=='kecil') {
                output+=hurufkecil[j]
            } else{
                output+=hurufbesar[j]
            }            
        }
        if (a[i] == hurufkecil[j]) {
            if (b == 'kecil') {
                output += hurufkecil[j]
            } else {
                output += hurufbesar[j]
            }
        }
    }
}