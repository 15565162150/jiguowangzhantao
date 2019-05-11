var flag=true;
$(".sec-right>.left").click(function(){
	var num=$(".num").text();
	if(flag){
		num++;
		$(this).children().children("img").attr("src","img/xinRedh.png");
		$(".num").text(num);
		flag=false;
	}else{
		num--;
		$(this).children().children("img").attr("src","img/xinRedo.png");
		$(".num").text(num);
		flag=true;
	}
})
var width=$(".bg").width()+25+25;
$(".bg").css("width",width)
var mo=function(){
	var wid=$("body").width()-1080;
$(".sec-right").css("right",wid/2)
}
mo();

$(window).resize(function(){
	mo();
})