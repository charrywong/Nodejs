

var http = require('http');
var fs = require('fs');
var url = require('url');
var cheerio = require('cheerio');
var url = 'http://www.blogso.cn/24d/'

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

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    });

    res.on('end', function() {
        console.log(filterChapters(html));

    });
}).on('error', function() {
    console.log('获取课程数据出错！');
});