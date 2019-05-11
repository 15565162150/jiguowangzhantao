//页面加载   获取全部信息
$(function() {
	$.ajax({
		type: "GET", //请求方式
		url: "js/foot.json", //地址，就是json文件的请求路径
		dataType: "json", //数据类型可以为 text xml json  script  jsonp
		success: function(result) { 
			//返回的参数就是 action里面所有的有get和set方法的参数
			ddd(result);
		}
	});
//	$.get("item.json",function(result){
//	    result数据添加到box容器中;
//	    addBox(result);
//	});
});

function ddd(result) {
	//result是一个集合,所以需要先遍历
	$.each(result, function(index, obj) {
	
		$(".foot").prepend(
			"<div class='f1'>"+
				"<img src="+obj['img-code']+"/>"+
			"</div>"+
			"<div class='f2'>"+
				"<img src="+obj['img-logo']+"/>"+
				"<p>"+obj['an1']+"</p>"+
				"<p>"+obj['wxt']+"</p>"+
			"</div>"+
			"<div class='f3'>"+
				"<h3>"+obj['mfsy']+"</h3>"+
				"<p>"+obj['sylc']+"</p>"+
				"<p>"+obj['tgcgl']+"</p>"+
			"</div>"+
			"<div class='f4'>"+
				"<h3>"+obj['mfsy']+"</h3>"+
				"<div class='left'>"+
					"<p>"+obj['b1']+"</p>"+
					"<p>"+obj['b2']+"</p>"+
					"<p>"+obj['b3']+"</p>"+
					"<p>"+obj['b4']+"</p>"+
					"<p>"+obj['b5']+"</p>"+
					"<p>"+obj['b6']+"</p>"+
					"<p>"+obj['b7']+"</p>"+
					"<p>"+obj['b8']+"</p>"+
				"</div>"+
				"<div class='right'>"+
					"<p>"+obj['b9']+"</p>"+
					"<p>"+obj['b10']+"</p>"+
					"<p>"+obj['b11']+"</p>"+
					"<p>"+obj['b12']+"</p>"+
					"<p>"+obj['b13']+"</p>"+
					"<p>"+obj['b14']+"</p>"+
					"<p>"+obj['b15']+"</p>"+
				"</div>"+
			"</div>"+
			"<div class='f5'>"+
				"<h3>"+obj['c1']+"</h3>"+
				"<p>"+obj['c2']+"</p>"+
				"<p>"+obj['c3']+"</p>"+
				"<p>"+obj['c4']+"</p>"+
				"<p>"+obj['c5']+"</p>"+
				"<p>"+obj['c6']+"</p>"+
			"</div>"+
			"<div class='f6'>"+
				"<h3>"+obj['c7']+"</h3>"+
				"<p>"+obj['c8']+"</p>"+
				"<p>"+obj['c9']+"</p>"+
				"<p>"+obj['c10']+"</p>"+
				"<p>"+obj['c11']+"</p>"+
			"</div>"
		);
	});
	
}