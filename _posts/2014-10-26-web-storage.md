---
layout: post
title: HTML5 Web Storage讲解
category: technology
tags: [HTML5,web,技术]
author: Beehoo
---

之前对于HTML5的本地存储功能有所了解，但却没有实际使用过。这次在做博客的过程中有一个小功能使用到了Web Storage技术。便在这里做一个简单的讲解。

首先，Web Storage其实分为 __sessionStorage__ 和 __localStorage__ 两种。它们两者的区别，sessionStorage保存的数据只在构建它们的窗口或标签页内可见，而且当你关闭数据所在的窗口时，嗯它们就挂了。而localStorage命就比较硬，即使你关闭当前窗口甚至浏览器它们也不会消失，并且localStorage里存储的数据可被同源的（包括规则、主机和端口）每个窗口或者标签页共享。当然两者的数据都是存储在浏览器里的，如果你换了个浏览器甚至主机自然就没效了。

既然是HTML5的东西自然还是要先考虑一下它的兼容性的。不过Web Storage的支持情况还是很不错的。就IE而言即使IE8也表示支持Web Storage技术，也就是说，如果你能正常看到这篇文章，那么你所用的浏览器应该都是支持的。不过为了保险起见我们还是应该去检测一下。

{% highlight js %}	
//sessionStorage
if(window.sessionStorage) {
	alert("您的浏览器支持sessionStorage！");
} else {
	alert("您的浏览器不支持sessionStorage...");
};

//localStorage
if(window.localStorage) {
	alert("您的浏览器支持localStorage！");
} else {
	alert("您的浏览器不支持localStorage...");
};
{% endhighlight %}

我们不妨通过一个简单的实例来讲解Web Storage的用法。在下方的文本框里输入你的昵称，并点击确定提交。看你的昵称是不是也显示在下方了呢？

<input id="nickname" type="text">
<button id="ws_ok">确定</button>

欢迎光临！<span id="welcome"></span>

这好像也没什么。那么我们刷新一下页面，或者关闭你当前的浏览器再打开进入这个页面，是不是依旧可以看到你的昵称呢？我们看下代码实现：

{% highlight js %}
function ws(){
	var _btn = document.getElementById("ws_ok"),
		_nick = "";
	if(localStorage.nickname) {
		document.getElementById("welcome").innerHTML = localStorage.nickname;
	};
	_btn.addEventListener("click",function(){
		_nick = document.getElementById("nickname").value;
		document.getElementById("welcome").innerHTML = _nick;
		localStorage.nickname = _nick;
	});
};
{% endhighlight %}

既然需求是即使重启浏览器也不丢失数据，那么这里自然选择localStorage而不是sessionStorage。存储的数据是键值对，可通过setItem()方法设置：

{% highlight js %}
window.localStorage.setItem("Key","Value");
{% endhighlight %}

用getItem()方法取得对应键的值：

{% highlight js %}	
window.localStorage.getItem("Key");
{% endhighlight %}

不过其实也可以不调用setItem()或getItem()方法，直接在sessionStorage或localStorage对象上设置和获取数据，再省去写window对象的话，就变成这样：

{% highlight js %}
localStorage.key = "value";
{% endhighlight %}

当点击确定键的时候，把文本框中输入的值取出作为键“nickname”的值存入localStorage，以后当页面加载的时候，就再把“nickname”对应的值取出放入页面元素里。逻辑差不多就是这样并不复杂。

除了setItem()和getItem()方法之外，其他一些常用属性和方法这里大概说明一下：

通过 __length__ 可获得目前Storage对象中键值对的数量；

__key(index)__ 方法获取指定索引值的键；

__removeItem(key)__ 删除数据项；

__clear()__ 能删除存储列表中的所有数据。

它们每一个的具体用法这里就不多介绍了。目前的浏览器基本都可以查看到sessionStorage和localStorage中的数据。以Chrome为例，F12打开开发者工具，选择“Resources”，然后左侧的菜单里就有Local Storage和Session Storage了。点击选择，便可以看到对应的数据。

![Web Storage]({{ '/images/posts/img_04.png' | prepend:site.baseurl }} "Web Storage")

