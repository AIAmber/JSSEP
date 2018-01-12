<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>江苏省政务信息资源共享交互平台主页</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
	<title></title>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="common/js/jquery.min.js"></script>
	<!-- Bootstrap -->
	<link href="common/css/bootstrap.min.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
   	<script src="common/js/html5shiv.min.js"></script>
    	<script src="common/js/respond.min.js"></script>
 	 <![endif]-->
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="common/js/bootstrap.min.js"></script>
	<script src="common/js/director.min.js"></script>
	<script src="common/js/router.js"></script>
	<style>
		.setborder {
			border: 5px solid red;
		}
	</style>
</head>
<body>
	<!--头部开始-->
	<div style="height: 50px;background-color: #3671CF;">
		<span style="margin-top: auto;margin-bottom: auto;">江苏省政务信息资源共享交互平台</span>
	</div>
	<!--头部开始-->
	<!--左侧开始-->
	<div class="row" style="width: 100%">
		<div class="col-md-2">
			<div class="panel-group table-responsive" role="tablist">
				<div class="panel panel-primary leftMenu">
					<!-- 利用data-target指定要折叠的分组列表 -->
					<!--目录管理开始-->
					<div class="panel-heading" id="collapseListGroupHeading1" data-toggle="collapse" data-target="#collapseListGroup1" role="tab">
						<h4 class="panel-title">目录管理
							<span class="glyphicon glyphicon-chevron-up right"></span>
             			</h4>
					</div>
					<!-- .panel-collapse和.collapse标明折叠元素 .in表示要显示出来 -->
					<div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
						<ul class="list-group">
							<li class="list-group-item">
								<!-- 利用data-target指定URL -->
								<a id="catalogprepare" href="#/catalogprepare" onclick="addcss(this)">目录编目</a>
							</li>
							<li class="list-group-item">
								<a id="catalogregistration" href="#/catalogregistration" onclick="addcss(this)">目录注册</a>
							</li>
							<li class="list-group-item">
								<a id="catalogmaintenance" href="#/catalogmaintenance" onclick="addcss(this)">目录维护</a>
							</li>
						</ul>
					</div>
				</div>
				<!--目录管理结束-->
				<!--交换管理开始-->
				<div class="panel-heading" id="collapseListGroupHeading1" data-toggle="collapse" data-target="#collapseListGroup1" role="tab">
						<h4 class="panel-title">交换管理
							<span class="glyphicon glyphicon-chevron-up right"></span>
            			</h4>
					</div>
					<!-- .panel-collapse和.collapse标明折叠元素 .in表示要显示出来 -->
					<div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
						<ul class="list-group">
							<li class="list-group-item">
								<a id="statisticalanalysis" href="#/statisticalanalysis" onclick="addcss(this)">统计分析</a>
							</li>
							<li class="list-group-item">
								<a id="exchangelog" href="#/exchangelog" onclick="addcss(this)">交换日志</a>
							</li>
						</ul>
					</div>
				<!--交换管理结束-->
				<!--平台管理开始-->
				<div class="panel-heading" id="collapseListGroupHeading1" data-toggle="collapse" data-target="#collapseListGroup1" role="tab">
						<h4 class="panel-title">数据桥接
						<span class="glyphicon glyphicon-chevron-up right">
						</span>
            		 </h4>
					</div>
					<!-- .panel-collapse和.collapse标明折叠元素 .in表示要显示出来 -->
					<div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
						<ul class="list-group">
							<li class="list-group-item">
								<!-- 利用data-target指定URL -->
								<a id="bridgerun" href="#/bridgerun" onclick="addcss(this)">桥接运行</a>
							</li>
							<li class="list-group-item">
								<!-- 利用data-target指定URL -->
								<a id="bridgerun" href="#/bridgecnf" onclick="addcss(this)">桥接配置</a>
							</li>
							<li class="list-group-item">
								<a id="bridgelog" href="#/bridgelog" onclick="addcss(this)">桥接日志</a>
							</li>
						</ul>
					</div>
				<!--平台管理结束-->
			</div>
		</div>
		<!--左侧结束-->
		<!-- 右侧开始 -->
		<div class="col-md-10" id="rightContent">
		<!-- 右侧 -->
		</div>
		<!-- 右侧结束 -->
	</div>
</body>
</html>