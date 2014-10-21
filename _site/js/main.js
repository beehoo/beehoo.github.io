$(function(){
	
	$(".content article").each(function(){
		var _this = $(this),
		_txt = _this.html().replace(/<[^>]+>/g,""),
		_n = _txt.length,
		_words = _txt.substr(0,200) + "...";
		if(_n > 200) { 
			_this.html(_words);		
		};
	});	
	
});