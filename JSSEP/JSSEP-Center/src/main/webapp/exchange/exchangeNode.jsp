<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>交换节点</title>
</head>
<body>
<link  href="exchange/css/exchangeNode.css" rel="stylesheet">
<script src="exchange/js/exchangeNode.js"></script>
	<div class="panel panel-default panel-nobody" >
		<!-- toolbar -->
		<div class="table-toolbar clearfix">
		<div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
		    <button id="btn-add" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>新增</button>
		    <button id="btn-edit"  role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-pencil'></span> 修改</button>
		    <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
		</div>
		<div class="table-toolbar-search pull-right clearfix">
			<form class="form-inline clearfix">
				<ul>
					<li class="form-group">
						<span class="pull-left text-right form-label">部门名称</span>
						<select class="form-control pull-left">
							<option>公安局</option>
							<option>工商局</option>
							<option>档案局</option>
							<option>质监局</option>
						</select>
					</li>
					<li class="form-group">
						<span class="pull-left text-right form-label">部门代码</span>
						<input class="form-control pull-left"/>
					</li>
					<li class="form-group">
						<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="搜索"/>
					</li>
				</ul>
			</form>
		</div>
 		</div>
 		<!-- grid -->
		<table id="nodeGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
		<table class="page"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
		<!-- model -->
	</div>
	<div style="display: none;">
		<!-- Tab panes -->
		<div id="modelContent">
			<ul class="nav nav-tabs" role="tablist">
				<li role="presentation" class="active"><a href="#baseInfo"aria-controls="baseInfo" role="tab" data-toggle="tab">基本信息</a></li>
				<li role="presentation"><a href="#messageTrans" aria-controls="messageTrans" role="tab" data-toggle="tab">消息传输</a></li>
			</ul>
			<!-- Nav tabs -->
			<div class="tab-content">
			   <div role="tabpanel" class="tab-pane active" id="baseInfo">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">部门名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">部门代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">联系人姓名</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">联系人电话</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">联系人邮箱</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">接入时间</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">联系人邮箱</label>
							<div class="col-sm-10">
								<textarea class="form-control" rows="3"></textarea>
							</div>
						</div>
					</form>
				</div>
				<div role="tabpanel" class="tab-pane" id="messageTrans">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">消息生产队列</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">消息消费队列</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">消息发布主题</label>
							<div class="col-sm-10">
								<input type="text" class="form-control" id="deptCode">
							</div>
							
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>