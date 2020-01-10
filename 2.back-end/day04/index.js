// const chalk=require('chalk')

// console.log(chalk.magenta('ini talkshow'));
// console.log(chalk.blue("ini talkshow"));
// console.log(chalk.green("ini talkshow"));
// console.log(chalk.grey("ini talkshow"));

// const _= require('underscore')
// var x = [1,2,3] 
// var y = [4,5,6] 
// var z = [7,8,9] 
// var arr = [x, y, z]
// var ok = _.map (arr , _.first);
// console.log(ok)

// const chalk=require('chalk')

// console.log(chalk.bgRed('                 '))
// console.log(chalk.bgYellowBright('                 '))
// console.log(chalk.bgYellow('                 '))
// console.log(chalk.bgGreen('                 '))
// console.log(chalk.bgBlue('                 '))
// console.log(chalk.bgMagenta('                 '))

// var slug = require('slug');
// var satu = slug('NodeJS ♥-is ☢');
// var dua = slug('I <3 NodeJS');
// console.log(satu)
// console.log(dua)

// const moment = require('moment');
// var now1 = moment();
// var now2 = moment().format();
// var now3 = moment().format("ddd, hA");
// var now4 = moment().format
// ("dddd, MMMM Do YYYY, h:mm:ss a");
// console.log(now1);
// console.log(now2);
// console.log(now3);
// console.log(now4);

// const moment = require('moment');
// var w = moment([2007]).fromNow();
// var x = moment([2007, 0, 29]).fromNow(true);
// var y = moment([2007]).toNow();
// var z = moment([2007, 0, 29]).toNow(true);
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// var a = moment([2007, 2, 27]);
// var b = moment([2007, 0, 29]);
// console.log(a.to(b));
// console.log(a.to([2007, 1, 27]));
// console.log(a.to(new Date(2007, 3, 6)));
// console.log(a.to("2017-11-29"));

// const _ = require('lodash');
// console.log(_.isString(135));
// console.log(_.isString('Startup'));
// console.log(_.capitalize('GOOGLE'));
// console.log(_.upperFirst('facebook'));
// console.log(_.upperCase('alibaba'));
// console.log(_.lowerFirst('TWITTER'));
// console.log(_.lowerCase('YAHOO'));

// console.log(_.isNumber(24));
// console.log(_.isNumber('Andi'));
// console.log(_.add(100,2));
// console.log(_.subtract(48,5));
// console.log(_.multiply(2,9));
// console.log(_.divide(75,3));
// console.log(_.ceil(99.3));
// console.log(_.floor(99.3));

// const _ = require('lodash')
// var x = [1,3,2,4,3,5,4,6];
// var y = ['Andi', 1, 'Budi', 2];
// console.log(_.isArray(x));
// console.log(_.uniq(x));
// console.log(_.max(x));
// console.log(_.max(y));
// console.log(_.min(y));
// console.log(_.sum(x));
// console.log(_.reverse(y));

// const _ = require('underscore');
// var arr = [1, 2, 3]
// var x = _.map(arr, function(num){ 
// return num * 3;
// });
// console.log(x)


var http = require('http');
var fs=require('fs')
const PORT=2020
var html=fs.readFileSync('satu.html','utf8')

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);});

    server.listen(PORT);   
// buka di browser = localhost : 3000
console.log(`Server aktif. Listening port ${PORT}.`);