<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title></title>
    <!-- Bootstrap -->
    <link href="common/css/bootstrap.min.css" rel="stylesheet">
    <link href="common/css/daterangepicker.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
		<script src="common/js/html5shiv.min.js"></script>
    	<script src="common/js/respond.min.js"></script>
    <![endif]-->
    <script src="common/js/jquery.min.js"></script>
    <script src="common/js/bootstrap.min.js"></script>
	<script src="common/js/director.min.js"></script>
	<script src="common/js/plugins/bootstrap-daterangepicker/moment.min.js"></script>
	<script src="common/js/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
	<!-- <script src="common/js/pageUtil.js"></script> -->
	<style type="text/css">
		.list-panel-heading{padding:5px 15px;height: 41px}
		.list-panel-heading-title{font-size: 15px;margin-top:4px}
		.list-panel-heading-title > span.glyphicon{margin-right: 5px}
		.list-pagination{margin: 0px}
	</style>
</head>
<body>
	<div class="panel panel-default">
		<div class="panel-body">
			<div class="panel panel-default">
				<div class="panel-heading clearfix list-panel-heading">
					<div class="pull-left panel-heading-title list-panel-heading-title">
						<span class="glyphicon glyphicon-search"></span>
						查询
					</div>
					<div class="pull-right">
						<input class="btn btn-default btn-sm" type="button" value="查询">
						<input class="btn btn-default btn-sm" type="button" value="重置">
					</div>
				</div>
			  	<div class="panel-body">
				  	<form class="form-horizontal">
				  		<div class="form-group col-sm-4">
						    <label class="control-label col-sm-3">任务名称</label>
						    <div class="col-sm-9">
						      	<input type="text" class="form-control" placeholder="任务名称">
						    </div>
				    	</div>
				    	<div class="form-group col-sm-4">
						    <label class="control-label col-sm-5">执行时间</label>
						    <div class="col-sm-7">
						      	<input type="text" class="form-control" id="reservation">
						    </div>
				    	</div>
				    	<div class="form-group col-sm-4">
						    <label class="control-label col-sm-5">执行结果</label>
						    <div class="col-sm-7">
						      	<select class="form-control">
						      		<option>正在执行</option>
						      		<option>执行成功</option>
						      		<option>执行失败</option>
						      	</select>
						    </div>
				    	</div>
					</form>
		 		</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading clearfix list-panel-heading">
					<div class="pull-left panel-heading-title list-panel-heading-title">
						<span class="glyphicon glyphicon-list"></span>
						目录列表
					</div>
					<div class="pull-right">
						<input class="btn btn-default btn-sm" type="button" value="删除">
					</div>
				</div>
			  	<div class="panel-body">
				  	<table class="table table-bordered table-striped table-hover">
				  		<thead>
						  	<tr>
								<th style="width:30px"><input type="checkbox"></th>
								<th>任务名称</th>
								<th style="width:155px">执行时间</th>
								<th style="width:80px">执行结果</th>
								<th>执行描述</th>
								<th class="text-center" style="width:100px">操作</th>
					        </tr>
				  		</thead>
				  		<tbody>
					        <tr>
					        	<td><input type="checkbox"></td>
					        	<td>任务名称1</td>
								<td>2017-10-10 12:12:12</td>
								<td class="text-center"><img src="<%=path%>/common/img/databridge/start.png" width="20px"></td>
								<td>这是一段执行描述</td>
								<td class="text-center"><a href="#" type="button" class="btn btn-link btn-xs">删除</a></td>
					        </tr>
					        <tr>
					        	<td><input type="checkbox"></td>
					        	<td>任务名称1</td>
								<td>2017-10-10 12:12:12</td>
								<td class="text-center"><img src="<%=path%>/common/img/databridge/success.png" width="20px"></td>
								<td>这是一段执行描述</td>
								<td class="text-center"><a href="#" type="button" class="btn btn-link btn-xs">删除</a></td>
					        </tr>
					        <tr>
					        	<td><input type="checkbox"></td>
					        	<td>任务名称1</td>
								<td>2017-10-10 12:12:12</td>
								<td class="text-center"><img src="<%=path%>/common/img/databridge/fail.png" width="20px"></td>
								<td>这是一段执行描述</td>
								<td class="text-center"><a href="#" type="button" class="btn btn-link btn-xs">删除</a></td>
					        </tr>
				  		</tbody>
					</table>
					<!-- <div pagination="p-new" pageNumber="1" totalNumber="15" pageSize="10" totalCount="200"></div> -->
					<div class="form-group clearfix pull-right">
						<div class="pull-left" style="padding-top:7px;margin-right: 10px;font-size: 15px">
							共100页&nbsp;&nbsp;
						</div>
				  		<select class="form-control pull-left" style="width: 151px;margin-right: 10px">
							<option>每页显示5条</option>
							<option>每页显示10条</option>
							<option>每页显示20条</option>
							<option>每页显示50条</option>
							<option>每页显示100条</option>
							<option>每页显示200条</option>
							<option>每页显示500条</option>
							<option>每页显示1000条</option>
						</select>
						<ul class="pagination list-pagination pull-left ">
						    <li class="disabled" title="首页"><a href="#"><span>&laquo;</span></a></li>
						    <li class="disabled" title="上一页"><a href="#"><span>&lsaquo;</span></a></li>
						    <li class="active"><a href="#">1</a></li>
						    <li><a href="#">2</a></li>
						    <li><a href="#">3</a></li>
						    <li><a href="#">4</a></li>
						    <li><a href="#">5</a></li>
						    <li><a href="#" title="下一页"><span>&rsaquo;</span></a></li>
						    <li><a href="#" title="末页"><span>&raquo;</span></a></li>
				  		</ul>
				  		<div class="pull-left" style="margin: 0px 10px">
				  			<div class="pull-left" style="padding-top:7px;">跳转至</div>
					  		<input type="text" class="form-control pull-left" style="width: 35px;margin: 0px 4px;padding: 0px 9px"/>
					  		<div class="pull-left" style="padding-top:7px;">页</div>
				  		</div>
					</div>
		 		</div>
			</div>
 		</div>
	</div>
</body>
<script type="text/javascript">
	$(function(){
		$("#reservation").daterangepicker({
			autoApply: true,
			locale: {
                format: 'YYYY-MM-DD'
            }
		});
	});
</script>
</html>