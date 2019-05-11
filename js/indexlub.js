//页面加载   获取全部信息
$(function() {
	$.ajax({
		type: "GET", //请求方式
		url: "js/indexlub.json", //地址，就是json文件的请求路径
		dataType: "json", //数据类型可以为 text xml json  script  jsonp
		success: function(result) { 
			//返回的参数就是 action里面所有的有get和set方法的参数
			asd(result);
		}
	});
//	$.get("item.json",function(result){
//	    result数据添加到box容器中;
//	    addBox(result);
//	});
});

function asd(result) {

	//result是一个集合,所以需要先遍历
	$.each(result, function(index, obj) {
		$(".rm-sec1").append(
			"<div>"+
				"<img src="+obj['img']+"/>"+
				"<p class='p1'>"+obj['p1']+"</p>"+
				"<p class='p2'> <span>"+obj['p2-1']+"</span><span>"+obj['p2-2']+"</span> </p>"+
				"<p class='p3'> <span>"+obj['p3-1']+"</span><span>"+obj['p3-2']+"</span> </p>"+
				"<p class='p4'>"+obj['p4']+"</p>"+
				"<div class='small'>"+obj['small']+"</div>"+
			"</div>"
		);
			
	});
	
	var txt = '{ "sites" : [' +
		'{  "url1":"./img/re1.jpg","name":"空气净化器里面学问多得惊呆你，你选对了吗？" ,"name2":"● 苏苏" ,"url2":"./img/zan.png","url3":"./img/reply.png"},' +
		'{  "url1":"./img/re2.jpg","name":"怎么骑都不会累的智能自行车：云马 C1试骑体验" ,"name2":"● 苏苏" ,"url2":"./img/zan.png","url3":"./img/reply.png"},' +
		'{  "url1":"./img/re3.jpg","name":"声音不是最优秀，但它形音完美的结合，足够打动人心" ,"name2":"● 苏苏" ,"url2":"./img/zan.png","url3":"./img/reply.png"},' +
		'{  "url1":"./img/re4.jpg","name":"风光大片信手拈来！vivo X6Plus不只是快，还是一台拍照利器" ,"name2":"● 苏苏" ,"url2":"./img/zan.png","url3":"./img/reply.png"},'+
		'{ "name":"微博" , "url":"www.weibo.com" } ]}';
		var dataObj = eval ("(" + txt + ")");
	
	$.each(dataObj,function(idx,item){   
   //输出    
})
	
	
	
	
	
	
	
	
	
}