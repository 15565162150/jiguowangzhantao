//页面加载   获取全部信息
$(function() {
	$.ajax({
		type: "GET", //请求方式
		url: "js/dgzr.json", //地址，就是json文件的请求路径
		dataType: "json", //数据类型可以为 text xml json  script  jsonp
		success: function(result) { 
			//返回的参数就是 action里面所有的有get和set方法的参数
			addBox(result);
		}
	});
//	$.get("item.json",function(result){
//	    result数据添加到box容器中;
//	    addBox(result);
//	});
});

function addBox(result) {
	//result是一个集合,所以需要先遍历
	$.each(result, function(index, obj) {
	
		$("#fxkw").prepend(
			"<div class='dgjx-sec'>" + 
				"<div>"+
					"<div>"+
						"<img src="+obj['url1']+"/>"+
						"<p class='p1'>"+obj['jianjie']+"</p>"+
						"<p class='p2'>"+
							"<span class='right'>"+
								"<span class='spp spp1'>"+
									"<img src="+obj['xin']+"/>"+
									"<span class='num1'>"+obj['num1']+"</span>"+
								"</span>"+
								"<span>"+
									"<img src="+obj['liao']+"/>"+
									"<span class='num2'>"+obj['num1']+"</span>"+
								"</span>"+
							"</span>"+
						"</p>"+
					"</div>"+
					"<div class='bg'></div>"+
				"</div>"+
				"<div>"+
					"<div>"+
						"<img src="+obj['url2']+"/>"+
						"<p class='p1'>"+obj['jianjie2']+"</p>"+
						"<p class='p2'>"+
							"<span class='right'>"+
								"<span class='spp spp1'>"+
									"<img src="+obj['xin']+"/>"+
									"<span class='num1'>"+obj['num1']+"</span>"+
								"</span>"+
								"<span>"+
									"<img src="+obj['liao']+"/>"+
									"<span class='num2'>"+obj['num1']+"</span>"+
								"</span>"+
							"</span>"+
						"</p>"+
					"</div>"+
					"<div class='bg'></div>"+
				"</div>"+
				"<div>"+
					"<div>"+
						"<img src="+obj['url3']+"/>"+
						"<p class='p1'>"+obj['jianjie']+"</p>"+
						"<p class='p2'>"+
							"<span class='right'>"+
								"<span class='spp spp1'>"+
									"<img src="+obj['xin']+"/>"+
									"<span class='num1'>"+obj['num1']+"</span>"+
								"</span>"+
								"<span>"+
									"<img src="+obj['liao']+"/>"+
									"<span class='num2'>"+obj['num1']+"</span>"+
								"</span>"+
							"</span>"+
						"</p>"+
					"</div>"+
					"<div class='bg'></div>"+
				"</div>"+
				"<div>"+
					"<div>"+
						"<img src="+obj['url4']+"/>"+
						"<p class='p1'>"+obj['jianjie2']+"</p>"+
						"<p class='p2'>"+
							"<span class='right'>"+
								"<span class='spp spp1'>"+
									"<img src="+obj['xin']+"/>"+
									"<span class='num1'>"+obj['num1']+"</span>"+
								"</span>"+
								"<span>"+
									"<img src="+obj['liao']+"/>"+
									"<span class='num2'>"+obj['num1']+"</span>"+
								"</span>"+
							"</span>"+
						"</p>"+
					"</div>"+
					"<div class='bg'></div>"+
				"</div>"+
			"</div>");
	});
	$("#fxkw").append(
				"<div class='djj'>"+
					"<span class='djjz'>"+
						"<img src='img/more.png'/><span>点击加载更多</span>" +
					"</span>"+
				"</div>"
			)
}