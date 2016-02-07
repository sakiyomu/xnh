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
	"pray/img/安产.jpg", 
	"pray/img/温柔.jpg", 
	"pray/img/喜结.jpg", 
	"pray/img/勤学.jpg", 
	"pray/img/孤独.jpg", 
	"pray/img/幸运.jpg", 
	"pray/img/自由.jpg", 
	"pray/img/断舍离.jpg", 
	"pray/img/知足.jpg", 
	"pray/img/任性.jpg", 
	"pray/img/白首.jpg", 
	"pray/img/蜜恋.jpg", 
	"pray/img/佑儿.jpg", 
	"pray/img/勇气.jpg", 
	"pray/img/利事.jpg", 
	"pray/img/旅行.jpg", 
	"pray/img/良缘.jpg", 
	"pray/img/气愈.jpg", 
	"pray/img/你谢见.jpg", 
	"pray/img/转运.jpg"
	];
	var jumpTo = urls[parseInt(Math.random() * urls.length)];
	$(".inner").css({"background":"#F6F6F6 url("+jumpTo+") no-repeat center center", "background-size":"contain"});
	//window.location = jumpTo;
}

$('.do').click(function(){
	start();
	$('#stop-btn').click();
	$('#play-btn').attr('id', 'play-false');
	$('.xnh').css('display', 'none');
});


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
	img_url: "http://xnh.betterun.cn/img/wx_thumb.png",
	image_width: 100,
	image_height: 100,
	link: 'http://xnh.betterun.cn/',
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