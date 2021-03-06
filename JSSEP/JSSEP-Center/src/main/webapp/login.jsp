<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="cn.com.sparknet.common.config.Config"%>
<%@ page import="cn.com.sparknet.common.util.StringUtil"%>
<%
	String path = request.getContextPath();
	String systemName = Config.getInstance().getProperty("manage.system.name");
	String systemCaptcha =  Config.getInstance().getProperty("manage.system.captcha");
	String errorinfo = StringUtil.nullToEmpty((String) session.getAttribute("errorinfo")); 
%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!--如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><%=systemName%></title>
	<%-- <link rel="shortcut icon" type="image/x-icon" href="<%=path%>/common/img/favicon.ico" /> --%>
</head>
<body>
	<div class="login-container">
		<form id="form" method="post" action="<%=path%>/LoginController/login" >
			<!--头部内容开始-->
			<div class="head">
				<img src="<%=path%>/login/images/logo.png"/>
				<span><%=systemName %></span>
			</div>
			<!--头部内容结束-->
			<!--页面主体内容开始-->
			<div class="login-content">
				<div>
					<div class="content-left">
						<img src="<%=path%>/login/images/login-left.png" />
					</div>
					<div class="content-right">
						<div class="login-input">
							<div class="box-title">
								用户登录
							</div>
							<div class="box-input">
								<img src="<%=path%>/login/images/icon-user.png"/>
								<input id="u" name="u" type="text" onkeydown="if(event.keyCode==13){login()}" placeholder="请输入账户"/>
							</div>
							<div class="box-input">
								<img src="<%=path%>/login/images/icon-password.png"/>
								<input id="p" name="p" type="password" onkeydown="if(event.keyCode==13){login()}" placeholder="请输入密码" autocomplete="off"/>
							</div>
							<%if(systemCaptcha.equals("true")){%>
							<div class="box-input">
								<img src="<%=path%>/login/images/icon-yzm.png"/>
								<input placeholder="请输入验证码" class="yzm-left" id='c' name="c" type="text" onkeydown="if(event.keyCode==13){login()}" maxlength="5"/>
								<img id="captcha" src="<%=path%>/LoginController/getCaptcha" class="yzm-right" onclick="refreshCaptcha()" title="看不清，点击刷新" />
							</div>
							<%}%>
							<div class="box-tip">
								<div class="piaochecked" style="margin-left: 40px;margin-top: 27px;">
									<input id='r' name="r" type="checkbox" onfocus="this.blur()" style="display: none" />
								</div>
								<span style="font-size: 14px;margin-left: 10px;">记住我</span>
								<span class="show-tip" id="errorinfo"><%=errorinfo%></span>
							</div>
							<div class="login-button">
								<input id="button" type="button" value="登录" onclick="login()"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--页面主体内容结束-->
			<div class="foot">
				<div class="foot-content">
					<!-- <p>技术支持：江苏星网软件有限公司 </p> -->
					<p>建议使用1024*768以上分辨率进行浏览</p>
					<p>浏览器兼容：IE8+、Firefox、Google</p>
				</div>
			</div>
		</form>
	</div>
</body>
	<!--引入jquery脚本-->
	<script type="text/javascript" src="<%=path%>/common/plugins/jquery/jquery.min.js" ></script>
	<!--解决IE8，IE9不能显示placeholder -->
	<script type="text/javascript" src="<%=path%>/common/plugins/jquery-placeholder/jquery.placeholder.min.js" ></script>
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
	<!-- Util -->
	<script type="text/javascript" src="<%=path%>/login/js/Util.js"></script>
	<script type="text/javascript" src="<%=path%>/login/js/Base64.js"></script>
	<!-- Login -->
	<link rel="stylesheet" href="<%=path%>/login/css/login.css" />
	<script type="text/javascript" src="<%=path%>/login/js/index.js"></script>

</html>