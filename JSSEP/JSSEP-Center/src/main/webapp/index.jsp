<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="cn.com.sparknet.common.config.Config"%>
<%
	String path = request.getContextPath();
	String systemName = Config.getInstance().getProperty("manage.system.name");
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
	<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><%=systemName %></title>
	<%-- <link rel="shortcut icon" type="image/x-icon" href="<%=path%>/common/img/favicon.ico" /> --%>
	<link rel="stylesheet" href="<%=path%>/common/plugins/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="<%=path%>/common/plugins/bootstrap-dialog/css/bootstrap-dialog.min.css"/>
	<link rel="stylesheet" href="<%=path%>/common/plugins/daterangepicker/css/daterangepicker.css"/>
	<link rel="stylesheet" href="<%=path%>/common/plugins/font-awesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" href="<%=path%>/common/css/style.css"/>
	<script data-main="<%=path%>/common/js/require.config" src="<%=path%>/common/plugins/requirejs/require.min.js"></script>
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
     		<script src="<%=path%>/common/plugins/bootstrap/js/html5shiv.min.js"></script>
     		<script src="<%=path%>/common/plugins/bootstrap/js/respond.min.js"></script>
     		<script src="<%=path%>/common/plugins/css3-mediaqueries/css3-mediaqueries.js"></script>
   	<![endif]-->
   	
</head>
<body style="overflow-x:hidden;overflow-y:hidden">
	<header class="main-header">
    <nav class="navbar navbar-static-top">
       <img alt="" src="<%=path%>/common/img/logo.png" style="margin-left: 10px;margin-top: 7px;width: 34px;color: white;float: left;">
       <span style="display: block;float: left; margin-left: 10px;margin-top: 8px;font-size: 23px;color: white;"><%=systemName %></span>
       <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
      		<li class="li-border dropdown">
				<a href="#" class="mystyle-color" data-toggle="dropdown" style="color: white;">
					<span class="glyphicon glyphicon-search" ></span>搜索
				</a>
				<div class="dropdown-menu search-dropdown" style="margin: 1px 0 0 0;">
					<div class="input-group">
						<input type="text" class="form-control">
						<span class="input-group-btn">
		                   <button type="button" class="btn btn-default" style="width: 70px;">搜索</button>
		                </span>
					</div>
				</div>
			</li>
         	<li class="dropdown messages-menu">
	        	<a href="#" class="dropdown-toggle" data-toggle="dropdown">
	            	<i class="fa fa-envelope-o" style="color: white;"></i>
	              	<span class="label label-success">3</span>
	            </a>
	            <ul class="dropdown-menu">
	                <li class="header">您有3条新消息！</li>
	                <li>
	                	<ul class="menu">
	                 	<!-- 消息提示开始-->
		                	<li>
			                	<a href="#">
			                    	<div class="pull-left">
			                        <img src="common/img/user2-160x160.jpg" class="img-circle" alt="User Image">
			                    </div>
			                    <h4>会议通知
			                    	<small><i class="fa fa-clock-o"></i>5分钟前</small>
			                    </h4>
			                     	<p>10分钟后您有个会议需要参加！</p>
			                    </a>
		                    </li>
	                  		<!-- 消息提示结束 -->
	                  		<li>
			                    <a href="#">
			                    	<div class="pull-left">
			                        	<img src="common/img/user2-160x160.jpg" class="img-circle" alt="User Image">
			                     	 </div>
			                      <h4>
			                      	 出差通知
			                        <small><i class="fa fa-clock-o"></i>10分钟前</small>
			                      </h4>
			                      <p>2018年3月1日您需要去南京出差！</p>
			                    </a>
	                 		 </li>
			                 <li>
			                    <a href="#">
			                      <div class="pull-left">
			                        <img src="common/img/user2-160x160.jpg" class="img-circle" alt="User Image">
			                      </div>
			                      <h4>
			                                                                         待办任务
			                        <small><i class="fa fa-clock-o"></i>20分钟前</small>
			                      </h4>
			                      <p>您有5条信息需要处理！</p>
			                    </a>
			                 </li>
	                	</ul>
	              	</li>
	             	<li class="footer"><a href="#">查看所有消息</a></li>
	            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o" style="color: white;"></i>
              <span class="label label-warning">5</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">您有10条通知</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i>关于春节放假的安排
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i>资源交换总量统计
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i>2018年3月1日会议纪要
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i>您有5条信息需要处理
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i>您已修改登录密码
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">查看所有通知</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o" style="color: white;"></i>
              <span class="label label-danger">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">您有4条待办事项</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                       	设计一些按钮
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-success" style="width: 20%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">已完成20%</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                       	创建一个不错的主题
                        <small class="pull-right">40%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-info" style="width: 40%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">已完成40%</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
						我需要做的一些任务
                        <small class="pull-right">60%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-warning" style="width: 60%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">已完成60%</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                                                                         做一些翻译工作
                        <small class="pull-right">80%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-danger" style="width: 80%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">已完成80%</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">查看所有任务</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="common/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">系统管理员</span>
            </a>
           	<ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="common/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                  <p style="color: white;">系统管理员
                  	<small>应用研发部</small>
                  </p>
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
              	<div class="btn-group">
            		<button type="button" class="btn btn-default btn-user-edit">
		    			<i class="fa fa-user user-foot-button" aria-hidden="true">&nbsp;用户信息</i>
		   		 	</button>
		    		<button type="button" class="btn btn-default btn-pass-edit">
		    			<i class="fa fa-lock user-foot-button" aria-hidden="true">&nbsp;更改密码</i>
		   			</button>
		    		<button type="button" class="btn btn-default btn-login-out" id="loginout">
    					<i class="fa fa-sign-out user-foot-button" aria-hidden="true" >&nbsp;注销</i>
   		 			</button>
				</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
	<div class="down-main">
		<div class="left-main left-full">
			<div class="sidebar-fold">
				<span class="glyphicon glyphicon-menu-hamburger"></span>
			</div>
			<div class="subNavBox">
				<div class="sBox">
					<div class="subNav sublist-down">
						<i class="fa fa-book title-icon" aria-hidden="true" ></i>
						<span class="sublist-title">目录管理
							<i class="label label-success pull-right leftstyle">18</i>
						</span>
					</div>
					<ul class="navContent" style="display:block">
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />目录编目
							</div>
							<a href="#/catalogprepare">
								<span class="sublist-icon glyphicon glyphicon-plus"></span>
								<span class="sub-title">目录编目
									<i class="label label-success pull-right leftstyle" style="background: #f0ad4e">3</i>
								</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />目录注册
							</div>
							<a href="#/catalogregistration">
								<span class="sublist-icon glyphicon glyphicon-th-large"></span>
								<span class="sub-title">目录注册
									<i class="label label-success pull-right leftstyle">5</i>
								</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />目录审核
							</div>
							<a href="#/catalogcheck">
								<span class="sublist-icon glyphicon glyphicon-th"></span>
								<span class="sub-title">目录审核
									<i class="label label-success pull-right leftstyle">4</i>
								</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />目录发布
							</div>
							<a href="#/catalogrelease">
								<span class="sublist-icon glyphicon glyphicon-th-list"></span>
								<span class="sub-title">目录发布
									<i class="label label-success pull-right leftstyle">6</i>
								</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />目录维护
							</div>
							<a href="#/catalogmaintenance">
								<span class="sublist-icon glyphicon glyphicon-credit-card"></span>
								<span class="sub-title">目录维护</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />资源分类
							</div>
							<a href="#/resourceclassify">
								<span class="sublist-icon glyphicon glyphicon-align-justify"></span>
								<span class="sub-title">资源分类</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="sBox">
					<div class="subNav sublist-up">
						<i class="title-icon glyphicon glyphicon-transfer"></i>
						<span class="sublist-title">交换管理
							<i class="label label-danger pull-right leftstyle">4</i>
						</span>
					</div>
					<ul class="navContent" style="display:none">
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />交换节点
							</div>
							<a href="#/exchangenode">
								<span class="sublist-icon glyphicon glyphicon-tags"></span>
								<span class="sub-title">交换节点</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />交换资源</div>
							<a href="#/exchangeresource">
								<span class="sublist-icon glyphicon glyphicon-share-alt"></span>
								<span class="sub-title">交换资源</span>
							</a>
						</li>
						<!-- <li>
						<div class="showtitle">
								<img src="common/img/leftimg.png" />统计分析
							</div>
							<a href="#/statisticalanalysis">
								<span class="sublist-icon glyphicon glyphicon-list-alt"></span>
								<span class="sub-title">统计分析</span>
							</a>
						</li> -->
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />落地数据查询
							</div>
							<a href="#/exchangeDetailed">
								<span class="sublist-icon glyphicon glyphicon-tasks"></span>
								<span class="sub-title">落地数据查询</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />交换日志
							</div>
							<a href="#/exchangelog">
								<span class="sublist-icon glyphicon glyphicon-list"></span>
								<span class="sub-title">交换日志
									<i class="label label-danger pull-right leftstyle">4</i>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="sBox">
					<div class="subNav sublist-up">
						<i class="title-icon fa fa-cloud"></i>
						<span class="sublist-title">数据桥接
							<i class="label label-danger pull-right leftstyle">5</i>
						</span>
					</div>
					<ul class="navContent" style="display:none">
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />桥接运行
							</div>
							<a href="#/bridgerun">
								<span class="sublist-icon glyphicon glyphicon-align-justify glyphicon"></span>
								<span class="sub-title">桥接运行</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />桥接配置
							</div>
							<a href="#/bridgecnf">
								<span class="sublist-icon glyphicon glyphicon-cog"></span>
								<span class="sub-title">桥接配置</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />桥接日志
							</div>
							<a href="#/bridgelog">
								<span class="sublist-icon glyphicon glyphicon-th"></span>
								<span class="sub-title">桥接日志
									<i class="label label-danger pull-right leftstyle">5</i>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="sBox">
					<div class="subNav sublist-up">
						<i class="title-icon fa fa-television" aria-hidden="true"></i>
						<span class="sublist-title">平台管理</span>
					</div>
					<ul class="navContent" style="display:none">
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />部门管理</div>
							<a href="#/department">
								<span class="sublist-icon glyphicon glyphicon-asterisk"></span>
								<span class="sub-title">部门管理</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />用户管理</div>
							<a href="#/user">
								<span class="sublist-icon glyphicon glyphicon-user"></span>
								<span class="sub-title">用户管理</span>
							</a>
						</li>
						<li>
							<div class="showtitle">
								<img src="common/img/leftimg.png" />字典管理</div>
							<a href="#/dictionary">
								<span class="sublist-icon glyphicon glyphicon-book"></span>
								<span class="sub-title">字典管理</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="right-product my-index right-full">
			<div class="right-product-div">
				<div class="breadcrumb breadcrumb-title">
					<div id="headnavigation"></div>
					<a href="JavaScript:history.go(-1);" class="a-back">
						<i class="fa fa-arrow-left" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="后退"></i>
					</a>
					<a href="JavaScript:history.go(1);" class="a-forward">
						<i class="fa fa-arrow-right" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="前进"></i>
					</a>
					<a href="javascript:void(0)" onclick="location.reload();" class="a-refresh">
						<i class="fa fa-repeat" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="刷新"></i>
					</a>
					<a href="#/home" class="a-home">
						<i class="glyphicon glyphicon-home" data-toggle="tooltip" data-placement="bottom" title="首页"></i>
					</a>
				</div>
			</div>
			<div class="container-fluid">
				<div class="info-center" id="rightContent" style="margin:10px 0px 10px 10px;overflow-x:hidden;overflow-y:auto;"></div>
			</div>
			<!-- <div class="footer">
				<span class="footer-span">Copyright © 2012-<span id="currentDate"></span><a class="footer-spanstyle" href="http://www.sparksoft.com.cn" target="_blank"><span>江苏星网软件有限公司</span></a>&nbsp;All Rights Reserved.</span>
			</div> -->
		</div>
	</div>
	<!-- <script type="text/javascript">
	  	//页面底部年份自动获取当前年份
		window.onload = function(){
			var initializationTime=(new Date()).getTime();
		  	document.getElementById("currentDate").innerHTML=(new Date()).getFullYear();
		}
   	</script> -->
</body>
</html>
