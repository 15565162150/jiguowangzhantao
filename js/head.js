//页面加载   获取全部信息
$(function() {
	$.ajax({
		type: "GET", //请求方式
		url: "js/head.json", //地址，就是json文件的请求路径
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
	
		$("#sec").prepend(
			"<p>"+obj['title']+"</p>"+
			"<div class='sec-left'>"+
				"<h1>"+obj['sec-lti']+"</h1>"+
				"<p class='p1'><img src="+obj['jiet-url']+"/> 苏苏 <span class='rig'>"+obj['time']+"</span>"+"</p>"+
				"<div class='bg'></div>"+
				"<p>"+obj['introduce1']+"</p>"+
				"<img src="+obj['deta-url']+"/>"+
				"<h3>"+obj['h31']+"</h3>"+
				"<p>"+obj['introduce2']+"</p>"+
				"<img src="+obj['deta1-url']+"/>"+
				"<p>"+obj['introduce3']+"</p>"+
				"<img src="+obj['deta2-url']+"/>"+
				"<p>"+obj['introduce4']+"</p>"+
				"<h3>"+obj['question']+"</h3>"+
				"<img src="+obj['deta3-url']+"/>"+
				"<p>"+obj['anws1']+"</p>"+
				"<img src="+obj['deta4-url']+"/>"+
				"<p>"+obj['anws2']+"</p>"+
				"<img "+obj['deta5-url']+"/>"+
				"<p>"+obj['anws3']+"</p>"+
				"<p>"+obj['anws4']+"</p>"+
				"<p>"+obj['anws5']+"</p>"+
				"<h3>"+obj['tuijian']+"</h3>"+
				"<div>"+obj['pen-name']+"</div>"+
				"<img src="+obj['deta1-url']+"/>"+
				"<p>"+obj['introduce5']+"</p>"+
				"<p>"+obj['pen2-name']+"<br />"+obj['introduce6']+"</p>"+
				"<p>"+obj['pen3-name']+"<br />"+obj['introduce7']+"</p>"+
				"<p>"+obj['pen4-name']+"<br />"+obj['introduce8']+"</p>"+
				"<img src="+obj['deta5-url']+"/>"+
				"<p>"+obj['playpen']+"</p>"+
				"<div class='bot bot-s'>"+obj['pre']+"</div>"+
				"<div>"+obj['next']+"</div>"+
			"</div>"
		);
			
	});
	
}