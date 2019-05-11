$(function(){
	var w=$("html,body").width();
	$(".banner-a").css("width",w)
	var rmsy=null;
//热门试用
	rmsy=function(){
		var index=0;
		var width=$(".rm-sec>.rm-sec1").width();
		var move=null;
		move=function(){
			$(".rm-sec").stop().animate({left:-index*width},500)
		}
		var t=setInterval(function(){
			index++;
			index=index>2?0:index;
			move();
		},4000)
		$(".rmsy>.left").click(function(){
			index--;
			index=index<0?0:index;
			move();
		})
		$(".rmsy>.right").click(function(){
			index++;
			index=index>2?2:index;
			move();
		})
		$(".rmsy").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
			index++;
			index=index>2?0:index;
			move();
		},4000)
		})
	}
	rmsy();
	var bgjx=function(){
		$(".p2>.right").each(function(){
			$(this).children().children(".num1").text(Math.round(Math.random()*1000));
			$(this).children().children(".num2").text(Math.round(Math.random()*1000));
		})
		var flag=true;
	$(".spp").click(function(){
		var htm=$(this).children(".num1").text();
			if(flag){
				flag=false;
				htm++;
				$(this).children(".num1").text(htm);
			}else{
				flag=true;
				htm--;
				$(this).children(".num1").text(htm);
				
			}
		})
	$(".spp1").click(function(){
		if($(this).children("img").attr("src")=="img/xinRedo.png"){
			$(this).children("img").attr("src","img/xinRedh.png")
		}else{
			$(this).children("img").attr("src","img/xinRedo.png")
		}
	})
			
	}
	bgjx();
//	点击加载更多
	var dj=function(){
		var flag=true;
		$(".djjz").click(function(){
			if(flag){
				flag=false;
				$(".djj").css("margin-top","30px")
				$(".fxkw-sec").show().css("height","250px")
				$(this).children("span").text("点击收起").end().children("img").css("transform","rotate(180deg)")
			}else{
				flag=true;
				$(".djj").css("margin-top","-30px")
				$(".fxkw-sec").show().css("height","0px")
				$(this).children("span").text("点击加载更多").end().children("img").css("transform","rotate(0deg)")
			}
			
	})
	}
	dj();
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$(".back-top").show()
		}else{
			$(".back-top").hide()
		}
	})
	$(".back-top").click(function(){
		$("html,body").stop().animate({"scrollTop":"0"},500)
	})
})