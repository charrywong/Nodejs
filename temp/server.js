

var http = require('http');
var fs = require('fs');
var url = require('url');
var cheerio = require('cheerio');
var otherurl = 'http://www.blogso.cn/24d/'

function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('title').text();
	/* var tr;
	$("td").each(function () {
	if ($(this).text() == 'ID'){
	tr = $(this).parent();
	}
	});

	var score = tr.find('.living_span1').html();
	var rank = tr.find('.tdrank1').html();
	var res = "排名"+rank+"分数"+score; */
	return chapters;
}

// 创建服务器
http.createServer(function (request, response) {
	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;

	// 输出请求的文件名
	console.log("Request for " + pathname + " received.");


	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err);
			// HTTP 状态码: 404 : NOT FOUND
			// Content Type: text/plain
			response.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			// HTTP 状态码: 200 : OK
			// Content Type: text/plain
			response.writeHead(200, {
				'Content-Type': 'text/plain'
			});

			// 响应文件内容
			console.log(data);
			response.write(data.toString());
			//response.write(output.toString());
/* 			http.get(otherurl, function (res) {
				var html = '';

				res.on('data', function (data) {
					html += data;
				});
				res.on('end', function () {
					response.write(filterChapters(html));
				});

			}).on('error', function () {
				response.write("error load data");
			}); */
		}
		//  发送响应数据
		response.end();
	});
}).listen(8888);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8888/');