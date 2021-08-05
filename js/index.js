

//log in
$("#top.sf").click(function(){
	location.href="127.0.0.1/myProject/logIn.html"   //链接要改
})
var _city=getCookie("city");
$(".Province").html(_city);
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
		setCookie("city",this.innerHTML);
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
$(".shopping_cart").click(function(){
	location.href="shoppingCart.html"
})


//sm轮播图


var ind=1;

$(".span_btn span").eq(ind-1).css({"background":"blue"})
$(document).ready(function(){
	function rollOne(){
		var sm_left=-1440*ind;
		for(i=0;i<$(".span_btn span").length;i++){
			$(".span_btn span").eq(i).css("background","")
		}
		ind++;
		if(ind==7){
			$(".sm").animate({left:sm_left},1000,"linear",function(){
				$(".sm").css("left",0)
			});
			ind=1;
			$(".span_btn span").eq(ind-1).css({"background":"blue"})
		}else{
			$(".sm").animate({left:sm_left},1000,"linear");
			$(".span_btn span").eq(ind-1).css({"background":"blue"})
		}
	}
	var startRollOne=setInterval(rollOne,5000);
	$(".span_btn").on("click","span",function(){
		for(i=0;i<$(".span_btn span").length;i++){
			$(".span_btn span").eq(i).css("background","")
		}
		clearInterval(startRollOne);
		ind=$(this).index();
		var sm_left=-1440*ind;
		$(".span_btn span").eq(ind).css({"background":"blue"})
		$(".sm").animate({left:sm_left},1000,"linear");
	})
	$(".sm").mouseover(function(){
		clearInterval(startRollOne)
	})
	$(".sm").mouseout(function(){
		startRollOne=setInterval(rollOne,5000);
	})
})

//product_detail商品导航

//秒杀日期


//秒杀日期下方的边框
$(".seckill_data>div").mouseover(function(){
	$(".seckill_data>div").css("border-bottom","");
	$(this).css("border-bottom","5px solid red");
})
//$(".seckill_data>div").mouseout(function(){
//	$(this).css("border-bottom","")
//})


//秒杀日期及详情内容

function ti(){
//function p(s) {
//  return s < 10 ? '0' + s: s;
//}
	var myDate = new Date();
	//获取当前年
	var year=myDate.getFullYear();
	//获取当前月
	var month=myDate.getMonth()+1;
	//获取当前日
	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();
	var second_1=Date.parse(year+"/"+month+"/"+(date+1)+" "+"10:0:0");
	var second_2=Date.parse(year+"/"+month+"/"+date+" "+h+":"+m+":"+s);
	var second_3=second_1-second_2;
	var sh=parseInt(second_3/(1000*3600));//剩余小时数
	var sm=parseInt(second_3%(1000*3600)/(1000*60));//剩余分钟数
	var ss=parseInt(second_3%(1000*3600)%(1000*60)/1000);//剩余秒数
	if(sm<10){
		sm="0"+sm;
	}
	if(ss<10){
		ss="0"+ss;
	}
	//console.log(second_1,second_2,second_3,sh,sm,ss);
	if(sh>=24){
		sh-=24;
		$(".today").html(month+"月"+(date-1)+"日");
		$(".tomorrow").html(month+"月"+(date)+"日");
		$(".acquired").html(month+"月"+(date+1)+"日");
	}else{
		$(".today").html(month+"月"+date+"日");
		$(".tomorrow").html(month+"月"+(date+1)+"日");
		$(".acquired").html(month+"月"+(date+2)+"日");
	}
	$(".hms").html(sh+":"+sm+":"+ss);
	$(".h").html(sh);
	$(".m").html(sm);
	$(".s").html(ss);
}
var timer_1=setInterval(ti,1000)
$(".instruction a").mouseover(function(){
	$(this).css({"color":"yellow","border":"1px solid #ff0"})
})
$(".instruction a").mouseout(function(){
	$(this).css({"color":"","border":""})
})


//立即秒杀部分
$(".seckill_data>div").eq(0).mouseover(function(){
	$(".goods_img_1>img").attr('src','img/b61-565.jpg');
	$(".goods_img_2>img").attr('src','img/b61-565.jpg');
	$(".goods_img_3>img").attr('src','img/b61-565.jpg');
	$(".sel").html("立即抢购").css("background","#d50000");
	var str_1=$(".today").html().charAt(0);
	var str_2=$(".today").html().substring(2,4);
	$("._data .mooth").html(str_1);
	$("._data .data").html(str_2);
	$("._data ._visible").css("display","none");
	$("._data ._hidden").css("display","inline-block");
	
})
$(".seckill_data>div").eq(1).mouseover(function(){
	
	$(".goods_img_1>img").attr('src','img/tixudao.jpg');
	$(".goods_img_2>img").attr('src','img/tixudao.jpg');
	$(".goods_img_3>img").attr('src','img/tixudao.jpg');
	$(".sel").html("即将开始").css("background","#666");
	$(".sy").html("即将开始");
	$(".h").html();
	var str_1=$(".tomorrow").html().charAt(0);
	var str_2=$(".tomorrow").html().substring(2,4);
	$("._data .mooth").html(str_1);
	$("._data .data").html(str_2);
	$("._data ._hidden").css("display","none");
	$("._data ._visible").css("display","inline-block");
})
$(".seckill_data>div").eq(2).mouseover(function(){
	$(".goods_img_1>img").attr('src','img/13.jpg');
	$(".goods_img_2>img").attr('src','img/13.jpg');
	$(".goods_img_3>img").attr('src','img/13.jpg');
	$(".sel").html("即将开始").css("background","#666");
	var str_1=$(".acquired").html().charAt(0);
	var str_2=$(".acquired").html().substring(2,4);
	$("._data .mooth").html(str_1);
	$("._data .data").html(str_2);
	$("._data ._hidden").css("display","none");
	$("._data ._visible").css("display","inline-block");
})

//precent百分比条



//goods_kinds商品种类
// $(".goods_kinds_content ul>li").mouseover(function(){
// 	$(this).css({"position":"relative","top":"-2px","box-shadow":"0 0px 5px 5px #ddd"})
// })
// $(".goods_kinds_content ul>li").mouseout(function(){
// 	$(this).css({"position":"","top":"","box-shadow":""})
// })
$(".goods_kinds_content ul>li").click(function(){
//	console.log( $(this).children().children().eq(0).attr("src") );
	var imgs=$(this).children().children().eq(0).attr("src");
	// $(this).children().eq(0).attr("href","http://127.0.0.1/myProject/detailed_information.html");
	var strings=$(this).children().children().eq(1).html();
	
	setCookie("src",imgs);
	setCookie("str",strings);
	setCookie("price",$(this).children().children().eq(3).children().html())
})

//sideBar_left侧边栏
$(document).scroll(function(e){
	var h=document.body.scrollTop|| document.documentElement.scrollTop;
	if(h>500&&h<5300){
		$(".sideBar_left").fadeIn();
	}
	else{
		$(".sideBar_left").fadeOut();
	}
})


$(".sideBar_left ul").on("mouseover","li",function(){
	$(this).css("background","#0000FF");
	$(this).children().children().html("手机");
	$(this).children().children().css({"font-size":"12px","color":"#fff"});
	$(this).children().children().removeClass()
})
$(".sideBar_left ul").on("mouseout","li",function(){
	$(this).css("background","");
	$(this).children().children().html("");
	$(this).children().children().addClass("icon-shouji  iconfont");
	$(this).children().children().css({"font-size":"26px","color":"#666"});
})
//sideBar_right
// $(".sideBar_right div").mouseover(function(){
// 	$(this).css("cursor","pointer");
// 	$(this).children().css("color","#0048FF");
// })

// $(".sideBar_right div").mouseout(function(){
// 	$(this).children().css("color","#666");
// })
$(".sideBar_right div").eq(0).click(function(){
	$("html").animate({"scrollTop":0},300);
})
// $(".sideBar_right div").eq(2).mouseover(function(){
// 	$(".erweima").css("display","block");
// })
// $(".sideBar_right div").eq(2).mouseout(function(){
// 	$(".erweima").css("display","none");
// })

$(document).scroll(function(){
	var h=document.body.scrollTop || document.documentElement.scrollTop;
	if(h>300){
		$(".sideBar_right div").eq(0).fadeIn();
	}else{
		$(".sideBar_right div").eq(0).fadeOut();
	}
	
})

// $(".shopping_car").click(function(){
// 	location.href="shoppingCart.html"
// })


