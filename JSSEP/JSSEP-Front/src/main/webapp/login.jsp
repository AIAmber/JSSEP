<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!--如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>江苏省政务信息资源共享交换平台-登录页</title>
	<!-- 引入登陆页样式表-->
	<link rel="stylesheet" href="login/css/login.css" />
</head>
<body>
	<div class="login-container">
		<!--头部内容开始-->
		<div class="head">
			<img src="login/images/logo.png"/>
			<span>江苏省政务信息资源共享交换平台</span>
		</div>
		<!--头部内容结束-->
		<!--页面主体内容开始-->
		<div class="login-content">
			<div>
				<div class="content-left">
					<img src="login/images/login-left.png" />
				</div>
				<div class="content-right">
					<div class="login-input">
						<div class="box-title">
							用户登录
						</div>
						<div class="box-input">
							<img src="login/images/icon-user.png"/>
							<input placeholder="请输入账户"/>
							
						</div>
						<div class="box-input">
							<img src="login/images/icon-password.png"/>
							<input placeholder="请输入密码"/>
						</div>
						<div class="box-input">
							<img src="login/images/icon-yzm.png"/>
							<input placeholder="请输入验证码" class="yzm-left"/>
							<input placeholder="验证码" class="yzm-right"/>
						</div>
						<div class="login-button">
							<input type="button" value="登录" onclick="window.location.href='index.jsp#/home'"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--页面主体内容结束-->
		<div class="foot">
			<div class="foot-content">
				<p>技术支持：江苏星网软件有限公司 </p>
				<p>建议使用1024*768以上分辨率进行浏览</p>
				<p>浏览器兼容：IE8+、Firefox、Google</p>
			</div>
		</div>
	</div>
</body>
	<!--引入jquery脚本-->
	<script type="text/javascript" src="common/js/jquery.min.js" ></script>
	<!--解决IE8，IE9不能显示placeholder -->
	<script type="text/javascript" src="common/js/jquery.placeholder.min.js" ></script>
	<script>
		/*为支持placeholder引入参数*/
    	$('.box-input>input, textarea').placeholder();
    	$('.box-input>input, textarea').placeholder().css("color","#666");
		/*设定窗口缩放时执行相关事件*/
    	$(window, document).resize(function() {
			resize();
		}).load(function() {
			resize();
		});
		function resize(){
			//获取网页可见区域的高度
			var clientHet = document.body.clientHeight;
			//计算外部padding
			var averHeight = (clientHet - 768) / 2;
			if(averHeight < 0) {
				$("html").css("overflow", "auto");
				$(".login-container").css("padding-top", 0);
			} else {
				$(".login-container").css("padding-top", averHeight);
			}
		}
	</script>

</html>