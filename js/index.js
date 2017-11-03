$(function(){
	$(".btn").click(function(){
		
	});
	$('#myCarousel').carousel({
		interval:2000,
	});
	$(".carousel-control").css("line-height",$(".carousel-inner .item img").height()+"px");
	$(window).resize(function(){
		var lineHeight=0;
		lineHeight=$(".carousel-inner .item img").eq(0).height() || $(".carousel-inner .item img").eq(1).height() || $(".carousel-inner .item img").eq(2).height();
		console.log(lineHeight);
		$(".carousel-control").css("line-height",lineHeight+"px");
	});
	$(".tab2-text").css("margin-top",($(".tab2 img").height()-$(".tab2-text").height())/2+"px");
	$(window).resize(function(){
		$(".tab2-text").css("margin-top",($(".tab2 img").height()-$(".tab2-text").height())/2+"px");
	});
	$(".tab3-text").css("margin-top",($(".tab3 img").height()-$(".tab3-text").height())/2+"px");
	$(window).resize(function(){
		$(".tab3-text").css("margin-top",($(".tab3 img").height()-$(".tab3-text").height())/2+"px");
	});
});