new Image().src="decode.png";
new Image().src="234.png";
var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 3000);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 3000);
}

jumpToDecode = function(){
	var urls = [
	"img/安产.jpg", 
	"img/温柔.jpg", 
	"img/喜结.jpg", 
	"img/勤学.jpg", 
	"img/孤独.jpg", 
	"img/自由.jpg", 
	"img/断舍离.jpg", 
	"img/知足.jpg", 
	"img/任性.jpg", 
	"img/白首.jpg", 
	"img/蜜恋.jpg", 
	"img/佑儿.jpg", 
	"img/勇气.jpg", 
	"img/利事.jpg", 
	"img/旅行.jpg", 
	"img/良缘.jpg", 
	"img/气愈.jpg", 
	"img/你谢见.jpg", 
	"img/转运.jpg"
	];
	var jumpTo = urls[parseInt(Math.random() * urls.length)];
	window.location = jumpTo;
}

$('.do').click(start);

//摇一摇
$(window).on('deviceorientation', function(e) {
	if (isStarted) {
		return true;
	}
	if (!lastAcc) {
		lastAcc = e;
		return true;
	}
	var speed = e.alpha + e.beta + e.gamma - lastAcc.alpha - lastAcc.beta - lastAcc.gamma;
	if (Math.abs(speed) > 50) {
		start();
	}
	lastAcc = e;
});

//微信分享  失效了，有时间的可以根据官方公布的 JS-SDK进行开发

var shareMeta = {
	img_url: "http://pray.jekyllhy.de/thumbnail.gif",
	image_width: 100,
	image_height: 100,
	link: 'http://pray.jekyllhy.de/',
	title: "2016丙申猴，为自己摇枚新年签！",
	desc: "这是对过去的感悟和对新年的祈望，希望它能为你带来好运...",
	appid: ''
};
document.addEventListener('WeixinJSBridgeReady', function () {
	WeixinJSBridge.on('menu:share:appmessage', function(){
		WeixinJSBridge.invoke('sendAppMessage', shareMeta);
	});
	WeixinJSBridge.on('menu:share:timeline', function(){
		WeixinJSBridge.invoke('shareTimeline', shareMeta);
	});
	WeixinJSBridge.on('menu:share:weibo', function(){
		WeixinJSBridge.invoke('shareWeibo', {
			content: shareMeta.title + shareMeta.desc,
			url: shareMeta.link
		});
	});
});