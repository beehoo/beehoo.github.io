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
		window.location.href = "pages/low.html";
	};

	//隐藏入口
	$("#hiddenEntrance").focus();
	$("#toHomePage").click(function(){
		if($("#hiddenEntrance").val() == "89757") {
			localStorage.door = "open";
			$(this).prop("href","../pages/tails_list.html");
		};
	});

	//为博文里的链接都加上_target属性
	$(".post_content a").prop("target","_blank");

	//判断是否存在上一篇或下一篇日志
	$(".blog-prev-next a").each(function(){
		var _this = $(this);
		if(_this.text() == "") {
			_this.text("无").prop("href","javascript:;");
		};
	});

	//web storage示例代码
	if($("#ws_ok").length) {
		ws();
	};

	//手机兼容性临时调整
	if($(window).width() < 1000) {
		$("code").html("哎哟。。手机浏览无法查看代码哦");
		$(".post_share, .ds-thread").remove();
		$(".logo").prop("href","javascript:;");
	}

});

function ws(){
	var _btn = document.getElementById("ws_ok"),
		_nick = "";
	if(window.localStorage) {
		if(localStorage.nickname) {
			document.getElementById("welcome").innerHTML = localStorage.nickname;
		};
		_btn.addEventListener("click",function(){
			_nick = document.getElementById("nickname").value;
			document.getElementById("welcome").innerHTML = _nick;
			localStorage.nickname = _nick;
		});
	} else {
		alert("您的浏览器不支持localStorage..");
	};
};