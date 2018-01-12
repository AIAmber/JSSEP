<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
	<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>江苏省政务信息资源共享交换平台</title>
	<link rel="stylesheet" href="common/css/bootstrap.min.css" />
	<link rel="stylesheet" href="common/css/bootstrap-dialog.min.css"/>
	<link rel="stylesheet" href="common/css/daterangepicker.css"/>
	<script data-main="common/js/require.config" src="common/js/require.min.js"></script>
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
     		<script src="common/js/html5shiv.min.js"></script>
     		<script src="common/js/respond.min.js"></script>
     		<script src="commom/js/css3-mediaqueries.js"></script>
   	<![endif]-->
</head>
<body style="overflow-x:hidden;overflow-y:hidden">
	<nav class="nav navbar-default navbar-mystyle navbar-fixed-top" style="background: #3671cf">
		<div class="navbar-header" style="height: 50px;line-height: 50px;">
			<span style="display:block; font-size: 22px;">
				<img alt="" src="common/img/logo.png" style="margin-left: 10px;margin-top: -5px;width: 34px;">
				<span style="margin-left: 5px;">江苏省政务信息资源共享交换平台</span>
			</span>
 		</div>
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav pull-right">
				<li class="li-border">
					<a href="#" class="mystyle-color">
						<span class="glyphicon glyphicon-envelope"></span>
						<span class="topbar-num">0</span>
					</a>
				</li>
				<li class="li-border">
					<a href="#" class="mystyle-color">
						<span class="glyphicon glyphicon-bell"></span>
						<span class="topbar-num">0</span>
					</a>
				</li>
				<li class="li-border dropdown">
					<a href="#" class="mystyle-color" data-toggle="dropdown">
						<span class="glyphicon glyphicon-search"></span> 搜索
					</a>
					<div class="dropdown-menu search-dropdown">
						<div class="input-group">
							<input type="text" class="form-control">
							<span class="input-group-btn">
			                   <button type="button" class="btn btn-default">搜索</button>
			                </span>
						</div>
					</div>
				</li>
				<li class="dropdown li-border">
					<a href="#" class="dropdown-toggle mystyle-color" data-toggle="dropdown">系统管理员<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li>
							<a href="login.html">退出</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
	<div class="down-main">
		<div class="left-main left-full">
			<div class="sidebar-fold">
				<span class="glyphicon glyphicon-menu-hamburger"></span>
			</div>
			<div class="subNavBox">
				<div class="sBox">
					<div class="subNav sublist-down">
						<span class="title-icon glyphicon glyphicon-chevron-down"></span>
						<span class="sublist-title">目录管理</span>
					</div>
					<ul class="navContent" style="display:block">
						<li class="active">
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />目录编目
							</div>
							<a href="#/catalogprepare">
								<span class="sublist-icon glyphicon glyphicon-plus"></span>
								<span class="sub-title">目录编目</span>
							</a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />目录注册
							</div>
							<a href="#/catalogregistration">
								<span class="sublist-icon glyphicon glyphicon-th-large"></span>
								<span class="sub-title">目录注册</span>
							</a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />目录审核
							</div>
							<a href="#/catalogcheck">
								<span class="sublist-icon glyphicon glyphicon-th"></span>
								<span class="sub-title">目录审核</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />目录发布
							</div>
							<a href="#/catalogrelease">
								<span class="sublist-icon glyphicon glyphicon-th-list"></span>
								<span class="sub-title">目录发布</span>
							</a>
						</li>

						<li>
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />目录维护
							</div>
							<a href="#/catalogmaintenance">
								<span class="sublist-icon glyphicon glyphicon-credit-card"></span>
								<span class="sub-title">目录维护</span>
							</a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;">
								<img src="common/img/leftimg.png" />资源分类</div>
							<a href="#/resourceclassify">
								<span class="sublist-icon glyphicon glyphicon-align-justify"></span>
								<span class="sub-title">资源分类</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="sBox">
					<div class="subNav sublist-up">
						<span class="title-icon glyphicon glyphicon-chevron-right"></span>
						<span class="sublist-title">交换管理</span>
					</div>
					<ul class="navContent" style="display:none">
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />交换节点</div>
							<a href="#/exchangenode"><span class="sublist-icon glyphicon glyphicon-tags"></span><span class="sub-title">交换节点</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />交换资源</div>
							<a href="#/exchangeresource"><span class="sublist-icon glyphicon glyphicon-share-alt"></span><span class="sub-title">交换资源</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />统计分析</div>
							<a href="#/statisticalanalysis"><span class="sublist-icon glyphicon glyphicon-list-alt"></span><span class="sub-title">统计分析</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />交换日志</div>
							<a href="#/exchangelog"><span class="sublist-icon glyphicon glyphicon-list"></span><span class="sub-title">交换日志</span></a>
						</li>
					</ul>
				</div>
				<div class="sBox">
					<div class="subNav sublist-up">
						<span class="title-icon glyphicon glyphicon-chevron-right"></span>
						<span class="sublist-title">平台管理</span>
					</div>
					<ul class="navContent" style="display:none">
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />机构管理</div>
							<a href="#/organization"><span class="sublist-icon glyphicon glyphicon-star-empty"></span><span class="sub-title">机构管理</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />部门管理</div>
							<a href="#/department"><span class="sublist-icon glyphicon glyphicon-asterisk"></span><span class="sub-title">部门管理</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />用户管理</div>
							<a href="#/user"><span class="sublist-icon glyphicon glyphicon-user"></span><span class="sub-title">用户管理</span></a>
						</li>
						<li>
							<div class="showtitle" style="width:100px;"><img src="common/img/leftimg.png" />字典管理</div>
							<a href="#/dictionary"><span class="sublist-icon glyphicon glyphicon-book"></span><span class="sub-title">字典管理</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="right-product my-index right-full">
			<div class="breadcrumbs" style="height: 40px">
				<div class="breadcrumb">
					<span id="firstMenu" style="color: #1E90FF"></span>
					<span style="color: #1E90FF">></span>
					<span id="secondMenu" style="color: #1E90FF"></span>
				</div>
			</div>
			<div class="container-fluid">
				<div class="info-center" id="rightContent" style="margin:10px 0px 10px 10px;overflow-x:hidden;overflow-y:auto;">

				</div>
			</div>
			<div class="footer" style="height:60px;width: 100%;bottom: 0;background:#f5f5f5">
				<span style="line-height:56px; text-align:center;display:block;">Copyright © 2017<a style="text-decoration : none;color: black;" href="http://www.sparksoft.com.cn"><span>江苏星网软件有限公司</span></a>All rights reserved.</span>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">

</script>
</html>
