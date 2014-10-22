//判断浏览器
if($.browser.msie && $.browser.version < 9) {
	window.location.href = "/low.html";
};

$(function(){

	//首页文章显示截取字数
	$(".content article").each(function(){
		var _this = $(this),
		_txt = _this.html().replace(/<[^>]+>/g,""),
		_n = _txt.length,
		_words = _txt.substr(0,200) + "...";
		if(_n > 200) { 
			_this.html(_words);		
		};
	});

	//内容区最小高度
	$(".wp").css("min-height",$(window).height() - 157);

	//博主头像切换
	$(".blogger_img img").dblclick(function(){
		var _this = $(this);
		_this.addClass("none");
		_this.siblings("img.none").removeClass("none");
	});	

});