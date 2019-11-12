const getdomain=(url)=>{
    return (url.replace('http://', '').replace('https://', '').replace('www.', '').replace('.com', '').split("/"))[0]
}
console.log(getdomain('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_replace2'))
console.log(getdomain('https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript'))
console.log(getdomain('https://github.com/hendrijanuri/hello-world'))
console.log(getdomain('http://www.zombie-bites.com'))
console.log(getdomain('http://www.cnet.com'))