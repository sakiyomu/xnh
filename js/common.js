$(document).ready(function(){
	
	
	var windH = $(document).height();
	$("#wrapper").height(windH);
	
	
	$('#timer').flipcountdown({
		size:'sm',
		beforeDateTime:'2/8/2016 00:00:00',
		callback:function(){
			$(".cd").fadeOut(3000).css("display","none");
			$("#xnh").fadeIn(3000).css("display","block");
			
			
			setTimeout(function(){
				$(".w1").addClass("rubberBand");
			}, 1000);
			setTimeout(function(){
				$(".w2").addClass("rubberBand");
			}, 2000);
			setTimeout(function(){
				$(".w3").addClass("rollIn");
			}, 3000);
			setTimeout(function(){
				$(".w4 img").addClass("shake-opacity");
				setInterval(function(){
					$(".w4 img").toggleClass("shake-opacity");
				}, 2000);
			}, 3500);
			setTimeout(function(){
				$(".w3").removeClass("rollIn").addClass("tada").css("opacity","1");
				setInterval(function(){
					$(".w3").toggleClass("tada");
					$('#play-btn').click();
				}, 2000);
				$('#play-btn').click();
			}, 4000);
			setTimeout(function(){
				$(".w3").addClass("grow");
			}, 4000);
			setTimeout(function(){
				$(".logo").addClass("bounceInDown");
			}, 5000);
			setTimeout(function(){
				$(".w5").addClass("swing").css("opacity","1");
			}, 7000);
			
			
			return false;
		}
	});
	
	
});




