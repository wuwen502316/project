//log in
$("#top.sf").click(function(){
	location.href="127.0.0.1/myProject/logIn.html"   //链接要改
})

//receivProvince
$(".top>span").eq(3).mouseenter(function(){
	$("#top span ul").css("display","block");
	$("span ul .selected").css({"color":"#fff","background":"blue"})
	
	//具体地址.
	$("span ul").delegate("li","mousemove",function(){
		$("span ul li[class!=selected]").css("background","white");
		this.style.background="blue";
		$("span ul li[class!=selected]").css("color","#000");
		this.style.color="#fff";
	})
	$("span ul").delegate("li","click",function(){
		$(".Province").html(this.innerHTML);
		$("#top span ul").css("display","none");
		$("#top span ul li").removeClass()
		$(this).addClass("selected");
	})
	$("span ul").delegate("li","mouseout",function(){
		$("span ul li[class!=selected]").css("color","#000")
		$("span ul li[class!=selected]").css("background","white");
	})
})
$(".top>span").eq(3).mouseleave(function(){
	$("#top span ul").css("display","none")
})

//nva 显隐
$(".top>div").eq(0).mouseenter(function(){
	$(".navigation").css({"display":"inline-block"});
	$(this).css({"display":"inline-block"});
	$(this).css({"background":"white","border-top":"none","border-left":"1px solid #aaa","border-right":"1px solid #666"})
	$(".navigation li a").mouseover(function(){
		$(this).css("color","#0048FF")
	})
	$(".navigation li a").mouseout(function(){
		$(this).css("color","")
	})
})
$(".top>div").eq(0).mouseleave(function(){
	$(".navigation").css("display","none");
	$(this).css({"background":"","border":"1px solid transparent"})
})
$(".top>div").eq(2).mouseenter(function(){
	$(this).children().children().eq(1).css({"display":"inline-block","position":"absolute","z-index":"10"});
	$(this).css({"background":"white","border-top":"none","border-left":"1px solid #aaa","border-right":"1px solid #666"})
	$(".custom_service").on("mouseover","li",function(){
		$(".custom_service").children().css("color","")
		$(this).css("color","#009CF9")
	})
})

$(".top>div").eq(2).mouseleave(function(){
	$(this).children().children().eq(1).css({"display":"none"});
	$(this).css({"background":"","border":"1px solid transparent"})
})
$(".top>div").eq(3).mouseenter(function(){
	$(this).children().children().eq(1).css({"display":"inline-block"});
	$(this).css({"background":"white","border-top":"none","border-left":"1px solid #aaa","border-right":"1px solid #666"})
})
$(".top>div").eq(3).mouseleave(function(){
	$(this).children().children().eq(1).css("display","none");
	$(this).css({"background":"","border":"1px solid transparent"})
})
$(".top>div").eq(4).mouseenter(function(){
	$(this).children().children().eq(1).css({"display":"inline-block"});
	$(this).css({"background":"white","border-top":"none","border-left":"1px solid #aaa","border-right":"1px solid #666"})
})
$(".top>div").eq(4).mouseleave(function(){
	$(this).children().children().eq(1).css("display","none");
	$(this).css({"background":"","border":"1px solid transparent"})
})

//logo_搜索框
$(".center_inp").focus(function(){
	var div1=$("<div></div>");
	div1.addClass("sreach");
	div1.html("什么也没有")
	$(".ico>.center").append(div1)
	div1.css({"width":"416px","height":"200px","background":"#fff","position":"absolute","top":"66px","left":"336px","z-index":100,"border":"2px solid #aaa","border-top":"none"})
})
$(".center_inp").blur(function(){
	$(".sreach").css("display","none")
})

//sowing_map轮播上方的导航栏

//导航栏的显隐
$(".all_product").mouseover(function(){
	$(".product").css("display","block");
	$(".product_all").css("background","rgba(255,255,255,0.7)")
})
$(".all_product").mouseleave(function(){
	$(".product").css("display","none");
	$(".product_all").css("background","rgba(255,255,255)")
})

//导航栏的详细内容的切换
$(".sm_top>div:not(.all_product)").mouseenter(function(){
	$(".sm_top>div").css("background","")
	$(this).css("background","#000000")
})
$(".sm_top>div:not(.all_product)").mouseleave(function(){
	$(this).css("background","")
})
$(".product_1").mouseenter(function(){
	$(".product_all_1>ul").css({"display":"block","z-index":"10"});
	$(this).css("background","#fff");
	$(".product_1 a").css("color","#000");
	$(".product_1 i").css("color","blue");
})
$(".product_1").parent().mouseleave(function(){
	$(".product_all>ul").css({"display":"none"});
	$(".product_1").css("background","");
	$(".product_1 a").css("color","#fff");
	$(".product_1 i").css("color","white");
})
$(".product_2").mouseenter(function(){
	$(".product_all_2>ul").css({"display":"block","z-index":"10"});
	$(this).css("background","#fff");
	$(".product_2 a").css("color","#000");
	$(".product_2 i").css("color","blue");
})
$(".product_2").parent().mouseleave(function(){
	$(".product_all>ul").css({"display":"none"});
	$(".product_2").css("background","");
	$(".product_2 a").css("color","#fff");
	$(".product_2 i").css("color","white");
})
$(".product_3").mouseenter(function(){
	$(".product_all_3>ul").css({"display":"block","z-index":"10"});
	$(this).css("background","#fff");
	$(".product_3 a").css("color","#000");
	$(".product_3 i").css("color","blue");
})
$(".product_3").parent().mouseleave(function(){
	$(".product_all>ul").css({"display":"none"});
	$(".product_3").css("background","");
	$(".product_3 a").css("color","#fff");
	$(".product_3 i").css("color","white");
})
$(".product_4").mouseenter(function(){
	$(".product_all_4>ul").css({"display":"block","z-index":"10"});
	$(this).css("background","#fff");
	$(".product_4 a").css("color","#000");
	$(".product_4 i").css("color","blue");
})
$(".product_4").parent().mouseleave(function(){
	$(".product_all>ul").css({"display":"none"});
	$(".product_4").css("background","");
	$(".product_4 a").css("color","#fff");
	$(".product_4 i").css("color","white");
})

//放大镜 MagniFying glass
var img_src=(getCookie("src"));//通过Cookie获取首页的图片信息
var img_message=(getCookie("str"));
$(".mfGlass .master_map img").attr("src",img_src);
$(".message>p").eq(0).html(img_message)//通过Cookie获取首页的商品的详细信息
$(".message .goods_price em").html(getCookie("price"))
//removeCookie("src");
//removeCookie("str");
//removeCookie("price");
//console.log(getCookie("src"),getCookie("str"),getCookie("price"))

//放大效果

//滤镜的运动
//$(".master_map").mouseover(function(e){
//	$("._glass").css("display","inline-block");
//	var x=e.clientX-$(this).offset().left;
//	var y=e.clientY-$(this).offset().top;
////	$("._glass").css({"left":x+"px","top":y+"px"})
//	$(document).mousemove(function(e){
//		X=e.clientX-x;
//		Y=e.clientY-y;
//		$("._glass").css({"left":X+"px","top":Y+"px"});
//		
//	})
//})
var flag
var x=_glass.offsetLeft;
var y=_glass.offsetTop;
master_map.onmouseenter=function(e){
//	_glass.style.display="block";
	var x1=e.clientX-x;
	var y1=e.clientY-x;
//	_glass.style.left=x1+"px";
//	_glass.style.top=y1+"px";
	
}

document.onmousemove=function(e){
	X=e.clientX-x1;
	Y=e.clientY-y1;
	_glass.style.left=X+"px";
	_glass.style.top=Y+"px";
}







for(var i=0;i<arr.length;i++){
	var option=document.createElement("option");
	s1.appendChild(option);
	option.innerHTML=arr[i].name;
}
s1.onchange=function(){
	c2.innerHTML=""
	for(var j=0;j<arr.length;){
		if(arr[j].name==s1.value){
			var len=arr[j].sub.length
			for(k=0;k<len;k++){
				var option=document.createElement("option");
				c2.appendChild(option);
				option.innerHTML=arr[j].sub[k].name;
			}
			//console.log(arr[j].sub);
		}
		j++;
	}
	c2.onchange=function(){
		var url="weather.php?city="+c2.value;
		var xhr=new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				document.write(xhr.responseText);
			}
		}
	}
}
//购买数量
$(".number button").click(function(){
	if($(this).html()=="-"){
		if($(".number input").val()<=1){
			$(".number input").val(1)
		}else{
			var vla=$(".number input").val();
			vla-=1;
			$(".number input").val(vla);
		}
		$(".pay em").html($(".number input").val()*getCookie("price"))
	}
})
$(".number button").click(function(){
	if($(this).html()=="+"){
		var vla=$(".number input").val()*1;
		vla+=1;
		$(".number input").val(vla);
	}
	$(".pay em").html($(".number input").val()*getCookie("price"))
})
//验证是否为数字
$(".number input").keyup(function(){
	var asd=$(".number input").val();
	if(/^\d+$/.test(asd)){
		console.log($(".number input").val()*getCookie("price"))
		$(".pay em").html($(".number input").val()*getCookie("price"))
	}else{
		$(".number input").val(1);
		$(".pay em").html($(".number input").val()*getCookie("price"))
	}
})
//总价
$(".pay em").html($(".number input").val()*getCookie("price"))

//sideBar_right
$(".sideBar_right div").mouseover(function(){
	$(this).css("cursor","pointer");
	$(this).children().css("color","#0048FF");
})

$(".sideBar_right div").mouseout(function(){
	$(this).children().css("color","#666");
})
$(".sideBar_right div").eq(0).click(function(){
	$("html").animate({"scrollTop":0},1000);
})
$(".sideBar_right div").eq(2).mouseover(function(){
	$(".erweima").css("display","block");
})
$(".sideBar_right div").eq(2).mouseout(function(){
	$(".erweima").css("display","none");
})

$(document).scroll(function(){
	var h=document.body.scrollTop|| document.documentElement.scrollTop;
	if(h>300){
		$(".sideBar_right div").eq(0).fadeIn();
	}else{
		$(".sideBar_right div").eq(0).fadeOut();
	}
})








