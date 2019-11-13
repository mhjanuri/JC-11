// s='a'
// num=s.charCodeAt(0) - 96
// console.log(num)
var url = "https://www.stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript"
// var url = "http://scratch99.com/web-development/javascript/";
var urlParts = url.replace('http://','').replace('https://','').replace('www.','').replace('.com','').split("/");
// var urlParts = url.replace('http://', '').replace('https://', '').split(/[/?#]/);
var domain = urlParts[0];
console.log(domain)
console.log(urlParts)