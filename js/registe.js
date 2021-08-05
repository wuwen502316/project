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

		//form表单操作
//注册方式的选择
//form的克隆；


$(".registe_email").click(function(){
	var email=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	if($(".form").attr("a")==1){
		$(".registe_massage ul li").eq(1).css("display","none");
		$(".registe_massage ul li").eq(2).css("display","none");
		
		$("#tel p i").remove();
		var em=$("<em>邮箱作为登录账号，便于您接收订单、找回密码</em>");
		$("#tel p").append(em);
		$(".registe_tel").removeAttr("checked");
		$(".registe_email").attr("checked","checked");
		$("#tel span").html("邮箱：");
		$("#tel input").removeAttr("placeholder");
		$("#tel input").keyup(function(){
			if(email.test($("#tel input").val())){
				$("#tel p em").html("邮箱合法");
			}else{
				$("#tel p em").html("邮箱不合法");
			}
		})
//		$("#tel span").blur(function(){
//			$("#tel p i").html("邮箱的长度应在4-40之间")
//		})
		$(".form").attr("a",0)
	}
	
})

$(".registe_tel").click(function(){
	$(".registe_massage ul li").eq(1).css("display","inline-block");
	$(".registe_massage ul li").eq(2).css("display","inline-block");
	$("#tel p em").remove();
	var i=$("<i>请填写真实手机号，以便于订单信息的接收</i>");
	$("#tel p").append(i);
	$(".registe_tel").attr("checked","checked");
	$(".registe_email").removeAttr("checked");
	$("#tel span").html("手机号码：");
	$("#tel input").attr("placeholder","请输入有效的手机号码");
	$(".form").attr("a",1)
});
//手机号的验证
var telString=/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;//手机号
$("#tel input").keyup(function(){
	if(telString.test($("#tel input").val())){
        $("#tel p i").css("display","inline-block").html("可以使用");
	}else{
		$("#tel p i").css("display","inline-block").html("请输入有效手机号");
		$("#tel input").css("border","1px solid red")
	}
})
//随机生成验证码
//var word1=(Math.floor((Math.random()*26))+97).fromCharCode;
//var word2=(Math.floor((Math.random()*26))+97).fromCharCode;
//var word3=(Math.floor((Math.random()*26))+97).fromCharCode;
//var word4=(Math.floor((Math.random()*26))+97).fromCharCode;
//$(".span_").html(""+word1+word2+word3+word4)

//密码处理
function fi(){
	if($(".password_1").val()){
		if($(".password_2").val()==""){
			
		}else{
			if($(".password_2").val()==$(".password_1").val()){
			$(".keyword_2").css("display","inline-block");
			$(".keyword_2").html("密码一致")
		}else{
			$(".keyword_2").css("display","inline-block");
			$(".keyword_2").html("密码不一致")
		}
		}
	}else{
		$(".keyword_1").css("display","inline-block")
	}
}
$(".password_1").focus(function(){
	$(".keyword_1").css("display","none")
})
$(".password_1").keyup(function(){
	fi()
});

function fn(){
	if($(".password_2").val()==""){
		
	}else{
		if($(".password_2").val()==""){
			$(".keyword_2").css("display","inline-block");
			$(".keyword_2").html("不能为空")
		}else{
			if($(".password_2").val()==$(".password_1").val()){
				$(".keyword_2").css("display","inline-block");
				$(".keyword_2").html("密码一致")
			}else{
				$(".keyword_2").css("display","inline-block");
				$(".keyword_2").html("密码不一致")
			}
		}
	}
}
$(".password_2").blur(function(){
	fn()
});
$(".password_2").keyup(function(){
	fn()
});
$(".password_2").focus(function(){
	$(".keyword_2").css("display","none")
})


//跳转到登录页面
const pathName = location.pathname;
const origin = location.origin;//当前url的origin值
var basehref = "/registe.html";
const hrefs = $("a[targethref]");
for(let i=0; i<hrefs.length; i++){
	hrefs[i].href = origin+basehref+hrefs[i].getAttribute("targethref");
}
$(".form_right p a").eq(0).click(function(){
	var reslult=confirm("跳转到登录页面？");
	
	const pathName = location.pathname;
	const origin = location.origin;//当前url的origin值
	var basehref = "/registe.html";
	let href = origin+basehref+hrefs[i].getAttribute("targethref");
	if(reslult){
		$(".form_right p a").eq(0).attr("href","http://127.0.0.1:8020/my%20project/registe.html")
	}else{
		$(".form_right p a").eq(0).attr("href","")
	}
})









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
$(".sideBar_right div").eq(1).mouseover(function(){
	$(".erweima").css("display","block");
})
$(".sideBar_right div").eq(1).mouseout(function(){
	$(".erweima").css("display","none");
})



