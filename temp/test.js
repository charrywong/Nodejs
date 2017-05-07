var http = require('http')
var cheerio = require('cheerio')

var url = 'http://www.blogso.cn/24d/'
function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('title').text();
	/* var tr;
	$("td").each(function () {
		if ($(this).text() == 'ID')
		{
			tr = $(this).parent();
		}
	});
	
	var score = tr.find('.living_span1').html();
	var rank = tr.find('.tdrank1').html();
	var res = "排名"+rank+"分数"+score; */
	return chapters;
}

// 输出函数
function printCourseData(courseData) {
	console.log(courseData)
}

// 拿到源码，调用方法进行解析及输出
http.get(url, function (res) {
	var html = ''

		res.on('data', function (data) {
			html += data
		})

		res.on('end', function () {
			var courseData = filterChapters(html)
				printCourseData(courseData);
				http.createServer(function (request,response){
					//发送http头部
					//Http状态值：200：ok
					//内容类型：text/plain
					//
					response.writeHead(200,{'Content-Type':'text/plain'});

					//发送相应数据“hello world”
					response.end(courseData);
				}).listen(8889);
		});
}).on('error', function () {
	console.log('获取数据出错！')
});