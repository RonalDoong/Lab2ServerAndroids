// var _cal = require('./Caculator')
// var a = 20;
// var b = 5;
// console.log('tong: '+_cal.tong(a,b));
// console.log('hieu: '+_cal.hieu(a,b));
// console.log('tich: '+_cal.tich(a,b));
// console.log('thuong: '+_cal.thuong(a,b));

var _cal = require('./Caculator')
//Add thư viện
var express = require('express');
var app = express();

app.get('/tong', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.tong(a,b);
    res.json(rs); 

});
app.get('/hieu', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.hieu(a,b);
    res.json(rs); 

});
app.get('/tich', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.tich(a,b);
    res.json(rs); 

});
app.get('/thuong', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.thuong(a,b);
    res.json(rs); 

});
app.listen(8060);  
