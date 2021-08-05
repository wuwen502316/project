//log in
$("#top>span").eq(1).click(function(){
	location.href="http://baidu.com"   //链接要改
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


$(".log_in_top .fr").mouseover(function(){
	$(this).css({"cursor":"pointer","text-decoration":"underline"})
})
$(".log_in_top .fr").mouseleave(function(){
	$(this).css({"text-decoration":"none"})
})
$(".log_in_right input").eq(0).blur(function(){
	var email=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	var telString=/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;//手机号
	if($(this).val()){
		if(telString.test($(this).val())||telString.test($(this).val())){
			
		}else{
			$(".keyword_div div span").eq(1).html("用户名格式不正确，请输入手机或者邮箱登录")
			$(".keyword_div div").css("display","inline-block")
		}
	}else{
		$(".keyword_div div").css("display","inline-block")
		$(".keyword_div div span").eq(1).html("请填写用户名")
	}
})
$(".log_in_right div input").click(function(){
	var num=$(this).attr("a");
	num++;
	if(num%2==0){
		$(this).removeAttr("checked");
		$(this).attr("a",num);
	}else{
		$(this).attr("a",num);
		$(this).attr("checked","checked");
	}
	
})
//忘记密码
//$(".log_in_top .forget").mouseover(function(){
//	$(this).css("text-decoration","underline")
//})
//$(".log_in_top .forget").mouseleave(function(){
//	$(this).css("text-decoration","none")
//})



//sideBar_right
$(".sideBar_right div").mouseover(function(){
	$(this).css("cursor","pointer");
	$(this).children().css("color","#0048FF");
})

$(".sideBar_right div").mouseout(function(){
	$(this).children().css("color","#666");
})
//$(".sideBar_right div").eq(0).click(function(){
//	var h=document.body.scrollTop|| document.documentElement.scrollTop;
////	$(document).animate({h:0},1000);
//	console.log(h)
//})
//$(".sideBar_right div").eq(1).mouseover(function(){
//	$(".erweima").css("display","block");
//})
//$(".sideBar_right div").eq(1).mouseout(function(){
//	$(".erweima").css("display","none");
//})
//
//$(document).scroll(function(){
//	var h=document.body.scrollTop|| document.documentElement.scrollTop;
//	if(h>300){
//		$(".sideBar_right div").eq(0).fadeIn();
//	}else{
//		$(".sideBar_right div").eq(0).fadeOut();
//	}
//	
//})