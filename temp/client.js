var http = require('http');

// 用于请求的选项
var options = {
   protocol: 'http:',
   host: 'localhost',
   port: '8888',
   path: '/index.html'  
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
// 向服务端发送请求
var req = http.request(options, callback);

//处理请求错误
//req.on('error', function(e) {
//    console.log('problem with request: ' + e);
//});

req.end();
