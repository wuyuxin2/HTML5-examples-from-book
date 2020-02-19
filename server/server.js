// 导入http模块
var http = require('http');
// 开启一个监听事件。每次HTTP请求都会触发这个事件
http.createServer(function(req,res){
    res.write('<head><meta charset="utf-8"/></head>');
    res.write("nodejs服务器搭建成功");
    res.end();
}).listen(2525);
console.log("node has been started!");