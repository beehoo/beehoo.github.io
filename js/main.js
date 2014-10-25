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
	var ck = 0;
	$(".blogger_img img").dblclick(function(){
		ck += 1;
		var _this = $(this);
		if(ck < 7) {
			_this.addClass("none");
			_this.siblings("img.none").removeClass("none");	
		} else {
			_this.prop("src","../images/joke.jpg");
			$("html, a").css("cursor","none");
			$(".blogger_img").addClass("shake shake-delay");
			$(".blogger_intro").text("点一两次就算了你还没完啦？！好玩嘛？！");
			$("title").html("点的好玩嘛？！");
		};				
	});

	//判断浏览器
	if($.browser.msie && $.browser.version < 9) {
		window.location.href = "/low.html";
	};

	//隐藏入口
	$("#hiddenEntrance").focus();
	$("#toHomePage").click(function(){
		if($("#hiddenEntrance").val() == "89757") {
			localStorage.door = "open";
			$(this).prop("href","../pages/tails_list.html");
		};
	});

});