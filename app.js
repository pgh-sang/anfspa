require.config({
	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
	paths: {
		//参数可使用数据 加载优先级按小标从小到大顺序
		"jquery": "js/jquery-1.11.2",
		"text": "js/text",
		"backbone": "js/backbone",
		"underscore": "js/underscore",
		"css": "js/css",
		"baidu":"js/baiduTemplate",
		"swiper":"js/swiper-3.3.1.min"
	}
	//使用baseUrl设置默认路
	// baseUrl : "js"
});

require(["jquery", "backbone", "./router","baidu","swiper"], function($, Backbone){
	Backbone.history.start();
	// //点击切换图片
	var indeximg1 = ["01","02","03","04"];
	var indeximg2 = ["001","002","003","004"];
	var nav = $("footer img");
	$("footer").on("touchstart","a",function(){
		var index = $(this).parent("li").index();
		for(var i=0;i<indeximg1.length;i++){
			nav[i].src = "images/"+indeximg1[i]+".png";
		}
		 //$(this).children('div').children('img').src = "images/"+indeximg2[index]+".png";
		nav[index].src = "images/"+indeximg2[index]+".png";
	})
	//默认点击
	$("footer li:eq(0) a").trigger('touchstart');

 });




